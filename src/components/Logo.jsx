import { Link } from 'react-router-dom';
import { BRAND, COMPANY } from '../data/company.js';
import './Logo.css';

/**
 * Uses the official URMPL logo when BRAND.logoSrc is set.
 * Until then, shows the company name as plain text (no invented mark).
 */
export default function Logo({ variant = 'dark', onClick }) {
  return (
    <Link to="/" className={`logo logo--${variant}`} aria-label={`${COMPANY.shortName} home`} onClick={onClick}>
      {BRAND.logoSrc ? (
        <img src={BRAND.logoSrc} alt={BRAND.logoAlt} className="logo__img" />
      ) : (
        <span className="logo__text">
          <span className="logo__name">{COMPANY.shortName}</span>
          <span className="logo__sub">United Raw Material Pte. Ltd.</span>
        </span>
      )}
    </Link>
  );
}
