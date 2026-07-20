import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle, Camera, Share2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* School Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-secondary">Maria Mata Convent High School</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Nurturing young minds with values, knowledge, and excellence since our inception. We believe in providing a holistic education that prepares students for life.
          </p>
          <div className="flex space-x-4">
            <MessageCircle className="h-5 w-5 cursor-pointer hover:text-secondary transition-colors" />
            <Camera className="h-5 w-5 cursor-pointer hover:text-secondary transition-colors" />
            <Share2 className="h-5 w-5 cursor-pointer hover:text-secondary transition-colors" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold border-b border-white/20 pb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
            <li><Link href="/admission" className="hover:text-secondary transition-colors">Admission Process</Link></li>
            <li><Link href="/curriculum" className="hover:text-secondary transition-colors">Academic Programs</Link></li>
            <li><Link href="/gallery" className="hover:text-secondary transition-colors">Photo Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Mandatory Disclosures */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold border-b border-white/20 pb-2">Compliance</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link href="/mandatory-disclosure" className="hover:text-secondary transition-colors">Mandatory Disclosure</Link></li>
            <li><Link href="/tc" className="hover:text-secondary transition-colors">Transfer Certificate</Link></li>
            <li><Link href="/rules" className="hover:text-secondary transition-colors">Rules & Regulations</Link></li>
            <li><Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold border-b border-white/20 pb-2">Contact Us</h3>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-secondary shrink-0" />
              <span>Chhatarpur, Madhya Pradesh, India - 471001</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-secondary shrink-0" />
              <span>+91 7682 XXXXXX</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-secondary shrink-0" />
              <span>info@mmcshschool.edu.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-xs text-slate-400">
        <p>&copy; {new Date().getFullYear()} Maria Mata Convent High School. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
