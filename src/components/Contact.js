'use client';
import { useForm, ValidationError } from '@formspree/react';

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'mano555m10@gmail.com', href: 'mailto:mano555m10@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+92 333 841 2569', href: 'tel:+923338412569' },
  { icon: '💼', label: 'LinkedIn', value: 'abdulrehmang12', href: 'https://www.linkedin.com/in/abdulrehmang12' },
  { icon: '🐙', label: 'GitHub', value: 'abdulrehmang12', href: 'https://github.com/abdulrehmang12' },
  { icon: '📍', label: 'Location', value: 'Rawalpindi, Punjab, Pakistan', href: null },
];

const inputStyle = {
  width: '100%',
  backgroundColor: 'rgba(10, 10, 10, 0.8)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '14px',
  padding: '14px 20px',
  color: '#ffffff',
  fontSize: '0.95rem',
  outline: 'none',
};

export default function Contact() {
  const [state, handleSubmit] = useForm("mdalbaqz");

  return (
    <section id="contact" style={{ padding: '120px 24px', backgroundColor: '#080808', position: 'relative' }}>
      <div className="absolute" style={{ bottom: '10%', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)', borderRadius: '50%' }}></div>

      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{ color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.8rem', marginBottom: '12px', fontWeight: '500' }}>
            Get in touch
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700' }}>
            Contact <span style={{ color: '#f59e0b' }}>Me</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
          {/* Info */}
          <div className="fade-in-left">
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#ffffff', marginBottom: '12px' }}>
              Let&apos;s work together
            </h3>
            <p style={{ color: '#9ca3af', lineHeight: '1.8', marginBottom: '36px' }}>
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities. Whether you need an Android app, a Shopify store,
              or a full MERN stack application — feel free to reach out!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="glass-card"
                  style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', borderRadius: '14px' }}
                >
                  <div style={{
                    width: '44px', height: '44px',
                    background: 'rgba(245, 158, 11, 0.08)',
                    border: '1px solid rgba(245, 158, 11, 0.15)',
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem', flexShrink: 0,
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <p style={{ color: '#6b7280', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.9rem' }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p style={{ color: '#d1d5db', fontSize: '0.9rem' }}>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="fade-in-right">
            <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '36px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#ffffff', marginBottom: '24px' }}>
                Send me a message ✉️
              </h4>

              {state.succeeded ? (
                <div style={{
                  textAlign: 'center',
                  padding: '40px 20px',
                }}>
                  <p style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</p>
                  <h3 style={{ color: '#f59e0b', fontSize: '1.3rem', fontWeight: '600', marginBottom: '8px' }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
                    Thanks for reaching out! I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ color: '#9ca3af', fontSize: '0.8rem', marginBottom: '8px', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      style={inputStyle}
                      placeholder="John Doe"
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(245, 158, 11, 0.5)'; e.target.style.boxShadow = '0 0 20px rgba(245, 158, 11, 0.08)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ color: '#9ca3af', fontSize: '0.8rem', marginBottom: '8px', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      style={inputStyle}
                      placeholder="john@example.com"
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(245, 158, 11, 0.5)'; e.target.style.boxShadow = '0 0 20px rgba(245, 158, 11, 0.08)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ color: '#9ca3af', fontSize: '0.8rem', marginBottom: '8px', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      style={{ ...inputStyle, resize: 'none' }}
                      placeholder="Tell me about your project..."
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(245, 158, 11, 0.5)'; e.target.style.boxShadow = '0 0 20px rgba(245, 158, 11, 0.08)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="btn-primary"
                    style={{ width: '100%', border: 'none', cursor: 'pointer', fontSize: '1rem', textAlign: 'center', opacity: state.submitting ? 0.7 : 1 }}
                  >
                    {state.submitting ? '⏳ Sending...' : '🚀 Send Message'}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}