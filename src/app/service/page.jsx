"use client";
import React from "react";
import book from "../../../public/book.jpg";
import tax from "../../../public/tax.jpg";
import Image from "next/image";
import { FaChartLine, FaCogs, FaLock, FaClock } from "react-icons/fa";

// import Image from "next/image";
import { motion } from "framer-motion";
// import tax from "../../../public/tax.jpg";
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
  //   FaChartLine,
} from "react-icons/fa";
import Link from "next/link";
import Faq from "../components/Faq/Faq";

function page() {
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
    <div>
      <section className="bg-white pt-0 py-20">
        <section className="relative mb-15 py-24 text-center overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/40" />

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 backdrop-blur w-[fit-content] rounded-xl py-4">
            <h2 className="text-4xl font-semibold text-black mb-4">
              Our Core Services
            </h2>
            <p className="text-black max-w-2xl mx-auto text-lg">
              We specialize in two essential financial services designed to keep
              your business organized and compliant.
            </p>
          </div>
        </section>
        <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Bookkeeping */}
            <Link href="/bookkeeping">
              <div className="group border rounded-2xl overflow-hidden hover:shadow-xl transition ">
                <div className="relative h-86">
                  <Image
                    src={book}
                    alt="Bookkeeping Services"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-[#9CAB84]/70 to-transparent" /> */}
                </div>

                <div className="p-8 text-left  bg-gradient-to-b from-[#9CAB84] to-[#89986D] text-white">
                  <h3 className="text-2xl font-semibold tex mb-3 ">
                    Bookkeeping
                  </h3>
                  <p className="te leading-relaxed">
                    Maintain accurate records, track expenses, and gain clear
                    financial visibility with reliable bookkeeping support.
                  </p>
                </div>
              </div>
            </Link>

            {/* Tax */}
            <Link href="/tax">
              <div className="group border rounded-2xl overflow-hidden hover:shadow-xl transition">
                <div className="relative h-86">
                  <Image
                    src={tax}
                    alt="Tax Services"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-[#89986D]/70 to-transparent" /> */}
                </div>

                <div className="p-8 text-left  bg-gradient-to-b from-[#9CAB84] to-[#89986D] text-white">
                  <h3 className="text-2xl font-semibold   mb-3">Tax</h3>
                  <p className=" leading-relaxed">
                    Professional tax preparation and guidance to ensure
                    compliance and peace of mind throughout the year.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/*  */}
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
        {/* <section className="text-center bg-gradient-to-r from-[#9CAB84]/20 to-[#89986D]/20 rounded-[40px] py-20 px-6">
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
        </section> */}
        {/*  */}
        <section className="bg-white py-24">
          <div className="max-w-6xl mx-auto px-6 space-y-32 text-gray-800">
            {/* Who We Work With — with Image Split */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-4xl font-semibold text-[#1f2933]">
                  Who We Work With
                </h3>
                <p className="text-gray-600 max-w-lg">
                  We support a wide range of clients looking for dependable
                  financial management and clarity.
                </p>
                <ul className="space-y-3">
                  {[
                    "Small & medium-sized businesses",
                    "Startups & freelancers",
                    "Service-based professionals",
                    "Growing enterprises",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base">
                      <span className="w-2.5 h-2.5 bg-[#89986D] rounded-full mt-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-90 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/7693729/pexels-photo-7693729.jpeg"
                  alt="Professional clients working"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#89986D]/40 to-transparent" /> */}
              </div>
            </div>

            {/* Our Approach — Card Style */}
            <div className="bg-[#f7faf8] border rounded-3xl p-12 shadow-sm">
              <h3 className="text-3xl font-semibold text-[#1f2933] mb-6">
                Our Approach
              </h3>

              <p className="max-w-3xl leading-relaxed text-gray-700 mb-10">
                At Banebookkeeper, bookkeeping and tax services are simple,
                transparent, and proactive. We follow structured processes,
                communicate clearly, and keep your financial data secure at all
                times.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Reporting */}
                <li className="flex flex-col  gap-5 bg-white border rounded-xl p-6 hover:shadow-lg transition">
                  <div className="w-20 h-20 rounded-lg bg-[#9CAB84]/15 text-[#9CAB84] flex items-center justify-center text-lg shrink-0">
                    <FaChartLine size={50} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1f2933] mb-1">
                      Consistent Monthly Reporting
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Regular financial reports to keep you informed and in
                      control.
                    </p>
                  </div>
                </li>

                {/* Process */}
                <li className="flex  flex-col  gap-5 bg-white border rounded-xl p-6 hover:shadow-lg transition">
                  <div className="w-20 h-20 rounded-lg bg-[#9CAB84]/15 text-[#9CAB84] flex items-center justify-center text-lg shrink-0">
                    <FaCogs size={50} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1f2933] mb-1">
                      Detail-Oriented Processes
                    </h4>
                    <p className="text-gray-600 ">
                      Structured workflows designed to reduce errors and improve
                      accuracy.
                    </p>
                  </div>
                </li>

                {/* Security */}
                <li className="flex flex-col  gap-5 bg-white border rounded-xl p-6 hover:shadow-lg transition">
                  <div className="w-20 h-20 rounded-lg bg-[#89986D]/15 text-[#89986D] flex items-center justify-center text-lg shrink-0">
                    <FaLock size={50} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1f2933] mb-1">
                      Confidential Data Handling
                    </h3>
                    <p className="text-gray-600 ">
                      Your financial data is handled securely and
                      confidentially.
                    </p>
                  </div>
                </li>

                {/* Timely */}
                <li className="flex flex-col  gap-5  bg-white border rounded-xl p-6 hover:shadow-lg transition">
                  <div className="w-20 h-20 rounded-lg bg-[#89986D]/15 text-[#89986D] flex items-center justify-center text-lg shrink-0">
                    <FaClock size={50} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1f2933] mb-1">
                      Timely Delivery
                    </h4>
                    <p className="text-gray-600 ">
                      Deadlines met consistently with proactive communication.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Technology + Peace of Mind */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Card 1 */}
              <div className="relative overflow-hidden rounded-2xl p-8   bg-gradient-to-br from-[#DDE5C7] via-[#B7C3A1] to-[#8E9D74]    border border-white/40 shadow-md hover:shadow-2xl    transition-all duration-300 group">
                {/* soft hover glow */}
                <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                <h4 className="relative z-10 text-2xl font-semibold text-[#1f2933] mb-3">
                  Technology-Driven, People-Focused
                </h4>

                <p className="relative z-10 text-[#374151] leading-relaxed">
                  We use modern accounting tools to streamline workflows and
                  reduce errors, combined with experienced professionals who
                  review every detail carefully.
                </p>
              </div>

              {/* Card 2 */}
              <div className="relative overflow-hidden rounded-2xl p-8     bg-gradient-to-br from-[#DDE5C7] via-[#B7C3A1] to-[#8E9D74]    border border-white/40 shadow-md hover:shadow-2xl     transition-all duration-300 group">
                {/* soft hover glow */}
                <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                <h4 className="relative z-10 text-2xl font-semibold text-[#1f2933] mb-3">
                  Peace of Mind, All Year Long
                </h4>

                <p className="relative z-10 text-[#374151] leading-relaxed">
                  No last-minute rushes or financial uncertainty. With
                  Banebookkeeper, your books stay updated and your tax
                  responsibilities remain under control.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Faq />
    </div>
  );
}

export default page;
