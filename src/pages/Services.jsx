import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Phone, 
  Wrench, 
  Droplet, 
  Sparkles, 
  CheckCircle, 
  Download, 
  ArrowRight, 
  Tag
} from 'lucide-react';
import { siteData } from '../data/siteData';

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
    <div className="flex flex-col min-h-screen bg-[#F8F7F9] w-full overflow-x-hidden text-[#172638] font-sans">
      
      {/* Header Banner matching reference styling */}
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
            SERVICES
          </h1>
          <p className="mt-3 font-sans font-normal text-base sm:text-lg lg:text-xl text-[#C5D6E4] max-w-2xl leading-relaxed">
            Well Drilling • Pump Services • Water Testing & Filtration • Hydrofracking
          </p>
        </div>
      </section>

      {/* Quick Jump Bar */}
      <div className="sticky top-0 z-30 bg-[#002D55]/95 backdrop-blur-md border-b border-[#16466F] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 sm:space-x-4 py-3 overflow-x-auto no-scrollbar font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider text-[#D5BBD3]">
            <span className="text-[#A875A5] shrink-0 hidden md:inline font-medium">Jump To:</span>
            <a href="#welldrilling" className="shrink-0 px-3.5 py-1.5 rounded-full bg-[#16466F] hover:bg-[#6E2C6B] hover:text-white transition-colors border border-[#16466F] text-white">
              Well Drilling
            </a>
            <a href="#pumpservices" className="shrink-0 px-3.5 py-1.5 rounded-full bg-[#16466F] hover:bg-[#6E2C6B] hover:text-white transition-colors border border-[#16466F] text-white">
              Pump Services
            </a>
            <a href="#watertesting" className="shrink-0 px-3.5 py-1.5 rounded-full bg-[#16466F] hover:bg-[#6E2C6B] hover:text-white transition-colors border border-[#16466F] text-white">
              Water Testing & Filtration
            </a>
            <a href="#hydrofracking" className="shrink-0 px-3.5 py-1.5 rounded-full bg-[#16466F] hover:bg-[#6E2C6B] hover:text-white transition-colors border border-[#16466F] text-white">
              Hydrofracking Services
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-20">

        {/* 1. Well Drilling */}
        <section id="welldrilling" className="scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center space-x-2 font-sans font-semibold text-xs uppercase tracking-wider text-[#172638] bg-[#E8DFE9] border border-[#D5BBD3] px-3 py-1 rounded">
                <Wrench className="w-3.5 h-3.5 shrink-0 text-[#6E2C6B]" />
                <span>State of NH Water Well License #1</span>
              </div>

              <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#172638] tracking-tight">
                Well Drilling
              </h2>

              <p className="font-sans font-normal text-sm sm:text-base text-[#172638]/80 leading-relaxed">
                Artesian water well drilling in southern and central New Hampshire has been our specialty since 1936. In fact, our company has <strong>Water Well License #1</strong> from the State of New Hampshire. We invest in the drilling rigs, equipment, and people who can get the job done correctly. You can trust us not to overdrill or underdrill your well, respect your property, and communicate with you during the construction process.
              </p>

              <div className="bg-[#E8DFE9] p-4 sm:p-5 rounded-xl border-l-4 border-[#6E2C6B]">
                <h4 className="font-serif font-bold text-base sm:text-lg text-[#172638] mb-1 tracking-tight">
                  Why choose us? Because we go the extra gallon!
                </h4>
                <p className="font-sans font-normal text-xs sm:text-sm text-[#172638]/80 leading-relaxed">
                  What makes us different is our preference for drilling artesian water wells that are <strong>larger than the standard wells</strong> offered by our competitors. Why? Because a bigger well provides more water for your immediate use. This means more water for the laundry, irrigation and showering in the morning, for example.
                </p>
              </div>

              <div className="space-y-2 pt-1 font-sans font-normal text-xs sm:text-sm text-[#172638]/80">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#6E2C6B] shrink-0 mt-0.5" />
                  <span>Our larger-sized well gives you more water at no extra cost.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#6E2C6B] shrink-0 mt-0.5" />
                  <span>Our professional, skilled staff keeps you informed every step of the way.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#6E2C6B] shrink-0 mt-0.5" />
                  <span>You'll never go without water. Call us 7 days a week when your pump needs service.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#6E2C6B] shrink-0 mt-0.5" />
                  <span>We take every measure during construction to prevent contamination from entering your water supply.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#6E2C6B] shrink-0 mt-0.5" />
                  <span>Generations of Patenaudes have run our business with pride.</span>
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#6E2C6B] hover:bg-[#854B82] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all space-x-2 text-center"
                >
                  <span>Click here for a FREE COST ESTIMATE</span>
                  <ArrowRight className="w-4 h-4 text-white shrink-0" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#D5BBD3] bg-white">
                <img 
                  src="/images/drilling-rig.jpg" 
                  alt="Contoocook Artesian Well Drilling Rig in NH" 
                  className="w-full h-auto max-w-full object-cover"
                />
                <div className="p-3 bg-[#E8DFE9] font-sans font-medium text-[11px] sm:text-xs text-[#172638]/80 border-t border-[#D5BBD3]">
                  Contoocook Artesian Well drilling rig on site.
                </div>
              </div>

              {/* Sister Company: Pats Peak Ski Area Banner */}
              <div className="bg-white p-4 rounded-xl border border-[#D5BBD3] flex items-center justify-between gap-3 shadow-2xs">
                <div>
                  <span className="font-sans font-semibold text-[10px] uppercase tracking-wider text-[#172638]/70 block">Sister Company</span>
                  <p className="font-serif font-bold text-xs sm:text-sm text-[#172638]">Pats Peak Ski Area, Henniker, NH</p>
                </div>
                <img 
                  src="/logos/pats-peak-logo.png" 
                  alt="Sister Company in New Hampshire" 
                  className="h-10 sm:h-12 w-auto object-contain bg-white p-1 rounded border border-[#D5BBD3]"
                />
              </div>
            </div>

          </div>
        </section>

        <hr className="border-[#D5BBD3]" />

        {/* 2. Pump Services */}
        <section id="pumpservices" className="scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#D5BBD3] space-y-3 sm:space-y-4 shadow-sm">
                <h3 className="font-serif font-bold text-[#172638] text-base sm:text-lg uppercase tracking-wide border-b border-[#D5BBD3] pb-2">
                  Why Choose Us to Install Your Well Pump?
                </h3>
                <ul className="space-y-2.5 sm:space-y-3 font-sans font-normal text-xs sm:text-sm text-[#172638]/80">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#6E2C6B] shrink-0 mt-0.5" />
                    <span>Contoocook Well has been installing pumps for more than 55 years. Our reputation for doing a good job is well established in Southern New Hampshire. Our family name is on every pump installation.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#6E2C6B] shrink-0 mt-0.5" />
                    <span>Our service techs are available 7 days a week. Someone is always on call to come to your home, every day of the week.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#6E2C6B] shrink-0 mt-0.5" />
                    <span>The pumps and components you need are in stock at our shop in Henniker. We keep a huge inventory so our customers don't have to wait. If you need it, we have it.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#6E2C6B] shrink-0 mt-0.5" />
                    <span>You'll find a real person on the line when you need service. No leaving messages or waiting in frustration.</span>
                  </li>
                </ul>

                {onOpenCoupon && (
                  <div className="pt-2">
                    <button
                      onClick={onOpenCoupon}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-[#002D55] hover:bg-[#16466F] text-white font-sans font-semibold rounded-xl text-xs uppercase tracking-wider transition-colors shadow-2xs cursor-pointer border border-[#16466F]"
                    >
                      <Tag className="w-4 h-4 text-[#D5BBD3] shrink-0" />
                      <span>Use $50 Off Coupon on Pump Installation</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 sm:space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 font-sans font-semibold text-xs uppercase tracking-wider text-[#172638] bg-[#E8DFE9] border border-[#D5BBD3] px-3 py-1 rounded">
                <Phone className="w-3.5 h-3.5 shrink-0 text-[#6E2C6B]" />
                <span>On Call 7 Days a Week</span>
              </div>

              <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#172638] tracking-tight">
                Pump Services
              </h2>

              <h3 className="font-serif font-semibold text-lg sm:text-xl text-[#002D55] tracking-tight">
                Matching the right pump to your well
              </h3>

              <p className="font-sans font-normal text-sm sm:text-base text-[#172638]/80 leading-relaxed">
                When drilling is complete, we promptly install a submersible pump system that meets the demands of your home for water. The pump is connected to a water tank assembly that regulates the flow of water into your home or business.
              </p>

              <p className="font-sans font-normal text-sm sm:text-base text-[#172638]/80 leading-relaxed">
                Our pumps maintain proper pressure to keep the flow steady and predictable. When the need for pump service arises, we are at your service 7 days a week. Our service staff will be at your home quickly. We will gladly install the pump you need.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#6E2C6B] hover:bg-[#854B82] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all space-x-2 text-center"
                >
                  <span>Click here for a FREE CONSULTATION</span>
                  <ArrowRight className="w-4 h-4 text-white shrink-0" />
                </Link>

                <a
                  href={`tel:${siteData.company.phoneClean}`}
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-[#002D55] hover:bg-[#16466F] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors space-x-2 text-center border border-[#16466F]"
                >
                  <Phone className="w-4 h-4 fill-white shrink-0" />
                  <span>Call 603-428-6060</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        <hr className="border-[#D5BBD3]" />

        {/* 3. Water Testing & Filtration */}
        <section id="watertesting" className="scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center space-x-2 font-sans font-semibold text-xs uppercase tracking-wider text-[#172638] bg-[#E8DFE9] border border-[#D5BBD3] px-3 py-1 rounded">
                <Droplet className="w-3.5 h-3.5 shrink-0 text-[#6E2C6B]" />
                <span>Water Quality Solutions</span>
              </div>

              <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#172638] tracking-tight">
                Water Testing & Filtration
              </h2>

              <p className="font-sans font-normal text-sm sm:text-base text-[#172638]/80 leading-relaxed">
                We offer water testing and a variety of water filtration systems to remove undesirable, unhealthy, and unsafe minerals and contaminants from your water.
              </p>

              <p className="font-sans font-normal text-sm sm:text-base text-[#172638]/80 leading-relaxed">
                Arsenic, radon, extremely high acidity and iron are common problems in New Hampshire drinking water. The only way to be safe is to be sure. Have your water tested yearly. We test the water at your home or with a State of New Hampshire certified lab to identify the contaminants and mineral problems of your particular water source.
              </p>

              <p className="font-sans font-normal text-sm sm:text-base text-[#172638]/80 leading-relaxed">
                The lab results from your water test will guide us to one of several filtration systems, if needed. All of our systems are custom made for each home, ensuring the perfect fix.
              </p>

              <div className="bg-[#E8DFE9] p-5 rounded-xl border border-[#D5BBD3]">
                <h4 className="font-serif font-bold text-[#172638] text-sm sm:text-base tracking-tight mb-2">
                  Common Water Problems
                </h4>
                <p className="font-sans font-semibold text-xs sm:text-sm text-[#172638] leading-relaxed mb-2">
                  Bad taste or odor? Stains in sinks and toilets, fixtures and clothes? Wondering about arsenic? Radon? Low water pressure?
                </p>
                <p className="font-sans font-normal text-xs sm:text-sm text-[#172638]/80 leading-relaxed">
                  A glass of water looks so clear and pure. But often, it's hiding certain contaminants and minerals that affect its taste, odor, health value, or can be corrosive to your home's plumbing and heating systems.
                </p>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#6E2C6B] hover:bg-[#854B82] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all space-x-2 text-center"
                >
                  <span>Click here for a WATER TESTING & FILTRATION CONSULTATION</span>
                  <ArrowRight className="w-4 h-4 text-white shrink-0" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#D5BBD3] bg-white">
                <img 
                  src="/images/water-work.jpg" 
                  alt="Water testing and filtration services in NH" 
                  className="w-full h-auto max-w-full object-cover"
                />
                <div className="p-3 bg-[#E8DFE9] font-sans font-medium text-[11px] sm:text-xs text-[#172638]/80 border-t border-[#D5BBD3]">
                  Custom water filtration and testing for New Hampshire homes.
                </div>
              </div>
            </div>

          </div>
        </section>

        <hr className="border-[#D5BBD3]" />

        {/* 4. Hydrofracking Services */}
        <section id="hydrofracking" className="scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-5">
              <div className="bg-[#002D55] text-white rounded-2xl p-6 sm:p-7 border border-[#16466F] space-y-4 shadow-md">
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  99% of the time,
                </h3>
                <p className="font-sans font-medium text-sm text-[#D5BBD3]">
                  wells begin producing more water after hydrofracking.
                </p>

                <div className="pt-3 border-t border-[#16466F]">
                  <blockquote className="font-serif italic font-medium text-sm text-[#C5D6E4]">
                    "{siteData.testimonials.home.quote}"
                  </blockquote>
                  <p className="text-right font-sans font-bold text-xs text-[#D5BBD3] mt-2">
                    — {siteData.testimonials.home.author}, {siteData.testimonials.home.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center space-x-2 font-sans font-semibold text-xs uppercase tracking-wider text-[#172638] bg-[#E8DFE9] border border-[#D5BBD3] px-3 py-1 rounded">
                <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#6E2C6B]" />
                <span>Well Yield Enhancement</span>
              </div>

              <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#172638] tracking-tight">
                Hydrofracking Services
              </h2>

              <p className="font-sans font-normal text-sm sm:text-base text-[#172638]/80 leading-relaxed">
                99% of the time, wells begin producing more water after hydrofracking.
              </p>

              <p className="font-sans font-normal text-sm sm:text-base text-[#172638]/80 leading-relaxed">
                Our hydrofracking services result in wells that begin producing more water 99% of the time. This method is sometimes used to increase the water from a newly drilled well. Hydrofracking is also potentially an alternative to well deepening, when an existing well is diminishing in volume.
              </p>

              <div className="space-y-3 pt-1">
                <div className="bg-white p-4 rounded-xl border border-[#D5BBD3]">
                  <h4 className="font-serif font-bold text-[#172638] text-sm sm:text-base tracking-tight">
                    Would hydrofracking help my existing well that doesn't produce a lot of water?
                  </h4>
                  <p className="font-sans font-normal text-xs sm:text-sm text-[#172638]/80 mt-1 leading-relaxed">
                    Yes. Hydrofracking is used to cultivate water from new wells and old wells that may be affected by minerals and incrusted rock fractures.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#D5BBD3]">
                  <h4 className="font-serif font-bold text-[#172638] text-sm sm:text-base tracking-tight">
                    How will this process benefit me?
                  </h4>
                  <p className="font-sans font-normal text-xs sm:text-sm text-[#172638]/80 mt-1 leading-relaxed">
                    The process almost always increases the volume of water from a well and is less expensive than drilling a new well or deepening and existing well. Hydrofracking is an excellent option for wells that have historically produced more water but are losing capacity.
                  </p>
                </div>
              </div>

              <div className="pt-1">
                <a 
                  href="/documents/Well-Development-by-Hydrofracture-NHDES.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-sans font-semibold text-xs sm:text-sm text-[#172638] hover:text-[#6E2C6B] underline break-words"
                >
                  <Download className="w-4 h-4 mr-1.5 shrink-0 text-[#6E2C6B]" />
                  <span>Learn more about Well Development by Hydrofracture from the NH Department of Environmental Services.</span>
                </a>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#6E2C6B] hover:bg-[#854B82] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all space-x-2 text-center"
                >
                  <span>Click here for a FREE HYDROFRACKING CONSULTATION</span>
                  <ArrowRight className="w-4 h-4 text-white shrink-0" />
                </Link>
              </div>
            </div>

          </div>
        </section>

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