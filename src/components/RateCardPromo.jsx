import React, { useState } from 'react';
import { Phone, MessageCircle, FileText, Sparkles, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, CLIENT_POSTERS, getWhatsAppUrl } from '../data/travelData';

export const RateCardPromo = () => {
  const [activeTab, setActiveTab] = useState('main'); // 'main' | 'rates'
  const [imgErrors, setImgErrors] = useState({ main: false, rates: false });

  const activePoster = activeTab === 'main' ? CLIENT_POSTERS.mainPoster : CLIENT_POSTERS.ratesPoster;
  const isCurrentImgError = imgErrors[activeTab];

  const handleImgError = (key) => {
    setImgErrors((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <section className="section-padding promo-section" aria-label="Official Service Announcements & Tariff Card">
      <div className="container">
        <div className="promo-card">
          {/* Information & Official Announcement */}
          <div className="promo-content">
            <div className="promo-eyebrow">
              <Sparkles size={14} />
              <span>Official Service Announcement</span>
            </div>

            <h2 className="promo-title">
              Tour Packages & Official Service Tariff
            </h2>

            <p className="promo-desc">
              Shakti Travels provides all-inclusive tour packages and customized car rental services. Review our official service announcement below, or connect directly on WhatsApp to plan your pilgrimage or local tour.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2.5 text-sm text-yellow-300 font-semibold">
                <span className="w-5 h-5 rounded-full bg-yellow-400 text-slate-900 flex items-center justify-center text-xs font-bold">✓</span>
                <span>Confirmed Package Fares for Srisailam & Hyderabad City</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-yellow-300 font-semibold">
                <span className="w-5 h-5 rounded-full bg-yellow-400 text-slate-900 flex items-center justify-center text-xs font-bold">✓</span>
                <span>All Vehicles Driven by Verified Professional Chauffeurs</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-yellow-300 font-semibold">
                <span className="w-5 h-5 rounded-full bg-yellow-400 text-slate-900 flex items-center justify-center text-xs font-bold">✓</span>
                <span>Round-the-clock 24/7 Telephone and WhatsApp Assistance</span>
              </div>
            </div>

            <div className="promo-cta-row">
              <a
                href={BUSINESS_INFO.telUrl}
                className="btn btn--accent"
                aria-label={`Call Shakti Travels directly on ${BUSINESS_INFO.phone}`}
              >
                <Phone size={16} />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={getWhatsAppUrl("Hello Shakti Travels, I would like to enquire about your official tour packages and travel rates.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp"
                aria-label="Enquire on WhatsApp"
              >
                <MessageCircle size={16} />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href="#packages"
                className="btn btn--outline text-white border-white hover:bg-white hover:text-slate-900"
              >
                <span>Browse Tour Packages</span>
              </a>
            </div>
          </div>

          {/* Poster Showcase with Tab Selector */}
          <div className="promo-showcase-column">
            {/* Tab switch between Main Poster & Rates Reference */}
            <div className="promo-tabs" role="tablist" aria-label="Official Posters">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'main'}
                className={`promo-tab-btn ${activeTab === 'main' ? 'active' : ''}`}
                onClick={() => setActiveTab('main')}
              >
                Main Service Poster
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'rates'}
                className={`promo-tab-btn ${activeTab === 'rates' ? 'active' : ''}`}
                onClick={() => setActiveTab('rates')}
              >
                Tariff Card Reference
              </button>
            </div>

            {/* Poster Frame */}
            <div className="promo-poster-frame">
              {!isCurrentImgError ? (
                <div className="promo-img-wrapper">
                  <img
                    src={activePoster.path}
                    alt={activePoster.alt}
                    className="promo-poster-img"
                    onError={() => handleImgError(activeTab)}
                    loading="lazy"
                  />
                  <a
                    href={activePoster.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="promo-poster-zoom-btn"
                    aria-label={`View full size ${activePoster.title}`}
                    title="Open full size in new tab"
                  >
                    <ExternalLink size={14} />
                    <span>View Full Image</span>
                  </a>
                </div>
              ) : (
                /* Graceful Fallback if an asset fails to load */
                <div className="promo-fallback-card">
                  <div className="promo-fallback-icon-wrap" aria-hidden="true">
                    <FileText size={28} />
                  </div>
                  <h4 className="promo-fallback-title">{activePoster.title}</h4>
                  <p className="promo-fallback-desc">
                    Official promotional material for Shakti Travels chauffeur services and tour packages.
                  </p>
                  <span className="promo-fallback-ref">
                    File: {activePoster.path}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RateCardPromo;
