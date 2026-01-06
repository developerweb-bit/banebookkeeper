import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#9CAB84] to-[#89986D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 pb-5">
        {/* Top Section */}
        {/* Disclaimer */}
        <div className="text-center py-15 rounded-2xl mb-10 bg-[#f4f4f4] px-6 text-black ">
          <h3 className="text-4xl mb-2 font-semibold">Banebookkeeper</h3>
          <p className="text-base leading-relaxed">
            Banebookkeeper is not a CPA firm and does not provide attest
            services, including audits, reviews, or compilations. These services
            are regulated by the Texas State Board of Public Accountancy and are
            not offered by Banebookkeeper.
          </p>

          <p className="text-base leading-relaxed mt-4">
            Our services are limited to bookkeeping and tax support, delivered
            with accuracy, confidentiality, and compliance-focused processes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Navigation */}
          <div className="pl-0 md:pl-15">
            <h4 className="text-lg font-semibold  mb-5">Quick Links</h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Services</h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/services" className="hover:underline">
                  Tax
                </Link>
              </li>
              <li>
                <Link href="/web-marketing" className="hover:underline">
                  Bookkeeping
                </Link>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Legal</h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/30  pt-6 text-center text-sm">
          © {new Date().getFullYear()} Banebookkeeper. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
