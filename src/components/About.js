'use client';

import Image from 'next/image';

const strengths = [
  {
    title: 'Full-stack product delivery',
  },
  {
    title: 'Business-focused engineering',
  },
  {
    title: 'Remote-ready collaboration',
  },
];

const quickFacts = [
  { value: '4+', label: 'Years experience' },
  { value: '10+', label: 'Projects delivered' },
  { value: 'MERN', label: 'Primary stack' },
];

export default function About() {
  return (
    <section id="about" className="site-section">
      <div className="container about-shell">
        <div className="about-media">
          <div className="about-photo panel">
            <Image
              src="/abdul-rehman-profile.jpeg"
              alt="Abdul Rehman Bin Imran"
              width={900}
              height={1100}
              sizes="(max-width: 900px) 100vw, 430px"
            />
          </div>

          <div className="about-facts panel">
            {quickFacts.map((fact) => (
              <div className="fact-card" key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-content panel">
          <p className="section-kicker">About Me</p>
          <h2 className="section-title">
            A full stack developer who can build the product and understand the business behind it.
          </h2>
          <p className="about-lead">
            I am Abdul Rehman Bin Imran, a Rawalpindi-based full stack developer with 4+ years
            of experience building scalable web applications, SaaS platforms, and eCommerce
            systems using the MERN stack, TypeScript, Firebase, Shopify, and cloud deployment tools.
          </p>

          <div className="about-strengths">
            {strengths.map((item) => (
              <div className="strength-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-shell {
          display: grid;
          grid-template-columns: minmax(320px, 0.82fr) minmax(0, 1.18fr);
          gap: 26px;
          align-items: stretch;
        }

        .about-media {
          display: grid;
          gap: 14px;
          align-content: start;
        }

        .about-photo {
          overflow: hidden;
          padding: 10px;
          background:
            linear-gradient(135deg, rgba(78, 14, 119, 0.3), rgba(255, 103, 15, 0.18)),
            rgba(12, 14, 24, 0.78);
        }

        .about-photo img {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          object-position: center 28%;
          border-radius: 6px;
          filter: saturate(1.02) contrast(1.02);
        }

        .about-facts {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          padding: 10px;
        }

        .fact-card {
          min-height: 88px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 7px;
          background: rgba(255, 255, 255, 0.035);
          padding: 16px 12px;
        }

        .fact-card strong {
          display: block;
          color: #ff8a3d;
          font-size: clamp(1.35rem, 3vw, 1.85rem);
          line-height: 1;
        }

        .fact-card span {
          display: block;
          margin-top: 8px;
          color: #aeb8c7;
          font-size: 0.76rem;
          font-weight: 800;
          line-height: 1.35;
          text-transform: uppercase;
        }

        .about-content {
          padding: clamp(24px, 4vw, 40px);
        }

        .about-content :global(.section-title) {
          max-width: 780px;
        }

        .about-lead {
          margin: 24px 0 0;
          color: #e2e8f0;
          font-size: 1.08rem;
          line-height: 1.78;
        }

        .about-copy {
          margin: 16px 0 0;
          color: #aeb8c7;
          line-height: 1.78;
        }

        .about-strengths {
          display: grid;
          grid-template-columns: repeat(3, minmax(120px, 1fr));
          gap: 10px;
          margin-top: 30px;
        }

        .strength-card {
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.045);
          padding: 18px;
          transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
        }

        .strength-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 103, 15, 0.4);
          background: rgba(255, 103, 15, 0.075);
        }

        .strength-card h3 {
          margin: 0 0 8px;
          color: #ffffff;
          font-size: 1rem;
        }

        .strength-card p {
          margin: 0;
          color: #aeb8c7;
          line-height: 1.65;
        }

        @media (max-width: 980px) {
          .about-shell {
            grid-template-columns: 1fr;
          }

          .about-media {
            grid-template-columns: minmax(220px, 0.68fr) minmax(180px, 0.32fr);
            align-items: stretch;
          }

          .about-facts {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 720px) {
          .about-media,
          .about-strengths {
            grid-template-columns: 1fr;
          }

          .about-facts {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .about-photo img {
            aspect-ratio: 4 / 3;
          }
        }

        @media (max-width: 460px) {
          .about-facts {
            grid-template-columns: 1fr;
          }

          .fact-card {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}
