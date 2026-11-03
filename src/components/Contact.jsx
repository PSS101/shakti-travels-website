import React from 'react';
import { Phone, MessageCircle, Clock, MapPin, Mail, Instagram, User, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/travelData';

export const Contact = () => {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="contact-box">
          <span className="section-tag section-tag--accent">Direct Travel Desk</span>

          <h2 className="section-title">
            Ready for Your Next Journey?
          </h2>

          <p className="section-desc">
            Speak directly with Proprietor Vamshi and our travel team for customized pilgrimage packages, airport transfers, and outstation cab bookings.
          </p>

          {/* Prominent Clickable Phone Display */}
          <div className="my-2">
            <a
              href={BUSINESS_INFO.telUrl}
              className="contact-phone-display"
              aria-label={`Call Shakti Travels on ${BUSINESS_INFO.phoneDisplay}`}
            >
              <Phone size={32} className="text-amber-500 flex-shrink-0" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Call & WhatsApp CTAs */}
          <div className="contact-actions-row">
            <a
              href={BUSINESS_INFO.telUrl}
              className="btn btn--primary btn--lg"
              aria-label="Call Shakti Travels directly"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>

            <a
              href={getWhatsAppUrl(BUSINESS_INFO.defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp btn--lg"
              aria-label="Send a WhatsApp message to Shakti Travels"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Business Details Grid matching Business Card */}
          <div className="contact-info-cards-grid mt-8 pt-8 border-t border-slate-200">
            <div className="contact-info-card">
              <div className="contact-info-icon-box bg-amber-50 text-amber-700">
                <User size={20} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Proprietor</span>
                <span className="contact-info-val">{BUSINESS_INFO.proprietor}</span>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon-box bg-sky-50 text-sky-700">
                <MapPin size={20} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Location</span>
                <span className="contact-info-val">{BUSINESS_INFO.location}</span>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon-box bg-emerald-50 text-emerald-700">
                <Mail size={20} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Email Support</span>
                <a href={BUSINESS_INFO.emailUrl} className="contact-info-val text-sky-800 hover:underline">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon-box bg-pink-50 text-pink-600">
                <Instagram size={20} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Instagram</span>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-val text-pink-700 hover:underline inline-flex items-center gap-1"
                >
                  <span>{BUSINESS_INFO.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Additional notice ensuring no booking form or fake address */}
          <div className="contact-meta-notice mt-6">
            <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700">
              <Clock size={16} className="text-sky-700" />
              <span>{BUSINESS_INFO.operatingHours}</span>
            </span>
            <span aria-hidden="true">•</span>
            <span>Chauffeur-Driven Only</span>
            <span aria-hidden="true">•</span>
            <span>No advance online registration required</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
