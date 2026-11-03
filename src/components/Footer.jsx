import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail, Instagram, ArrowUp, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, TOUR_PACKAGES, getWhatsAppUrl } from '../data/travelData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Tour Packages', href: '#packages' },
    { label: 'Our Fleet', href: '#fleet' },
    { label: 'Rental Terms', href: '#terms' },
    { label: 'Customer Reviews', href: '#reviews' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          {/* Column 1: Brand & Logo Badge */}
          <div className="footer-brand-wrap">
            <a href="#home" className="inline-block group mb-3">
              <div className="bg-[#021630] border border-amber-400/40 rounded-xl p-2.5 inline-block shadow-lg">
                <img
                  src={BUSINESS_INFO.logoPath}
                  alt={`${BUSINESS_INFO.name} - ${BUSINESS_INFO.tagline}`}
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </a>

            <p className="footer-brand-tagline">
              "{BUSINESS_INFO.tagline}"
            </p>

            <p className="footer-brand-desc">
              Premier travel service provider offering customized pilgrimage packages, local city cabs, airport transfers, and outstation chauffeur-driven vehicles from Kharmanghat, Hyderabad across Telangana and South India.
            </p>

            <div className="text-xs text-slate-300 font-semibold mb-2">
              Proudly Serving Customers for 8 Years • Proprietor: <span className="text-amber-400">{BUSINESS_INFO.proprietor}</span>
            </div>

            <div className="footer-service-badges">
              <span className="footer-pill-badge">
                8+ Years of Service
              </span>
              <span className="footer-pill-badge">
                100% Chauffeur Driven
              </span>
              <span className="footer-pill-badge">
                Sanitized AC Fleet
              </span>
              <span className="footer-pill-badge">
                Transparent Fares
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              {navLinks.map((link, idx) => (
                <li key={idx} className="footer-link-item">
                  <a href={link.href}>
                    <span aria-hidden="true">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tour Packages */}
          <div>
            <h4 className="footer-col-title">Tour Packages</h4>
            <ul className="footer-links-list">
              {TOUR_PACKAGES.map((pkg) => (
                <li key={pkg.id} className="footer-link-item">
                  <a href="#packages">
                    <span aria-hidden="true">›</span>
                    <span>{pkg.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social Info */}
          <div>
            <h4 className="footer-col-title">Contact & Support</h4>
            <div className="space-y-3 mb-4">
              <div className="footer-contact-item">
                <Clock size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  <strong>{BUSINESS_INFO.operatingHours}</strong>
                  <br />Round-the-clock booking assistance
                </span>
              </div>

              <div className="footer-contact-item">
                <Phone size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">Direct Telephone Hotline</span>
                  <a
                    href={BUSINESS_INFO.telUrl}
                    className="text-white font-bold hover:text-amber-400 transition-colors"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <MessageCircle size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">Instant WhatsApp Chat</span>
                  <a
                    href={getWhatsAppUrl("Hello Shakti Travels, I would like to enquire about your tour packages and travel rates.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-bold hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <Mail size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">Email Support</span>
                  <a
                    href={BUSINESS_INFO.emailUrl}
                    className="text-white hover:text-amber-400 transition-colors text-sm"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <Instagram size={16} className="text-pink-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">Official Instagram</span>
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 font-semibold hover:underline text-sm inline-flex items-center gap-1"
                  >
                    <span>{BUSINESS_INFO.instagramHandle}</span>
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <MapPin size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  {BUSINESS_INFO.location}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.telUrl}
                className="btn btn--accent w-full text-center text-sm py-2.5"
              >
                <Phone size={16} />
                <span>Call {BUSINESS_INFO.phoneRaw}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>

          <p className="text-xs text-slate-400">
            {BUSINESS_INFO.supportingLine} | Official Travel Agency Website
          </p>

          <button
            type="button"
            className="footer-scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
