import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import TourPackages from './components/TourPackages';
import PackageDetailsModal from './components/PackageDetailsModal';
import Fleet from './components/Fleet';
import RentalTerms from './components/RentalTerms';
import Reviews from './components/Reviews';
import About from './components/About';
import RateCardPromo from './components/RateCardPromo';
import InstagramSection from './components/InstagramSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import { TOUR_PACKAGES } from './data/travelData';

function App() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleOpenPackage = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleClosePackage = () => {
    setSelectedPackage(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* 1. Sticky Navigation Header with smooth anchor links */}
      <Navbar />

      {/* Main Single-Page Content */}
      <main id="main-content" className="flex-grow">
        {/* 2. Hero Section with Top Featured Packages Spotlight */}
        <Hero onSelectPackage={handleOpenPackage} />

        {/* 3. Key Trust Badges */}
        <TrustStrip />

        {/* 4. Why Choose Us / Brand Story */}
        <About />

        {/* 5. Our Travel Services (6 cards with matching reference photos) */}
        <Services />

        {/* 6. Tour Packages with Interactive Vehicle Pricing & Category Tabs */}
        <TourPackages onSelectPackage={handleOpenPackage} />

        {/* 7. Chauffeur-Driven Fleet */}
        <Fleet />

        {/* 8. Rental Conditions & Terms */}
        <RentalTerms />

        {/* 9. Verified Customer Reviews */}
        <Reviews />

        {/* 10. Official Posters & Announcements */}
        <RateCardPromo />

        {/* 11. Official Instagram Community & Scannable QR Code */}
        <InstagramSection />

        {/* 12. Contact & Hotline Information */}
        <Contact />
      </main>

      {/* 12. Global Footer */}
      <Footer />

      {/* 13. Floating WhatsApp Direct Action Button */}
      <FloatingWhatsAppButton />

      {/* 14. Interactive Package Details & Vehicle-Wise Pricing Modal */}
      {selectedPackage && (
        <PackageDetailsModal
          pkg={selectedPackage}
          onClose={handleClosePackage}
        />
      )}
    </div>
  );
}

export default App;
