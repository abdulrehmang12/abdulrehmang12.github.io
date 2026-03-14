'use client';

const skillCategories = [
  {
    title: 'Android Development',
    icon: '📱',
    color: '#a855f7',
    skills: [
      'Kotlin & Java',
      'Android SDK',
      'Firebase (Auth, Firestore, Realtime DB, FCM)',
      'REST API Integration (Retrofit/Volley)',
      'MVVM / Clean Architecture',
      'Internal Tools & Business Apps',
    ],
  },
  {
    title: 'Web & eCommerce',
    icon: '🌐',
    color: '#3b82f6',
    skills: [
      'MERN Stack (MongoDB, Express, React, Node)',
      'Shopify (Liquid, HTML, CSS, JS)',
      'Wix (Custom Sections & Layouts)',
      'Responsive Mobile-First UI/UX',
      'Performance Optimization & Page Speed',
      'Theme Customization & Store Setup',
    ],
  },
  {
    title: 'Growth & Analytics',
    icon: '📈',
    color: '#22c55e',
    skills: [
      'On-Page SEO & Keyword Strategy',
      'Conversion Rate Optimization (CRO)',
      'Google Analytics & Tracking Setup',
      'Advanced MS Excel (Pivot Tables, Dashboards)',
      'Data Cleaning & Analysis',
      'Reporting & Automation',
    ],
  },
  {
    title: 'Tools & General',
    icon: '🛠️',
    color: '#f59e0b',
    skills: [
      'Git / GitHub',
      'Google Search Console',
      'Client Communication & Requirements',
      'Documentation & Maintainability',
      'Canva / FlowCV',
      'JavaScript / TypeScript',
    ],
  },
];

export default function Skills() {

  return (
    <section id="skills" style={{ padding: '120px 24px', backgroundColor: '#080808', position: 'relative' }}>
      <div className="absolute" style={{ bottom: '10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)', borderRadius: '50%' }}></div>

      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{ color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.8rem', marginBottom: '12px', fontWeight: '500' }}>
            What I do best
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700' }}>
            My <span style={{ color: '#f59e0b' }}>Skills</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card"
              style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}
            >
              {/* Top accent line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(to right, ${category.color}, transparent)` }}></div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <span style={{ fontSize: '1.8rem' }}>{category.icon}</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff' }}>
                  {category.title}
                </h3>
              </div>

              <ul style={{ listStyle: 'none', padding: 0 }}>
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: '10px',
                      marginBottom: '14px', padding: '8px 12px',
                      borderRadius: '8px',
                    }}
                  >
                    <span style={{ color: category.color, marginTop: '2px', flexShrink: 0, fontSize: '0.7rem' }}>●</span>
                    <span style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}