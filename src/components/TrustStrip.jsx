import React from 'react';
import { Award, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { TRUST_PILLARS } from '../data/travelData';

export const TrustStrip = () => {
  const getIcon = (id) => {
    switch (id) {
      case 'experience':
        return <Award size={22} className="text-amber-500" />;
      case 'professional':
        return <ShieldCheck size={22} />;
      case 'comfortable':
        return <Sparkles size={22} />;
      case 'on-time':
        return <Clock size={22} />;
      default:
        return <ShieldCheck size={22} />;
    }
  };

  return (
    <section className="trust-strip" aria-label="Key Service Highlights">
      <div className="container">
        <div className="trust-strip-grid">
          {TRUST_PILLARS.map((pillar) => (
            <div key={pillar.id} className="trust-item">
              <div className="trust-icon-box" aria-hidden="true">
                {getIcon(pillar.id)}
              </div>
              <div className="trust-text-wrap">
                <h3 className="trust-title">{pillar.title}</h3>
                <p className="trust-desc">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
