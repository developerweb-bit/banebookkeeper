"use client";
import { motion } from "framer-motion";

import Image from "next/image";

import tax from "../../../public/tax.jpg";
import { FaCalendarCheck, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

export default function page() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-gray-700 space-y-24">

        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-semibold text-[#1f2933] mb-4">
              Tax Services
            </h1>
            <p className="text-lg mb-6">
              Simple, Timely, and Stress-Free Tax Support
            </p>
            <p className="leading-relaxed max-w-xl">
              We help businesses stay compliant with tax requirements
              through accurate preparation and proactive support—without
              last-minute stress.
            </p>
          </div>

          <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={tax}
              alt="Tax services"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-3xl font-semibold text-[#1f2933] mb-10">
            Our Tax Services Include
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              "Tax preparation and filing support",
              "Compliance assistance",
              "Year-round tax guidance",
              "Deadline and documentation management",
            ].map((item, i) => (
              <div
                key={i}
                className="border rounded-2xl p-6 hover:shadow-lg transition"
              >
                <div className="w-10 h-10 mb-4 rounded-lg bg-[#89986D]/15 text-[#89986D] flex items-center justify-center">
                  <FaCheckCircle />
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why It Matters */}
        <div className="bg-[#f7faf8] border rounded-3xl p-12 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-[#1f2933] mb-4">
              Why It Matters
            </h3>
            <p className="leading-relaxed">
              Well-managed tax processes reduce risk, prevent penalties,
              and provide peace of mind throughout the year.
            </p>
          </div>
          <div className="flex gap-6">
            <FaCalendarCheck className="text-4xl text-[#9CAB84]" />
            <FaShieldAlt className="text-4xl text-[#89986D]" />
          </div>
        </div>

        {/* Disclosure */}
        <div className="border rounded-2xl p-6 text-sm text-gray-600">
          <strong>Important Disclosure:</strong> Banebookkeeper is not a CPA
          firm and does not provide attest services, including audits,
          reviews, or compilations regulated by the Texas State Board of
          Public Accountancy.
        </div>

      </div>
    </section>
  );
}
