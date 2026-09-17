import type { Metadata } from "next";
import Link from "next/link";
import InformationPage from "@/components/InformationPage";

export const metadata: Metadata = {
	title: "Terms & Conditions | Upstairs Techno Pvt. Ltd.",
	description:
		"Read the Terms & Conditions governing the use of Upstairs Techno Pvt. Ltd. websites, services, recruitment, training, OJT, internship programs, and other digital services.",
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

export default function TermsAndConditionsPage() {
	return (
		<InformationPage
			eyebrow="Legal"
			title="TERMS &amp; CONDITIONS"
			intro="Last Updated: September 16, 2026"
			sections={[]}
			content={
				<div className="mt-10 space-y-10">
					{/* 1. Introduction */}
					<PolicySection number={1} title="Introduction">
						<p>
							Welcome to <strong>Upstairs Techno Pvt. Ltd.</strong> (&ldquo;Upstairs
							Techno,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
						</p>
						<p>
							These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use
							of our website, applications, platforms, products, services,
							recruitment services, training programs, OJT programs, internship
							programs, and other digital services (collectively, the
							&ldquo;Services&rdquo;).
						</p>
						<p>
							By accessing or using our Services, you agree to be bound by these
							Terms. If you do not agree with these Terms, please do not access
							or use our Services.
						</p>
						<p>
							These Terms should be read together with our{" "}
							<Link className={linkClassName} href="/privacy-policy">
								Privacy Policy
							</Link>{" "}
							and{" "}
							<Link className={linkClassName} href="/cookie-policy">
								Cookie Policy
							</Link>
							, which are incorporated into these Terms by reference.
						</p>
					</PolicySection>

					{/* 2. About Upstairs Techno */}
					<PolicySection number={2} title="About Upstairs Techno">
						<p>
							<strong>Upstairs Techno Pvt. Ltd.</strong> is a technology company
							providing software development, IT consulting, digital marketing,
							AI and automation, education, training, talent development, and
							related technology services.
						</p>
						<p>Our Services may include, but are not limited to:</p>
						<BulletList
							items={[
								"Software development and engineering services",
								"IT consulting and advisory services",
								"Digital marketing services",
								"AI and automation solutions",
								"Technology education and training programs",
								"OJT (On-the-Job Training) programs",
								"Internship programs",
								"Talent development and recruitment services",
								"Assessments, competitions, and related programs",
								"Other digital products and services",
							]}
						/>
					</PolicySection>

					{/* 3. Eligibility */}
					<PolicySection number={3} title="Eligibility">
						<p>
							By accessing or using our Services, you represent and warrant
							that:
						</p>
						<BulletList
							items={[
								"You are of legal age to form a binding contract under applicable law",
								"You have the authority to enter into these Terms on behalf of yourself or any organization you represent",
								"Your use of the Services complies with applicable laws and regulations",
								"You are not prohibited from using the Services under any applicable law",
							]}
						/>
						<p>
							If you are accessing or using the Services on behalf of an
							organization, you represent that you have the authority to bind
							that organization to these Terms.
						</p>
						<p>
							Certain Services may have additional eligibility requirements,
							which will be communicated at the time of registration or
							application.
						</p>
					</PolicySection>

					{/* 4. User Registration and Accounts */}
					<PolicySection number={4} title="User Registration and Accounts">
						<p>
							Some of our Services may require you to create an account or
							register. When registering, you agree to:
						</p>
						<BulletList
							items={[
								"Provide accurate, complete, and up-to-date information",
								"Maintain and update your information as necessary",
								"Keep your login credentials confidential",
								"Not share your account access with others",
								"Notify us promptly of any unauthorized access or use of your account",
								"Take responsibility for all activities that occur under your account",
							]}
						/>
						<p>
							We reserve the right to suspend or terminate accounts that contain
							inaccurate information, that violate these Terms, or for other
							legitimate operational reasons.
						</p>
						<p>
							You are responsible for ensuring the security of your account
							credentials. We are not responsible for losses or harm arising
							from unauthorized access to your account caused by your failure to
							protect your credentials.
						</p>
					</PolicySection>

					{/* 5. Use of Our Website and Services */}
					<PolicySection number={5} title="Use of Our Website and Services">
						<p>
							When accessing or using our Website and Services, you agree to:
						</p>
						<BulletList
							items={[
								"Use the Services only for lawful purposes",
								"Not engage in any activity that disrupts or interferes with the Services",
								"Not attempt unauthorized access to any part of the Services or related systems",
								"Not use the Services to transmit harmful, offensive, or unlawful content",
								"Not scrape, crawl, or extract data from the Services in a manner not permitted by us",
								"Not use automated systems or bots to interact with the Services without authorization",
								"Comply with all applicable laws and regulations",
								"Not impersonate another person or entity",
								"Not use the Services in a manner that could damage our reputation or business",
							]}
						/>
						<p>
							We reserve the right to restrict, suspend, or terminate access to
							the Services for users who violate these Terms or engage in
							prohibited activities.
						</p>
					</PolicySection>

					{/* 6. Information Provided by Users */}
					<PolicySection number={6} title="Information Provided by Users">
						<p>
							When you provide information to us through the Services, you
							represent and warrant that:
						</p>
						<BulletList
							items={[
								"The information is accurate and complete",
								"The information does not infringe the rights of any third party",
								"You have the right to provide such information",
								"The information does not violate any applicable law or regulation",
							]}
						/>
						<p>
							We rely on user-provided information to operate and deliver our
							Services. Providing inaccurate or false information may result in
							denial of services, disqualification from programs, or termination
							of your access.
						</p>
						<p>
							Information you provide is handled in accordance with our{" "}
							<Link className={linkClassName} href="/privacy-policy">
								Privacy Policy
							</Link>
							.
						</p>
					</PolicySection>

					{/* 7. Job Applications and Recruitment */}
					<PolicySection number={7} title="Job Applications and Recruitment">
						<p>
							If you apply for a position, internship, OJT, or other
							career-related opportunity through our Services, you agree that:
						</p>
						<BulletList
							items={[
								"All information provided in your application is accurate, complete, and not misleading",
								"Your resume, CV, portfolio, and supporting documents are genuine and represent your actual qualifications",
								"You have not provided false, exaggerated, or fabricated credentials, qualifications, or experience",
								"We may verify information provided in your application",
								"Submitting an application does not guarantee an interview, selection, or offer",
								"We reserve the right to disqualify applications that contain inaccurate, false, or misleading information",
							]}
						/>
						<p>
							The recruitment and selection process is at the sole discretion of
							Upstairs Techno. We are not obligated to provide reasons for
							recruitment decisions.
						</p>
						<p>
							Application materials and personal information submitted during
							recruitment are handled in accordance with our{" "}
							<Link className={linkClassName} href="/privacy-policy">
								Privacy Policy
							</Link>
							.
						</p>
					</PolicySection>

					{/* 8. OJT and Internship Programs */}
					<PolicySection number={8} title="OJT and Internship Programs">
						<p>
							Our OJT (On-the-Job Training) and internship programs are subject
							to specific terms communicated at the time of registration or
							selection.
						</p>
						<p>General conditions for OJT and internship programs include:</p>
						<BulletList
							items={[
								"Participants must meet the eligibility criteria specified for the relevant program",
								"Participants must comply with program-specific guidelines and requirements",
								"Acceptance into a program does not constitute an offer of employment",
								"Programs may have defined durations, schedules, and requirements",
								"Work or projects completed during the program may be subject to our intellectual property terms",
								"Participants are expected to maintain professional conduct throughout the program",
								"We reserve the right to modify, suspend, or discontinue programs",
							]}
						/>
						<p>
							Specific terms applicable to our internship programs are also set
							out in our Internship Terms, which participants are required to
							review.
						</p>
					</PolicySection>

					{/* 9. Training and Educational Services */}
					<PolicySection number={9} title="Training and Educational Services">
						<p>
							Our training and educational services are provided to help
							individuals develop technical and professional skills.
						</p>
						<p>
							By accessing training or educational services, you agree that:
						</p>
						<BulletList
							items={[
								"Training content is provided for educational purposes",
								"You will not share, reproduce, or distribute training materials without authorization",
								"Completion of a training program does not guarantee employment or any specific outcome",
								"Certificates or acknowledgements of completion, where issued, represent participation in the relevant program",
								"We reserve the right to modify course content, schedules, and delivery formats",
								"Fees for training programs, where applicable, are subject to our payment and refund terms",
							]}
						/>
					</PolicySection>

					{/* 10. Assessments, Tests, and Competitions */}
					<PolicySection
						number={10}
						title="Assessments, Tests, and Competitions"
					>
						<p>
							We may conduct assessments, tests, competitions, and related
							programs as part of our Services.
						</p>
						<p>
							When participating in assessments, tests, or competitions, you
							agree that:
						</p>
						<BulletList
							items={[
								"You will complete assessments honestly and without unauthorized assistance",
								"You will not reproduce, share, or distribute assessment content without authorization",
								"Results and outcomes are determined at our sole discretion",
								"We reserve the right to disqualify participants for conduct that violates these Terms or program-specific rules",
								"We reserve the right to modify, cancel, or change the format of assessments, tests, or competitions",
								"Participation does not guarantee any specific outcome, award, or offer",
							]}
						/>
					</PolicySection>

					{/* 11. Fees and Payments */}
					<PolicySection number={11} title="Fees and Payments">
						<p>
							Certain Services may require payment of fees. Where fees apply,
							the following conditions apply:
						</p>
						<BulletList
							items={[
								"Fees will be communicated clearly before you complete a purchase or registration",
								"Payments are processed through authorized payment methods",
								"You are responsible for providing accurate payment information",
								"Fees are due at the time of registration or purchase unless otherwise agreed",
								"We reserve the right to update or change fees for future services, with notice where appropriate",
								"Payment processing may involve third-party payment providers",
							]}
						/>
						<p>
							Failure to complete payment may result in denial of access to the
							relevant Service.
						</p>
					</PolicySection>

					{/* 12. Refunds and Cancellations */}
					<PolicySection number={12} title="Refunds and Cancellations">
						<p>
							Our refund and cancellation terms are set out in our Refund Policy,
							which should be reviewed before making a payment.
						</p>
						<p>General principles include:</p>
						<BulletList
							items={[
								"Refund eligibility depends on the nature of the service and applicable terms",
								"Requests for refunds must be submitted in accordance with the Refund Policy",
								"Processing fees charged by third-party payment providers may not be refundable",
								"We reserve the right to decline refund requests that do not meet the applicable conditions",
							]}
						/>
						<p>
							For specific refund and cancellation terms, please refer to our
							Refund Policy or contact us for clarification before making a
							payment.
						</p>
					</PolicySection>

					{/* 13. Intellectual Property */}
					<PolicySection number={13} title="Intellectual Property">
						<p>
							All intellectual property rights in the Website, Services, content,
							materials, software, branding, and related assets are owned by or
							licensed to <strong>Upstairs Techno Pvt. Ltd.</strong>, unless
							otherwise stated.
						</p>
						<p>This includes, but is not limited to:</p>
						<BulletList
							items={[
								"Website design, layout, and interface",
								"Text, graphics, images, and multimedia content",
								"Software, code, and technology",
								"Training materials and course content",
								"Trademarks, logos, and branding",
								"Assessment content and materials",
								"Other proprietary materials",
							]}
						/>
						<p>
							You may not reproduce, distribute, modify, publicly display,
							publish, or otherwise use our intellectual property without prior
							written permission, except as expressly permitted by these Terms or
							applicable law.
						</p>
						<p>
							Unauthorized use of our intellectual property may constitute
							infringement and may be subject to legal action.
						</p>
					</PolicySection>

					{/* 14. User-Generated Content */}
					<PolicySection number={14} title="User-Generated Content">
						<p>
							Where our Services allow you to submit, upload, or post content
							(&ldquo;User Content&rdquo;), you agree that:
						</p>
						<BulletList
							items={[
								"You retain ownership of User Content that you create",
								"By submitting User Content, you grant us a non-exclusive, royalty-free licence to use, display, reproduce, and process the content as necessary to provide the Services",
								"You are solely responsible for User Content you submit",
								"User Content must not violate applicable laws or the rights of third parties",
								"User Content must not be harmful, offensive, defamatory, or otherwise objectionable",
								"We reserve the right to remove or restrict User Content that violates these Terms",
							]}
						/>
						<p>
							This clause applies to content such as messages, enquiry
							submissions, portfolio materials, application documents, and other
							information submitted through our Services.
						</p>
					</PolicySection>

					{/* 15. Company Projects and Client Work */}
					<PolicySection number={15} title="Company Projects and Client Work">
						<p>
							Work produced by Upstairs Techno for clients is governed by the
							specific agreements entered into between Upstairs Techno and the
							relevant client.
						</p>
						<p>
							These Terms do not govern the intellectual property rights or
							deliverables arising from client-specific engagements, which are
							subject to the applicable client agreement.
						</p>
						<p>
							Where participants in our OJT, internship, or training programs
							contribute to projects, intellectual property rights in such
							contributions may be addressed in program-specific terms or
							agreements.
						</p>
					</PolicySection>

					{/* 16. Third-Party Services and Links */}
					<PolicySection number={16} title="Third-Party Services and Links">
						<p>
							Our Services may contain links to or integrations with third-party
							websites, platforms, or services.
						</p>
						<p>
							We are not responsible for the content, availability, privacy
							practices, or terms of third-party services.
						</p>
						<p>
							Links to third-party services are provided for convenience only and
							do not constitute endorsement of the linked service or its content.
						</p>
						<p>
							Your use of third-party services is subject to the terms and
							policies of those services.
						</p>
						<p>
							We recommend that you review the terms and privacy policies of any
							third-party service before providing personal information or
							engaging with that service.
						</p>
					</PolicySection>

					{/* 17. Website Availability */}
					<PolicySection number={17} title="Website Availability">
						<p>
							We endeavour to maintain the availability of the Website and
							Services, but we do not guarantee uninterrupted or error-free
							access.
						</p>
						<p>
							The Website or Services may be temporarily unavailable due to:
						</p>
						<BulletList
							items={[
								"Scheduled or emergency maintenance",
								"Technical faults or failures",
								"Infrastructure or hosting provider issues",
								"Security incidents",
								"Events beyond our reasonable control",
								"Other operational reasons",
							]}
						/>
						<p>
							We are not responsible for any loss or inconvenience arising from
							temporary unavailability of the Website or Services.
						</p>
					</PolicySection>

					{/* 18. Accuracy of Information */}
					<PolicySection number={18} title="Accuracy of Information">
						<p>
							We take reasonable care to ensure that information published on the
							Website is accurate at the time of publication.
						</p>
						<p>
							However, we do not guarantee the accuracy, completeness, or
							timeliness of information on the Website. Information may be
							subject to change without notice.
						</p>
						<p>
							Website content is provided for general information purposes only
							and should not be relied upon as professional, legal, financial, or
							technical advice.
						</p>
						<p>
							We recommend verifying important information directly with us
							before making decisions based on Website content.
						</p>
					</PolicySection>

					{/* 19. No Guarantee of Employment or Business Results */}
					<PolicySection
						number={19}
						title="No Guarantee of Employment or Business Results"
					>
						<p>
							Use of our Services, participation in our programs, or engagement
							with our recruitment, training, or talent development services does
							not guarantee:
						</p>
						<BulletList
							items={[
								"Employment, internship, OJT placement, or any specific career outcome",
								"Selection for any program, competition, or opportunity",
								"Specific business results, revenue, or commercial outcomes arising from our services",
								"A specific number of applications, enquiries, or responses",
								"Any specific technical outcome, performance improvement, or other result",
							]}
						/>
						<p>
							Outcomes depend on multiple factors, including individual
							qualifications, market conditions, business context, and other
							variables beyond our control.
						</p>
					</PolicySection>

					{/* 20. Confidentiality */}
					<PolicySection number={20} title="Confidentiality">
						<p>
							In the course of using our Services, you may have access to
							information that is confidential or proprietary to Upstairs Techno
							or its clients.
						</p>
						<p>
							You agree to keep such information confidential and not to disclose
							it to any third party without prior written consent, except where
							required by applicable law.
						</p>
						<p>This confidentiality obligation may apply to:</p>
						<BulletList
							items={[
								"Business information, strategies, and processes",
								"Technical information, systems, and code",
								"Client information and project details",
								"Training and assessment materials",
								"Other non-public information shared in the course of the Services",
							]}
						/>
						<p>
							Specific confidentiality obligations may be set out in program
							agreements or client engagements.
						</p>
					</PolicySection>

					{/* 21. Privacy */}
					<PolicySection number={21} title="Privacy">
						<p>
							We are committed to protecting your personal information. Our
							collection, use, and processing of personal information is
							described in our{" "}
							<Link className={linkClassName} href="/privacy-policy">
								Privacy Policy
							</Link>
							.
						</p>
						<p>
							By using our Services, you acknowledge that you have had an
							opportunity to review our{" "}
							<Link className={linkClassName} href="/privacy-policy">
								Privacy Policy
							</Link>
							.
						</p>
						<p>
							Our use of cookies and similar technologies is described in our{" "}
							<Link className={linkClassName} href="/cookie-policy">
								Cookie Policy
							</Link>
							.
						</p>
					</PolicySection>

					{/* 22. Security */}
					<PolicySection number={22} title="Security">
						<p>
							We take reasonable technical and organizational measures to protect
							the security of the Website and Services.
						</p>
						<p>
							However, no internet-based system or method of electronic
							transmission can be guaranteed to be completely secure.
						</p>
						<p>You are responsible for:</p>
						<BulletList
							items={[
								"Maintaining the security of your account credentials",
								"Keeping your devices and software up to date",
								"Not sharing your login credentials with others",
								"Reporting suspected security incidents or unauthorized access to us promptly",
							]}
						/>
						<p>
							We are not responsible for security breaches arising from your
							failure to maintain the security of your account.
						</p>
					</PolicySection>

					{/* 23. Suspension and Termination */}
					<PolicySection number={23} title="Suspension and Termination">
						<p>
							We reserve the right to suspend, restrict, or terminate your
							access to the Services at any time, without prior notice, if we
							reasonably believe that:
						</p>
						<BulletList
							items={[
								"You have violated these Terms",
								"Your use of the Services is harmful or potentially harmful to us, other users, or third parties",
								"Your account contains inaccurate or fraudulent information",
								"Suspension or termination is required by law or applicable regulation",
								"We determine suspension or termination is necessary for legitimate operational or security reasons",
							]}
						/>
						<p>
							Upon termination, your access to the Services will cease. Certain
							provisions of these Terms will survive termination, including those
							relating to intellectual property, confidentiality, limitation of
							liability, and governing law.
						</p>
					</PolicySection>

					{/* 24. Limitation of Liability */}
					<PolicySection number={24} title="Limitation of Liability">
						<p>
							To the maximum extent permitted by applicable law, Upstairs Techno
							Pvt. Ltd., its directors, employees, contractors, and agents shall
							not be liable for:
						</p>
						<BulletList
							items={[
								"Indirect, incidental, consequential, special, or punitive damages",
								"Loss of profits, revenue, data, or business opportunities",
								"Losses arising from your reliance on Website content or information",
								"Losses arising from unauthorized access to your account",
								"Losses arising from service interruptions or technical failures",
								"Losses arising from the acts or omissions of third-party service providers",
								"Any other indirect or consequential losses",
							]}
						/>
						<p>
							Our total aggregate liability to you for any claims arising out of
							or in connection with these Terms or the Services shall not exceed
							the amount you paid to us for the specific Service giving rise to
							the claim in the three (3) months preceding the relevant event, or
							such other amount as may be required by applicable law.
						</p>
						<p>
							Nothing in these Terms limits our liability for matters that cannot
							be excluded or limited under applicable law.
						</p>
					</PolicySection>

					{/* 25. Indemnification */}
					<PolicySection number={25} title="Indemnification">
						<p>
							You agree to indemnify, defend, and hold harmless{" "}
							<strong>Upstairs Techno Pvt. Ltd.</strong>, its directors,
							employees, contractors, and agents from and against any claims,
							losses, damages, liabilities, costs, and expenses (including
							reasonable legal fees) arising from:
						</p>
						<BulletList
							items={[
								"Your use of the Services in violation of these Terms",
								"Your violation of applicable laws or regulations",
								"Your infringement of the rights of any third party",
								"Inaccurate or false information you provide to us",
								"Any content you submit through the Services",
							]}
						/>
					</PolicySection>

					{/* 26. Force Majeure */}
					<PolicySection number={26} title="Force Majeure">
						<p>
							We shall not be liable for delays, failures to perform, or
							disruptions to the Services arising from circumstances beyond our
							reasonable control, including:
						</p>
						<BulletList
							items={[
								"Natural disasters, floods, storms, or other acts of nature",
								"Pandemics, epidemics, or health emergencies",
								"Government actions, regulations, or restrictions",
								"Internet or telecommunications infrastructure failures",
								"Power outages or infrastructure failures",
								"Cyber-attacks or security incidents not attributable to our negligence",
								"Other events beyond our reasonable control",
							]}
						/>
						<p>
							In such circumstances, we will endeavour to restore the Services
							as soon as reasonably practicable.
						</p>
					</PolicySection>

					{/* 27. Changes to These Terms */}
					<PolicySection number={27} title="Changes to These Terms">
						<p>
							We may update these Terms from time to time to reflect changes to
							our Services, practices, or applicable laws.
						</p>
						<p>When we make material changes, we will:</p>
						<BulletList
							items={[
								<>Update the &ldquo;Last Updated&rdquo; date at the top of this page</>,
								"Post the revised Terms on our Website",
							]}
						/>
						<p>
							Continued use of the Services after the updated Terms have been
							posted constitutes acceptance of the revised Terms.
						</p>
						<p>
							We encourage you to review these Terms periodically so that you
							are aware of the current version.
						</p>
					</PolicySection>

					{/* 28. Governing Law and Jurisdiction */}
					<PolicySection number={28} title="Governing Law and Jurisdiction">
						<p>
							These Terms are governed by and construed in accordance with the
							applicable laws of India.
						</p>
						<p>
							Any disputes arising out of or in connection with these Terms or
							the Services shall be subject to the exclusive jurisdiction of the
							competent courts having jurisdiction over the relevant location in
							Maharashtra, India.
						</p>
						<p>
							If any provision of these Terms is found to be unenforceable under
							applicable law, the remaining provisions shall continue to apply.
						</p>
					</PolicySection>

					{/* 29. Severability */}
					<PolicySection number={29} title="Severability">
						<p>
							If any provision of these Terms is found by a court of competent
							jurisdiction to be invalid, illegal, or unenforceable, that
							provision shall be limited or removed to the minimum extent
							necessary so that the remaining provisions of these Terms remain
							valid, binding, and enforceable.
						</p>
					</PolicySection>

					{/* 30. Entire Agreement */}
					<PolicySection number={30} title="Entire Agreement">
						<p>
							These Terms, together with our{" "}
							<Link className={linkClassName} href="/privacy-policy">
								Privacy Policy
							</Link>
							,{" "}
							<Link className={linkClassName} href="/cookie-policy">
								Cookie Policy
							</Link>
							, and any other policies or program-specific terms published or
							provided by us, constitute the entire agreement between you and
							Upstairs Techno Pvt. Ltd. regarding your use of the Services.
						</p>
						<p>
							These Terms supersede any prior understandings, agreements,
							representations, or warranties, whether written or oral, relating
							to their subject matter.
						</p>
					</PolicySection>

					{/* 31. Contact Us */}
					<PolicySection number={31} title="Contact Us">
						<p>
							If you have any questions, concerns, or requests regarding these
							Terms, please contact us:
						</p>
						<p>
							<strong>Upstairs Techno Pvt. Ltd.</strong>
						</p>
						<p>
							<strong>Email:</strong>{" "}
							<a
								className={linkClassName}
								href="mailto:contact@upstairstechno.com"
							>
								contact@upstairstechno.com
							</a>
						</p>
						<p>
							<strong>Address:</strong>
						</p>
						<address className="not-italic">
							Rajeamarsinha Colony,
							<br />
							Malegaon Bk, Baramati,
							<br />
							Pune, Maharashtra &ndash; 413115, India
						</address>
					</PolicySection>

					{/* 32. Acknowledgement */}
					<PolicySection number={32} title="Acknowledgement">
						<p>
							By accessing or using our Website or Services, you acknowledge
							that:
						</p>
						<BulletList
							items={[
								"You have read these Terms and Conditions",
								"You understand these Terms and Conditions",
								"You agree to be bound by these Terms and Conditions",
								"If you are using the Services on behalf of an organization, you have the authority to bind that organization to these Terms",
							]}
						/>
						<p>
							If you do not agree with these Terms, please discontinue your use
							of our Website and Services.
						</p>
					</PolicySection>

					<p className="border-t border-grid pt-6 text-sm text-slate">
						&copy; 2026 Upstairs Techno Pvt. Ltd. All Rights Reserved.
					</p>
				</div>
			}
		/>
	);
}