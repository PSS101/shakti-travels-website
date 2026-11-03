import React from 'react';
import { Car, Plane, Compass, MapPin, Calendar, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { SERVICES_LIST, getWhatsAppUrl } from '../data/travelData';

export const Services = () => {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Car':
        return <Car size={28} strokeWidth={2.2} />;
      case 'Plane':
        return <Plane size={28} strokeWidth={2.2} />;
      case 'Compass':
        return <Compass size={28} strokeWidth={2.2} />;
      case 'MapPin':
        return <MapPin size={28} strokeWidth={2.2} />;
      case 'Calendar':
        return <Calendar size={28} strokeWidth={2.2} />;
      case 'Clock':
        return <Clock size={28} strokeWidth={2.2} />;
      default:
        return <Car size={28} />;
    }
  };

  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Travel Agency Offerings</span>
          <h2 className="section-title">Our Travel Services</h2>
          <p className="section-desc">
            Reliable, chauffeur-driven travel solutions customized for your daily local city errands, punctual airport transfers, extended full-day bookings, and outstation holiday tours.
          </p>
        </div>

        <div className="services-grid services-grid--6">
          {SERVICES_LIST.map((service) => (
            <article key={service.id} className="service-card group">
              {service.image && (
                <div className="service-card-img-wrap">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-card-img"
                    loading="lazy"
                  />
                  <div className="service-icon-box-floating" aria-hidden="true">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>
              )}

              <div className="service-card-content">
                <span className="service-pill-tag">{service.tag}</span>

                <h3 className="service-title">{service.title}</h3>

                <p className="service-desc">{service.shortDesc}</p>

                <div className="service-card-action">
                  <a
                    href={getWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--whatsapp service-action-btn"
                    aria-label={`Enquire about ${service.title} on WhatsApp`}
                  >
                    <MessageCircle size={18} />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#packages" className="btn btn--outline btn--lg inline-flex items-center gap-2">
            <span>Explore Tour Packages & Vehicle Pricing</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
