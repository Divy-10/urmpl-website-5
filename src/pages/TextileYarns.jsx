import usePageTitle from '../hooks/usePageTitle.js';
import ProductDetail from '../components/ProductDetail.jsx';
import { IMAGES } from '../data/images.js';
import { YARN_AREAS, TEXTILE_PRODUCTS } from '../data/content.js';

export default function TextileYarns() {
  usePageTitle('Textile Yarns');
  return (
    <ProductDetail
      title="Textile Yarns"
      heroIntro="International sourcing and indenting of natural, synthetic, and blended textile yarns coordinated directly from Singapore."
      heroImage={IMAGES.yarnRack}
      overviewTitle="Connecting spinning, weaving, and knitting mills with certified production origins"
      overview={[
        'Textile yarns represent one of URMPL’s primary trading domains. We work with textile mills, knitters, and fabric converters whose downstream manufacturing relies on tight count tolerances, low hairiness, and consistent package winding.',
        'From high-tenacity continuous polyester filament (FDY, DTY) to fine combed ring-spun cotton and technical blends, our Singapore team evaluates each enquiry against producer capabilities, lead times, and containerized ocean routing.',
      ]}
      overviewImage={IMAGES.yarnMachine}
      areasTitle="Yarn sourcing enquiry categories"
      areas={YARN_AREAS}
      productsList={TEXTILE_PRODUCTS}
      gallery={[IMAGES.yarnColour, IMAGES.polyesterFilament, IMAGES.portAerial]}
      other={{ label: 'Petrochemicals', to: '/products/petrochemicals' }}
    />
  );
}
