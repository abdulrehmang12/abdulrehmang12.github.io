'use client';

const stats = [
  { number: '4+', label: 'Years Experience', icon: '🚀' },
  { number: '10+', label: 'Projects Completed', icon: '💼' },
  { number: '3+', label: 'Platforms Mastered', icon: '⚡' },
  { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
];

const highlights = [
  { title: 'Android Development', desc: 'Kotlin, Java, Firebase — internal tools & management apps', icon: '📱' },
  { title: 'Web & eCommerce', desc: 'MERN Stack, Shopify, Wix — end-to-end builds & optimization', icon: '🌐' },
  { title: 'Data & Operations', desc: 'Advanced Excel, reporting, automation & operational analytics', icon: '📊' },
];

export default function About() {

  return (
    <section id="about" style={{ padding: '120px 24px', position: 'relative' }}>
      {/* Subtle bg accent */}
      <div className="absolute" style={{ top: '20%', right: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)', borderRadius: '50%' }}></div>

      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{ color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.8rem', marginBottom: '12px', fontWeight: '500' }}>
            Get to know me
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700' }}>
            About <span style={{ color: '#f59e0b' }}>Me</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* Bio */}
        <div className="fade-in-left glass-card" style={{ padding: '40px', marginBottom: '48px' }}>
          <p style={{ color: '#d1d5db', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '20px' }}>
            Strategic and performance-driven <span style={{ color: '#f59e0b', fontWeight: '600' }}>Android &amp; Web Developer</span> with
            4+ years of experience building and scaling conversion-focused eCommerce brands and business websites.
          </p>
          <p style={{ color: '#9ca3af', lineHeight: '1.9' }}>
            Proven ability to transform brand and product concepts into fully operational, revenue-ready online experiences
            with solid SEO architecture, analytics integration, CRO, and scalable infrastructure for long-term growth.
            Comfortable working independently or as part of a remote team, communicating clearly with non-technical stakeholders.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {highlights.map((item, i) => (
            <div key={i} className="glass-card" style={{ padding: '28px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{item.icon}</div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#f59e0b', marginBottom: '8px' }}>{item.title}</h4>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px' }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card"
              style={{ padding: '28px 16px', textAlign: 'center' }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{stat.icon}</div>
              <h4 style={{ fontSize: '2rem', fontWeight: '800', color: '#f59e0b', marginBottom: '6px' }}>
                {stat.number}
              </h4>
              <p style={{ color: '#6b7280', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}