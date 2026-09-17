import type { Metadata } from "next";
import Link from "next/link";
import InformationPage from "@/components/InformationPage";

export const metadata: Metadata = {
	title: "Cookie Policy | Upstairs Techno Pvt. Ltd.",
	description:
		"Read the Cookie Policy of Upstairs Techno Pvt. Ltd. to understand how cookies and similar technologies are used on our website and digital platforms.",
};

const sectionClassName = "space-y-4";
const headingClassName = "font-display text-2xl font-semibold text-ink";
const subheadingClassName = "font-display text-lg font-semibold text-ink";
const bodyClassName = "space-y-4 text-base leading-relaxed text-slate";
const listClassName = "list-disc space-y-2 pl-6";

export default function CookiePolicyPage() {
	return (
		<InformationPage
			eyebrow="Legal"
			title="COOKIE POLICY"
			intro="Last Updated: September 16, 2026"
			sections={[]}
			content={
				<div className="mt-10 space-y-10">
					<section className={sectionClassName}>
						<h2 className={headingClassName}>1. Introduction</h2>
						<div className={bodyClassName}>
							<p>Welcome to <strong>Upstairs Techno Pvt. Ltd.</strong> (“Upstairs Techno,” “we,” “our,” or “us”).</p>
							<p>This Cookie Policy explains how we use cookies and similar technologies when you visit or interact with our website and related digital platforms (collectively, the “Website”).</p>
							<p>This policy should be read together with our Privacy Policy and Terms &amp; Conditions.</p>
							<p>By continuing to use our Website, you acknowledge that cookies and similar technologies may be used as described in this Cookie Policy, subject to any choices or consent mechanisms provided on the Website.</p>
						</div>
					</section>

					<section className={sectionClassName}>
						<h2 className={headingClassName}>2. What Are Cookies?</h2>
						<div className={bodyClassName}>
							<p>Cookies are small text files that are stored on your device when you visit a website.</p>
							<p>They allow a website to recognize your browser or device and can help the website operate properly, remember preferences, improve security, understand how visitors use the Website, and provide a better user experience.</p>
							<p>Cookies may be:</p>
							<ul className={listClassName}>
								<li><strong>Session Cookies:</strong> Deleted when you close your browser.</li>
								<li><strong>Persistent Cookies:</strong> Remain on your device for a specified period or until you delete them.</li>
								<li><strong>First-Party Cookies:</strong> Set directly by Upstairs Techno.</li>
								<li><strong>Third-Party Cookies:</strong> Set by third-party services that may operate on or through our Website.</li>
							</ul>
						</div>
					</section>

					<section className={sectionClassName}>
						<h2 className={headingClassName}>3. Why We Use Cookies</h2>
						<div className="space-y-8 text-base leading-relaxed text-slate">
							<section className={sectionClassName}>
								<h3 className={subheadingClassName}>3.1 Essential Website Functions</h3>
								<div className={bodyClassName}>
									<p>Some cookies are necessary for the Website to function correctly.</p>
									<p>They may help with:</p>
									<ul className={listClassName}>
										<li>Website navigation</li><li>User sessions</li><li>Authentication</li><li>Security</li><li>Form functionality</li><li>Preventing unauthorized activity</li><li>Maintaining technical functionality</li>
									</ul>
									<p>These cookies may be necessary for providing requested Website features.</p>
								</div>
							</section>
							<section className={sectionClassName}>
								<h3 className={subheadingClassName}>3.2 Functional Cookies</h3>
								<div className={bodyClassName}>
									<p>Functional cookies may allow the Website to remember choices or preferences you make.</p>
									<p>For example, they may help remember:</p>
									<ul className={listClassName}><li>Language preferences</li><li>Display preferences</li><li>Certain user interface settings</li><li>Previously selected options</li></ul>
								</div>
							</section>
							<section className={sectionClassName}>
								<h3 className={subheadingClassName}>3.3 Analytics and Performance</h3>
								<div className={bodyClassName}>
									<p>Where analytics services are enabled, we may use cookies or similar technologies to understand how visitors interact with our Website.</p>
									<p>This may include information such as:</p>
									<ul className={listClassName}><li>Pages visited</li><li>Approximate usage patterns</li><li>Time spent on pages</li><li>Browser or device information</li><li>Website performance information</li><li>Referring pages or sources</li></ul>
									<p>This information helps us understand Website usage and improve our services.</p>
								</div>
							</section>
							<section className={sectionClassName}>
								<h3 className={subheadingClassName}>3.4 Security and Fraud Prevention</h3>
								<div className={bodyClassName}>
									<p>Cookies or similar technologies may be used to help protect our Website, users, and systems against:</p>
									<ul className={listClassName}><li>Unauthorized access</li><li>Abuse</li><li>Automated attacks</li><li>Fraudulent activity</li><li>Security threats</li></ul>
								</div>
							</section>
						</div>
					</section>

					<section className={sectionClassName}>
						<h2 className={headingClassName}>4. Types of Cookies We May Use</h2>
						<div className={bodyClassName}>
							<p>Depending on the features and services enabled on our Website, cookies may fall into the following categories:</p>
							<div className="overflow-x-auto rounded-lg border border-grid">
								<table className="min-w-[36rem] w-full border-collapse text-left text-sm">
									<thead className="bg-paper-dim text-ink">
										<tr><th scope="col" className="border-b border-grid px-4 py-3 font-semibold">Cookie Category</th><th scope="col" className="border-b border-grid px-4 py-3 font-semibold">Purpose</th><th scope="col" className="border-b border-grid px-4 py-3 font-semibold">Generally Required</th></tr>
									</thead>
									<tbody>
										<tr><td className="border-b border-grid px-4 py-3">Essential</td><td className="border-b border-grid px-4 py-3">Website operation, authentication and security</td><td className="border-b border-grid px-4 py-3">Yes</td></tr>
										<tr><td className="border-b border-grid px-4 py-3">Functional</td><td className="border-b border-grid px-4 py-3">Remembering preferences and settings</td><td className="border-b border-grid px-4 py-3">Sometimes</td></tr>
										<tr><td className="border-b border-grid px-4 py-3">Analytics</td><td className="border-b border-grid px-4 py-3">Understanding Website usage and performance</td><td className="border-b border-grid px-4 py-3">No</td></tr>
										<tr><td className="px-4 py-3">Marketing</td><td className="px-4 py-3">Supporting advertising or marketing functionality</td><td className="px-4 py-3">No</td></tr>
									</tbody>
								</table>
							</div>
							<p>The actual cookies used may change as we add, remove, or update Website features and third-party services.</p>
						</div>
					</section>

					<section className={sectionClassName}><h2 className={headingClassName}>5. Third-Party Services</h2><div className={bodyClassName}><p>Some features of our Website may be provided by third-party service providers.</p><p>Depending on the services implemented on the Website, these providers may use cookies or similar technologies.</p><p>Examples may include services used for:</p><ul className={listClassName}><li>Website analytics</li><li>Security and fraud prevention</li><li>Embedded content</li><li>Payment processing</li><li>Communication services</li><li>Marketing or advertising</li></ul><p>Third-party providers may process information according to their own privacy policies and terms.</p><p>Where required by applicable law, we will provide appropriate information or consent mechanisms for non-essential third-party cookies.</p></div></section>
					<section className={sectionClassName}><h2 className={headingClassName}>6. Cookies and Job Applications</h2><div className={bodyClassName}><p>Certain Upstairs Techno platforms or services may provide recruitment, job application, training, or career-related functionality.</p><p>Cookies or similar technologies may be used to support technical functions such as:</p><ul className={listClassName}><li>Maintaining an application session</li><li>Securing user accounts</li><li>Authentication</li><li>Protecting forms and application processes</li><li>Maintaining test or platform sessions</li><li>Preventing fraudulent or unauthorized activity</li></ul><p>The collection and processing of personal information submitted during a job application is primarily governed by our Privacy Policy.</p></div></section>
					<section className={sectionClassName}><h2 className={headingClassName}>7. Managing and Disabling Cookies</h2><div className={bodyClassName}><p>You can control or manage cookies through your browser settings.</p><p>Most modern browsers allow you to:</p><ul className={listClassName}><li>View stored cookies</li><li>Delete cookies</li><li>Block cookies</li><li>Allow cookies only from certain websites</li><li>Receive notifications when cookies are being used</li></ul><p>Please note that disabling certain cookies may affect the functionality of some parts of our Website.</p><p>Essential cookies may be necessary for certain Website functions, such as authentication, security, and account sessions.</p></div></section>
					<section className={sectionClassName}><h2 className={headingClassName}>8. Cookie Consent</h2><div className={bodyClassName}><p>Where applicable, Upstairs Techno may provide a cookie banner, consent mechanism, or preference-management tool.</p><p>Depending on the type of cookie and applicable legal requirements, you may be able to:</p><ul className={listClassName}><li>Accept optional cookies</li><li>Reject optional cookies</li><li>Manage cookie preferences</li><li>Change your preferences later</li></ul><p>Essential cookies required for the operation and security of the Website may continue to operate where permitted or required.</p></div></section>
					<section className={sectionClassName}><h2 className={headingClassName}>9. Personal Information and Cookies</h2><div className={bodyClassName}><p>Cookies themselves may not always directly identify you. However, information collected through cookies may sometimes be associated with information that can identify or relate to an individual.</p><p>Where this occurs, we handle such information in accordance with our <strong>Privacy Policy</strong> and applicable laws.</p><p>We do not intend to use cookies to collect more information than reasonably necessary for the purposes described in this policy.</p></div></section>
					<section className={sectionClassName}><h2 className={headingClassName}>10. Data Security</h2><div className={bodyClassName}><p>We take reasonable technical and organizational measures to protect information associated with the use of our Website.</p><p>However, no internet transmission, website, or electronic storage system can be guaranteed to be completely secure.</p><p>You should also take appropriate steps to protect your devices, browser, accounts, and login credentials.</p></div></section>
					<section className={sectionClassName}><h2 className={headingClassName}>11. Data Retention</h2><div className={bodyClassName}><p>The duration for which cookies remain on your device depends on the type and purpose of the cookie.</p><p>Some cookies expire when you close your browser, while persistent cookies may remain for a defined period.</p><p>Cookie duration may vary depending on the service or technology involved.</p><p>Where applicable, information associated with cookies may be retained according to our Privacy Policy and the requirements of the relevant service providers.</p></div></section>
					<section className={sectionClassName}><h2 className={headingClassName}>12. Children&apos;s Privacy</h2><div className={bodyClassName}><p>Our Website is primarily intended for general audiences and business, professional, educational, recruitment, and technology-related purposes.</p><p>We do not knowingly use the Website to collect personal information from children in violation of applicable laws.</p><p>If you believe that a child has provided personal information to us improperly, please contact us so that we can review the matter and take appropriate action where required.</p></div></section>
					<section className={sectionClassName}><h2 className={headingClassName}>13. Changes to This Cookie Policy</h2><div className={bodyClassName}><p>We may update this Cookie Policy from time to time to reflect:</p><ul className={listClassName}><li>Changes to our Website</li><li>Changes to the cookies or technologies we use</li><li>Changes to third-party services</li><li>Changes in applicable laws or regulations</li><li>Improvements to our privacy practices</li></ul><p>When we make changes, we may update the <strong>“Last Updated”</strong> date at the top of this page.</p><p>We encourage you to review this Cookie Policy periodically.</p></div></section>
					<section className={sectionClassName}><h2 className={headingClassName}>14. Contact Us</h2><div className={bodyClassName}><p>If you have questions or concerns about this Cookie Policy or our use of cookies, you can contact us:</p><p><strong>Upstairs Techno Pvt. Ltd.</strong></p><p><strong>Email:</strong> <a className="text-blueline underline decoration-blueline/40 underline-offset-4 hover:text-ink" href="mailto:contact@upstairstechno.com">contact@upstairstechno.com</a></p><p><strong>Address:</strong></p><address className="not-italic">Rajeamarsinha Colony,<br />Malegaon Bk, Baramati,<br />Pune, Maharashtra – 413115, India</address></div></section>
					<section className={sectionClassName}><h2 className={headingClassName}>15. Related Policies</h2><div className={bodyClassName}><p>For additional information about how Upstairs Techno handles information and Website usage, please refer to:</p><ul className={listClassName}><li><Link className="text-blueline underline decoration-blueline/40 underline-offset-4 hover:text-ink" href="/privacy-policy">Privacy Policy</Link></li><li><Link className="text-blueline underline decoration-blueline/40 underline-offset-4 hover:text-ink" href="/terms-and-conditions">Terms &amp; Conditions</Link></li></ul></div></section>
					<p className="border-t border-grid pt-6 text-sm text-slate">© 2026 Upstairs Techno Pvt. Ltd. All Rights Reserved.</p>
				</div>
			}
		/>
	);
}