import { useEffect } from 'react'
import banner from '../../assets/hbo/banner.webp'
import hbo1   from '../../assets/hbo/hbo1.webp'
import hbo2   from '../../assets/hbo/hbo2.webp'
import hbo3   from '../../assets/hbo/hbo3.webp'

function SectionHeading({ children }) {
  return (
    <p className="text-lg font-bold uppercase tracking-widest text-black mb-3">
      {children}
    </p>
  )
}

function Bullets({ items }) {
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

export default function HBOPost() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-16">

      {/* Banner */}
      <img
        src={banner}
        alt="HBO Max, Warner Bros. Discovery"
        className="w-full object-cover max-h-[480px]"
        onError={(e) => {
          if (!e.currentTarget.dataset.retried) {
            e.currentTarget.dataset.retried = 'true'
            e.currentTarget.src = `${banner}?retry=${Date.now()}`
          }
        }}
      />

      {/* Header */}
      <div className="max-w-5xl mx-auto px-8 lg:px-0 pt-12 pb-20">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3">
          HBO Max (Warner Bros. Discovery)
        </h1>
        <p className="text-2xl lg:text-3xl font-normal text-gray-500 leading-tight mb-6">
          Product Manager Intern
        </p>
        <div className="border-t border-gray-200 mb-8" />

        {/* Product Summary */}
        <p className="text-xl text-gray-700 leading-relaxed font-normal">
          Originated the Reward Badges vision to strengthen HBO Max's core value around its prestige originals,
          projected to cut monthly churn by <strong>5%</strong>, and separately proposed a data platform projected
          to cut user-traits creation time from <strong>3 weeks to 3 days</strong>.
        </p>
      </div>

      {/* HBO 1 + Problem */}
      <div className="max-w-5xl mx-auto px-8 lg:px-0 mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <img
            src={hbo1}
            alt="HBO Max team at Warner Bros. Discovery"
            className="w-full object-cover"
            onError={(e) => {
              if (!e.currentTarget.dataset.retried) {
                e.currentTarget.dataset.retried = 'true'
                e.currentTarget.src = `${hbo1}?retry=${Date.now()}`
              }
            }}
          />
          <div className="pt-2">
            <SectionHeading>Problem</SectionHeading>
            <Bullets items={[
              "Initiated research effort into HBO Max's retention challenge, conducting user interviews, collecting engagement data, and running competitive benchmarking to diagnose the drivers of subscriber churn.",
              "Uncovered a reframing insight: subscribers retain for the caliber of HBO's originals — Game of Thrones, Succession, The Last of Us — not for catalog volume, and no competitor's library size could substitute for that quality.",
            ]} />
          </div>
        </div>
      </div>

      {/* Solution + HBO 2 */}
      <div className="max-w-5xl mx-auto px-8 lg:px-0 mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="pt-2">
            <SectionHeading>Solution</SectionHeading>
            <Bullets items={[
              "Translated the research findings into a vision for Reward Badges, designed to amplify HBO's originals rather than compete on volume: an originals calendar signaling what lands next, exclusive premiere-night merch to build culture around each release, and show gifting so subscribers could pull friends into must-watch titles.",
              'Built a fully interactive, end-to-end Reward Badges prototype spanning frontend UX to backend data using AI-assisted development, turning the vision into something stakeholders could click through.',
              'Led a cross-functional team of designers to refine UX and data scientists to integrate real user data into the prototype.',
            ]} />
          </div>
          <img
            src={hbo2}
            alt="HBO Max team outing"
            className="w-full object-cover"
            onError={(e) => {
              if (!e.currentTarget.dataset.retried) {
                e.currentTarget.dataset.retried = 'true'
                e.currentTarget.src = `${hbo2}?retry=${Date.now()}`
              }
            }}
          />
        </div>
      </div>

      {/* HBO 3 + Process/Impact/Additional Initiative */}
      <div className="max-w-5xl mx-auto px-8 lg:px-0 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <img
            src={hbo3}
            alt="HBO Max team at a movie premiere"
            className="w-full object-cover"
            onError={(e) => {
              if (!e.currentTarget.dataset.retried) {
                e.currentTarget.dataset.retried = 'true'
                e.currentTarget.src = `${hbo3}?retry=${Date.now()}`
              }
            }}
          />
          <div className="pt-2 space-y-8">
            <div>
              <SectionHeading>Process</SectionHeading>
              <Bullets items={[
                'Drove alignment across 5 key stakeholder teams — User Retention, Forge Data Platform, HBO Originals Promotion, Recommendations, and Profile Design — securing buy-in and roadmap prioritization for Reward Badges.',
              ]} />
            </div>
            <div>
              <SectionHeading>Impact</SectionHeading>
              <Bullets items={[
                "Projected Reward Badges to reduce monthly churn by 5%, driving content discovery and solidifying HBO's core product value.",
              ]} />
            </div>
            <div>
              <SectionHeading>Additional Initiative</SectionHeading>
              <Bullets items={[
                "Originated a separate vision for an Agentic User Traits data platform, interviewing data teams to identify pain points and map HBO's existing data architecture.",
                'Projected the platform to cut user-traits creation time from 3 weeks to 3 days.',
              ]} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
