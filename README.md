# Shakti Travels — Official Website

> **"Your Journey Our Priority"**  
> Professional • Safe • On-Time Service | Proudly Serving Customers for 8 Years

Official web portal and tour package catalogue for **Shakti Travels**, premier travel agency based in Kharmanghat, Hyderabad – 500079.

---

## 🌟 Overview

Shakti Travels specializes in customized pilgrimage tours, airport transfers, local city rentals, and outstation trips across Telangana, Andhra Pradesh, and South India. This web application provides a responsive, multi-section tour package catalogue with transparent vehicle-wise pricing, detailed itineraries, authentic Indian destination photography, and direct telephone and WhatsApp customer enquiry channels.

- **Official Website:** [https://shaktitravels45.in](https://shaktitravels45.in)
- **Proprietor:** Vamshi
- **Direct Telephone:** [+91 9700500496](tel:+919700500496)
- **Direct WhatsApp:** [Chat on WhatsApp](https://wa.me/919700500496)
- **Email:** [shaktitravels45@gmail.com](mailto:shaktitravels45@gmail.com)
- **Location:** Kharmanghat, Hyderabad, Telangana – 500079
- **Instagram:** [@shaktitravels45](https://www.instagram.com/shaktitravels45/)

---

## 🚗 Confirmed Chauffeur-Driven Fleet

The Shakti Travels fleet consists strictly of well-maintained, sanitized, air-conditioned vehicles driven by verified professional chauffeurs:

1. **Maruti Suzuki Baleno** — Premium Hatchback (4+1 Seater, Climate Controlled AC, Weekend Luggage)
2. **Maruti Suzuki Swift Dzire** — Executive Compact Sedan (4+1 Seater, Chilled AC, Dedicated Trunk Space)
3. **Kia Carens SUV** — Spacious Multi-Utility 7-Seater (6+1 Seater, Multi-Zone AC, Generous Family Luggage)

---

## 🗺️ Featured Tour Packages

1. **1 Day Srisailam Tour Package** (Same day darshan: Mallikarjuna Swamy Jyotirlinga, Bhramaramba Shakti Peetham, Srisailam Dam)
2. **2 Days Srisailam Tour Package** (Relaxed 2D/1N pilgrimage: Evening Aarti, Pathala Ganga, Shikhareswaram)
3. **Hyderabad City Sightseeing (Package 1)** (Charminar, Salar Jung Museum, Chowmahalla Palace, Golconda Fort, Birla Mandir, Hussain Sagar)
4. **Hyderabad City Sightseeing (Package 2 - Film City & Leisure)** (Ramoji Film City, Sanghi Temple, Shilparamam)
5. **Hyderabad to Yadagirigutta & Swarnagiri Tour** (Sri Lakshmi Narasimha Swamy Temple & Swarnagiri Golden Temple)
6. **8 Hours / 80 Kms Cab Package** (Budget-friendly local city travel, shopping & business meetings)
7. **12 Hours / 120 Kms Cab Package** (Full-day city disposal, wedding & suburban transfers)

---

## 🛠️ Technology Stack

- **Frontend Library:** [React 18](https://react.dev/)
- **Build Tool & Bundler:** [Vite 6](https://vite.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Styling:** Modern CSS3 Custom Properties (Design System), Flexbox & CSS Grid
- **Routing & SPA Fallback:** Netlify SPA redirect rules (`_redirects` & `netlify.toml`)
- **SEO & Schema:** Google Open Graph, Twitter Cards, Canonical URLs, and Schema.org `TravelAgency` JSON-LD structured data

---

## 📁 Project Architecture

```
shakti-travels-website/
├── public/
│   ├── _redirects                     # Netlify SPA redirect rules
│   ├── robots.txt                     # Crawler directives and sitemap link
│   ├── sitemap.xml                    # Canonical XML sitemap
│   └── images/
│       ├── branding/                  # Official logo badge, QR cards, business card
│       ├── destinations/              # Authentic high-resolution Indian landmarks
│       ├── services/                  # Hyderabad & Telangana service photography
│       └── vehicles/                  # Confirmed Baleno, Dzire, Carens photography
├── src/
│   ├── components/
│   │   ├── About.jsx                  # Brand story & 8-year experience highlight
│   │   ├── Contact.jsx                # Verified contact cards & direct call/WhatsApp CTAs
│   │   ├── Fleet.jsx                  # 3 confirmed vehicles display
│   │   ├── FloatingWhatsAppButton.jsx # Sticky floating quick contact button
│   │   ├── Footer.jsx                 # Comprehensive footer & copyright
│   │   ├── Hero.jsx                   # Hero banner, 8-year experience badge & top tours
│   │   ├── InstagramSection.jsx       # Official Instagram handle & scannable QR code
│   │   ├── Navbar.jsx                 # Sticky navigation with clearance & mobile drawer
│   │   ├── PackageCard.jsx            # Reusable tour package card
│   │   ├── PackageDetailsModal.jsx    # Interactive details modal with pricing & itinerary
│   │   ├── RateCardPromo.jsx          # Official client announcement posters
│   │   ├── RentalTerms.jsx            # Transparent rental conditions
│   │   ├── Reviews.jsx                # Verified customer testimonials
│   │   ├── Services.jsx               # 6 travel service showcase cards
│   │   ├── TourPackages.jsx           # Filterable tour packages with category tabs
│   │   ├── TrustStrip.jsx             # Key trust pillars
│   │   └── VehicleCard.jsx            # Reusable vehicle card
│   ├── data/
│   │   └── travelData.js              # Single source of truth for packages & business data
│   ├── App.jsx                        # Root React component
│   ├── index.css                      # Global design system & responsive styling
│   └── main.jsx                       # Application entry point
├── index.html                         # HTML template with SEO & JSON-LD structured data
├── netlify.toml                       # Netlify build configuration & security headers
├── package.json                       # Dependencies and project scripts
├── vite.config.js                     # Vite configuration
└── .gitignore                         # Git exclusion rules
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/PSS101/shakti-travels-website.git

# Navigate to project directory
cd shakti-travels-website

# Install dependencies
npm install
```

### Development

```bash
# Start local development server with hot-reload
npm run dev
```

The application will be accessible at `http://localhost:3000/`.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

Production build artifacts will be generated in the `dist/` directory.

---

## 🔒 Business & Functional Guidelines

This application operates strictly as an **informational and direct enquiry website**:
- Direct telephone calls via `tel:+919700500496`.
- Instant WhatsApp enquiries via pre-filled links.
- Strictly **no** booking forms, customer accounts, passwords, or payment gateways.

---

## 📄 License

Proprietary — All rights reserved © 2026 Shakti Travels.
