'use client';

import { useEffect, useRef, useState } from 'react';

const navItems = [
  ['Skills', '#skills'],
  ['Full Stack', '#fullstack'],
  ['Shopify', '#shopify'],
  ['Design', '#design'],
  ['About', '#about'],
  ['Contact', '#contact'],
];

const marqueeItems = [
  'React',
  'Node.js',
  'TypeScript',
  'MongoDB',
  'Shopify Liquid',
  'Firebase',
  'Socket.io',
  'Docker',
  'OpenAI API',
  'Stripe',
  'Next.js',
  'Kotlin',
  'GSAP',
  'Express.js',
  'Dawn Theme',
];

const skills = [
  {
    icon: 'FE',
    name: 'Frontend Development',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'HTML5 / CSS3'],
  },
  {
    icon: 'API',
    name: 'Backend & APIs',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'RBAC', 'Socket.io', 'WebSockets'],
  },
  {
    icon: 'DB',
    name: 'Database & BaaS',
    tags: ['MongoDB', 'Firebase Auth', 'Firestore', 'Realtime DB', 'Firebase Storage', 'FCM'],
  },
  {
    icon: 'EC',
    name: 'Shopify Development',
    tags: ['Liquid', 'Dawn Theme', 'Custom Sections', 'Metafields', 'Theme Customization', 'Catalog Architecture'],
  },
  {
    icon: 'AI',
    name: 'Integrations & AI',
    tags: ['Stripe Subscriptions', 'OpenAI API', 'Anthropic API', 'Google Analytics', 'Search Console'],
  },
  {
    icon: 'OPS',
    name: 'Mobile & DevOps',
    tags: ['Kotlin', 'Android', 'Material Design', 'Docker', 'Git', 'Vercel', 'Render'],
  },
];

