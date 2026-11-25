import React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Footer({ onOpenCoupon }) {
  return (
    <footer className="bg-[#002D55] text-[#D5BBD3] pt-16 pb-10 border-t border-[#16466F] font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
        
        {/* 3-Column Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12">
          
          {/* Column 1: Company Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="font-serif font-bold text-2xl lg:text-[26px] text-white tracking-tight">
              Contoocook Artesian Well Co.
            </div>
            <p className="font-sans font-normal text-base text-[#D5BBD3]">
              {siteData.company.address.street}, {siteData.company.address.poBox}, {siteData.company.address.city}, {siteData.company.address.state} {siteData.company.address.zip}
            </p>
            <p className="font-sans font-normal text-base text-[#D5BBD3]">
              <a href={`tel:${siteData.company.phoneClean}`} className="font-semibold text-white hover:text-[#A875A5] transition-colors">
                {siteData.company.phone}
              </a>
              <span className="mx-2 text-[#477397]">|</span>
              <a href={`mailto:${siteData.company.email}`} className="hover:text-[#A875A5] transition-colors underline">
                {siteData.company.email}
              </a>
            </p>
            {onOpenCoupon && (
              <div className="pt-3">
                <button
                  onClick={onOpenCoupon}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#16466F] hover:bg-[#6E2C6B] text-white border border-[#477397] font-sans text-xs font-semibold tracking-wider transition-colors cursor-pointer"
                >
                  <Tag className="w-3.5 h-3.5 text-[#D5BBD3]" />
                  <span>$50 Off Coupon Available</span>
                </button>
              </div>
            )}
          </div>

          {/* Column 2: Navigation Pages */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-sans font-bold text-[17px] text-white tracking-wide">
              Pages
            </h4>
            <div className="flex flex-col space-y-2 text-[15.5px] font-sans font-normal">
              <Link to="/services" className="text-[#D5BBD3] hover:text-white transition-colors">Services</Link>
              <Link to="/no-water-or-pressure" className="text-[#D5BBD3] hover:text-white transition-colors">No Water or Pressure?</Link>
              <Link to="/history" className="text-[#D5BBD3] hover:text-white transition-colors">Our History</Link>
              <Link to="/contact" className="text-[#D5BBD3] hover:text-white transition-colors">Contact</Link>
              <Link to="/resources" className="text-[#D5BBD3] hover:text-white transition-colors">Resources</Link>
              <Link to="/open-positions" className="text-[#D5BBD3] hover:text-white transition-colors">Open Positions</Link>
            </div>
          </div>

          {/* Column 3: Follow us */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-sans font-bold text-[17px] text-white tracking-wide">
              Follow us
            </h4>
            <div className="flex flex-col space-y-2 text-[15.5px] font-sans font-normal">
              <a 
                href={siteData.company.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#D5BBD3] hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>Facebook</span>
                <span className="text-xs text-[#477397]">↗</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Fine Print matching reference */}
        <div className="pt-6 border-t border-[#16466F] text-sm text-[#477397] flex flex-col sm:flex-row items-center justify-between gap-3 font-sans font-normal">
          <p>© 2017 by Contoocook Artesian Well Co.</p>
          <p className="text-xs text-[#477397]">State of New Hampshire Water Well License #1 • 7 Day Service</p>
        </div>

      </div>
    </footer>
  );
}
