import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { usePageTitle } from '../hooks/usePageTitle';
import '../styles/intro.css';

export default function Home() {
  usePageTitle('Jonathan Noulowe II — Manager, Omni Systems');

  return (
    <main className="page page-enter intro">
      <div className="wrap pad-top">

        {/* fixture / score-bug strip */}
        <Reveal as="div" className="fixturebar" initiallyIn>
          <span className="fb strong live"><span className="live-dot"></span>Live</span>
          <span className="sep">/</span>
          <span className="fb">Matchday — Season I</span>
          <span className="sep">/</span>
          <span className="fb">Omni Systems</span>
          <span className="sep">/</span>
          <span className="fb">Bernabéu Lab</span>
          <span className="sep">/</span>
          <span className="fb">KO 20:00</span>
        </Reveal>

        {/* hero lockup */}
        <section className="intro-hero">
          <Reveal as="div" className="eyebrow intro-kicker" initiallyIn>
            <span className="stripe"></span><span className="micro">Pre-Match · Manager's Notes</span>
          </Reveal>
          <Reveal as="h1" className="intro-name" initiallyIn delay={60}>
            <span className="ln">JONATHAN</span>
            <span className="ln">NOULOWE&nbsp;II</span>
          </Reveal>
          <Reveal as="p" className="intro-role" initiallyIn delay={140}>
            Technical Product Manager<br />Co-founder · Omni&nbsp;Systems
          </Reveal>

          <Reveal as="p" className="mnote wide" delay={200}>
            I build AI and systems that earn their keep — <span className="gold">sleek, clear, and only simple once the hard work's done.</span>
          </Reveal>
          <Reveal
            as="p"
            className="mnote wide"
            delay={260}
            style={{ fontSize: 'clamp(1rem,1.5vw,1.2rem)', color: 'var(--ink-2)', marginTop: 18, fontWeight: 500 }}
          >
            Johan Cruyff said playing simple football is the hardest thing there is. I build technology the same way — structure first, then the pieces that play it.
          </Reveal>

          <Reveal as="div" className="cta-row" delay={320}>
            <Link className="btn" to="/starting-xi">Kick off <span aria-hidden="true">→</span></Link>
            <Link className="btn btn-ghost" to="/profile">Read the scouting report</Link>
          </Reveal>
        </section>

        {/* coverage rundown */}
        <section className="coverage">
          <Reveal as="div" className="coverage-head">
            <div className="eyebrow" style={{ margin: 0 }}><span className="stripe"></span><span className="micro">Tonight's Coverage</span></div>
            <span className="mono">Four ways in</span>
          </Reveal>
          <Reveal as="p" className="lede" delay={60} style={{ marginTop: 14 }}>
            This site is my squad sheet — every project a player, every page a different angle on the match.
          </Reveal>

          <Reveal as="ol" className="rundown" delay={120}>
            <li><Link to="/starting-xi">
              <span className="run-num tnum">01</span>
              <span className="run-main"><span className="rt">Starting XI</span><span className="rd">Eleven projects, set into a formation. The work, read as a team sheet.</span></span>
              <span className="run-meta"><span className="run-tag">Eleven</span><span className="run-arrow" aria-hidden="true">→</span></span>
            </Link></li>
            <li><Link to="/profile">
              <span className="run-num tnum">02</span>
              <span className="run-main"><span className="rt">Player Profile</span><span className="rd">The scouting report — attributes, style of play, trajectory.</span></span>
              <span className="run-meta"><span className="run-tag">Six axes</span><span className="run-arrow" aria-hidden="true">→</span></span>
            </Link></li>
            <li><Link to="/project-openclaw">
              <span className="run-num tnum">03</span>
              <span className="run-main"><span className="rt">Project Reports</span><span className="rd">Deep dives, match by match. Brief, approach, what I built, post-match.</span></span>
              <span className="run-meta"><span className="run-tag">Report</span><span className="run-arrow" aria-hidden="true">→</span></span>
            </Link></li>
            <li><Link to="/contact">
              <span className="run-num tnum">04</span>
              <span className="run-main"><span className="rt">Press Conference</span><span className="rd">Questions, briefs, and inbound welcome. Take the mic.</span></span>
              <span className="run-meta"><span className="run-tag">Contact</span><span className="run-arrow" aria-hidden="true">→</span></span>
            </Link></li>
          </Reveal>
        </section>

      </div>

      <footer className="ticker">
        <span className="mono">Matchday Programme</span><span className="dot"></span>
        <span className="mono">J. Noulowe II</span><span className="dot"></span>
        <span className="mono">Manager · Omni Systems</span><span className="dot"></span>
        <span className="mono">Season I</span>
      </footer>
    </main>
  );
}
