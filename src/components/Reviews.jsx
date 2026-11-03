import React from 'react';
import { Star, MessageCircle, Quote, CheckCircle, ThumbsUp } from 'lucide-react';
import { CUSTOMER_FEEDBACK_DATA, BUSINESS_INFO, getWhatsAppUrl } from '../data/travelData';

export const Reviews = () => {
  return (
    <section id="reviews" className="section-padding reviews-section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <span className="section-tag section-tag--accent">Customer Experiences</span>
          <h2 className="section-title">What Our Travelers Say</h2>
          <p className="section-desc">
            We are dedicated to providing punctual, safe, and comfortable journeys. Read authentic traveler feedback from our pilgrimage and city tour clients.
          </p>
        </div>

        {/* Rating Trust Bar */}
        <div className="reviews-trust-bar">
          <div className="reviews-rating-box">
            <div className="rating-score">{CUSTOMER_FEEDBACK_DATA.aggregateRating}</div>
            <div className="rating-stars-wrap">
              <div className="rating-stars flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFD100" stroke="#FFD100" />
                ))}
              </div>
              <span className="rating-sub">5-Star Chauffeur Service</span>
            </div>
          </div>

          <div className="reviews-trust-features">
            <div className="trust-pill">
              <CheckCircle size={16} className="text-emerald-500" />
              <span>100% Chauffeur-Driven</span>
            </div>
            <div className="trust-pill">
              <CheckCircle size={16} className="text-emerald-500" />
              <span>Sanitized AC Vehicles</span>
            </div>
            <div className="trust-pill">
              <CheckCircle size={16} className="text-emerald-500" />
              <span>Punctual Doorstep Pickups</span>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="reviews-grid">
          {CUSTOMER_FEEDBACK_DATA.reviews.map((rev) => (
            <article key={rev.id} className="review-card">
              <div className="review-card-header">
                <div className="review-avatar">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <h4 className="review-author">{rev.author}</h4>
                  <div className="review-location text-xs text-slate-500">{rev.location}</div>
                </div>
                <div className="review-quote-icon" aria-hidden="true">
                  <Quote size={20} className="text-amber-400/40" />
                </div>
              </div>

              <div className="review-stars-row">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#FFD100" stroke="#FFD100" />
                ))}
                <span className="review-trip-tag">{rev.tripType}</span>
              </div>

              <p className="review-comment">"{rev.comment}"</p>

              <div className="review-verified-badge">
                <CheckCircle size={13} className="text-emerald-500 inline mr-1" />
                <span>Verified Trip Traveler</span>
              </div>
            </article>
          ))}
        </div>

        {/* Share Your Feedback CTA Box */}
        <div className="reviews-cta-box">
          <div className="reviews-cta-content">
            <div className="flex items-center gap-2 mb-2">
              <ThumbsUp size={20} className="text-amber-400" />
              <h3 className="text-lg sm:text-xl font-bold text-white">Traveled With Shakti Travels Recently?</h3>
            </div>
            <p className="text-slate-200 text-sm max-w-xl">
              Your feedback helps us continuously deliver professional, safe, and punctual travel experiences. Share your thoughts or suggestions directly with our team!
            </p>
          </div>

          <div className="reviews-cta-action flex-shrink-0">
            <a
              href={getWhatsAppUrl("Hello Shakti Travels, I would like to share feedback about my recent journey with your service.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
              aria-label="Share customer feedback on WhatsApp"
            >
              <MessageCircle size={18} />
              <span>Share Feedback on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
