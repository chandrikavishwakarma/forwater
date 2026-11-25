import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  AlertTriangle, 
  CheckCircle, 
  Tag, 
  ArrowRight,
  Download
} from 'lucide-react';
import { siteData } from '../data/siteData';

export default function NoWaterPressure({ onOpenCoupon }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F7F9] w-full overflow-x-hidden text-[#172638] font-sans">
      
      {/* Hero Header */}
      <section 
        className="text-white pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-[#16466F] relative overflow-hidden"
        style={{
          background: 'radial-gradient(1000px 500px at 85% 0, #16466F 0, transparent 70%), #002D55'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 bg-[#16466F] border border-[#477397] px-3.5 py-1.5 rounded-lg text-xs font-sans font-bold uppercase tracking-wider mb-3 text-[#D5BBD3]">
            <AlertTriangle className="w-4 h-4 shrink-0 text-[#D5BBD3]" />
            <span>Emergency Well & Pump Service</span>
          </div>

          <h1 className="font-serif font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            No Water? <span className="text-[#C5D6E4] block sm:inline font-serif font-bold">OR NO OR LOW WATER PRESSURE?</span>
          </h1>

          <p className="mt-3 font-sans font-normal text-base sm:text-lg lg:text-xl text-[#C5D6E4] max-w-2xl leading-relaxed">
            When you find your water pressure is low or you have NO WATER — call us! We can help.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
            <a
              href={`tel:${siteData.company.phoneClean}`}
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#6E2C6B] hover:bg-[#854B82] text-white font-sans font-bold text-sm sm:text-base uppercase tracking-wider rounded-xl shadow-sm transition-all space-x-2 text-center"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-white shrink-0" />
              <span>Call 603-428-6060</span>
            </a>

            <a
              href="/documents/Low-or-No-Water-Pressure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3.5 bg-[#002D55] hover:bg-[#16466F] text-white border border-[#16466F] font-sans font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-xs transition-colors space-x-2 text-center"
            >
              <Download className="w-4 h-4 text-[#D5BBD3] shrink-0" />
              <span>Troubleshooting Guide (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Pump Services & Matching the right pump */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            <div>
              <span className="font-sans font-semibold text-xs uppercase tracking-wider text-[#6E2C6B] border-l-2 border-[#6E2C6B] pl-2.5">
                Pump Services
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#172638] mt-2 tracking-tight">
                No Water? Or No or Low Water Pressure?
              </h2>
            </div>

            <p className="font-sans font-normal text-sm sm:text-base text-[#172638]/80 leading-relaxed">
              Contoocook Artesian Well Company does more than just drill new wells! We help existing wells keep delivering water to your property. When you find your water pressure is low or you have NO WATER - call us! We can help.
            </p>

            <p className="font-sans font-normal text-sm sm:text-base text-[#172638]/80 leading-relaxed">
              No water, or low water pressure could be the sign of just a bad or malfunctioning water pump. We can assess the situation and get you the right solution to have your water pumping back to where it belongs in no time - many times with even better water pressure.
            </p>

            <div className="bg-[#E8DFE9] p-5 sm:p-6 rounded-2xl border-l-4 border-[#6E2C6B] space-y-3">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#172638] tracking-tight">
                Matching the right pump to your well
              </h3>
              <p className="font-sans font-normal text-xs sm:text-sm text-[#172638]/80 leading-relaxed">
                When your well was drilled (or when your home was built, if you are on city water) a water pump was installed, most likely a submersible pump system for most wells, that meets the demands of your home for water. The pump is connected to a water tank assembly that regulates the flow of water into your home or business.
              </p>
              <p className="font-sans font-normal text-xs sm:text-sm text-[#172638]/80 leading-relaxed">
                Our pumps maintain proper pressure to keep the flow steady and predictable. When the need for pump service arises, we are at your service 7 days a week. Our service staff will be at your home quickly. We will gladly install the pump you need.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/services"
                className="inline-flex items-center font-sans font-bold text-xs sm:text-sm text-[#172638] hover:text-[#6E2C6B] uppercase tracking-wider transition-colors"
              >
                <span>SEE ALL Contoocook Artesian Well Company SERVICES</span>
                <ArrowRight className="w-4 h-4 ml-1.5 text-[#6E2C6B]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Truck Image & Why Choose Us box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#D5BBD3] bg-white">
              <img 
                src="/images/hero-truck.jpg" 
                alt="Contoocook Artesian Well Company 7 Day Pump Service in NH" 
                className="w-full h-auto max-w-full object-cover"
              />
              <div className="p-3 bg-[#E8DFE9] font-sans font-medium text-[11px] sm:text-xs text-[#172638]/80 border-t border-[#D5BBD3]">
                Prompt pump service 7 days a week in Southern & Central NH.
              </div>
            </div>

            {/* Why Choose Us Highlight Box (Deep Navy #002D55) */}
            <div className="bg-[#002D55] text-white p-5 sm:p-6 rounded-2xl border border-[#16466F] shadow-md space-y-4">
              <h3 className="font-serif font-bold text-white text-base sm:text-lg uppercase tracking-wide border-b border-[#16466F] pb-2">
                Why Choose Us to Install Your Well Pump?
              </h3>
              
              <ul className="space-y-3 font-sans font-normal text-xs sm:text-sm text-[#C5D6E4]">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#D5BBD3] shrink-0 mt-0.5" />
                  <span>Contoocook Well has been installing pumps for more than 55 years. Our reputation for doing a good job is well established in Southern New Hampshire.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#D5BBD3] shrink-0 mt-0.5" />
                  <span>Our service techs are available 7 days a week. Someone is always on call to come to your home.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#D5BBD3] shrink-0 mt-0.5" />
                  <span>The pumps and components you need are in stock at our shop in Henniker. We keep a huge inventory so our customers don't have to wait.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#D5BBD3] shrink-0 mt-0.5" />
                  <span>You'll find a real person on the line when you need service. No leaving messages or waiting in frustration.</span>
                </li>
              </ul>

              {onOpenCoupon && (
                <div className="pt-2">
                  <button
                    onClick={onOpenCoupon}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-[#6E2C6B] hover:bg-[#854B82] text-white font-sans font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                  >
                    <Tag className="w-4 h-4 text-white shrink-0" />
                    <span>$50 Off Coupon on Pump Installation</span>
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* Consistent Bottom CTA Section on Plum #6E2C6B */}
      <section className="bg-[#6E2C6B] text-white border-t border-[#854B82] mt-12 sm:mt-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 py-10 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[38px] leading-tight text-white m-0 tracking-tight">
              No water? No problem!
            </h2>
            <p className="font-sans font-semibold text-base sm:text-[19px] text-[#D5BBD3] mt-1">
              Give us a call at
            </p>
          </div>

          <a 
            href="tel:6034286060" 
            className="font-serif font-bold text-3xl sm:text-4xl lg:text-[46px] leading-none text-white hover:text-[#D5BBD3] whitespace-nowrap transition-colors tracking-tight"
          >
            603-428-6060
          </a>
        </div>
      </section>

    </div>
  );
}