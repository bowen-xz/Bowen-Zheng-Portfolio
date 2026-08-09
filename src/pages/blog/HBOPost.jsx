import RetryImage from '../../components/RetryImage'
import { PostLayout, PostHeader, Section, TwoColGrid, SectionHeading, Bullets } from '../../components/blog/Post'
import banner from '../../assets/hbo/banner.webp'
import hbo1   from '../../assets/hbo/hbo1.webp'
import hbo2   from '../../assets/hbo/hbo2.webp'
import hbo3   from '../../assets/hbo/hbo3.webp'

export default function HBOPost() {
  return (
    <PostLayout banner={banner} bannerAlt="HBO Max, Warner Bros. Discovery">
      <PostHeader title="HBO Max (Warner Bros. Discovery)" subtitle="Product Manager Intern">
        Originated the Reward Badges vision to strengthen HBO Max's core value around its prestige originals,
        projected to cut monthly churn by <strong>5%</strong>, and separately proposed a data platform projected
        to cut user-traits creation time from <strong>3 weeks to 3 days</strong>.
      </PostHeader>

      {/* Block 1: Problem */}
      <Section>
        <div className="pt-2">
          <SectionHeading>Problem</SectionHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            Initiated research effort into HBO Max's retention challenge, conducting user interviews, collecting
            engagement data, and running competitive benchmarking to diagnose the drivers of subscriber churn.
          </p>
        </div>
      </Section>

      {/* Block 2: HBO 1 + Process */}
      <Section>
        <TwoColGrid>
          <RetryImage src={hbo1} alt="HBO Max team at Warner Bros. Discovery" className="w-full object-cover" />
          <div className="pt-2">
            <SectionHeading>Process</SectionHeading>
            <Bullets items={[
              'Built a fully interactive, end-to-end Reward Badges prototype spanning frontend UX to backend data using AI-assisted development, turning the vision into something stakeholders could click through.',
              'Led a cross-functional team of designers to refine UX and data scientists to integrate real user data into the prototype.',
              "Uncovered a reframing insight: subscribers retain for the caliber of HBO's originals (Game of Thrones, Succession, The Last of Us, etc.) not for catalog volume, and no competitor's library size could substitute for that quality.",
            ]} />
          </div>
        </TwoColGrid>
      </Section>

      {/* Block 3: Solution + HBO 2 */}
      <Section>
        <TwoColGrid>
          <div className="pt-2">
            <SectionHeading>Solution</SectionHeading>
            <p className="text-lg text-gray-700 leading-relaxed mb-2">
              Translated the research findings into a vision for Reward Badges, designed to amplify HBO's originals
              rather than compete on volume, including features such as:
            </p>
            <Bullets items={[
              'An originals calendar signaling what lands next.',
              'Exclusive premiere-night merch to build culture around each release.',
              'Show gifting so subscribers could pull friends into must-watch titles.',
            ]} />
          </div>
          <RetryImage src={hbo2} alt="HBO Max team outing" className="w-full object-cover" />
        </TwoColGrid>
      </Section>

      {/* Block 4: HBO 3 + Impact/Additional Initiative */}
      <Section last>
        <TwoColGrid>
          <RetryImage src={hbo3} alt="HBO Max team at a movie premiere" className="w-full object-cover" />
          <div className="pt-2 space-y-8">
            <div>
              <SectionHeading>Impact</SectionHeading>
              <Bullets items={[
                "Projected Reward Badges to reduce monthly churn by 5%, driving content discovery and solidifying HBO's core product value.",
                'Drove alignment across 5 key stakeholder teams — User Retention, Forge Data Platform, HBO Originals Promotion, Recommendations, and Profile Design — securing buy-in and roadmap prioritization for Reward Badges.',
              ]} />
            </div>
            <div>
              <SectionHeading>Additional Initiative</SectionHeading>
              <Bullets items={[
                'Projected the platform to cut user-traits creation time from 3 weeks to 3 days.',
                'Originated vision for an Agentic User Traits data platform.',
                "Interviewing data teams to identify pain points and map HBO's existing data architecture.",
              ]} />
            </div>
          </div>
        </TwoColGrid>
      </Section>
    </PostLayout>
  )
}
