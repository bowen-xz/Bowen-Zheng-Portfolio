import { useEffect } from 'react'
import RetryImage from '../RetryImage'

// Shared composition primitives for blog/project post pages. Every post is
// assembled from these plus its own content — the primitives don't know
// anything about how many sections a post has or what order they're in,
// since that genuinely varies per post.

export function PostLayout({ banner, bannerAlt, bannerClassName = '', children }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-16">
      <RetryImage
        src={banner}
        alt={bannerAlt}
        className={`w-full object-cover max-h-[480px] ${bannerClassName}`.trim()}
      />
      {children}
    </div>
  )
}

export function PostHeader({ title, subtitle, children }) {
  return (
    <div className="max-w-5xl mx-auto px-8 lg:px-0 pt-12 pb-20">
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3">
        {title}
      </h1>
      <p className="text-2xl lg:text-3xl font-normal text-gray-500 leading-tight mb-6">
        {subtitle}
      </p>
      <div className="border-t border-gray-200 mb-8" />
      <p className="text-xl text-gray-700 leading-relaxed font-normal">
        {children}
      </p>
    </div>
  )
}

export function Section({ last = false, children }) {
  return (
    <div className={`max-w-5xl mx-auto px-8 lg:px-0 ${last ? 'pb-24' : 'mb-16'}`}>
      {children}
    </div>
  )
}

export function TwoColGrid({ children }) {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      {children}
    </div>
  )
}

export function SectionHeading({ children }) {
  return (
    <p className="text-lg font-bold uppercase tracking-widest text-black mb-3">
      {children}
    </p>
  )
}

export function SubHeading({ children }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
      {children}
    </p>
  )
}

export function Bullets({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-lg text-gray-700 leading-relaxed">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  )
}
