'use client';
import { useEffect, useRef } from 'react';

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );
    const elements = sectionRef.current?.querySelectorAll('.fade-in, .scale-in');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" style={{ padding: '120px 24px', position: 'relative' }} ref={sectionRef}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.8rem', marginBottom: '12px', fontWeight: '500' }}>
            Academic background
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700' }}>
            My <span style={{ color: '#f59e0b' }}>Education</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="scale-in" style={{ position: 'relative' }}>
          {/* Animated border glow */}
          <div
            style={{
              position: 'absolute', inset: '-2px',
              background: 'linear-gradient(135deg, #f59e0b, transparent, #f59e0b, transparent)',
              borderRadius: '22px',
              animation: 'rotateBorder 6s linear infinite',
              opacity: 0.3,
              filter: 'blur(4px)',
            }}
          ></div>

          <div className="glass-card" style={{ padding: '48px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎓</div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
              Bachelor&apos;s in Computer Science
            </h3>
            <p style={{ color: '#f59e0b', fontSize: '1.1rem', fontWeight: '500', marginBottom: '8px' }}>
              National University of Modern Languages (NUML)
            </p>
            <div className="gold-badge" style={{ marginTop: '16px' }}>2020 – 2024</div>

            <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
              {['Data Structures', 'OOP', 'Web Dev', 'Database Systems', 'Mobile App Dev'].map((course) => (
                <span key={course} className="tag">{course}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}