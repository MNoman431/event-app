import { Facebook, Instagram, Twitter } from "lucide-react"
export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Us Section */}
          <div className="border-2 border-yellow-400 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-300 leading-relaxed">
              At Gather Genie, we are passionate about creating unforgettable experiences. Our mission is to make event
              planning and management a seamless and stress-free process, allowing you to focus on what truly matters
              making your event a resounding success.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="border-2 border-yellow-400 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>43 Lake City, Lahore, Pakistan</p>
              <p>GatherGenie@gmail.com</p>
              <p>Phone: 03354059257</p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="border-2 border-yellow-400 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-6 border-t border-gray-600">
          <p className="text-gray-300">
            Copyright © <span className="underline">Gather Genie</span> 2025.
          </p>
        </div>
      </div>
    </footer>
  )
}
