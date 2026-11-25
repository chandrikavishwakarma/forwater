import React, { useState } from 'react';
import { X, Printer, CheckCircle2, Tag } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function CouponModal({ isOpen, onClose }) {
  const [claimed, setClaimed] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000F26]/80 backdrop-blur-sm transition-opacity animate-in fade-in overflow-y-auto font-sans">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#E2EFF3] overflow-hidden text-[#191919] my-auto max-h-[95vh] flex flex-col">
        
        {/* Header bar - HydroLOGICA Deep Navy #000F26 */}
        <div className="bg-[#000F26] text-white px-6 py-4 flex items-center justify-between shrink-0 border-b border-white/10">
          <div className="flex items-center space-x-2.5 min-w-0">
            <Tag className="w-5 h-5 text-[#AAD651] shrink-0" />
            <span className="font-heading font-bold text-base text-white truncate">
              Special Savings Voucher
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 rounded-full hover:bg-white/15 transition-colors text-white shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Coupon Content */}
        <div className="p-6 sm:p-8 text-center printable-area overflow-y-auto bg-white">
          <div className="border-2 border-dashed border-[#00A8EB] p-6 rounded-2xl bg-[#E2EFF3]/30">
            <div className="flex justify-center mb-4">
              <img 
                src="/logos/logo.png" 
                alt={siteData.company.name} 
                className="h-10 sm:h-12 object-contain bg-white rounded-xl p-1.5 shadow-xs border border-[#E2EFF3]"
              />
            </div>
            
            <span className="inline-block px-3 py-1 rounded-full bg-[#AAD651] text-[#191919] font-heading font-extrabold text-xs uppercase tracking-wider mb-2">
              Instant Savings
            </span>

            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#000F26] uppercase tracking-tight">
              $50 OFF
            </h3>
            <p className="font-heading font-semibold text-sm sm:text-base text-[#00A8EB] mt-1">
              Well Pump, Well Tank, or Pump & Tank System
            </p>
            
            <p className="font-sans font-normal text-xs sm:text-sm text-[#191919]/70 mt-3 max-w-md mx-auto leading-relaxed">
              Present this coupon to your Contoocook Artesian Well Company technician at time of service to receive $50 off your pump or tank installation.
            </p>

            <div className="mt-5 pt-4 border-t border-[#E2EFF3] flex flex-col sm:flex-row justify-between items-center text-xs text-[#191919]/70 gap-2 font-sans font-normal">
              <span>Promo Code: <strong className="font-bold text-[#000F26]">WEB-50-PUMP</strong></span>
              <span>Expires: End of Month</span>
              <span>Call: <strong className="font-bold text-[#000F26]">{siteData.company.phone}</strong></span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-[#E2EFF3]/50 px-6 py-4 border-t border-[#E2EFF3] flex flex-col sm:flex-row justify-end gap-3 shrink-0">
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#E2EFF3] bg-white hover:bg-white/80 text-[#000F26] text-sm font-heading font-semibold transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4 text-[#00A8EB]" />
            <span>Print Voucher</span>
          </button>

          <button
            onClick={() => {
              setClaimed(true);
              setTimeout(() => {
                onClose();
              }, 1200);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#AAD651] hover:bg-[#bce468] text-[#191919] text-sm font-heading font-bold shadow-sm transition-all transform hover:scale-105 active:scale-95 duration-200 cursor-pointer"
          >
            {claimed ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-[#191919]" />
                <span>Voucher Claimed!</span>
              </>
            ) : (
              <span>Claim Voucher</span>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
