import RetryImage from '../../components/RetryImage'
import { PostLayout, PostHeader, Section, TwoColGrid, SectionHeading, Bullets } from '../../components/blog/Post'
import banner from '../../assets/f1-peanut/banner.webp'
import f1p1   from '../../assets/f1-peanut/f1p1.webp'
import f1p2   from '../../assets/f1-peanut/f1p2.webp'
import f1p3   from '../../assets/f1-peanut/f1p3.webp'

export default function F1PeanutPost() {
  return (
    <PostLayout banner={banner} bannerAlt="F1 Peanut Gallery">
      <PostHeader title="F1 Peanut Gallery" subtitle="AI Insights from Live F1">
        Built an F1 commentary ML agent that listens to the live broadcast and surfaces 5 categories of
        real-time insight, including live Reddit memes, now a{' '}
        <strong>race-weekend fixture in my college suite</strong> that <strong>turned an F1 skeptic into a fan</strong>.
      </PostHeader>

      {/* F1 Peanut 1 + Problem */}
      <Section>
        <TwoColGrid>
          <RetryImage src={f1p1} alt="F1 Peanut Gallery Paddock Intelligence panel" className="w-full object-cover" />
          <div className="pt-2">
            <SectionHeading>Problem</SectionHeading>
            <Bullets items={[
              'F1 broadcasts pack in a lot of information that\'s difficult to parse in real time, including strategy calls, tire compounds and degradation, and other technical nuances that go over most viewers\' heads.',
              "The sport also carries a rich layer of fun, inside baseball history, including driver rivalries, team culture, and running jokes, that's invisible to anyone who doesn't already follow the paddock closely.",
            ]} />
          </div>
        </TwoColGrid>
      </Section>

      {/* Solution + F1 Peanut 2 */}
      <Section>
        <TwoColGrid>
          <div className="pt-2">
            <SectionHeading>Solution</SectionHeading>
            <Bullets items={[
              'Built an F1 commentary ML agent that listens to the live race transcript and generates real-time insights across 5 categories: Strategy, Engineering, Drama, News, and Meme.',
              "Sourced the Meme category from Reddit's F1 community, surfacing jokes that are genuinely funny and relevant to what's happening on track, confirmed by myself and F1-fan friends.",
            ]} />
          </div>
          <RetryImage src={f1p2} alt="Watching an F1 race broadcast" className="w-full object-cover" />
        </TwoColGrid>
      </Section>

      {/* F1 Peanut 3 + Impact/Tooling */}
      <Section last>
        <TwoColGrid>
          <RetryImage src={f1p3} alt="F1 Peanut Gallery meme insight card" className="w-full object-cover" />
          <div className="pt-2 space-y-8">
            <div>
              <SectionHeading>Impact</SectionHeading>
              <Bullets items={[
                "Used every F1 race weekend by my college suite, including two suitemates who weren't previously F1 fans and think it's genuinely fun to follow along with.",
                'Converted a friend who once dismissed F1 as "just cars driving around in a circle" into an actual fan.',
              ]} />
            </div>
            <div>
              <SectionHeading>Tooling</SectionHeading>
              <Bullets items={[
                'Fully built with React and TypeScript.',
                'Powered by the Gemini API for real-time AI-generated insights.',
                'Pulled community reactions via the Reddit API for the Meme category.',
                'Connected to Google Search to retrieve live data and news during races.',
              ]} />
            </div>
          </div>
        </TwoColGrid>
      </Section>
    </PostLayout>
  )
}
