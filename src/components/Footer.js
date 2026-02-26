'use client';

const links = [
  { label: 'GitHub', href: 'https://github.com/abdulrehmang12' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdulrehmang12' },
  { label: 'Email', href: 'mailto:mano555m10@gmail.com' },
];

export default function Footer() {
  return (
    <footer style={{ padding: '48px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', background: '#060606' }}>
      <div style={{
        maxWidth: '1152px', margin: '0 auto',
        display: 'flex', flexWrap: 'wrap',
        justifyContent: 'space-between', alignItems: 'center', gap: '20px',
      }}>
        <div>
          <a href="#" style={{ textDecoration: 'none', fontSize: '1.3rem', fontWeight: '800' }}>
            <span style={{ color: '#f59e0b' }}>A</span>
            <span style={{ color: '#fde68a' }}>R</span>
            <span style={{ color: '#f59e0b' }}>.</span>
          </a>
          <p style={{ color: '#4b5563', fontSize: '0.8rem', marginTop: '8px' }}>
            &copy; 2026 Abdul Rehman. All rights reserved.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '24px' }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#6b7280',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#f59e0b')}
              onMouseLeave={(e) => (e.target.style.color = '#6b7280')}
            >
              {link.label}
            </a>
          ))}
        </div>

        <p style={{ color: '#4b5563', fontSize: '0.75rem' }}>
          Built with Next.js &amp; ☕
        </p>
      </div>
    </footer>
  );
}