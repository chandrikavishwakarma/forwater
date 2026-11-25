import React from 'react';
import { 
  FileText, 
  Download, 
  Droplet, 
  ExternalLink,
  Phone
} from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Resources() {
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
            RESOURCES
          </h1>
          <p className="mt-3 font-sans font-normal text-base sm:text-lg lg:text-xl text-[#C5D6E4] max-w-2xl leading-relaxed">
            Free Troubleshooting Guides and Equipment Use & Care Manuals.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
        
        {/* Section 1: Free Troubleshooting Guides */}
        <div>
          <div className="mb-6 sm:mb-8">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#172638] tracking-tight">
              Free Troubleshooting Guides
            </h2>
            <p className="font-sans font-normal text-sm sm:text-base text-[#172638]/80 mt-1.5">
              Before calling us, check out our handy troubleshooting and information guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {siteData.troubleshootingGuides.map((guide, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#D5BBD3] hover:border-[#6E2C6B] rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group font-sans"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-sans font-bold bg-[#E8DFE9] text-[#002D55] border border-[#D5BBD3]">
                      PDF Document • {guide.size}
                    </span>
                    <FileText className="w-5 h-5 text-[#002D55] group-hover:text-[#6E2C6B] group-hover:scale-110 transition-transform shrink-0" />
                  </div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#172638] group-hover:text-[#6E2C6B] transition-colors mb-2 tracking-tight">
                    {guide.title}
                  </h3>
                  <p className="font-sans font-normal text-xs sm:text-sm text-[#172638]/80 leading-relaxed mb-4">
                    {guide.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D5BBD3] flex items-center justify-between gap-2">
                  <a
                    href={guide.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 font-sans font-bold text-xs sm:text-sm text-[#172638] hover:text-[#6E2C6B] transition-colors"
                  >
                    <Download className="w-4 h-4 text-[#6E2C6B] shrink-0" />
                    <span>Download PDF</span>
                  </a>
                  <a
                    href={guide.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-sans font-medium text-[#172638]/70 hover:text-[#172638] flex items-center shrink-0 transition-colors"
                  >
                    <span>Open Viewer</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-[#D5BBD3]" />

        {/* Section 2: Use and Care Manuals */}
        <div>
          <div className="mb-6 sm:mb-8">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#172638] tracking-tight">
              Use and Care Manuals
            </h2>
            <p className="font-sans font-normal text-sm sm:text-base text-[#172638]/80 mt-1.5">
              Manufacturer use and care documents for water systems troubleshooting and maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {siteData.careManuals.map((manual, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#D5BBD3] hover:border-[#6E2C6B] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-all group font-sans"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#002D55] bg-[#E8DFE9] px-2 py-0.5 rounded border border-[#D5BBD3]">
                      Manual
                    </span>
                    <Download className="w-4 h-4 text-[#172638]/70 group-hover:text-[#6E2C6B] transition-colors shrink-0" />
                  </div>
                  
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#172638] mb-2 tracking-tight group-hover:text-[#6E2C6B] transition-colors">
                    {manual.title}
                  </h4>
                  
                  <p className="font-sans font-normal text-xs text-[#172638]/80 leading-relaxed mb-4">
                    {manual.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D5BBD3]">
                  <a
                    href={manual.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full font-sans font-bold text-xs text-[#172638] group-hover:text-[#6E2C6B] transition-colors"
                  >
                    <span>Download Manual</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            ))}
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