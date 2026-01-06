"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";

export default function page() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // const data = {};
    // formData.forEach((value, key) => {
    //   data[key] = value;
    // });

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        alert("Failed to send message. Try again.");
      });
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-semibold text-[#1f2933] mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Let’s Simplify Your Bookkeeping & Tax Needs. We’re here to help you
            stay organized, compliant, and confident with your finances.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <FaUser />,
              title: "Bookkeeping Support",
              text: "Accurate and reliable bookkeeping tailored to your business.",
            },
            {
              icon: <FaEnvelope />,
              title: "Tax Assistance",
              text: "Professional tax preparation and year-round support.",
            },
            {
              icon: <FaPhoneAlt />,
              title: "Ongoing Support",
              text: "Clear communication and dependable financial guidance.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#9CAB84] text-white text-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#1f2933] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Content + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-6 text-gray-700">
            <h3 className="text-2xl font-semibold text-[#1f2933]">
              Get in Touch
            </h3>

            <p>
              Whether you’re looking for ongoing bookkeeping services, tax
              support, or general information, we’d love to hear from you.
            </p>

            <h4 className="text-xl font-semibold text-[#1f2933] mt-6">
              What to Expect
            </h4>

            <ul className="space-y-3">
              {[
                "Prompt and professional responses",
                "Clear communication",
                "Confidential handling of your information",
                "Reliable support tailored to your needs",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#89986D] rounded-full mt-2"></span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Form Card */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-white border rounded-xl p-8 shadow-md"
          >
            <h3 className="text-2xl font-semibold text-[#1f2933] mb-6">
              Let’s Start the Conversation
            </h3>

            <div className="space-y-4">
              <div className="relative">
                <FaUser className="absolute top-4 left-3 text-[#89986D]" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full pl-10 p-3 border rounded-md focus:outline-none"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute top-4 left-3 text-[#89986D]" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full pl-10 p-3 border rounded-md focus:outline-none"
                />
              </div>

              <div className="relative">
                <FaPhoneAlt className="absolute top-4 left-3 text-[#89986D]" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full pl-10 p-3 border rounded-md focus:outline-none"
                />
              </div>

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-3 border rounded-md resize-none focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#9CAB84] to-[#89986D] text-white py-3 rounded-md font-medium hover:opacity-90 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
