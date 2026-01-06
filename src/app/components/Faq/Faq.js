"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Faq() {
  const faqs = [
    {
      question: "What bookkeeping services does Banebookkeeper provide?",
      answer:
        "We provide day-to-day bookkeeping support, including transaction recording, bank reconciliations, financial reports, and ongoing monthly bookkeeping services.",
    },
    {
      question: "How often are my books updated?",
      answer:
        "Books can be updated weekly or monthly, depending on your business needs and the agreed service arrangement.",
    },
    {
      question: "Do you offer bookkeeping clean-up services?",
      answer:
        "Yes. If your books are behind or disorganized, we provide clean-up and catch-up services to bring them up to date.",
    },
    {
      question: "What type of tax services do you offer?",
      answer:
        "We offer tax preparation support, compliance assistance, documentation management, and year-round tax-related guidance.",
    },
    {
      question: "Is Banebookkeeper a CPA firm?",
      answer:
        "No. Banebookkeeper is not a CPA firm and does not provide attest services such as audits, reviews, or compilations regulated by the Texas State Board of Public Accountancy.",
    },
    {
      question: "How do you keep my financial information secure?",
      answer:
        "We follow confidentiality-focused processes and use secure systems to protect client information and financial data.",
    },
    {
      question: "How do I get started with Banebookkeeper?",
      answer:
        "You can get started by contacting us through the website contact form. We’ll discuss your needs and outline the next steps.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-white mb-5 mt-5">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#1f2933] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Answers to common questions about our bookkeeping and tax services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-2xl overflow-hidden">
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-[#f7faf8] hover:bg-[#eef3f0] transition"
              >
                <span className="text-lg font-medium text-[#1f2933]">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-[#89986D] transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeIndex === index && (
                <div className="px-6 py-5 bg-white text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
