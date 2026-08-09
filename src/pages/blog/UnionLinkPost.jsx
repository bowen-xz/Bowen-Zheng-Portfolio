import RetryImage from '../../components/RetryImage'
import { PostLayout, PostHeader, Section, TwoColGrid, SectionHeading, SubHeading, Bullets } from '../../components/blog/Post'
import banner      from '../../assets/union-link/banner.webp'
import unionlink1   from '../../assets/union-link/unionlink1.webp'
import unionlink2   from '../../assets/union-link/unionlink2.webp'
import unionlink3   from '../../assets/union-link/unionlink3.webp'

export default function UnionLinkPost() {
  return (
    <PostLayout banner={banner} bannerAlt="Union Link Ecommerce Corp." bannerClassName="object-[center_58%]">
      <PostHeader title="Union Link Ecommerce Corp." subtitle="AI / ML Product Manager">
        Rebuilt the steel price forecasting engine and overhauled market-data workflows for enterprise steel
        buyers, driving a <strong>5.3x</strong> improvement in prediction accuracy while reducing manual data
        processing overhead by <strong>50%</strong>.
      </PostHeader>

      {/* Block 1: Problem Statement */}
      <Section>
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
      </Section>

      {/* Block 2: Union Link 1 + Consumer and Market Research */}
      <Section>
        <TwoColGrid>
          <RetryImage src={unionlink1} alt="Union Link Ecommerce Corp. team presentation" className="w-full object-cover" />
          <div className="pt-2">
            <SectionHeading>Consumer and Market Research</SectionHeading>
            <Bullets items={[
              'Executed stakeholder interviews with Fortune 500 steel industry customers to identify core requirements for predictive analytics functionality.',
              'Conducted internal process mapping sessions with market analysis team to document current-state workflows and identify optimization opportunities.',
            ]} />
          </div>
        </TwoColGrid>
      </Section>

      {/* Block 3: Solutions */}
      <Section>
        <SectionHeading>Solutions</SectionHeading>
        <Bullets items={[
          'Leveraged customer input analysis to identify high-impact prediction variables, enabling development of ML-powered baseline forecasting engine.',
          'Redesigned transaction capture and user onboarding flows to standardize location, product taxonomy, and transaction metadata for enhanced model training.',
          'Architected automated data quality system to identify and quarantine anomalous user behavior and dormant accounts.',
        ]} />
      </Section>

      {/* Block 4: Process + Union Link 2 */}
      <Section>
        <TwoColGrid>
          <div className="pt-2">
            <SectionHeading>Process</SectionHeading>
            <Bullets items={[
              'Maintained continuous customer feedback loops with enterprise steel buyers to validate product-market fit throughout development cycle.',
              'Orchestrated cross-functional delivery across UX design, backend engineering, data science, go-to-market, and customer success teams.',
              'Applied weighted scoring methodology for feature prioritization based on customer impact, development effort, and strategic timeline alignment.',
            ]} />
          </div>
          <RetryImage src={unionlink2} alt="Union Link Ecommerce Corp. team celebration" className="w-full object-cover" />
        </TwoColGrid>
      </Section>

      {/* Block 5: Business Impact */}
      <Section>
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
      </Section>

      {/* Block 6: Union Link 3 + Product Future Roadmap */}
      <Section last>
        <TwoColGrid>
          <RetryImage src={unionlink3} alt="Union Link Ecommerce Corp. team member" className="w-full object-cover" />
          <div className="pt-2">
            <SectionHeading>Product Future Roadmap</SectionHeading>
            <Bullets items={[
              'Launch historical prediction performance dashboard to enhance product credibility and establish accountability metrics.',
              'Introduce smart autofill functionality for frequent transaction patterns to streamline user experience and reduce data entry friction.',
              'Deploy visual geographic selection interface to minimize user input errors and improve data quality.',
            ]} />
          </div>
        </TwoColGrid>
      </Section>
    </PostLayout>
  )
}
