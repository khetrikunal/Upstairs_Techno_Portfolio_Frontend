import type { Metadata } from "next";
import Link from "next/link";
import InformationPage from "@/components/InformationPage";

export const metadata: Metadata = {
	title: "Internship Terms & Conditions | Upstairs Techno Pvt. Ltd.",
	description:
		"Read the Internship Terms & Conditions of Upstairs Techno Pvt. Ltd. covering internship eligibility, selection, responsibilities, projects, certificates, confidentiality, intellectual property, conduct, termination, and other internship requirements.",
};

const sectionClassName = "space-y-4";
const headingClassName = "font-display text-2xl font-semibold text-ink";
const subheadingClassName = "font-display text-lg font-semibold text-ink";
const bodyClassName = "space-y-4 text-base leading-relaxed text-slate";
const listClassName = "list-disc space-y-2 pl-6";
const linkClassName =
	"text-blueline underline decoration-blueline/40 underline-offset-4 hover:text-ink";

function BulletList({ items }: { items: React.ReactNode[] }) {
	return (
		<ul className={listClassName}>
			{items.map((item, i) => (
				<li key={i}>{item}</li>
			))}
		</ul>
	);
}

function PolicySection({
	number,
	title,
	children,
}: {
	number: number;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className={sectionClassName}>
			<h2 className={headingClassName}>
				{number}. {title}
			</h2>
			<div className={bodyClassName}>{children}</div>
		</section>
	);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function PolicySubsection({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className={sectionClassName}>
			<h3 className={subheadingClassName}>{title}</h3>
			<div className={bodyClassName}>{children}</div>
		</section>
	);
}

export default function InternshipTermsPage() {
	return (
		<InformationPage
			eyebrow="Legal"
			title="INTERNSHIP TERMS &amp; CONDITIONS"
			intro="Last Updated: September 16, 2026"
			sections={[]}
			content={
				<div className="mt-10 space-y-10">
					{/* 1. Introduction */}
					<PolicySection number={1} title="Introduction">
						<p>
							Welcome to <strong>Upstairs Techno Pvt. Ltd.</strong> (&ldquo;Upstairs
							Techno,&rdquo; &ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo;
							or &ldquo;us&rdquo;).
						</p>
						<p>
							These Internship Terms and Conditions (&ldquo;Internship Terms&rdquo;)
							govern your application, selection, onboarding, participation, rights,
							obligations, conduct, and completion of any internship, practical
							training, or On-the-Job Training (&ldquo;OJT&rdquo;) program offered by
							Upstairs Techno (collectively, the &ldquo;Internship Program&rdquo;).
						</p>
						<p>
							By submitting an internship application, accepting an internship offer,
							accessing Company systems or resources, or participating in any
							Internship Program activities, you (&ldquo;Intern,&rdquo;
							&ldquo;Candidate,&rdquo; or &ldquo;you&rdquo;) acknowledge that you have
							read, understood, and agree to be legally bound by these Internship
							Terms.
						</p>
						<p>
							These Internship Terms are incorporated into and must be read together
							with our{" "}
							<Link className={linkClassName} href="/terms-and-conditions">
								Terms &amp; Conditions
							</Link>
							,{" "}
							<Link className={linkClassName} href="/privacy-policy">
								Privacy Policy
							</Link>
							, and{" "}
							<Link className={linkClassName} href="/cookie-policy">
								Cookie Policy
							</Link>
							. If you do not agree with any part of these Internship Terms, you must
							not accept an internship offer or participate in the program.
						</p>
					</PolicySection>

					{/* 2. About the Internship Program */}
					<PolicySection number={2} title="About the Internship Program">
						<p>
							The Upstairs Techno Internship Program is an experiential learning and
							skill-building initiative designed to bridge academic education with
							practical industry experience in software engineering, digital product
							development, IT consulting, cloud solutions, artificial intelligence, and
							related modern technologies.
						</p>
						<p>
							The primary objectives of our Internship Program include:
						</p>
						<BulletList
							items={[
								"Providing real-world exposure to contemporary software development lifecycles, agile methodologies, and collaborative engineering workflows.",
								"Fostering hands-on technical competencies through mentored assignments, architectural exploration, code reviews, and simulated or internal projects.",
								"Developing workplace competencies, professional communication, analytical thinking, time management, and team collaboration skills.",
								"Offering guided mentorship under experienced technology professionals and industry practitioners.",
							]}
						/>
						<p>
							The Internship Program is predominantly educational and vocational in
							character, intended to enrich the intern&apos;s practical knowledge,
							employability, and technical capabilities.
						</p>
					</PolicySection>

					{/* 3. Eligibility */}
					<PolicySection number={3} title="Eligibility">
						<p>
							To be eligible for consideration and continued participation in the
							Internship Program, applicants must satisfy the following criteria:
						</p>
						<BulletList
							items={[
								"Academic Background: Be currently enrolled in, or a recent graduate of, a recognized university, college, or technical institute pursuing a diploma, undergraduate, or postgraduate degree in Computer Science, Information Technology, Engineering, Computer Applications, Management, or a related discipline.",
								"Age Requirement: Be at least 18 years of age at the time of commencement, or have obtained written verifiable consent from a parent or legal guardian where legally permitted.",
								"Legal Capacity: Have full legal capacity to enter into binding agreements under applicable Indian laws.",
								"Authentic Credentials: Provide accurate, verifiable, and complete information regarding personal identity, contact details, academic standing, prior qualifications, and technical proficiencies.",
								"Hardware & Connectivity: For remote internships, possess an appropriate personal computer/laptop meeting technical requirements, alongside stable, high-speed internet connectivity.",
							]}
						/>
						<p>
							Upstairs Techno reserves the right to verify all eligibility details and
							request supporting documentation (such as student identity cards, mark
							sheets, bonafide certificates, or government-issued identification) at any
							point during the recruitment or internship cycle.
						</p>
					</PolicySection>

					{/* 4. Application and Selection */}
					<PolicySection number={4} title="Application and Selection">
						<p>
							Interested candidates may apply for open internship positions through our
							official website, designated recruitment portals, campus recruitment
							drives, or authorized institutional collaborations.
						</p>
						<p>
							The evaluation and selection process may include one or more of the
							following stages:
						</p>
						<BulletList
							items={[
								"Initial resume, portfolio, and academic record screening.",
								"Online technical aptitude assessments, coding challenges, or project submissions.",
								"Technical, domain-specific, and behavioral interview rounds conducted by our engineering or talent acquisition teams.",
								"Verification of candidate background, credentials, and references.",
							]}
						/>
						<p>
							Selection is competitive and based on merit, technical capability, problem-solving
							aptitude, alignment with project tracks, and program availability. Upstairs
							Techno reserves complete discretion in candidate selection, shortlisting,
							and admission, and is under no obligation to disclose reasons for
							non-selection or rejection of any application.
						</p>
					</PolicySection>

					{/* 5. Internship Offer */}
					<PolicySection number={5} title="Internship Offer">
						<p>
							Selected candidates will receive an official Internship Offer Letter or
							formal electronic onboarding confirmation issued by Upstairs Techno Pvt.
							Ltd.
						</p>
						<p>
							The Internship Offer will outline specific program parameters, which may
							include:
						</p>
						<BulletList
							items={[
								"Assigned role, track, or focus area (e.g., Full Stack Development, Backend Engineering, Frontend Development, QA & Automation, or AI/ML).",
								"Scheduled commencement date and expected duration.",
								"Internship delivery mode (Remote, Hybrid, or On-Site).",
								"Expected weekly time commitment and working hours.",
								"Reporting mentor, project lead, or supervisory department.",
								"Stipend or compensation details, where applicable.",
								"Specific prerequisites, onboarding documentation, or confidentiality agreements.",
							]}
						/>
						<p>
							An offer is valid only until the acceptance deadline stated in the offer
							communication. Acceptance must be communicated in the designated manner.
							Any offer remains conditional upon the accuracy of candidate representations,
							satisfactory credential verification, and strict compliance with these
							Internship Terms.
						</p>
					</PolicySection>

					{/* 6. Internship Duration */}
					<PolicySection number={6} title="Internship Duration">
						<p>
							The duration of the internship is determined by the specific program track
							and will be expressly specified in your Internship Offer Letter (e.g., one
							month, three months, or six months).
						</p>
						<p>
							The internship commences on the effective start date specified in the
							offer and terminates automatically upon completion of the agreed term,
							unless:
						</p>
						<BulletList
							items={[
								"Extended by mutual written agreement between Upstairs Techno and the intern.",
								"Terminated prematurely in accordance with the termination provisions set forth in Section 26 or Section 27 of these Internship Terms.",
							]}
						/>
						<p>
							Any extension of the internship duration requires written authorization from
							Upstairs Techno management and is subject to continued satisfactory
							performance and project requirements.
						</p>
					</PolicySection>

					{/* 7. Internship Responsibilities */}
					<PolicySection number={7} title="Internship Responsibilities">
						<p>
							As an intern at Upstairs Techno, you are expected to approach your learning
							and project contributions with diligence, accountability, and a high
							standard of excellence. Your core responsibilities include:
						</p>
						<BulletList
							items={[
								"Devoting dedicated attention to learning objectives, project assignments, technical milestones, and assigned research.",
								"Completing project tasks, sprint backlogs, bug fixes, and documentation within stipulated deadlines.",
								"Adhering to coding standards, architectural guidelines, repository management protocols, and clean code principles established by the Company.",
								"Actively participating in daily standups, sprint planning, backlog grooming, retrospective meetings, and training workshops.",
								"Regularly reporting progress, blockers, and completed deliverables to your designated mentor or team lead.",
								"Following all security, data privacy, and intellectual property protocols communicated during onboarding or throughout the internship.",
								"Maintaining a constructive, courteous, and collaborative attitude toward peers, mentors, leads, and clients.",
							]}
						/>
					</PolicySection>

					{/* 8. Attendance and Participation */}
					<PolicySection number={8} title="Attendance and Participation">
						<p>
							Regular attendance and active participation are fundamental to the success
							of your internship and are prerequisite conditions for program completion
							and certification.
						</p>
						<BulletList
							items={[
								"Interns are expected to observe the working hours and schedules agreed upon in their offer letter or established by their team lead.",
								"Punctuality is mandatory for all scheduled team meetings, standups, sprint reviews, and mentor check-ins.",
								"Attendance will be tracked via digital check-ins, task activity logs, standup attendance, or designated project tracking systems.",
								"Unplanned, unexcused, or persistent absences, or regular failure to attend mandatory meetings, may result in disciplinary action, postponement of program completion, or termination of the internship without certificate issuance.",
							]}
						/>
					</PolicySection>

					{/* 9. Remote and On-Site Internship */}
					<PolicySection number={9} title="Remote and On-Site Internship">
						<p>
							Depending on the specific program and operational needs, internships may be
							conducted remotely, on-site at Company facilities, or via a hybrid
							arrangement.
						</p>
						<p>
							<strong>For Remote or Hybrid Internships:</strong>
						</p>
						<BulletList
							items={[
								"Interns are responsible for procuring, maintaining, and securing their own computer hardware, operating system, webcam, microphone, and high-speed internet connection.",
								"Interns must maintain a quiet, professional, and secure environment during work hours and video calls.",
								"Interns must remain reachable during agreed working hours via official communication channels (such as Company email, Slack, Microsoft Teams, or Google Meet).",
							]}
						/>
						<p>
							<strong>For On-Site Internships:</strong>
						</p>
						<BulletList
							items={[
								"Interns must adhere to facility access rules, security procedures, dress codes, health and safety guidelines, and office etiquette at all times.",
								"Interns must protect physical Company assets, badges, devices, and premises from loss, damage, or unauthorized access.",
							]}
						/>
					</PolicySection>

					{/* 10. Projects and Assignments */}
					<PolicySection number={10} title="Projects and Assignments">
						<p>
							Interns will be assigned to practical projects, research initiatives,
							internal software modules, client-facing simulations, or open-source
							contributions aligned with their learning track.
						</p>
						<BulletList
							items={[
								"Assignments are allocated at the sole discretion of Upstairs Techno based on curriculum design, technical capacity, and operational requirements.",
								"Interns must follow all defined technical specifications, design patterns, testing standards, and version control procedures (such as Git workflows, branch conventions, and pull request reviews).",
								"Work must be committed and pushed to authorized Company repositories only. Storing Company code, documentation, or project data on personal, unmonitored, or public repositories is strictly prohibited.",
								"Interns have no entitlement to select specific projects or refuse reasonable technical assignments provided within their domain.",
							]}
						/>
					</PolicySection>

					{/* 11. Mentorship and Guidance */}
					<PolicySection number={11} title="Mentorship and Guidance">
						<p>
							To ensure a productive learning experience, Upstairs Techno pairs interns
							with designated technical mentors, project managers, or engineering leads.
						</p>
						<BulletList
							items={[
								"Mentors provide technical guidance, code review feedback, architectural orientation, and career insights.",
								"Interns are encouraged to ask thoughtful questions, discuss implementation strategies, and proactively seek assistance when encountering technical hurdles.",
								"Interns must remain receptive to constructive criticism, code review comments, and feedback, implementing suggested revisions promptly.",
								"Mentorship interactions must always remain professional, courteous, and focused on educational and project objectives.",
							]}
						/>
					</PolicySection>

					{/* 12. Performance Evaluation */}
					<PolicySection number={12} title="Performance Evaluation">
						<p>
							Intern performance, engagement, and skill growth are periodically evaluated
							throughout the duration of the internship.
						</p>
						<p>
							Evaluation parameters include, but are not limited to:
						</p>
						<BulletList
							items={[
								"Quality, readability, efficiency, and test coverage of submitted code.",
								"Adherence to technical requirements, design briefs, and project timelines.",
								"Learning agility, problem-solving speed, and ability to grasp new frameworks and paradigms.",
								"Attendance, punctuality, and active involvement in team ceremonies.",
								"Collaboration, teamwork, and responsiveness in daily communication.",
								"Compliance with Company policies, confidentiality rules, and professional ethics.",
							]}
						/>
						<p>
							Evaluations may be conducted at mid-term, upon milestone completions, and at
							the conclusion of the program. Satisfactory performance ratings are a
							mandatory prerequisite for successful program completion and certification.
						</p>
					</PolicySection>

					{/* 13. Internship Certificate */}
					<PolicySection number={13} title="Internship Certificate">
						<p>
							Upon successful fulfillment of all program requirements, Upstairs Techno
							will issue an official <strong>Internship Completion Certificate</strong>{" "}
							and/or Letter of Recommendation (at the Company&apos;s sole discretion).
						</p>
						<p>
							To be eligible for an Internship Certificate, the intern must have:
						</p>
						<BulletList
							items={[
								"Completed the full tenure specified in the Internship Offer Letter.",
								"Achieved satisfactory performance ratings from the assigned mentor and project supervisor.",
								"Successfully delivered and documented all assigned project milestones, code repositories, and tasks.",
								"Fulfilled minimum attendance, punctuality, and participation benchmarks.",
								"Completed comprehensive handover of all project assets, code, credentials, and documentation.",
								"Fully complied with all confidentiality, intellectual property, and behavioral standards throughout the program.",
							]}
						/>
						<p>
							Upstairs Techno reserves the right to withhold, cancel, or revoke any
							certificate or letter of recommendation if an intern leaves prematurely
							without authorized notice, engages in plagiarism, violates confidentiality,
							fails to complete project handovers, or breaches any term of this agreement.
						</p>
					</PolicySection>

					{/* 14. Stipend and Compensation */}
					<PolicySection number={14} title="Stipend and Compensation">
						<p>
							Internships at Upstairs Techno may be offered on a stipendiary (paid) or
							non-stipendiary (unpaid/learning-oriented) basis, depending on the specific
							role, track, academic alignment, and candidate qualification.
						</p>
						<BulletList
							items={[
								"Stipend Status: Whether an internship carries a stipend, and the exact amount or calculation basis, will be explicitly defined in the official Internship Offer Letter.",
								"Disbursement Schedule: For stipendiary internships, stipends are typically disbursed on a monthly basis in arrears, subject to verified attendance, timesheet approval, and satisfactory completion of assigned deliverables.",
								"Mode of Payment: Payments are processed via electronic bank transfer (NEFT/IMPS/RTGS/UPI) to a valid bank account held in the intern&apos;s own name.",
								"Taxes and Deductions: Any applicable statutory tax deductions (such as Tax Deducted at Source / TDS under Indian income tax laws) will be deducted where legally mandated.",
								"Non-Stipendiary Programs: Where an internship is stated as unpaid, the intern acknowledges that the consideration for their participation consists solely of the training, technical mentorship, project experience, industry exposure, and certification provided.",
							]}
						/>
					</PolicySection>

					{/* 15. Fees */}
					<PolicySection number={15} title="Fees">
						<p>
							Upstairs Techno Pvt. Ltd. does not charge candidates or interns any
							recruitment fee, application fee, or placement fee to apply for or secure
							an internship.
						</p>
						<p>
							Where Upstairs Techno offers structured, specialized educational training
							programs, bootcamps, or certification courses (such as specific commercial
							training tracks or educational workshops), any associated tuition or
							training fees are disclosed transparently upfront prior to enrollment, and
							are governed by specific course terms and our{" "}
							<Link className={linkClassName} href="/refund-policy">
								Refund Policy
							</Link>
							. Corporate engineering internships do not require payment from candidates
							to join.
						</p>
					</PolicySection>

					{/* 16. No Guarantee of Employment */}
					<PolicySection number={16} title="No Guarantee of Employment">
						<p>
							Participation in or completion of the Internship Program does{" "}
							<strong>not</strong> guarantee, promise, or imply any future offer of
							employment, permanent role, full-time position, or contractual engagement
							with Upstairs Techno Pvt. Ltd.
						</p>
						<p>
							While Upstairs Techno may, at its sole discretion, evaluate exceptional
							interns for Pre-Placement Offers (&ldquo;PPO&rdquo;) or full-time junior
							engineering roles upon graduation, any such offers are strictly contingent
							upon:
						</p>
						<BulletList
							items={[
								"Exceptional performance, technical excellence, and cultural alignment during the internship.",
								"Immediate business needs, team expansion requirements, and available vacancies within the Company.",
								"Successful completion of academic graduation prerequisites.",
								"Execution of a separate, formal Employment Agreement setting forth definitive compensation and employment conditions.",
							]}
						/>
					</PolicySection>

					{/* 17. Confidentiality */}
					<PolicySection number={17} title="Confidentiality">
						<p>
							During the course of your internship, you may be granted access to, exposed
							to, or create valuable non-public, proprietary, and confidential
							information belonging to Upstairs Techno, its affiliates, or its clients
							(&ldquo;Confidential Information&rdquo;).
						</p>
						<p>
							Confidential Information includes, without limitation:
						</p>
						<BulletList
							items={[
								"Source code, algorithms, software architectures, libraries, object code, APIs, schemas, database designs, and system architectures.",
								"Product roadmaps, research notes, technical documentation, design mockups, and proprietary trade secrets.",
								"Client data, client identities, commercial agreements, project briefs, and business proposals.",
								"Internal business processes, operational strategies, financial details, marketing plans, and pricing structures.",
								"Access credentials, API keys, passwords, security tokens, server configurations, and infrastructure details.",
							]}
						/>
						<p>
							<strong>Intern Obligations:</strong> You agree to hold all Confidential
							Information in strictest confidence. You shall not disclose, publish,
							transmit, copy, photograph, export, reproduce, or distribute any
							Confidential Information to any third party, family member, friend, peer, or
							competitor, nor use it for any personal or commercial endeavor outside your
							authorized internship duties.
						</p>
						<p>
							This obligation of confidentiality shall survive the expiration, completion,
							or termination of your internship indefinitely, or for the maximum period
							permitted under applicable Indian law.
						</p>
					</PolicySection>

					{/* 18. Data Protection and Personal Information */}
					<PolicySection number={18} title="Data Protection and Personal Information">
						<p>
							Upstairs Techno collects, processes, and protects personal data related to
							applicants and interns in compliance with the Information Technology Act,
							2000, the Digital Personal Data Protection Act, 2023, and our{" "}
							<Link className={linkClassName} href="/privacy-policy">
								Privacy Policy
							</Link>
							.
						</p>
						<BulletList
							items={[
								"Intern Personal Data: We collect your application details, academic records, contact info, identity proofs, attendance logs, and performance evaluations solely for recruitment, internship management, certification, and statutory verification purposes.",
								"Handling Company & Client Data: If your project involves handling customer, user, client, or company data, you must exercise utmost care, abide by strict data security protocols, avoid downloading or copying data to personal storage, and adhere to applicable data protection standards.",
								"No Unauthorized Processing: Interns must never scrape, exfiltrate, sell, share, or misuse any personal data accessed during their internship.",
							]}
						/>
					</PolicySection>

					{/* 19. Intellectual Property */}
					<PolicySection number={19} title="Intellectual Property">
						<p>
							All works of authorship, software, code, scripts, algorithms, designs,
							architecture, documentation, inventions, discoveries, improvements, bug
							fixes, flowcharts, databases, and creative assets developed, created,
							conceived, or contributed to by you (whether solely or jointly with others)
							during the course of your internship or utilizing Company resources
							(&ldquo;Intern Works&rdquo;) shall be the exclusive property of Upstairs
							Techno Pvt. Ltd. from the moment of creation.
						</p>
						<BulletList
							items={[
								"Work Made for Hire: To the maximum extent permitted by law, all Intern Works shall be considered &ldquo;work made for hire&rdquo; commissioned by Upstairs Techno.",
								"Absolute Assignment: To the extent any Intern Works do not qualify as work made for hire, you hereby unconditionally, irrevocably, and perpetually assign and transfer to Upstairs Techno Pvt. Ltd. all worldwide rights, titles, interests, copyrights, patents, design rights, and intellectual property rights therein, without entitlement to additional compensation or royalties.",
								"Waiver of Moral Rights: To the extent permissible under Indian copyright law, you waive any moral rights, right of attribution, or right of integrity in relation to the Intern Works.",
								"Cooperation: You agree to execute any documents, assignments, or declarations reasonably required by Upstairs Techno to vest, perfect, or register its ownership rights in such intellectual property.",
								"No Independent Commercialization: You shall not publish, license, sell, fork, distribute, or open-source any Intern Works or Company code without explicit, written prior authorization from Upstairs Techno management.",
							]}
						/>
					</PolicySection>

					{/* 20. Use of Company Resources */}
					<PolicySection number={20} title="Use of Company Resources">
						<p>
							Interns may be granted temporary access to Company resources, including
							internal repositories, cloud consoles, software licenses, development
							environments, project management tools, communication platforms, and
							corporate email accounts.
						</p>
						<BulletList
							items={[
								"Company resources are provided exclusively for official internship duties and sanctioned learning exercises.",
								"Interns must not use Company resources for private commercial work, freelance projects, personal hobbies, unlawful activities, or unauthorized personal communications.",
								"Sharing accounts, credentials, API keys, or access tokens with unauthorized persons, including peers or external friends, is strictly prohibited.",
								"Upstairs Techno reserves the right to monitor, log, inspect, and audit all activities, communications, and data stored or transmitted through Company infrastructure in accordance with applicable laws.",
							]}
						/>
					</PolicySection>

					{/* 21. Cybersecurity and Acceptable Use */}
					<PolicySection number={21} title="Cybersecurity and Acceptable Use">
						<p>
							Maintaining a robust security posture is vital to Upstairs Techno and our
							clients. Interns must adhere to the following cybersecurity standards:
						</p>
						<BulletList
							items={[
								"Maintain strong, unique passwords and enable Multi-Factor Authentication (MFA) on all Company-related accounts and services.",
								"Do not install unapproved, unlicensed, or suspicious third-party software, browser extensions, or malicious tools on workstations used for Company work.",
								"Never commit private keys, passwords, database connection strings, or sensitive API credentials to version control repositories.",
								"Refrain from attempting unauthorized access, penetration testing, vulnerability exploitation, port scanning, or stress testing on Company or client servers without express written authorization.",
								"Immediately report any observed security anomalies, phishing attempts, credential compromises, or accidental data leaks to the designated security lead or mentor.",
							]}
						/>
					</PolicySection>

					{/* 22. Original Work and Plagiarism */}
					<PolicySection number={22} title="Original Work and Plagiarism">
						<p>
							All code, solutions, documentation, and technical deliverables submitted by
							interns must represent their own original intellectual effort and honest work.
						</p>
						<BulletList
							items={[
								"Plagiarism, unauthorized copy-pasting of proprietary code, or submitting another person&apos;s work as your own is strictly prohibited and constitutes gross misconduct.",
								"Open Source Compliance: If incorporating permissible open-source libraries or components, interns must verify that the license permits commercial usage (e.g., MIT, Apache 2.0, BSD) and must adhere strictly to attribution and dependency guidelines approved by their mentor.",
								"Copyleft & GPL Restrictions: Interns must not integrate viral copyleft software (such as GNU GPL or AGPL libraries) into Company proprietary codebases without prior written clearance.",
								"AI-Assisted Tools: Generative AI tools (such as code assistants) may only be used in compliance with Company guidelines. Interns must never paste confidential proprietary code or client data into unvetted public AI platforms.",
							]}
						/>
					</PolicySection>

					{/* 23. Professional Conduct */}
					<PolicySection number={23} title="Professional Conduct">
						<p>
							Upstairs Techno maintains a safe, inclusive, professional, and respectful
							environment for all team members, interns, partners, and clients.
						</p>
						<p>
							Interns are required to uphold high standards of decorum and professional
							ethics. The following behaviors are strictly prohibited and will result in
							immediate disciplinary action or termination:
						</p>
						<BulletList
							items={[
								"Any form of harassment, discrimination, hate speech, bullying, or intimidation based on race, religion, caste, gender, sexual orientation, disability, age, or background.",
								"Sexual harassment or unwelcome verbal, physical, or visual conduct of a sexual nature, in strict alignment with the Prevention of Sexual Harassment (POSH) regulations.",
								"Use of abusive, derogatory, obscene, or offensive language in verbal, written, or chat communications.",
								"Dishonesty, forgery, fabrication of timesheets, falsification of progress reports, or intentional misrepresentation.",
								"Insubordination or refusal to follow reasonable technical instructions from assigned mentors and leadership.",
							]}
						/>
					</PolicySection>

					{/* 24. Communication */}
					<PolicySection number={24} title="Communication">
						<p>
							Effective communication is essential for the smooth functioning of distributed
							and on-site engineering teams.
						</p>
						<BulletList
							items={[
								"Interns must use authorized Company channels (such as Company email, Slack, Microsoft Teams, Jira, or GitHub) for all project-related communication.",
								"Communications must remain professional, transparent, courteous, and timely.",
								"Interns must acknowledge messages, attend scheduled check-ins, and respond to inquiries from mentors or coordinators within standard working hours.",
								"Interns must not discuss internal Company matters, internal disputes, or project deliberations on public social media forums or external platforms.",
							]}
						/>
					</PolicySection>

					{/* 25. Leave and Absence */}
					<PolicySection number={25} title="Leave and Absence">
						<p>
							While we understand that academic examinations or emergencies may arise,
							interns must follow formal leave application procedures:
						</p>
						<BulletList
							items={[
								"Planned Leaves: Requests for academic exams, college submissions, or personal travel must be submitted to the mentor and HR at least three (3) business days in advance.",
								"Emergency Absences: In cases of sudden illness or emergencies, the intern must notify their mentor as early as possible on the day of absence.",
								"Leave Limits: Because internships are intensive and time-bound, excessive leaves may hinder learning progression. Taking leaves beyond permitted allowances may require extending the internship duration to compensate for missed hours.",
								"Unnotified Absence: Absence for more than three (3) consecutive business days without communication or approval will be treated as voluntary abandonment of the internship.",
							]}
						/>
					</PolicySection>

					{/* 26. Early Termination by the Intern */}
					<PolicySection number={26} title="Early Termination by the Intern">
						<p>
							If an intern wishes to discontinue their internship prior to the scheduled
							end date, they must follow proper resignation and transition protocols:
						</p>
						<BulletList
							items={[
								"Notice Period: The intern must provide at least seven (7) to fourteen (14) days written notice to their mentor and human resources department via email.",
								"Task Handover: During the notice period, the intern must complete ongoing tasks, document their work, merge pending pull requests, and hand over all materials to the designated team member.",
								"Asset & Credential Return: Return any physical assets or revoke/relinquish access credentials before departure.",
								"Impact on Certification: An intern who discontinues prematurely before fulfilling agreed milestones and tenure will not be entitled to an Internship Completion Certificate, Letter of Recommendation, or pending stipend disbursements, except where explicitly approved in writing under compassionate circumstances.",
							]}
						/>
					</PolicySection>

					{/* 27. Termination by Upstairs Techno */}
					<PolicySection number={27} title="Termination by Upstairs Techno">
						<p>
							Upstairs Techno reserves the absolute right to terminate an intern&apos;s
							engagement at any time, with or without prior notice, upon the occurrence of
							any of the following grounds:
						</p>
						<BulletList
							items={[
								"Breach of confidentiality, non-disclosure, or intellectual property terms.",
								"Acts of plagiarism, dishonesty, falsification of documents, or academic fraud.",
								"Violation of professional conduct standards, anti-harassment policies, or POSH guidelines.",
								"Repeated failure to meet performance benchmarks, project deliverables, or technical standards despite mentor guidance.",
								"Unexcused absenteeism, habitual tardiness, or abandonment of duties.",
								"Violation of cybersecurity protocols, intentional introduction of malicious code, or unauthorized system access.",
								"Operational restructuring, project cancellation, force majeure, or discontinuation of the specific internship track.",
							]}
						/>
						<p>
							In cases of termination for cause (misconduct, breach of confidentiality, or
							plagiarism), termination is immediate, no certificate will be granted, and
							the Company reserves all legal remedies available under civil and criminal law.
						</p>
					</PolicySection>

					{/* 28. Internship Completion */}
					<PolicySection number={28} title="Internship Completion">
						<p>
							Successful completion of the Internship Program requires completing a formal
							offboarding and exit clearance process:
						</p>
						<BulletList
							items={[
								"Comprehensive Project Handover: Complete submission and documentation of all source code, design assets, sprint items, and final project deliverables.",
								"Final Presentation / Demo: Presentation of the completed project or sprint summary to the review panel or mentor, where required.",
								"Exit Feedback: Completion of the intern exit survey and feedback discussion to help improve future program cohorts.",
								"De-provisioning: Immediate surrender, return, or de-provisioning of all Company accounts, software licenses, repository access, and internal channels.",
								"Settlement: Processing of final stipend amounts (if applicable) and issuance of digital/hardcopy completion credentials.",
							]}
						/>
					</PolicySection>

					{/* 29. References and Publicity */}
					<PolicySection number={29} title="References and Publicity">
						<p>
							Interns may accurately reference their internship experience on their
							professional profiles (e.g., LinkedIn, resume, portfolio), subject to the
							following constraints:
						</p>
						<BulletList
							items={[
								"Accurate Representation: The position, duration, and scope must be truthfully stated as an &ldquo;Intern&rdquo; or &ldquo;Trainee&rdquo; (e.g., &ldquo;Software Engineering Intern at Upstairs Techno Pvt. Ltd.&rdquo;). Interns must not misrepresent themselves as full-time permanent employees.",
								"No Confidential Disclosures: In public portfolios or case studies, interns must not showcase proprietary source code, private architecture diagrams, client names, or confidential business metrics without express written permission.",
								"Company Name & Logo: The Upstairs Techno name and logo may only be used to acknowledge internship affiliation in good faith, and must not be used to endorse external products or services.",
								"Employment Verification: Upstairs Techno provides standard background verification confirming dates of internship and role upon formal written inquiry from prospective employers or academic institutions.",
							]}
						/>
					</PolicySection>

					{/* 30. Third-Party Opportunities */}
					<PolicySection number={30} title="Third-Party Opportunities">
						<p>
							During the term of the internship, interns must ensure that external
							academic or personal activities do not conflict with their internship
							commitments:
						</p>
						<BulletList
							items={[
								"Interns must not undertake concurrent commercial freelance projects, consultancies, or employment engagements that create a direct conflict of interest with Upstairs Techno or its active clients.",
								"Interns must not work for a direct competitor of Upstairs Techno in the same technical space during their active internship period without prior disclosure and written approval.",
								"Academic obligations (classes, college tests) are permitted provided they are scheduled and communicated in advance in accordance with Section 25.",
							]}
						/>
					</PolicySection>

					{/* 31. No Employment Relationship */}
					<PolicySection number={31} title="No Employment Relationship">
						<p>
							You expressly acknowledge and agree that your relationship with Upstairs
							Techno Pvt. Ltd. during the Internship Program is strictly that of a trainee
							and intern.
						</p>
						<BulletList
							items={[
								"Nothing contained in these Internship Terms, the Offer Letter, or program activities shall be construed as creating an employer-employee relationship, partnership, agency, or joint venture between you and Upstairs Techno.",
								"Interns are not entitled to statutory employee benefits, paid annual leave, sick leave encashment, provident fund (PF), employee state insurance (ESI), gratuity, bonuses, or severance compensation.",
								"Interns have no authority to bind, sign contracts on behalf of, or represent Upstairs Techno before third parties or public entities.",
							]}
						/>
					</PolicySection>

					{/* 32. Limitation of Liability */}
					<PolicySection number={32} title="Limitation of Liability">
						<p>
							To the maximum extent permitted by applicable Indian law:
						</p>
						<BulletList
							items={[
								"Upstairs Techno Pvt. Ltd., its directors, officers, employees, mentors, and affiliates shall not be liable to any intern for any indirect, incidental, special, consequential, or punitive damages, including loss of future profits, academic delays, loss of data, hardware malfunction, or personal expenditure, arising out of or in connection with the Internship Program.",
								"The Company provides learning environments, development tools, and mentorship on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied.",
								"The total aggregate liability of Upstairs Techno arising under or related to your internship engagement, whether in contract, tort (including negligence), or otherwise, shall not exceed the total stipend amount actually paid to you during your internship (or INR 1,000 in the case of non-stipendiary internships).",
							]}
						/>
					</PolicySection>

					{/* 33. Changes to the Internship Program */}
					<PolicySection number={33} title="Changes to the Internship Program">
						<p>
							Upstairs Techno constantly evolves its training methodologies and technical
							frameworks to reflect modern industry developments. The Company reserves the
							right, at its discretion, to:
						</p>
						<BulletList
							items={[
								"Modify, update, or revise the curriculum, training modules, project tracks, or learning toolsets.",
								"Reassign mentors, project leads, or team compositions as required by operational exigencies.",
								"Alter project delivery timelines, evaluation rubrics, or technical frameworks.",
								"Adjust delivery modes (e.g., transition between remote, hybrid, or on-site arrangements) where reasonable or required by administrative circumstances.",
							]}
						/>
					</PolicySection>

					{/* 34. Changes to These Internship Terms */}
					<PolicySection number={34} title="Changes to These Internship Terms">
						<p>
							We reserve the right to revise, amend, or update these Internship Terms at
							any time. Any modifications will be posted on this page with an updated
							&ldquo;Last Updated&rdquo; date.
						</p>
						<p>
							It is your responsibility to review these Internship Terms periodically.
							Continued participation in the Internship Program following the posting of
							changes constitutes your acceptance of the amended terms.
						</p>
					</PolicySection>

					{/* 35. Governing Law */}
					<PolicySection number={35} title="Governing Law">
						<p>
							These Internship Terms, your internship offer, and any dispute, claim, or
							controversy arising out of or related to your engagement with Upstairs Techno
							Pvt. Ltd. shall be governed by, interpreted, and construed in accordance
							with the laws of the <strong>Republic of India</strong>, without regard to
							its conflict of law principles.
						</p>
						<p>
							Any legal action, suit, or proceeding arising under these Internship Terms
							shall be instituted exclusively in the competent courts located in{" "}
							<strong>Pune, Maharashtra, India</strong>, and you hereby consent to the
							exclusive personal jurisdiction of such courts.
						</p>
					</PolicySection>

					{/* 36. Severability */}
					<PolicySection number={36} title="Severability">
						<p>
							If any provision of these Internship Terms is determined by a court of
							competent jurisdiction to be invalid, illegal, or unenforceable in any
							respect, such invalidity or unenforceability shall not affect the remaining
							provisions of these terms.
						</p>
						<p>
							The invalid provision shall be severed or modified to the minimum extent
							necessary to render it valid and enforceable while preserving the original
							commercial and educational intent of the parties.
						</p>
					</PolicySection>

					{/* 37. Contact Us */}
					<PolicySection number={37} title="Contact Us">
						<p>
							If you have any questions, concerns, or requests regarding these Internship
							Terms &amp; Conditions, the Internship Program, or your internship status,
							please reach out to us:
						</p>
						<div className="rounded-xl border border-grid/50 bg-paper/60 p-6">
							<p className="font-semibold text-ink">Upstairs Techno Pvt. Ltd.</p>
							<p className="mt-2">
								<strong>Email:</strong>{" "}
								<a
									className={linkClassName}
									href="mailto:contact@upstairstechno.com"
								>
									contact@upstairstechno.com
								</a>
							</p>
							<p className="mt-2">
								<strong>Address:</strong>
								<br />
								Rajeamarsinha Colony,
								<br />
								Malegaon Bk, Baramati,
								<br />
								Pune, Maharashtra &ndash; 413115, India
							</p>
						</div>
					</PolicySection>

					{/* 38. Acknowledgement and Acceptance */}
					<PolicySection number={38} title="Acknowledgement and Acceptance">
						<p>
							By applying for, accepting an offer for, or participating in the Upstairs
							Techno Internship Program, you acknowledge that:
						</p>
						<BulletList
							items={[
								"You have carefully read and understood these Internship Terms & Conditions in their entirety.",
								"You agree to comply with all obligations, rules, policies, and professional standards set forth herein.",
								"You have reviewed and accepted our Privacy Policy, Cookie Policy, and General Terms & Conditions.",
								"You acknowledge that this internship is a learning engagement and does not confer any entitlement to permanent employment.",
								"You agree to protect all Company intellectual property, trade secrets, and confidential information during and after your internship.",
							]}
						/>
						<p className="pt-6 font-semibold text-ink">
							&copy; 2026 Upstairs Techno Pvt. Ltd. All Rights Reserved.
						</p>
					</PolicySection>
				</div>
			}
		/>
	);
}