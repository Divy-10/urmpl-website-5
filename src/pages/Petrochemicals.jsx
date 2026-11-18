import usePageTitle from '../hooks/usePageTitle.js';
import ProductDetail from '../components/ProductDetail.jsx';
import { IMAGES } from '../data/images.js';
import { PETRO_AREAS, PETRO_PRODUCTS } from '../data/content.js';

export default function Petrochemicals() {
  usePageTitle('Petrochemicals');
  return (
    <ProductDetail
      title="Petrochemicals"
      heroIntro="Trading and supply coordination across virgin polymers, PVC suspension resins, PTA, MEG, and industrial chemicals."
      heroImage={IMAGES.refinery}
      overviewTitle="Connecting industrial chemical and plastics requirements with primary producers"
      overview={[
        'Petrochemicals and polymers constitute URMPL’s second core business domain. These materials supply major industrial converters, from pipe and profile extruders to packaging film producers, bottle blow-moulders, and synthetic fibre polymerization facilities.',
        'We help buyers navigate fluctuating global pricing, source verified producer grades, and manage complex ISO-tank, drummed, and bulk maritime logistics with seamless documentation under Singapore trade governance.',
      ]}
      overviewImage={IMAGES.polymerPellets}
      areasTitle="Petrochemical & chemical sourcing categories"
      areas={PETRO_AREAS}
      productsList={PETRO_PRODUCTS}
      gallery={[IMAGES.chemicalDrums, IMAGES.plant, IMAGES.containers]}
      other={{ label: 'Textile Yarns', to: '/products/textile-yarns' }}
    />
  );
}
