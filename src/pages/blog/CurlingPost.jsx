import RetryImage from '../../components/RetryImage'
import { PostLayout, PostHeader, Section, TwoColGrid, SectionHeading, Bullets } from '../../components/blog/Post'
import banner   from '../../assets/curling/banner.webp'
import curling1 from '../../assets/curling/curling1.webp'
import curling2 from '../../assets/curling/curling2.webp'
import curling3 from '../../assets/curling/curling3.webp'
import curling4 from '../../assets/curling/curling4.webp'

export default function CurlingPost() {
  return (
    <PostLayout banner={banner} bannerAlt="Curling @ Home">
      <PostHeader title="Curling @ Home" subtitle="Computer Vision Curling Trainer">
        Engineered the world's first off-ice curling simulator combining computer vision and physics modeling,
        adopted by <strong>US national curling teams</strong> and selected as a <strong>top 0.2%</strong> finalist
        at the Raytheon Technologies National Invention Convention.
      </PostHeader>

      {/* Block 1: Curling 1 + Problem */}
      <Section>
        <TwoColGrid>
          <RetryImage src={curling1} alt="YOLO computer vision tracking of the curling stone" className="w-full object-cover" />
          <div className="pt-2">
            <SectionHeading>Problem</SectionHeading>
            <Bullets items={[
              'Limited Access: Curling is only available at dedicated ice facilities, making it inaccessible during summer months, pandemics, and in warm climates.',
              'High Cost: These facilities are scarce due to the high initial construction cost of $1,000,000 and monthly maintenance expenses of $50,000. Currently, only one facility exists in Washington State.',
            ]} />
          </div>
        </TwoColGrid>
      </Section>

      {/* Block 2: User and Market Research */}
      <Section>
        <SectionHeading>User and Market Research</SectionHeading>
        <Bullets items={[
          'Conducted comprehensive user interviews across diverse curling demographics to validate user needs and establish target market segments.',
          'Analyzed professional competition performance data to assess technical feasibility and market opportunity.',
        ]} />
      </Section>

      {/* Block 3: Solution + Curling 2 */}
      <Section>
        <TwoColGrid>
          <div className="pt-2">
            <SectionHeading>Solution</SectionHeading>
            <Bullets items={[
              "Developed the world's first off-ice curling simulator, bridging the gap between traditional gameplay and accessible training.",
              'Engineered integrated system combining YOLO machine learning computer vision with proprietary physics modeling to accurately track physical curling stones and render real-time virtual simulation.',
              'Leveraged iterative user feedback loops and rapid prototyping methodologies (3D printing & CAD) to achieve authentic ice-like user experience.',
            ]} />
          </div>
          <RetryImage src={curling2} alt="Virtual curling simulation rendered in real time" className="w-full object-cover" />
        </TwoColGrid>
      </Section>

      {/* Block 4: Process */}
      <Section>
        <SectionHeading>Process</SectionHeading>
        <Bullets items={[
          'Executed multiple user feedback cycles to iteratively refine product-market fit.',
          'Managed end-to-end product development lifecycle from initial concept and prototyping through design integration, operations scaling, and go-to-market strategy.',
        ]} />
      </Section>

      {/* Block 5: Curling 3 + Impact/Awards */}
      <Section>
        <TwoColGrid>
          <RetryImage src={curling3} alt="Curling @ Home project photo" className="w-full object-cover" />
          <div className="pt-2 space-y-8">
            <div>
              <SectionHeading>Impact</SectionHeading>
              <Bullets items={[
                'Adopted by US national curling teams as primary training solution during COVID restrictions and off-season periods, contributing to exceptional performance outcomes at national competitions.',
                'Delivered cost-effective alternative to traditional ice facilities, eliminating $1,000,000 in facility construction costs and $50,000 in monthly operational expenses.',
                'Enabled curling accessibility in space-constrained environments (residential, urban centers, public events) by reducing required footprint from 150ft to 35ft.',
              ]} />
            </div>
            <div>
              <SectionHeading>Awards</SectionHeading>
              <Bullets items={[
                'Selected as Top 0.2% finalist among 250,000 global submissions at Raytheon Technologies National Invention Convention.',
              ]} />
            </div>
          </div>
        </TwoColGrid>
      </Section>

      {/* Closing image after all writing */}
      <Section last>
        <RetryImage src={curling4} alt="Curling @ Home rapid-prototyped stone and sliding footwear" className="w-full object-cover" />
      </Section>
    </PostLayout>
  )
}
