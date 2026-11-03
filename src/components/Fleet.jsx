import React from 'react';
import { FLEET_LIST, BUSINESS_INFO } from '../data/travelData';
import VehicleCard from './VehicleCard';
import { ShieldCheck } from 'lucide-react';

export const Fleet = () => {
  return (
    <section id="fleet" className="section-padding fleet-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag section-tag--accent">Chauffeur-Driven Vehicles</span>
          <h2 className="section-title">Our Fleet of Cars</h2>
          <p className="section-desc">
            Explore our fleet of well-maintained, sanitized, and air-conditioned cars driven by verified professional chauffeurs. All vehicles are available across our tour packages, airport transfers, and local city services.
          </p>
        </div>

        <div className="fleet-grid">
          {FLEET_LIST.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        {/* Fleet Package Integration Banner */}
        <div className="fleet-disclaimer-card">
          <ShieldCheck size={24} className="fleet-disclaimer-icon text-sky-700" />
          <div className="fleet-disclaimer-text">
            <strong>Package-Based Pricing Structure:</strong> Every Shakti Travels vehicle is offered with transparent package pricing tailored to your chosen destination, duration, and itinerary. To view specific vehicle pricing for Srisailam, Hyderabad City, Yadagirigutta, and hourly rentals, explore our <a href="#packages" className="text-sky-800 font-bold underline">Tour Packages Section</a> or speak to us directly on WhatsApp.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
