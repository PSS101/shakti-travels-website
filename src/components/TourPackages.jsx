import React, { useState } from 'react';
import { TOUR_PACKAGES, BUSINESS_INFO, getWhatsAppUrl } from '../data/travelData';
import PackageCard from './PackageCard';
import { Compass, Sparkles, Shield, MessageCircle, Phone } from 'lucide-react';

export const TourPackages = ({ onSelectPackage }) => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Packages', count: TOUR_PACKAGES.length },
    { id: 'pilgrimage', label: 'Pilgrimage Tours', count: TOUR_PACKAGES.filter(p => p.category === 'pilgrimage').length },
    { id: 'city-tours', label: 'City Sightseeing', count: TOUR_PACKAGES.filter(p => p.category === 'city-tours').length },
    { id: 'hourly', label: 'Hourly Cab Rentals', count: TOUR_PACKAGES.filter(p => p.category === 'hourly').length }
  ];

  const filteredPackages = activeTab === 'all'
    ? TOUR_PACKAGES
    : TOUR_PACKAGES.filter(p => p.category === activeTab);

  return (
    <section id="packages" className="section-padding packages-section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <span className="section-tag section-tag--accent">
            <Compass size={14} className="text-amber-600 inline mr-1" />
            Curated Travel Itineraries
          </span>
          <h2 className="section-title">Our Tour Packages</h2>
          <p className="section-desc">
            Explore our confirmed tour packages and hourly cab rental options. Transparent, vehicle-specific package fares with verified chauffeurs, doorstep pickups, and sanitized air-conditioned cars.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="packages-filter-wrap">
          <div className="packages-tabs" role="tablist" aria-label="Tour Package Categories">
            {categories.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`package-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="tab-count-badge">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Package Cards Grid */}
        <div className="packages-grid">
          {filteredPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelect={onSelectPackage}
            />
          ))}
        </div>

        {/* Package Transparent Fare Guarantee Box */}
        <div className="packages-guarantee-banner">
          <div className="guarantee-icon-wrap" aria-hidden="true">
            <Shield size={24} className="text-sky-700" />
          </div>
          <div className="guarantee-text-wrap">
            <h4 className="guarantee-title">Transparent Package Pricing Guarantee</h4>
            <p className="guarantee-desc">
              All package prices are vehicle-specific and include vehicle usage, fuel, and dedicated driver service. For custom multi-day schedules, outstation routes, or temple pooja timings, contact our team directly on WhatsApp or telephone for an instant upfront quotation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
