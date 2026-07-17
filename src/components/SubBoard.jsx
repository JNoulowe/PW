import { Link, useLocation } from 'react-router-dom';

const SECTIONS = [
  { num: '00', to: '/', name: 'Matchday Programme', sub: 'Home — the cover' },
  { num: '1', to: '/starting-xi', name: 'Starting XI', sub: 'The pitch' },
  { num: '2', to: '/profile', name: 'Player Profile', sub: 'Scouting report' },
  { num: '3', to: '/project-openclaw', name: 'Project Detail', sub: 'OpenClaw — striker' },
  { num: '4', to: '/contact', name: 'Press Conference', sub: 'Contact' },
  { num: '5', to: '/404', name: "Referee's Whistle", sub: '404' },
];

export function SubBoard({ open, onClose }) {
  const { pathname } = useLocation();

  return (
    <>
      <div
        className={`subboard-scrim${open ? ' open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav className={`subboard${open ? ' open' : ''}`} aria-label="Sections">
        <div className="subboard-head">
          <span className="micro">Substitution Board</span>
          <button className="subboard-close" aria-label="Close menu" onClick={onClose}>×</button>
        </div>
        {SECTIONS.map((s) => (
          <Link
            key={s.to}
            className="sub-row"
            to={s.to}
            onClick={onClose}
            aria-current={pathname === s.to ? 'page' : undefined}
          >
            <span className="num tnum">{s.num}</span>
            <span>
              <span className="nm">{s.name}</span>
              <span className="sub">{s.sub}</span>
            </span>
          </Link>
        ))}
      </nav>
    </>
  );
}
