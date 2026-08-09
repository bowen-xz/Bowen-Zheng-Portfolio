import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import RetryImage from '../components/RetryImage'
import profileImg from '../assets/profile.webp'
import hemiThumbnail from '../assets/hemi/thumbnail.webp'
import curlingThumbnail from '../assets/curling/thumbnail.webp'
import unionLinkThumbnail from '../assets/union-link/unionlink1.webp'
import hboThumbnail from '../assets/hbo/thumbnail.webp'
import friendventureThumbnail from '../assets/friendventure/thumbnail.webp'
import scnoThumbnail from '../assets/scno/thumbnail.webp'
import f1PeanutThumbnail from '../assets/f1-peanut/f1p1.webp'

const experiences = [
  { company: 'HBO Max\n(Warner Bros. Discovery)', title: 'Product Manager Intern', to: '/hbo-max', thumbnail: hboThumbnail },
  { company: 'Union Link Ecommerce Corp.', title: 'AI / ML Product Manager Intern', to: '/union-link', thumbnail: unionLinkThumbnail },
  { company: 'SCNO Non-Profit Consulting', title: 'Project Manager', to: '/scno', thumbnail: scnoThumbnail, thumbnailPosition: 'center 20%' },
  { company: 'Hopkins Extreme Materials Institute', title: 'Initiated Manufacturing Product', to: '/hemi', thumbnail: hemiThumbnail },
]

const projects = [
  { name: 'Curling @ Home', desc: 'Computer Vision Curling Simulator', to: '/curling', thumbnail: curlingThumbnail },
  { name: 'F1 Peanut Gallery', desc: 'AI insights from live F1', to: '/f1-peanut-gallery', thumbnail: f1PeanutThumbnail },
  { name: 'Friendventure', desc: 'Agentic Co-op Games Discovery', thumbnail: friendventureThumbnail, comingSoon: true },
]

