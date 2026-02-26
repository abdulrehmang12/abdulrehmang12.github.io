'use client';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: 'Aura Mistica',
    subtitle: 'Premium Perfume eCommerce Brand',
    role: 'Founder & Lead Developer',
    description: 'Founded and developed a complete perfume brand from initial concept to fully operational Shopify store with premium positioning.',
    highlights: [
      'Designed brand identity, visual language, and store UI/UX',
      'Structured product categories, fragrance collections, and catalog architecture',
      'Created SEO-optimized, conversion-focused product pages',
      'Integrated analytics for traffic monitoring and sales tracking',
      'Built scalable backend structure for future expansion',
    ],
    tags: ['Shopify', 'Branding', 'SEO', 'UI/UX', 'Analytics'],
    gradient: 'linear-gradient(135deg, #f59e0b, #ea580c)',
    icon: '🧴',
    video: null, // No video for Aura Mistica
  },
  {
    title: 'Aura Belts',
    subtitle: 'Fashion Accessories eCommerce Store',
    role: 'Shopify Developer',
    description: 'Developed a Shopify store for formal, casual, and premium belt collections — zero to fully functional online store.',
    highlights: [
      'Implemented conversion-focused product pages',
      'Applied keyword-driven SEO for discoverability',
      'Structured store for smooth customer journey',
      'Built intuitive navigation, filters, and search',
    ],
    tags: ['Shopify', 'eCommerce', 'SEO', 'CRO'],
    gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    icon: '👔',
    video: '/videos/aura-belts-demo.mp4', // <-- Add your video file here
  },
  {
    title: 'Lagree Pulse',
    subtitle: 'Fitness Studio Promotional Website',
    role: 'Web Developer (Wix)',
    description: 'Designed and customized a Wix-based website to promote fitness studio services with growth-focused framework.',
    highlights: [
      'Created targeted landing pages for niche fitness keywords',
      'Structured content hierarchy for organic visibility',
      'Implemented growth-focused framework for lead generation',
      'Optimized design and strategic copy for conversions',
    ],
    tags: ['Wix', 'Landing Pages', 'SEO', 'Content Strategy'],
    gradient: 'linear-gradient(135deg, #22c55e, #10b981)',
    icon: '💪',
    video: '/videos/lagree-pulse-demo.mp4', // <-- Add your video file here
  },
  {
    title: 'Office Management App',
    subtitle: 'Internal Office Management Tool',
    role: 'Android Developer',
    description: 'Developed an office management Android app for employee tracking, task management, and workflow optimization.',
    highlights: [
      'Built employee/task tracking with Firebase',
      'Implemented access-controlled workflows',
      'Designed intuitive UI for non-technical staff',
      'Reliable sync and offline-friendly flows',
      'Versioned releases with reusable components',
    ],
    tags: ['Android', 'Kotlin', 'Firebase', 'Java'],
    gradient: 'linear-gradient(135deg, #a855f7, #6366f1)',
    icon: '📋',
    video: '/videos/office-app-demo.mp4', // <-- Add your video file here
  },
];

function VideoPlayer({ src, gradient }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '14px',
        overflow: 'hidden',
        marginBottom: '20px',
        border: '1px solid rgba(255,255,255,0.08)',
        background: '#000',
        cursor: 'pointer',
      }}
      onClick={togglePlay}
    >
      {/* Gradient top accent */}
      <div style={{ height: '3px', background: gradient }}></div>

      <video
        ref={videoRef}
        src={src}
        style={{
          width: '100%',
          display: 'block',
          borderRadius: '0 0 14px 14px',
          maxHeight: '220px',
          objectFit: 'cover',
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        playsInline
        preload="metadata"
      />

      {/* Play/Pause overlay */}
      <div
        style={{
          position: 'absolute',
          top: '3px',
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: isPlaying ? 'transparent' : 'rgba(0, 0, 0, 0.5)',
          transition: 'all 0.4s ease',
          opacity: isPlaying ? 0 : 1,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => {
          if (isPlaying) e.currentTarget.style.opacity = '0';
        }}
      >
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(245, 158, 11, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(245, 158, 11, 0.3)',
            transition: 'transform 0.3s ease',
          }}
        >
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#000">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#000" style={{ marginLeft: '3px' }}>
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </div>
      </div>

      {/* Video badge */}
      <div
        style={{
          position: 'absolute',
          top: '14px',
          right: '12px',
          padding: '4px 12px',
          background: 'rgba(245, 158, 11, 0.15)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '9999px',
          fontSize: '0.65rem',
          color: '#f59e0b',
          fontWeight: '600',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          backdropFilter: 'blur(8px)',
        }}
      >
        ▶ Demo Video
      </div>
    </div>
  );
}

export default function Projects() {
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
    const elements = sectionRef.current?.querySelectorAll('.fade-in, .scale-in');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" style={{ padding: '120px 24px', backgroundColor: '#080808', position: 'relative' }} ref={sectionRef}>
      <div className="absolute" style={{ top: '30%', right: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)', borderRadius: '50%' }}></div>

      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{ color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.8rem', marginBottom: '12px', fontWeight: '500' }}>
            What I have built
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700' }}>
            Key <span style={{ color: '#f59e0b' }}>Projects</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="scale-in"
              style={{
                background: 'rgba(20, 20, 20, 0.6)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '20px',
                overflow: 'hidden',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.3)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(245, 158, 11, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Gradient header - only show if no video */}
              {!project.video && (
                <div style={{ height: '6px', background: project.gradient }}></div>
              )}

              <div style={{ padding: '28px' }}>
                {/* Video player */}
                {project.video && (
                  <VideoPlayer src={project.video} gradient={project.gradient} />
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{
                    width: '48px', height: '48px',
                    background: 'rgba(245, 158, 11, 0.08)',
                    border: '1px solid rgba(245, 158, 11, 0.15)',
                    borderRadius: '14px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', flexShrink: 0,
                  }}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff' }}>{project.title}</h3>
                    <p style={{ color: 'rgba(245, 158, 11, 0.7)', fontSize: '0.8rem' }}>{project.subtitle}</p>
                  </div>
                </div>

                <p style={{ color: '#6b7280', fontSize: '0.75rem', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{project.role}</p>

                <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '20px', lineHeight: '1.65' }}>
                  {project.description}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                  {project.highlights.map((point, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', marginBottom: '8px' }}>
                      <span style={{ color: '#f59e0b', marginTop: '3px', fontSize: '0.6rem' }}>●</span>
                      <span style={{ color: '#6b7280' }}>{point}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}