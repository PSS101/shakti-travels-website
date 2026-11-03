import React from 'react';
import { Users, CheckCircle2, MessageCircle, Sparkles, Briefcase, Wind } from 'lucide-react';
import { getWhatsAppUrl } from '../data/travelData';
import { VehicleVisual } from './vehicles/VehicleVisual';

export const VehicleCard = ({ vehicle }) => {
  return (
    <article className="vehicle-card group">
      {vehicle.isPopular && (
        <div className="vehicle-card-popular-badge">
          <Sparkles size={14} />
          <span>Most Popular</span>
        </div>
      )}

      {/* Visual Vehicle Image / Graphic */}
      <div className="vehicle-image-wrapper">
        <VehicleVisual vehicle={vehicle} />
      </div>

      <div className="vehicle-body">
        <span className="vehicle-category-sub">{vehicle.category}</span>
        <h3 className="vehicle-title">{vehicle.name}</h3>

        {/* Capacity & Comfort Specs Row (No Standalone Per-KM Rate) */}
        <div className="vehicle-specs-grid">
          <div className="spec-item">
            <Users size={16} className="text-sky-700" />
            <div className="spec-info">
              <span className="spec-label">Capacity</span>
              <span className="spec-val">{vehicle.seating}</span>
            </div>
          </div>

          <div className="spec-item">
            <Briefcase size={16} className="text-amber-600" />
            <div className="spec-info">
              <span className="spec-label">Luggage</span>
              <span className="spec-val">{vehicle.luggage}</span>
            </div>
          </div>

          <div className="spec-item col-span-2">
            <Wind size={16} className="text-emerald-600" />
            <div className="spec-info">
              <span className="spec-label">Air Conditioning</span>
              <span className="spec-val">{vehicle.acType}</span>
            </div>
          </div>
        </div>

        {/* Feature List */}
        <ul className="vehicle-features-list">
          {vehicle.highlights.map((feature, idx) => (
            <li key={idx} className="vehicle-feature-item">
              <CheckCircle2 size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Ideal For note */}
        <div className="vehicle-ideal-for">
          <strong>Best For:</strong> {vehicle.idealFor}
        </div>

        {/* Action Button: Enquire on WhatsApp */}
        <div className="vehicle-cta-wrap">
          <a
            href={getWhatsAppUrl(vehicle.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp w-full"
            aria-label={`Enquire on WhatsApp about ${vehicle.name} (${vehicle.seating})`}
          >
            <MessageCircle size={18} />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default VehicleCard;
