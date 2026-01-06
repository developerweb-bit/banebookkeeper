"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import imgss from "../../../../../public/img.jpg"

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        {/* Background Accent */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-[#9CAB84]/30 to-[#89986D]/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-[#89986D]/20 to-[#9CAB84]/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-18 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-[#1f2933] leading-tight"
            >
              Bookkeeping & Tax Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9CAB84] to-[#89986D]">
                Made Simple
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-xl"
            >
              Running a business is challenging — your finances shouldn’t be.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-500 max-w-xl"
            >
              At Banebookkeeper, we provide reliable bookkeeping and tax support
              to help businesses stay organized, compliant, and confident.
            </motion.p>

            {/* Divider */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-[#9CAB84] to-[#89986D]" />

            {/* Tagline */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-2xl md:text-3xl font-semibold text-[#1f2933]"
            >
              Clear Numbers. Smart Decisions.
            </motion.h2>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                href="/contact"
                className="px-10 py-4 bg-gradient-to-r from-[#9CAB84] to-[#89986D] text-white text-lg font-medium rounded-xl shadow-lg hover:shadow-[#89986D]/40 transition-all duration-300 hover:-translate-y-1"
              >
                Get Started Free
              </Link>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-120 "
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border">
              <Image
                src={imgss}
                alt="Bookkeeping illustration"
                width="100%"
              
                className="object-cover h-[400px]"
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/*  */}
     
    </>
  );
}
