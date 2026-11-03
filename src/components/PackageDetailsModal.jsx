import React, { useEffect } from 'react';
import { X, Calendar, MapPin, Check, AlertCircle, Phone, MessageCircle, Clock, ShieldCheck, Car, Users } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/travelData';

export const PackageDetailsModal = ({ pkg, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (pkg) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [pkg]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!pkg) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-package-title"
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <span className="modal-cat-tag">{pkg.categoryLabel}</span>
            {pkg.badge && <span className="modal-badge-tag">{pkg.badge}</span>}
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close package details modal"
          >
            <X size={22} />
          </button>

          <h2 id="modal-package-title" className="modal-title">{pkg.title}</h2>

          <div className="modal-quick-chips">
            <span className="modal-chip">
              <Calendar size={14} className="text-amber-500" />
              <span><strong>Duration:</strong> {pkg.duration}</span>
            </span>
            {pkg.distance && (
              <span className="modal-chip">
                <MapPin size={14} className="text-sky-500" />
                <span><strong>Coverage:</strong> {pkg.distance}</span>
              </span>
            )}
            <span className="modal-chip">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span>Chauffeur-Driven AC Fleet</span>
            </span>
          </div>
        </div>

        {/* Scrollable Container: Image and Details Scroll Together */}
        <div className="modal-scroll-area">
          {/* Modal Banner Image from Reference Site */}
          {pkg.coverImage && (
            <div className="modal-banner-wrap">
              <img
                src={pkg.coverImage}
                alt={pkg.title}
                className="modal-banner-img"
                loading="lazy"
              />
            </div>
          )}

          {/* Modal Body */}
          <div className="modal-body">
          {/* Package Overview */}
          <section className="modal-section">
            <h3 className="modal-section-title">Package Overview</h3>
            <p className="modal-text">{pkg.shortDesc}</p>
          </section>

          {/* Destinations / Places Covered */}
          <section className="modal-section">
            <h3 className="modal-section-title">Places & Attractions Covered</h3>
            <div className="modal-destinations-grid">
              {pkg.destinations.map((dest, idx) => (
                <div key={idx} className="modal-destination-card">
                  <div className="modal-dest-number">{idx + 1}</div>
                  <div className="modal-dest-name">{dest}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Vehicle-Wise Package Pricing Table (Core Feature from Reference Site) */}
          <section className="modal-section modal-section--highlight">
            <div className="modal-pricing-header">
              <div>
                <h3 className="modal-section-title mb-1">Vehicle-Wise Package Pricing</h3>
                <p className="text-xs text-slate-500">Transparent rates based strictly on vehicle category chosen for this tour</p>
              </div>
              <div className="text-xs font-bold text-sky-800 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                With Professional Chauffeur Only
              </div>
            </div>

            <div className="modal-table-responsive">
              <table className="modal-pricing-table">
                <thead>
                  <tr>
                    <th>Vehicle Model</th>
                    <th>Seating Capacity</th>
                    <th>Package Price</th>
                    <th>Terms / Notes</th>
                    <th>Enquire / Book</th>
                  </tr>
                </thead>
                <tbody>
                  {pkg.vehiclePricing.map((item) => (
                    <tr key={item.vehicleId} className={item.isPopular ? 'row-popular' : ''}>
                      <td>
                        <div className="table-car-name">
                          <Car size={16} className="text-sky-700" />
                          <span>{item.vehicleName}</span>
                          {item.isPopular && <span className="table-badge-popular">Popular</span>}
                        </div>
                      </td>
                      <td>
                        <span className="table-seating">
                          <Users size={14} className="text-slate-400" />
                          <span>{item.seating}</span>
                        </span>
                      </td>
                      <td>
                        <div className="table-price">{item.price}</div>
                        {item.extraCharges && (
                          <div className="table-price-extra">{item.extraCharges}</div>
                        )}
                      </td>
                      <td>
                        <span className="table-note">{item.priceNote}</span>
                      </td>
                      <td>
                        <a
                          href={getWhatsAppUrl(`Hello Shakti Travels, I would like to book the "${pkg.title}" with vehicle: ${item.vehicleName} (${item.seating}) for ${item.price}. Please share availability.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn--whatsapp btn--sm"
                          aria-label={`Book ${item.vehicleName} on WhatsApp for ${pkg.title}`}
                        >
                          <MessageCircle size={15} />
                          <span>Book on WhatsApp</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Day-Wise / Step-By-Step Itinerary */}
          {pkg.itinerary && pkg.itinerary.length > 0 && (
            <section className="modal-section">
              <h3 className="modal-section-title">Tour Itinerary Schedule</h3>
              <div className="modal-itinerary-timeline">
                {pkg.itinerary.map((step, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-bullet">{idx + 1}</div>
                    <div className="timeline-content">
                      <div className="timeline-time">
                        <Clock size={13} className="text-amber-500 inline mr-1" />
                        {step.time}
                      </div>
                      <h4 className="timeline-title">{step.title}</h4>
                      <p className="timeline-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Inclusions & Exclusions Grid */}
          <section className="modal-section">
            <div className="inclusions-exclusions-grid">
              {/* Inclusions */}
              <div className="inclusions-card">
                <div className="inclusions-card-title text-emerald-800">
                  <Check size={18} className="text-emerald-600" />
                  <span>What's Included in Package</span>
                </div>
                <ul className="inclusions-list">
                  {pkg.inclusions.map((inc, idx) => (
                    <li key={idx} className="inclusion-item">
                      <span className="inc-icon inc-icon--yes">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="exclusions-card">
                <div className="inclusions-card-title text-slate-800">
                  <AlertCircle size={18} className="text-amber-600" />
                  <span>Additional Charges / Exclusions</span>
                </div>
                <ul className="inclusions-list">
                  {pkg.exclusions.map((exc, idx) => (
                    <li key={idx} className="inclusion-item">
                      <span className="inc-icon inc-icon--no">✕</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

        {/* Modal Sticky Footer CTA */}
        <div className="modal-footer">
          <div className="modal-footer-info">
            <div className="text-xs text-slate-500">Instant direct assistance:</div>
            <a href={BUSINESS_INFO.telUrl} className="font-extrabold text-slate-900 text-sm sm:text-base hover:underline">
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>

          <div className="modal-footer-actions">
            <a
              href={BUSINESS_INFO.telUrl}
              className="btn btn--outline"
              aria-label={`Call Shakti Travels on ${BUSINESS_INFO.phone}`}
            >
              <Phone size={17} />
              <span>Call Us</span>
            </a>

            <a
              href={getWhatsAppUrl(`Hello Shakti Travels, I would like to enquire about the "${pkg.title}". Please guide me with booking details.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
              aria-label="Enquire about this package on WhatsApp"
            >
              <MessageCircle size={17} />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsModal;
