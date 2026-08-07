import { useEffect } from 'react'
import banner   from '../../assets/hemi/banner.webp'
import thumbnail from '../../assets/hemi/thumbnail.webp'
import hemi1    from '../../assets/hemi/hemi1.webp'
import hemi2    from '../../assets/hemi/hemi2.webp'

const TEAL = 'rgb(128, 216, 218)'

function SectionHeading({ children }) {
  return (
    <p
      className="text-xs font-bold uppercase tracking-widest mb-3"
      style={{ color: TEAL }}
    >
      {children}
    </p>
  )
}

function Bullets({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-gray-700 leading-relaxed">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function HEMIPost() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-16">

      {/* Banner */}
      <img
        src={banner}
        alt="Hopkins Extreme Materials Institute"
        className="w-full object-cover max-h-[480px]"
        onError={(e) => {
          if (!e.currentTarget.dataset.retried) {
            e.currentTarget.dataset.retried = 'true'
            e.currentTarget.src = `${banner}?retry=${Date.now()}`
          }
        }}
      />

      {/* Header */}
      <div className="max-w-3xl mx-auto px-8 lg:px-0 py-12">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
          Hopkins Extreme Materials Institute
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Initiated Manufacturing Product
        </h1>
        <div className="border-t border-gray-200 mb-8" />

        {/* Product Summary */}
        <p className="text-xl text-gray-700 leading-relaxed font-normal">
          Identified critical manufacturing bottleneck and developed parallel processing solution,
          delivering a <strong>300% efficiency improvement</strong> in specialized component production.
        </p>
      </div>

      {/* Thumbnail + Problem */}
      <div className="max-w-5xl mx-auto px-8 lg:px-0 mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <img
              src={thumbnail}
              alt="Multilayered precision machined aluminum flyer plate"
              className="w-full object-cover"
              onError={(e) => {
                if (!e.currentTarget.dataset.retried) {
                  e.currentTarget.dataset.retried = 'true'
                  e.currentTarget.src = `${thumbnail}?retry=${Date.now()}`
                }
              }}
            />
            <p className="text-xs text-gray-400 mt-2 text-center">
              Multilayered precision machined aluminum flyer plate
            </p>
          </div>
          <div className="pt-2">
            <SectionHeading>Problem</SectionHeading>
            <Bullets items={[
              'Aluminum flyer plate manufacturing (components for laser projectile impact testing) operated at suboptimal throughput of 1 unit per hour, creating significant production constraints.',
              'Manufacturing process relied heavily on manual intern labor, limiting scalability and consistency.',
            ]} />
          </div>
        </div>
      </div>

      {/* Solution + HEMI 1 */}
      <div className="max-w-5xl mx-auto px-8 lg:px-0 mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="pt-2">
            <SectionHeading>Solution</SectionHeading>
            <Bullets items={[
              'Originated parallel manufacturing system utilizing custom CAD-modeled tooling and fixtures to enable parallel production workflows.',
              'Developed intuitive visual interface with real-time quality detection capabilities to streamline defect identification and enable continuous process improvement.',
            ]} />
          </div>
          <img
            src={hemi1}
            alt="HEMI manufacturing process"
            className="w-full object-cover"
            onError={(e) => {
              if (!e.currentTarget.dataset.retried) {
                e.currentTarget.dataset.retried = 'true'
                e.currentTarget.src = `${hemi1}?retry=${Date.now()}`
              }
            }}
          />
        </div>
      </div>

      {/* HEMI 2 — full width */}
      <div className="w-full mb-16">
        <img
          src={hemi2}
          alt="HEMI lab environment"
          className="w-full object-cover max-h-[500px]"
          onError={(e) => {
            if (!e.currentTarget.dataset.retried) {
              e.currentTarget.dataset.retried = 'true'
              e.currentTarget.src = `${hemi2}?retry=${Date.now()}`
            }
          }}
        />
      </div>

      {/* Process + Impact */}
      <div className="max-w-5xl mx-auto px-8 lg:px-0 pb-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <SectionHeading>Process</SectionHeading>
            <Bullets items={[
              'Facilitated cross-functional stakeholder alignment across engineering, research, and manufacturing teams to define requirements and success metrics.',
              'Implemented iterative design methodology with continuous quality measurement to optimize manufacturing processes and maintain product standards.',
            ]} />
          </div>
          <div>
            <SectionHeading>Impact</SectionHeading>
            <Bullets items={[
              'Achieved 300% increase in manufacturing throughput, transforming production capacity and operational efficiency.',
              'Improved projectile impact shot quality assurance with 10% enhancement in error detection accuracy, reducing downstream testing failures.',
            ]} />
          </div>
        </div>
      </div>

    </div>
  )
}
