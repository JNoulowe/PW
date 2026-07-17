import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { SubBoard } from './SubBoard';
import { useKit } from '../hooks/useKit';

export function Layout() {
  const [kit, toggleKit] = useKit();
  const [navOpen, setNavOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeydown(e) {
      if (e.key === 'Escape') setNavOpen(false);
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  return (
    <>
      <Header kit={kit} onToggleKit={toggleKit} onOpenNav={() => setNavOpen(true)} />
      <SubBoard open={navOpen} onClose={() => setNavOpen(false)} />
      <Outlet />
    </>
  );
}