function FlyingDot({ sourceId, targetRef, targetColor, onEarlyReveal, onLanded }) {
  const divRef = useRef(null)

  useEffect(() => {
    const source = document.getElementById(sourceId)
    const target = targetRef.current
    const dot = divRef.current
    if (!source || !target || !dot) return

    const sr = source.getBoundingClientRect()
    const startLeft = sr.left + sr.width / 2 - 10
    const startTop  = sr.top  + sr.height / 2 - 10
    const sourceColor = window.getComputedStyle(source).backgroundColor

    dot.style.left = `${startLeft}px`
    dot.style.top  = `${startTop}px`
    dot.style.backgroundColor = sourceColor
    dot.style.opacity = '1'

    requestAnimationFrame(() => {
      dot.style.transition = 'background-color 0.9s ease-out'
      dot.style.backgroundColor = targetColor
    })

    // Cache target's absolute document position once — avoids getBoundingClientRect()
    // on every rAF frame (which forces layout reflow). Use scrollY delta instead.
    const tr = target.getBoundingClientRect()
    const targetDocLeft = tr.left + window.scrollX
    const targetDocTop  = tr.top  + window.scrollY
    const targetW = tr.width
    const targetH = tr.height

    const duration = 1100
    const earlyTimer = setTimeout(onEarlyReveal, duration - 500)

    let startTime = null
    let rafId

    const easeOut = t => 1 - Math.pow(1 - t, 3)

    function animate(ts) {
      if (!startTime) startTime = ts
      const t = Math.min((ts - startTime) / duration, 1)
      const eased = easeOut(t)

      // Cheap per-frame: convert cached doc coords back to current viewport
      const curLeft = targetDocLeft - window.scrollX
      const curTop  = targetDocTop  - window.scrollY
      const tx = (curLeft + targetW / 2 - 10 - startLeft) * eased
      const ty = (curTop  + targetH / 2 - 10 - startTop)  * eased
      dot.style.transform = `translate(${tx}px, ${ty}px)`

      if (t < 1) {
        rafId = requestAnimationFrame(animate)
      } else {
        onLanded()
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => {
      clearTimeout(earlyTimer)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return createPortal(
    <div
      ref={divRef}
      style={{
        position: 'fixed',
        width: 20,
        height: 20,
        borderRadius: '50%',
        left: 0,
        top: 0,
        opacity: 0,
        willChange: 'transform',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />,
    document.body
  )
}

function RailSection({ id, dotId, sourceId, label, dotColor, extraClass = 'pt-16', skipAnimation = false, children }) {
  const sectionRef = useRef(null)
  const dotRef = useRef(null)
  const [flying, setFlying] = useState(false)
  const [contentVisible, setContentVisible] = useState(skipAnimation)
  const [dotVisible, setDotVisible] = useState(skipAnimation)
  const triggered = useRef(skipAnimation)

  useEffect(() => {
    if (skipAnimation) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          setFlying(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [skipAnimation])

  return (
    <section id={id} ref={sectionRef} className={`pb-8 ${extraClass}`}>
      {flying && (
        <FlyingDot
          sourceId={sourceId}
          targetRef={dotRef}
          targetColor={dotColor}
          onEarlyReveal={() => setContentVisible(true)}
          onLanded={() => { setFlying(false); setDotVisible(true) }}
        />
      )}

      <h2 className="text-2xl font-bold text-gray-900 mb-8 px-8 lg:px-16 flex items-center gap-3">
        <span
          id={dotId}
          ref={dotRef}
          className="w-5 h-5 rounded-full flex-shrink-0"
          style={{ backgroundColor: dotColor, opacity: dotVisible ? 1 : 0 }}
        />
        <span
          style={{
            opacity: contentVisible ? 1 : 0,
            transition: contentVisible ? 'opacity 0.5s ease-out 0.1s' : 'none',
          }}
        >
          {label}
        </span>
      </h2>

      <div
        style={{
          opacity: contentVisible ? 1 : 0,
          transition: contentVisible ? 'opacity 0.6s ease-out 0.25s' : 'none',
        }}
      >
        {children}
      </div>
    </section>
  )
}

function RailCard({ label, subtitle, to, thumbnail, thumbnailPosition, comingSoon, className = 'flex-1 min-w-64' }) {
  const inner = (
    <>
      {thumbnail ? (
        <div className="relative">
          <RetryImage
            src={thumbnail}
            alt={label}
            className="h-48 w-full object-cover"
            style={thumbnailPosition ? { objectPosition: thumbnailPosition } : undefined}
          />
          {comingSoon && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <span className="px-3 py-1.5 bg-white text-gray-900 text-base font-bold uppercase tracking-widest">
                Coming Soon
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className="h-48 bg-gray-100" />
      )}
      <div className="py-4">
        <p className="text-base font-bold uppercase tracking-widest text-gray-900 mb-1 whitespace-pre-line">{label}</p>
        {subtitle && <h3 className="text-lg font-normal text-gray-500 leading-snug">{subtitle}</h3>}
      </div>
    </>
  )
  if (to) {
    return (
      <Link to={to} className={`${className} snap-start px-5 block hover:opacity-80 transition-opacity`}>
        {inner}
      </Link>
    )
  }
  return <div className={`${className} snap-start px-5`}>{inner}</div>
}

export default function Home() {
  const arrowInnerRef = useRef(null)
  // Arriving via a back button (hash-linked straight to #experience or
  // #projects) should land on that section with everything already
  // settled — no rail fly-ins.
  const { hash } = useLocation()
  const [skipAnimations] = useState(() => hash === '#experience' || hash === '#projects')

  const handleArrowEnter = () => {
    const el = arrowInnerRef.current
    if (!el) return
    const { transform } = window.getComputedStyle(el)
    el.style.animation = 'none'
    el.style.transform = transform
    el.getBoundingClientRect()
    el.style.transition = 'transform 450ms ease-out'
    el.style.transform = 'translateY(0)'
  }

  const handleArrowLeave = () => {
    const el = arrowInnerRef.current
    if (!el) return
    el.style.transition = ''
    el.style.animation = 'bounce 1s -0.5s infinite'
    el.style.transform = ''
  }

  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col md:flex-row items-center justify-start md:justify-center min-h-screen pt-24 md:pt-16 pb-40 px-8 lg:px-16 gap-6 md:gap-20 lg:gap-28">
        <RetryImage
          src={profileImg}
          alt="Bowen Zheng"
          className="fade-in-low w-80 h-80 lg:w-[28rem] lg:h-[28rem] rounded-full object-cover shadow-xl ring-4 ring-gray-100 flex-shrink-0"
          style={{ animationDelay: '0s' }}
        />
        <div className="flex flex-col gap-4 md:text-left text-center">
          <h1
            className="fade-in text-4xl lg:text-5xl font-normal text-gray-900 tracking-tight"
            style={{ animationDelay: '0s' }}
          >
            Bowen Zheng
          </h1>
          <p className="text-3xl text-gray-600 flex items-center gap-3">
            <span
              id="hero-product-dot"
              className="fade-in w-5 h-5 rounded-full bg-amber-400 flex-shrink-0"
              style={{ animationDelay: '0.4s' }}
            />
            <span className="fade-in" style={{ animationDelay: '0.55s' }}>
              Product Manager
            </span>
          </p>
        </div>

        <div
          className="fade-in-opacity absolute bottom-8 md:bottom-16 left-0 right-0 flex justify-center"
          style={{ animationDelay: '0.9s' }}
        >
          <button
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="group cursor-pointer block bg-transparent border-0 p-0"
            onMouseEnter={handleArrowEnter}
            onMouseLeave={handleArrowLeave}
          >
            <div ref={arrowInnerRef} className="animate-bounce" style={{ pointerEvents: 'none' }}>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-900 bg-white group-hover:bg-gray-900 transition-colors duration-200 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-8 md:h-8 text-gray-900 group-hover:text-white transition-colors duration-200 -rotate-90">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* Professional Experience Rail — dot flies from the hero Product Manager dot */}
      <RailSection
        id="experience"
        dotId="experience-dot"
        sourceId="hero-product-dot"
        label="Product Experience"
        dotColor="rgb(128, 216, 218)"
        extraClass="pt-24"
        skipAnimation={skipAnimations}
      >
        <div className="flex divide-x divide-gray-400 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-8 lg:px-16">
          {experiences.map(({ company, title, to, thumbnail, thumbnailPosition }) => (
            <RailCard key={company} label={company} subtitle={title} to={to} thumbnail={thumbnail} thumbnailPosition={thumbnailPosition} />
          ))}
        </div>
      </RailSection>

      {/* Projects Rail — dot flies from the experience heading dot */}
      <RailSection
        id="projects"
        dotId="projects-dot"
        sourceId="experience-dot"
        label="AI / ML Projects"
        dotColor="rgb(255, 59, 37)"
        extraClass="pt-8"
        skipAnimation={skipAnimations}
      >
        <div className="flex divide-x divide-gray-400 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-8 lg:px-16">
          {projects.map(({ name, desc, to, thumbnail, comingSoon }) => (
            <RailCard key={name} label={name} subtitle={desc} to={to} thumbnail={thumbnail} comingSoon={comingSoon} className="w-1/4 flex-none min-w-64" />
          ))}
        </div>
      </RailSection>
    </>
  )
}
