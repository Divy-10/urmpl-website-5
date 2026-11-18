import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, MapPin, PhoneCall, ArrowRight } from 'lucide-react';
import Logo from './Logo.jsx';
import { COMPANY, NAV } from '../data/company.js';
import './Header.css';

function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__left">
          <a href={COMPANY.phoneHref} className="topbar__item">
            <Phone size={13} aria-hidden="true" />
            <span>{COMPANY.phone}</span>
          </a>
          <span className="topbar__item topbar__item--hide-sm">
            <MapPin size={13} aria-hidden="true" />
            <span>Vertex, {COMPANY.addressShort}</span>
          </span>
        </div>
        <div className="topbar__right">
          <span className="topbar__item topbar__item--hide-md">UEN {COMPANY.uen}</span>
          <Link to="/enquiry?type=callback" className="topbar__cta">
            <PhoneCall size={13} aria-hidden="true" />
            <span>Request a Callback</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Dropdown({ item }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const active = pathname.startsWith(item.to);
  const ref = useRef(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <li
      className={`nav__item nav__item--dd ${open ? 'is-open' : ''}`}
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`nav__link ${active ? 'is-active' : ''}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
      >
        {item.label}
        <ChevronDown size={14} className="nav__chev" aria-hidden="true" />
      </button>
      <ul className="dd" role="menu">
        {item.children.map((c) => (
          <li key={c.to} role="none">
            <NavLink to={c.to} end role="menuitem" className="dd__link">
              {c.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
}

function MobileDrawer({ open, onClose }) {
  const [sub, setSub] = useState(null);
  const panelRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector('button, a')?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <div className={`drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <div className="drawer__overlay" onClick={onClose} />
      <aside
        className="drawer__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        ref={panelRef}
        inert={open ? undefined : true}
      >
        <div className="drawer__head">
          <Logo onClick={onClose} />
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>
        <nav className="drawer__nav" aria-label="Mobile">
          <ul>
            {NAV.map((item) =>
              item.children ? (
                <li key={item.to} className={sub === item.to ? 'is-open' : ''}>
                  <button
                    type="button"
                    className="drawer__link"
                    aria-expanded={sub === item.to}
                    onClick={() => setSub((s) => (s === item.to ? null : item.to))}
                  >
                    {item.label}
                    <ChevronDown size={18} aria-hidden="true" />
                  </button>
                  <ul className="drawer__sub">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <NavLink to={c.to} end onClick={onClose}>
                          {c.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'} className="drawer__link" onClick={onClose}>
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>
        <div className="drawer__foot">
          <Link to="/enquiry" className="btn btn--primary" onClick={onClose}>
            Request an Enquiry <ArrowRight size={16} />
          </Link>
          <a href={COMPANY.phoneHref} className="drawer__phone">
            <Phone size={15} aria-hidden="true" /> {COMPANY.phone}
          </a>
        </div>
      </aside>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setDrawer(false), [pathname]);

  return (
    <>
      <TopBar />
      <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header__inner">
          <Logo />
          <nav className="nav" aria-label="Main">
            <ul className="nav__list">
              {NAV.map((item) =>
                item.children ? (
                  <Dropdown key={item.to} item={item} />
                ) : (
                  <li className="nav__item" key={item.to}>
                    <NavLink to={item.to} end={item.to === '/'} className="nav__link">
                      {item.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>
          <button
            type="button"
            className="icon-btn header__burger"
            onClick={() => setDrawer(true)}
            aria-label="Open menu"
            aria-expanded={drawer}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
      <MobileDrawer open={drawer} onClose={() => setDrawer(false)} />
    </>
  );
}
