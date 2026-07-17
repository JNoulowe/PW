import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import '../styles/home.css';

/* ---------------- squad data ---------------- */
// attack goes UP (y small = attacking goal). 4-3-3.
const STARTERS = [
  { n: 9,  pos: 'ST', key: true,  name: 'OpenClaw',    role: 'Orchestration layer',          x: 50, y: 15, td: 8  },
  { n: 11, pos: 'LW', name: 'Relay',       role: 'Agentic automation',           x: 21, y: 17, td: 9,  edge: 'left'  },
  { n: 7,  pos: 'RW', name: 'Atlas',       role: 'Local-LLM deployment',         x: 79, y: 17, td: 10, edge: 'right' },
  { n: 10, pos: 'AM', name: 'Beacon',      role: 'Retrieval knowledge base',     x: 50, y: 33, td: 7  },
  { n: 6,  pos: 'CM', name: 'Switchboard', role: 'CRM integration engine',       x: 29, y: 45, td: 5,  edge: 'left'  },
  { n: 8,  pos: 'CM', name: 'Forge',       role: 'Internal tooling / promptops', x: 71, y: 45, td: 6,  edge: 'right' },
  { n: 3,  pos: 'LB', name: 'Ledger',      role: 'Finance-ops automation',       x: 17, y: 62, td: 3,  edge: 'left'  },
  { n: 5,  pos: 'CB', name: 'Vault',       role: 'Local data store',             x: 39, y: 64, td: 1  },
  { n: 4,  pos: 'CB', name: 'Sentinel',    role: 'Guardrails & trust',           x: 61, y: 64, td: 2  },
  { n: 2,  pos: 'RB', name: 'Gridiron',    role: 'Deploy & infra pipeline',      x: 83, y: 62, td: 4,  edge: 'right' },
  { n: 1,  pos: 'GK', name: 'Bedrock',     role: 'Core platform',                x: 50, y: 85, td: 0  },
];
const SUBS = [
  { n: 12, pos: 'SUB', name: 'Tradewind', role: 'Options signal tool' },
  { n: 13, pos: 'SUB', name: 'Acre',      role: 'Real-estate analytics' },
  { n: 14, pos: 'SUB', name: 'Compass',   role: 'Client discovery' },
  { n: 15, pos: 'SUB', name: 'Tempo',     role: 'Scheduling agent' },
  { n: 16, pos: 'SUB', name: 'Mosaic',    role: 'Design system' },
  { n: 17, pos: 'SUB', name: 'Press',     role: 'Writing / CMS' },
  { n: 18, pos: 'SUB', name: 'Quarry',    role: 'Data ingestion' },
];
const PROJECT_HREF = '/project-openclaw'; // representative detail page for the prototype

/* ---------------- pitch markings ---------------- */
function PitchSVG() {
  const sw = 2.6;
  const op = 0.92;
  const bands = [];
  for (let i = 0; i < 8; i++) {
    if (i % 2 === 0) bands.push(<rect key={i} x="0" y={i * 130} width="680" height="130" fill="var(--pitch-a)" />);
  }
  return (
    <svg className="pitch-svg" viewBox="0 0 680 1040" preserveAspectRatio="none" aria-hidden="true">
      <rect width="680" height="1040" fill="var(--pitch-b)" />
      {bands}
      <g stroke="var(--pitch-ink)" strokeWidth={sw} fill="none" opacity={op} strokeLinecap="round">
        {/* boundary + halfway */}
        <rect x="28" y="28" width="624" height="984" rx="2" />
        <line x1="28" y1="520" x2="652" y2="520" />
        <circle cx="340" cy="520" r="88" />
        {/* penalty + goal areas (top) */}
        <rect x="153" y="28" width="374" height="150" />
        <rect x="255" y="28" width="170" height="55" />
        <path d="M267.6 178 A 88 88 0 0 0 412.4 178" />
        {/* penalty + goal areas (bottom) */}
        <rect x="153" y="862" width="374" height="150" />
        <rect x="255" y="957" width="170" height="55" />
        <path d="M267.6 862 A 88 88 0 0 1 412.4 862" />
        {/* corner arcs */}
        <path d="M28 40 A 12 12 0 0 1 40 28" />
        <path d="M640 28 A 12 12 0 0 1 652 40" />
        <path d="M28 1000 A 12 12 0 0 0 40 1012" />
        <path d="M652 1000 A 12 12 0 0 1 640 1012" />
      </g>
      <g fill="var(--pitch-ink)" opacity={op}>
        <circle cx="340" cy="520" r="3.4" />
        <circle cx="340" cy="128" r="3.4" />
        <circle cx="340" cy="912" r="3.4" />
      </g>
      {/* goals */}
      <g stroke="var(--pitch-ink)" strokeWidth={sw} opacity={op} fill="none">
        <rect x="305" y="20" width="70" height="8" />
        <rect x="305" y="1012" width="70" height="8" />
      </g>
    </svg>
  );
}

