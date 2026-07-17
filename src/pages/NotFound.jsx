import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import '../styles/pages.css';

export default function NotFound() {
  usePageTitle('Off the pitch — 404');

  return (
    <main className="ref-page page-enter">
      <div className="ref-inner">
        <svg className="whistle" width="84" height="84" viewBox="0 0 84 84" fill="none" aria-hidden="true">
          <circle cx="42" cy="42" r="40" stroke="var(--line)" strokeWidth="1.5"></circle>
          <path d="M30 36h22a10 10 0 0 1 0 20H40a10 10 0 0 1-10-10v-6a4 4 0 0 1 4-4z" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinejoin="round"></path>
          <circle cx="46" cy="46" r="4.5" fill="var(--gold)"></circle>
          <path d="M30 36l-9-7" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round"></path>
          <path d="M62 30c3 1 3 4 0 5M66 26c6 2 6 9 0 11" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round"></path>
        </svg>
        <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="stripe"></span><span className="micro">Referee's Whistle · 404</span></div>
        <h1>Played out of position.</h1>
        <p className="lede" style={{ margin: '0 auto 28px' }}>That page isn't on the team sheet. Let's get you back on the pitch.</p>
        <Link className="btn" to="/starting-xi">← Back to the Starting XI</Link>
      </div>
    </main>
  );
}
