import Link from "next/link";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function page() {
  return (
    <section className="bg-white mb-20 border-t">
      <section className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-6 text-gray-700">
          {/* Page Title */}
          <h1 className="text-4xl font-semibold text-[#1f2933] mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            Effective Date: 03/01/26
          </p>

          {/* Intro */}
          <p className="mb-8 leading-relaxed">
            Banebookkeeper (“we,” “our,” or “us”) respects your privacy and is
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, store, and protect information
            when you visit our website or contact us for bookkeeping and
            tax-related services.
          </p>

          {/* Section */}
          <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
            Information We Collect
          </h2>
          <ul className="list-disc list-inside space-y-3 mb-8">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, and business details submitted through contact forms or
              communication channels.
            </li>
            <li>
              <strong>Financial Information:</strong> Limited financial or
              tax-related details shared voluntarily for service-related
              discussions.
            </li>
            <li>
              <strong>Technical Information:</strong> IP address, browser type,
              device information, and website usage data collected through
              cookies or analytics tools.
            </li>
          </ul>

          {/* Section */}
          <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-3 mb-8">
            <li>Respond to inquiries and provide requested services</li>
            <li>Communicate regarding bookkeeping and tax support</li>
            <li>Maintain accurate records</li>
            <li>Improve website functionality and user experience</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>

          {/* Section */}
          <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
            Information Sharing
          </h2>
          <p className="mb-4">
            We do not sell, rent, or trade your personal information.
          </p>
          <ul className="list-disc list-inside space-y-3 mb-8">
            <li>When required by law or legal process</li>
            <li>
              When necessary to provide services (with trusted service providers
              under confidentiality obligations)
            </li>
          </ul>

          {/* Section */}
          <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
            Data Security
          </h2>
          <p className="mb-8 leading-relaxed">
            We take reasonable technical and administrative measures to protect
            your information against unauthorized access, loss, misuse, or
            disclosure. Access to sensitive information is restricted and
            handled with confidentiality.
          </p>

          {/* Section */}
          <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
            Cookies and Tracking
          </h2>
          <p className="mb-8 leading-relaxed">
            Our website may use cookies to improve functionality and analyze
            website traffic. You may choose to disable cookies through your
            browser settings.
          </p>

          {/* Section */}
          <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
            Third-Party Links
          </h2>
          <p className="mb-8 leading-relaxed">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of external sites.
          </p>

          {/* Section */}
          <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
            Data Retention
          </h2>
          <p className="mb-8 leading-relaxed">
            We retain personal information only for as long as necessary to
            fulfill the purposes outlined in this policy or as required by
            applicable laws.
          </p>

          {/* Section */}
          <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
            Your Rights
          </h2>
          <p className="mb-4">You may request to:</p>
          <ul className="list-disc list-inside space-y-3 mb-8">
            <li>Access your personal information</li>
            <li>Correct or update your information</li>
            <li>
              Request deletion of your information (subject to legal
              obligations)
            </li>
          </ul>
          <p className="mb-8">
            To exercise these rights, please contact us using the details below.
          </p>

          {/* Disclosure */}
          <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
            Important Disclosure
          </h2>
          <p className="mb-8 leading-relaxed">
            Banebookkeeper is not a CPA firm and does not provide attest
            services, including audits, reviews, or compilations regulated by
            the Texas State Board of Public Accountancy.
          </p>

          {/* Updates */}
          <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
            Policy Updates
          </h2>
          <p className="mb-8 leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated effective date.
          </p>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-[#1f2933] mb-4">
          Contact Us
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl mb-10">
          If you have questions about this Privacy Policy or how your
          information is handled, please contact us using the details below or
          through our website contact form.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="flex items-start gap-4 p-6 border rounded-xl">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#9CAB84] text-white text-lg">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#1f2933]">Email Us</h4>
              <p className="text-gray-600 text-sm mt-1">
                Reach out with privacy-related questions or requests.
              </p>
              <p className="text-gray-800 mt-2 font-medium">
                contact@banebookkeeper.com
              </p>
            </div>
          </div>

          {/* Phone (Optional) */}
          <Link href="/contact">
            <div className="flex items-start gap-4 p-6 border rounded-xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#89986D] text-white text-lg">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#1f2933]">
                  Contact Form
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Use our contact form for secure communication.
                </p>
                <p className="text-gray-800 mt-2 font-medium">
                  Click Here
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
