'use client';

import { useEffect, useMemo, useState } from 'react';

const repoFallback = [
  {
    name: 'HireFlow-Job-Portal',
    html_url: 'https://github.com/abdulrehmang12/HireFlow-Job-Portal',
    description: 'Full-stack job portal project with application workflows and recruiter-facing UI.',
    language: 'JavaScript',
    updated_at: '2026-05-14T23:33:12Z',
    pushed_at: '2026-05-14T23:33:08Z',
    stargazers_count: 0,
    forks_count: 0,
    default_branch: 'main',
    homepage: null,
  },
  {
    name: 'OfficeApp',
    html_url: 'https://github.com/abdulrehmang12/OfficeApp',
    description: 'Android Office Management App using Kotlin and Firebase.',
    language: 'Kotlin',
    updated_at: '2026-05-14T00:21:11Z',
    pushed_at: '2026-02-07T16:11:51Z',
    stargazers_count: 1,
    forks_count: 0,
    default_branch: 'master',
    homepage: null,
  },
  {
    name: 'ai-project-planner',
    html_url: 'https://github.com/abdulrehmang12/ai-project-planner',
    description: 'AI-assisted project planning workflow for tasks, milestones, and delivery visibility.',
    language: 'JavaScript',
    updated_at: '2026-05-14T00:21:10Z',
    pushed_at: '2026-03-07T05:49:07Z',
    stargazers_count: 1,
    forks_count: 0,
    default_branch: 'main',
    homepage: null,
  },
  {
    name: 'linkedin-job-automator',
    html_url: 'https://github.com/abdulrehmang12/linkedin-job-automator',
    description: 'Automation project for job search workflows, filtering, and application tracking.',
    language: 'JavaScript',
    updated_at: '2026-05-14T00:21:09Z',
    pushed_at: '2026-03-19T01:45:22Z',
    stargazers_count: 1,
    forks_count: 0,
    default_branch: 'main',
    homepage: null,
  },
  {
    name: 'collab-code-editor',
    html_url: 'https://github.com/abdulrehmang12/collab-code-editor',
    description: 'Real-time collaborative code editor with WebSocket-driven multi-user editing.',
    language: 'TypeScript',
    updated_at: '2026-05-14T00:21:08Z',
    pushed_at: '2026-03-19T10:26:58Z',
    stargazers_count: 1,
    forks_count: 0,
    default_branch: 'main',
    homepage: null,
  },
  {
    name: 'ecommerce-fullstack-design',
    html_url: 'https://github.com/abdulrehmang12/ecommerce-fullstack-design',
    description: 'Full-stack eCommerce system with catalog, cart, checkout, and admin flows.',
    language: 'JavaScript',
    updated_at: '2026-05-14T00:21:05Z',
    pushed_at: '2026-03-20T18:46:29Z',
    stargazers_count: 1,
    forks_count: 0,
    default_branch: 'main',
    homepage: null,
  },
];

const portfolioProjects = [
  {
    title: 'Full Stack Development',
    category: 'full-stack',
    eyebrow: 'MERN, SaaS, APIs',
    description:
      'Production-ready web applications with React, Node.js, Express, MongoDB, Firebase, authentication, RBAC, Stripe, OpenAI, and CI/CD.',
    stats: ['10+ client projects', '1,000+ daily API requests', 'GitHub Actions deployments'],
    stack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Stripe'],
    source: 'https://github.com/abdulrehmang12/seo-blog-saas/tree/main',
    repo: 'https://github.com/abdulrehmang12/seo-blog-saas',
  },
  {
    title: 'Shopify Development',
    category: 'shopify',
    eyebrow: 'Commerce, SEO, CRO',
    description:
      'Conversion-focused storefronts with custom Liquid work, catalog architecture, mobile-first UX, analytics, SEO, and speed optimization.',
    stats: ['5+ stores launched', '30% page speed lift', '25%+ SEO score improvement'],
    stack: ['Shopify', 'Liquid', 'SEO', 'Analytics', 'CRO', 'Performance'],
    source: null,
    repo: null,
  },
  {
    title: 'Mobile App Development',
    category: 'mobile',
    eyebrow: 'Android, Kotlin, Firebase',
    description:
      'Internal productivity and office management apps with Kotlin, Firebase authentication, realtime sync, clean UI, and maintainable releases.',
    stats: ['Kotlin app architecture', 'Realtime Firebase sync', 'Employee/task workflows'],
    stack: ['Kotlin', 'Java', 'Firebase', 'Android SDK', 'MVVM'],
    source: 'https://github.com/abdulrehmang12/OfficeApp/tree/master',
    repo: 'https://github.com/abdulrehmang12/OfficeApp',
  },
];

function formatDate(value) {
  if (!value) return 'Recently updated';
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value));
}

function titleFromRepo(name) {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace(/\bAi\b/g, 'AI');
}

function inferCategory(repo) {
  const text = `${repo.name} ${repo.description || ''} ${repo.language || ''}`.toLowerCase();
  if (text.includes('officeapp') || text.includes('android') || text.includes('kotlin')) return 'mobile';
  if (text.includes('shopify') || text.includes('ecommerce') || text.includes('store')) return 'shopify';
  return 'full-stack';
}

