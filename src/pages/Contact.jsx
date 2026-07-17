import { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import '../styles/pages.css';

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default function Contact() {
  usePageTitle('Jonathan Noulowe II — Press Conference');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [sentName, setSentName] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMsg = message.trim();

    const nextErrors = {};
    if (!trimmedName) nextErrors.name = "Tell us who's asking.";
    if (!EMAIL_RE.test(trimmedEmail)) nextErrors.email = 'Need a reachable email.';
    if (trimmedMsg.length < 8) nextErrors.message = 'A sentence or two, at least.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSentName(trimmedName.split('—')[0].split('-')[0].trim());
  }

  return (
    <main className="page page-enter">
      <div className="wrap pad-top">

        <section style={{ marginBottom: 'clamp(28px,5vh,56px)' }}>
          <div className="eyebrow"><span className="stripe"></span><span className="micro">Press Conference</span></div>
          <h1 className="hero-title">Take the mic.</h1>
          <p className="lede" style={{ marginTop: 18 }}>Questions, briefs, and inbound welcome. Ask one — I'll answer like it's the post-match.</p>
        </section>

        <section className="contact-grid">
          {sentName !== null ? (
            <div className="form-sent">
              <div className="micro">Question received</div>
              <p style={{ margin: '12px 0 0', fontSize: '1.15rem', fontWeight: 700 }}>Thanks, {sentName}. I'll get back before full time.</p>
            </div>
          ) : (
            <form className="qform" onSubmit={handleSubmit} noValidate>
              <div className={`field${errors.name ? ' err' : ''}`}>
                <label htmlFor="in-name">Your name &amp; outlet</label>
                <input
                  id="in-name"
                  name="name"
                  type="text"
                  placeholder="e.g. Sam Rivera — The Athletic"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="msg">{errors.name || ''}</span>
              </div>
              <div className={`field${errors.email ? ' err' : ''}`}>
                <label htmlFor="in-email">Email</label>
                <input
                  id="in-email"
                  name="email"
                  type="email"
                  placeholder="you@outlet.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="msg">{errors.email || ''}</span>
              </div>
              <div className={`field${errors.message ? ' err' : ''}`}>
                <label htmlFor="in-msg">Your question</label>
                <textarea
                  id="in-msg"
                  name="message"
                  placeholder="What's the brief? Timeline, scope, what you're trying to ship…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <span className="msg">{errors.message || ''}</span>
              </div>
              <div>
                <button className="btn" type="submit">Ask the question</button>
              </div>
            </form>
          )}

          <aside>
            <div className="eyebrow" style={{ marginBottom: 16 }}><span className="stripe"></span><span className="micro">Media Channels</span></div>
            <div className="outlets">
              <a className="outlet" href="mailto:hello@omnisystems.dev"><span className="obadge">@</span><span><span className="ok">Email</span><span className="ov">hello@omnisystems.dev</span></span></a>
              <a className="outlet" href="#"><span className="obadge">in</span><span><span className="ok">LinkedIn</span><span className="ov">/in/jnoulowe</span></span></a>
              <a className="outlet" href="#"><span className="obadge">X</span><span><span className="ok">X</span><span className="ov">@jnoulowe</span></span></a>
              <a className="outlet" href="#"><span className="obadge">GH</span><span><span className="ok">GitHub</span><span className="ov">github.com/jnoulowe</span></span></a>
            </div>
            <a className="backlink" href="#" style={{ marginTop: 24 }}>↓ Download press kit (one-pager)</a>
          </aside>
        </section>

      </div>

      <footer className="ticker">
        <span className="mono">Press Conference</span><span className="dot"></span>
        <span className="mono">Match concludes 90 minutes after kickoff</span><span className="dot"></span>
        <span className="mono">Omni Systems</span>
      </footer>
    </main>
  );
}
