import type { Metadata } from "next";
import Link from "next/link";
import InformationPage from "@/components/InformationPage";

export const metadata: Metadata = {
	title: "Refund & Cancellation Policy | Upstairs Techno Pvt. Ltd.",
	description:
		"Read the Refund & Cancellation Policy of Upstairs Techno Pvt. Ltd. covering cancellations, refunds, payments, training programs, internships, OJT, assessments, career services, digital services, and other paid services.",
};

const sectionClassName = "space-y-4";
const headingClassName = "font-display text-2xl font-semibold text-ink";
const subheadingClassName = "font-display text-lg font-semibold text-ink";
const bodyClassName = "space-y-4 text-base leading-relaxed text-slate";
const listClassName = "list-disc space-y-2 pl-6";
const orderedListClassName = "list-decimal space-y-2 pl-6";
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

function OrderedList({ items }: { items: React.ReactNode[] }) {
	return (
		<ol className={orderedListClassName}>
			{items.map((item, i) => (
				<li key={i}>{item}</li>
			))}
		</ol>
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

export default function RefundPolicyPage() {
	return (
		<InformationPage
			eyebrow="Legal"
			title="REFUND &amp; CANCELLATION POLICY"
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
							This Refund &amp; Cancellation Policy (&ldquo;Refund Policy&rdquo;) outlines
							the terms, rules, processes, and conditions under which cancellations and
							refunds are handled for all payments made to Upstairs Techno across our
							website, platforms, applications, educational training programs,
							internships, On-the-Job Training (&ldquo;OJT&rdquo;) tracks, coding
							competitions, assessments, career development services, software
							development projects, and IT consulting solutions (collectively, the
							&ldquo;Services&rdquo;).
						</p>
						<p>
							By enrolling in any program, purchasing any digital offering, submitting
							payment, or commissioning any service from Upstairs Techno, you
							(&ldquo;Customer,&rdquo; &ldquo;Learner,&rdquo; &ldquo;Client,&rdquo; or
							&ldquo;you&rdquo;) acknowledge that you have read, understood, and agreed to
							be bound by this Refund Policy.
						</p>
						<p>
							This policy must be read in conjunction with our{" "}
							<Link className={linkClassName} href="/terms-and-conditions">
								Terms &amp; Conditions
							</Link>
							,{" "}
							<Link className={linkClassName} href="/internship-terms">
								Internship Terms &amp; Conditions
							</Link>
							,{" "}
							<Link className={linkClassName} href="/privacy-policy">
								Privacy Policy
							</Link>
							, and{" "}
							<Link className={linkClassName} href="/cookie-policy">
								Cookie Policy
							</Link>
							.
						</p>
					</PolicySection>

					{/* 2. Scope */}
					<PolicySection number={2} title="Scope">
						<p>
							This Refund Policy applies comprehensively to all transactions, payments,
							course registrations, exam fees, subscription plans, advance retainers, and
							service agreements entered into with Upstairs Techno Pvt. Ltd., whether
							conducted directly through our website, via authorized digital payment
							gateways, bank transfers, or through tailored commercial contracts.
						</p>
						<p>
							Where an explicit written agreement (such as a Master Services Agreement,
							Statement of Work, or signed commercial proposal) exists between Upstairs
							Techno and a corporate client containing custom cancellation or milestone
							refund terms, the terms of that specific written agreement shall prevail to
							the extent of any direct inconsistency with this general policy.
						</p>
					</PolicySection>

					{/* 3. Before Making a Payment */}
					<PolicySection number={3} title="Before Making a Payment">
						<p>
							We strongly encourage all prospective learners, applicants, and clients to
							perform due diligence before completing any financial transaction with
							Upstairs Techno.
						</p>
						<p>Prior to making a payment, you should ensure that you have:</p>
						<BulletList
							items={[
								"Carefully reviewed the program syllabus, curriculum breakdown, prerequisites, delivery mode (live virtual, self-paced, or on-site), and scheduled cohort timings.",
								"Verified that your personal computer hardware, operating system, and internet connectivity meet the published minimum technical requirements for the program.",
								"Assessed your availability, academic commitments, and personal schedule to ensure consistent attendance and participation.",
								"Understood the exact deliverables, milestone schedules, and scope of work defined for any customized software or IT consulting services.",
								"Clarified any questions regarding fee components, non-refundable charges, and certification criteria by contacting our support team in advance.",
							]}
						/>
						<p>
							Completing a payment signifies that you have reviewed all relevant
							information and accept the commitment required for the chosen service.
						</p>
					</PolicySection>

					{/* 4. General Refund Principle */}
					<PolicySection number={4} title="General Refund Principle">
						<p>
							Unless explicitly stated otherwise in this policy or agreed upon in a
							separate written contract, all fees and payments made to Upstairs Techno Pvt.
							Ltd. are <strong>non-refundable and non-transferable</strong> once program
							onboarding has commenced, digital credentials have been issued, or project
							resources have been provisioned.
						</p>
						<p>
							This principle is established because enrollment in our cohorts, training
							tracks, and technical projects entails immediate resource allocations,
							including seat reservations, mentor scheduling, cloud lab provisioning,
							licensing fees, and administrative setup costs that cannot be recovered once
							initiated.
						</p>
					</PolicySection>

					{/* 5. Training Programs and Courses */}
					<PolicySection number={5} title="Training Programs and Courses">
						<p>
							For fee-based educational courses, bootcamps, workshops, and structured
							technical training tracks offered by Upstairs Techno:
						</p>
						<BulletList
							items={[
								"Cancellation Before Batch Start: If you submit a formal written cancellation request at least seven (7) calendar days prior to the officially scheduled batch commencement date, you are eligible for a refund of up to eighty percent (80%) of the total tuition fee paid. The remaining twenty percent (20%) is retained as a non-refundable administrative and enrollment processing fee.",
								"Cancellation Within Seven Days of Start: If cancellation is requested less than seven (7) days before the batch start date, fifty percent (50%) of the tuition fee paid is refundable, with fifty percent (50%) retained for reserved seat costs and mentor scheduling.",
								"After Batch Commencement: Once the first scheduled class or orientation session of the batch has taken place, or once login credentials, digital courseware, or repository access have been provided, the full fee becomes strictly non-refundable.",
								"Non-Attendance: Failure to attend live classes, non-completion of assignments, personal scheduling conflicts, college examination clashes, or change of personal mind do not qualify for a refund or pro-rata adjustment.",
								"Batch Rescheduling Option: If you are unable to continue due to verified medical or personal emergencies before completion of twenty-five percent (25%) of the course duration, you may request a one-time transfer to a future cohort within six (6) months, subject to seat availability and administrative approval.",
							]}
						/>
					</PolicySection>

					{/* 6. Internship Programs */}
					<PolicySection number={6} title="Internship Programs">
						<p>
							Upstairs Techno conducts standard corporate engineering internships
							without charging recruitment or placement fees.
						</p>
						<p>
							Where Upstairs Techno offers specialized training-cum-internship tracks or
							guided experiential learning cohorts that include formal classroom training,
							mentored project simulations, and lab access:
						</p>
						<BulletList
							items={[
								"Any applicable fees cover the structured technical curriculum, dedicated engineering mentorship, development environments, and administrative support provided throughout the learning phase.",
								"Prior to Commencement: Written withdrawal requests submitted at least five (5) business days before the official start date are eligible for a seventy-five percent (75%) refund (twenty-five percent retained for administrative overhead).",
								"After Onboarding or Repository Allocation: Once the internship begins, access credentials or GitHub repositories are granted, or project allocation is finalized, all program fees are strictly non-refundable.",
								"Voluntary Departure or Termination: If an intern discontinues the internship early, fails to complete assigned tasks, abandons their project, or is terminated for misconduct or breach of confidentiality, no refund or compensation will be provided.",
							]}
						/>
					</PolicySection>

					{/* 7. OJT Programs */}
					<PolicySection number={7} title="OJT Programs">
						<p>
							On-the-Job Training (&ldquo;OJT&rdquo;) programs provide intensive,
							industry-aligned practical experience on live systems, architectural
							blueprints, and production workflows.
						</p>
						<BulletList
							items={[
								"Fees for OJT tracks cover specialized mentor bandwidth, tooling licenses, code review allocations, and project environment setup.",
								"Cancellation requests must be submitted in writing at least seven (7) days prior to the designated orientation date to be eligible for a partial refund (subject to a twenty-five percent administrative deduction).",
								"Once the OJT orientation has occurred, project briefs have been assigned, or access to Company staging environments has been granted, fees become entirely non-refundable.",
								"Absence, lack of milestone delivery, or abandonment of OJT duties does not warrant any refund.",
							]}
						/>
					</PolicySection>

					{/* 8. Assessments, Competitions, and Tests */}
					<PolicySection number={8} title="Assessments, Competitions, and Tests">
						<p>
							Registration and participation fees for coding competitions (such as Code
							Nova), technical screening challenges, online hackathons, skill-grading
							tests, or certification examinations are <strong>strictly non-refundable</strong>.
						</p>
						<BulletList
							items={[
								"Once registered, test platform slots, automated evaluation tokens, and grading infrastructure are instantly provisioned.",
								"No refunds will be granted if a candidate fails to appear, arrives late, experiences personal network failures, or fails to complete the test within the allocated timeframe.",
								"Disqualification resulting from malpractice, plagiarism, code sharing, or multiple account logins forfeits all fees immediately without recourse.",
							]}
						/>
					</PolicySection>

					{/* 9. Recruitment and Career Services */}
					<PolicySection number={9} title="Recruitment and Career Services">
						<p>
							For paid career development services, including professional resume
							rebuilding, portfolio reviews, mock technical interviews, and personalized
							career coaching sessions:
						</p>
						<BulletList
							items={[
								"Prior to Service Delivery: You may request cancellation or rescheduling at least twenty-four (24) hours before a scheduled 1-on-1 interview or coaching session. A rescheduled session will be accommodated at no additional fee.",
								"Once Delivered: Once a resume review has been completed and delivered, or once a mock interview or coaching session has concluded, fees are deemed fully earned and non-refundable.",
								"No-Show Policy: If a candidate fails to attend a scheduled 1-on-1 session without prior written notice of at least twenty-four hours, the session will be marked as delivered with no refund or automatic reschedule.",
							]}
						/>
					</PolicySection>

					{/* 10. Software and Digital Services */}
					<PolicySection number={10} title="Software and Digital Services">
						<p>
							Custom software development, web applications, mobile engineering, cloud
							architecture, UI/UX design, AI integration, and IT consulting services are
							delivered under structured contractual milestones.
						</p>
						<BulletList
							items={[
								"Advance & Retainer Payments: Initial deposits, advance retainer payments, and discovery phase fees are non-refundable, as they compensate Upstairs Techno for preliminary architecture, research, team staffing, and initial labor expenditure.",
								"Milestone Payments: Payments tied to approved milestones are non-refundable once the milestone deliverable has been presented, reviewed, or formally signed off by the client.",
								"Work-in-Progress: If a commercial project is terminated prior to a milestone completion, the client remains liable for all billable engineering hours, tooling, and infrastructure costs accrued up to the effective termination date.",
							]}
						/>
					</PolicySection>

					{/* 11. Cancellation by the Customer */}
					<PolicySection number={11} title="Cancellation by the Customer">
						<p>
							Customers or learners who wish to cancel a service, enrollment, or project
							must submit an explicit written notice via email to{" "}
							<a className={linkClassName} href="mailto:contact@upstairstechno.com">
								contact@upstairstechno.com
							</a>
							.
						</p>
						<BulletList
							items={[
								"Cancellation notices must originate from the registered email address associated with the transaction.",
								"The effective cancellation date is the timestamp when the written email is received by Upstairs Techno.",
								"Verbal requests, phone calls, or messages sent via informal chat applications do not constitute valid legal cancellation requests.",
								"Applicable refunds will be calculated strictly based on the notice timestamp relative to the program start date or service milestone, subject to applicable administrative deductions.",
							]}
						/>
					</PolicySection>

					{/* 12. Cancellation by Upstairs Techno */}
					<PolicySection number={12} title="Cancellation by Upstairs Techno">
						<p>
							Upstairs Techno reserves the right to postpone, cancel, or restructure any
							scheduled batch, training program, competition, or service due to
							unforeseen operational constraints, insufficient batch enrollment, mentor
							unavailability, technical infrastructure failure, or force majeure events.
						</p>
						<p>
							In the rare event that Upstairs Techno permanently cancels a program or
							service prior to commencement:
						</p>
						<BulletList
							items={[
								"The customer may elect to transfer their registration and full fee credit to an upcoming cohort or alternative program of equal value at no additional charge, OR",
								"Receive a full (100%) refund of the actual tuition or registration fee paid to Upstairs Techno for the cancelled offering.",
							]}
						/>
						<p>
							Under no circumstances shall the liability of Upstairs Techno exceed the
							actual fee received by us for the specific cancelled service. We are not
							liable for any ancillary costs, travel expenses, personal equipment
							purchases, or opportunity costs incurred by the customer.
						</p>
					</PolicySection>

					{/* 13. Duplicate Payments */}
					<PolicySection number={13} title="Duplicate Payments">
						<p>
							In the event that a customer is charged more than once for the same service,
							program, or invoice due to network latency, multiple clicks, or payment
							gateway errors:
						</p>
						<BulletList
							items={[
								"The customer must notify Upstairs Techno immediately by emailing payment receipts and transaction IDs to contact@upstairstechno.com.",
								"Upon verification of the duplicate receipt in our merchant account, the extra charge will be refunded in full (100%) without administrative deduction.",
								"Duplicate payment refunds are initiated within five (5) business days of verification.",
							]}
						/>
					</PolicySection>

					{/* 14. Failed Transactions */}
					<PolicySection number={14} title="Failed Transactions">
						<p>
							A failed transaction occurs when an amount is debited from your bank account,
							credit card, or UPI wallet, but the transaction fails on the payment gateway
							screen and no confirmation or access receipt is generated by Upstairs Techno.
						</p>
						<BulletList
							items={[
								"In most cases, the debited amount is held by the customer&apos;s bank or intermediate payment aggregator and is automatically reconciled and returned to your source account within five (5) to seven (7) banking days.",
								"If the amount is not returned within seven (7) banking days, please contact your issuing bank with the Bank Reference Number (RRN).",
								"Upstairs Techno will assist in investigating failed transaction records upon receiving your transaction screenshot, date, time, and RRN.",
							]}
						/>
					</PolicySection>

					{/* 15. Refund Request Process */}
					<PolicySection number={15} title="Refund Request Process">
						<p>
							To initiate a formal refund request, you must email{" "}
							<a className={linkClassName} href="mailto:contact@upstairstechno.com">
								contact@upstairstechno.com
							</a>{" "}
							with the subject line:{" "}
							<strong>&ldquo;Refund Request &ndash; [Your Full Name] &ndash; [Payment ID]&rdquo;</strong>.
						</p>
						<p>The email must contain the following mandatory information:</p>
						<BulletList
							items={[
								"Full Name of the registered learner, client, or participant.",
								"Registered Email Address used during registration or checkout.",
								"Phone Number associated with the booking, if applicable.",
								"Service or Program Name (e.g., Full Stack Development Bootcamp, Code Nova Registration).",
								"Payment / Transaction ID issued by the payment gateway or bank.",
								"Payment Date and amount paid.",
								"Clear, detailed reason for the refund request.",
								"Any supporting information (e.g., payment receipt, screenshot of transaction failure, medical certificate where applicable).",
							]}
						/>
						<p>
							Incomplete requests lacking mandatory information will result in processing
							delays until the required details are furnished.
						</p>
					</PolicySection>

					{/* 16. Refund Review */}
					<PolicySection number={16} title="Refund Review">
						<p>
							Upon receiving your refund request, our operations and finance teams will
							undertake a formal review:
						</p>
						<OrderedList
							items={[
								"Verification: Verifying the payment record, transaction authenticity, and merchant account settlement.",
								"Eligibility Check: Assessing the request against the specific terms of this Refund Policy, notice timestamps, attendance logs, and service status.",
								"Determination: A formal written decision approving or rejecting the refund request will be emailed to your registered address within five (5) to seven (7) business days of receiving complete documentation.",
								"Communication: If rejected, the reason for non-eligibility will be clearly explained with reference to the applicable policy section.",
							]}
						/>
					</PolicySection>

					{/* 17. Refund Processing */}
					<PolicySection number={17} title="Refund Processing">
						<p>
							Once a refund request has been officially approved in writing:
						</p>
						<BulletList
							items={[
								"Mode of Credit: Approved refunds will be credited back strictly to the original payment source (credit card, debit card, net banking account, or UPI handle) utilized during the original transaction.",
								"No Third-Party Payouts: Under no circumstances will refunds be remitted in cash or redirected to third-party bank accounts, ensuring compliance with anti-money laundering and digital financial regulations.",
								"Settlement Timeline: Once initiated by Upstairs Techno, payment aggregators and banking institutions typically require seven (7) to fourteen (14) business days to post the credit to your account, depending on your card issuer or banking clearing cycle.",
							]}
						/>
					</PolicySection>

					{/* 18. Payment Gateway and Transaction Charges */}
					<PolicySection number={18} title="Payment Gateway and Transaction Charges">
						<p>
							Customers acknowledge that online financial transactions incur third-party
							payment gateway processing fees, banking interchange charges, convenience
							fees, and statutory taxes (including Goods and Services Tax &ndash; GST).
						</p>
						<BulletList
							items={[
								"Unless the refund is necessitated entirely by Upstairs Techno&apos;s cancellation of a program or an error on our part, all third-party payment gateway transaction fees (typically 2% to 3%) and non-recoverable statutory taxes will be deducted from the gross refund amount.",
								"Any foreign currency exchange losses, intermediary correspondent banking fees, or cross-border markup charges are the sole responsibility of the customer and are not refundable by Upstairs Techno.",
							]}
						/>
					</PolicySection>

					{/* 19. Non-Refundable Circumstances */}
					<PolicySection number={19} title="Non-Refundable Circumstances">
						<p>
							Refunds will <strong>not</strong> be granted under any of the following
							circumstances:
						</p>
						<BulletList
							items={[
								"Requests submitted after the expiration of the eligible refund timeframes specified in this policy.",
								"Any course, internship, or OJT track where the cohort has already commenced, orientation has taken place, or digital access credentials have been issued.",
								"Change of mind, loss of interest, subjective dissatisfaction with teaching style where curriculum benchmarks are met, or personal financial hardship arising after enrollment.",
								"Scheduling conflicts with personal commitments, academic examinations, employment duties, or travel plans after batch commencement.",
								"Failure to attend live lectures, missed mentoring sessions, or failure to submit assignments, projects, or assessments.",
								"Inadequate learner hardware, operating system incompatibility, outdated software, or poor internet connectivity on the part of the learner.",
								"Purchases made during promotional flash sales, clearance offers, or utilizing non-refundable scholarship vouchers.",
								"Suspension, expulsion, or termination resulting from violation of Company rules, intellectual property infringement, harassment, or code of conduct breaches.",
							]}
						/>
					</PolicySection>

					{/* 20. Fraudulent or Unauthorized Transactions */}
					<PolicySection number={20} title="Fraudulent or Unauthorized Transactions">
						<p>
							Upstairs Techno takes digital financial security and fraud prevention very
							seriously.
						</p>
						<BulletList
							items={[
								"If you suspect an unauthorized transaction has been made on our platforms using your payment instrument, you must notify your bank immediately and alert Upstairs Techno at contact@upstairstechno.com within forty-eight (48) hours of the charge.",
								"We will freeze the associated account access immediately and coordinate with our payment gateway partner to trace the transaction logs and IP address.",
								"If our investigation confirms unauthorized fraudulent use, we will facilitate a full refund to the legitimate cardholder, provided the fraud was reported before service delivery commenced.",
								"Any individual filing false, bad-faith, or fraudulent chargeback claims will face immediate account termination and potential legal proceedings under Indian cyber law.",
							]}
						/>
					</PolicySection>

					{/* 21. Refunds for Services Affected by Misconduct */}
					<PolicySection number={21} title="Refunds for Services Affected by Misconduct">
						<p>
							Upstairs Techno enforces strict standards of academic honesty, professional
							conduct, and cybersecurity across all learning portals and projects.
						</p>
						<p>
							If any learner, intern, candidate, or client is suspended, expelled, or
							terminated from a program due to:
						</p>
						<BulletList
							items={[
								"Cheating, plagiarism, unauthorized code sharing, or academic dishonesty.",
								"Verbal abuse, harassment, discrimination, or violation of our anti-harassment or POSH policies.",
								"Unauthorized access, security tampering, denial-of-service attempts, or reverse engineering of Company systems.",
								"Breach of confidentiality, non-disclosure agreements, or intellectual property rights.",
							]}
						/>
						<p>
							<strong>All fees paid shall be completely forfeited</strong>, no refund shall
							be issued, and no certificate or credential will be granted.
						</p>
					</PolicySection>

					{/* 22. Promotions, Discounts, and Coupons */}
					<PolicySection number={22} title="Promotions, Discounts, and Coupons">
						<p>
							Services, courses, or competition entries acquired through promotional
							campaigns, discount coupons, early-bird pricing, combo bundles, or corporate
							vouchers are subject to the following conditions:
						</p>
						<BulletList
							items={[
								"Promotional and deeply discounted fees are generally non-refundable unless expressly stated otherwise in the promotion terms.",
								"Where a partial refund is approved for a discounted bundle, the refund amount will be calculated based on the actual net amount paid by the customer, not the full nominal list price.",
								"Promotional codes, coupon values, and referral credits hold no independent cash value and cannot be refunded or redeemed for cash.",
							]}
						/>
					</PolicySection>

					{/* 23. Subscription Services */}
					<PolicySection number={23} title="Subscription Services">
						<p>
							Where Upstairs Techno offers periodic subscription-based software tools,
							learning library memberships, or recurring digital services:
						</p>
						<BulletList
							items={[
								"You may cancel your recurring subscription at any time through your account dashboard or by written email to contact@upstairstechno.com.",
								"Cancellation will take effect at the conclusion of the current prepaid billing cycle (monthly, quarterly, or annual).",
								"You will retain uninterrupted access to the subscribed service until the end of the current billing period.",
								"No pro-rata refunds or credits will be issued for unused portions, days, or features within an active billing cycle.",
							]}
						/>
					</PolicySection>

					{/* 24. Client Projects and Custom Services */}
					<PolicySection number={24} title="Client Projects and Custom Services">
						<p>
							B2B commercial engineering contracts, custom software development, digital
							transformation consulting, and agency services are governed primarily by
							their tailored Master Services Agreement (&ldquo;MSA&rdquo;), Statement of
							Work (&ldquo;SOW&rdquo;), or Service Contract.
						</p>
						<BulletList
							items={[
								"In the event of project termination by the client, any refund of unexpended milestone funds shall be subject to a comprehensive project audit determining actual engineering hours worked, third-party licensing expenses incurred, and deliverables submitted.",
								"Any completed and delivered project milestones, design wireframes, architectural specifications, or deployed code are strictly non-refundable.",
								"Payment for ongoing sprint cycles is deemed earned as labor and technical deliverables are performed.",
							]}
						/>
					</PolicySection>

					{/* 25. No Refund for Career Outcome */}
					<PolicySection number={25} title="No Refund for Career Outcome">
						<p>
							Upstairs Techno Pvt. Ltd. provides industry-focused education, vocational
							training, project mentorship, and skill enhancement programs.
						</p>
						<p>
							<strong>We do not guarantee, promise, or warrant:</strong>
						</p>
						<BulletList
							items={[
								"Employment, job placement, or hiring with Upstairs Techno or any third-party employer.",
								"Specific salary packages, compensation brackets, or career promotions.",
								"Passing scores or success in external university exams or competitive recruitment drives.",
							]}
						/>
						<p>
							Career outcomes depend fundamentally on individual dedication, continuous
							effort, interview readiness, personal problem-solving aptitude, and external
							market economic factors. Consequently, the non-attainment of an external job
							offer, interview shortlist, or career outcome shall{" "}
							<strong>under no circumstances</strong> constitute a legitimate ground for a
							refund.
						</p>
					</PolicySection>

					{/* 26. Changes to This Refund Policy */}
					<PolicySection number={26} title="Changes to This Refund Policy">
						<p>
							Upstairs Techno Pvt. Ltd. reserves the right to amend, modify, update, or
							replace this Refund &amp; Cancellation Policy at its sole discretion at any
							time.
						</p>
						<p>
							Any modifications will become effective immediately upon posting to this
							page with the updated &ldquo;Last Updated&rdquo; date. We encourage you to
							review this policy periodically. Your continued registration, payment, or
							engagement with our Services following any modifications constitutes full
							acceptance of the revised terms.
						</p>
					</PolicySection>

					{/* 27. Applicable Law */}
					<PolicySection number={27} title="Applicable Law">
						<p>
							This Refund &amp; Cancellation Policy and any disputes, claims, or legal
							proceedings arising out of or in connection with payments, cancellations, or
							refunds shall be governed by, interpreted, and construed in accordance with
							the laws of the <strong>Republic of India</strong>, without giving effect to
							any conflict of law principles.
						</p>
						<p>
							The competent civil courts located in{" "}
							<strong>Pune, Maharashtra, India</strong> shall have exclusive jurisdiction
							over all disputes, claims, or matters arising under or related to this
							Refund Policy.
						</p>
					</PolicySection>

					{/* 28. Contact Us */}
					<PolicySection number={28} title="Contact Us">
						<p>
							If you have any questions, concerns, or requests regarding this Refund &amp;
							Cancellation Policy, or wish to inquire about a transaction, please contact
							us:
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

					{/* 29. Acknowledgement */}
					<PolicySection number={29} title="Acknowledgement">
						<p>
							By registering for any program, commissioning any service, or completing a
							payment to Upstairs Techno Pvt. Ltd., you acknowledge that:
						</p>
						<BulletList
							items={[
								"You have read, understood, and agreed to this Refund & Cancellation Policy in its entirety.",
								"You understand the non-refundable nature of fees once onboarding, digital access, or services have commenced.",
								"You agree to follow the formal refund request process and abide by the final decision rendered by Upstairs Techno in accordance with these terms.",
								"You have reviewed and accepted our general Terms & Conditions, Privacy Policy, Cookie Policy, and Internship Terms & Conditions where applicable.",
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