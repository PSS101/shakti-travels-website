import React from 'react';
import { Award, ShieldCheck, Sparkles, Clock, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { ABOUT_PILLARS, BUSINESS_INFO, getWhatsAppUrl } from '../data/travelData';

export const About = () => {
  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'Award':
        return <Award size={22} />;
      case 'Shield':
        return <ShieldCheck size={22} />;
      case 'Sparkles':
        return <Sparkles size={22} />;
      case 'ClockCheck':
      case 'Clock':
        return <Clock size={22} />;
      default:
        return <ShieldCheck size={22} />;
    }
  };

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Brand Story & Services */}
          <div className="about-content">
            <span className="section-tag">Established 8 Years • Why Choose Us</span>
            <h2 className="section-title">Travel with Confidence</h2>

            {/* Prominent 8-Year Experience Highlight Banner */}
            <div className="about-experience-banner">
              <div className="about-exp-badge-pill">
                <span className="about-exp-number">8</span>
                <span className="about-exp-unit">Years</span>
              </div>
              <div className="about-exp-content">
                <h3 className="about-exp-title">Proudly Serving Customers for 8 Years</h3>
                <p className="about-exp-desc">
                  Providing safe, comfortable, and punctual chauffeur-driven journeys across Hyderabad, Telangana, and South India.
                </p>
              </div>
            </div>

            <p className="about-lead">
              <strong>Shakti Travels</strong> has been proudly serving customers for 8 years with dependable car rentals, punctual airport transfers, and customized pilgrimage packages designed around passenger safety and comfort. 
            </p>

            <p className="about-text">
              Whether you are an individual commuter catching an early morning flight, an executive with multiple business appointments, or a family traveling for temple darshans, our chauffeur-driven vehicles deliver a stress-free travel experience every time.
            </p>

            <div className="about-checklist">
              <div className="about-check-item">
                <span className="about-check-icon" aria-hidden="true">✓</span>
                <span><strong>Proudly Serving for 8 Years:</strong> Established track record of trusted customer service</span>
              </div>
              <div className="about-check-item">
                <span className="about-check-icon" aria-hidden="true">✓</span>
                <span>Dedicated Chauffeurs with Highway & City Expertise</span>
              </div>
              <div className="about-check-item">
                <span className="about-check-icon" aria-hidden="true">✓</span>
                <span>Sanitized, Clean & Well-Maintained AC Vehicles</span>
              </div>
              <div className="about-check-item">
                <span className="about-check-icon" aria-hidden="true">✓</span>
                <span>Zero Hidden Fees — Transparent Tour & Hourly Package Fares</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <a href="#packages" className="btn btn--outline btn--sm inline-flex items-center gap-2">
                <span>View Tour Packages</span>
                <ArrowRight size={15} />
              </a>

              <a
                href={getWhatsAppUrl("Hello Shakti Travels, I would like to know more about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp btn--sm inline-flex items-center gap-2"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Brand Themes Grid */}
          <div className="about-pillars-grid">
            {ABOUT_PILLARS.map((pillar) => (
              <div key={pillar.id} className="about-pillar-card">
                <div className="about-pillar-icon" aria-hidden="true">
                  {getPillarIcon(pillar.icon)}
                </div>
                <h3 className="about-pillar-title">{pillar.title}</h3>
                <p className="about-pillar-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
