'use client';

const coursework = [
  'Data Structures and Algorithms',
  'Object-Oriented Programming',
  'Web Development',
  'Database Systems',
  'Software Engineering',
  'Mobile App Development',
];

const certifications = [
  'The Complete Web Developer Bootcamp - Udemy, Dr. Angela Yu',
  'React - The Complete Guide - Udemy, Maximilian Schwarzmuller',
  'Node.js, Express, MongoDB and More - The Complete Bootcamp',
];

export default function Education() {
  return (
    <section id="education" className="site-section">
      <div className="container education-grid">
        <div>
          <p className="section-kicker">Education</p>
          <h2 className="section-title">Computer science foundation with continuous web training.</h2>
          <p className="education-copy">
            My academic background supports the practical full-stack work in this portfolio:
            data structures, OOP, databases, software engineering, web development, and mobile apps.
          </p>
        </div>

        <div className="education-stack">
          <article className="panel education-card">
            <div className="timeline-meta">
              <span>2020 - 2024</span>
              <span>Islamabad, Pakistan</span>
            </div>
            <h3>Bachelor of Science in Computer Science</h3>
            <p>National University of Modern Languages (NUML)</p>
            <ul className="pill-list">
              {coursework.map((course) => (
                <li className="tag" key={course}>
                  {course}
                </li>
              ))}
            </ul>
          </article>

          <article className="panel education-card">
            <div className="timeline-meta">
              <span>Certifications and Training</span>
            </div>
            <ul className="clean-list">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>

      <style jsx>{`
        .education-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: 34px;
          align-items: start;
        }

        .education-copy {
          margin: 20px 0 0;
          color: #aeb8c7;
          line-height: 1.78;
        }

        .education-stack {
          display: grid;
          gap: 18px;
        }

        .education-card {
          padding: 24px;
        }

        .education-card h3 {
          margin: 0;
          color: #ffffff;
          font-size: 1.25rem;
        }

        .education-card p {
          margin: 8px 0 20px;
          color: #d1d8e4;
          font-weight: 700;
        }

        @media (max-width: 880px) {
          .education-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