const modalData = {
  hireflow: {
    title: 'HireFlow - Job Portal & ATS',
    hasVideo: false,
    desc: 'A production-grade full-stack job portal and applicant tracking system with separate auth flows for job seekers and employers. Built with a public job board, full applicant pipeline management, automated notifications, and a responsive React UI.',
    features: [
      'Role-based JWT auth for job seekers and employers',
      'Public job board with keyword search, filters, and pagination',
      'Full applicant pipeline: applied, shortlisted, interviewed, offered, rejected',
      'PDF resume upload with server-side validation using Multer',
      'Nodemailer email notification hooks on application events',
      'Automated job expiry via node-cron daily checks',
      'TanStack Query for server state and Zustand for client state',
      'Responsive React UI with performance-optimized data fetching',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt', 'Multer', 'Nodemailer', 'node-cron', 'TanStack Query', 'Zustand'],
    github: 'https://github.com/abdulrehmang12/HireFlow-Job-Portal',
  },
  chat: {
    title: 'Realtime Chat App',
    hasVideo: false,
    desc: 'Full-stack real-time messaging platform with Socket.io. Supports conversation rooms, online presence detection, typing indicators, read receipts, emoji reactions, and file attachment upload.',
    features: [
      'Live messaging with Socket.io conversation rooms',
      'Online presence and last-seen tracking',
      'Typing indicators and read receipts',
      'Emoji reactions and file attachment upload/serving',
      'JWT authentication with bcrypt password hashing',
      'Authenticated socket connections and server-side room membership checks',
      'Message persistence in MongoDB',
      'Docker Compose deployment structure',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT', 'bcrypt', 'Docker'],
    github: 'https://github.com/abdulrehmang12/Realtime-Chat-App',
  },
  auraseo: {
    title: 'AuraSEO - AI SaaS Platform',
    hasVideo: false,
    desc: 'AI-powered SaaS platform integrating OpenAI API for SEO analysis, content generation, and keyword recommendations. Features tiered Stripe subscription billing, Firebase Auth, and a dashboard with usage tracking.',
    features: [
      'OpenAI API integration for SEO analysis and content generation',
      'Keyword recommendations and real-time AI feedback',
      'Stripe subscription billing with tiered plans',
      'Firebase Auth for secure user management',
      'Usage tracking and plan management dashboard',
      'TypeScript codebase for type-safe development',
      'Firebase Firestore for data persistence',
    ],
    stack: ['TypeScript', 'React', 'Firebase Auth', 'Firestore', 'Stripe', 'OpenAI API'],
  },
  collab: {
    title: 'Collaborative Code Editor',
    hasVideo: false,
    desc: 'Real-time multi-user collaborative code editor with live WebSocket sync, syntax highlighting, user presence indicators, and workspace session management.',
    features: [
      'Real-time multi-user editing with WebSocket sync',
      'Syntax highlighting for multiple languages',
      'Live user presence and cursor indicators',
      'Workspace and session management',
      'Responsive editor interface',
    ],
    stack: ['TypeScript', 'React', 'WebSockets'],
    github: 'https://github.com/abdulrehmang12/collab-editor',
  },
  url: {
    title: 'URL Shortener Pro',
    hasVideo: false,
    desc: 'Full-stack URL shortening service with custom alias support, click analytics dashboard, link expiry management, and clean redirect handling with 404 fallback flows.',
    features: ['Custom alias URL shortening', 'Click analytics and dashboard', 'Link expiry management', 'Redirect handling with 404 fallback', 'Clean responsive dashboard UI'],
    stack: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/abdulrehmang12/URL-Shortner-Pro',
  },
  recipe: {
    title: 'Recipe App for Nutritioner',
    hasVideo: false,
    desc: 'Recipe management and nutrition tracking application with Firebase backend. Features ingredient breakdowns, nutritional data display, and user-saved recipe collections.',
    features: ['Recipe management with ingredient breakdowns', 'Nutritional data display and tracking', 'User-saved recipe collections', 'Firebase Firestore backend', 'TypeScript for type-safe development'],
    stack: ['TypeScript', 'React', 'Firebase'],
    github: 'https://github.com/abdulrehmang12/Recipe-App-For-Nutritioner',
  },
  notes: {
    title: 'Notes App',
    hasVideo: false,
    desc: 'Real-time notes application with Firebase Firestore sync, CRUD operations, rich text editing, tag-based organization, and user authentication.',
    features: ['Real-time Firestore sync', 'Rich text editing', 'Tag-based note organization', 'Firebase Auth user management', 'Cross-device responsive UI'],
    stack: ['JavaScript', 'React', 'Firebase Firestore', 'Firebase Auth'],
    github: 'https://github.com/abdulrehmang12/Notes-App',
  },
  office: {
    title: 'OfficeApp - Android Office Management',
    hasVideo: true,
    videoSrc: '/videos/office-app-demo.mp4',
    desc: 'Android office management application built with Kotlin and Firebase. Features smart announcements, categories, priority levels, expiry-based auto-hiding, FCM push notifications, and Firebase Auth.',
    features: ['Smart announcements with HR, General, Urgent, and Events categories', 'Priority levels: Urgent, Important, Normal', 'Expiry-based auto-hiding announcements', 'Firebase Cloud Messaging push notifications', 'Firebase Auth for secure login', 'Firebase Firestore backend', 'Material Design UI'],
    stack: ['Kotlin', 'Android SDK', 'Firebase Auth', 'Firestore', 'FCM', 'Material Design'],
    github: 'https://github.com/abdulrehmang12/OfficeApp',
  },
  aurabelts: {
    title: 'Aura Belts - Shopify Store',
    hasVideo: true,
    videoSrc: '/videos/aura-belts-demo.mp4',
    desc: 'Complete Shopify storefront for a premium fashion belts brand. Built custom Liquid sections with schema controls, metafield-driven product displays, animated sliders, and collection filters on top of the Dawn theme.',
    features: ['Custom Liquid sections with Shopify customizer schema', 'Metafield-driven product displays and content blocks', 'Animated product sliders and collection filters', 'Dawn theme extended with custom CSS and JS', 'Scroll-triggered animations and micro-interactions', 'SEO-optimized page structure', 'Performance-tuned assets and fast load times'],
    stack: ['Shopify', 'Liquid', 'Dawn Theme', 'Custom Sections', 'Metafields', 'JavaScript', 'CSS'],
  },
  lagree: {
    title: 'Lagree Pulse - Shopify Store',
    hasVideo: true,
    videoSrc: '/videos/lagree-pulse-demo.mp4',
    desc: 'Fitness brand Shopify storefront with animated product showcases, metafield-powered content blocks, custom sliders, and interactive UI components using vanilla JavaScript.',
    features: ['Animated product showcase sections with vanilla JS', 'Metafield-powered dynamic content blocks', 'Custom category filters and product sliders', 'Interactive UI components in Shopify theme architecture', 'SEO-optimized product and collection pages', 'Cross-browser compatible', 'Performance-tuned asset delivery', 'Brand-aligned CRO layout'],
    stack: ['Shopify', 'Liquid', 'Dawn Theme', 'JavaScript', 'CSS'],
  },
  ascency: {
    title: 'Ascency - Agency Landing Page',
    hasVideo: true,
    videoSrc: '/videos/ascency-demo.mp4',
    desc: 'Premium marketing and agency landing page template. Conversion-focused layout with smooth GSAP animations, SEO-optimized structure, and a customizable design system.',
    features: ['Modern conversion-focused layout', 'Smooth GSAP scroll animations and interactions', 'SEO-optimized HTML structure', 'Customizable colors, typography, and content', 'Cross-browser compatible', 'Performance-optimized structure', 'Responsive across all devices'],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
  },
  stanza: {
    title: 'Stanza - Minimal Landing Page',
    hasVideo: true,
    videoSrc: '/videos/stanza-demo.mp4',
    desc: 'Minimal landing page template focused on typography, spacing, and elegant visuals. Built for personal portfolios, creative projects, and niche product showcases.',
    features: ['Minimal typography-driven design', 'Responsive across mobile, tablet, and desktop', 'Lightweight and fast-loading', 'Reusable section components', 'Smooth transitions and subtle interactions'],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
  },
  fundify: {
    title: 'Fundify - Agency Landing Page',
    hasVideo: true,
    videoSrc: '/videos/fundify-demo.mp4',
    desc: 'Bold, high-impact marketing agency landing page template with dynamic animations and a structured design system for creative studios and growth-focused service providers.',
    features: ['Bold modern UI', 'Dynamic animations and smooth interactions', 'Structured customizable design system', 'Responsive from mobile to desktop', 'Fast loading and SEO optimized', 'Built for agencies and service providers'],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
  },
};

const fullStackProjects = [
  ['hireflow', '01 / 08', 'Full Stack', 'badge-fs', 'HireFlow - Job Portal & ATS', 'Full-stack applicant tracking system with role-based auth for job seekers and employers. Features public job board filters, applicant pipelines, PDF uploads, Nodemailer hooks, and job expiry automation.', ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Multer', 'Nodemailer', 'node-cron', 'TanStack Query', 'Zustand'], true],
  ['chat', '02 / 08', 'Full Stack', 'badge-fs', 'Realtime Chat App', 'Live messaging platform with rooms, online presence, typing indicators, read receipts, emoji reactions, file attachments, JWT auth, and Docker Compose deployment.', ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'Docker']],
  ['auraseo', '03 / 08', 'AI SaaS', 'badge-saas', 'AuraSEO', 'AI-powered SaaS platform with OpenAI-driven SEO analysis, content generation, keyword tools, Stripe subscriptions, and a Firebase-backed dashboard.', ['TypeScript', 'React', 'Firebase', 'Stripe', 'OpenAI API']],
  ['collab', '04 / 08', 'Full Stack', 'badge-fs', 'Collaborative Code Editor', 'Real-time multi-user code editor with WebSocket sync, syntax highlighting, live presence indicators, and workspace session management.', ['TypeScript', 'React', 'WebSockets']],
  ['url', '05 / 08', 'Full Stack', 'badge-fs', 'URL Shortener Pro', 'URL shortening service with custom alias support, click analytics dashboard, expiry management, and 404 fallback flows.', ['JavaScript', 'Node.js', 'Express', 'MongoDB']],
  ['recipe', '06 / 08', 'Full Stack', 'badge-fs', 'Recipe App for Nutritioner', 'Recipe management and nutrition tracking app with ingredient breakdowns, nutritional data display, saved collections, and Firebase backend.', ['TypeScript', 'React', 'Firebase']],
  ['notes', '07 / 08', 'Full Stack', 'badge-fs', 'Notes App', 'Real-time notes application with Firestore sync, rich text editing, tag-based organization, user authentication, and cross-device responsiveness.', ['JavaScript', 'React', 'Firebase']],
  ['office', '08 / 08', 'Android', 'badge-app', 'OfficeApp', 'Android office management app with categorized announcements, priority levels, expiry-based auto-hide, FCM push notifications, and Material Design UI.', ['Kotlin', 'Firebase Auth', 'Firestore', 'FCM', 'Material Design']],
];

const shopifyStores = [
  {
    key: 'aurabelts',
    num: '01',
    name: 'Aura Belts',
    type: 'Fashion Accessories - Premium Belts Brand',
    desc: 'Complete Shopify storefront for a premium belts brand. Custom Liquid sections, metafield-driven product displays, scroll-triggered animations, and collection filters built on the Dawn theme base.',
    features: ['Custom Liquid sections with Shopify schema controls', 'Metafield-driven product displays and content blocks', 'Animated product sliders and collection filters', 'Pixel-perfect responsive layout from mobile to 4K', 'SEO-optimized page structure and fast load performance'],
    stack: ['Shopify', 'Liquid', 'Dawn Theme', 'Custom Sections', 'Metafields', 'JavaScript'],
  },
  {
    key: 'lagree',
    num: '02',
    name: 'Lagree Pulse',
    type: 'Fitness Equipment - Active Brand Storefront',
    desc: 'Fitness brand Shopify storefront with animated product showcases, metafield-powered content blocks, custom sliders, and interactive vanilla JS components.',
    features: ['Animated product showcase sections with JS', 'Metafield-powered dynamic content blocks', 'Custom category filters and product sliders', 'Cross-browser compatible and performance-tuned', 'Brand-aligned visual identity and CRO-focused layout'],
    stack: ['Shopify', 'Liquid', 'Dawn Theme', 'JavaScript', 'CSS'],
  },
];

const templates = [
  ['ascency', '01', 'Agency Template', 'Ascency', 'Premium marketing agency landing page with modern conversion-focused layout, smooth GSAP animations, SEO structure, and a customizable visual system.'],
  ['stanza', '02', 'Landing Template', 'Stanza', 'Minimal, elegant landing page concept focused on typography, spacing, and clean visuals for portfolios, creative work, and product showcases.'],
  ['fundify', '03', 'Agency Template', 'Fundify', 'Bold agency template with high-impact UI, dynamic animations, and a structured design system for creative studios and growth teams.'],
];

function Stack({ items }) {
  return (
    <div className="card-stack">
      {items.map((item) => (
        <span className="stack-pill" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return undefined;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let frameId;

    const move = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      frameId = requestAnimationFrame(animate);
    };

    const hoverTargets = document.querySelectorAll('a, button, .skill-card');
    const addHover = () => {
      cursor.classList.add('hover');
      ring.classList.add('hover');
    };
    const removeHover = () => {
      cursor.classList.remove('hover');
      ring.classList.remove('hover');
    };

    document.addEventListener('mousemove', move);
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });
    animate();

    return () => {
      document.removeEventListener('mousemove', move);
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
      cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-links a');
    const onScroll = () => {
      let current = '';
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 120) current = section.id;
      });
      links.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : '';
    const onKey = (event) => {
      if (event.key === 'Escape') setActiveProject(null);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [activeProject]);

  const openProject = (key) => setActiveProject(modalData[key]);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />

      <nav>
        <div className="nav-inner">
          <a className="nav-logo" href="#top" aria-label="Abdul Rehman home">
            AR<span>.</span>
          </a>
          <ul className="nav-links">
            {navItems.map(([label, href]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
          <a href="mailto:Mano555m10@gmail.com" className="nav-cta">
            Hire Me
          </a>
          <button className={`hamburger ${menuOpen ? 'open' : ''}`} type="button" aria-label="Toggle menu" onClick={() => setMenuOpen((value) => !value)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </div>

      <main id="top">
        <section className="hero">
          <div className="hero-glow-1" />
          <div className="hero-glow-2" />
          <div className="hero-inner">
            <div className="hero-eyebrow">
              <span className="avail-dot" />
              Available for Remote Work
            </div>
            <h1 className="hero-name">
              <span className="line1">Abdul</span>
              <span className="line2">Rehman</span>
              <span className="line3">Bin Imran</span>
            </h1>
            <div className="hero-sub">
              <span className="hero-role">Full Stack & Shopify Developer</span>
              <span className="hero-divider" />
              <span className="hero-location">Rawalpindi, Pakistan</span>
            </div>
            <p className="hero-desc">
              4+ years building scalable MERN web applications, AI-integrated SaaS platforms, and high-converting Shopify storefronts from concept to production.
            </p>
            <div className="hero-cta">
              <a href="#fullstack" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
              <a href="https://github.com/abdulrehmang12" target="_blank" rel="noreferrer" className="btn-ghost">
                GitHub -&gt;
              </a>
            </div>
            <div className="hero-stats">
              {[
                ['4+', 'Years Experience'],
                ['15+', 'Projects Shipped'],
                ['5', 'Shopify Stores'],
                ['3', 'Internships'],
              ].map(([num, label]) => (
                <div className="stat" key={label}>
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="marquee-section">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span className="marquee-item" key={`${item}-${index}`}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <section className="section" id="skills">
          <div className="section-inner">
            <div className="section-label reveal">Capabilities</div>
            <h2 className="section-title reveal">
              Technical <em>Skills</em>
            </h2>
            <p className="section-subtitle reveal">Full-spectrum development from polished frontends to production APIs, AI integrations, and custom Shopify themes.</p>
            <div className="skills-grid reveal">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.name}>
                  <div className="skill-icon-wrap">{skill.icon}</div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-tags">
                    {skill.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="s-divider" />

        <section className="section" id="fullstack">
          <div className="section-inner">
            <div className="section-label reveal">Web Applications</div>
            <h2 className="section-title reveal">
              Full Stack <em>Projects</em>
            </h2>
            <p className="section-subtitle reveal">Production-grade applications built end-to-end: auth systems, real-time features, AI integrations, and clean REST APIs.</p>
            <div className="projects-grid reveal">
              {fullStackProjects.map(([key, number, badge, badgeClass, title, desc, stack, featured]) => (
                <button className={`project-card ${featured ? 'featured' : ''}`} type="button" key={key} onClick={() => openProject(key)}>
                  <div className="card-top">
                    <span className="card-num">{number}</span>
                    <span className="card-arrow">-&gt;</span>
                  </div>
                  {modalData[key].hasVideo && (
                    <div className="video-badge">
                      <span className="pulse-dot" />
                      Video Available
                    </div>
                  )}
                  <span className={`card-badge ${badgeClass}`}>{badge}</span>
                  <h3 className="card-name">{title}</h3>
                  <p className="card-desc">{desc}</p>
                  <Stack items={stack} />
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="s-divider" />

        <section className="section" id="shopify">
          <div className="section-inner">
            <div className="section-label reveal">eCommerce</div>
            <h2 className="section-title reveal">
              Shopify <em>Storefronts</em>
            </h2>
            <p className="section-subtitle reveal">Custom Shopify store builds with Liquid sections, metafields, animated UI, and conversion-optimized page architecture on the Dawn theme.</p>
            <div className="shopify-stores reveal">
              {shopifyStores.map((store) => (
                <button className="shopify-store-card" type="button" key={store.key} onClick={() => openProject(store.key)}>
                  <div className="store-num">{store.num}</div>
                  <div className="video-badge">
                    <span className="pulse-dot" />
                    Video Available
                  </div>
                  <h3 className="store-name">{store.name}</h3>
                  <div className="store-type">{store.type}</div>
                  <p className="store-desc">{store.desc}</p>
                  <div className="store-features">
                    {store.features.map((feature) => (
                      <div className="feature-row" key={feature}>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Stack items={store.stack} />
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="s-divider" />

        <section className="section" id="design">
          <div className="section-inner">
            <div className="section-label reveal">Frontend Design</div>
            <h2 className="section-title reveal">
              Landing Page <em>Templates</em>
            </h2>
            <p className="section-subtitle reveal">Commercial frontend templates for agencies, freelancers, and creative studios: built for conversion, performance, and brand impact.</p>
            <div className="design-grid reveal">
              {templates.map(([key, number, badge, title, desc]) => (
                <button className="design-card" type="button" key={key} onClick={() => openProject(key)}>
                  <div className="card-top">
                    <span className="card-num">{number}</span>
                    <span className="card-arrow">-&gt;</span>
                  </div>
                  {modalData[key].hasVideo && (
                    <div className="video-badge">
                      <span className="pulse-dot" />
                      Video Available
                    </div>
                  )}
                  <span className="card-badge badge-des">{badge}</span>
                  <h3 className="card-name">{title}</h3>
                  <p className="card-desc">{desc}</p>
                  <Stack items={modalData[key].stack} />
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="s-divider" />

        <section className="section" id="about">
          <div className="section-inner">
            <div className="section-label reveal">Background</div>
            <h2 className="section-title reveal">
              About <em>Me</em>
            </h2>
            <div className="about-layout">
              <div className="about-content reveal">
                <div className="about-text">
                  <p>
                    I am a <strong>Full Stack Developer</strong> based in Rawalpindi, Pakistan with <em>4+ years</em> of hands-on experience building production-grade web applications, AI-powered SaaS tools, and custom Shopify storefronts that convert.
                  </p>
                  <p>
                    My core stack is the <strong>MERN ecosystem</strong>: MongoDB, Express, React, Node.js, extended with TypeScript, Firebase, Docker, and Shopify Liquid for eCommerce.
                  </p>
                  <p>
                    I hold a <strong>BS in Computer Science from NUML Islamabad</strong> and I am actively pursuing remote opportunities globally. I care about clear communication, practical product thinking, and maintainable code.
                  </p>
                </div>
                <div className="exp-timeline">
                  {[
                    ['Jan 2020 - Present', 'Full Stack Developer', 'Self-Employed - Freelance (Remote)'],
                    ['Jan 2024 - Jun 2024', 'Full Stack Developer Intern', 'Developer Hubs Corporation (Remote)'],
                    ['Jul 2024 - Dec 2024', 'Web Developer Intern', 'Coregen India (Remote)'],
                  ].map(([period, role, company]) => (
                    <div className="exp-item" key={`${period}-${role}`}>
                      <div className="exp-period">{period}</div>
                      <div className="exp-role">{role}</div>
                      <div className="exp-company">{company}</div>
                    </div>
                  ))}
                </div>
              </div>
              <aside className="about-sidebar reveal">
                <div className="info-card">
                  {[
                    ['Status', <span className="avail-badge" key="status"><span className="avail-dot" /> Open to Work</span>],
                    ['Location', 'Rawalpindi, Pakistan'],
                    ['Experience', '4+ Years'],
                    ['Education', 'BS CS - NUML Islamabad'],
                    ['Specialization', 'MERN / Shopify / TypeScript'],
                    ['Email', <a href="mailto:Mano555m10@gmail.com" key="email">Mano555m10@gmail.com</a>],
                    ['GitHub', <a href="https://github.com/abdulrehmang12" target="_blank" rel="noreferrer" key="github">abdulrehmang12</a>],
                    ['LinkedIn', <a href="https://linkedin.com/in/abdulrehmang12" target="_blank" rel="noreferrer" key="linkedin">abdulrehmang12</a>],
                    ['Portfolio', <a href="https://abdulrehmang12.github.io" target="_blank" rel="noreferrer" key="portfolio">abdulrehmang12.github.io</a>],
                  ].map(([label, value]) => (
                    <div className="info-row" key={label}>
                      <span className="info-label">{label}</span>
                      <span className="info-value">{value}</span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <div className="s-divider" />

        <section className="section" id="contact">
          <div className="section-inner reveal">
            <div className="contact-box">
              <div className="contact-eyebrow">Let&apos;s Work Together</div>
              <h2 className="contact-title">
                Open to <em>Remote</em>
                <br />
                Opportunities
              </h2>
              <p className="contact-desc">Looking for full-time remote roles in Full Stack or Shopify development. Also open to freelance projects and international clients.</p>
              <div className="contact-actions">
                <a href="mailto:Mano555m10@gmail.com" className="btn-primary">
                  Send an Email
                </a>
                <a href="https://linkedin.com/in/abdulrehmang12" target="_blank" rel="noreferrer" className="btn-outline">
                  LinkedIn Profile
                </a>
              </div>
              <div className="contact-links">
                <a href="https://github.com/abdulrehmang12" target="_blank" rel="noreferrer" className="contact-link">
                  GitHub
                </a>
                <a href="https://abdulrehmang12.github.io" target="_blank" rel="noreferrer" className="contact-link">
                  Portfolio
                </a>
                <a href="tel:+923338412569" className="contact-link">
                  +92 333 841 2569
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div className="footer-left">
            <div className="footer-logo">Abdul Rehman.</div>
            <div className="footer-tagline">Full Stack & Shopify Developer</div>
          </div>
          <div className="footer-right">Rawalpindi, Pakistan / Open to Remote / 2026</div>
        </div>
      </footer>

      {activeProject && (
        <div className="modal-overlay open" onMouseDown={(event) => event.target === event.currentTarget && setActiveProject(null)}>
          <article className="modal" aria-modal="true" role="dialog" aria-labelledby="modal-title">
            <div className="modal-header">
              <div className="modal-title" id="modal-title">
                {activeProject.title}
              </div>
              <button className="modal-close" type="button" onClick={() => setActiveProject(null)} aria-label="Close">
                X
              </button>
            </div>
            <div className="modal-video-wrap">
              {activeProject.hasVideo ? (
                <video src={activeProject.videoSrc} controls />
              ) : (
                <div className="video-placeholder-inner">
                  <div className="play-circle">i</div>
                  <p>{activeProject.github ? 'No video - view source on GitHub' : 'Project details'}</p>
                  <small>{activeProject.github ? 'Source code link is available below' : 'Private or template work sample'}</small>
                </div>
              )}
            </div>
            <div className="modal-body">
              <p className="modal-desc">{activeProject.desc}</p>
              <div className="modal-features">
                {activeProject.features.map((feature) => (
                  <div className="modal-feature" key={feature}>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <div className="modal-stack">
                {activeProject.stack.map((item) => (
                  <span className="stack-pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="modal-actions">
                {activeProject.github && (
                  <a href={activeProject.github} target="_blank" rel="noreferrer" className="modal-btn">
                    GitHub -&gt;
                  </a>
                )}
                <a href="#contact" className="modal-btn" onClick={() => setActiveProject(null)}>
                  Contact
                </a>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
