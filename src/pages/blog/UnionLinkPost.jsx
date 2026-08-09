import { useEffect } from 'react'
import banner      from '../../assets/union-link/banner.webp'
import unionlink1   from '../../assets/union-link/unionlink1.webp'
import unionlink2   from '../../assets/union-link/unionlink2.webp'
import unionlink3   from '../../assets/union-link/unionlink3.webp'

function SectionHeading({ children }) {
  return (
    <p className="text-lg font-bold uppercase tracking-widest text-black mb-3">
      {children}
    </p>
  )
}

function SubHeading({ children }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
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

export default function UnionLinkPost() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-16">

      {/* Banner */}
      <img
        src={banner}
        alt="Union Link Ecommerce Corp."
        className="w-full object-cover object-[center_58%] max-h-[480px]"
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
          Union Link Ecommerce Corp.
        </h1>
        <p className="text-2xl lg:text-3xl font-normal text-gray-500 leading-tight mb-6">
          AI / ML Product Manager
        </p>
        <div className="border-t border-gray-200 mb-8" />

        {/* Product Summary */}
        <p className="text-xl text-gray-700 leading-relaxed font-normal">
          Rebuilt the steel price forecasting engine and overhauled market-data workflows for enterprise steel
          buyers, driving a <strong>5.3x</strong> improvement in prediction accuracy while reducing manual data
          processing overhead by <strong>50%</strong>.
        </p>
      </div>

      {/* Block 1: Problem Statement */}
      <div className="max-w-5xl mx-auto px-8 lg:px-0 mb-16">
        <SectionHeading>Problem Statement</SectionHeading>
        <div className="space-y-5">
          <div>
            <SubHeading>External (Customer Pain Points)</SubHeading>
            <Bullets items={[
              'Steel price prediction model exhibited significant accuracy gaps, showing poor correlation with actual market conditions and lacking transparent validation metrics.',
              'Homogenized pricing data delivery without segmentation by geographic markets or steel product categories, reducing relevance for diverse customer use cases.',
            ]} />
          </div>
          <div>
            <SubHeading>Internal (Operational Inefficiencies)</SubHeading>
            <Bullets items={[
              'Market analysts allocated 80% of capacity to data preprocessing and quality assurance, limiting strategic analysis bandwidth to 20% of available time.',
            ]} />
          </div>
        </div>
      </div>

      {/* Block 2: Union Link 1 + Consumer and Market Research */}
      <div className="max-w-5xl mx-auto px-8 lg:px-0 mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <img
            src={unionlink1}
            alt="Union Link Ecommerce Corp. team presentation"
            className="w-full object-cover"
            onError={(e) => {
              if (!e.currentTarget.dataset.retried) {
                e.currentTarget.dataset.retried = 'true'
                e.currentTarget.src = `${unionlink1}?retry=${Date.now()}`
              }
            }}
          />
          <div className="pt-2">
            <SectionHeading>Consumer and Market Research</SectionHeading>
            <Bullets items={[
              'Executed stakeholder interviews with Fortune 500 steel industry customers to identify core requirements for predictive analytics functionality.',
              'Conducted internal process mapping sessions with market analysis team to document current-state workflows and identify optimization opportunities.',
            ]} />
          </div>
        </div>
      </div>

      {/* Block 3: Solutions */}
      <div className="max-w-5xl mx-auto px-8 lg:px-0 mb-16">
        <SectionHeading>Solutions</SectionHeading>
        <Bullets items={[
          'Leveraged customer input analysis to identify high-impact prediction variables, enabling development of ML-powered baseline forecasting engine.',
          'Redesigned transaction capture and user onboarding flows to standardize location, product taxonomy, and transaction metadata for enhanced model training.',
          'Architected automated data quality system to identify and quarantine anomalous user behavior and dormant accounts.',
        ]} />
      </div>

      {/* Block 4: Process + Union Link 2 */}
      <div className="max-w-5xl mx-auto px-8 lg:px-0 mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="pt-2">
            <SectionHeading>Process</SectionHeading>
            <Bullets items={[
              'Maintained continuous customer feedback loops with enterprise steel buyers to validate product-market fit throughout development cycle.',
              'Orchestrated cross-functional delivery across UX design, backend engineering, data science, go-to-market, and customer success teams.',
              'Applied weighted scoring methodology for feature prioritization based on customer impact, development effort, and strategic timeline alignment.',
            ]} />
          </div>
          <img
            src={unionlink2}
            alt="Union Link Ecommerce Corp. team celebration"
            className="w-full object-cover"
            onError={(e) => {
              if (!e.currentTarget.dataset.retried) {
                e.currentTarget.dataset.retried = 'true'
                e.currentTarget.src = `${unionlink2}?retry=${Date.now()}`
              }
            }}
          />
        </div>
      </div>

      {/* Block 5: Business Impact */}
      <div className="max-w-5xl mx-auto px-8 lg:px-0 mb-16">
        <SectionHeading>Business Impact</SectionHeading>
        <div className="space-y-5">
          <div>
            <SubHeading>Customer Outcomes</SubHeading>
            <Bullets items={[
              'Achieved 5.3x improvement in prediction accuracy, substantially increasing forecast reliability for procurement planning.',
              'Delivered personalized market intelligence based on customer geography and product mix.',
            ]} />
          </div>
          <div>
            <SubHeading>Operational Excellence</SubHeading>
            <Bullets items={[
              'Reduced manual data processing overhead by 50%, reallocating analyst capacity to high-value market research.',
              'Implemented real-time user quality monitoring with proactive anomaly detection capabilities.',
            ]} />
          </div>
        </div>
      </div>

      {/* Block 6: Union Link 3 + Product Future Roadmap */}
      <div className="max-w-5xl mx-auto px-8 lg:px-0 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <img
            src={unionlink3}
            alt="Union Link Ecommerce Corp. team member"
            className="w-full object-cover"
            onError={(e) => {
              if (!e.currentTarget.dataset.retried) {
                e.currentTarget.dataset.retried = 'true'
                e.currentTarget.src = `${unionlink3}?retry=${Date.now()}`
              }
            }}
          />
          <div className="pt-2">
            <SectionHeading>Product Future Roadmap</SectionHeading>
            <Bullets items={[
              'Launch historical prediction performance dashboard to enhance product credibility and establish accountability metrics.',
              'Introduce smart autofill functionality for frequent transaction patterns to streamline user experience and reduce data entry friction.',
              'Deploy visual geographic selection interface to minimize user input errors and improve data quality.',
            ]} />
          </div>
        </div>
      </div>

    </div>
  )
}
