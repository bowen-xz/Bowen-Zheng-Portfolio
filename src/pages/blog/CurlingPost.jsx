import { useEffect } from 'react'
import banner   from '../../assets/curling/banner.webp'
import curling1 from '../../assets/curling/curling1.webp'
import curling2 from '../../assets/curling/curling2.webp'
import curling3 from '../../assets/curling/curling3.webp'
import curling4 from '../../assets/curling/curling4.webp'

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

export default function CurlingPost() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-16">

      {/* Banner */}
      <img
        src={banner}
        alt="Curling @ Home"
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
          Curling @ Home
        </h1>
        <p className="text-2xl lg:text-3xl font-normal text-gray-500 leading-tight mb-6">
          Computer Vision Curling Trainer
        </p>
        <div className="border-t border-gray-200 mb-8" />

        {/* Product Summary */}
        <p className="text-xl text-gray-700 leading-relaxed font-normal">
          Engineered the world's first off-ice curling simulator combining computer vision and physics modeling,
          adopted by <strong>US national curling teams</strong> and selected as a <strong>top 0.2%</strong> finalist
          at the Raytheon Technologies National Invention Convention.
        </p>
      </div>

      {/* Block 1: Curling 1 + Problem */}
      <div className="max-w-5xl mx-auto px-8 lg:px-0 mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <img
            src={curling1}
            alt="YOLO computer vision tracking of the curling stone"
            className="w-full object-cover"
            onError={(e) => {
              if (!e.currentTarget.dataset.retried) {
                e.currentTarget.dataset.retried = 'true'
                e.currentTarget.src = `${curling1}?retry=${Date.now()}`
              }
            }}
          />
          <div className="pt-2">
            <SectionHeading>Problem</SectionHeading>
            <Bullets items={[
              'Limited Access: Curling is only available at dedicated ice facilities, making it inaccessible during summer months, pandemics, and in warm climates.',
              'High Cost: These facilities are scarce due to the high initial construction cost of $1,000,000 and monthly maintenance expenses of $50,000. Currently, only one facility exists in Washington State.',
            ]} />
          </div>
        </div>
      </div>

      {/* Block 2: User and Market Research */}
      <div className="max-w-5xl mx-auto px-8 lg:px-0 mb-16">
        <SectionHeading>User and Market Research</SectionHeading>
        <Bullets items={[
          'Conducted comprehensive user interviews across diverse curling demographics to validate user needs and establish target market segments.',
          'Analyzed professional competition performance data to assess technical feasibility and market opportunity.',
        ]} />
      </div>

      {/* Block 3: Solution + Curling 2 */}
      <div className="max-w-5xl mx-auto px-8 lg:px-0 mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="pt-2">
            <SectionHeading>Solution</SectionHeading>
            <Bullets items={[
              "Developed the world's first off-ice curling simulator, bridging the gap between traditional gameplay and accessible training.",
              'Engineered integrated system combining YOLO machine learning computer vision with proprietary physics modeling to accurately track physical curling stones and render real-time virtual simulation.',
              'Leveraged iterative user feedback loops and rapid prototyping methodologies (3D printing & CAD) to achieve authentic ice-like user experience.',
            ]} />
          </div>
          <img
            src={curling2}
            alt="Virtual curling simulation rendered in real time"
            className="w-full object-cover"
            onError={(e) => {
              if (!e.currentTarget.dataset.retried) {
                e.currentTarget.dataset.retried = 'true'
                e.currentTarget.src = `${curling2}?retry=${Date.now()}`
              }
            }}
          />
        </div>
      </div>

      {/* Block 4: Process */}
      <div className="max-w-5xl mx-auto px-8 lg:px-0 mb-16">
        <SectionHeading>Process</SectionHeading>
        <Bullets items={[
          'Executed multiple user feedback cycles to iteratively refine product-market fit.',
          'Managed end-to-end product development lifecycle from initial concept and prototyping through design integration, operations scaling, and go-to-market strategy.',
        ]} />
      </div>

      {/* Block 5: Curling 3 + Impact/Awards */}
      <div className="max-w-5xl mx-auto px-8 lg:px-0 mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <img
            src={curling3}
            alt="Curling @ Home project photo"
            className="w-full object-cover"
            onError={(e) => {
              if (!e.currentTarget.dataset.retried) {
                e.currentTarget.dataset.retried = 'true'
                e.currentTarget.src = `${curling3}?retry=${Date.now()}`
              }
            }}
          />
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
        </div>
      </div>

      {/* Closing image after all writing */}
      <div className="max-w-5xl mx-auto px-8 lg:px-0 pb-24">
        <img
          src={curling4}
          alt="Curling @ Home rapid-prototyped stone and sliding footwear"
          className="w-full object-cover"
          onError={(e) => {
            if (!e.currentTarget.dataset.retried) {
              e.currentTarget.dataset.retried = 'true'
              e.currentTarget.src = `${curling4}?retry=${Date.now()}`
            }
          }}
        />
      </div>

    </div>
  )
}
