import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertTriangle, 
  Building,
  Tag
} from 'lucide-react';
import { siteData } from '../data/siteData';

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
            CONTACT US
          </h1>
          <p className="mt-3 font-sans font-normal text-base sm:text-lg lg:text-xl text-[#C5D6E4] max-w-2xl leading-relaxed">
            Emergency Water Service for Southern NH • 603-428-6060
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
        
        {/* Top Emergency Highlight (Deep Navy #002D55 background with Plum accent) */}
        <div className="bg-[#002D55] text-white border border-[#16466F] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-[#D5BBD3] font-sans font-bold text-xs uppercase tracking-wider bg-[#16466F] px-3.5 py-1.5 rounded-lg border border-[#477397]">
              <AlertTriangle className="w-4 h-4 shrink-0 text-[#D5BBD3]" />
              <span>Emergency Water Service for Southern NH</span>
            </div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
              When you need emergency water service, Contoocook Artesian Well Company is the first and only number to call.
            </h2>
            <p className="font-sans font-normal text-xs sm:text-sm text-[#C5D6E4] max-w-2xl leading-relaxed">
              Don't call the plumber if there's no water coming from the faucet and your house is served by a water well. In all likelihood, the issue is the submersible pump system which brings water from the well into the home. Diagnosing pump problems and getting your water running again is our specialty.
            </p>
            <p className="font-sans font-bold text-sm text-[#D5BBD3]">
              We're the first and only number to call: 603-428-6060
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${siteData.company.phoneClean}`}
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#6E2C6B] hover:bg-[#854B82] text-white font-sans font-bold text-sm uppercase tracking-wider rounded-xl shadow-sm transition-all space-x-2 text-center"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-white shrink-0" />
              <span>Call 603-428-6060</span>
            </a>

            {onOpenCoupon && (
              <button
                onClick={onOpenCoupon}
                className="inline-flex items-center justify-center px-5 py-3.5 bg-[#16466F] hover:bg-[#1f5a8c] text-white border border-[#477397] font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-colors space-x-2 text-center cursor-pointer"
              >
                <Tag className="w-4 h-4 text-[#D5BBD3] shrink-0" />
                <span>$50 Off Coupon</span>
              </button>
            )}
          </div>
        </div>

        {/* Two-Column: Contact Details & Interactive Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-[#D5BBD3] rounded-2xl p-6 sm:p-7 shadow-xs space-y-6">
              <h3 className="font-serif font-bold text-2xl text-[#172638] tracking-tight border-b border-[#D5BBD3] pb-3">
                Company Contact Details
              </h3>

              <div className="space-y-5 font-sans">
                {/* Phone */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E8DFE9] flex items-center justify-center shrink-0 mt-0.5 border border-[#D5BBD3]">
                    <Phone className="w-5 h-5 text-[#6E2C6B]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#172638]/70 tracking-wider block">Call 7 Days a Week</span>
                    <a href={`tel:${siteData.company.phoneClean}`} className="font-serif font-bold text-xl text-[#172638] hover:text-[#6E2C6B] transition-colors">
                      {siteData.company.phone}
                    </a>
                    <p className="text-xs text-[#172638]/75 mt-0.5">Technicians on call 7 days a week for out-of-water emergencies.</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E8DFE9] flex items-center justify-center shrink-0 mt-0.5 border border-[#D5BBD3]">
                    <Mail className="w-5 h-5 text-[#6E2C6B]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#172638]/70 tracking-wider block">Email Inquiries</span>
                    <a href={`mailto:${siteData.company.email}`} className="font-sans font-semibold text-base text-[#172638] hover:text-[#6E2C6B] transition-colors underline">
                      {siteData.company.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E8DFE9] flex items-center justify-center shrink-0 mt-0.5 border border-[#D5BBD3]">
                    <MapPin className="w-5 h-5 text-[#6E2C6B]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#172638]/70 tracking-wider block">Main Shop & Office</span>
                    <p className="font-sans font-medium text-sm text-[#172638]">
                      {siteData.company.address.street}<br />
                      {siteData.company.address.poBox}<br />
                      {siteData.company.address.city}, {siteData.company.address.state} {siteData.company.address.zip}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E8DFE9] flex items-center justify-center shrink-0 mt-0.5 border border-[#D5BBD3]">
                    <Clock className="w-5 h-5 text-[#6E2C6B]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#172638]/70 tracking-wider block">Hours of Operation</span>
                    <p className="font-sans font-semibold text-sm text-[#172638]">
                      7 Days a Week Service
                    </p>
                    <p className="text-xs text-[#172638]/75">Regular hours and 24/7 out-of-water emergency response.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Service Area Card */}
            <div className="bg-[#E8DFE9] border border-[#D5BBD3] rounded-2xl p-6 shadow-xs">
              <h4 className="font-serif font-bold text-lg text-[#172638] mb-2 tracking-tight">
                Service Area
              </h4>
              <p className="font-sans font-normal text-xs sm:text-sm text-[#172638]/80 leading-relaxed">
                Serving southern and central New Hampshire including Concord, Manchester, Henniker, Hopkinton, Hillsboro, Weare, Warner, Bow, Dunbarton, Goffstown, Deering, and surrounding communities.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#D5BBD3] rounded-2xl p-7 sm:p-9 shadow-sm">
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#172638] mb-2 tracking-tight">
                Send Us a Message
              </h3>
              <p className="font-sans font-normal text-xs sm:text-sm text-[#172638]/80 mb-6">
                Fill out the form below and one of our groundwater specialists will contact you promptly.
              </p>

              {submitted ? (
                <div className="bg-[#E8DFE9] border border-[#D5BBD3] rounded-xl p-6 text-center space-y-3 animate-in fade-in">
                  <CheckCircle className="w-12 h-12 text-[#6E2C6B] mx-auto" />
                  <h4 className="font-serif font-bold text-xl text-[#172638]">Message Sent Successfully!</h4>
                  <p className="font-sans font-normal text-sm text-[#172638]/80 max-w-md mx-auto">
                    Thank you for reaching out. We have received your request and will get back to you shortly. For immediate emergency water service, please call <strong>603-428-6060</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', service: 'Emergency No Water', message: '' });
                    }}
                    className="inline-block mt-3 px-5 py-2.5 bg-[#002D55] text-white rounded-xl text-xs uppercase tracking-wider font-bold hover:bg-[#16466F] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#172638] uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="First & Last Name"
                      className={`w-full px-4 py-3 rounded-xl border bg-[#F8F7F9] text-[#172638] text-sm focus:outline-none focus:ring-2 focus:ring-[#6E2C6B] focus:border-[#6E2C6B] transition-colors ${
                        errors.name ? 'border-red-500' : 'border-[#D5BBD3]'
                      }`}
                    />
                    {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#172638] uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className={`w-full px-4 py-3 rounded-xl border bg-[#F8F7F9] text-[#172638] text-sm focus:outline-none focus:ring-2 focus:ring-[#6E2C6B] focus:border-[#6E2C6B] transition-colors ${
                          errors.email ? 'border-red-500' : 'border-[#D5BBD3]'
                        }`}
                      />
                      {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#172638] uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="603-xxx-xxxx"
                        className={`w-full px-4 py-3 rounded-xl border bg-[#F8F7F9] text-[#172638] text-sm focus:outline-none focus:ring-2 focus:ring-[#6E2C6B] focus:border-[#6E2C6B] transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-[#D5BBD3]'
                        }`}
                      />
                      {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#172638] uppercase tracking-wider mb-1">
                      Service Requested
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D5BBD3] bg-[#F8F7F9] text-[#172638] text-sm focus:outline-none focus:ring-2 focus:ring-[#6E2C6B] focus:border-[#6E2C6B] transition-colors"
                    >
                      <option value="Emergency No Water">Emergency No Water Service</option>
                      <option value="Low Water Pressure">Low Water Pressure Issue</option>
                      <option value="Well Drilling">New Artesian Well Drilling</option>
                      <option value="Pump Replacement">Pump Replacement / Tank Service</option>
                      <option value="Water Testing">Water Testing & Filtration</option>
                      <option value="Hydrofracking">Hydrofracking Yield Improvement</option>
                      <option value="General Question">General Inquiry / Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#172638] uppercase tracking-wider mb-1">
                      Message / Description of Issue *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your well, pump, or water issue..."
                      className={`w-full px-4 py-3 rounded-xl border bg-[#F8F7F9] text-[#172638] text-sm focus:outline-none focus:ring-2 focus:ring-[#6E2C6B] focus:border-[#6E2C6B] transition-colors ${
                        errors.message ? 'border-red-500' : 'border-[#D5BBD3]'
                      }`}
                    ></textarea>
                    {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-[#6E2C6B] hover:bg-[#854B82] text-white font-sans font-bold text-sm uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}

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