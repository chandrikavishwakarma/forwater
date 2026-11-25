import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Tag } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Header({ onOpenCoupon }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll listener for sticky/fixed header styling & announcement bar hide
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname, location.hash]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navRoutes = [
    {
      label: "Services",
      path: "/services",
      hasSubmenu: true,
      submenu: [
        { label: "Well Drilling", path: "/services#welldrilling" },
        { label: "Pump Services", path: "/services#pumpservices" },
        { label: "Water Testing & Filtration", path: "/services#watertesting" },
        { label: "Hydrofracking Services", path: "/services#hydrofracking" }
      ]
    },
    { label: "No Water or Pressure?", path: "/no-water-or-pressure" },
    { label: "Our History", path: "/history" },
    { label: "Contact", path: "/contact" },
    { label: "Resources", path: "/resources" },
    { label: "Open Positions", path: "/open-positions" }
  ];

  return (
    <>
      {/* Fixed Header Wrapper across all routes */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 font-sans">

        {/* 1. Top Announcement Bar in Deep Navy #000F26 with Light Agua #A4DEF3 accent */}
        <div
          className={`bg-[#000F26] text-[#A4DEF3] text-xs sm:text-[13px] font-medium text-center tracking-wide overflow-hidden transition-all duration-300 ease-in-out border-b border-[#041B3B] ${
            isScrolled
              ? 'max-h-0 opacity-0 -translate-y-full py-0 pointer-events-none'
              : 'max-h-16 opacity-100 translate-y-0 py-2 px-4 shadow-xs'
          }`}
        >
          <div className="max-w-[1440px] mx-auto flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AAD651] shrink-0 animate-pulse"></span>
            <span className="text-white font-semibold">Serving Southern & Central NH Since 1936</span>
            <span className="hidden sm:inline text-[#61AFCD]">•</span>
            <span className="hidden sm:inline text-[#E2EFF3]">7 Days a Week Well & Pump Service</span>
            <span className="hidden md:inline text-[#61AFCD]">•</span>
            <a href="tel:6034286060" className="text-[#AAD651] hover:underline font-bold">
              Call 603-428-6060
            </a>
          </div>
        </div>

        {/* 2. Main Navigation Header in HydroLOGICA Modern Crisp White / Frosted Glass */}
        <header 
          className={`w-full transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md border-b border-[#E2EFF3] ${
            isScrolled ? 'shadow-md py-2.5 sm:py-3 bg-white/98' : 'py-3.5 sm:py-4'
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-4">

            {/* Company Logo on Left */}
            <Link
              to="/"
              className="flex items-center text-[#000F26] no-underline shrink-0 group py-0.5"
              aria-label="Contoocook Artesian Well Company Home"
            >
              <img
                src="/logos/logo.png"
                alt="Contoocook Artesian Well Co logo"
                className="h-9 sm:h-10 md:h-11 lg:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Links on Right */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-sans">
              {navRoutes.map((item, idx) => {
                if (item.hasSubmenu) {
                  return (
                    <div
                      key={idx}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `inline-flex items-center text-[15px] font-semibold transition-colors whitespace-nowrap py-1.5 ${
                            isActive
                              ? 'text-[#000F26] border-b-2 border-[#00A8EB]'
                              : 'text-[#000F26]/80 hover:text-[#00A8EB]'
                          }`
                        }
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 ml-1 transition-transform group-hover:rotate-180 text-[#1D7FA7]" />
                      </NavLink>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl py-2 border border-[#E2EFF3] z-50 animate-in fade-in slide-in-from-top-1 text-[#000F26] font-sans">
                          {item.submenu.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              to={sub.path}
                              className="block px-4 py-2.5 text-sm text-[#000F26]/85 hover:bg-[#E2EFF3] hover:text-[#00A8EB] font-medium border-b border-[#E2EFF3]/60 last:border-b-0 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={idx}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-[15px] font-semibold transition-colors whitespace-nowrap py-1.5 ${
                        isActive
                          ? 'text-[#000F26] border-b-2 border-[#00A8EB]'
                          : 'text-[#000F26]/80 hover:text-[#00A8EB]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              })}

              {/* HydroLOGICA Signature Lime CTA Button */}
              <a
                href="tel:6034286060"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#AAD651] hover:bg-[#98C244] text-[#191919] font-sans font-bold text-sm sm:text-[15px] rounded-full transition-all shadow-sm hover:scale-105 active:scale-95 shrink-0"
              >
                <Phone className="w-4 h-4 fill-[#191919] text-[#191919]" />
                <span>603-428-6060</span>
              </a>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:6034286060"
                className="px-4 py-2 bg-[#AAD651] hover:bg-[#98C244] text-[#191919] font-sans font-bold text-xs rounded-full shrink-0 transition-all active:scale-95 shadow-xs flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 fill-[#191919] text-[#191919]" />
                <span>Call</span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#000F26] hover:text-[#00A8EB] hover:bg-[#E2EFF3] focus:outline-none transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div
              className={`lg:hidden fixed inset-x-0 bottom-0 z-50 bg-[#000F26]/60 backdrop-blur-xs flex flex-col justify-start transition-all duration-300 ${
                isScrolled ? 'top-[58px] sm:top-[66px]' : 'top-[96px] sm:top-[104px]'
              }`}
            >
              <div className="bg-white border-b border-[#E2EFF3] shadow-2xl px-6 pt-4 pb-8 space-y-2 max-h-[80vh] overflow-y-auto text-[#000F26] font-sans">

                {navRoutes.map((item, idx) => {
                  if (item.hasSubmenu) {
                    return (
                      <div key={idx} className="border-b border-[#E2EFF3] pb-1">
                        <div className="flex items-center justify-between py-2.5 font-semibold text-base text-[#000F26]">
                          <Link
                            to={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="grow text-[#000F26] hover:text-[#00A8EB]"
                          >
                            {item.label}
                          </Link>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setServicesDropdownOpen(!servicesDropdownOpen);
                            }}
                            className="p-1.5 text-[#1D7FA7]"
                            aria-label="Toggle services list"
                          >
                            <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                          </button>
                        </div>

                        {servicesDropdownOpen && (
                          <div className="pl-4 space-y-1 bg-[#E2EFF3]/60 py-2 rounded-xl mb-1 border border-[#A4DEF3]">
                            {item.submenu.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                to={sub.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-2 px-3 text-sm text-[#000F26] hover:text-[#00A8EB] font-medium"
                              >
                                • {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <NavLink
                      key={idx}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `block py-2.5 text-base font-semibold transition-colors border-b border-[#E2EFF3] ${
                          isActive ? 'text-[#00A8EB] font-bold bg-[#E2EFF3]/60 px-3 rounded-xl' : 'text-[#000F26] hover:text-[#00A8EB]'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  );
                })}

                {/* Mobile Call CTA Button in Signature Lime */}
                <div className="pt-4 space-y-2">
                  <a
                    href="tel:6034286060"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#AAD651] hover:bg-[#98C244] text-[#191919] font-sans font-bold text-base rounded-full shadow-md text-center transition-all active:scale-95"
                  >
                    <Phone className="w-5 h-5 fill-[#191919] text-[#191919]" />
                    <span>Call 603-428-6060 (7 Days)</span>
                  </a>

                  {onOpenCoupon && (
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenCoupon();
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-[#E2EFF3] hover:bg-[#A4DEF3] text-[#000F26] font-sans font-semibold text-sm rounded-full transition-colors cursor-pointer border border-[#1D7FA7]/20"
                    >
                      <Tag className="w-4 h-4 text-[#00A8EB]" />
                      <span>$50 Off Coupon Voucher</span>
                    </button>
                  )}
                </div>

              </div>
            </div>
          )}

        </header>

      </div>

      {/* Spacer to guarantee no page content is hidden behind the fixed header */}
      <div className="h-[96px] sm:h-[104px] w-full shrink-0" aria-hidden="true" />
    </>
  );
}
