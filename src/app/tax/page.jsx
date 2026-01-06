"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import tax from "../../../public/tax.jpg";
import {
  FaCheckCircle,
  FaFileAlt,
  FaUserShield,
  FaShieldAlt,
} from "react-icons/fa";
import {
  FaBuilding,
  FaRocket,
  FaUserTie,
  FaBriefcase,
  FaChartLine,
} from "react-icons/fa";
import Link from "next/link";

export default function Page() {
  const taxServices = [
    {
      title: "Tax Preparation Support",
      text: "We assist with preparing tax-related information based on your financial records to ensure accuracy and completeness.",
    },
    {
      title: "Compliance Assistance",
      text: "We help you stay aligned with tax requirements and deadlines by maintaining proper documentation and organized records.",
    },
    {
      title: "Year-Round Tax Support",
      text: "Tax support isn’t limited to filing season. We provide guidance throughout the year to help you stay prepared.",
    },
    {
      title: "Deadline & Documentation Management",
      text: "We track important dates and ensure necessary documents are in place to avoid last-minute complications.",
    },
  ];

  const benefits = [
    "Reduced risk of errors and penalties",
    "Organized tax documentation",
    "Better year-round preparedness",
    "Confidence in tax-related processes",
    "Peace of mind during tax season",
  ];

  const audience = [
    "Small and medium-sized businesses",
    "Startups and entrepreneurs",
    "Freelancers and independent professionals",
    "Service-based businesses",
    "Growing companies seeking reliable financial support",
  ];

  const approach = [
    {
      icon: <FaCheckCircle />,
      title: "Simple",
      text: "Clear processes without unnecessary complexity",
    },
    {
      icon: <FaFileAlt />,
      title: "Accurate",
      text: "Detail-driven and consistency-focused service",
    },
    {
      icon: <FaUserShield />,
      title: "Transparent",
      text: "Open communication and clear reporting",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure",
      text: "Confidential handling of financial information",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-12 text-gray-700">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-14 items-center"
        >
          <div>
            <h1 className="text-5xl font-semibold text-[#1f2933] mb-6">
              Tax Services
            </h1>
            <p className="text-xl font-medium mb-6 text-gray-800">
              Reliable, Timely, and Stress-Free Tax Support
            </p>
            <p className="leading-relaxed max-w-xl text-lg">
              Our tax services are designed to help businesses meet tax
              obligations accurately and on time. We focus on compliance,
              documentation, and ongoing support to reduce stress and
              uncertainty.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[420px] rounded-[32px] overflow-hidden shadow-2xl"
          >
            <Image
              src={tax}
              alt="Tax services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#9CAB84]/20 to-[#89986D]/20" />
          </motion.div>
        </motion.div>

        {/* SERVICES */}
        <section>
          <h2 className="text-4xl font-semibold text-[#1f2933] mb-14">
            What Our Tax Services Include
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {taxServices.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border rounded-3xl p-10 hover:shadow-xl transition"
              >
                <div className="w-14 h-14 mb-6 rounded-full bg-[#9CAB84]/15 text-[#9CAB84] flex items-center justify-center text-xl">
                  <FaCheckCircle />
                </div>
                <h3 className="text-2xl font-semibold text-[#1f2933] mb-3">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-[#f7faf8] rounded-[40px] px-12 py-15">
          <h2 className="text-4xl font-semibold text-[#1f2933] mb-14">
            Benefits of Our Tax Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {benefits.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white rounded-2xl p-6 shadow-sm"
              >
                <span className="w-3 h-3 bg-[#89986D] rounded-full mt-2"></span>
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHO IT'S FOR */}
        {/* WHO IT'S FOR */}
        <section className="py-4">
          <div className="max-w-6xl mx-auto px-6">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-semibold text-[#1f2933] mb-4">
                Who Our Services Are Designed For
              </h2>
              <p className="text-gray-600 text-lg">
                We support a wide range of businesses looking for reliable,
                structured, and stress-free financial support.
              </p>
            </motion.div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaBuilding />,
                  title: "Small & Medium Businesses",
                  text: "Businesses seeking accurate records and consistent financial oversight.",
                },
                {
                  icon: <FaRocket />,
                  title: "Startups & Entrepreneurs",
                  text: "Early-stage businesses needing structure and compliance from day one.",
                },
                {
                  icon: <FaUserTie />,
                  title: "Freelancers & Professionals",
                  text: "Independent professionals who value clarity and organization.",
                },
                {
                  icon: <FaBriefcase />,
                  title: "Service-Based Businesses",
                  text: "Agencies and service providers managing recurring income and expenses.",
                },
                {
                  icon: <FaChartLine />,
                  title: "Growing Companies",
                  text: "Businesses scaling operations and seeking dependable financial support.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group bg-white border rounded-3xl p-8 hover:shadow-xl transition"
                >
                  <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-[#9CAB84]/20 to-[#89986D]/20 text-[#89986D] flex items-center justify-center text-2xl group-hover:scale-110 transition">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-[#1f2933] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="bg-[#f7faf8] rounded-[40px] px-12 py-10">
          <h2 className="text-4xl font-semibold text-[#1f2933] mb-14">
            Our Service Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
            {approach.map((item, i) => (
              <div
                key={i}
                className="flex gap-6 bg-white rounded-3xl p-8 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#9CAB84]/15 text-[#9CAB84] flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#1f2933] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 max-w-4xl text-lg leading-relaxed">
            We work as a reliable extension of your business, ensuring your
            books and tax processes are always under control.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-[#9CAB84]/20 to-[#89986D]/20 rounded-[40px] py-20 px-6">
          <h3 className="text-4xl font-semibold text-[#1f2933] mb-6">
            Let’s Simplify Your Financial Operations
          </h3>
          <p className="max-w-3xl mx-auto text-lg mb-10">
            Whether you need ongoing bookkeeping, catch-up support, or
            dependable tax assistance, Banebookkeeper is here to help. Contact
            us today to discuss how our services can support your business.
          </p>
          <Link
            href="/contact"
            className="px-14 py-5 bg-gradient-to-r from-[#9CAB84] to-[#89986D] text-white rounded-2xl text-lg font-medium hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </section>
  );
}
