import usePageTitle from '../hooks/usePageTitle.js';
import LegalPage from '../components/LegalPage.jsx';
import { COMPANY } from '../data/company.js';

const SECTIONS = [
  {
    h: 'About this policy',
    p: [
      `This policy explains how ${COMPANY.name} (“URMPL”, “we”) would approach personal data submitted through this website.`,
      'Singapore’s Personal Data Protection Act 2012 (PDPA) governs the collection, use and disclosure of personal data by organisations in Singapore.',
    ],
  },
  {
    h: 'Information this demo collects',
    p: [
      'This presentation demo does not collect, transmit or store personal data. Forms on this site are for demonstration only; information typed into them stays in your browser and is discarded when you leave the page.',
    ],
  },
  {
    h: 'Information a live site may collect',
    p: ['On a live website, enquiry and contact forms would typically ask for:'],
    ul: ['Name and company', 'Email address and phone number', 'Details of the product requirement you choose to share'],
  },
  {
    h: 'How information would be used',
    p: [
      'Information submitted through a live site would be used to respond to your enquiry and to communicate about your requirement. It would not be sold to third parties.',
    ],
  },
  {
    h: 'Cookies',
    p: ['This demo does not set analytics or advertising cookies.'],
  },
  {
    h: 'Contact',
    p: [`Questions about this policy can be directed to URMPL at ${COMPANY.phone}, ${COMPANY.addressLines.join(', ')}.`],
  },
];

export default function Privacy() {
  usePageTitle('Privacy Policy');
  return <LegalPage title="Privacy Policy" intro="How personal data would be handled on this website." sections={SECTIONS} />;
}
