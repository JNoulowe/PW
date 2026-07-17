import { Reveal } from '../components/Reveal';
import { usePageTitle } from '../hooks/usePageTitle';
import '../styles/pages.css';

export default function Profile() {
  usePageTitle('Jonathan Noulowe II — Player Profile');

  return (
    <main className="page page-enter">
      <div className="wrap pad-top">

        {/* HERO */}
        <section className="profile-hero">
          <div className="ph portrait"><span className="ph-label">Headshot — drop photo</span></div>
          <div>
            <div className="eyebrow"><span className="stripe" /><span className="micro">Scouting Report</span></div>
            <h1 className="profile-name"><span className="ln1">JONATHAN</span><br /><span className="ln2">NOULOWE&nbsp;II</span></h1>
            <p className="position-label">Manager · Technical Product Manager<br />Co-founder, Omni&nbsp;Systems</p>
            <div className="factbox">
              <div className="fact"><div className="fk">Club</div><div className="fv">Omni Systems</div></div>
              <div className="fact"><div className="fk">Previous</div><div className="fv">Bank of America</div></div>
              <div className="fact"><div className="fk">Position</div><div className="fv">No.10 — Playmaker</div></div>
              <div className="fact"><div className="fk">Status</div><div className="fv"><span className="statusdot"></span>Active</div></div>
            </div>
          </div>
        </section>

        {/* RADAR */}
        <section className="section">
          <Reveal as="div" className="section-head">
            <div className="eyebrow"><span className="stripe" /><span className="micro">Attributes</span></div>
            <h2>The numbers behind the role.</h2>
          </Reveal>
          <div className="radar-block">
            <Reveal as="div" className="radar-wrap">
              <svg className="radar-svg" viewBox="-66 -30 532 460" role="img" aria-label="Attribute radar — Systems Design 92, Product Strategy 91, Leadership 89, Operations 88, Sales and BD 86, AI and ML Engineering 84">
                {/* rings */}
                <polygon className="ring" points="200,157.5 236.8,178.75 236.8,221.25 200,242.5 163.2,221.25 163.2,178.75" />
                <polygon className="ring" points="200,115 273.6,157.5 273.6,242.5 200,285 126.4,242.5 126.4,157.5" />
                <polygon className="ring" points="200,72.5 310.4,136.25 310.4,263.75 200,327.5 89.6,263.75 89.6,136.25" />
                <polygon className="ring" points="200,30 347.2,115 347.2,285 200,370 52.8,285 52.8,115" />
                {/* axes */}
                <line className="axis" x1="200" y1="200" x2="200" y2="30" />
                <line className="axis" x1="200" y1="200" x2="347.2" y2="115" />
                <line className="axis" x1="200" y1="200" x2="347.2" y2="285" />
                <line className="axis" x1="200" y1="200" x2="200" y2="370" />
                <line className="axis" x1="200" y1="200" x2="52.8" y2="285" />
                <line className="axis" x1="200" y1="200" x2="52.8" y2="115" />
                {/* labels */}
                <text className="alabel" x="200" y="-2" textAnchor="middle">STRATEGY</text>
                <text className="alabel" x="364" y="100" textAnchor="start">AI / ML</text>
                <text className="alabel" x="364" y="304" textAnchor="start">SYSTEMS</text>
                <text className="alabel" x="200" y="402" textAnchor="middle">SALES + BD</text>
                <text className="alabel" x="36" y="304" textAnchor="end">OPS</text>
                <text className="alabel" x="36" y="100" textAnchor="end">LEADERSHIP</text>
                {/* value polygon */}
                <polygon className="valpoly" points="200,43.74 324.9,127.88 336.8,278.99 200,347.68 69.14,275.56 67.65,123.58" />
                <circle className="vdot" cx="200" cy="43.74" r="4" />
                <circle className="vdot" cx="324.9" cy="127.88" r="4" />
                <circle className="vdot" cx="336.8" cy="278.99" r="4" />
                <circle className="vdot" cx="200" cy="347.68" r="4" />
                <circle className="vdot" cx="69.14" cy="275.56" r="4" />
                <circle className="vdot" cx="67.65" cy="123.58" r="4" />
              </svg>
            </Reveal>
            <Reveal as="div" className="radar-legend" delay={120}>
              <div className="rl"><span className="rk">Systems Design</span><span className="rv tnum">92</span></div>
              <div className="rl"><span className="rk">Product Strategy</span><span className="rv tnum">91</span></div>
              <div className="rl"><span className="rk">Leadership</span><span className="rv tnum">89</span></div>
              <div className="rl"><span className="rk">Operations</span><span className="rv tnum">88</span></div>
              <div className="rl"><span className="rk">Sales &amp; BD</span><span className="rv tnum">86</span></div>
              <div className="rl"><span className="rk">AI / ML Engineering</span><span className="rv tnum">84</span></div>
            </Reveal>
          </div>
        </section>

        {/* SCOUTING PROSE */}
        <section className="section">
          <div className="scout-grid">
            <Reveal as="div" className="scout">
              <h3>Style of Play</h3>
              <p>A systems thinker who builds for compounding leverage. Starts every problem from the formation — the structure that makes the work repeatable — then picks the tools that play it.</p>
              <p>Ships through clarity. Prefers one clean orchestration over five clever scripts.</p>
            </Reveal>
            <Reveal as="div" className="scout" delay={100}>
              <h3>Strengths</h3>
              <p>Translating ambiguous business problems into shippable systems. Knowing exactly where AI earns trust — back-of-house ops, agentic automation — and where it doesn't yet belong.</p>
              <p>An operator's eye for cost, reliability, and handoff.</p>
            </Reveal>
            <Reveal as="div" className="scout" delay={200}>
              <h3>Trajectory</h3>
              <p>From a trading-floor seat at Bank of America to founding Omni Systems. Now scaling local-LLM deployment and agentic automation for small businesses that want leverage without surrendering their data.</p>
            </Reveal>
          </div>
        </section>

        {/* PHILOSOPHY QUOTE */}
        <section className="section">
          <Reveal as="div" className="quote-band">
            <div className="qstripe"></div>
            <blockquote>The legend Johan Cruyff said, <span className="qem">&ldquo;Playing football is very simple, but playing simple football is the hardest thing there is.&rdquo;</span> I believe building technology is exactly the same — sleek, clear, and only simple once the hard work is done.</blockquote>
            <cite>Jonathan Noulowe II · Manager's office, Omni Systems</cite>
          </Reveal>
        </section>

        {/* SECONDARY STATS + OFF THE PITCH */}
        <section className="section">
          <Reveal as="div" className="section-head">
            <div className="eyebrow"><span className="stripe" /><span className="micro">The rest of the kit</span></div>
          </Reveal>
          <Reveal as="div" className="sstats">
            <div className="sstat"><div className="sk">Preferred foot</div><div className="sv">Systems-first · equal on either</div></div>
            <div className="sstat"><div className="sk">Best position</div><div className="sv">Product × AI deployment</div></div>
            <div className="sstat"><div className="sk">Can also play</div><div className="sv">Sales, ops, partner-facing</div></div>
            <div className="sstat"><div className="sk">Markets</div><div className="sv">SMB · US, remote-first</div></div>
          </Reveal>
          <Reveal as="p" className="mono" style={{ marginTop: 22 }}>
            Off the pitch — a quiet interest in real estate, options markets, and a long bet on palm-oil supply. Different games, same instinct for systems that compound.
          </Reveal>
        </section>

      </div>

      <footer className="ticker">
        <span className="mono">Player Profile</span><span className="dot"></span>
        <span className="mono">Scouting Report</span><span className="dot"></span>
        <span className="mono">Omni Systems</span><span className="dot"></span>
        <span className="mono">Season I</span>
      </footer>
    </main>
  );
}
