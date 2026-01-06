"use client";

import React from "react";
import book from "../../../../../public/book.jpg";
import tax from "../../../../../public/tax.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChartLine, FaCogs, FaLock, FaClock } from "react-icons/fa";
import Link from "next/link";
import Faq from "../../Faq/Faq";

function HomeService() {
  const sections = [
    {
      title: "Who We Work With",
      items: [
        "Small & medium-sized businesses",
        "Startups & freelancers",
        "Service-based professionals",
        "Growing enterprises",
      ],
      color: "bg-[#89986D]",
      desc: "",
    },
    {
      title: "Our Approach",
      items: [
        "Consistent monthly reporting",
        "Detail-oriented processes",
        "Confidential data handling",
        "Timely delivery",
      ],
      color: "bg-[#9CAB84]",
      desc: "At Banebookkeeper, bookkeeping and tax services are simple, transparent, and proactive. We follow structured processes, communicate clearly, and keep your financial data secure at all times.",
    },
    {
      title: "Technology-Driven, People-Focused",
      items: [],
      color: "bg-[#89986D]",
      desc: "We use modern accounting tools to streamline workflows and reduce errors, combined with experienced professionals who review every detail carefully.",
    },
    {
      title: "Peace of Mind, All Year Long",
      items: [],
      color: "bg-[#9CAB84]",
      desc: "No last-minute rushes or financial uncertainty. With Banebookkeeper, your books stay updated and your tax responsibilities stay under control.",
    },
    {
      title: "Why Banebookkeeper?",
      items: [
        "Simple, transparent processes",
        "Experienced bookkeeping professionals",
        "Reliable year-round support",
        "Secure handling of financial data",
      ],
      color: "bg-[#89986D]",
      desc: "",
    },
  ];
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-[#1f2933] mb-4">
          Our Core Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We specialize in two essential financial services designed to keep
          your business organized and compliant.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Bookkeeping */}
          <Link href="/bookkeeping">
            <div className="group border rounded-2xl overflow-hidden hover:shadow-xl transition">
              <div className="relative h-86">
                <Image
                  src={book}
                  alt="Bookkeeping Services"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#9CAB84]/70 to-transparent" /> */}
              </div>

              <div className="p-8 text-left text-white  bg-gradient-to-b from-[#9CAB84] to-[#89986D]">
                <h3 className="text-2xl font-semibold t mb-3 ">Bookkeeping</h3>
                <p className=" leading-relaxed">
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
                <h3 className="text-2xl font-semibold text-[#1f233]  mb-3">
                  Tax
                </h3>
                <p className="text-gra-600 leading-relaxed">
                  Professional tax preparation and guidance to ensure compliance
                  and peace of mind throughout the year.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

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
                    Your financial data is handled securely and confidentially.
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
          {/* <div className="grid md:grid-cols-2 gap-12">
       
            <div className="relative overflow-hidden rounded-2xl p-8   bg-gradient-to-br from-[#DDE5C7] via-[#B7C3A1] to-[#8E9D74]    border border-white/40 shadow-md hover:shadow-2xl    transition-all duration-300 group">
            
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

            
            <div className="relative overflow-hidden rounded-2xl p-8     bg-gradient-to-br from-[#DDE5C7] via-[#B7C3A1] to-[#8E9D74]    border border-white/40 shadow-md hover:shadow-2xl     transition-all duration-300 group">
           
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
          </div> */}

          <div className="grid md:grid-cols-2 gap-12"
          style={{color:"white"}}>
            {/* Card 1 */}
            <div className="relative overflow-hidden rounded-3xl p-10 border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-[#E7EED8]/85 to-[#C7D3AF]/80 group-hover:from-white/80 transition-all duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <h4 className="text-2xl font-semibold text-[#1f2933] mb-4">
                  Technology-Driven, People-Focused
                </h4>

                <p className="text-[#374151] leading-relaxed text-lg">
                  We use modern accounting tools to streamline workflows and
                  reduce errors, combined with experienced professionals who
                  review every detail carefully.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative overflow-hidden rounded-3xl p-10 border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1556761175-4b46a572b786')",
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-[#E7EED8]/85 to-[#C7D3AF]/80 group-hover:from-white/80 transition-all duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <h4 className="text-2xl font-semibold text-[#1f2933] mb-4">
                  Peace of Mind, All Year Long
                </h4>

                <p className="text-[#374151] leading-relaxed text-lg">
                  No last-minute rushes or financial uncertainty. With
                  Banebookkeeper, your books stay updated and your tax
                  responsibilities remain under control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <Faq />
    </section>
  );
}

export default HomeService;
