import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Footer({ onOpenCoupon }) {
  return (
    <footer className="bg-[#000F26] text-[#E2EFF3] pt-16 sm:pt-20 pb-12 border-t border-white/10 font-sans relative overflow-hidden">
      {/* Decorative radial glow */}
      <div 
        className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-[#00A8EB]/5 blur-[100px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 relative z-10">
        
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-white/10">
          
          {/* Column 1: Company Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-heading font-extrabold text-2xl lg:text-3xl text-white tracking-tight">
              Contoocook Artesian <span className="text-[#00A8EB]">Well Co.</span>
            </div>
            <p className="font-sans font-normal text-sm sm:text-base text-[#A4DEF3]/90 leading-relaxed">
              {siteData.company.address.street}, {siteData.company.address.poBox}, {siteData.company.address.city}, {siteData.company.address.state} {siteData.company.address.zip}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a 
                href={`tel:${siteData.company.phoneClean}`} 
                className="font-heading font-bold text-lg text-white hover:text-[#00A8EB] transition-colors"
              >
                {siteData.company.phone}
              </a>
              <span className="text-white/30">•</span>
              <a 
                href={`mailto:${siteData.company.email}`} 
                className="text-sm text-[#A4DEF3] hover:text-white transition-colors underline"
              >
                {siteData.company.email}
              </a>
            </div>

            {onOpenCoupon && (
              <div className="pt-2">
                <button
                  onClick={onOpenCoupon}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#AAD651] hover:bg-[#bce468] text-[#191919] font-heading text-xs font-bold uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 duration-200 cursor-pointer shadow-sm"
                >
                  <Tag className="w-3.5 h-3.5 text-[#191919]" />
                  <span>$50 Off Coupon Available</span>
                </button>
              </div>
            )}
          </div>

          {/* Column 2: Navigation Pages */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider">
              Navigation
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm font-sans font-medium text-[#E2EFF3]/80">
              <Link to="/services" className="hover:text-[#00A8EB] transition-colors">Services</Link>
              <Link to="/no-water-or-pressure" className="hover:text-[#00A8EB] transition-colors">No Water or Pressure?</Link>
              <Link to="/history" className="hover:text-[#00A8EB] transition-colors">Our History</Link>
              <Link to="/contact" className="hover:text-[#00A8EB] transition-colors">Contact</Link>
              <Link to="/resources" className="hover:text-[#00A8EB] transition-colors">Resources</Link>
              <Link to="/open-positions" className="hover:text-[#00A8EB] transition-colors">Open Positions</Link>
            </div>
          </div>

          {/* Column 3: Connect & Credentials */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm font-sans font-medium">
              <a 
                href={siteData.company.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#E2EFF3]/80 hover:text-[#00A8EB] transition-colors inline-flex items-center gap-1.5"
              >
                <span>Facebook</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#00A8EB]" />
              </a>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#AAD651] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#AAD651] animate-pulse"></span>
                <span>NH Well License #1</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Fine Print */}
        <div className="pt-8 text-xs sm:text-sm text-[#A4DEF3]/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans font-normal">
          <p>© {new Date().getFullYear()} Contoocook Artesian Well Co. All rights reserved.</p>
          <p className="text-xs text-[#A4DEF3]/60">State of New Hampshire Water Well License #1 • 7 Day Live Service</p>
        </div>

      </div>
    </footer>
  );
}
