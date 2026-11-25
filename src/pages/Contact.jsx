import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  Building,
  Tag,
  ArrowRight
} from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact({ onOpenCoupon }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Emergency No Water',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Please enter your phone number';
    if (!formData.message.trim()) errs.message = 'Please enter a message or description of your issue';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

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
            <span>Contoocook Artesian Well Company • Live Dispatch</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Contact Our <span className="text-[#00A8EB]">Water Team</span>
          </h1>

          <p className="mt-4 font-sans font-normal text-base sm:text-lg lg:text-xl text-[#E2EFF3]/90 max-w-2xl leading-relaxed">
            Emergency Water Service for Southern & Central NH • 603-428-6060
          </p>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-24 space-y-16 sm:space-y-20">
        
        {/* Top Emergency Highlight Box */}
        <ScrollReveal delay={0}>
          <div className="bg-[#000F26] text-white border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-4 text-center lg:text-left max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[#AAD651] font-heading font-bold text-xs uppercase tracking-wider bg-white/10 px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#AAD651] animate-pulse"></span>
                <span>Emergency Water Service for Southern NH</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                When you need emergency water service, Contoocook Artesian Well is the first and only number to call.
              </h2>
              <p className="font-sans font-normal text-sm sm:text-base text-[#E2EFF3]/80 leading-relaxed">
                Don't call the plumber if there's no water coming from the faucet and your house is served by a water well. In all likelihood, the issue is the submersible pump system which brings water from the well into the home. Diagnosing pump problems and getting your water running again is our specialty.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <a
                href={`tel:${siteData.company.phoneClean}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#AAD651] hover:bg-[#bce468] text-[#191919] font-heading font-bold text-base rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 duration-200"
              >
                <Phone className="w-5 h-5 fill-[#191919] text-[#191919]" />
                <span>Call 603-428-6060</span>
              </a>

              {onOpenCoupon && (
                <button
                  onClick={onOpenCoupon}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 text-white border border-[#00A8EB]/40 font-heading font-bold text-sm rounded-full backdrop-blur-md transition-all cursor-pointer"
                >
                  <Tag className="w-4 h-4 text-[#00A8EB]" />
                  <span>$50 Off Coupon</span>
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Two-Column: Contact Details & Interactive Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Info Cards */}
          <ScrollReveal delay={0} className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E2EFF3] rounded-3xl p-8 shadow-xs space-y-6">
              <h3 className="font-heading font-extrabold text-2xl text-[#000F26] tracking-tight border-b border-[#E2EFF3] pb-4">
                Company Contact Details
              </h3>

              <div className="space-y-6 font-sans">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#E2EFF3] text-[#00A8EB] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#00A8EB] tracking-wider block mb-1">Call 7 Days a Week</span>
                    <a href={`tel:${siteData.company.phoneClean}`} className="font-heading font-extrabold text-2xl text-[#000F26] hover:text-[#00A8EB] transition-colors">
                      {siteData.company.phone}
                    </a>
                    <p className="text-xs text-[#191919]/70 mt-1">Technicians on call 7 days a week for out-of-water emergencies.</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#E2EFF3] text-[#00A8EB] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#00A8EB] tracking-wider block mb-1">Email Inquiries</span>
                    <a href={`mailto:${siteData.company.email}`} className="font-heading font-bold text-base text-[#000F26] hover:text-[#00A8EB] transition-colors underline">
                      {siteData.company.email}
                    </a>
                    <p className="text-xs text-[#191919]/70 mt-1">Non-emergency questions, estimates, and billing.</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#E2EFF3] text-[#00A8EB] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#00A8EB] tracking-wider block mb-1">Location & Shop</span>
                    <p className="font-sans font-medium text-sm text-[#000F26] leading-relaxed">
                      {siteData.company.address.street}, {siteData.company.address.city}, {siteData.company.address.state} {siteData.company.address.zip}
                    </p>
                    <p className="text-xs text-[#191919]/70 mt-0.5">Mailing Address: {siteData.company.address.poBox}, {siteData.company.address.city}, {siteData.company.address.state}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#E2EFF3] text-[#00A8EB] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#00A8EB] tracking-wider block mb-1">Hours of Operation</span>
                    <p className="font-heading font-bold text-sm text-[#000F26]">
                      Emergency Service: 7 Days a Week
                    </p>
                    <p className="text-xs text-[#191919]/70 mt-0.5">Office: Mon – Fri 8:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Contact & Free Estimate Form */}
          <ScrollReveal delay={120} className="lg:col-span-7">
            <div className="bg-white border border-[#E2EFF3] rounded-3xl p-8 sm:p-10 shadow-xs">
              <h3 className="font-heading font-extrabold text-2xl text-[#000F26] tracking-tight mb-2">
                Request Service or Free Cost Estimate
              </h3>
              <p className="font-sans text-sm text-[#191919]/70 mb-6">
                Fill out the form below and our team will get back to you promptly.
              </p>

              {submitted ? (
                <div className="bg-[#E2EFF3] border border-[#00A8EB] rounded-2xl p-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#AAD651] mx-auto" />
                  <h4 className="font-heading font-bold text-xl text-[#000F26]">Message Received!</h4>
                  <p className="font-sans text-sm text-[#191919]/80 max-w-md mx-auto">
                    Thank you for contacting Contoocook Artesian Well Company. One of our specialists will respond shortly. For immediate emergency service, please call us directly.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`tel:${siteData.company.phoneClean}`}
                      className="inline-flex items-center gap-2 font-heading font-bold text-[#00A8EB] hover:underline"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{siteData.company.phone}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-heading font-bold text-[#000F26] uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3.5 rounded-2xl border ${errors.name ? 'border-red-500' : 'border-[#E2EFF3]'} focus:outline-hidden focus:border-[#00A8EB] font-sans text-sm`}
                    />
                    {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-heading font-bold text-[#000F26] uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3.5 rounded-2xl border ${errors.email ? 'border-red-500' : 'border-[#E2EFF3]'} focus:outline-hidden focus:border-[#00A8EB] font-sans text-sm`}
                      />
                      {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold text-[#000F26] uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="603-555-0123"
                        className={`w-full px-4 py-3.5 rounded-2xl border ${errors.phone ? 'border-red-500' : 'border-[#E2EFF3]'} focus:outline-hidden focus:border-[#00A8EB] font-sans text-sm`}
                      />
                      {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold text-[#000F26] uppercase tracking-wider mb-2">
                      Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border border-[#E2EFF3] focus:outline-hidden focus:border-[#00A8EB] font-sans text-sm bg-white"
                    >
                      <option value="Emergency No Water">Emergency No Water</option>
                      <option value="Low Water Pressure">Low Water Pressure</option>
                      <option value="New Well Drilling">New Well Drilling</option>
                      <option value="Pump Replacement">Pump Replacement</option>
                      <option value="Water Testing & Filtration">Water Testing & Filtration</option>
                      <option value="Hydrofracking">Hydrofracking</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold text-[#000F26] uppercase tracking-wider mb-2">
                      Message / Issue Details *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your well, pump, or water issue..."
                      className={`w-full px-4 py-3.5 rounded-2xl border ${errors.message ? 'border-red-500' : 'border-[#E2EFF3]'} focus:outline-hidden focus:border-[#00A8EB] font-sans text-sm`}
                    />
                    {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#AAD651] hover:bg-[#bce468] text-[#191919] font-heading font-bold text-base rounded-full shadow-md transition-all transform hover:scale-[1.02] active:scale-95 duration-200 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#191919]" />
                    <span>Send Request for Estimate</span>
                  </button>
                </form>
              )}
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
