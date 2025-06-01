import React from 'react';
import { ShoppingBag, Facebook, Twitter, Instagram, Youtube, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center mb-4">
              <ShoppingBag className="h-8 w-8 mr-2 text-sky-300" />
              <span className="font-bold text-2xl">CleanDive</span>
            </div>
            <p className="text-gray-300 mb-4">
              Revolutionizing laundry services with convenience, quality, and eco-friendly solutions.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: <Facebook size={20} />, url: "#" },
                { icon: <Twitter size={20} />, url: "https://x.com/cleandive007?t=-k-mIXgounsbNXMMYkfM_A&s=09" },
                { icon: <Instagram size={20} />, url: "https://www.instagram.com/cleandive007?igsh=dHFwZHk3dGRzZHYx" },
                { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/company/cleandive/" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="bg-white-500 hover:bg-black h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Wash & Fold",
                "Dry Cleaning",
                "Ironing Service",
                "Stain Removal",
                "Alterations",
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
                { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
                { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
              ].map((schedule, index) => (
                <li key={index}>
                  <span className="block">{schedule.day}</span>
                  <span className="text-sky-300">{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 pt-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center lg:text-left">
            © 2025 CleanDive Laundry Services. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {["Privacy Policy", "Terms of Service", "Cookies Policy"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        
        <div className="flex flex-col items-center mt-8">
          <h1 className="text-sm">Crafted By Ajay Khawse</h1>
          <div className="flex space-x-3 mt-2">
            {[
              { icon: <Github size={20} />, url: "https://github.com/ajaykhawse0" },
              { icon: <Twitter size={20} />, url: "https://x.com/AjayKhawse" },
              { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/ajay-khawse-b4226129b/" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="bg-white-500 hover:bg-black h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
