"use client";
import Image from "next/image";
import book from "../../../public/book.jpg";

import {
  FaCheckCircle,
  FaChartLine,
  FaFileInvoiceDollar,
} from "react-icons/fa";

import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaUniversity,
  FaMoneyCheckAlt,
  FaChartBar,
  FaBroom,
  FaHandsHelping,
} from "react-icons/fa";

export default function page() {
  const services = [
    {
      icon: <FaClipboardList />,
      title: "Transaction Recording",
      text: "We accurately record daily, weekly, or monthly financial transactions, ensuring income and expenses are properly categorized and documented.",
    },
    {
      icon: <FaUniversity />,
      title: "Bank & Credit Card Reconciliations",
      text: "Regular reconciliations help identify discrepancies early and ensure your financial records match actual account activity.",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Accounts Payable & Receivable Tracking",
      text: "We help you track outgoing payments and incoming receivables to improve cash flow visibility and avoid missed payments.",
    },
    {
      icon: <FaChartBar />,
      title: "Financial Statements & Reports",
      text: "Receive clear and timely financial reports such as Profit & Loss statements and Balance Sheets to understand business performance.",
    },
    {
      icon: <FaBroom />,
      title: "Book Clean-Up & Catch-Up Services",
      text: "If your books are behind or disorganized, we provide clean-up and catch-up services to bring everything up to date.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Ongoing Bookkeeping Support",
      text: "Consistent monthly bookkeeping support tailored to your business size and operational needs.",
    },
  ];

  const benefits = [
    "Improved financial clarity",
    "Better cash flow management",
    "Reduced errors and inconsistencies",
    "Organized records for tax readiness",
    "Less time spent on manual tracking",
  ];

  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-6 text-gray-700 space-y-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-semibold text-[#1f2933] mb-4">
              Bookkeeping Services
            </h1>
            <p className="text-xl font-medium mb-4">
              Accurate Records. Organized Finances. Better Control.
            </p>
            <p className="leading-relaxed text-gray-700">
              Our bookkeeping services are designed to maintain clean,
              up-to-date financial records that reflect the true financial
              position of your business. We manage your books with attention to
              detail and consistency, ensuring nothing is missed.
            </p>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src={book}
              alt="Professional bookkeeping services"
              fill
              className="object-cover"
              priority
            />
            {/* Soft Brand Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#9CAB84]/20 to-[#89986D]/20" />
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-[#1f2933] mb-12"
          >
            What Our Bookkeeping Services Include
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border rounded-2xl p-8 hover:shadow-xl transition"
              >
                <div className="w-12 h-12 mb-5 rounded-xl bg-[#9CAB84]/15 text-[#9CAB84] flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1f2933] mb-3">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#f7faf8] border rounded-3xl p-12"
        >
          <h2 className="text-3xl font-semibold text-[#1f2933] mb-8">
            Benefits of Our Bookkeeping Services
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
            {benefits.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-white border rounded-xl p-6"
              >
                <span className="w-2.5 h-2.5 bg-[#89986D] rounded-full mt-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
