import React from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink,
  Phone,
  ArrowUpRight
} from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from '../components/ScrollReveal';

export default function Resources() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] w-full overflow-x-hidden text-[#191919] font-sans">
      
      {/* 1. Header Banner - HydroLOGICA Deep Navy (#000F26) */}
      <section 
        className="text-white pt-16 sm:pt-20 pb-16 sm:pb-20 relative overflow-hidden bg-[#000F26]"
        style={{
          background: 'radial-gradient(1000px 500px at 80% 20%, rgba(0, 168, 235, 0.16) 0%, transparent 70%), #000F26'
        }}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 text-center sm:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#00A8EB]/40 text-xs font-semibold text-[#A4DEF3] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#AAD651] animate-pulse"></span>
            <span>Contoocook Artesian Well Company • Technical Knowledge</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Owner & Operator <span className="text-[#00A8EB]">Resources</span>
          </h1>

          <p className="mt-4 font-sans font-normal text-base sm:text-lg lg:text-xl text-[#E2EFF3]/90 max-w-2xl leading-relaxed">
            Free Troubleshooting Guides and Equipment Use & Care Manuals.
          </p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-24 space-y-16 sm:space-y-24">
        
        {/* Section 1: Free Troubleshooting Guides */}
        <div>
          <ScrollReveal delay={0} className="mb-8 sm:mb-12">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#00A8EB] block mb-2">
              Free Downloads
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#000F26] tracking-tight">
              Homeowner Troubleshooting Guides
            </h2>
            <p className="font-sans font-normal text-base text-[#191919]/70 mt-2 max-w-2xl">
              Before calling us, check out our handy troubleshooting and information guides designed to help you understand your water system.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {siteData.troubleshootingGuides.map((guide, idx) => (
              <ScrollReveal key={idx} delay={idx * 80} className="flex">
                <div className="w-full bg-white border border-[#E2EFF3] hover:border-[#00A8EB] rounded-3xl p-7 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group font-sans">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-heading font-bold bg-[#E2EFF3] text-[#00A8EB]">
                        PDF Document • {guide.size}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-[#E2EFF3] text-[#00A8EB] flex items-center justify-center group-hover:bg-[#00A8EB] group-hover:text-white transition-colors">
                        <FileText className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#000F26] group-hover:text-[#00A8EB] transition-colors mb-2 tracking-tight">
                      {guide.title}
                    </h3>
                    <p className="font-sans font-normal text-sm text-[#191919]/75 leading-relaxed mb-6">
                      {guide.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E2EFF3] flex items-center justify-between gap-3">
                    <a
                      href={guide.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-heading font-bold text-sm text-[#00A8EB] hover:text-[#1D7FA7] transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </a>
                    <a
                      href={guide.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-sans font-semibold text-[#61AFCD] hover:text-[#000F26] flex items-center gap-1 transition-colors"
                    >
                      <span>Open Viewer</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <hr className="border-[#E2EFF3]" />

        {/* Section 2: Use and Care Manuals */}
        <div>
          <ScrollReveal delay={0} className="mb-8 sm:mb-12">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#00A8EB] block mb-2">
              Equipment Documentation
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#000F26] tracking-tight">
              Manufacturer Use & Care Manuals
            </h2>
            <p className="font-sans font-normal text-base text-[#191919]/70 mt-2 max-w-2xl">
              Manufacturer technical documents and manuals for water pressure tanks, submersible pumps, and filtration systems.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.careManuals.map((manual, idx) => (
              <ScrollReveal key={idx} delay={idx * 60} className="flex">
                <div className="w-full bg-[#E2EFF3]/30 border border-[#E2EFF3] hover:border-[#00A8EB] rounded-3xl p-6 flex flex-col justify-between shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group font-sans">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#00A8EB] bg-[#E2EFF3] px-2.5 py-1 rounded-full">
                        Manual
                      </span>
                      <Download className="w-4 h-4 text-[#61AFCD] group-hover:text-[#00A8EB] transition-colors" />
                    </div>
                    
                    <h4 className="font-heading font-bold text-base text-[#000F26] mb-2 tracking-tight group-hover:text-[#00A8EB] transition-colors">
                      {manual.title}
                    </h4>
                    
                    <p className="font-sans font-normal text-xs text-[#191919]/75 leading-relaxed mb-4">
                      {manual.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E2EFF3]">
                    <a
                      href={manual.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full font-heading font-bold text-xs text-[#00A8EB] group-hover:text-[#1D7FA7] transition-colors"
                    >
                      <span>Download Manual</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>

      {/* 3. Emergency Bottom Banner */}
      <section className="bg-gradient-to-r from-[#000F26] via-[#001D47] to-[#000F26] text-white border-t border-white/10 py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#A4DEF3] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#AAD651] animate-pulse"></span>
              <span>Available 7 Days a Week</span>
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
