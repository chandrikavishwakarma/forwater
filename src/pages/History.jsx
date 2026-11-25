import React from 'react';
import { Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function History() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F7F9] w-full overflow-x-hidden text-[#172638] font-sans">
      
      {/* Banner matching reference styling */}
      <section 
        className="text-white pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-[#16466F] relative overflow-hidden"
        style={{
          background: 'radial-gradient(1000px 500px at 85% 0, #16466F 0, transparent 70%), #002D55'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest text-[#D5BBD3] border-l-[3px] border-[#6E2C6B] pl-3 inline-block mb-3">
            The Patenaude Family • Founded 1936
          </span>
          <h1 className="font-serif font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            OUR HISTORY
          </h1>
          <p className="mt-3 font-sans font-normal text-base sm:text-lg lg:text-xl text-[#C5D6E4] max-w-2xl leading-relaxed">
            State of New Hampshire Water Well License #1. 7 day service, a quality job, a fair price, and a name you can trust.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
        
        {/* Section 1: Wayne & Rick Patenaude */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <span className="font-sans font-semibold text-xs uppercase tracking-wider text-[#172638] bg-[#E8DFE9] px-3 py-1 rounded border border-[#D5BBD3]">
              Patenaude Family Business
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#172638] tracking-tight">
              A Family Tradition Beginning in 1936
            </h2>

            <p className="font-sans font-normal text-sm sm:text-base text-[#172638]/80 leading-relaxed">
              Wayne Patenaude of Hopkinton, NH, purchased Contoocook Artesian Well Company from its original owner, who founded the business in 1936. Wayne has owned the business for more than 50 years, taking up the tradition of giving customers quality, old-fashioned service they could count on seven days a week.
            </p>

            <p className="font-sans font-normal text-sm sm:text-base text-[#172638]/80 leading-relaxed">
              Wayne's son Rick Patenaude runs the company today. Rick recalls growing up at the family farm, and the phone would ring late at nights and on holidays, when frantic families were out of water or with a houseful of company. Wayne took the call and sent the service truck out right away.
            </p>

            <div className="bg-[#E8DFE9] p-5 rounded-xl border-l-4 border-[#6E2C6B]">
              <blockquote className="font-serif italic font-medium text-base text-[#172638]">
                “Our business was always open, and that's how people came to know they could count on us to get them water,” Rick recalls.
              </blockquote>
            </div>

            <p className="font-sans font-normal text-sm sm:text-base text-[#172638]/80 leading-relaxed">
              It's the same story today: 7 day service, a quality job, a fair price, and a name you can trust for over 70 years. We hold the very first New Hampshire Water Well License. We are a Patenaude family business and our name is on the line with every job we do.
            </p>
          </div>

          {/* Leaders Photos */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-2xl border border-[#D5BBD3] text-center shadow-xs">
              <div className="aspect-3/4 overflow-hidden rounded-xl bg-[#E8DFE9] mb-2.5">
                <img 
                  src="/images/wayne-patenaude.png" 
                  alt="Wayne Patenaude, Owner, Contoocook Artesian Well Co" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h4 className="font-serif font-bold text-[#172638] text-sm sm:text-base">Wayne Patenaude</h4>
              <p className="font-sans font-medium text-xs text-[#172638]/70">Owner</p>
            </div>

            <div className="bg-white p-3 rounded-2xl border border-[#D5BBD3] text-center shadow-xs">
              <div className="aspect-3/4 overflow-hidden rounded-xl bg-[#E8DFE9] mb-2.5">
                <img 
                  src="/images/rick-patenaude.jpg" 
                  alt="Rick Patenaude, Vice President, (& Chase) Contoocook Artesian Well Co" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h4 className="font-serif font-bold text-[#172638] text-sm sm:text-base">Rick Patenaude</h4>
              <p className="font-sans font-medium text-xs text-[#172638]/70">Vice President (and his dog Chase)</p>
            </div>
          </div>

        </div>

        <hr className="border-[#D5BBD3]" />

        {/* Section 2: Historical Rig and Early Days */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-[#D5BBD3] shadow-xs bg-white">
            <img 
              src="/images/vintage-truck.jpg" 
              alt="One of the original Well drilling trucks: Contoocook Artesian Well Co" 
              className="w-full h-48 sm:h-56 object-cover"
            />
            <p className="p-3 font-sans font-medium text-xs text-[#172638]/80 text-center bg-[#E8DFE9] border-t border-[#D5BBD3]">
              One of the original Well drilling trucks: Contoocook Artesian Well Co
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#D5BBD3] shadow-xs bg-white">
            <img 
              src="/images/historical-drilling.jpg" 
              alt="Drilling an artesian well in the early days" 
              className="w-full h-48 sm:h-56 object-cover"
            />
            <p className="p-3 font-sans font-medium text-xs text-[#172638]/80 text-center bg-[#E8DFE9] border-t border-[#D5BBD3]">
              Drilling an artesian well in the early days.
            </p>
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