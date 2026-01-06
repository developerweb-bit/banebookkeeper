import React from "react";

function page() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-gray-700">
        {/* Page Title */}
        <h1 className="text-4xl font-semibold text-[#1f2933] mb-2">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-10">Effective Date: 03/01/26</p>

        {/* Intro */}
        <p className="mb-8 leading-relaxed">
          Welcome to the Banebookkeeper website. By accessing or using this
          website, you agree to comply with and be bound by the following Terms
          & Conditions. If you do not agree with these terms, please do not use
          this website.
        </p>

        {/* Services Overview */}
        <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
          Services Overview
        </h2>
        <p className="mb-6 leading-relaxed">
          Banebookkeeper provides bookkeeping and tax-related support services.
          We do not provide attest services, including audits, reviews, or
          compilations regulated by the Texas State Board of Public Accountancy.
        </p>
        <p className="mb-8 leading-relaxed">
          All services are provided based on information supplied by the client,
          and accuracy depends on the completeness and correctness of the data
          provided.
        </p>

        {/* No Attest Services */}
        <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
          No Professional Attest Services
        </h2>
        <p className="mb-8 leading-relaxed">
          Banebookkeeper is not a CPA firm and does not offer attest services.
          Nothing on this website should be interpreted as a substitute for
          attest services regulated by the Texas State Board of Public
          Accountancy.
        </p>

        {/* Website Use */}
        <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
          Use of Website
        </h2>
        <p className="mb-4">
          You agree to use this website for lawful purposes only. You must not:
        </p>
        <ul className="list-disc list-inside space-y-3 mb-8">
          <li>Use the website in any way that violates applicable laws</li>
          <li>Attempt unauthorized access to the website or its systems</li>
          <li>Distribute harmful or malicious content</li>
        </ul>

        {/* Intellectual Property */}
        <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
          Intellectual Property
        </h2>
        <p className="mb-8 leading-relaxed">
          All content on this website, including text, graphics, logos, and
          design elements, is the property of Banebookkeeper unless otherwise
          stated. Unauthorized use or reproduction is prohibited.
        </p>

        {/* Liability */}
        <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
          Limitation of Liability
        </h2>
        <p className="mb-4">
          Banebookkeeper is not responsible for any loss, damage, or liability
          arising from:
        </p>
        <ul className="list-disc list-inside space-y-3 mb-8">
          <li>Use or inability to use the website</li>
          <li>Reliance on information provided on the website</li>
          <li>
            Errors or omissions resulting from inaccurate or incomplete
            information provided by clients
          </li>
        </ul>

        {/* Confidentiality */}
        <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
          Confidentiality
        </h2>
        <p className="mb-8 leading-relaxed">
          We take reasonable steps to maintain the confidentiality of client
          information. However, Banebookkeeper cannot guarantee absolute
          security of data transmitted electronically.
        </p>

        {/* Third Party */}
        <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
          Third-Party Links
        </h2>
        <p className="mb-8 leading-relaxed">
          This website may include links to third-party websites. Banebookkeeper
          is not responsible for the content, accuracy, or practices of external
          websites.
        </p>

        {/* Payment */}
        <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
          Payment & Engagement
        </h2>
        <p className="mb-8 leading-relaxed">
          Service fees, scope of work, and timelines will be defined separately
          through written communication or service agreements. Payment terms
          must be adhered to as agreed.
        </p>

        {/* Changes */}
        <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
          Changes to Terms
        </h2>
        <p className="mb-8 leading-relaxed">
          Banebookkeeper reserves the right to update or modify these Terms &
          Conditions at any time. Continued use of the website constitutes
          acceptance of the updated terms.
        </p>

        {/* Governing Law */}
        <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
          Governing Law
        </h2>
        <p className="mb-8 leading-relaxed">
          These Terms & Conditions shall be governed by and interpreted in
          accordance with the laws of the State of Texas, United States.
        </p>

        {/* Contact */}
        <h2 className="text-2xl font-semibold text-[#1f2933] mb-4">
          Contact Information
        </h2>
        <p className="leading-relaxed">
          If you have any questions regarding these Terms & Conditions, please
          contact us through the website contact form.
        </p>
      </div>
    </section>
  );
}

export default page;
