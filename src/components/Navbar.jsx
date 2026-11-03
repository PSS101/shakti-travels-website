import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Instagram } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/travelData';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

  // Close mobile drawer on Escape key or viewport resize above 1140px
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 1140 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const desktopNavLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Fleet', href: '#fleet' },
    { label: 'Terms', href: '#terms' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const mobileNavLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Travel Services', href: '#services' },
    { label: 'Tour Packages & Fares', href: '#packages' },
    { label: 'Our Vehicle Fleet', href: '#fleet' },
    { label: 'Rental Terms & Conditions', href: '#terms' },
    { label: 'Customer Reviews', href: '#reviews' },
    { label: 'Follow on Instagram', href: '#instagram' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* 1. Dedicated Logo Container: Guaranteed No Overlap Across All Breakpoints */}
        <div className="navbar-brand-wrapper">
          <a
            href="#home"
            className="brand-link"
            onClick={closeMenu}
            aria-label={`${BUSINESS_INFO.name} - Home`}
          >
            <div className="brand-logo-container">
              <img
                src={BUSINESS_INFO.logoPath}
                alt={`${BUSINESS_INFO.name} - ${BUSINESS_INFO.tagline}`}
                className="brand-logo-img"
                loading="eager"
                width="155"
                height="44"
              />
            </div>
          </a>
        </div>

        {/* 2. Desktop Navigation Menu: Cleanly spaced, zero overlap */}
        <nav className="nav-menu-desktop" aria-label="Desktop Navigation">
          {desktopNavLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* 3. Action CTAs (Call, WhatsApp, Instagram) */}
        <div className="nav-actions-desktop">
          <a
            href={BUSINESS_INFO.telUrl}
            className="btn btn--outline btn--sm nav-btn-phone"
            aria-label={`Call ${BUSINESS_INFO.phone}`}
          >
            <Phone size={15} />
            <span>{BUSINESS_INFO.phoneRaw}</span>
          </a>

          <a
            href={getWhatsAppUrl(BUSINESS_INFO.defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp btn--sm nav-btn-wa"
            aria-label="WhatsApp Us"
          >
            <MessageCircle size={15} />
            <span>WhatsApp</span>
          </a>

          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-btn"
            aria-label="Follow Shakti Travels on Instagram"
            title="Follow on Instagram"
          >
            <Instagram size={17} />
          </a>
        </div>

        {/* 4. Mobile / Tablet Quick CTA & Hamburger Toggle */}
        <div className="nav-mobile-controls">
          <a
            href={BUSINESS_INFO.telUrl}
            className="mobile-quick-btn mobile-quick-btn--call"
            aria-label={`Call ${BUSINESS_INFO.phone}`}
          >
            <Phone size={17} />
          </a>

          <a
            href={getWhatsAppUrl(BUSINESS_INFO.defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-quick-btn mobile-quick-btn--wa"
            aria-label="WhatsApp Us"
          >
            <MessageCircle size={17} />
          </a>

          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 5. Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-drawer"
          className="mobile-drawer"
          onClick={closeMenu}
          role="dialog"
          aria-modal="true"
        >
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="brand-logo-container p-1.5 inline-block">
                <img
                  src={BUSINESS_INFO.logoPath}
                  alt={BUSINESS_INFO.name}
                  className="h-8 w-auto"
                />
              </div>
              <button
                type="button"
                className="drawer-close-btn"
                onClick={closeMenu}
                aria-label="Close navigation drawer"
              >
                <X size={22} />
              </button>
            </div>

            <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 rounded-lg">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Proprietor: <span className="text-slate-950 font-extrabold">{BUSINESS_INFO.proprietor}</span>
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {BUSINESS_INFO.location}
              </div>
            </div>

            <nav className="mobile-drawer-nav" aria-label="Mobile Navigation">
              {mobileNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  <span>{link.label}</span>
                  <span className="mobile-nav-arrow" aria-hidden="true">›</span>
                </a>
              ))}
            </nav>

            <div className="mobile-drawer-phone-card">
              <span className="text-xs text-slate-500 font-semibold block mb-1">Direct Booking Helpline:</span>
              <a href={BUSINESS_INFO.telUrl} className="mobile-drawer-phone-number">
                <Phone size={16} className="text-amber-500" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <div className="text-xs text-slate-500 mt-1">
                Email: <a href={BUSINESS_INFO.emailUrl} className="text-sky-700 underline">{BUSINESS_INFO.email}</a>
              </div>
            </div>

            <div className="mobile-cta-group">
              <a
                href={BUSINESS_INFO.telUrl}
                className="btn btn--primary btn--sm justify-center flex-1"
              >
                <Phone size={15} />
                <span>Call Us</span>
              </a>

              <a
                href={getWhatsAppUrl(BUSINESS_INFO.defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp btn--sm justify-center flex-1"
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="mt-2 text-center">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-pink-700 hover:text-pink-800 transition-colors py-2.5 px-4 rounded-lg bg-pink-50 border border-pink-200 w-full justify-center"
              >
                <Instagram size={16} className="text-pink-600" />
                <span>Follow {BUSINESS_INFO.instagramHandle} on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
