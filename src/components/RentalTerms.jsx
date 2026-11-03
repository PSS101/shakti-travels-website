import React from 'react';
import { Phone, MessageCircle, Receipt, UserCheck, Gauge, ShieldAlert } from 'lucide-react';
import { RENTAL_CONDITIONS, BUSINESS_INFO, getWhatsAppUrl } from '../data/travelData';

export const RentalTerms = () => {
  const getTermIcon = (iconName) => {
    switch (iconName) {
      case 'Receipt':
        return <Receipt size={24} className="text-amber-500" />;
      case 'UserCheck':
        return <UserCheck size={24} className="text-sky-500" />;
      case 'Gauge':
        return <Gauge size={24} className="text-emerald-500" />;
      case 'ShieldAlert':
        return <ShieldAlert size={24} className="text-indigo-500" />;
      default:
        return <Receipt size={24} />;
    }
  };

  return (
    <section id="terms" className="section-padding terms-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Important Guidelines</span>
          <h2 className="section-title">Rental Conditions & Terms</h2>
          <p className="section-desc">
            We believe in complete transparency before you embark on your journey. Please review our standard travel conditions below.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="terms-grid">
          {RENTAL_CONDITIONS.map((term, index) => (
            <div key={term.id} className="term-card">
              <div className="flex items-center justify-between">
                <span className="term-badge-num">{index + 1}</span>
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-xs">
                  {getTermIcon(term.icon)}
                </div>
              </div>

              <h3 className="term-title">{term.title}</h3>

              <p className="term-desc">{term.description}</p>
            </div>
          ))}
        </div>

        {/* Action Banner for Clarification */}
        <div className="terms-cta-banner">
          <div>
            <h3>Need Clarification on Your Trip Cost?</h3>
            <p>
              Share your travel route, pickup date, and passenger count with our team for an accurate upfront breakdown.
            </p>
          </div>

          <div className="terms-cta-actions">
            <a
              href={BUSINESS_INFO.telUrl}
              className="btn btn--accent"
              aria-label={`Call Shakti Travels directly at ${BUSINESS_INFO.phone}`}
            >
              <Phone size={18} />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={getWhatsAppUrl("Hello Shakti Travels, I would like to clarify travel terms and estimate trip costs for my itinerary.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
              aria-label="Enquire about rental terms on WhatsApp"
            >
              <MessageCircle size={18} />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalTerms;
