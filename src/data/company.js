// Verified company information ONLY.
// Do not add email addresses, social profiles, statistics, clients,
// certifications or office locations unless they have been verified.

export const COMPANY = {
  name: 'United Raw Material Pte. Ltd.',
  shortName: 'URMPL',
  established: '2006',
  uen: '200607763E',
  phone: '+65 6323 1721',
  phoneHref: 'tel:+6563231721',
  addressLines: ['33 Ubi Avenue 3, #05-32 Vertex', 'Singapore 408868'],
  addressShort: '33 Ubi Avenue 3, Singapore 408868',
  headquarters: 'Singapore',
  business: 'International Trading & Indenting',
  businessAreas: ['Textile yarns', 'Petrochemicals', 'International sourcing and trading'],
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=33+Ubi+Avenue+3+Vertex+Singapore+408868',
};

// Set to a path such as '/brand/urmpl-logo.png' once the official URMPL logo
// file is placed in /public/brand/. While null, a plain text wordmark is shown.
export const BRAND = {
  logoSrc: null,
  logoAlt: 'URMPL — United Raw Material Pte. Ltd.',
};

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Products',
    to: '/products',
    children: [
      { label: 'All Products', to: '/products' },
      { label: 'Textile Yarns', to: '/products/textile-yarns' },
      { label: 'Petrochemicals', to: '/products/petrochemicals' },
    ],
  },
  { label: 'Industries', to: '/industries' },
  { label: 'How We Work', to: '/how-we-work' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact Us', to: '/contact' },
];
