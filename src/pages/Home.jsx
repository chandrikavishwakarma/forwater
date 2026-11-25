import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  ArrowRight, 
  ArrowUpRight, 
  Wrench, 
  Droplet, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Tag 
} from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from '../components/ScrollReveal';

export default function Home({ onOpenCoupon }) {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-[#FFFFFF] text-[#191919] font-sans">

      {/* 1. Hero Section - Inspired by HydroLOGICA Deep Navy (#000F26) with Bright Agua & Lime Accents */}
      <section
        className="relative text-white pt-14 sm:pt-20 pb-24 sm:pb-32 px-5 sm:px-10 lg:px-16 xl:px-24 overflow-hidden bg-[#000F26]"
        style={{
          background: 'radial-gradient(1000px 520px at 80% 15%, rgba(0, 168, 235, 0.16) 0%, transparent 70%), #000F26'
        }}
      >
        {/* Subtle Decorative Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }} 
          aria-hidden="true" 
        />

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

          {/* Left Column: Heritage Storytelling & Clear Emergency Action */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">

            {/* Heritage Lineage Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#00A8EB]/40 text-xs sm:text-[13px] font-semibold text-[#A4DEF3] shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#AAD651] animate-pulse"></span>
              <span>State of NH Water Well License #1 • Founded 1936</span>
            </div>

            {/* Main Hero Headline in Bold Poppins */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.08] tracking-[-0.03em] text-white">
              No water? <br />
              <span className="text-[#00A8EB]">No problem!</span>
            </h1>

            {/* Subheading: Verified 7-Day & Family Promise */}
            <p className="font-sans font-normal text-lg sm:text-xl text-[#E2EFF3]/90 max-w-xl leading-relaxed">
              Our technicians are on call 7 days a week for prompt well pump service. Generations of Patenaudes have run our business with pride since 1936.
            </p>

            {/* Dual Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">

              {/* Primary Call Action: Signature HydroLOGICA Lime (#AAD651) Pill Button */}
              <a
                href={`tel:${siteData.company.phoneClean}`}
                className="inline-flex items-center gap-3.5 bg-[#AAD651] hover:bg-[#bce468] text-[#191919] font-heading font-bold rounded-full py-4 px-7 shadow-[0_12px_32px_-8px_rgba(170,214,81,0.5)] transition-all transform hover:scale-105 active:scale-95 duration-200"
              >
                <span className="w-10 h-10 rounded-full bg-[#000F26] text-white flex items-center justify-center shrink-0 shadow-inner">
                  <Phone className="w-4 h-4 fill-white text-white" />
                </span>
                <div className="text-left">
                  <span className="block font-sans font-semibold text-xs leading-tight text-[#191919]/75 uppercase tracking-wider">Call 7 Days a Week</span>
                  <span className="block font-heading font-extrabold text-2xl leading-none text-[#191919]">{siteData.company.phone}</span>
                </div>
              </a>

              {/* Secondary Action: Frosted Outline Button */}
              <Link
                to="/contact"
                className="inline-flex items-center px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-[#00A8EB]/40 hover:border-[#00A8EB] text-white font-heading font-bold text-sm sm:text-base backdrop-blur-md transition-all transform hover:-translate-y-0.5 active:scale-95 duration-200 group"
              >
                <span>Free Cost Estimate</span>
                <ArrowRight className="w-4 h-4 ml-2.5 text-[#00A8EB] group-hover:translate-x-1 transition-transform" />
              </Link>

            </div>

            {/* 4 Heritage Credential Pillars */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#00A8EB] tracking-tight">NH #1</div>
                <div className="font-sans text-xs text-[#A4DEF3] mt-0.5 font-medium">Water Well License</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">1936</div>
                <div className="font-sans text-xs text-[#A4DEF3] mt-0.5 font-medium">Founded in NH</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#AAD651] tracking-tight">7 Days</div>
                <div className="font-sans text-xs text-[#A4DEF3] mt-0.5 font-medium">Live Pump Service</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">4 Gen</div>
                <div className="font-sans text-xs text-[#A4DEF3] mt-0.5 font-medium">Family Owned</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Drilling Rig Photography with HydroLOGICA Clean Framed Presentation */}
          <div className="lg:col-span-5 relative">
            
            {/* Offset Decorative Accent Layer */}
            <div 
              className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-3xl border-2 border-[#00A8EB]/30 bg-[#00A8EB]/10 pointer-events-none z-0"
              aria-hidden="true"
            />

            {/* Main Hero Photo Container */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-[#000F26] h-[380px] sm:h-[460px] lg:h-[510px] group">
              
              <img 
                src="/images/drilling-rig.jpg" 
                alt="Contoocook Artesian Well Drilling Rig in NH" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Subtle Cool Aqua Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000F26] via-[#000F26]/30 to-transparent pointer-events-none" />

              {/* Floating 7 Days On-Call Glassmorphic Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[#191919] rounded-2xl p-3.5 sm:px-4 sm:py-3.5 shadow-xl border border-[#E2EFF3] max-w-[220px] text-left">
                <div className="text-[#00A8EB] text-xs font-bold font-heading flex items-center gap-1.5 mb-1 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#AAD651] animate-pulse"></span>
                  <span>On Call 7 Days</span>
                </div>
                <p className="text-xs sm:text-sm font-heading font-bold leading-tight text-[#000F26]">
                  Live technicians ready to come to your home.
                </p>
              </div>

              {/* Bottom Caption Bar */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-xs text-[#E2EFF3] font-sans flex justify-between items-end">
                <span className="font-medium text-[#A4DEF3]">Contoocook Artesian Well Drilling Rig on site</span>
                <span className="font-heading font-bold text-white bg-white/15 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">Henniker, NH</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. Three Equal-Height Triptych Cards with HydroLOGICA Elevation & Style */}
      <section className="-mt-12 sm:-mt-16 relative z-30 px-5 sm:px-10 lg:px-16 xl:px-24" id="help">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">

            {/* Card 1: Need Help? (Crisp White Card with Agua Accents) */}
            <ScrollReveal delay={0} duration={600} className="w-full h-full flex flex-col">
              <div className="w-full h-full bg-white border border-[#E2EFF3] rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_-20px_rgba(0,15,38,0.1)] flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-[0_25px_60px_-20px_rgba(0,168,235,0.2)] hover:border-[#00A8EB]/40 transition-all duration-300 ease-out group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-xs font-bold text-[#00A8EB] bg-[#E2EFF3] px-3.5 py-1 rounded-full uppercase tracking-wider">
                      Troubleshooting Guides
                    </span>
                    <span className="font-sans text-xs font-semibold text-[#61AFCD] flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5" /> Free PDFs
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl sm:text-[28px] text-[#000F26] mb-2 tracking-tight">
                    Need help?
                  </h3>

                  <p className="font-sans font-normal text-sm sm:text-base text-[#191919]/70 mb-5 leading-relaxed">
                    Before calling us, check out our handy troubleshooting and information guides:
                  </p>

                  <ul className="divide-y divide-[#E2EFF3] m-0 p-0 list-none font-sans">
                    <li>
                      <a
                        href="/documents/Low-or-No-Water-Pressure.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 py-2.5 text-[15px] sm:text-[16px] font-semibold text-[#191919] hover:text-[#00A8EB] transition-colors group/item"
                      >
                        <span>Low or no water pressure?</span>
                        <ArrowUpRight className="w-4 h-4 text-[#00A8EB] transition-transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/documents/Is-Your-Submersible-Pump-Healthy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 py-2.5 text-[15px] sm:text-[16px] font-semibold text-[#191919] hover:text-[#00A8EB] transition-colors group/item"
                      >
                        <span>Is your submersible pump healthy?</span>
                        <ArrowUpRight className="w-4 h-4 text-[#00A8EB] transition-transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/documents/Artesian-or-Dug-Well-Difference.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 py-2.5 text-[15px] sm:text-[16px] font-semibold text-[#191919] hover:text-[#00A8EB] transition-colors group/item"
                      >
                        <span>Artesian or dug well? What is the difference?</span>
                        <ArrowUpRight className="w-4 h-4 text-[#00A8EB] transition-transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/documents/Getting-Your-Drill-Site-Ready.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 py-2.5 text-[15px] sm:text-[16px] font-semibold text-[#191919] hover:text-[#00A8EB] transition-colors group/item"
                      >
                        <span>Getting Your Drill Site Ready</span>
                        <ArrowUpRight className="w-4 h-4 text-[#00A8EB] transition-transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: $50 off! (Bright Agua Gradient with Signature Lime Button) */}
            <ScrollReveal delay={100} duration={600} className="w-full h-full flex flex-col">
              <div className="w-full h-full bg-gradient-to-br from-[#00A8EB] to-[#1D7FA7] text-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_-20px_rgba(0,168,235,0.4)] flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-[0_25px_60px_-20px_rgba(0,168,235,0.55)] transition-all duration-300 ease-out border border-[#00A8EB]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-xs font-bold bg-[#000F26] text-white px-3.5 py-1 rounded-full uppercase tracking-wider border border-white/20">
                      Savings Voucher
                    </span>
                    <span className="font-sans text-xs font-semibold text-white/90">Instant Redeem</span>
                  </div>

                  <h3 className="font-heading font-extrabold text-3xl sm:text-[34px] text-white mb-2 tracking-tight">
                    $50 off!
                  </h3>

                  <p className="font-sans font-normal text-sm sm:text-base text-white/90 mb-6 leading-relaxed">
                    Get $50 off the cost of a well pump, well tank or pump and tank system. Click below to get the coupon!
                  </p>
                </div>

                <div>
                  <button
                    onClick={onOpenCoupon}
                    className="w-full inline-flex items-center justify-center gap-2 font-heading font-bold rounded-full px-6 py-4 text-sm sm:text-base bg-[#AAD651] hover:bg-[#bce468] text-[#191919] transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_8px_20px_rgba(0,0,0,0.15)] text-center cursor-pointer duration-200"
                  >
                    <Tag className="w-4 h-4 text-[#191919]" />
                    <span>$50 Off Coupon</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: 7 days a week (Deep Navy Surface with Lime Pulse) */}
            <ScrollReveal delay={200} duration={600} className="w-full h-full flex flex-col">
              <div className="w-full h-full bg-[#000F26] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_-20px_rgba(0,15,38,0.3)] flex flex-col justify-between text-white hover:-translate-y-1.5 hover:shadow-[0_25px_60px_-20px_rgba(0,15,38,0.5)] hover:border-[#00A8EB]/40 transition-all duration-300 ease-out">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-xs font-bold bg-white/10 text-[#A4DEF3] px-3.5 py-1 rounded-full uppercase tracking-wider border border-white/15">
                      Pump Service
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-[#AAD651] font-semibold">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#AAD651] animate-pulse"></span>
                      <span>Live Techs</span>
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl sm:text-[28px] text-white mb-2 tracking-tight">
                    7 days a week
                  </h3>

                  <p className="font-sans font-normal text-sm sm:text-base text-[#E2EFF3]/80 mb-6 leading-relaxed">
                    Our service techs are on call 7 days a week. Someone is always on call to come to your home, every day of the week.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/15">
                  <p className="font-sans font-semibold text-xs sm:text-sm text-[#A4DEF3] mb-1 uppercase tracking-wider">
                    Give us a call at
                  </p>
                  <a
                    href={`tel:${siteData.company.phoneClean}`}
                    className="font-heading font-extrabold text-3xl sm:text-[34px] text-white hover:text-[#00A8EB] transition-colors block tracking-tight leading-tight"
                  >
                    {siteData.company.phone}
                  </a>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. Company Introduction & Common Customer Questions ("Call us first!") */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-[#FFFFFF]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Column: Heading, Lead & Questions List */}
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EFF3] text-xs font-bold text-[#00A8EB] uppercase tracking-wider mb-4">
                <Clock className="w-3.5 h-3.5" />
                <span>Southern & Central NH Experts</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.12] tracking-[-0.02em] text-[#000F26] mb-4">
                Call us first!
              </h2>

              <p className="font-sans font-normal text-base sm:text-lg text-[#191919]/75 mb-6 leading-relaxed">
                Your search for a water pump replacement, water well drilling and water filtration company you can trust ends here.
              </p>

              <ul className="divide-y divide-[#E2EFF3] border-y border-[#E2EFF3] my-6 p-0 list-none">
                <li className="font-heading font-semibold text-lg sm:text-xl lg:text-[22px] text-[#000F26] py-4 flex items-center justify-between">
                  <span>What do you do if your faucet has no water?</span>
                  <span className="text-[#00A8EB] text-xl font-bold">?</span>
                </li>
                <li className="font-heading font-semibold text-lg sm:text-xl lg:text-[22px] text-[#000F26] py-4 flex items-center justify-between">
                  <span>Why do I suddenly have no water?</span>
                  <span className="text-[#00A8EB] text-xl font-bold">?</span>
                </li>
                <li className="font-heading font-semibold text-lg sm:text-xl lg:text-[22px] text-[#000F26] py-4 flex items-center justify-between">
                  <span>Why is my water pressure so low?</span>
                  <span className="text-[#00A8EB] text-xl font-bold">?</span>
                </li>
              </ul>

              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-[#00A8EB] tracking-tight flex items-center gap-2">
                <span>We have the answers!</span>
                <span className="text-xl">💧</span>
              </div>
            </ScrollReveal>

            {/* Right Column: Service Area Map Styled Cleanly */}
            <ScrollReveal delay={120} className="flex justify-center items-center">
              <div className="w-full max-w-[480px] h-[320px] sm:h-[350px] mx-auto rounded-3xl overflow-hidden shadow-xl border border-[#E2EFF3] bg-[#E2EFF3] flex items-center justify-center group">
                <img 
                  src="/images/snazzy-image.png" 
                  alt="Contoocook Artesian Well service area map" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollReveal>

          </div>

          {/* Story Narrative Box Below Two-Column Grid */}
          <ScrollReveal delay={180}>
            <div className="mt-12 sm:mt-16 bg-[#E2EFF3]/50 border border-[#E2EFF3] rounded-3xl p-6 sm:p-10">
              <p className="font-sans font-normal text-base sm:text-lg text-[#191919]/80 leading-relaxed max-w-5xl">
                Serving southern and central New Hampshire since 1936, including the major Concord and Manchester areas, Contoocook Artesian Well Company is there 7 days a week for out-of-water emergencies. Our job is to earn your trust as the “go-to guys” for drilling water wells, installing and servicing pump systems, hydrofracturing, water testing and filtration. <strong>No Water? No Problem!</strong>
              </p>
            </div>
          </ScrollReveal>

          {/* 4. Four Core Services Cards ("What We Do") */}
          <div className="mt-16 sm:mt-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10">
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#00A8EB] block mb-1">
                  What We Do
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#000F26]">
                  Complete Groundwater Services
                </h3>
              </div>
              <Link 
                to="/services" 
                className="mt-3 sm:mt-0 inline-flex items-center text-sm font-heading font-bold text-[#00A8EB] hover:text-[#1D7FA7] transition-colors"
              >
                <span>View all services</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Service 1 */}
              <ScrollReveal delay={0} className="flex">
                <Link
                  to="/services#welldrilling"
                  className="w-full bg-white border border-[#E2EFF3] hover:border-[#00A8EB] rounded-3xl p-6 font-heading font-bold text-lg sm:text-xl text-[#000F26] flex flex-col justify-between min-h-[170px] hover:shadow-[0_16px_40px_-16px_rgba(0,168,235,0.25)] transition-all duration-300 group hover:-translate-y-1.5"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-[#E2EFF3] text-[#00A8EB] flex items-center justify-center mb-4 group-hover:bg-[#00A8EB] group-hover:text-white transition-colors">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <span className="group-hover:text-[#00A8EB] transition-colors">Drilling water wells</span>
                  </div>
                  <small className="font-sans font-semibold text-xs sm:text-sm text-[#00A8EB] mt-4 flex items-center gap-1">
                    <span>See service details</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </small>
                </Link>
              </ScrollReveal>

              {/* Service 2 */}
              <ScrollReveal delay={80} className="flex">
                <Link
                  to="/services#pumpservices"
                  className="w-full bg-white border border-[#E2EFF3] hover:border-[#00A8EB] rounded-3xl p-6 font-heading font-bold text-lg sm:text-xl text-[#000F26] flex flex-col justify-between min-h-[170px] hover:shadow-[0_16px_40px_-16px_rgba(0,168,235,0.25)] transition-all duration-300 group hover:-translate-y-1.5"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-[#E2EFF3] text-[#00A8EB] flex items-center justify-center mb-4 group-hover:bg-[#00A8EB] group-hover:text-white transition-colors">
                      <Droplet className="w-5 h-5" />
                    </div>
                    <span className="group-hover:text-[#00A8EB] transition-colors">Installing & servicing pump systems</span>
                  </div>
                  <small className="font-sans font-semibold text-xs sm:text-sm text-[#00A8EB] mt-4 flex items-center gap-1">
                    <span>See service details</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </small>
                </Link>
              </ScrollReveal>

              {/* Service 3 */}
              <ScrollReveal delay={160} className="flex">
                <Link
                  to="/services#hydrofracking"
                  className="w-full bg-white border border-[#E2EFF3] hover:border-[#00A8EB] rounded-3xl p-6 font-heading font-bold text-lg sm:text-xl text-[#000F26] flex flex-col justify-between min-h-[170px] hover:shadow-[0_16px_40px_-16px_rgba(0,168,235,0.25)] transition-all duration-300 group hover:-translate-y-1.5"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-[#E2EFF3] text-[#00A8EB] flex items-center justify-center mb-4 group-hover:bg-[#00A8EB] group-hover:text-white transition-colors">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <span className="group-hover:text-[#00A8EB] transition-colors">Hydrofracturing</span>
                  </div>
                  <small className="font-sans font-semibold text-xs sm:text-sm text-[#00A8EB] mt-4 flex items-center gap-1">
                    <span>See service details</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </small>
                </Link>
              </ScrollReveal>

              {/* Service 4 */}
              <ScrollReveal delay={240} className="flex">
                <Link
                  to="/services#watertesting"
                  className="w-full bg-white border border-[#E2EFF3] hover:border-[#00A8EB] rounded-3xl p-6 font-heading font-bold text-lg sm:text-xl text-[#000F26] flex flex-col justify-between min-h-[170px] hover:shadow-[0_16px_40px_-16px_rgba(0,168,235,0.25)] transition-all duration-300 group hover:-translate-y-1.5"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-[#E2EFF3] text-[#00A8EB] flex items-center justify-center mb-4 group-hover:bg-[#00A8EB] group-hover:text-white transition-colors">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="group-hover:text-[#00A8EB] transition-colors">Water testing & filtration</span>
                  </div>
                  <small className="font-sans font-semibold text-xs sm:text-sm text-[#00A8EB] mt-4 flex items-center gap-1">
                    <span>See service details</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </small>
                </Link>
              </ScrollReveal>

            </div>
          </div>

        </div>
      </section>

      {/* 5. Customer Testimonial Band on Soft Mist #E2EFF3 Background */}
      <section className="bg-[#E2EFF3]/60 py-16 sm:py-24 border-y border-[#E2EFF3]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left: Quotation Card */}
          <ScrollReveal delay={0} className="lg:col-span-7">
            <div className="relative bg-white border border-[#E2EFF3] rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_-20px_rgba(0,15,38,0.08)]">
              {/* Large Decorative Bright Agua Quote mark */}
              <span className="absolute -top-6 left-6 sm:left-8 font-heading font-extrabold text-8xl text-[#00A8EB]/25 select-none leading-none">
                “
              </span>

              <p className="font-heading font-semibold text-xl sm:text-2xl lg:text-[26px] leading-[1.4] text-[#000F26] mt-4 mb-6 tracking-tight">
                It is the greatest feeling in the world to have so much water...I will tell anyone of your hydrofracking service. Thanks again - especially for getting here so soon!
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#AAD651] text-[#191919] font-heading font-bold flex items-center justify-center text-sm shadow-sm">
                  JP
                </div>
                <div>
                  <cite className="font-heading font-bold text-base text-[#000F26] not-italic block">
                    J. Pokigo
                  </cite>
                  <span className="font-sans text-xs text-[#61AFCD] block">Goffstown, NH</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Company Photo with HydroLOGICA Rounded Corners */}
          <ScrollReveal delay={150} className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[300px] sm:h-[400px] bg-[#000F26] border border-[#E2EFF3] group">
              <img
                src="/images/water-work.jpg"
                alt="Contoocook Artesian Well Company technician on site"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000F26]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white/90 font-sans">
                Authentic field technicians serving NH since 1936
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 6. Why Choose Us Section on Deep Navy #000F26 Background */}
      <section className="bg-[#000F26] text-white py-20 sm:py-28 relative overflow-hidden">
        {/* Subtle radial glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00A8EB]/10 blur-[120px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 relative z-10">

          <ScrollReveal delay={0}>
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#AAD651] block mb-2">
                The Patenaude Standard
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] text-white tracking-tight">
                Why home builders and home owners choose Contoocook Artesian Well Company:
              </h2>
            </div>
          </ScrollReveal>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">

            {/* Point 1 */}
            <ScrollReveal delay={0} className="flex">
              <li className="w-full bg-white/5 border border-white/10 rounded-3xl p-7 text-base sm:text-lg leading-relaxed text-[#E2EFF3] flex flex-col justify-between hover:bg-white/10 hover:border-[#00A8EB]/50 transition-all duration-300 hover:-translate-y-1">
                <div>
                  <span className="w-10 h-10 rounded-full bg-[#00A8EB] text-white font-heading font-extrabold text-base flex items-center justify-center mb-5 shadow-sm">
                    1
                  </span>
                  <p className="font-sans font-normal">Our larger-sized well gives you more water at no extra cost.</p>
                </div>
              </li>
            </ScrollReveal>

            {/* Point 2 */}
            <ScrollReveal delay={80} className="flex">
              <li className="w-full bg-white/5 border border-white/10 rounded-3xl p-7 text-base sm:text-lg leading-relaxed text-[#E2EFF3] flex flex-col justify-between hover:bg-white/10 hover:border-[#00A8EB]/50 transition-all duration-300 hover:-translate-y-1">
                <div>
                  <span className="w-10 h-10 rounded-full bg-[#00A8EB] text-white font-heading font-extrabold text-base flex items-center justify-center mb-5 shadow-sm">
                    2
                  </span>
                  <p className="font-sans font-normal">Our professional, skilled staff keeps you informed every step of the way.</p>
                </div>
              </li>
            </ScrollReveal>

            {/* Point 3 */}
            <ScrollReveal delay={160} className="flex">
              <li className="w-full bg-white/5 border border-white/10 rounded-3xl p-7 text-base sm:text-lg leading-relaxed text-[#E2EFF3] flex flex-col justify-between hover:bg-white/10 hover:border-[#00A8EB]/50 transition-all duration-300 hover:-translate-y-1">
                <div>
                  <span className="w-10 h-10 rounded-full bg-[#AAD651] text-[#191919] font-heading font-extrabold text-base flex items-center justify-center mb-5 shadow-sm">
                    3
                  </span>
                  <p className="font-sans font-normal">You’ll rarely go without water. Call us 7 days a week when your pump needs service.</p>
                </div>
              </li>
            </ScrollReveal>

            {/* Point 4 */}
            <ScrollReveal delay={240} className="flex">
              <li className="w-full bg-white/5 border border-white/10 rounded-3xl p-7 text-base sm:text-lg leading-relaxed text-[#E2EFF3] flex flex-col justify-between hover:bg-white/10 hover:border-[#00A8EB]/50 transition-all duration-300 hover:-translate-y-1">
                <div>
                  <span className="w-10 h-10 rounded-full bg-[#00A8EB] text-white font-heading font-extrabold text-base flex items-center justify-center mb-5 shadow-sm">
                    4
                  </span>
                  <p className="font-sans font-normal">We take every measure during construction to prevent contamination from entering your water supply.</p>
                </div>
              </li>
            </ScrollReveal>

            {/* Point 5 (Span 2 on lg for clean balance) */}
            <ScrollReveal delay={320} className="lg:col-span-2 flex">
              <li className="w-full bg-gradient-to-r from-white/5 to-[#00A8EB]/10 border border-[#00A8EB]/30 rounded-3xl p-7 text-base sm:text-lg leading-relaxed text-[#E2EFF3] flex flex-col justify-between hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <div>
                  <span className="w-10 h-10 rounded-full bg-[#AAD651] text-[#191919] font-heading font-extrabold text-base flex items-center justify-center mb-5 shadow-sm">
                    5
                  </span>
                  <p className="font-sans font-normal">Three generations of Patenaudes have run our business with pride. You’ll be glad you chose us, because we care.</p>
                </div>
              </li>
            </ScrollReveal>

          </ol>

        </div>
      </section>

      {/* 7. Proud Members Section - Modern Clean Presentation */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24">

          <ScrollReveal delay={0}>
            <div className="bg-[#E2EFF3]/40 border border-[#E2EFF3] rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col items-center shadow-xs">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#00A8EB] block mb-2">
                Industry Affiliations
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#000F26] text-center tracking-tight mb-8 sm:mb-10">
                Proud Members of Professional Associations
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-14 items-center justify-items-center w-full">
                <a
                  className="flex items-center justify-center p-3 transition-transform hover:scale-105 duration-200"
                  href="http://www.buildersclub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Builders Club"
                >
                  <img
                    src="/logos/affiliation-builders-club.png"
                    alt="Builders Club"
                    className="max-w-[170px] sm:max-w-[190px] max-h-[75px] sm:max-h-[85px] w-auto h-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </a>

                <a
                  className="flex items-center justify-center p-3 transition-transform hover:scale-105 duration-200"
                  href="http://www.nhwaterwell.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="New Hampshire Water Well Association"
                >
                  <img
                    src="/logos/affiliation-nh-well.png"
                    alt="NH Water Well Association"
                    className="max-w-[170px] sm:max-w-[190px] max-h-[75px] sm:max-h-[85px] w-auto h-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </a>

                <a
                  className="flex items-center justify-center p-3 transition-transform hover:scale-105 duration-200"
                  href="http://www.ngwa.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="National Ground Water Association"
                >
                  <img
                    src="/logos/affiliation-ngwa.png"
                    alt="National Ground Water Association"
                    className="max-w-[170px] sm:max-w-[190px] max-h-[75px] sm:max-h-[85px] w-auto h-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </a>

                <a
                  className="flex items-center justify-center p-3 transition-transform hover:scale-105 duration-200"
                  href="http://www.igshpa.okstate.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="International Ground Source Heat Pump Association"
                >
                  <img
                    src="/logos/affiliation-igshpa.png"
                    alt="IGSHPA"
                    className="max-w-[170px] sm:max-w-[190px] max-h-[75px] sm:max-h-[85px] w-auto h-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 8. Emergency Bottom Banner with HydroLOGICA Signature Styling */}
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
