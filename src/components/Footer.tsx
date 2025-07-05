
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Galaxy Dental Care</h3>
                <p className="text-primary-200 text-sm">Your Smile, Our Priority</p>
              </div>
            </div>
            <p className="text-primary-100 text-sm leading-relaxed">
              Galaxy Dental Care is a premier dental clinic offering comprehensive dental treatments 
              with state-of-the-art technology and experienced dental professionals.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/galaxydentalcare" className="text-primary-200 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/galaxydentalcare" className="text-primary-200 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/galaxydentalcare" className="text-primary-200 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-200 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/treatments" className="text-primary-200 hover:text-white transition-colors text-sm">Our Treatments</Link></li>
              <li><Link to="/branches" className="text-primary-200 hover:text-white transition-colors text-sm">Our Branches</Link></li>
              <li><Link to="/patient-safety" className="text-primary-200 hover:text-white transition-colors text-sm">Patient Safety</Link></li>
              <li><Link to="/blog" className="text-primary-200 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link to="/contact" className="text-primary-200 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/treatments/dental-implants" className="text-primary-200 hover:text-white transition-colors text-sm">Dental Implants</Link></li>
              <li><Link to="/treatments/invisible-aligners" className="text-primary-200 hover:text-white transition-colors text-sm">Invisible Aligners</Link></li>
              <li><Link to="/treatments/root-canal" className="text-primary-200 hover:text-white transition-colors text-sm">Root Canal Treatment</Link></li>
              <li><Link to="/treatments/dental-crowns" className="text-primary-200 hover:text-white transition-colors text-sm">Dental Crowns</Link></li>
              <li><Link to="/treatments/laser-dentistry" className="text-primary-200 hover:text-white transition-colors text-sm">Laser Dentistry</Link></li>
              <li><Link to="/treatments/advanced-gum-treatments" className="text-primary-200 hover:text-white transition-colors text-sm">Gum Treatments</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-300 mt-0.5" />
                <div>
                  <p className="text-primary-200 text-sm">+91 9876543210</p>
                  <p className="text-primary-200 text-sm">+91 8765432109</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-300 mt-0.5" />
                <div>
                  <p className="text-primary-200 text-sm">info@galaxydentalcare.in</p>
                  <p className="text-primary-200 text-sm">care@galaxydentalcare.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-300 mt-0.5" />
                <p className="text-primary-200 text-sm">Multiple locations across Hyderabad</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-300 mt-0.5" />
                <div>
                  <p className="text-primary-200 text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-primary-200 text-sm">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-200">
            <p>&copy; 2024 Galaxy Dental Care. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
