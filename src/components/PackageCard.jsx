import React, { useState } from 'react';
import { Calendar, MapPin, Eye, MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../data/travelData';

export const PackageCard = ({ pkg, onSelect }) => {
  const [imgError, setImgError] = useState(false);
  const fallbackImage = "/images/reference/hero-banner-1.jpg";

  return (
    <article className="package-card group">
      {/* Cover Image & Badges */}
      <div
        className="package-img-wrap cursor-pointer"
        onClick={() => onSelect && onSelect(pkg)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSelect && onSelect(pkg);
        }}
        aria-label={`View details for ${pkg.title}`}
      >
        <img
          src={!imgError ? pkg.coverImage : fallbackImage}
          alt={pkg.title}
          className="package-img"
          loading="lazy"
          onError={() => setImgError(true)}
        />
        <div className="package-img-overlay"></div>

        {pkg.badge && (
          <span className="package-badge">
            <Sparkles size={13} />
            <span>{pkg.badge}</span>
          </span>
        )}

        <div className="package-meta-chips">
          <span className="package-chip">
            <Calendar size={13} />
            <span>{pkg.duration}</span>
          </span>
        </div>
      </div>

      {/* Package Content */}
      <div className="package-body">
        <div className="package-category-label">{pkg.categoryLabel}</div>
        <h3
          className="package-title cursor-pointer hover:text-amber-500 transition-colors"
          onClick={() => onSelect && onSelect(pkg)}
        >
          {pkg.title}
        </h3>

        <p className="package-desc">{pkg.shortDesc}</p>

        {/* Sightseeing Highlights List */}
        <div className="package-highlights-box">
          <div className="package-highlights-title">Key Places Covered:</div>
          <ul className="package-highlights-list">
            {pkg.destinations.slice(0, 3).map((dest, idx) => (
              <li key={idx} className="package-highlight-item">
                <MapPin size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="truncate">{dest}</span>
              </li>
            ))}
            {pkg.destinations.length > 3 && (
              <li className="package-highlight-more">
                + {pkg.destinations.length - 3} more attractions included
              </li>
            )}
          </ul>
        </div>

        {/* Pricing & Actions */}
        <div className="package-footer">
          <div className="package-price-wrap">
            <span className="package-price-label">Starting From</span>
            <div className="package-price-value">{pkg.startingPrice}</div>
            <span className="package-price-sub">Vehicle-wise package pricing</span>
          </div>

          <div className="package-actions-row">
            <button
              type="button"
              onClick={() => onSelect && onSelect(pkg)}
              className="btn btn--outline btn--sm w-full cursor-pointer"
              aria-label={`View full details and pricing for ${pkg.title}`}
            >
              <Eye size={16} />
              <span>View Details & Pricing</span>
            </button>

            <a
              href={getWhatsAppUrl(`Hello Shakti Travels, I would like to enquire about the "${pkg.title}" (${pkg.duration}). Please share vehicle availability.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp btn--sm w-full"
              aria-label={`Enquire about ${pkg.title} on WhatsApp`}
            >
              <MessageCircle size={16} />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PackageCard;
