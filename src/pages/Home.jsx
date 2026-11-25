import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Home({ onOpenCoupon }) {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-[#F8F7F9] text-[#172638] font-sans">
      
      {/* 1. Hero Section with Deep Navy and Classic Blue radial gradient */}
      <section 
        className="relative text-white pt-10 sm:pt-14 pb-20 sm:pb-28 overflow-hidden"
        style={{
          background: 'radial-gradient(1000px 500px at 85% 0, #16466F 0, transparent 70%), #002D55'
        }}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Eyebrow, Heading, Sub, Call Button & Ghost Button */}
          <div className="space-y-4 sm:space-y-6">
            <p className="font-sans font-medium text-base sm:text-[19px] text-[#D5BBD3] pl-3.5 border-l-[3px] border-[#6E2C6B] mb-4">
              Serving southern and central New Hampshire since 1936
            </p>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.06] tracking-[-0.015em] text-[#F8F7F9]">
              No water? No problem!
            </h1>

            <p className="font-sans font-normal text-lg sm:text-[21px] text-[#D5BBD3] my-4 sm:my-7 max-w-[560px] leading-relaxed">
              Our technicians are on call 7 days a week for prompt well pump service!
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Primary Call CTA Button in Plum #6E2C6B with hover #854B82 */}
              <a 
                href="tel:6034286060" 
                className="inline-flex items-center gap-4 bg-[#6E2C6B] hover:bg-[#854B82] text-white font-sans rounded-2xl py-3 px-5 sm:px-6 shadow-[0_18px_40px_-16px_rgba(110,44,107,0.55)] transition-all active:scale-95"
              >
                <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#002D55] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 fill-white text-white" />
                </span>
                <span className="text-left">
                  <small className="block font-sans font-semibold text-xs sm:text-[14px] leading-tight text-[#E8DFE9]">Give us a call at</small>
                  <b className="block font-serif font-bold text-2xl sm:text-[32px] lg:text-[34px] leading-tight text-white">603-428-6060</b>
                </span>
              </a>

              {/* Ghost Guide Button with Muted Mauve border */}
              <a 
                href="#help" 
                className="inline-block font-sans font-bold text-sm sm:text-base text-white border-[1.5px] border-[#A875A5] hover:border-white rounded-xl px-5 sm:px-6 py-3.5 hover:bg-white/10 transition-colors"
              >
                Free troubleshooting guides
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image with dashed inner border and overlapping tag */}
          <div className="relative">
            <div className="relative rounded-[18px] overflow-hidden bg-gradient-to-br from-[#16466F] to-[#002D55] shadow-[0_30px_60px_-30px_rgba(0,45,85,0.6)] h-[320px] sm:h-[420px] lg:h-[500px] border border-[#16466F]">
              {/* Dashed inner border */}
              <div className="absolute inset-3 border border-dashed border-[#D5BBD3]/40 rounded-[10px] pointer-events-none z-10 hidden sm:block"></div>
              
              <img 
                src="/images/drilling-rig.jpg" 
                alt="Contoocook Artesian Well Company" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Tag Badge */}
            <div className="absolute -right-2 sm:-right-4 top-6 z-20 bg-white text-[#172638] rounded-[14px] p-3.5 sm:px-5 sm:py-3.5 font-sans font-bold text-xs sm:text-sm lg:text-base leading-snug shadow-[0_18px_40px_-16px_rgba(0,45,85,0.4)] max-w-[210px] sm:max-w-[240px] border border-[#D5BBD3]/60">
              7 days a week. Call us when your pump needs service.
            </div>
          </div>

        </div>
      </section>

      {/* 2. Three Overlapping Information Cards */}
      <section className="-mt-12 sm:-mt-16 relative z-20" id="help">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Card 1: Need Help? (White with Lavender border) */}
            <div className="lg:col-span-5 bg-white border border-[#D5BBD3] rounded-[18px] p-6 sm:p-8 shadow-[0_22px_50px_-30px_rgba(0,45,85,0.3)] flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-2xl sm:text-[28px] text-[#002D55] mb-2 tracking-tight">
                  Need help?
                </h3>
                <p className="font-sans font-normal text-sm sm:text-base text-[#477397] mb-4">
                  Before calling us, check out our FREE handy troubleshooting guides.
                </p>

                <ul className="divide-y divide-[#D5BBD3] m-0 p-0 list-none">
                  <li>
                    <a 
                      href="/documents/Low-or-No-Water-Pressure.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-between gap-3 py-2.5 text-[15.5px] sm:text-[17px] font-sans font-semibold text-[#172638] hover:text-[#6E2C6B] transition-colors"
                    >
                      <span>Low or no water pressure?</span>
                      <span className="text-[#6E2C6B] font-bold text-base">↗</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/documents/Is-Your-Submersible-Pump-Healthy.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-between gap-3 py-2.5 text-[15.5px] sm:text-[17px] font-sans font-semibold text-[#172638] hover:text-[#6E2C6B] transition-colors"
                    >
                      <span>Is your submersible pump healthy?</span>
                      <span className="text-[#6E2C6B] font-bold text-base">↗</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/documents/Artesian-or-Dug-Well-Difference.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-between gap-3 py-2.5 text-[15.5px] sm:text-[17px] font-sans font-semibold text-[#172638] hover:text-[#6E2C6B] transition-colors"
                    >
                      <span>Artesian or dug well? What is the difference?</span>
                      <span className="text-[#6E2C6B] font-bold text-base">↗</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/documents/Getting-Your-Drill-Site-Ready.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-between gap-3 py-2.5 text-[15.5px] sm:text-[17px] font-sans font-semibold text-[#172638] hover:text-[#6E2C6B] transition-colors"
                    >
                      <span>Getting Your Drill Site Ready</span>
                      <span className="text-[#6E2C6B] font-bold text-base">↗</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: $50 off! (Plum #6E2C6B) */}
            <div className="lg:col-span-3 xl:col-span-4 bg-[#6E2C6B] border border-[#6E2C6B] text-white rounded-[18px] p-6 sm:p-8 shadow-[0_22px_50px_-30px_rgba(110,44,107,0.4)] flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-2xl sm:text-[28px] text-white mb-2 tracking-tight">
                  $50 off!
                </h3>
                <p className="font-sans font-medium text-sm sm:text-base text-[#E8DFE9] mb-4 leading-relaxed">
                  Get $50 off the cost of a well pump, well tank or pump and tank system. Click the button below to get the coupon!
                </p>
              </div>

              <div>
                <button 
                  onClick={onOpenCoupon} 
                  className="w-full sm:w-auto inline-block font-sans font-bold rounded-xl px-6 py-3.5 text-sm sm:text-base bg-[#002D55] hover:bg-[#16466F] text-white transition-colors shadow-sm text-center mt-2 cursor-pointer"
                >
                  $50 Off Coupon
                </button>
              </div>
            </div>

            {/* Card 3: 7 days a week (Deep Navy #002D55) */}
            <div className="lg:col-span-4 xl:col-span-3 bg-[#002D55] border border-[#16466F] rounded-[18px] p-6 sm:p-8 shadow-[0_22px_50px_-30px_rgba(0,45,85,0.4)] flex flex-col justify-between text-white">
              <div>
                <h3 className="font-serif font-bold text-2xl sm:text-[28px] text-white mb-2 tracking-tight">
                  7 days a week
                </h3>
                <p className="font-sans font-normal text-sm sm:text-base text-[#D5BBD3] mb-5 leading-relaxed">
                  Our technicians are on call 7 days a week for prompt well pump service!
                </p>
              </div>

              <div>
                <p className="font-sans font-medium text-xs sm:text-sm text-[#D5BBD3] mt-4 mb-1">
                  Give us a call at
                </p>
                <a 
                  href="tel:6034286060" 
                  className="font-serif font-bold text-3xl sm:text-[36px] text-white hover:text-[#D5BBD3] transition-colors block tracking-tight leading-tight"
                >
                  603-428-6060
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Company Introduction & Common Customer Questions ("Call us first!") */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 bg-[#F8F7F9]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Heading, Lead & Questions List */}
            <div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.12] tracking-[-0.01em] text-[#002D55] mb-4">
                Call us first!
              </h2>

              <p className="font-sans font-normal text-base sm:text-lg lg:text-[21px] text-[#477397] mb-6 leading-relaxed">
                Your search for a water pump replacement, water well drilling and water filtration company you can trust ends here.
              </p>

              <ul className="divide-y divide-[#D5BBD3] border-y border-[#D5BBD3] my-6 p-0 list-none">
                <li className="font-serif font-medium text-xl sm:text-2xl lg:text-[24px] text-[#172638] py-3.5 tracking-tight">
                  What do you do if your faucet has no water?
                </li>
                <li className="font-serif font-medium text-xl sm:text-2xl lg:text-[24px] text-[#172638] py-3.5 tracking-tight">
                  Why do I suddenly have no water?
                </li>
                <li className="font-serif font-medium text-xl sm:text-2xl lg:text-[24px] text-[#172638] py-3.5 tracking-tight">
                  Why is my water pressure so low?
                </li>
              </ul>

              <div className="font-serif font-bold text-2xl sm:text-[32px] text-[#6E2C6B] tracking-tight">
                We have the answers!
              </div>
            </div>

            {/* Right Column: Service Area Map */}
            <div>
              <div className="relative rounded-[18px] overflow-hidden bg-white border border-[#D5BBD3] p-4 sm:p-6 shadow-sm h-[280px] sm:h-[340px] flex items-center justify-center">
                <img 
                  src="/images/service-area-map.png" 
                  alt="Contoocook Artesian Well NH service area" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

          </div>

          {/* Story Paragraph Below Two-Column Grid */}
          <p className="font-sans font-normal text-base sm:text-[18.5px] text-[#477397] mt-10 sm:mt-12 leading-relaxed max-w-5xl">
            Serving southern and central New Hampshire since 1936, including the major Concord and Manchester areas, Contoocook Artesian Well Company is there 7 days a week for out-of-water emergencies. Our job is to earn your trust as the “go-to guys” for drilling water wells, installing and servicing pump systems, hydrofracturing, water testing and filtration. No Water? No Problem!
          </p>

          {/* 4. Four Service Cards with Plum Top Border */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-9">
            
            <Link 
              to="/services#welldrilling" 
              className="bg-white border border-[#D5BBD3] border-t-4 border-t-[#6E2C6B] rounded-[14px] p-5 sm:p-6 font-serif font-bold text-lg sm:text-[21px] text-[#002D55] flex flex-col justify-between min-h-[135px] hover:bg-[#E8DFE9] transition-all shadow-2xs hover:shadow-xs tracking-tight"
            >
              <span>Drilling water wells</span>
              <small className="font-sans font-semibold text-sm text-[#477397] mt-3.5 block tracking-normal">
                See services ↗
              </small>
            </Link>

            <Link 
              to="/services#pumpservices" 
              className="bg-white border border-[#D5BBD3] border-t-4 border-t-[#6E2C6B] rounded-[14px] p-5 sm:p-6 font-serif font-bold text-lg sm:text-[21px] text-[#002D55] flex flex-col justify-between min-h-[135px] hover:bg-[#E8DFE9] transition-all shadow-2xs hover:shadow-xs tracking-tight"
            >
              <span>Installing and servicing pump systems</span>
              <small className="font-sans font-semibold text-sm text-[#477397] mt-3.5 block tracking-normal">
                See services ↗
              </small>
            </Link>

            <Link 
              to="/services#hydrofracking" 
              className="bg-white border border-[#D5BBD3] border-t-4 border-t-[#6E2C6B] rounded-[14px] p-5 sm:p-6 font-serif font-bold text-lg sm:text-[21px] text-[#002D55] flex flex-col justify-between min-h-[135px] hover:bg-[#E8DFE9] transition-all shadow-2xs hover:shadow-xs tracking-tight"
            >
              <span>Hydrofracturing</span>
              <small className="font-sans font-semibold text-sm text-[#477397] mt-3.5 block tracking-normal">
                See services ↗
              </small>
            </Link>

            <Link 
              to="/services#watertesting" 
              className="bg-white border border-[#D5BBD3] border-t-4 border-t-[#6E2C6B] rounded-[14px] p-5 sm:p-6 font-serif font-bold text-lg sm:text-[21px] text-[#002D55] flex flex-col justify-between min-h-[135px] hover:bg-[#E8DFE9] transition-all shadow-2xs hover:shadow-xs tracking-tight"
            >
              <span>Water testing and filtration</span>
              <small className="font-sans font-semibold text-sm text-[#477397] mt-3.5 block tracking-normal">
                See services ↗
              </small>
            </Link>

          </div>

        </div>
      </section>

      {/* 5. Customer Testimonial Band on Soft Lavender White #E8DFE9 background */}
      <section className="bg-[#E8DFE9] mt-16 sm:mt-20 py-16 sm:py-20 border-y border-[#D5BBD3]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Quotation Card with Plum Quote Mark */}
          <div className="lg:col-span-7 relative bg-white border border-[#D5BBD3] rounded-[20px] p-8 sm:p-12 shadow-[0_22px_50px_-34px_rgba(0,45,85,0.25)]">
            {/* Large Decorative Plum Quote mark */}
            <span className="absolute -top-3 left-6 sm:left-8 font-serif font-bold text-8xl sm:text-9xl text-[#A875A5] select-none opacity-80 leading-none">
              “
            </span>

            <p className="font-serif font-medium text-xl sm:text-2xl lg:text-[29px] leading-[1.4] text-[#172638] mt-8 sm:mt-10 mb-6 tracking-tight">
              It is the greatest feeling in the world to have so much water...I will tell anyone of your hydrofracking service. Thanks again - especially for getting here so soon!
            </p>

            <cite className="font-sans font-bold text-base sm:text-[18px] text-[#477397] not-italic block">
              J. Pokigo, Goffstown, NH
            </cite>
          </div>

          {/* Right: Company Photo */}
          <div className="lg:col-span-5 relative rounded-[18px] overflow-hidden shadow-xl h-[280px] sm:h-[380px] bg-[#002D55] border border-[#16466F]">
            <img 
              src="/images/water-work.jpg" 
              alt="Contoocook Artesian Well Company" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* 6. Why Choose Us Section on Deep Navy #002D55 background */}
      <section className="bg-[#002D55] text-white py-16 sm:py-20 border-t border-b border-[#16466F]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
          
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[40px] leading-[1.15] max-w-[1000px] mb-10 text-white tracking-tight">
            Why home builders and home owners choose Contoocook Artesian Well Company:
          </h2>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 list-none p-0 m-0">
            
            {/* Point 1 (span 2) */}
            <li className="lg:col-span-2 bg-[#16466F] border border-[#477397]/50 rounded-[16px] p-6 sm:p-7 text-base sm:text-[19.5px] leading-relaxed text-[#F8F7F9] flex flex-col justify-between shadow-xs">
              <div>
                <span className="w-9 h-9 rounded-full bg-[#6E2C6B] text-white font-sans font-bold text-[17px] flex items-center justify-center mb-4">
                  1
                </span>
                <p className="font-sans font-normal">Our larger-sized well gives you more water at no extra cost.</p>
              </div>
            </li>

            {/* Point 2 (span 2) */}
            <li className="lg:col-span-2 bg-[#16466F] border border-[#477397]/50 rounded-[16px] p-6 sm:p-7 text-base sm:text-[19.5px] leading-relaxed text-[#F8F7F9] flex flex-col justify-between shadow-xs">
              <div>
                <span className="w-9 h-9 rounded-full bg-[#6E2C6B] text-white font-sans font-bold text-[17px] flex items-center justify-center mb-4">
                  2
                </span>
                <p className="font-sans font-normal">Our professional, skilled staff keeps you informed every step of the way.</p>
              </div>
            </li>

            {/* Point 3 (span 2) */}
            <li className="lg:col-span-2 bg-[#16466F] border border-[#477397]/50 rounded-[16px] p-6 sm:p-7 text-base sm:text-[19.5px] leading-relaxed text-[#F8F7F9] flex flex-col justify-between shadow-xs">
              <div>
                <span className="w-9 h-9 rounded-full bg-[#6E2C6B] text-white font-sans font-bold text-[17px] flex items-center justify-center mb-4">
                  3
                </span>
                <p className="font-sans font-normal">You’ll rarely go without water. Call us 7 days a week when your pump needs service.</p>
              </div>
            </li>

            {/* Point 4 (span 3) */}
            <li className="md:col-span-1 lg:col-span-3 bg-[#16466F] border border-[#477397]/50 rounded-[16px] p-6 sm:p-7 text-base sm:text-[19.5px] leading-relaxed text-[#F8F7F9] flex flex-col justify-between shadow-xs">
              <div>
                <span className="w-9 h-9 rounded-full bg-[#6E2C6B] text-white font-sans font-bold text-[17px] flex items-center justify-center mb-4">
                  4
                </span>
                <p className="font-sans font-normal">We take every measure during construction to prevent contamination from entering your water supply.</p>
              </div>
            </li>

            {/* Point 5 (span 3) */}
            <li className="md:col-span-1 lg:col-span-3 bg-[#16466F] border border-[#477397]/50 rounded-[16px] p-6 sm:p-7 text-base sm:text-[19.5px] leading-relaxed text-[#F8F7F9] flex flex-col justify-between shadow-xs">
              <div>
                <span className="w-9 h-9 rounded-full bg-[#6E2C6B] text-white font-sans font-bold text-[17px] flex items-center justify-center mb-4">
                  5
                </span>
                <p className="font-sans font-normal">Three generations of Patenaudes have run our business with pride. You’ll be glad you chose us, because we care.</p>
              </div>
            </li>

          </ol>

        </div>
      </section>

      {/* 7. Proud Members Section */}
      <section className="py-12 sm:py-16 bg-[#F8F7F9]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
          
          <div className="bg-white border border-[#D5BBD3] rounded-[20px] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-8 justify-between shadow-sm">
            <h3 className="font-serif font-bold text-2xl sm:text-[26px] text-[#002D55] whitespace-nowrap tracking-tight">
              Proud members
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a 
                className="w-[160px] sm:w-[190px] h-[84px] bg-white border border-[#D5BBD3] rounded-xl flex items-center justify-center p-2 hover:border-[#6E2C6B] transition-colors shadow-2xs" 
                href="http://www.buildersclub.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Builders Club"
              >
                <img 
                  src="/logos/affiliation-builders-club.png" 
                  alt="Builders Club" 
                  className="max-w-[150px] max-h-[60px] object-contain"
                />
              </a>

              <a 
                className="w-[160px] sm:w-[190px] h-[84px] bg-white border border-[#D5BBD3] rounded-xl flex items-center justify-center p-2 hover:border-[#6E2C6B] transition-colors shadow-2xs" 
                href="http://www.nhwaterwell.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="New Hampshire Water Well Association"
              >
                <img 
                  src="/logos/affiliation-nh-well.png" 
                  alt="NH Water Well Association" 
                  className="max-w-[150px] max-h-[60px] object-contain"
                />
              </a>

              <a 
                className="w-[160px] sm:w-[190px] h-[84px] bg-white border border-[#D5BBD3] rounded-xl flex items-center justify-center p-2 hover:border-[#6E2C6B] transition-colors shadow-2xs" 
                href="http://www.ngwa.org/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="National Ground Water Association"
              >
                <img 
                  src="/logos/affiliation-ngwa.png" 
                  alt="National Ground Water Association" 
                  className="max-w-[150px] max-h-[60px] object-contain"
                />
              </a>

              <a 
                className="w-[160px] sm:w-[190px] h-[84px] bg-white border border-[#D5BBD3] rounded-xl flex items-center justify-center p-2 hover:border-[#6E2C6B] transition-colors shadow-2xs" 
                href="http://www.igshpa.okstate.edu/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="International Ground Source Heat Pump Association"
              >
                <img 
                  src="/logos/affiliation-igshpa.png" 
                  alt="IGSHPA" 
                  className="max-w-[150px] max-h-[60px] object-contain"
                />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Contact CTA Section on Plum #6E2C6B background */}
      <section className="bg-[#6E2C6B] text-white border-y border-[#854B82]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 py-10 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[38px] leading-tight text-white m-0 tracking-tight">
              No water? No problem!
            </h2>
            <p className="font-sans font-semibold text-base sm:text-[19px] text-[#E8DFE9] mt-1">
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
