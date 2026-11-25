import React from 'react';
import { 
  ExternalLink, 
  Phone, 
  Mail 
} from 'lucide-react';
import { siteData } from '../data/siteData';

export default function OpenPositions() {
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
            Contoocook Artesian Well Company
          </span>
          <h1 className="font-serif font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            OPEN POSITIONS
          </h1>
          <p className="mt-3 font-sans font-normal text-base sm:text-lg lg:text-xl text-[#C5D6E4] max-w-2xl leading-relaxed">
            Join our Contoocook Artesian Well Team to build a fulfilling career.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
        
        {/* Intro + Image + Indeed Button */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#172638] tracking-tight">
              Join our Contoocook Artesian Well Team to build a fulfilling career.
            </h2>

            <p className="font-sans font-normal text-sm sm:text-base text-[#172638]/80 leading-relaxed">
              We are always interested in dedicated, hardworking individuals who want to be part of an established New Hampshire groundwater company.
            </p>

            {/* Original Link to Indeed styled with Plum accent */}
            <div className="pt-2">
              <a
                href={siteData.company.indeedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#6E2C6B] hover:bg-[#854B82] text-white font-sans font-bold text-sm uppercase tracking-wider rounded-xl shadow-sm transition-all space-x-2 text-center"
              >
                <span>See our Open Positions on Indeed</span>
                <ExternalLink className="w-4 h-4 shrink-0 text-white" />
              </a>
            </div>

            {/* Direct Contact info for Inquiries */}
            <div className="pt-4 border-t border-[#D5BBD3] space-y-2 text-xs sm:text-sm text-[#172638]/80 font-sans">
              <p className="font-sans font-bold text-[#172638]">For employment inquiries or questions:</p>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a 
                  href={`tel:${siteData.company.phoneClean}`}
                  className="inline-flex items-center space-x-1.5 font-sans font-bold text-[#172638] hover:text-[#6E2C6B]"
                >
                  <Phone className="w-4 h-4 text-[#6E2C6B] shrink-0" />
                  <span>Call {siteData.company.phone}</span>
                </a>
                <a 
                  href={`mailto:${siteData.company.email}`}
                  className="inline-flex items-center space-x-1.5 font-sans font-bold text-[#172638] hover:text-[#6E2C6B]"
                >
                  <Mail className="w-4 h-4 text-[#6E2C6B] shrink-0" />
                  <span>{siteData.company.email}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#D5BBD3] bg-white">
              <img 
                src="/images/open-positions-truck.jpg" 
                alt="Contoocook Artesian Well team on site" 
                className="w-full h-auto max-w-full object-cover"
              />
              <div className="p-3 bg-[#E8DFE9] font-sans font-medium text-[11px] sm:text-xs text-[#172638]/80 border-t border-[#D5BBD3] text-center">
                Contoocook Artesian Well team on site in New Hampshire.
              </div>
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