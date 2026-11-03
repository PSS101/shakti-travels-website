import React, { useState } from 'react';

/**
 * High-definition SVG silhouettes for the 3 specific car models.
 * Used as high-end visual representations and graceful fallbacks when image files are not yet loaded.
 */
export const BalenoSvg = ({ className = "w-full h-full" }) => (
  <svg
    viewBox="0 0 560 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Maruti Suzuki Baleno Hatchback Illustration"
  >
    <defs>
      <linearGradient id="balenoBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0B4B8E" />
        <stop offset="50%" stopColor="#073B78" />
        <stop offset="100%" stopColor="#032148" />
      </linearGradient>
      <linearGradient id="balenoGlass" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#B8D5E5" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#416788" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="chromeTrim" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="50%" stopColor="#C4D1DD" />
        <stop offset="100%" stopColor="#8A9CAE" />
      </linearGradient>
      <radialGradient id="shadowSoft" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#000000" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Ground contact shadow */}
    <ellipse cx="280" cy="228" rx="230" ry="14" fill="url(#shadowSoft)" />

    {/* Main Body Silhouette - Baleno Hatchback */}
    <path
      d="M75 190 
         C 80 188, 86 160, 98 152
         C 118 140, 160 136, 215 130
         C 255 102, 305 82, 385 82
         C 430 82, 455 105, 475 138
         C 498 144, 520 156, 524 172
         C 528 188, 518 198, 495 198
         L 445 198
         C 440 168, 410 150, 380 150
         C 350 150, 320 168, 315 198
         L 205 198
         C 200 168, 170 150, 140 150
         C 110 150, 80 168, 75 198
         Z"
      fill="url(#balenoBody)"
    />

    {/* Roof & Pillars */}
    <path
      d="M216 130
         C 260 102, 305 84, 385 84
         C 426 84, 450 104, 468 134
         L 216 130 Z"
      fill="#031F42"
    />

    {/* Cabin Windows */}
    <path
      d="M232 128
         C 265 106, 298 94, 355 94
         L 355 128
         Z"
      fill="url(#balenoGlass)"
    />
    <path
      d="M366 94
         C 395 94, 420 102, 448 128
         L 366 128
         Z"
      fill="url(#balenoGlass)"
    />

    {/* Character Crease Lines */}
    <path d="M125 152 Q 280 142 472 144" stroke="#4878B0" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M145 168 Q 280 164 450 166" stroke="#042650" strokeWidth="2" strokeLinecap="round" />

    {/* Headlights & Taillights */}
    <path d="M78 174 Q 92 158 112 154 L 102 180 Z" fill="#FFEAA7" opacity="0.9" />
    <path d="M500 160 Q 518 168 522 178 L 496 182 Z" fill="#E74C3C" />

    {/* Wheels */}
    <circle cx="140" cy="196" r="42" fill="#1A202C" />
    <circle cx="140" cy="196" r="27" fill="#CBD5E1" stroke="#475569" strokeWidth="4" />
    <circle cx="140" cy="196" r="10" fill="#1E293B" />
    <circle cx="140" cy="196" r="3" fill="#FFD100" />

    <circle cx="380" cy="196" r="42" fill="#1A202C" />
    <circle cx="380" cy="196" r="27" fill="#CBD5E1" stroke="#475569" strokeWidth="4" />
    <circle cx="380" cy="196" r="10" fill="#1E293B" />
    <circle cx="380" cy="196" r="3" fill="#FFD100" />

    {/* Front Grille Chrome Touch */}
    <path d="M74 186 L 90 186" stroke="url(#chromeTrim)" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const DzireSvg = ({ className = "w-full h-full" }) => (
  <svg
    viewBox="0 0 560 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Maruti Suzuki Swift Dzire Sedan Illustration"
  >
    <defs>
      <linearGradient id="dzireBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0F4C81" />
        <stop offset="50%" stopColor="#073B78" />
        <stop offset="100%" stopColor="#032249" />
      </linearGradient>
      <linearGradient id="dzireGlass" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#CBE4F5" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#557F9F" stopOpacity="0.4" />
      </linearGradient>
      <radialGradient id="shadowDzire" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#000000" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Ground shadow */}
    <ellipse cx="280" cy="228" rx="235" ry="14" fill="url(#shadowDzire)" />

    {/* Main Body Silhouette - Swift Dzire Compact Sedan */}
    <path
      d="M60 188
         C 65 170, 78 160, 115 156
         C 130 155, 145 154, 160 148
         C 190 108, 230 84, 330 84
         C 380 84, 415 106, 445 138
         C 485 142, 515 152, 524 168
         C 528 178, 522 196, 495 196
         L 445 196
         C 440 166, 410 148, 380 148
         C 350 148, 320 166, 315 196
         L 205 196
         C 200 166, 170 148, 140 148
         C 110 148, 80 166, 75 196
         Z"
      fill="url(#dzireBody)"
    />

    {/* Sedan Boot Step Line */}
    <path
      d="M70 164
         C 95 162, 120 160, 145 155
         L 165 145"
      stroke="#5A88B8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* Sedan Glass Windows */}
    <path
      d="M178 140
         C 205 108, 238 94, 305 94
         L 305 136
         Z"
      fill="url(#dzireGlass)"
    />
    <path
      d="M316 94
         C 350 94, 385 105, 420 136
         L 316 136
         Z"
      fill="url(#dzireGlass)"
    />

    {/* Chrome Waistline */}
    <path d="M142 148 Q 280 143 458 143" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />

    {/* Headlights & Taillights */}
    <path d="M495 162 Q 515 168 522 176 L 485 180 Z" fill="#FFEAA7" opacity="0.9" />
    <path d="M62 174 Q 80 168 95 168 L 88 184 Z" fill="#E74C3C" />

    {/* Wheels */}
    <circle cx="140" cy="196" r="42" fill="#1A202C" />
    <circle cx="140" cy="196" r="27" fill="#E2E8F0" stroke="#475569" strokeWidth="4" />
    <circle cx="140" cy="196" r="10" fill="#1E293B" />
    <circle cx="140" cy="196" r="3" fill="#FFD100" />

    <circle cx="380" cy="196" r="42" fill="#1A202C" />
    <circle cx="380" cy="196" r="27" fill="#E2E8F0" stroke="#475569" strokeWidth="4" />
    <circle cx="380" cy="196" r="10" fill="#1E293B" />
    <circle cx="380" cy="196" r="3" fill="#FFD100" />
  </svg>
);

export const CarensSvg = ({ className = "w-full h-full" }) => (
  <svg
    viewBox="0 0 560 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Kia Carens 6+1 Seater SUV Illustration"
  >
    <defs>
      <linearGradient id="carensBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#145291" />
        <stop offset="50%" stopColor="#073B78" />
        <stop offset="100%" stopColor="#021C3E" />
      </linearGradient>
      <linearGradient id="carensGlass" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#CDE6F8" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#4A7599" stopOpacity="0.4" />
      </linearGradient>
      <radialGradient id="shadowCarens" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#000000" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Ground shadow */}
    <ellipse cx="280" cy="230" rx="245" ry="15" fill="url(#shadowCarens)" />

    {/* Kia Carens Roof Rails */}
    <path d="M160 68 L 380 68" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" />
    <path d="M170 73 L 170 68 M 370 73 L 370 68 M 270 73 L 270 68" stroke="#64748B" strokeWidth="4" />

    {/* Kia Carens Tall SUV Body */}
    <path
      d="M72 194
         C 72 165, 78 140, 95 125
         C 120 105, 150 74, 210 74
         C 280 74, 380 74, 400 78
         C 435 90, 465 116, 485 142
         C 515 150, 532 162, 532 180
         C 532 195, 520 200, 492 200
         L 445 200
         C 440 166, 405 146, 375 146
         C 345 146, 312 166, 308 200
         L 198 200
         C 192 166, 160 146, 130 146
         C 100 146, 68 166, 64 200
         Z"
      fill="url(#carensBody)"
    />

    {/* SUV 3-Row Windows */}
    <path
      d="M110 120
         C 125 105, 140 85, 185 85
         L 185 126
         Z"
      fill="url(#carensGlass)"
    />
    <path
      d="M195 85
         L 285 85
         L 285 126
         L 195 126
         Z"
      fill="url(#carensGlass)"
    />
    <path
      d="M295 85
         C 335 85, 375 88, 415 124
         L 295 126
         Z"
      fill="url(#carensGlass)"
    />

    {/* SUV Cladding */}
    <path d="M64 196 L 76 196 M 184 196 L 320 196 M 430 196 L 500 196" stroke="#1E293B" strokeWidth="8" strokeLinecap="round" />

    {/* Lighting Bar */}
    <path d="M495 148 Q 520 156 528 168 L 490 174 Z" fill="#FFEAA7" opacity="0.95" />
    <path d="M72 135 Q 76 150 78 175 L 88 175 Z" fill="#EF4444" />
    <path d="M470 140 L 525 152" stroke="#FFD100" strokeWidth="2.5" strokeLinecap="round" />

    {/* Wheels */}
    <circle cx="130" cy="196" r="44" fill="#0F172A" />
    <circle cx="130" cy="196" r="29" fill="#E2E8F0" stroke="#334155" strokeWidth="5" />
    <circle cx="130" cy="196" r="11" fill="#0F172A" />
    <circle cx="130" cy="196" r="3" fill="#FFD100" />

    <circle cx="375" cy="196" r="44" fill="#0F172A" />
    <circle cx="375" cy="196" r="29" fill="#E2E8F0" stroke="#334155" strokeWidth="5" />
    <circle cx="375" cy="196" r="11" fill="#0F172A" />
    <circle cx="375" cy="196" r="3" fill="#FFD100" />
  </svg>
);

/**
 * VehicleVisual Component
 * Renders real image if provided, with seamless fallback to custom SVG model illustration.
 */
export const VehicleVisual = ({ vehicle, className = "" }) => {
  const [imgError, setImgError] = useState(false);

  const renderIllustration = () => {
    switch (vehicle.id) {
      case 'baleno':
        return <BalenoSvg className="vehicle-visual-svg" />;
      case 'swift-dzire':
        return <DzireSvg className="vehicle-visual-svg" />;
      case 'kia-carens':
        return <CarensSvg className="vehicle-visual-svg" />;
      default:
        return <DzireSvg className="vehicle-visual-svg" />;
    }
  };

  return (
    <div className={`vehicle-visual-box ${className}`}>
      {!imgError && vehicle.imagePath ? (
        <img
          src={vehicle.imagePath}
          alt={`${vehicle.name} - ${vehicle.seating}`}
          className="vehicle-visual-img"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      ) : (
        <div className="vehicle-visual-svg-wrap">
          {renderIllustration()}
          <span className="vehicle-verified-badge">
            <span className="vehicle-verified-dot" aria-hidden="true"></span>
            <span>Verified Chauffeur-Driven</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default VehicleVisual;
