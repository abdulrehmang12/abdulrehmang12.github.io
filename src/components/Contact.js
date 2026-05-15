'use client';

import { ValidationError, useForm } from '@formspree/react';

const contactInfo = [
  { label: 'Email', value: 'Mano555m10@gmail.com', href: 'mailto:Mano555m10@gmail.com', detail: 'Best for role and project inquiries' },
  { label: 'Phone', value: '+92 333 841 2569', href: 'tel:+923338412569', detail: 'Available for quick screening calls' },
  { label: 'LinkedIn', value: 'linkedin.com/in/abdulrehmang12', href: 'https://www.linkedin.com/in/abdulrehmang12', detail: 'Connect for full-stack opportunities' },
  { label: 'GitHub', value: 'github.com/abdulrehmang12', href: 'https://github.com/abdulrehmang12', detail: 'Review source code and repositories' },
];

export default function Contact() {
  const [state, handleSubmit] = useForm('mdalbaqz');

  return (
    <section id="contact" className="site-section site-section-alt">
      <div className="container contact-grid">
        <div className="contact-copy-panel panel">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let&apos;s talk about full-stack roles, freelance builds, or product work.</h2>
          <p className="contact-copy">
            I am open to full-stack developer opportunities, remote collaboration, SaaS builds,
            MERN projects, Shopify optimization, and API/integration work.
          </p>

          <div className="availability-strip">
            <span>Based in Rawalpindi, Pakistan</span>
            <span>Remote-ready</span>
            <span>Full-stack / MERN / Shopify</span>
          </div>

          <div className="contact-list">
            {contactInfo.map((item) => (
              <a className="contact-item" key={item.label} href={item.href} target="_blank" rel="noreferrer">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <small>{item.detail}</small>
              </a>
            ))}
          </div>
        </div>

        <form className="panel contact-form" onSubmit={handleSubmit}>
          <div className="form-head">
            <span>Direct Message</span>
            <h3>Send a message</h3>
            <p>Share the role, project scope, or collaboration details.</p>
          </div>

          {state.succeeded ? (
            <div className="success-message">
              <strong>Message sent.</strong>
              <p>Thanks for reaching out. I will get back to you soon.</p>
            </div>
          ) : (
            <>
              <label>
                <span>Your Name</span>
                <input className="field" type="text" name="name" required placeholder="Your name" />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </label>

              <label>
                <span>Your Email</span>
                <input className="field" type="email" name="email" required placeholder="you@example.com" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </label>

              <label>
                <span>Phone Number</span>
                <input className="field" type="tel" name="phone" required placeholder="+Your country code and your number" />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              </label>

              <label>
                <span>Message</span>
                <textarea
                  className="field"
                  name="message"
                  required
                  rows={10}
                  placeholder="Tell me about the role or project."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </label>

              <button className="btn-primary" type="submit" disabled={state.submitting}>
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </>
          )}
        </form>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(380px, 1fr);
          gap: 24px;
          align-items: stretch;
        }

        .contact-copy-panel {
          display: flex;
          flex-direction: column;
          padding: clamp(24px, 4vw, 38px);
        }

        .contact-copy {
          margin: 20px 0 0;
          color: #aeb8c7;
          line-height: 1.78;
        }

        .availability-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 22px;
        }

        .availability-strip span {
          border: 1px solid rgba(255, 103, 15, 0.28);
          border-radius: 999px;
          background: rgba(255, 103, 15, 0.08);
          color: #ffb07a;
          font-size: 0.76rem;
          font-weight: 850;
          padding: 8px 11px;
        }

        .contact-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(170px, 1fr));
          gap: 10px;
          margin-top: auto;
          padding-top: 30px;
        }

        .contact-item {
          display: grid;
          gap: 5px;
          min-height: 126px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.045);
          padding: 16px;
          text-decoration: none;
          transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
        }

        .contact-item:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 103, 15, 0.46);
          background: rgba(255, 103, 15, 0.075);
        }

        .contact-item span,
        .contact-form label span,
        .form-head span {
          color: #ff8a3d;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .contact-item strong {
          color: #ffffff;
          font-size: 0.96rem;
          font-weight: 750;
          overflow-wrap: anywhere;
        }

        .contact-item small {
          align-self: end;
          color: #8f9aac;
          font-size: 0.78rem;
          line-height: 1.45;
        }

        .contact-form {
          display: grid;
          align-content: start;
          gap: 16px;
          padding: clamp(22px, 3vw, 30px);
          min-height: 100%;
        }

        .form-head {
          margin-bottom: 2px;
        }

        .form-head h3 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(1.4rem, 3vw, 1.9rem);
        }

        .form-head p {
          margin: 8px 0 0;
          color: #aeb8c7;
          line-height: 1.55;
        }

        .contact-form label {
          display: grid;
          gap: 8px;
        }

        .contact-form textarea {
          resize: vertical;
        }

        .contact-form button {
          width: 100%;
          border: 0;
          cursor: pointer;
        }

        .contact-form button:disabled {
          cursor: progress;
          opacity: 0.72;
        }

        .success-message {
          padding: 34px 8px;
          text-align: center;
        }

        .success-message strong {
          color: #ffffff;
          font-size: 1.35rem;
        }

        .success-message p {
          margin: 10px 0 0;
          color: #aeb8c7;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-list {
            margin-top: 0;
          }
        }

        @media (max-width: 620px) {
          .contact-list {
            grid-template-columns: 1fr;
          }

          .contact-item {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}
