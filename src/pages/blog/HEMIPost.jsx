import RetryImage from '../../components/RetryImage'
import { PostLayout, PostHeader, Section, TwoColGrid, SectionHeading, Bullets } from '../../components/blog/Post'
import banner   from '../../assets/hemi/banner.webp'
import thumbnail from '../../assets/hemi/thumbnail.webp'
import hemi1    from '../../assets/hemi/hemi1.webp'
import hemi2    from '../../assets/hemi/hemi2.webp'

export default function HEMIPost() {
  return (
    <PostLayout banner={banner} bannerAlt="Hopkins Extreme Materials Institute">
      <PostHeader title="Hopkins Extreme Materials Institute" subtitle="Initiated Manufacturing Product">
        Identified critical manufacturing bottleneck and developed parallel processing solution,
        delivering a <strong>300% efficiency improvement</strong> in specialized component production.
      </PostHeader>

      {/* Thumbnail + Problem/Solution */}
      <Section>
        <TwoColGrid>
          <div>
            <RetryImage
              src={thumbnail}
              alt="Multilayered precision machined aluminum flyer plate"
              className="w-full object-cover"
            />
            <p className="text-xs text-gray-400 mt-2 text-center">
              Multilayered precision machined aluminum flyer plate
            </p>
          </div>
          <div className="pt-2 space-y-8">
            <div>
              <SectionHeading>Problem</SectionHeading>
              <Bullets items={[
                'Aluminum flyer plate manufacturing (components for laser projectile impact testing) operated at suboptimal throughput of 1 unit per hour, creating significant production constraints.',
                'Manufacturing process relied heavily on manual intern labor, limiting scalability and consistency.',
              ]} />
            </div>
            <div>
              <SectionHeading>Solution</SectionHeading>
              <Bullets items={[
                'Originated parallel manufacturing system utilizing custom CAD-modeled tooling and fixtures to enable parallel production workflows.',
                'Developed intuitive visual interface with real-time quality detection capabilities to streamline defect identification and enable continuous process improvement.',
              ]} />
            </div>
          </div>
        </TwoColGrid>
      </Section>

      {/* Process/Impact + HEMI 1 */}
      <Section>
        <TwoColGrid>
          <div className="pt-2 space-y-8">
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
          <RetryImage src={hemi1} alt="HEMI manufacturing process" className="w-full object-cover" />
        </TwoColGrid>
      </Section>

      {/* HEMI 2 — camera rig, closing image after all writing */}
      <Section last>
        <RetryImage src={hemi2} alt="HEMI lab environment" className="w-full object-cover" />
      </Section>
    </PostLayout>
  )
}
