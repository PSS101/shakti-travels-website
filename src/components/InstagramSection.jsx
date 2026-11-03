import React from 'react';
import { Instagram, ExternalLink, QrCode, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/travelData';

export const InstagramSection = () => {
  return (
    <section id="instagram" className="section-padding instagram-section" aria-label="Official Instagram Community">
      <div className="container">
        <div className="instagram-card">
          {/* Left Column: Community Content & CTAs */}
          <div className="instagram-content">
            <div className="instagram-eyebrow">
              <Instagram size={16} className="text-pink-500" />
              <span>Official Social Media Channel</span>
            </div>

            <h2 className="instagram-title">
              Follow Us on Instagram
            </h2>

            <p className="instagram-handle-badge">
              <span className="font-extrabold text-amber-400">@shaktitravels45</span>
            </p>

            <p className="instagram-desc">
              Connect with Shakti Travels on Instagram for authentic journey glimpses, pilgrimage darshan schedules, highway travel tips, and real fleet updates from Hyderabad to Srisailam, Yadagirigutta, and across South India.
            </p>

            <div className="instagram-highlights space-y-2.5 mb-6">
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                <span>Real-time pilgrimage updates & seasonal temple timings</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                <span>Verified fleet photos & chauffeur travel stories</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                <span>Direct travel enquiry assistance & DM support</span>
              </div>
            </div>

            <div className="instagram-actions-row">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--instagram"
                aria-label="Open Shakti Travels official Instagram profile in a new tab"
              >
                <Instagram size={18} />
                <span>Follow {BUSINESS_INFO.instagramHandle}</span>
                <ExternalLink size={15} className="ml-1 opacity-80" />
              </a>

              <a
                href={getWhatsAppUrl(`Hello Shakti Travels, I found you on Instagram (${BUSINESS_INFO.instagramHandle}) and would like to enquire about your travel packages.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp"
                aria-label="Chat with Shakti Travels on WhatsApp"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Authentic, Scannable Instagram QR Code Card */}
          <div className="instagram-qr-showcase">
            <div className="instagram-qr-frame">
              <div className="instagram-qr-header">
                <div className="flex items-center gap-2">
                  <QrCode size={18} className="text-slate-700" />
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Scan to Follow
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200">
                  Official QR
                </span>
              </div>

              {/* Scannable, undistorted QR Code Image */}
              <div className="instagram-qr-img-wrapper">
                <img
                  src={BUSINESS_INFO.instagramQrPath}
                  alt={`Official Instagram QR code for ${BUSINESS_INFO.instagramHandle}`}
                  className="instagram-qr-img"
                  loading="lazy"
                  width="260"
                  height="240"
                />
              </div>

              <div className="instagram-qr-footer">
                <p className="text-xs text-slate-600 font-medium text-center">
                  Open your phone camera to scan & follow instantly
                </p>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-qr-link"
                >
                  <span>{BUSINESS_INFO.instagramHandle}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
