import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CouponModal from './components/CouponModal';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import NoWaterPressure from './pages/NoWaterPressure';
import History from './pages/History';
import Resources from './pages/Resources';
import OpenPositions from './pages/OpenPositions';
import Contact from './pages/Contact';

export default function App() {
  const [couponOpen, setCouponOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden text-[#000F26] selection:bg-[#00A8EB] selection:text-white bg-white font-sans">
        
        {/* Persistent Responsive Header */}
        <Header onOpenCoupon={() => setCouponOpen(true)} />

        {/* Main Content Area */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home onOpenCoupon={() => setCouponOpen(true)} />} />
            <Route path="/services" element={<Services onOpenCoupon={() => setCouponOpen(true)} />} />
            <Route path="/no-water-or-pressure" element={<NoWaterPressure onOpenCoupon={() => setCouponOpen(true)} />} />
            <Route path="/history" element={<History />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/open-positions" element={<OpenPositions />} />
            <Route path="/contact" element={<Contact onOpenCoupon={() => setCouponOpen(true)} />} />

            {/* Aliases for original Wix legacy routes */}
            <Route path="/copy-of-resources" element={<Navigate to="/open-positions" replace />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Persistent Responsive Footer */}
        <Footer onOpenCoupon={() => setCouponOpen(true)} />

        {/* Interactive $50 OFF Coupon Modal */}
        <CouponModal isOpen={couponOpen} onClose={() => setCouponOpen(false)} />

      </div>
    </Router>
  );
}
