'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);

      for (let i = navLinks.length - 1; i >= 0; i -= 1) {
        const sectionId = navLinks[i].href.replace('#', '');
        const section = document.getElementById(sectionId);
        if (section && window.scrollY >= section.offsetTop - 220) {
          setActive(sectionId);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`portfolio-nav ${scrolled ? 'portfolio-nav-scrolled' : ''}`}
      aria-label="Primary navigation"
    >
      <div className="portfolio-nav-inner">
        <a className="brand-mark" href="#top" aria-label="Abdul Rehman home">
          <Image src="/ar-logo-transparent.png" alt="" width={44} height={44} priority />
          <span>
            <strong>Abdul Rehman</strong>
            <small>Full Stack Developer</small>
          </span>
        </a>

        <div className="desktop-links">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace('#', '');
            return (
              <a key={link.label} className={isActive ? 'active' : ''} href={link.href}>
                {link.label}
              </a>
            );
          })}
        </div>

        <a className="nav-resume" href="/resume-abdul-rehman.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="/resume-abdul-rehman.pdf" target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>
      )}

      <style jsx>{`
        .portfolio-nav {
          position: fixed;
          inset: 0 0 auto;
          z-index: 50;
          padding: 18px 24px;
          transition: background 180ms ease, border-color 180ms ease, padding 180ms ease;
        }

        .portfolio-nav-scrolled {
          padding-block: 10px;
          background: rgba(7, 8, 13, 0.86);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(18px);
        }

        .portfolio-nav-inner {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 18px;
          align-items: center;
          width: min(1160px, 100%);
          margin: 0 auto;
        }

        .brand-mark {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
          color: #ffffff;
          text-decoration: none;
        }

        .brand-mark img {
          width: 42px;
          height: 42px;
          border-radius: 8px;
          object-fit: contain;
          background: transparent;
        }

        .brand-mark span {
          display: grid;
          gap: 1px;
        }

        .brand-mark strong {
          font-size: 0.96rem;
          line-height: 1.1;
        }

        .brand-mark small {
          color: #9aa6b6;
          font-size: 0.72rem;
        }

        .desktop-links {
          justify-self: center;
          display: flex;
          gap: 4px;
          align-items: center;
          padding: 6px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
        }

        .desktop-links a,
        .nav-resume,
        .mobile-menu a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 0.84rem;
          font-weight: 750;
        }

        .desktop-links a {
          border-radius: 6px;
          padding: 8px 10px;
        }

        .desktop-links a:hover,
        .desktop-links a.active {
          background: rgba(255, 103, 15, 0.14);
          color: #ff8a3d;
        }

        .nav-resume {
          justify-self: end;
          border: 1px solid rgba(255, 103, 15, 0.65);
          border-radius: 8px;
          padding: 10px 14px;
          color: #ffffff;
        }

        .mobile-menu-button {
          display: none;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.055);
          padding: 10px;
        }

        .mobile-menu-button span {
          display: block;
          width: 100%;
          height: 2px;
          margin: 5px 0;
          border-radius: 999px;
          background: #ffffff;
        }

        .mobile-menu {
          width: min(1160px, calc(100% - 48px));
          margin: 12px auto 0;
          display: grid;
          gap: 4px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          background: rgba(7, 8, 13, 0.96);
          padding: 8px;
          backdrop-filter: blur(18px);
        }

        .mobile-menu a {
          border-radius: 6px;
          padding: 12px;
        }

        .mobile-menu a:hover {
          background: rgba(255, 255, 255, 0.055);
        }

        @media (max-width: 960px) {
          .portfolio-nav-inner {
            grid-template-columns: 1fr auto;
          }

          .desktop-links,
          .nav-resume {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }
        }

        @media (max-width: 520px) {
          .portfolio-nav {
            padding-inline: 14px;
          }

          .brand-mark small {
            display: none;
          }

          .mobile-menu {
            width: calc(100% - 28px);
          }
        }
      `}</style>
    </nav>
  );
}
