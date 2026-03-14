'use client';
import { useState, useEffect } from 'react';

const roles = [
  'Android Developer',
  'Shopify Expert',
  'MERN Stack Developer',
  'Wix Developer',
  'eCommerce Specialist',
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
          setText(currentRole.substring(0, text.length + 1));
          if (text === currentRole) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(currentRole.substring(0, text.length - 1));
          if (text === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Dark background */}
      <div className="absolute inset-0" style={{ background: '#0a0a0a' }}></div>

      {/* Ambient floating orbs */}
      <div
        className="absolute"
        style={{
          top: '15%', left: '10%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      ></div>
      <div
        className="absolute"
        style={{
          bottom: '10%', right: '10%',
          width: '350px', height: '350px',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      ></div>
      <div
        className="absolute"
        style={{
          top: '50%', left: '60%',
          width: '250px', height: '250px',
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      ></div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(245, 158, 11, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div
          style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'rgba(245, 158, 11, 0.08)',
            border: '1px solid rgba(245, 158, 11, 0.2)',
            borderRadius: '9999px',
            marginBottom: '32px',
          }}
        >
          <p style={{ color: '#f59e0b', fontSize: '0.8rem', fontWeight: '500', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            ✦ Welcome to my portfolio ✦
          </p>
        </div>

        <h1 className="font-extrabold" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', marginBottom: '16px', lineHeight: '1.1' }}>
          Abdul{' '}
          <span className="text-gradient">Rehman</span>
        </h1>

        {/* Typewriter */}
        <div style={{ height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.6rem)', fontWeight: '300', color: '#9ca3af' }}>
            {text}
            <span style={{ color: '#f59e0b', marginLeft: '2px' }}>|</span>
          </h2>
        </div>

        <p style={{ color: '#6b7280', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: '1.8' }}>
          Transforming brand and product concepts into fully operational, revenue-ready
          online experiences with scalable infrastructure for long-term growth.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>

        {/* Tech stack badges */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '48px' }}>
          {['Android', 'Shopify', 'React', 'Node.js', 'Firebase'].map((tech) => (
            <span
              key={tech}
              style={{
                padding: '6px 16px',
                fontSize: '0.75rem',
                color: '#6b7280',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '9999px',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}