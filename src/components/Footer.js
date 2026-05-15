'use client';

import Image from 'next/image';

const links = [
  { label: 'GitHub', href: 'https://github.com/abdulrehmang12' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdulrehmang12' },
  { label: 'Email', href: 'mailto:Mano555m10@gmail.com' },
  { label: 'Resume', href: '/resume-abdul-rehman.pdf' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="footer-brand" href="#top" aria-label="Back to top">
          <Image src="/ar-logo-transparent.png" alt="" width={38} height={38} />
          <span>
            <strong>Abdul Rehman Bin Imran</strong>
            <small>Full Stack Developer</small>
          </span>
        </a>

        <div className="footer-links">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>

        <p>&copy; 2026 Abdul Rehman Bin Imran. All rights reserved.</p>
      </div>

      <style jsx>{`
        .footer {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(7, 8, 13, 0.92);
          padding: 34px 24px;
        }

        .footer-inner {
          display: grid;
          gap: 18px;
          align-items: center;
          justify-items: center;
          text-align: center;
        }

        .footer-brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #ffffff;
          text-decoration: none;
        }

        .footer-brand img {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: transparent;
          object-fit: contain;
        }

        .footer-brand span {
          display: grid;
          gap: 2px;
        }

        .footer-brand strong {
          font-size: 0.95rem;
        }

        .footer-brand small,
        .footer p {
          color: #8b96a8;
          font-size: 0.82rem;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
        }

        .footer-links a {
          color: #cbd5e1;
          font-size: 0.85rem;
          font-weight: 750;
          text-decoration: none;
        }

        .footer-links a:hover {
          color: #ff8a3d;
        }

        .footer p {
          margin: 0;
        }

        @media (max-width: 720px) {
          .footer-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
