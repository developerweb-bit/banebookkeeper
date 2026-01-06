"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaCheckCircle,
  FaLock,
  FaComments,
  FaClock,
  FaBullseye,
  FaHandshake,
} from "react-icons/fa";
import Faq from "../components/Faq/Faq";

export default function page() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mb-15  mx-auto px-6 text-gray-700 space-y-28">
        {/* About Intro */}
        <section className="relative py-18 rounded-2xl overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70" />

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <h2 className="text-4xl font-semibold text-[#1f2933] mb-6">
                About Us
              </h2>

              <p className="leading-relaxed text-lg text-gray-700">
                At Banebookkeeper, we believe that clear financial records and
                reliable tax support are essential for business confidence and
                long-term growth. Our focus is on delivering accurate,
                organized, and stress-free bookkeeping and tax services tailored
                to small and growing businesses.
              </p>

              <p className="leading-relaxed text-lg text-gray-700 mt-4">
                We work closely with our clients to simplify financial
                processes, maintain compliance, and provide clarity—without
                unnecessary complexity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-14 items-center"
        >
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#9CAB84]/30 to-[#89986D]/30 rounded-3xl blur-2xl" />
            <div className="relative h-150 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                alt="Founder"
                // width={500}
                // height={500}
                className="object-cover h-full w-full"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-semibold text-[#1f2933] mb-2">
              About the Founder
            </h3>
            <h4 className="text-xl font-medium text-[#89986D] mb-4">
              Jaya Bisht
            </h4>
            <p className="leading-relaxed mb-4">
              Jaya Bisht brings over 5 years of hands-on experience in
              bookkeeping and tax support, helping businesses maintain accurate
              financial records and manage tax responsibilities with confidence.
            </p>
            <p className="leading-relaxed mb-4">
              With strong expertise in day-to-day bookkeeping, reconciliations,
              and tax documentation, Jaya focuses on detail, consistency, and
              timely delivery.
            </p>
            <p className="leading-relaxed">
              She believes effective bookkeeping and tax management go beyond
              numbers—it’s about building trust, accuracy, and informed business
              decisions.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-[#1f2933] mb-10">
            Our Values
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <FaCheckCircle />, text: "Accuracy in every record" },
              { icon: <FaLock />, text: "Confidential handling of data" },
              { icon: <FaComments />, text: "Clear & honest communication" },
              { icon: <FaClock />, text: "Reliable & timely service" },
            ].map((item, i) => (
              <div
                key={i}
                className="border rounded-2xl p-6 text-center hover:shadow-lg transition"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#9CAB84]/15 text-[#9CAB84] flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <p className="font-medium text-[#1f2933]">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mission + Why */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Mission */}
          <div className="bg-[#f7faf8] border rounded-3xl p-10">
            <div className="w-12 h-12 rounded-xl bg-[#89986D]/20 text-[#89986D] flex items-center justify-center text-xl mb-4">
              <FaBullseye />
            </div>
            <h3 className="text-2xl font-semibold text-[#1f2933] mb-4">
              Our Mission
            </h3>
            <p className="leading-relaxed">
              To provide dependable bookkeeping and tax services that help
              businesses stay organized, compliant, and confident in their
              financial operations.
            </p>
          </div>

          {/* Why */}
          <div className="bg-[#f7faf8] border rounded-3xl p-10">
            <div className="w-12 h-12 rounded-xl bg-[#9CAB84]/20 text-[#9CAB84] flex items-center justify-center text-xl mb-4">
              <FaHandshake />
            </div>
            <h3 className="text-2xl font-semibold text-[#1f2933] mb-4">
              Why BaneBookkeeper
            </h3>
            <p className="leading-relaxed">
              Clients choose Banebookkeeper for consistent support, transparent
              processes, and a strong commitment to financial clarity.
            </p>
          </div>
        </motion.div>
      </div>
      <Faq />
    </section>
  );
}
