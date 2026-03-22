'use client';

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
    github: null,
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
    github: null,
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
    github: null,
  },
  {
    title: 'Office Management App',
    subtitle: 'Android App with Firebase Backend',
    role: 'Android Developer',
    description: 'Android application for employee tracking, task management, and workflow optimization with real-time Firebase sync.',
    highlights: [
      'Built employee/task tracking with Firebase',
      'Implemented access-controlled workflows',
      'Designed intuitive UI for non-technical staff',
      'Reliable sync and offline-friendly flows',
      'Versioned releases with reusable components',
    ],
    tags: ['Android', 'Kotlin', 'Firebase', 'Java'],
    gradient: 'linear-gradient(135deg, #a855f7, #6366f1)',
    icon: '📱',
    github: 'https://github.com/abdulrehmang12/OfficeApp',
  },
  {
    title: 'AuraSEO - SaaS Platform',
    subtitle: 'AI-Powered SEO Analytics & Automation SaaS',
    role: 'Full Stack Developer',
    description: 'Built a comprehensive SaaS platform for SEO analytics with AI integration, premium features, and Stripe payment processing.',
    highlights: [
      'Developed with Firebase backend and Firestore database',
      'Integrated Stripe for subscription management',
      'Connected OpenAI API for intelligent insights',
      'Built responsive premium UI components with TypeScript',
      'Implemented role-based access control and user authentication',
      'Created real-time analytics dashboard',
    ],
    tags: ['TypeScript', 'Firebase', 'Stripe', 'OpenAI', 'React', 'SaaS'],
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    icon: '🚀',
    github: 'https://github.com/abdulrehmang12/seo-blog-saas',
  },
  {
    title: 'Weather App',
    subtitle: 'Real-Time Weather Application',
    role: 'Frontend Developer',
    description: 'Interactive weather application built with React that provides real-time weather data with beautiful UI and smooth animations.',
    highlights: [
      'Built with React for component-based architecture',
      'Integrated OpenWeather API for real-time data',
      'Implemented location-based weather fetching',
      'Created responsive design for all devices',
      'Added weather animations and visual indicators',
      'Optimized for performance and user experience',
    ],
    tags: ['React', 'JavaScript', 'API Integration', 'Responsive Design'],
    gradient: 'linear-gradient(135deg, #3b82f6, #1e40af)',
    icon: '🌤️',
    github: 'https://github.com/abdulrehmang12/weather-app',
  },
  {
    title: 'Collaborative Code Editor',
    subtitle: 'Real-Time Code Collaboration Platform',
    role: 'Full Stack Developer',
    description: 'A real-time collaborative code editor where multiple users can code together with live synchronization and syntax highlighting.',
    highlights: [
      'Built with TypeScript for type-safe development',
      'Implemented WebSocket for real-time collaboration',
      'Added syntax highlighting for multiple languages',
      'Created user presence indicators',
      'Built responsive editor interface',
      'Implemented project management features',
    ],
    tags: ['TypeScript', 'WebSocket', 'React', 'Collaboration', 'Code Editor'],
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    icon: '💻',
    github: 'https://github.com/abdulrehmang12/collab-code-editor',
  },
  {
    title: 'LinkedIn Job Automator',
    subtitle: 'Job Application Automation Tool',
    role: 'Full Stack Developer',
    description: 'Automated tool for streamlining LinkedIn job applications with intelligent filtering and batch processing capabilities.',
    highlights: [
      'Developed job filtering and matching algorithm',
      'Automated application submission with error handling',
      'Built scheduling system for batch operations',
      'Implemented user dashboard for tracking applications',
      'Added job preference and customization settings',
      'Created detailed analytics and reporting',
    ],
    tags: ['JavaScript', 'Automation', 'LinkedIn API', 'Node.js', 'Web Scraping'],
    gradient: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
    icon: '💼',
    github: 'https://github.com/abdulrehmang12/linkedin-job-automator',
  },
  {
    title: 'AI Project Planner',
    subtitle: 'Intelligent Project Planning Assistant',
    role: 'Full Stack Developer',
    description: 'AI-powered project planning tool that helps teams organize tasks, manage timelines, and optimize project workflows.',
    highlights: [
      'Integrated AI for intelligent task suggestions',
      'Built project timeline and milestone tracking',
      'Implemented team collaboration features',
      'Created smart resource allocation system',
      'Added risk assessment and planning analysis',
      'Developed real-time project dashboard',
    ],
    tags: ['JavaScript', 'AI/ML', 'Project Management', 'React', 'Node.js'],
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    icon: '📊',
    github: 'https://github.com/abdulrehmang12/ai-project-planner',
  },
  {
    title: 'Full Stack eCommerce Design',
    subtitle: 'Complete eCommerce Platform Architecture',
    role: 'Full Stack Developer',
    description: 'Comprehensive full-stack eCommerce solution featuring product catalog, shopping cart, checkout, and payment integration.',
    highlights: [
      'Built complete product catalog management system',
      'Implemented shopping cart with session persistence',
      'Created secure checkout flow',
      'Integrated payment gateway',
      'Built admin panel for inventory management',
      'Optimized database queries for performance',
    ],
    tags: ['JavaScript', 'MERN Stack', 'React', 'Node.js', 'MongoDB'],
    gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
    icon: '🛒',
    github: 'https://github.com/abdulrehmang12/ecommerce-fullstack-design',
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '120px 24px', backgroundColor: '#080808', position: 'relative' }}>
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
              }}
            >
              <div style={{ height: '6px', background: project.gradient }}></div>

              <div style={{ padding: '28px' }}>
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

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 16px',
                      background: 'rgba(245, 158, 11, 0.1)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      borderRadius: '8px',
                      color: '#f59e0b',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(245, 158, 11, 0.2)';
                      e.target.style.borderColor = 'rgba(245, 158, 11, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(245, 158, 11, 0.1)';
                      e.target.style.borderColor = 'rgba(245, 158, 11, 0.3)';
                    }}
                  >
                    🐙 View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
