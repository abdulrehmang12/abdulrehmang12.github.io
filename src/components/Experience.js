'use client';
import { useEffect, useRef } from 'react';

const experienceSections = [
  {
    category: 'Android Development',
    icon: '📱',
    points: [
      'Designed and developed an External Office Management Android App (available on GitHub), enabling employee/task tracking and basic workflow management.',
      'Implemented data persistence using Firebase (authentication, database, and storage).',
      'Built clean, user-friendly UI focused on internal productivity and ease of use.',
      'Integrated API-driven data flows and Firebase services for reliable, real-time data sync and notifications.',
      'Followed modular, maintainable architecture (MVVM / repository pattern) with Git version control.',
    ],
  },
  {
    category: 'Shopify & eCommerce',
    icon: '🛒',
    points: [
      'Built and launched multiple Shopify stores from concept to production-ready platforms.',
      'Engineered complete store architecture: collections, navigation hierarchy, catalog structure, and UX flow.',
      'Implemented advanced on-page SEO strategies (keyword clustering, optimized descriptions, metadata).',
      'Integrated Google Analytics and tracking tools for data-driven decisions.',
      'Optimized mobile responsiveness and site performance to boost engagement and reduce bounce rate.',
      'Managed product uploads at scale with structured tagging, filtering, and collections.',
      'Performed theme customization and code adjustments (HTML/CSS/JS/Liquid) for brand consistency.',
    ],
  },
  {
    category: 'MERN & Web Development',
    icon: '💻',
    points: [
      'Built MERN-stack applications with RESTful APIs using Node.js & Express with MongoDB.',
      'Developed React-based frontends with reusable components and responsive layouts.',
      'Implemented authentication, role-based access control, and CRUD operations.',
      'Integrated external APIs and third-party services (payment, email, analytics).',
      'Applied best practices for code structure, reusability, and Git-based workflows.',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" style={{ padding: '120px 24px', position: 'relative' }} ref={sectionRef}>
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{ color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.8rem', marginBottom: '12px', fontWeight: '500' }}>
            My Journey
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700' }}>
            Work <span style={{ color: '#f59e0b' }}>Experience</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* Job header */}
        <div className="fade-in glass-card" style={{ padding: '32px', marginBottom: '40px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>
              Freelance Android &amp; Web Developer
            </h3>
            <p style={{ color: '#9ca3af' }}>Self-Employed | Remote / Rawalpindi, Pakistan</p>
          </div>
          <div className="gold-badge" style={{ animation: 'pulseGlow 3s infinite' }}>
            🟢 2020 – Present
          </div>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '32px' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '14px', top: 0, bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, #f59e0b, rgba(245,158,11,0.1))',
          }}></div>

          {experienceSections.map((section, index) => (
            <div
              key={index}
              className={index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}
              style={{ marginBottom: index < experienceSections.length - 1 ? '40px' : '0', position: 'relative' }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute', left: '-26px', top: '4px',
                width: '24px', height: '24px',
                background: '#0a0a0a',
                border: '3px solid #f59e0b',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.7rem',
                zIndex: 2,
              }}>
                {section.icon}
              </div>

              <div className="glass-card" style={{ padding: '28px', marginLeft: '16px' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#f59e0b', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {section.category}
                </h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {section.points.map((point, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                      <span style={{ marginTop: '8px', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#f59e0b', flexShrink: 0 }}></span>
                      <span style={{ color: '#9ca3af', lineHeight: '1.7', fontSize: '0.95rem' }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}