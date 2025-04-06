import { Mail, Phone, Linkedin, Youtube, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1328] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Left Section */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-3">
              <img src="/logo.png" alt="Airtribe" className="h-8" />
              <span className="text-xl font-semibold ml-2">Airtribe</span>
            </div>
            <p className="text-sm text-gray-300">
              Transforming the way individuals learn and network for professional
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <Linkedin className="cursor-pointer text-gray-400 hover:text-white" />
              <Youtube className="cursor-pointer text-gray-400 hover:text-white" />
              <Instagram className="cursor-pointer text-gray-400 hover:text-white" />
              <Twitter className="cursor-pointer text-gray-400 hover:text-white" />
            </div>
            {/* Contact */}
            <p className="mt-4 text-sm">
              <Mail className="inline-block mr-2 text-gray-400" />
              support@airtribe.live
            </p>
            <p className="text-sm">
              <Phone className="inline-block mr-2 text-gray-400" />
              +91 7204287636
            </p>
          </div>

          {/* Product Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-3">PRODUCT COURSES</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Product Management Launchpad</li>
              <li className="hover:text-white cursor-pointer">PM Interview Mastery</li>
              <li className="hover:text-white cursor-pointer">Tech Mastery for PMs</li>
            </ul>
          </div>

          {/* Tech Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-3">TECH COURSES</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Full-stack Development Launchpad</li>
              <li className="hover:text-white cursor-pointer">Data Science Launchpad</li>
              <li className="hover:text-white cursor-pointer">Backend Engineering Launchpad</li>
              <li className="hover:text-white cursor-pointer">DSA course for professionals</li>
            </ul>
          </div>

          {/* Resources & Airtribe */}
          <div className="flex flex-col md:flex-row md:gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-3">RESOURCES</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">Job board</li>
                <li className="hover:text-white cursor-pointer">Free resume review</li>
                <li className="hover:text-white cursor-pointer">Projects showcase</li>
                <li className="hover:text-white cursor-pointer">Events</li>
                <li className="hover:text-white cursor-pointer">Upskill for free</li>
                <li className="hover:text-white cursor-pointer">Newsletter</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">AIRTRIBE</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">Reviews</li>
                <li className="hover:text-white cursor-pointer">Community</li>
                <li className="hover:text-white cursor-pointer">Hire from us</li>
                <li className="hover:text-white cursor-pointer">Careers at Airtribe</li>
                <li className="hover:text-white cursor-pointer">About us</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-400 text-sm">
          <p>© 2025 Airtribe Inc.</p>
          <div className="flex justify-center gap-4 mt-2">
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
