import { Link } from 'react-router-dom';
import { MapPin, Phone, Building2 } from 'lucide-react';
import Logo from './Logo.jsx';
import { COMPANY } from '../data/company.js';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo variant="light" />
          <p>
            United Raw Material Pte. Ltd. is a Singapore-based international trading and indenting
            company, established in 2006, working across textile yarns and petrochemicals.
          </p>
        </div>

        <div>
          <h4 className="footer__title">Company</h4>
          <ul className="footer__links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/how-we-work">How We Work</Link></li>
            <li><Link to="/insights">Insights</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer__title">Business</h4>
          <ul className="footer__links">
            <li><Link to="/products/textile-yarns">Textile Yarns</Link></li>
            <li><Link to="/products/petrochemicals">Petrochemicals</Link></li>
            <li><Link to="/products">International Trading</Link></li>
            <li><Link to="/enquiry">Request an Enquiry</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer__title">Contact</h4>
          <ul className="footer__contact">
            <li>
              <MapPin size={16} aria-hidden="true" />
              <span>
                {COMPANY.addressLines[0]}
                <br />
                {COMPANY.addressLines[1]}
              </span>
            </li>
            <li>
              <Phone size={16} aria-hidden="true" />
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
            </li>
            <li>
              <Building2 size={16} aria-hidden="true" />
              <span>UEN {COMPANY.uen}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} {COMPANY.name} All rights reserved.</p>
          <div className="footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
            <span className="footer__demo">Presentation demo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
