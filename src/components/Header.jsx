import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Tag } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Header({ onOpenCoupon }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll listener for sticky/fixed header styling
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
      <div className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">

        {/* 1. Top Announcement Bar in Plum #6E2C6B */}
        <div className="bg-[#6E2C6B] text-white text-xs sm:text-sm font-sans font-semibold py-2 px-4 text-center tracking-wide shadow-xs">
          <div className="max-w-[1440px] mx-auto flex items-center justify-center gap-2">
            <span>Serving southern & central New Hampshire since 1936 • 7 days a week well & pump service • Call 603-428-6060</span>
          </div>
        </div>

        {/* 2. Main Navigation Header in Deep Navy #002D55 */}
        <header
          className={`w-full transition-all duration-300 ease-in-out bg-[#002D55] border-b border-[#16466F] ${isScrolled ? 'shadow-xl py-2.5 sm:py-3 bg-[#002D55]/98 backdrop-blur-md' : 'py-3 sm:py-4'
            }`}
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-4">

            {/* Company Logo & Name on Left */}
            <Link to="/" className="flex items-center gap-3 text-white no-underline shrink-0 group">
              <div className="bg-white rounded-lg p-1.5 flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
                <img
                  src="/logos/logo.png"
                  alt="Contoocook Artesian Well Co logo"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links on Right */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 font-sans">
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
                          `inline-flex items-center text-[15.5px] font-medium transition-colors whitespace-nowrap py-1.5 ${isActive
                            ? 'text-white font-bold border-b-2 border-[#A875A5]'
                            : 'text-[#D5BBD3] hover:text-white'
                          }`
                        }
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 ml-1 transition-transform group-hover:rotate-180 text-[#D5BBD3]" />
                      </NavLink>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute left-0 mt-1 w-64 bg-[#002D55] rounded-xl shadow-2xl py-2 border border-[#16466F] z-50 animate-in fade-in slide-in-from-top-1 text-white font-sans">
                          {item.submenu.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              to={sub.path}
                              className="block px-4 py-2.5 text-sm text-[#D5BBD3] hover:bg-[#16466F] hover:text-[#FFFFFF] font-medium border-b border-[#16466F]/40 last:border-b-0 transition-colors"
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
                      `text-[15.5px] font-medium transition-colors whitespace-nowrap py-1.5 ${isActive
                        ? 'text-white font-bold border-b-2 border-[#A875A5]'
                        : 'text-[#D5BBD3] hover:text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              })}

              {/* Plum Primary Call CTA Button matching #6E2C6B with hover #854B82 */}
              <a
                href="tel:6034286060"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#6E2C6B] hover:bg-[#854B82] text-white font-sans font-bold text-sm sm:text-[15px] rounded-xl transition-all shadow-sm active:scale-95 shrink-0"
              >
                <span>603-428-6060</span>
              </a>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:6034286060"
                className="px-3.5 py-1.5 bg-[#6E2C6B] hover:bg-[#854B82] text-white font-sans font-bold text-xs rounded-lg shrink-0 transition-colors"
              >
                Call
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#D5BBD3] hover:text-white hover:bg-[#16466F] focus:outline-none transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-x-0 top-[104px] bottom-0 z-50 bg-[#002D55]/85 backdrop-blur-xs flex flex-col justify-start">
              <div className="bg-[#002D55] border-b border-[#16466F] shadow-2xl px-6 pt-4 pb-8 space-y-2 max-h-[80vh] overflow-y-auto text-white font-sans">

                {navRoutes.map((item, idx) => {
                  if (item.hasSubmenu) {
                    return (
                      <div key={idx} className="border-b border-[#16466F] pb-1">
                        <div className="flex items-center justify-between py-2.5 font-semibold text-base text-[#D5BBD3]">
                          <Link
                            to={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="grow text-[#D5BBD3] hover:text-white"
                          >
                            {item.label}
                          </Link>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setServicesDropdownOpen(!servicesDropdownOpen);
                            }}
                            className="p-1.5 text-[#D5BBD3]"
                            aria-label="Toggle services list"
                          >
                            <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                          </button>
                        </div>

                        {servicesDropdownOpen && (
                          <div className="pl-4 space-y-1 bg-[#16466F] py-2 rounded-lg mb-1 border border-[#477397]/50">
                            {item.submenu.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                to={sub.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-2 px-3 text-sm text-[#D5BBD3] hover:text-white font-medium"
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
                        `block py-2.5 text-base font-medium transition-colors border-b border-[#16466F] ${isActive ? 'text-white font-bold bg-[#16466F]/40 px-2 rounded-lg' : 'text-[#D5BBD3] hover:text-white'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  );
                })}

                {/* Mobile $50 Coupon Trigger in Plum #6E2C6B */}
                {onOpenCoupon && (
                  <div className="pt-3">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenCoupon();
                      }}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-[#16466F] hover:bg-[#6E2C6B] text-[#F8F7F9] border border-[#477397] font-sans font-semibold rounded-xl text-sm uppercase tracking-wider shadow-sm transition-colors cursor-pointer"
                    >
                      <Tag className="w-4 h-4 text-[#D5BBD3]" />
                      <span>$50 Off Coupon</span>
                    </button>
                  </div>
                )}

                {/* Mobile Call CTA */}
                <div className="pt-2">
                  <a
                    href="tel:6034286060"
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-[#6E2C6B] hover:bg-[#854B82] text-white font-sans font-bold rounded-xl text-base tracking-wide shadow-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 shrink-0 fill-current" />
                    <span>Call 603-428-6060 (24/7)</span>
                  </a>
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
