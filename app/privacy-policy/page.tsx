import type { Metadata } from "next";
import Link from "next/link";
import InformationPage from "@/components/InformationPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Upstairs Techno Pvt. Ltd.",
  description:
    "Read the Privacy Policy of Upstairs Techno Pvt. Ltd. to understand how we collect, use, protect, and process personal information across our website, services, recruitment, training, and digital platforms.",
};

const sectionClassName = "space-y-4";
const headingClassName = "font-display text-2xl font-semibold text-ink";
const subheadingClassName = "font-display text-lg font-semibold text-ink";
const bodyClassName = "space-y-4 text-base leading-relaxed text-slate";
const listClassName = "list-disc space-y-2 pl-6";

function BulletList({ items }: { items: string[] }) {
  return <ul className={listClassName}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function PolicySection({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return <section className={sectionClassName}><h2 className={headingClassName}>{number}. {title}</h2><div className={bodyClassName}>{children}</div></section>;
}

function PolicySubsection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className={sectionClassName}><h3 className={subheadingClassName}>{title}</h3><div className={bodyClassName}>{children}</div></section>;
}

export default function PrivacyPolicyPage() {
  return (
    <InformationPage
      eyebrow="Legal"
      title="PRIVACY POLICY"
      intro="Last Updated: September 16, 2026"
      sections={[]}
      content={
        <div className="mt-10 space-y-10">
          <PolicySection number={1} title="Introduction">
            <p>Welcome to <strong>Upstairs Techno Pvt. Ltd.</strong> (“Upstairs Techno,” “we,” “our,” or “us”).</p>
            <p>We respect your privacy and are committed to protecting the personal information that you provide to us or that we collect when you use our website, applications, platforms, products, services, recruitment services, training programs, and other digital services (collectively, the “Services”).</p>
            <p>This Privacy Policy explains:</p>
            <BulletList items={["What information we may collect", "How we collect information", "Why we use information", "How we protect information", "When information may be shared", "How long information may be retained", "Your rights and choices", "How you can contact us regarding privacy matters"]} />
            <p>By accessing or using our Services, you acknowledge that you have read and understood this Privacy Policy.</p>
          </PolicySection>

          <PolicySection number={2} title="Information We Collect">
            <p>Depending on how you interact with Upstairs Techno, we may collect different types of information.</p>
            <PolicySubsection title="2.1 Information You Provide Directly">
              <p>You may provide information when you:</p>
              <BulletList items={["Contact us", "Submit an enquiry", "Apply for a job", "Submit a resume or CV", "Register for an OJT or internship", "Register for a training program or course", "Create an account", "Participate in assessments or competitions", "Request information about our services", "Communicate with our team", "Submit information through forms on our Website or platforms"]} />
              <p>This information may include:</p>
              <BulletList items={["Full name", "Email address", "Phone number", "Residential or correspondence address", "Date of birth, where required", "Gender, where voluntarily provided or required for a legitimate purpose", "Educational qualifications", "College or university information", "Technical skills", "Work experience", "Certifications", "Resume/CV", "Portfolio or professional profile information", "Job preferences", "Training or internship information", "Information contained in messages or enquiries", "Other information that you voluntarily submit"]} />
              <p>We only request information that is reasonably relevant to the purpose for which it is collected.</p>
            </PolicySubsection>
          </PolicySection>

          <PolicySection number={3} title="Resume and Recruitment Information">
            <p>If you apply for a position, internship, OJT, training opportunity, or other career-related opportunity through Upstairs Techno, we may collect information contained in your application and resume.</p>
            <p>This may include:</p>
            <BulletList items={["Name and contact details", "Education", "Skills", "Projects", "Employment history", "Certifications", "Professional experience", "Portfolio information", "Resume/CV", "Interview-related information", "Assessment results", "Other information you voluntarily provide during the recruitment process"]} />
            <p>We may use this information to:</p>
            <BulletList items={["Process your application", "Evaluate your qualifications against the relevant opportunity", "Communicate with you regarding your application", "Schedule interviews or assessments", "Administer recruitment or training processes", "Maintain recruitment records", "Contact you about relevant future opportunities where appropriate"]} />
            <p>Submitting an application does not guarantee employment, internship, OJT placement, or selection.</p>
          </PolicySection>

          <PolicySection number={4} title="Information Collected Automatically">
            <p>When you visit or interact with our Website, certain technical information may be collected automatically.</p>
            <p>This may include:</p>
            <BulletList items={["IP address", "Browser type", "Device type", "Operating system", "Approximate location derived from technical information", "Pages visited", "Date and time of access", "Referring website", "Website interaction information", "Error and diagnostic information", "Security-related information"]} />
            <p>This information may be used to:</p>
            <BulletList items={["Operate the Website", "Improve performance", "Maintain security", "Detect suspicious activity", "Troubleshoot technical problems", "Understand general Website usage", "Improve our Services"]} />
            <p>Where applicable, cookies and similar technologies may be used. Please refer to our <Link className="text-blueline underline decoration-blueline/40 underline-offset-4 hover:text-ink" href="/cookie-policy">Cookie Policy</Link> for more information.</p>
          </PolicySection>

          <PolicySection number={5} title="Information From Third Parties">
            <p>In certain circumstances, we may receive information from third parties.</p>
            <p>For example, information may be provided through:</p>
            <BulletList items={["Recruitment platforms", "Professional networking platforms", "Educational institutions", "Business partners", "Service providers", "Authentication providers", "Payment providers", "Other platforms through which you interact with Upstairs Techno"]} />
            <p>The information we receive depends on the service involved and your interaction with that service.</p>
          </PolicySection>

          <PolicySection number={6} title="How We Use Your Information">
            <p>We may use personal information for legitimate business and operational purposes, including:</p>
            <PolicySubsection title="Service Delivery"><p>To:</p><BulletList items={["Provide requested Services", "Process registrations", "Manage accounts", "Provide training or OJT services", "Process job applications", "Respond to enquiries", "Deliver requested information"]} /></PolicySubsection>
            <PolicySubsection title="Communication"><p>To:</p><BulletList items={["Respond to messages", "Contact you regarding applications", "Provide service-related notifications", "Communicate important updates", "Respond to support requests"]} /></PolicySubsection>
            <PolicySubsection title="Recruitment"><p>To:</p><BulletList items={["Review applications", "Conduct interviews", "Conduct assessments", "Evaluate qualifications", "Manage recruitment processes", "Communicate recruitment decisions"]} /></PolicySubsection>
            <PolicySubsection title="Website and Platform Operations"><p>To:</p><BulletList items={["Maintain our Website", "Improve functionality", "Monitor performance", "Troubleshoot problems", "Develop new features", "Protect our systems"]} /></PolicySubsection>
            <PolicySubsection title="Security"><p>To:</p><BulletList items={["Prevent unauthorized access", "Detect fraud or abuse", "Protect users and our systems", "Investigate security incidents", "Enforce our terms and policies"]} /></PolicySubsection>
            <PolicySubsection title="Legal and Compliance"><p>We may process information when reasonably necessary to:</p><BulletList items={["Comply with applicable laws", "Respond to lawful requests", "Protect our legal rights", "Resolve disputes", "Meet regulatory obligations"]} /></PolicySubsection>
          </PolicySection>

          <PolicySection number={7} title="Legal Basis for Processing">
            <p>Where applicable law requires a legal basis for processing personal information, we may process information based on one or more of the following:</p>
            <BulletList items={["Your consent", "Performance of a contract or requested service", "Compliance with legal obligations", "Legitimate business purposes, where permitted by law", "Protection of rights, safety, security, or property"]} />
            <p>The applicable basis may depend on the type of information and the purpose of processing.</p>
          </PolicySection>

          <PolicySection number={8} title="Sharing of Information">
            <p>We do not sell your personal information as a general business practice.</p>
            <PolicySubsection title="Service Providers"><p>Third-party companies that help us operate our Services, such as providers of:</p><BulletList items={["Website hosting", "Cloud infrastructure", "Database services", "Email services", "Security services", "Analytics", "Communication services", "Recruitment technology", "Payment processing", "Technical support"]} /><p>These providers may process information on our behalf according to applicable agreements and requirements.</p></PolicySubsection>
            <PolicySubsection title="Recruitment and Business Partners"><p>Where relevant to a job, internship, OJT, training program, or other service, information may be shared with authorized partners involved in delivering that opportunity.</p><p>Where appropriate, we will provide relevant information about such sharing.</p></PolicySubsection>
            <PolicySubsection title="Legal Requirements"><p>We may disclose information where required or permitted by applicable law, regulation, legal process, or lawful governmental request.</p></PolicySubsection>
            <PolicySubsection title="Business Transactions"><p>If Upstairs Techno is involved in a merger, acquisition, restructuring, sale of assets, financing, or similar transaction, personal information may be transferred as part of that transaction, subject to applicable legal requirements.</p></PolicySubsection>
          </PolicySection>

          <PolicySection number={9} title="Resume Sharing"><p>When you submit a resume for a specific employment, internship, OJT, or career opportunity, your resume may be reviewed by authorized personnel involved in the relevant recruitment or selection process.</p><p>Where a third-party employer or recruitment partner is directly involved in an opportunity, your information may be shared with that party where appropriate for the recruitment process.</p><p>We encourage applicants to avoid including unnecessary sensitive personal information in their resumes.</p></PolicySection>
          <PolicySection number={10} title="Payment Information"><p>If our Services require payment, payments may be processed through third-party payment providers.</p><p>Depending on the payment method, payment providers may collect information such as:</p><BulletList items={["Transaction information", "Payment status", "Payment reference", "Billing information", "Other information necessary to process the transaction"]} /><p>Unless specifically stated otherwise, Upstairs Techno does not need to store complete payment card information on its own systems.</p><p>Payment providers may process information according to their own privacy policies and terms.</p></PolicySection>
          <PolicySection number={11} title="Cookies and Similar Technologies"><p>We may use cookies and similar technologies to:</p><BulletList items={["Maintain sessions", "Support authentication", "Improve Website functionality", "Remember preferences", "Maintain security", "Understand Website usage", "Improve performance"]} /><p>For more information, please review our <Link className="text-blueline underline decoration-blueline/40 underline-offset-4 hover:text-ink" href="/cookie-policy">Cookie Policy</Link>.</p></PolicySection>
          <PolicySection number={12} title="Data Security"><p>We take reasonable technical and organizational measures designed to protect personal information against unauthorized access, alteration, disclosure, loss, misuse, or destruction.</p><p>Depending on the nature of the information and Services, security measures may include:</p><BulletList items={["Access controls", "Authentication mechanisms", "Encryption where appropriate", "Secure communication protocols", "Monitoring and logging", "Regular technical maintenance", "Restricted access to personal information"]} /><p>However, no internet-based system or method of electronic storage can be guaranteed to be completely secure.</p></PolicySection>
          <PolicySection number={13} title="Data Retention"><p>We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by applicable law.</p><p>Retention periods may depend on:</p><BulletList items={["The purpose for which information was collected", "Whether you maintain an account", "Recruitment or application requirements", "Legal and regulatory obligations", "Dispute resolution requirements", "Security requirements", "Legitimate business needs"]} /><p>When information is no longer required, we may delete, anonymize, or securely dispose of it where reasonably practicable.</p></PolicySection>
          <PolicySection number={14} title="Your Privacy Rights"><p>Depending on your location and applicable law, you may have certain rights regarding your personal information.</p><p>These may include the right to:</p><BulletList items={["Request access to personal information we hold about you", "Request correction of inaccurate information", "Request deletion where legally applicable", "Withdraw consent where processing is based on consent", "Request information about how your personal information is processed", "Raise concerns regarding our handling of personal information", "Exercise other rights provided by applicable law"]} /><p>Some requests may be subject to legal or operational limitations.</p><p>To exercise applicable privacy rights, please contact us using the details provided below.</p></PolicySection>
          <PolicySection number={15} title="Account Information"><p>If our Services allow you to create an account, you are responsible for maintaining the confidentiality of your account credentials.</p><p>You should:</p><BulletList items={["Use a strong password", "Keep your login credentials confidential", "Avoid sharing your password", "Notify us if you suspect unauthorized account activity"]} /><p>We may collect account-related information necessary to provide and secure the account.</p></PolicySection>
          <PolicySection number={16} title="Children's Privacy"><p>Our Services may include educational, training, technology, recruitment, and professional-development content.</p><p>Unless specifically stated otherwise for a particular service, our Services are not intended to knowingly collect personal information from children in circumstances where such collection is prohibited by applicable law.</p><p>If you believe that a child has provided personal information to us inappropriately, please contact us.</p></PolicySection>
          <PolicySection number={17} title="International Data Transfers"><p>Depending on the technologies, hosting providers, cloud services, business partners, or service providers we use, personal information may be processed or stored in locations outside your state, region, or country.</p><p>Where applicable law requires safeguards for international transfers, we will take reasonable steps to comply with those requirements.</p></PolicySection>
          <PolicySection number={18} title="Third-Party Websites and Services"><p>Our Website may contain links to third-party websites, platforms, or services.</p><p>These third-party services may have their own:</p><BulletList items={["Privacy policies", "Cookie policies", "Terms and conditions", "Data-processing practices"]} /><p>We are not responsible for the privacy practices of independent third-party websites or services.</p><p>We recommend reviewing the privacy policies of any third-party service before providing personal information.</p></PolicySection>
          <PolicySection number={19} title="Marketing Communications"><p>Where permitted by applicable law and where appropriate, we may use contact information to communicate with you about:</p><BulletList items={["Our Services", "Training programs", "OJT opportunities", "Internship opportunities", "Career opportunities", "Company updates", "Events", "Other relevant business communications"]} /><p>Where consent is required, we will seek appropriate consent.</p><p>You may request that we stop sending non-essential promotional communications by following available unsubscribe instructions or contacting us.</p><p>Service-related communications may continue where necessary.</p></PolicySection>
          <PolicySection number={20} title="Accuracy of Information"><p>We rely on the information provided by users for many of our Services.</p><p>You are responsible for providing accurate, complete, and up-to-date information and for notifying us when relevant information changes.</p><p>In particular, applicants should ensure that resumes, educational information, experience, contact details, and other application information are accurate.</p></PolicySection>
          <PolicySection number={21} title="Changes to This Privacy Policy"><p>We may update this Privacy Policy periodically to reflect:</p><BulletList items={["Changes to our Services", "Changes to our technology", "Changes in our business practices", "Changes to applicable laws", "Improvements to our privacy practices"]} /><p>When we update this policy, we will revise the <strong>“Last Updated”</strong> date at the top of the page.</p><p>We encourage you to periodically review this Privacy Policy.</p></PolicySection>
          <PolicySection number={22} title="Contact Us"><p>If you have questions, requests, or concerns regarding this Privacy Policy or the handling of your personal information, please contact us.</p><p><strong>Upstairs Techno Pvt. Ltd.</strong></p><p><strong>Email:</strong> <a className="text-blueline underline decoration-blueline/40 underline-offset-4 hover:text-ink" href="mailto:contact@upstairstechno.com">contact@upstairstechno.com</a></p><p><strong>Address:</strong></p><address className="not-italic">Rajeamarsinha Colony,<br />Malegaon Bk, Baramati,<br />Pune, Maharashtra – 413115, India</address></PolicySection>
          <PolicySection number={23} title="Consent and Acknowledgement"><p>By using our Website or Services, you acknowledge that you have had an opportunity to review this Privacy Policy.</p><p>Where applicable law requires consent for a particular processing activity, we will obtain consent through an appropriate mechanism.</p><p>Your continued use of the Website does not override any consent requirements imposed by applicable law.</p></PolicySection>

          <p className="border-t border-grid pt-6 text-sm text-slate">© 2026 Upstairs Techno Pvt. Ltd. All Rights Reserved.</p>
        </div>
      }
    />
  );
}
