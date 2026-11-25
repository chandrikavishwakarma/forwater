import React from 'react';
import { 
  ExternalLink, 
  Phone, 
  Mail,
  CheckCircle2,
  Users,
  Briefcase
} from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from '../components/ScrollReveal';

export default function OpenPositions() {
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
            <span>Careers at Contoocook Artesian Well Company</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Join Our <span className="text-[#00A8EB]">Groundwater Team</span>
          </h1>

          <p className="mt-4 font-sans font-normal text-base sm:text-lg lg:text-xl text-[#E2EFF3]/90 max-w-2xl leading-relaxed">
            Build a fulfilling career with southern and central New Hampshire’s premier water well team.
          </p>
        </div>
      </section>

      {/* 2. Main Content */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-24 space-y-16 sm:space-y-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <ScrollReveal delay={0} className="lg:col-span-7 space-y-6">
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#00A8EB] bg-[#E2EFF3] px-3.5 py-1.5 rounded-full inline-block">
              Employment Opportunities
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#000F26] tracking-tight leading-tight">
              Build a Fulfilling Career with a 1936 Legacy
            </h2>

            <p className="font-sans font-normal text-base text-[#191919]/75 leading-relaxed">
              We are always interested in dedicated, hardworking individuals who want to be part of an established New Hampshire groundwater company. As a family-owned business for over 85 years, we treat our technicians and team members with respect, fair compensation, and long-term career stability.
            </p>

            <div className="space-y-3 font-sans text-sm sm:text-base text-[#191919]/80">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#AAD651] shrink-0 mt-0.5" />
                <span>Competitive compensation and steady year-round work.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#00A8EB] shrink-0 mt-0.5" />
                <span>Modern, well-maintained drilling rigs, pump trucks, and equipment.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#00A8EB] shrink-0 mt-0.5" />
                <span>Hands-on training with licensed master well drillers and pump technicians.</span>
              </div>
            </div>

            {/* Indeed Action Button */}
            <div className="pt-2">
              <a
                href={siteData.company.indeedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#AAD651] hover:bg-[#bce468] text-[#191919] font-heading font-bold text-base rounded-full shadow-md transition-all transform hover:scale-105 active:scale-95 duration-200"
              >
                <span>See Our Open Positions on Indeed</span>
                <ExternalLink className="w-4 h-4 text-[#191919]" />
              </a>
            </div>

            {/* Direct Contact for Inquiries */}
            <div className="pt-6 border-t border-[#E2EFF3] space-y-3 text-sm text-[#191919]/80 font-sans">
              <p className="font-heading font-bold text-[#000F26]">For employment inquiries or questions:</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-1">
                <a 
                  href={`tel:${siteData.company.phoneClean}`}
                  className="inline-flex items-center gap-2 font-heading font-bold text-[#000F26] hover:text-[#00A8EB] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#00A8EB]" />
                  <span>Call {siteData.company.phone}</span>
                </a>
                <a 
                  href={`mailto:${siteData.company.email}`}
                  className="inline-flex items-center gap-2 font-heading font-bold text-[#000F26] hover:text-[#00A8EB] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#00A8EB]" />
                  <span>{siteData.company.email}</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120} className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E2EFF3] bg-[#000F26] group">
              <img 
                src="/images/open-positions-truck.jpg" 
                alt="Contoocook Artesian Well team on site" 
                className="w-full h-auto max-w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-white font-sans font-medium text-xs text-[#191919]/70 border-t border-[#E2EFF3] text-center">
                Contoocook Artesian Well field team on site in New Hampshire.
              </div>
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
