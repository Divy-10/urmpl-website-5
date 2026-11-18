import usePageTitle from '../hooks/usePageTitle.js';
import LegalPage from '../components/LegalPage.jsx';
import { COMPANY } from '../data/company.js';

const SECTIONS = [
  {
    h: 'Use of this website',
    p: [
      `This website is operated as a presentation demo for ${COMPANY.name}. By using it you agree to these terms.`,
    ],
  },
  {
    h: 'Information on this site',
    p: [
      'Content is provided for general information about URMPL’s business areas. It does not constitute an offer to sell, a quotation, or a commitment regarding the availability, specification or pricing of any product.',
      'Product availability, grades, quantities and commercial terms are confirmed only in direct written communication with URMPL.',
    ],
  },
  {
    h: 'Insights articles',
    p: ['Articles in the Insights section are general background only and are not legal, financial or trade advice.'],
  },
  {
    h: 'Photography',
    p: ['Photographs on this site are sourced from Unsplash under the Unsplash License and are illustrative only. They do not depict URMPL’s premises, staff, customers or shipments.'],
  },
  {
    h: 'Third-party links',
    p: ['Links to external websites, such as map services, are provided for convenience. URMPL is not responsible for their content.'],
  },
  {
    h: 'Governing law',
    p: ['These terms would be governed by the laws of Singapore.'],
  },
];

export default function Terms() {
  usePageTitle('Terms & Conditions');
  return <LegalPage title="Terms & Conditions" intro="Terms of use for this website." sections={SECTIONS} />;
}
