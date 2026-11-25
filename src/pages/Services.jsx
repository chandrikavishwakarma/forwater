import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Phone, 
  Wrench, 
  Droplet, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight,
  Tag,
  Clock,
  ExternalLink
} from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from '../components/ScrollReveal';

export default function Services({ onOpenCoupon }) {
  const location = useLocation();

  // Scroll to hash if present
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] w-full overflow-x-hidden text-[#191919] font-sans">
      
      {/* 1. Header Banner - HydroLOGICA Deep Navy (#000F26) with Bright Agua Glow */}
      <section 
        className="text-white pt-16 sm:pt-20 pb-16 sm:pb-20 relative overflow-hidden bg-[#000F26]"
        style={{
          background: 'radial-gradient(1000px 500px at 80% 20%, rgba(0, 168, 235, 0.16) 0%, transparent 70%), #000F26'
        }}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 text-center sm:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#00A8EB]/40 text-xs font-semibold text-[#A4DEF3] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#AAD651] animate-pulse"></span>
            <span>Contoocook Artesian Well Company • Founded 1936</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Comprehensive <span className="text-[#00A8EB]">Groundwater Services</span>
          </h1>

          <p className="mt-4 font-sans font-normal text-base sm:text-lg lg:text-xl text-[#E2EFF3]/90 max-w-2xl leading-relaxed">
            Well Drilling • Pump Services • Water Testing & Filtration • Hydrofracking
          </p>
        </div>
      </section>

      {/* 2. Quick Jump Sticky Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#E2EFF3] shadow-xs">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24">
          <div className="flex items-center space-x-2 sm:space-x-3 py-3.5 overflow-x-auto no-scrollbar font-heading font-semibold text-xs sm:text-sm">
            <span className="text-[#61AFCD] shrink-0 hidden md:inline font-bold uppercase tracking-wider text-xs">Jump To:</span>
            <a 
              href="#welldrilling" 
              className="shrink-0 px-4 py-2 rounded-full bg-[#E2EFF3] hover:bg-[#00A8EB] hover:text-white text-[#000F26] transition-colors"
            >
              Well Drilling
            </a>
            <a 
              href="#pumpservices" 
              className="shrink-0 px-4 py-2 rounded-full bg-[#E2EFF3] hover:bg-[#00A8EB] hover:text-white text-[#000F26] transition-colors"
            >
              Pump Services
            </a>
            <a 
              href="#watertesting" 
              className="shrink-0 px-4 py-2 rounded-full bg-[#E2EFF3] hover:bg-[#00A8EB] hover:text-white text-[#000F26] transition-colors"
            >
              Water Testing & Filtration
            </a>
            <a 
              href="#hydrofracking" 
              className="shrink-0 px-4 py-2 rounded-full bg-[#E2EFF3] hover:bg-[#00A8EB] hover:text-white text-[#000F26] transition-colors"
            >
              Hydrofracking
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-24 space-y-20 sm:space-y-28">

        {/* 1. Well Drilling */}
        <section id="welldrilling" className="scroll-mt-32">
          <ScrollReveal delay={0}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-wider text-[#00A8EB] bg-[#E2EFF3] px-3.5 py-1.5 rounded-full">
                  <Wrench className="w-3.5 h-3.5" />
                  <span>State of NH Water Well License #1</span>
                </div>

                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#000F26] tracking-tight leading-tight">
                  Artesian Well Drilling
                </h2>

                <p className="font-sans font-normal text-base text-[#191919]/75 leading-relaxed">
                  Artesian water well drilling in southern and central New Hampshire has been our specialty since 1936. In fact, our company has <strong>Water Well License #1</strong> from the State of New Hampshire. We invest in the drilling rigs, equipment, and people who can get the job done correctly. You can trust us not to overdrill or underdrill your well, respect your property, and communicate with you during the construction process.
                </p>

                {/* Highlight Callout */}
                <div className="bg-[#E2EFF3]/60 border border-[#00A8EB]/30 p-6 rounded-3xl">
                  <h4 className="font-heading font-bold text-lg text-[#000F26] mb-2">
                    Why choose us? Because we go the extra gallon!
                  </h4>
                  <p className="font-sans font-normal text-sm sm:text-base text-[#191919]/80 leading-relaxed">
                    What makes us different is our preference for drilling artesian water wells that are <strong>larger than the standard wells</strong> offered by our competitors. Why? Because a bigger well provides more water for your immediate use. This means more water for the laundry, irrigation and showering in the morning.
                  </p>
                </div>

                {/* Checklist */}
                <div className="space-y-2.5 font-sans text-sm sm:text-base text-[#191919]/80">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#00A8EB] shrink-0 mt-0.5" />
                    <span>Our larger-sized well gives you more water at no extra cost.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#00A8EB] shrink-0 mt-0.5" />
                    <span>Our professional, skilled staff keeps you informed every step of the way.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#AAD651] shrink-0 mt-0.5" />
                    <span>You'll never go without water. Call us 7 days a week when your pump needs service.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#00A8EB] shrink-0 mt-0.5" />
                    <span>We take every measure during construction to prevent contamination from entering your water supply.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#00A8EB] shrink-0 mt-0.5" />
                    <span>Generations of Patenaudes have run our business with pride.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-[#AAD651] hover:bg-[#bce468] text-[#191919] font-heading font-bold text-sm uppercase tracking-wider shadow-sm transition-all transform hover:scale-105 active:scale-95 duration-200"
                  >
                    <span>Click here for a FREE COST ESTIMATE</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Rig Photo & Sister Company Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E2EFF3] bg-[#000F26] group">
                  <img 
                    src="/images/drilling-rig.jpg" 
                    alt="Contoocook Artesian Well Drilling Rig in NH" 
                    className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4 bg-white font-sans font-medium text-xs text-[#191919]/70 border-t border-[#E2EFF3]">
                    Contoocook Artesian Well drilling rig on site in NH.
                  </div>
                </div>

                {/* Sister Company: Pats Peak Ski Area Banner */}
                <div className="bg-[#E2EFF3]/50 p-5 rounded-3xl border border-[#E2EFF3] flex items-center justify-between gap-4">
                  <div>
                    <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#00A8EB] block">Sister Company</span>
                    <p className="font-heading font-bold text-sm sm:text-base text-[#000F26]">Pats Peak Ski Area, Henniker, NH</p>
                  </div>
                  <img 
                    src="/logos/pats-peak-logo.png" 
                    alt="Pats Peak Ski Area in New Hampshire" 
                    className="h-11 sm:h-12 w-auto object-contain bg-white p-1.5 rounded-xl border border-[#E2EFF3]"
                  />
                </div>
              </div>

            </div>
          </ScrollReveal>
        </section>

        <hr className="border-[#E2EFF3]" />

        {/* 2. Pump Services */}
        <section id="pumpservices" className="scroll-mt-32">
          <ScrollReveal delay={0}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Why Choose Us Box */}
              <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
                <div className="bg-[#000F26] text-white p-7 sm:p-8 rounded-3xl border border-white/10 shadow-xl space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#AAD651]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>7 Days Live Dispatch</span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                    Why Choose Us to Install Your Well Pump?
                  </h3>

                  <ul className="space-y-4 font-sans font-normal text-sm text-[#E2EFF3]/80">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00A8EB] shrink-0 mt-0.5" />
                      <span>Installing pumps for more than 55 years. Our family name is on every pump installation.</span>
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

                <div className="rounded-3xl overflow-hidden shadow-md border border-[#E2EFF3] bg-white group">
                  <img 
                    src="/images/hero-truck.jpg" 
                    alt="Contoocook Artesian Well Company pump service truck" 
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-3 bg-[#E2EFF3]/60 font-sans font-medium text-xs text-[#191919]/70 text-center">
                    Prompt pump service 7 days a week across NH.
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-wider text-[#00A8EB] bg-[#E2EFF3] px-3.5 py-1.5 rounded-full">
                  <Droplet className="w-3.5 h-3.5" />
                  <span>Prompt Replacement & Repair</span>
                </div>

                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#000F26] tracking-tight leading-tight">
                  Well Pump Systems & Service
                </h2>

                <p className="font-sans font-normal text-base text-[#191919]/75 leading-relaxed">
                  Contoocook Artesian Well Company does more than just drill new wells! We help existing wells keep delivering water to your property. When you find your water pressure is low or you have <strong>NO WATER — call us!</strong> We can help.
                </p>

                <p className="font-sans font-normal text-base text-[#191919]/75 leading-relaxed">
                  No water, or low water pressure could be the sign of just a bad or malfunctioning water pump. We can assess the situation and get you the right solution to have your water pumping back to where it belongs in no time — many times with even better water pressure.
                </p>

                <div className="bg-white border border-[#E2EFF3] p-6 rounded-3xl shadow-xs space-y-3">
                  <h4 className="font-heading font-bold text-lg text-[#000F26]">
                    Matching the right pump to your well
                  </h4>
                  <p className="font-sans font-normal text-sm text-[#191919]/75 leading-relaxed">
                    When your well was drilled, a water pump was installed (typically a submersible pump) to meet the water demands of your home. Connected to a pressure tank assembly, it regulates flow steady and predictable into your fixtures.
                  </p>
                  <p className="font-sans font-normal text-sm text-[#191919]/75 leading-relaxed">
                    When pump service arises, our technicians arrive quickly with fully stocked trucks. We carry the top brands and sizes for immediate replacement.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <a
                    href={`tel:${siteData.company.phoneClean}`}
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#00A8EB] hover:bg-[#1D7FA7] text-white font-heading font-bold text-sm uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 duration-200"
                  >
                    <Phone className="w-4 h-4 fill-white" />
                    <span>Call 603-428-6060</span>
                  </a>

                  <Link
                    to="/no-water-or-pressure"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-[#00A8EB] text-[#00A8EB] hover:bg-[#E2EFF3] font-heading font-bold text-sm uppercase tracking-wider transition-all"
                  >
                    <span>Emergency Troubleshooting</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </section>

        <hr className="border-[#E2EFF3]" />

        {/* 3. Water Testing & Filtration */}
        <section id="watertesting" className="scroll-mt-32">
          <ScrollReveal delay={0}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-wider text-[#00A8EB] bg-[#E2EFF3] px-3.5 py-1.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Pure, Safe Water</span>
                </div>

                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#000F26] tracking-tight leading-tight">
                  Water Testing & Filtration
                </h2>

                <p className="font-sans font-normal text-base text-[#191919]/75 leading-relaxed">
                  Drinking water quality in New Hampshire varies widely from town to town and well to well. Naturally occurring minerals, bedrock geology, and local groundwater conditions can cause issues with taste, odor, staining, hardness, or safety concerns such as arsenic, radon, iron, manganese, and low pH (acidic water).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#E2EFF3]/50 border border-[#E2EFF3] p-5 rounded-2xl">
                    <h5 className="font-heading font-bold text-sm text-[#000F26] mb-1">Common NH Contaminants</h5>
                    <p className="font-sans text-xs text-[#191919]/70">Arsenic, Radon, Uranium, Iron, Manganese, Hardness, and Low pH.</p>
                  </div>
                  <div className="bg-[#E2EFF3]/50 border border-[#E2EFF3] p-5 rounded-2xl">
                    <h5 className="font-heading font-bold text-sm text-[#000F26] mb-1">Tailored Filtration</h5>
                    <p className="font-sans text-xs text-[#191919]/70">Water softeners, iron/sulfur filters, whole-house aeration, and reverse osmosis.</p>
                  </div>
                </div>

                <p className="font-sans font-normal text-base text-[#191919]/75 leading-relaxed">
                  We collect certified water samples and send them to state-accredited laboratories. Based on the comprehensive lab report, we design and install custom water filtration solutions tailored specifically to your home's water chemistry.
                </p>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#AAD651] hover:bg-[#bce468] text-[#191919] font-heading font-bold text-sm uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 duration-200"
                  >
                    <span>Schedule Water Testing</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E2EFF3] bg-[#000F26] group">
                  <img 
                    src="/images/water-work.jpg" 
                    alt="Water Testing and Filtration Systems" 
                    className="w-full h-[340px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4 bg-white font-sans font-medium text-xs text-[#191919]/70 border-t border-[#E2EFF3]">
                    Professional water quality diagnostics and filtration installations.
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </section>

        <hr className="border-[#E2EFF3]" />

        {/* 4. Hydrofracturing */}
        <section id="hydrofracking" className="scroll-mt-32">
          <ScrollReveal delay={0}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="bg-gradient-to-br from-[#000F26] to-[#001D47] text-white p-7 sm:p-8 rounded-3xl border border-white/10 shadow-xl space-y-4">
                  <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#AAD651]">Real Customer Story</span>
                  <blockquote className="font-heading font-medium text-lg text-[#E2EFF3] leading-relaxed italic">
                    “It is the greatest feeling in the world to have so much water...I will tell anyone of your hydrofracking service. Thanks again - especially for getting here so soon!”
                  </blockquote>
                  <cite className="font-sans font-bold text-sm text-[#A4DEF3] not-italic block">
                    — J. Pokigo, Goffstown, NH
                  </cite>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-wider text-[#00A8EB] bg-[#E2EFF3] px-3.5 py-1.5 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Increase Well Yield</span>
                </div>

                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#000F26] tracking-tight leading-tight">
                  Hydrofracturing Services
                </h2>

                <p className="font-sans font-normal text-base text-[#191919]/75 leading-relaxed">
                  If your existing artesian well produces low gallons-per-minute (GPM) or you frequently run out of water during high usage, <strong>hydrofracturing</strong> (hydrofracking) can dramatically increase your well yield without the need to drill a brand new well.
                </p>

                <p className="font-sans font-normal text-base text-[#191919]/75 leading-relaxed">
                  Hydrofracking works by sealing off sections of your well bedrock and injecting high-pressure, clean potable water into the surrounding rock fractures. This flushes out blockages, clears sediment, and opens new interconnected water-bearing veins in the bedrock.
                </p>

                <div className="space-y-2.5 font-sans text-sm sm:text-base text-[#191919]/80">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#00A8EB] shrink-0 mt-0.5" />
                    <span>Cost-effective alternative to drilling a completely new well.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#00A8EB] shrink-0 mt-0.5" />
                    <span>Safe, chemical-free process using only pressurized potable water.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#AAD651] shrink-0 mt-0.5" />
                    <span>Proven track record of success across southern and central NH bedrock.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#00A8EB] hover:bg-[#1D7FA7] text-white font-heading font-bold text-sm uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 duration-200"
                  >
                    <span>Request a Hydrofracking Evaluation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </section>

      </div>

      {/* 5. Bottom Emergency CTA Banner */}
      <section className="bg-gradient-to-r from-[#000F26] via-[#001D47] to-[#000F26] text-white border-t border-white/10 py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#A4DEF3] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#AAD651] animate-pulse"></span>
              <span>On Call 7 Days a Week</span>
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
