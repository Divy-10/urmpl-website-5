import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main" key={pathname} className="page-enter">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
