import React from 'react';
import { Phone, MessageCircle, ArrowRight, Calendar } from 'lucide-react';
import { BUSINESS_INFO, TOUR_PACKAGES, getWhatsAppUrl } from '../data/travelData';

export const Hero = ({ onSelectPackage }) => {
  // Feature top 3 tour packages in the hero spotlight
  const featuredPackages = TOUR_PACKAGES.slice(0, 3);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Messaging & CTAs */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot" aria-hidden="true"></span>
              <span>Proudly Serving Customers for 8 Years</span>
            </div>

            <h1 className="hero-headline">
              Your Journey <br />
              <span className="text-accent">Our Priority</span>
            </h1>

            <p className="hero-supporting-line">
              {BUSINESS_INFO.supportingLine}
            </p>

            <div className="hero-meta-strip">
              <span className="hero-exp-chip">
                8+ Years of Service
              </span>
              <span className="hero-meta-divider">•</span>
              <span className="hero-meta-item">Proprietor: <strong>{BUSINESS_INFO.proprietor}</strong></span>
              <span className="hero-meta-divider">•</span>
              <span className="hero-meta-item">{BUSINESS_INFO.location}</span>
            </div>

            <p className="hero-description">
              Trusted travel agency offering customized pilgrimage packages, Hyderabad city sightseeing tours, outstation cabs, and airport transfers with premium chauffeur-driven vehicles.
            </p>

            <div className="hero-cta-group">
              <a
                href={BUSINESS_INFO.telUrl}
                className="btn btn--accent btn--lg"
                aria-label={`Call Shakti Travels now at ${BUSINESS_INFO.phone}`}
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>

              <a
                href={getWhatsAppUrl(BUSINESS_INFO.defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp btn--lg"
                aria-label="Contact Shakti Travels on WhatsApp"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="#packages"
                className="btn btn--outline btn--lg"
                aria-label="Explore all Tour Packages"
              >
                <span>View Tour Packages</span>
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="hero-quick-phone">
              <span className="hero-quick-phone-label">Direct Enquiry Hotline:</span>
              <a
                href={BUSINESS_INFO.telUrl}
                className="hero-quick-phone-link"
                aria-label={`Call direct hotline at ${BUSINESS_INFO.phoneDisplay}`}
              >
                <Phone size={16} className="text-amber-500" />
                <strong>{BUSINESS_INFO.phoneDisplay}</strong>
              </a>
            </div>
          </div>

          {/* Right Column: Featured Tour Packages Spotlight */}
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-header">
                <span className="hero-card-badge">Popular Itineraries</span>
                <h2 className="hero-card-title">Featured Tour Packages</h2>
                <p className="hero-card-sub">All-Inclusive Vehicle Fares • Doorstep Pickup</p>
              </div>

              <div className="hero-card-body">
                {featuredPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => onSelectPackage && onSelectPackage(pkg)}
                    className="hero-package-item group cursor-pointer text-left"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') onSelectPackage && onSelectPackage(pkg);
                    }}
                    aria-label={`View package details for ${pkg.title}`}
                  >
                    <img
                      src={pkg.coverImage}
                      alt={pkg.title}
                      className="hero-package-thumb"
                      loading="lazy"
                    />
                    <div className="hero-package-info">
                      <div className="hero-package-badge-wrap">
                        <span className="hero-package-cat">{pkg.categoryLabel}</span>
                        <span className="hero-package-dur">
                          <Calendar size={12} className="inline mr-1" />
                          {pkg.duration}
                        </span>
                      </div>
                      <div className="hero-package-name">{pkg.title}</div>
                    </div>
                    <div className="hero-package-price-wrap">
                      <span className="hero-package-starts">From</span>
                      <span className="hero-package-price">{pkg.startingPrice}</span>
                    </div>
                  </div>
                ))}

                <div className="pt-2 text-center">
                  <a
                    href="#packages"
                    className="hero-card-footer-link"
                  >
                    <span>Browse all 7 tour packages & vehicle pricing</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
