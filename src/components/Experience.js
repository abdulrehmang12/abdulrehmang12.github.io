'use client';

const roles = [
  {
    title: 'Full Stack Developer',
    company: 'Self-Employed Freelance',
    period: 'Jan 2020 - Present',
    location: 'Remote',
    points: [
      'Delivered 10+ end-to-end MERN stack applications for clients in Pakistan and internationally.',
      'Built and launched 5+ Shopify stores with an average 30% page speed improvement through performance optimization and image compression.',
      'Developed Node.js and Express REST APIs handling 1,000+ daily requests with JWT authentication and role-based access control.',
      'Integrated Stripe subscriptions and OpenAI API features into SaaS products to support client revenue generation.',
      'Improved store SEO scores by 25%+ using Search Console insights, on-page optimization, and structured content strategies.',
      'Configured GitHub Actions deployments to Vercel and Netlify, reducing release time from hours to minutes.',
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Developer Hubs Corporation',
    period: 'Jan 2024 - Jun 2024',
    location: 'Remote',
    points: [
      'Developed and shipped 3 full-stack features per sprint using MongoDB, Express, React, and Node.js in an agile team of 5 developers.',
      'Built a reusable React component library used across 2 projects, reducing UI development time by approximately 20%.',
      'Optimized MongoDB queries and Express endpoints, reducing average response time by 35%.',
      'Participated in daily standups, sprint planning, peer code reviews, and Scrum delivery workflows.',
    ],
  },
  {
    title: 'Web Developer Intern',
    company: 'Coregen India',
    period: 'Jul 2024 - Dec 2024',
    location: 'Remote',
    points: [
      'Developed and maintained responsive web pages using HTML5, CSS3, and JavaScript across Chrome, Firefox, and Safari.',
      'Resolved 20+ frontend bugs and implemented UI improvements that increased internal usability scores.',
      'Translated Figma mockups into pixel-accurate, functional web interfaces in collaboration with UI/UX designers.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="site-section">
      <div className="container">
        <div className="section-head">
          <p className="section-kicker">Professional Experience</p>
          <h2 className="section-title">Recent work that shows delivery, ownership, and measurable impact.</h2>
          <p className="section-copy">
            The experience section now mirrors your current full-stack resume, including dates,
            internships, and quantifiable results from freelance delivery.
          </p>
        </div>

        <div className="timeline">
          {roles.map((role) => (
            <article className="panel timeline-item" key={`${role.company}-${role.period}`}>
              <div className="timeline-meta">
                <span>{role.period}</span>
                <span>{role.location}</span>
              </div>
              <div className="role-head">
                <div>
                  <h3>{role.title}</h3>
                  <p>{role.company}</p>
                </div>
              </div>
              <ul className="clean-list">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .role-head {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          align-items: start;
        }

        .role-head h3 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(1.2rem, 3vw, 1.55rem);
        }

        .role-head p {
          margin: 6px 0 0;
          color: #d1d8e4;
          font-weight: 700;
        }
      `}</style>
    </section>
  );
}