/* ---------------- bubble ---------------- */
function Bubble({ p, onPick }) {
  const cls = ['bubble', p.key ? 'is-key' : ''].join(' ').trim();
  return (
    <a
      className={cls}
      href={PROJECT_HREF}
      data-edge={p.edge || 'center'}
      style={{ left: `${p.x}%`, top: `${p.y}%`, '--td': `${p.td * 80}ms` }}
      aria-label={`No.${p.n} ${p.pos} — ${p.name}: ${p.role}`}
      onClick={(e) => onPick(e, p)}
    >
      <span className="bub-ring" />
      <span className="bub-inner"><span>{p.n}</span></span>
      <span className="nameplate">
        <span className="np-pos">{`No.${p.n} · ${p.pos}`}</span>
        <span className="np-name">{p.name}</span>
      </span>
    </a>
  );
}

/* ---------------- page ---------------- */
export default function StartingXI() {
  usePageTitle('Jonathan Noulowe II — Starting XI');
  const navigate = useNavigate();
  const [run, setRun] = useState(false);
  const tunnelRef = useRef(null);

  // tunnel entry on mount
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setRun(true); return; }
    const id = setTimeout(() => setRun(true), 260);
    return () => clearTimeout(id);
  }, []);

  // camera-cut click transition
  function onPick(e, p) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return; // let it navigate normally
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href') || PROJECT_HREF;
    document.querySelector('.page')?.classList.add('cutting');
    setTimeout(() => navigate(href), 280);
  }

  return (
    <main className="page page-enter">
      {/* hero band */}
      <section className="home-hero reveal in">
        <div className="eyebrow"><span className="stripe" /><span className="micro">Manager · Omni Systems · Season I</span></div>
        <h1 className="hero-name">
          <span className="ln">JONATHAN</span>
          <span className="ln">NOULOWE&nbsp;II</span>
        </h1>
        <p className="role">Technical product manager &amp; co-founder. <b>I pick the system, then the eleven that play it.</b></p>
        <p className="lede intro">Every starter is a build shipped at Omni Systems — AI and systems work, set into a formation. Tap a player to open the report.</p>
        <div style={{ marginTop: 22, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <span className="formation-tag tnum">4&nbsp;—&nbsp;3&nbsp;—&nbsp;3</span>
          <span className="mono">Vertical XI · attack up</span>
        </div>
      </section>

      {/* matchday: pitch + bench */}
      <section className="matchday">
        <div className="pitch-col">
          <div className={'pitch-wrap tunnel' + (run ? ' run' : '')} ref={tunnelRef}>
            <PitchSVG />
            {STARTERS.map((p) => (
              <Bubble key={p.n} p={p} onPick={onPick} />
            ))}
          </div>
        </div>

        <aside className="bench">
          <div className="bench-sub">
            <div className="eyebrow" style={{ marginBottom: 10 }}><span className="stripe" /><span className="micro">Substitutes</span></div>
            <h3 className="display" style={{ fontSize: '1.4rem', letterSpacing: '-0.01em' }}>The Bench</h3>
            <p className="mono" style={{ marginTop: 6 }}>Seven more in the squad</p>
          </div>
          <div className="bench-list">
            {SUBS.map((s) => (
              <a className="bench-item" key={s.n} href={PROJECT_HREF} onClick={(e) => onPick(e, s)} aria-label={`No.${s.n} ${s.name}: ${s.role}`}>
                <span className="bench-num tnum">{s.n}</span>
                <span className="bench-meta">
                  <span className="bn">{s.name}</span>
                  <span className="bp">{s.role}</span>
                </span>
              </a>
            ))}
          </div>
        </aside>
      </section>

      {/* ticker */}
      <footer className="ticker">
        <span className="mono">Starting XI</span><span className="dot" />
        <span className="mono">Matchday — Projects</span><span className="dot" />
        <span className="mono">Bernabéu Lab</span><span className="dot" />
        <span className="mono">Season I</span><span className="dot" />
        <span className="mono">© {new Date().getFullYear()} J. Noulowe II</span>
      </footer>
    </main>
  );
}
