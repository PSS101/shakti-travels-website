import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/travelData';

export const FloatingWhatsAppButton = () => {
  return (
    <aside className="floating-whatsapp-container" aria-label="WhatsApp Quick Connect">
      <div className="floating-whatsapp-tooltip" role="tooltip">
        Chat with us on WhatsApp
      </div>

      <a
        href={getWhatsAppUrl(BUSINESS_INFO.defaultWhatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Direct WhatsApp chat with Shakti Travels"
      >
        <span className="floating-whatsapp-pulse" aria-hidden="true"></span>
        <MessageCircle size={28} />
      </a>
    </aside>
  );
};

export default FloatingWhatsAppButton;