function enrichRepo(repo) {
  const category = inferCategory(repo);
  const descriptions = {
    mobile: repo.description || 'Mobile app project focused on Android workflows, Firebase-backed data, and practical internal operations.',
    shopify:
      repo.description ||
      'Commerce-focused project connected to product catalogs, checkout experience, storefront quality, and conversion improvements.',
    'full-stack':
      repo.description ||
      'Full-stack project demonstrating application architecture, UI flows, APIs, automation, or SaaS-style product thinking.',
  };

  return {
    ...repo,
    category,
    displayTitle: titleFromRepo(repo.name),
    displayDescription: descriptions[category],
    sourceUrl: `${repo.html_url}/tree/${repo.default_branch || 'main'}`,
    repoUrl: repo.html_url,
  };
}

export default function Projects() {
  const [repos, setRepos] = useState(repoFallback);
  const [githubState, setGithubState] = useState('verified');
  const [activeTrack, setActiveTrack] = useState('full-stack');

  useEffect(() => {
    let ignore = false;

    async function loadRepos() {
      try {
        const response = await fetch('https://api.github.com/users/abdulrehmang12/repos?sort=updated&per_page=12', {
          headers: { Accept: 'application/vnd.github+json' },
        });

        if (!response.ok) throw new Error('GitHub response was not successful');

        const data = await response.json();
        const filtered = data
          .filter(
            (repo) =>
              !repo.fork &&
              repo.name !== 'abdulrehmang12' &&
              repo.name !== 'abdulrehmang12.github.io'
          )
          .slice(0, 8);

        if (!ignore && filtered.length) {
          setRepos(filtered);
          setGithubState('live');
        }
      } catch {
        if (!ignore) setGithubState('verified');
      }
    }

    loadRepos();
    return () => {
      ignore = true;
    };
  }, []);

  const latestRepos = useMemo(() => repos.map(enrichRepo), [repos]);
  const activeProject = portfolioProjects.find((project) => project.category === activeTrack) || portfolioProjects[0];

  return (
    <section id="projects" className="site-section site-section-alt">
      <div className="container">
        <div className="section-head">
          <p className="section-kicker">Selected Projects</p>
          <h2 className="section-title">Project work with source code, GitHub repos, and focused development tracks.</h2>
          <p className="section-copy">
            The latest GitHub repositories are pulled from your public GitHub profile and paired with polished
            portfolio cards for full-stack, Shopify, and mobile development.
          </p>
        </div>

        <div className="track-grid" aria-label="Project focus areas">
          {portfolioProjects.map((project) => {
            const active = project.category === activeTrack;
            return (
              <button
                className={`track-card panel ${active ? 'active' : ''}`}
                key={project.category}
                type="button"
                onClick={() => setActiveTrack(project.category)}
                onFocus={() => setActiveTrack(project.category)}
                onMouseEnter={() => setActiveTrack(project.category)}
              >
                <span>{project.eyebrow}</span>
                <strong>{project.title}</strong>
                <p>{project.description}</p>
              </button>
            );
          })}
        </div>

        <article className={`featured-project panel ${activeProject.category}`}>
          <div>
            <p className="featured-kicker">{activeProject.eyebrow}</p>
            <h3>{activeProject.title}</h3>
            <p>{activeProject.description}</p>
            <ul className="featured-stats">
              {activeProject.stats.map((stat) => (
                <li key={stat}>{stat}</li>
              ))}
            </ul>
          </div>

          <div className="featured-side">
            <ul className="pill-list">
              {activeProject.stack.map((tag) => (
                <li className="tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
            <div className="project-actions">
              {activeProject.source ? (
                <a href={activeProject.source} target="_blank" rel="noreferrer">
                  Source Code
                </a>
              ) : (
                <span>Private client storefronts</span>
              )}
              {activeProject.repo ? (
                <a href={activeProject.repo} target="_blank" rel="noreferrer">
                  GitHub Repo
                </a>
              ) : (
                <a href="#contact">Request Case Study</a>
              )}
            </div>
          </div>
        </article>

        <div className="latest-head">
          <div>
            <p className="section-kicker">Latest GitHub Repositories</p>
          </div>
          <span className={`github-status ${githubState}`}>
            {githubState === 'live' ? 'Live from GitHub' : 'Latest verified GitHub'}
          </span>
        </div>

        <div className="repo-grid">
          {latestRepos.map((repo) => (
            <article className={`panel repo-card ${repo.category}`} key={repo.name}>
              <div className="repo-topline">
                <span>{repo.category.replace('-', ' ')}</span>
                <span>{repo.language || 'Code'}</span>
              </div>
              <h3>{repo.displayTitle}</h3>
              <p>{repo.displayDescription}</p>
              <div className="repo-meta">
                <span>Updated {formatDate(repo.updated_at)}</span>
                <span>{repo.stargazers_count || 0} stars</span>
                <span>{repo.forks_count || 0} forks</span>
              </div>
              <div className="project-actions">
                <a href={repo.sourceUrl} target="_blank" rel="noreferrer">
                  Source Code
                </a>
                <a href={repo.repoUrl} target="_blank" rel="noreferrer">
                  GitHub Repo
                </a>
                {repo.homepage && (
                  <a href={repo.homepage} target="_blank" rel="noreferrer">
                    Live Site
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .track-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 20px;
        }

        .track-card {
          min-height: 248px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 22px;
          color: inherit;
          text-align: left;
          cursor: pointer;
        }

        .track-card:hover,
        .track-card.active {
          transform: translateY(-6px);
          border-color: rgba(255, 103, 15, 0.6);
          background:
            linear-gradient(145deg, rgba(78, 14, 119, 0.32), rgba(255, 103, 15, 0.12)),
            rgba(12, 14, 24, 0.9);
        }

        .track-card span,
        .featured-kicker,
        .repo-topline {
          color: #ff9a57;
          font-size: 0.76rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .track-card strong {
          display: block;
          margin-top: 14px;
          color: #ffffff;
          font-size: 1.32rem;
          line-height: 1.2;
        }

        .track-card p {
          margin: 14px 0 0;
          color: #aeb8c7;
          line-height: 1.66;
        }

        .featured-project {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
          gap: 28px;
          overflow: hidden;
          margin-bottom: 46px;
          padding: 32px;
        }

        .featured-project::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.2;
          pointer-events: none;
        }

        .featured-project.full-stack::before {
          background: linear-gradient(120deg, rgba(78, 14, 119, 0.9), transparent 58%);
        }

        .featured-project.shopify::before {
          background: linear-gradient(120deg, rgba(255, 103, 15, 0.78), transparent 58%);
        }

        .featured-project.mobile::before {
          background: linear-gradient(120deg, rgba(114, 46, 166, 0.85), transparent 58%);
        }

        .featured-project > * {
          position: relative;
          z-index: 1;
        }

        .featured-project h3 {
          margin: 10px 0 12px;
          color: #ffffff;
          font-size: clamp(1.8rem, 4vw, 3.1rem);
          line-height: 1.02;
        }

        .featured-project p {
          margin: 0;
          color: #c2cad7;
          line-height: 1.72;
        }

        .featured-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin: 24px 0 0;
          padding: 0;
          list-style: none;
        }

        .featured-stats li {
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.055);
          color: #ffffff;
          font-size: 0.86rem;
          font-weight: 800;
          padding: 13px;
        }

        .featured-side {
          display: grid;
          align-content: space-between;
          gap: 24px;
        }

        .project-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .project-actions a,
        .project-actions span {
          display: inline-flex;
          min-height: 40px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          padding: 0 13px;
          font-size: 0.84rem;
          font-weight: 900;
          text-decoration: none;
          transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
        }

        .project-actions a:first-child {
          border-color: rgba(255, 103, 15, 0.58);
          background: rgba(255, 103, 15, 0.14);
          color: #ffb07a;
        }

        .project-actions a:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 103, 15, 0.9);
          background: rgba(255, 103, 15, 0.22);
        }

        .latest-head {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          align-items: end;
          margin-bottom: 18px;
        }

        .latest-head h3 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(1.4rem, 3vw, 2rem);
        }

        .github-status {
          display: inline-flex;
          min-height: 34px;
          align-items: center;
          border: 1px solid rgba(255, 103, 15, 0.35);
          border-radius: 999px;
          background: rgba(255, 103, 15, 0.1);
          color: #ffb07a;
          padding: 0 12px;
          font-size: 0.76rem;
          font-weight: 900;
          white-space: nowrap;
        }

        .repo-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .repo-card {
          display: flex;
          min-height: 320px;
          flex-direction: column;
          padding: 22px;
          overflow: hidden;
        }

        .repo-card:hover {
          transform: translateY(-5px);
        }

        .repo-card.full-stack:hover {
          border-color: rgba(78, 14, 119, 0.78);
        }

        .repo-card.shopify:hover {
          border-color: rgba(255, 103, 15, 0.78);
        }

        .repo-card.mobile:hover {
          border-color: rgba(148, 83, 204, 0.82);
        }

        .repo-topline {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
        }

        .repo-card h3 {
          margin: 16px 0 10px;
          color: #ffffff;
          font-size: 1.22rem;
          line-height: 1.22;
        }

        .repo-card p {
          margin: 0;
          color: #aeb8c7;
          line-height: 1.62;
        }

        .repo-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: auto 0 16px;
          padding-top: 22px;
        }

        .repo-meta span {
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          color: #cbd5e1;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 6px 9px;
        }

        @media (max-width: 980px) {
          .track-grid,
          .repo-grid {
            grid-template-columns: 1fr;
          }

          .featured-project {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 620px) {
          .featured-project {
            padding: 22px;
          }

          .featured-stats {
            grid-template-columns: 1fr;
          }

          .latest-head {
            align-items: start;
            flex-direction: column;
          }

          .project-actions a,
          .project-actions span {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
