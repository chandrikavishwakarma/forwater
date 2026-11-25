import React, { useState } from 'react';
import { X, Printer, CheckCircle, Tag } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function CouponModal({ isOpen, onClose }) {
  const [claimed, setClaimed] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 bg-[#002D55]/80 backdrop-blur-xs transition-opacity animate-in fade-in overflow-y-auto font-sans">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border-2 border-[#16466F] overflow-hidden text-[#172638] my-auto max-h-[95vh] flex flex-col">
        
        {/* Header bar (Deep Navy #002D55 with Plum accent) */}
        <div className="bg-[#002D55] text-white px-4 sm:px-6 py-3.5 flex items-center justify-between shrink-0 border-b border-[#16466F]">
          <div className="flex items-center space-x-2 min-w-0">
            <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-[#A875A5] shrink-0" />
            <span className="font-serif font-bold text-sm sm:text-base text-white truncate">
              Special Promotional Savings Coupon
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 rounded-full hover:bg-white/20 transition-colors text-white ml-2 shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Coupon Content */}
        <div className="p-4 sm:p-6 text-center printable-area overflow-y-auto bg-white">
          <div className="border-2 border-dashed border-[#6E2C6B] p-4 sm:p-6 rounded-xl bg-[#F8F7F9]">
            <div className="flex justify-center mb-3">
              <img 
                src="/logos/logo.png" 
                alt={siteData.company.name} 
                className="h-10 sm:h-12 object-contain bg-white rounded-md p-1 shadow-2xs border border-[#D5BBD3]"
              />
            </div>
            
            <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#002D55] uppercase tracking-tight">
              $50 OFF
            </h3>
            <p className="font-sans font-semibold text-sm sm:text-base text-[#6E2C6B] mt-1">
              Well Pump, Well Tank, or Pump & Tank System
            </p>
            
            <p className="font-sans font-normal text-xs sm:text-sm text-[#477397] mt-2 sm:mt-3 max-w-md mx-auto leading-relaxed">
              Present this coupon to your Contoocook Artesian Well Company technician at time of service to receive $50 off your pump or tank installation.
            </p>

            <div className="mt-4 pt-3 border-t border-[#D5BBD3] flex flex-col sm:flex-row justify-between items-center text-[11px] sm:text-xs text-[#477397] gap-1.5 sm:gap-2 font-sans font-normal">
              <span>Promo Code: <strong className="font-semibold text-[#002D55]">WEB-50-PUMP</strong></span>
              <span>Expires: End of Current Month</span>
              <span>Call: <strong className="font-semibold text-[#002D55]">{siteData.company.phone}</strong></span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-[#F8F7F9] px-4 sm:px-6 py-3.5 border-t border-[#D5BBD3] flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 shrink-0">
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl border border-[#D5BBD3] bg-white hover:bg-[#E8DFE9] text-[#172638] text-sm font-semibold transition-colors shadow-2xs cursor-pointer"
          >
            <Printer className="w-4 h-4 text-[#477397]" />
            <span>Print Coupon</span>
          </button>

          <button
            onClick={() => {
              setClaimed(true);
              setTimeout(() => {
                onClose();
              }, 1200);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-[#6E2C6B] hover:bg-[#854B82] text-white text-sm font-bold shadow-sm transition-colors cursor-pointer"
          >
            {claimed ? (
              <>
                <CheckCircle className="w-4 h-4 text-white" />
                <span>Coupon Claimed!</span>
              </>
            ) : (
              <span>Claim Coupon</span>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
