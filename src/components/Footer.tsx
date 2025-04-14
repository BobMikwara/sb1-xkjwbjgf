import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-stone-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Olkinyei Expeditions</h3>
            <p className="text-stone-300">
              Experience the wild, explore the untamed. Your trusted partner in African safari adventures.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-stone-300 hover:text-amber-500">Home</Link></li>
              <li><Link to="/about" className="text-stone-300 hover:text-amber-500">About</Link></li>
              <li><Link to="/services" className="text-stone-300 hover:text-amber-500">Services</Link></li>
              <li><Link to="/gallery" className="text-stone-300 hover:text-amber-500">Gallery</Link></li>
              <li><Link to="/contact" className="text-stone-300 hover:text-amber-500">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-stone-300">
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                info@olkinyei.com
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +254 700 000000
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-300 hover:text-amber-500">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-stone-300 hover:text-amber-500">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-stone-300 hover:text-amber-500">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-stone-700 text-center text-stone-300">
          <p>&copy; {new Date().getFullYear()} Olkinyei Expeditions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;