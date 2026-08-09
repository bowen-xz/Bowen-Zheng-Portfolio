import RetryImage from '../../components/RetryImage'
import { PostLayout, PostHeader, Section, TwoColGrid, SectionHeading, Bullets } from '../../components/blog/Post'
// Note: `banner` and `scno1` are visually swapped from their filenames — an
// earlier edit swapped which photo is the page banner vs. the first block's
// image, and it was simpler to keep the swap at the call site than rename
// the asset files. `scno1` (the group photo) is the actual page banner.
import banner from '../../assets/scno/banner.webp'
import scno1  from '../../assets/scno/scno1.webp'
import scno2  from '../../assets/scno/scno2.webp'
import scno3  from '../../assets/scno/scno3.webp'

export default function SCNOPost() {
  return (
    <PostLayout banner={scno1} bannerAlt="SCNO Non-Profit Consulting — Cool Green Schools" bannerClassName="object-top">
      <PostHeader title="SCNO Non-Profit Consulting" subtitle="Project Manager">
        Led a consulting engagement with Cool Green Schools that delivered the{' '}
        <strong>highest client satisfaction in chapter history</strong>, scaling the nonprofit{' '}
        <strong>20x</strong> from 1 school to 20+ new schools and 100+ new volunteer teachers.
      </PostHeader>

      {/* SCNO 1 + Problem */}
      <Section>
        <TwoColGrid>
          <RetryImage src={banner} alt="SCNO consulting team with Cool Green Schools" className="w-full object-cover" />
          <div className="pt-2">
            <SectionHeading>Problem</SectionHeading>
            <Bullets items={[
              'Cool Green Schools carried minimal credibility in its early stages, making it difficult to get schools to respond and to expand outreach; the most recent school expansion alone took 2 years of back-and-forth communication to secure.',
              'The organization was short-staffed, leaving day-to-day operations chaotic and inconsistent.',
              "Volunteer teachers lacked the training and support needed to run Cool Green Schools' environmental science lessons effectively.",
            ]} />
          </div>
        </TwoColGrid>
      </Section>

      {/* Process/Solution + SCNO 2 */}
      <Section>
        <TwoColGrid>
          <div className="pt-2">
            <SectionHeading>Process/Solution</SectionHeading>
            <Bullets items={[
              'Recognized that past chapter engagements often went unimplemented because the consulting relationship stayed one-directional.',
              "To make the relationship bidirectional and understand the organization's challenges firsthand, led the team to volunteer as student instructors within Cool Green Schools' own program, teaching environmental science lessons hands-on.",
              'Led an award-winning consulting team, building a collaborative culture that encouraged open ideation while keeping the team strategically aligned.',
              "Designed a scalable expansion framework to improve Cool Green Schools' scalability and efficiency as it grew.",
            ]} />
          </div>
          <RetryImage src={scno2} alt="DIY air-quality equipment built for Cool Green Schools lessons" className="w-full object-cover" />
        </TwoColGrid>
      </Section>

      {/* SCNO 3 + Impact */}
      <Section last>
        <TwoColGrid>
          <RetryImage src={scno3} alt="Repairing Cool Green Schools' air-quality sensor" className="w-full object-cover" />
          <div className="pt-2">
            <SectionHeading>Impact</SectionHeading>
            <Bullets items={[
              'Scaled Cool Green Schools 20x, growing from 1 school to 20+ new schools and 100+ new volunteer teachers, confirmed in a follow-up two months after the proposal was implemented.',
              "Delivered the highest client satisfaction in chapter history, driven by a deep understanding of the client's needs and the trust earned throughout the engagement.",
            ]} />
          </div>
        </TwoColGrid>
      </Section>
    </PostLayout>
  )
}
