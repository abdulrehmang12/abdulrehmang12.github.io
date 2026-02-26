'use client';
import { useState, useEffect } from 'react';

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
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 24px' : '20px 24px',
        background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ textDecoration: 'none', fontSize: '1.6rem', fontWeight: '800', transition: 'transform 0.3s ease' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <span style={{ color: '#f59e0b' }}>A</span>
          <span style={{ color: '#fde68a' }}>R</span>
          <span style={{ color: '#f59e0b' }}>.</span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: active === link.href.replace('#', '') ? '#f59e0b' : '#9ca3af',
                fontSize: '0.875rem',
                fontWeight: '500',
                padding: '8px 16px',
                borderRadius: '9999px',
                background: active === link.href.replace('#', '') ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
                transition: 'all 0.3s ease',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#f59e0b';
                e.target.style.background = 'rgba(245, 158, 11, 0.08)';
              }}
              onMouseLeave={(e) => {
                const isActive = active === link.href.replace('#', '');
                e.target.style.color = isActive ? '#f59e0b' : '#9ca3af';
                e.target.style.background = isActive ? 'rgba(245, 158, 11, 0.1)' : 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            flexDirection: 'column',
            gap: '5px',
            padding: '8px',
          }}
        >
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#f59e0b', borderRadius: '2px', transition: 'all 0.3s ease', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }}></span>
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#f59e0b', borderRadius: '2px', transition: 'all 0.3s ease', opacity: menuOpen ? 0 : 1 }}></span>
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#f59e0b', borderRadius: '2px', transition: 'all 0.3s ease', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          marginTop: '16px',
          padding: '16px',
          background: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          animation: 'fadeInDown 0.3s ease',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: active === link.href.replace('#', '') ? '#f59e0b' : '#9ca3af',
                fontSize: '1rem',
                padding: '12px 16px',
                borderRadius: '12px',
                background: active === link.href.replace('#', '') ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
                transition: 'all 0.3s ease',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}