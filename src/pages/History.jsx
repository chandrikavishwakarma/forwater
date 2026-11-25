import React from 'react';
import { Phone, Calendar, Award, ShieldCheck, Heart } from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from '../components/ScrollReveal';

export default function History() {
  const milestones = [
    {
      year: '1936',
      title: 'Company Founded & License #1 Awarded',
      description: 'Contoocook Artesian Well Company was founded in Henniker, NH, earning State of New Hampshire Water Well License #1.'
    },
    {
      year: '1970s',
      title: 'Wayne Patenaude Expands Operations',
      description: 'Wayne Patenaude purchased the company and instituted the legendary 7-day emergency service commitment across central and southern NH.'
    },
    {
      year: '2000s',
      title: 'Rick Patenaude Continues Heritage',
      description: 'Wayne’s son Rick stepped into leadership, investing in high-capacity modern drilling rigs, hydrofracking equipment, and advanced water filtration.'
    },
    {
      year: 'Today',
      title: 'Over 85+ Years of Reliable Water',
      description: 'Generations of Patenaudes have run our business with pride. Southern New Hampshire’s most trusted water well and pump service.'
    }
  ];

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
            <span>The Patenaude Family • NH License #1 • Founded 1936</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Our Heritage & <span className="text-[#00A8EB]">History</span>
          </h1>

          <p className="mt-4 font-sans font-normal text-base sm:text-lg lg:text-xl text-[#E2EFF3]/90 max-w-2xl leading-relaxed">
            State of New Hampshire Water Well License #1. 7 day service, a quality job, a fair price, and a name you can trust.
          </p>
        </div>
      </section>

      {/* 2. Main Narrative Section */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-24 space-y-16 sm:space-y-24">
        
        {/* Story & Leadership Portraits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <ScrollReveal delay={0} className="lg:col-span-7 space-y-6">
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#00A8EB] bg-[#E2EFF3] px-3.5 py-1.5 rounded-full inline-block">
              Patenaude Family Legacy
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#000F26] tracking-tight leading-tight">
              A Family Tradition Beginning in 1936
            </h2>

            <p className="font-sans font-normal text-base text-[#191919]/75 leading-relaxed">
              Wayne Patenaude of Hopkinton, NH, purchased Contoocook Artesian Well Company from its original owner, who founded the business in 1936. Wayne has owned the business for more than 50 years, taking up the tradition of giving customers quality, old-fashioned service they could count on seven days a week.
            </p>

            <p className="font-sans font-normal text-base text-[#191919]/75 leading-relaxed">
              Wayne's son Rick Patenaude runs the company today. Rick recalls growing up at the family farm, and the phone would ring late at nights and on holidays, when frantic families were out of water or with a houseful of company. Wayne took the call and sent the service truck out right away.
            </p>

            {/* Blockquote Card */}
            <div className="bg-[#E2EFF3]/60 border-l-4 border-[#00A8EB] p-6 rounded-r-3xl">
              <blockquote className="font-heading font-semibold text-base sm:text-lg text-[#000F26] italic leading-relaxed">
                “Our business was always open, and that's how people came to know they could count on us to get them water,” Rick recalls.
              </blockquote>
            </div>

            <p className="font-sans font-normal text-base text-[#191919]/75 leading-relaxed">
              It's the same story today: 7 day service, a quality job, a fair price, and a name you can trust for over 85 years. We hold the very first New Hampshire Water Well License. We are a Patenaude family business and our name is on the line with every job we do.
            </p>
          </ScrollReveal>

          {/* Leaders Portraits */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <ScrollReveal delay={100}>
              <div className="bg-white p-4 rounded-3xl border border-[#E2EFF3] text-center shadow-md hover:-translate-y-1.5 transition-all duration-300 group">
                <div className="aspect-3/4 overflow-hidden rounded-2xl bg-[#E2EFF3] mb-3">
                  <img 
                    src="/images/wayne-patenaude.png" 
                    alt="Wayne Patenaude, Owner, Contoocook Artesian Well Co" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-heading font-bold text-[#000F26] text-base">Wayne Patenaude</h4>
                <p className="font-sans font-medium text-xs text-[#00A8EB]">Owner</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white p-4 rounded-3xl border border-[#E2EFF3] text-center shadow-md hover:-translate-y-1.5 transition-all duration-300 group">
                <div className="aspect-3/4 overflow-hidden rounded-2xl bg-[#E2EFF3] mb-3">
                  <img 
                    src="/images/rick-patenaude.jpg" 
                    alt="Rick Patenaude, Vice President, (& Chase) Contoocook Artesian Well Co" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-heading font-bold text-[#000F26] text-base">Rick Patenaude</h4>
                <p className="font-sans font-medium text-xs text-[#00A8EB]">Vice President (& Chase)</p>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* 3. Milestone Timeline Section Inspired by HydroLOGICA */}
        <section className="bg-[#E2EFF3]/30 border border-[#E2EFF3] rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#00A8EB] block mb-2">
              Timeline of Excellence
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#000F26] tracking-tight">
              Eight Decades of Water Well Leadership
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <ScrollReveal key={idx} delay={idx * 80} className="flex">
                <div className="w-full bg-white border border-[#E2EFF3] rounded-3xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div>
                    <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#00A8EB] block mb-2">
                      {m.year}
                    </span>
                    <h4 className="font-heading font-bold text-base text-[#000F26] mb-2 leading-snug">
                      {m.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#191919]/70 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 4. Archival Photos Gallery */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#00A8EB] block mb-2">
              Historic Archive
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#000F26] tracking-tight">
              Early Days of Artesian Well Drilling
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal delay={0}>
              <div className="rounded-3xl overflow-hidden border border-[#E2EFF3] shadow-md bg-white hover:-translate-y-1 transition-transform duration-300 group">
                <div className="h-64 overflow-hidden bg-[#E2EFF3]">
                  <img 
                    src="/images/vintage-truck.jpg" 
                    alt="One of the original Well drilling trucks: Contoocook Artesian Well Co" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="p-4 font-sans font-medium text-xs text-[#191919]/75 text-center bg-white border-t border-[#E2EFF3]">
                  One of the original Well drilling trucks: Contoocook Artesian Well Co
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="rounded-3xl overflow-hidden border border-[#E2EFF3] shadow-md bg-white hover:-translate-y-1 transition-transform duration-300 group">
                <div className="h-64 overflow-hidden bg-[#E2EFF3]">
                  <img 
                    src="/images/historical-drilling.jpg" 
                    alt="Drilling an artesian well in the early days" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="p-4 font-sans font-medium text-xs text-[#191919]/75 text-center bg-white border-t border-[#E2EFF3]">
                  Drilling an artesian well in the early days in New Hampshire.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>

      {/* 5. Emergency Bottom Banner */}
      <section className="bg-gradient-to-r from-[#000F26] via-[#001D47] to-[#000F26] text-white border-t border-white/10 py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#A4DEF3] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#AAD651] animate-pulse"></span>
              <span>Generations of Trust</span>
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
