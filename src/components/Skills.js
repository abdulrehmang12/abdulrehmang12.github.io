'use client';

const skillGroups = [
  {
    title: 'Frontend',
    summary: 'Interfaces that are responsive, component-driven, and performance aware.',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'Tailwind CSS', 'CSS Modules'],
  },
  {
    title: 'Backend',
    summary: 'APIs and app logic built for secure multi-role workflows.',
    skills: ['Node.js', 'Express.js', 'REST API Design', 'JWT Auth', 'RBAC', 'WebSockets'],
  },
  {
    title: 'Data and BaaS',
    summary: 'Practical storage choices for dashboards, SaaS products, and mobile workflows.',
    skills: ['MongoDB', 'Mongoose', 'Firebase Auth', 'Firestore', 'Realtime DB', 'Firebase Storage'],
  },
  {
    title: 'Commerce and Integrations',
    summary: 'Revenue-focused storefronts, subscriptions, analytics, and AI features.',
    skills: ['Shopify Liquid', 'Stripe', 'OpenAI API', 'Google Analytics', 'Search Console', 'Wix'],
  },
  {
    title: 'Cloud and Workflow',
    summary: 'Ship faster with automated deployments and clean collaboration habits.',
    skills: ['Vercel', 'Netlify', 'Railway', 'GitHub Actions', 'Git', 'Postman'],
  },
  {
    title: 'Optimization',
    summary: 'Better load speed, search visibility, and conversion paths.',
    skills: ['Core Web Vitals', 'Performance Tuning', 'On-Page SEO', 'CRO', 'Jest', 'Agile Scrum'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="site-section site-section-alt">
      <div className="container">
        <div className="section-head">
          <p className="section-kicker">Technical Skills</p>
          <h2 className="section-title">
            The stack I use to build full-stack products from UI to deployment.
          </h2>
          <p className="section-copy">
            My resume is strongest around MERN, TypeScript, Firebase, Shopify, Stripe,
            OpenAI integrations, and performance-focused delivery.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="panel skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.summary}</p>
              <ul className="pill-list">
                {group.skills.map((skill) => (
                  <li className="tag" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .skill-card {
          padding: 22px;
        }

        .skill-card h3 {
          margin: 0;
          color: #ffffff;
          font-size: 1.08rem;
        }

        .skill-card p {
          min-height: 78px;
          margin: 10px 0 18px;
          color: #aeb8c7;
          line-height: 1.62;
        }

        @media (max-width: 980px) {
          .skills-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skill-card p {
            min-height: 0;
          }
        }
      `}</style>
    </section>
  );
}
