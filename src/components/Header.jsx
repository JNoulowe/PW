import { Link } from 'react-router-dom';

export function Header({ kit, onToggleKit, onOpenNav }) {
  return (
    <header className="site-header">
      <Link className="monogram" to="/">
        <span className="mg-mark"><span>JN</span></span> Noulowe&nbsp;II
      </Link>
      <div className="header-right">
        <button className="menu-btn" aria-label="Open menu" onClick={onOpenNav}>
          <span className="label">About</span>
          <span className="bars"><i></i><i></i></span>
        </button>
        <button
          className="kit-toggle"
          aria-pressed={kit === 'away'}
          aria-label={kit === 'away' ? 'Switch to home kit (light)' : 'Switch to away kit (dark)'}
          onClick={onToggleKit}
        />
      </div>
    </header>
  );
}
