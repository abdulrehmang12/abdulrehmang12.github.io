'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const roles = [
  'MERN Stack Developer',
  'React and Next.js Engineer',
  'Node.js API Developer',
  'Shopify and SaaS Builder',
];

const metrics = [
  { value: '4+', label: 'Years shipping software and eCommerce projects' },
  { value: '10+', label: 'Client projects delivered end to end' },
  { value: '1k+', label: 'Daily API requests handled in production systems' },
  { value: '30%', label: 'Average page speed lift on Shopify stores' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentRole.slice(0, text.length + 1);
          setText(next);
          if (next === currentRole) {
            setTimeout(() => setIsDeleting(true), 1200);
          }
          return;
        }

        const next = currentRole.slice(0, text.length - 1);
        setText(next);
        if (!next) {
          setIsDeleting(false);
          setRoleIndex((value) => (value + 1) % roles.length);
        }
      },
      isDeleting ? 34 : 72
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="top" className="hero-section">
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="hero-availability">Hey, Im</div>
          <h1>
            Abdul Rehman, a Full-stack developer building MERN apps, SaaS tools, and Shopify storefronts.
          </h1>
          <p className="hero-role" aria-label="Current technical focus">
            {text}
            <span aria-hidden="true">|</span>
          </p>
          <p className="hero-summary">
            Results-driven full stack developer with 4+ years of experience across MERN,
            TypeScript, REST APIs, Firebase, Stripe, OpenAI integrations, CI/CD, and
            performance-focused eCommerce builds.
          </p>

          <div className="button-row">
            <a className="btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn-secondary" href="/resume-abdul-rehman.pdf" target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <a className="btn-secondary" href="#contact">
              Contact Me
            </a>
          </div>

          <ul className="pill-list hero-stack" aria-label="Primary skills">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Firebase', 'Stripe', 'Shopify'].map(
              (skill) => (
                <li className="pill" key={skill}>
                  {skill}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="hero-visual panel" aria-label="Portfolio identity">
          <Image src="/ar-logo-transparent.png" alt="AR logo" width={260} height={260} priority />
          <div className="hero-card-copy">
            <span>Portfolio focus</span>
            <strong>Full-stack systems with business outcomes</strong>
            <p>MERN apps, SaaS dashboards, secure APIs, payment flows, and optimized storefronts.</p>
          </div>
        </div>

        <div className="metric-grid hero-metrics">
          {metrics.map((metric) => (
            <div className="metric panel" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 96px 24px 50px;
          overflow: hidden;
        }

        .hero-grid-pattern {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: linear-gradient(to bottom, black, transparent 92%);
          pointer-events: none;
        }

        .hero-layout {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(280px, 0.72fr);
          gap: 34px;
          align-items: center;
        }

        .hero-copy {
          max-width: 760px;
        }

        .hero-availability {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          margin-bottom: 18px;
          border: 1px solid rgba(255, 103, 15, 0.32);
          border-radius: 999px;
          background: rgba(255, 103, 15, 0.1);
          color: #ffb07a;
          padding: 0 14px;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(2.25rem, 5.3vw, 3.8rem);
          font-weight: 900;
          line-height: 1.02;
          letter-spacing: 0;
        }

        .hero-role {
          min-height: 36px;
          margin: 18px 0 0;
          color: #ff8a3d;
          font-size: clamp(1.05rem, 2.2vw, 1.45rem);
          font-weight: 800;
        }

        .hero-role span {
          margin-left: 2px;
          color: #ffffff;
        }

        .hero-summary {
          max-width: 680px;
          margin: 12px 0 22px;
          color: #b7c0cf;
          font-size: 1rem;
          line-height: 1.68;
        }

        .hero-stack {
          margin-top: 28px;
        }

        .hero-visual {
          position: relative;
          align-self: stretch;
          min-height: 360px;
          display: grid;
          align-content: center;
          justify-items: center;
          gap: 20px;
          padding: 28px;
          overflow: hidden;
        }

        .hero-visual::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg, rgba(78, 14, 119, 0.55), transparent 42%),
            linear-gradient(225deg, rgba(255, 103, 15, 0.36), transparent 46%);
          opacity: 0.75;
        }

        .hero-visual img,
        .hero-card-copy {
          position: relative;
          z-index: 1;
        }

        .hero-visual img {
          width: min(210px, 62%);
          height: auto;
          border-radius: 8px;
          background: transparent;
          object-fit: contain;
          box-shadow: 0 24px 55px rgba(0, 0, 0, 0.36);
        }

        .hero-card-copy {
          width: 100%;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding-top: 22px;
        }

        .hero-card-copy span {
          color: #ffb07a;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .hero-card-copy strong {
          display: block;
          margin-top: 8px;
          color: #ffffff;
          font-size: 1.25rem;
          line-height: 1.25;
        }

        .hero-card-copy p {
          margin: 10px 0 0;
          color: #d2d8e2;
          line-height: 1.65;
        }

        .hero-metrics {
          grid-column: 1 / -1;
        }

        @media (max-width: 900px) {
          .hero-section {
            min-height: auto;
            padding: 112px 18px 64px;
          }

          .hero-layout {
            grid-template-columns: 1fr;
          }

          .hero-visual {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}
