import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  AlertTriangle, 
  CheckCircle2, 
  Tag, 
  ArrowRight,
  Download,
  Clock,
  Wrench,
  ShieldAlert
} from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from '../components/ScrollReveal';

export default function NoWaterPressure({ onOpenCoupon }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] w-full overflow-x-hidden text-[#191919] font-sans">
      
      {/* 1. Hero Header - HydroLOGICA Deep Navy (#000F26) */}
      <section 
        className="text-white pt-16 sm:pt-20 pb-16 sm:pb-20 relative overflow-hidden bg-[#000F26]"
        style={{
          background: 'radial-gradient(1000px 500px at 80% 20%, rgba(0, 168, 235, 0.16) 0%, transparent 70%), #000F26'
        }}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 text-center sm:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#00A8EB]/40 text-xs font-semibold text-[#A4DEF3] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#AAD651] animate-pulse"></span>
            <span>Emergency Well & Pump Service • Southern & Central NH</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl">
            No Water? <span className="text-[#00A8EB] block sm:inline">Or Low Water Pressure?</span>
          </h1>

          <p className="mt-4 font-sans font-normal text-base sm:text-lg lg:text-xl text-[#E2EFF3]/90 max-w-2xl leading-relaxed">
            When you find your water pressure is low or you have NO WATER — call us! We are on call 7 days a week.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center sm:justify-start">
            <a
              href={`tel:${siteData.company.phoneClean}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#AAD651] hover:bg-[#bce468] text-[#191919] font-heading font-bold text-base rounded-full shadow-[0_12px_32px_-8px_rgba(170,214,81,0.5)] transition-all transform hover:scale-105 active:scale-95 duration-200"
            >
              <Phone className="w-5 h-5 fill-[#191919] text-[#191919]" />
              <span>Call 603-428-6060</span>
            </a>

            <a
              href="/documents/Low-or-No-Water-Pressure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 text-white border border-[#00A8EB]/40 font-heading font-bold text-sm rounded-full backdrop-blur-md transition-all transform hover:-translate-y-0.5 duration-200"
            >
              <Download className="w-4 h-4 text-[#00A8EB]" />
              <span>Troubleshooting Guide (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Main Content */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-24 space-y-16 sm:space-y-20">
        
        {/* Quick Diagnostic Steps Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#E2EFF3]/50 border border-[#E2EFF3] rounded-3xl p-6 sm:p-7">
            <div className="w-9 h-9 rounded-full bg-[#00A8EB] text-white font-heading font-bold flex items-center justify-center text-sm mb-4">
              1
            </div>
            <h4 className="font-heading font-bold text-lg text-[#000F26] mb-2">Check the Breaker</h4>
            <p className="font-sans text-sm text-[#191919]/70 leading-relaxed">
              Verify your well pump circuit breaker in your electrical panel hasn't tripped. If it trips repeatedly, leave it off and call us.
            </p>
          </div>

          <div className="bg-[#E2EFF3]/50 border border-[#E2EFF3] rounded-3xl p-6 sm:p-7">
            <div className="w-9 h-9 rounded-full bg-[#00A8EB] text-white font-heading font-bold flex items-center justify-center text-sm mb-4">
              2
            </div>
            <h4 className="font-heading font-bold text-lg text-[#000F26] mb-2">Inspect Pressure Gauge</h4>
            <p className="font-sans text-sm text-[#191919]/70 leading-relaxed">
              Locate your pressure tank (usually in the basement). Check if the gauge reads below 30–40 PSI or at 0 PSI.
            </p>
          </div>

          <div className="bg-[#E2EFF3]/50 border border-[#E2EFF3] rounded-3xl p-6 sm:p-7">
            <div className="w-9 h-9 rounded-full bg-[#AAD651] text-[#191919] font-heading font-bold flex items-center justify-center text-sm mb-4">
              3
            </div>
            <h4 className="font-heading font-bold text-lg text-[#000F26] mb-2">Call Contoocook Well</h4>
            <p className="font-sans text-sm text-[#191919]/70 leading-relaxed">
              Technicians are on call 7 days a week. We diagnose electrical switches, tanks, controls, and submersible pumps.
            </p>
          </div>
        </div>

        {/* Two-Column Diagnostic & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Pump Services & Matching the right pump */}
          <ScrollReveal delay={0} className="lg:col-span-7 space-y-6">
            <div>
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#00A8EB] bg-[#E2EFF3] px-3.5 py-1.5 rounded-full inline-block mb-3">
                Emergency Pump Services
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#000F26] tracking-tight">
                Restoring Your Water Quickly & Correctly
              </h2>
            </div>

            <p className="font-sans font-normal text-base text-[#191919]/75 leading-relaxed">
              Contoocook Artesian Well Company does more than just drill new wells! We help existing wells keep delivering water to your property. When you find your water pressure is low or you have <strong>NO WATER — call us!</strong> We can help.
            </p>

            <p className="font-sans font-normal text-base text-[#191919]/75 leading-relaxed">
              No water, or low water pressure could be the sign of just a bad or malfunctioning water pump. We can assess the situation and get you the right solution to have your water pumping back to where it belongs in no time — many times with even better water pressure.
            </p>

            <div className="bg-[#E2EFF3]/60 border border-[#00A8EB]/30 p-6 sm:p-8 rounded-3xl space-y-3">
              <h3 className="font-heading font-bold text-xl text-[#000F26] tracking-tight">
                Matching the right pump to your well
              </h3>
              <p className="font-sans font-normal text-sm sm:text-base text-[#191919]/80 leading-relaxed">
                When your well was drilled (or when your home was built, if you are on city water) a water pump was installed, most likely a submersible pump system for most wells, that meets the demands of your home for water. The pump is connected to a water tank assembly that regulates the flow of water into your home or business.
              </p>
              <p className="font-sans font-normal text-sm sm:text-base text-[#191919]/80 leading-relaxed">
                Our pumps maintain proper pressure to keep the flow steady and predictable. When the need for pump service arises, we are at your service 7 days a week. Our service staff will be at your home quickly. We will gladly install the pump you need.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/services"
                className="inline-flex items-center font-heading font-bold text-sm text-[#00A8EB] hover:text-[#1D7FA7] uppercase tracking-wider transition-colors"
              >
                <span>SEE ALL Contoocook Artesian Well Company SERVICES</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Column: Hero Truck Image & Why Choose Us box */}
          <ScrollReveal delay={120} className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E2EFF3] bg-[#000F26] group">
              <img 
                src="/images/hero-truck.jpg" 
                alt="Contoocook Artesian Well Company 7 Day Pump Service in NH" 
                className="w-full h-auto max-w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-white font-sans font-medium text-xs text-[#191919]/70 border-t border-[#E2EFF3] text-center">
                Prompt pump service 7 days a week in Southern & Central NH.
              </div>
            </div>

            {/* Why Choose Us Highlight Box (HydroLOGICA Deep Navy #000F26) */}
            <div className="bg-[#000F26] text-white p-7 sm:p-8 rounded-3xl border border-white/10 shadow-xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#AAD651]">
                <Clock className="w-3.5 h-3.5" />
                <span>Available 7 Days</span>
              </div>

              <h3 className="font-heading font-extrabold text-xl text-white tracking-tight">
                Why Choose Us to Install Your Well Pump?
              </h3>
              
              <ul className="space-y-3.5 font-sans font-normal text-sm text-[#E2EFF3]/80">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8EB] shrink-0 mt-0.5" />
                  <span>Contoocook Well has been installing pumps for more than 55 years. Our reputation for doing a good job is well established in Southern New Hampshire.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#AAD651] shrink-0 mt-0.5" />
                  <span>Our service techs are available 7 days a week. Someone is always on call to come to your home.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8EB] shrink-0 mt-0.5" />
                  <span>The pumps and components you need are in stock at our shop in Henniker. We keep a huge inventory so our customers don't have to wait.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8EB] shrink-0 mt-0.5" />
                  <span>You'll find a real person on the line when you need service. No leaving messages or waiting in frustration.</span>
                </li>
              </ul>

              {onOpenCoupon && (
                <div className="pt-2">
                  <button
                    onClick={onOpenCoupon}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-[#AAD651] hover:bg-[#bce468] text-[#191919] font-heading font-bold rounded-full text-xs uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 duration-200 cursor-pointer shadow-md"
                  >
                    <Tag className="w-4 h-4 text-[#191919]" />
                    <span>$50 Off Coupon on Pump Installation</span>
                  </button>
                </div>
              )}
            </div>

          </ScrollReveal>

        </div>

      </div>

      {/* 3. Emergency Bottom Banner */}
      <section className="bg-gradient-to-r from-[#000F26] via-[#001D47] to-[#000F26] text-white border-t border-white/10 py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#A4DEF3] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#AAD651] animate-pulse"></span>
              <span>Emergency Water Line</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-white tracking-tight">
              No water? <span className="text-[#00A8EB]">No problem!</span>
            </h2>
            <p className="font-sans font-medium text-base sm:text-lg text-[#E2EFF3]/80 mt-1">
              Give our emergency technicians a call today
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <a 
              href={`tel:${siteData.company.phoneClean}`}
              className="inline-flex items-center gap-3 bg-[#AAD651] hover:bg-[#bce468] text-[#191919] font-heading font-extrabold text-2xl sm:text-3xl px-8 py-4 rounded-full shadow-[0_12px_32px_-8px_rgba(170,214,81,0.5)] transition-all transform hover:scale-105 active:scale-95 duration-200"
            >
              <Phone className="w-6 h-6 fill-[#191919] text-[#191919]" />
              <span>{siteData.company.phone}</span>
            </a>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
