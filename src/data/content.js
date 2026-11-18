// Site copy and product catalog data for United Raw Material Pte. Ltd. (URMPL).
// Focused on genuine raw material commodities: Textile Yarns, Petrochemicals,
// Industrial Chemicals, Polymers, Minerals, and Global Sourcing.

export const BUSINESS_AREAS = [
  {
    key: 'yarns',
    icon: 'yarn',
    title: 'Textile Yarns',
    text: 'Sourcing and trading of natural, synthetic, and blended textile yarns for spinning, weaving, and knitting mills worldwide.',
    image: {
      src: '/images/textile-yarn-cones-1800.webp',
      alt: 'Precision wound textile yarn cones for industrial weaving and knitting',
    },
    to: '/products/textile-yarns',
    stats: 'Filament · Spun · Blends',
  },
  {
    key: 'petro',
    icon: 'flask',
    title: 'Petrochemicals',
    text: 'Connecting industrial manufacturing requirements with global sources for virgin polymers, PVC resins, PTA, MEG, and solvents.',
    image: {
      src: '/images/petrochemical-plant-night-2000.webp',
      alt: 'Petrochemical refinery towers and industrial distillation complex',
    },
    to: '/products/petrochemicals',
    stats: 'Polymers · Resins · Intermediates',
  },
  {
    key: 'trade',
    icon: 'globe',
    title: 'International Supply Chain',
    text: 'End-to-end global trade management, maritime vessel coordination, and cross-border indenting orchestrated from Singapore.',
    image: {
      src: '/images/container-yard-aerial-2000.webp',
      alt: 'Global intermodal container port and deepwater maritime terminal',
    },
    to: '/how-we-work',
    stats: 'Global Ports · Structured Indenting',
  },
];

export const REASONS = [
  {
    title: 'Established Business',
    text: 'United Raw Material Pte. Ltd. has been registered and operating in Singapore since 2006.',
  },
  {
    title: 'International Trading',
    text: 'Deep expertise in international sourcing, containerized freight, bulk vessel movements, and trade indenting.',
  },
  {
    title: 'Product Understanding',
    text: 'Technical grasp of fibre parameters, yarn counts, polymer melt indices, and chemical purity standards.',
  },
  {
    title: 'Business Coordination',
    text: 'Clear, transparent communication aligning buyer specifications directly with certified producer capabilities.',
  },
  {
    title: 'Sourcing Approach',
    text: 'A structured methodology for reviewing enquiry specifications, quality tolerances, and destination port logistics.',
  },
  {
    title: 'Long-Term Relationships',
    text: 'We prioritize enduring, reliable commercial relationships over transactional one-off trades.',
  },
];

// Specific Products for Textile Yarns
export const TEXTILE_PRODUCTS = [
  {
    id: 'pfy',
    name: 'Polyester Filament Yarn (PFY)',
    grade: 'FDY & DTY | 50D – 300D',
    summary: 'High-tenacity continuous filament yarn with uniform elongation and excellent dye affinity.',
    applications: 'Warp knitting, circular knitting, shuttleless weaving, technical fabrics.',
    image: {
      src: '/images/prd-polyester-filament-yarn-1200.webp',
      alt: 'Polyester filament yarn bobbins on precision spinning frame',
    },
  },
  {
    id: 'cotton',
    name: '100% Cotton Spun Yarn',
    grade: 'Ne 20s to Ne 80s | Combed & Carded',
    summary: 'Pure natural cotton yarns produced with modern compact spinning for minimal hairiness and superior tensile strength.',
    applications: 'Premium shirting, luxury apparel, fine knitwear, home linens.',
    image: {
      src: '/images/prd-cotton-yarn-1200.webp',
      alt: '100% pure combed cotton yarn package',
    },
  },
  {
    id: 'dty',
    name: 'Draw Textured Yarn (DTY)',
    grade: '75D/36F to 300D/96F | SIM / HIM / NIM',
    summary: 'Textured polyester yarn offering high bulk, supple hand feel, and reliable elasticity.',
    applications: 'Athletic wear, activewear, socks, upholstery, suiting fabrics.',
    image: {
      src: '/images/prd-dty-1200.webp',
      alt: 'Draw textured polyester yarn cone package',
    },
  },
  {
    id: 'psf',
    name: 'Polyester Staple Fibre (PSF)',
    grade: '1.2D to 3.0D | Cut Length 32mm–64mm',
    summary: 'Virgin and semi-dull polyester staple fibre with uniform crimp and high spinning stability.',
    applications: 'Ring spinning, vortex spinning, non-woven geotextiles, fiberfill.',
    image: {
      src: '/images/prd-psf-1200.webp',
      alt: 'Polyester staple fibre loose raw material',
    },
  },
  {
    id: 'blended',
    name: 'Poly-Viscose & Poly-Cotton Blends',
    grade: '65/35 & 50/50 | Ring Spun & Siro Spun',
    summary: 'Intimately blended yarns combining the strength of polyester with the natural softness of viscose or cotton.',
    applications: 'Formal suiting, institutional uniforms, durable workwear, trousers.',
    image: {
      src: '/images/prd-poly-viscose-blended-yarn-1200.webp',
      alt: 'Poly-viscose blended yarn spools on rack',
    },
  },
  {
    id: 'viscose',
    name: 'Viscose Spun & Filament Yarn',
    grade: 'Ne 20s–40s Spun | 75D–150D Filament',
    summary: 'Cellulosic regenerated yarn providing silky drape, superior moisture absorption, and vivid coloration.',
    applications: 'Fashion dresswear, scarves, fine linings, embroidery, delicate knitwear.',
    image: {
      src: '/images/prd-viscose-spun-yarn-1200.webp',
      alt: 'Viscose spun yarn package for fashion fabrics',
    },
  },
];

// Specific Products for Petrochemicals & Polymers
export const PETRO_PRODUCTS = [
  {
    id: 'pvc',
    name: 'PVC Suspension Resin',
    grade: 'K-67 / K-57 / K-70',
    summary: 'Premium suspension-grade polyvinyl chloride resin powder with uniform particle distribution and high thermal stability.',
    applications: 'Rigid uPVC pipes, conduits, window profiles, cable insulation, calendered sheets.',
    image: {
      src: '/images/prd-pvc-resin-1200.webp',
      alt: 'High grade suspension PVC resin powder sample',
    },
  },
  {
    id: 'polymers',
    name: 'Polymer Pellets (PP, HDPE, LLDPE)',
    grade: 'Injection, Blow Moulding & Film Grades',
    summary: 'Virgin polyolefin granules with tailored melt flow index (MFI) and tight mechanical property controls.',
    applications: 'Packaging films, industrial containers, automotive parts, woven sacks, consumer goods.',
    image: {
      src: '/images/polymer-pellets-1800.webp',
      alt: 'Pure virgin polymer granules and polyolefin pellets',
    },
  },
  {
    id: 'pta',
    name: 'Purified Terephthalic Acid (PTA)',
    grade: 'Purity > 99.9% | Fibre Grade Powder',
    summary: 'High-purity aromatic dicarboxylic acid essential as the primary chemical building block for polyester.',
    applications: 'Polyester filament yarn, PSF production, PET bottle resin synthesis, engineering plastics.',
    image: {
      src: '/images/prd-pta-1200.webp',
      alt: 'Purified terephthalic acid (PTA) chemical raw material',
    },
  },
  {
    id: 'meg',
    name: 'Monoethylene Glycol (MEG)',
    grade: 'Fibre Grade | High Purity Liquid',
    summary: 'Clear, colorless, odorless liquid intermediate reacting with PTA to create durable polyester polymer chains.',
    applications: 'Polyester fibre and PET resin polymerization, industrial heat transfer fluids, coolants.',
    image: {
      src: '/images/prd-meg-1200.webp',
      alt: 'Monoethylene glycol chemical processing and storage',
    },
  },
  {
    id: 'pet-chips',
    name: 'PET Resin Chips (Bottle & Film Grade)',
    grade: 'IV 0.80 – 0.84 | Food-Grade Certified',
    summary: 'Clear polyethylene terephthalate polymer chips with optimal crystallization and low acetaldehyde levels.',
    applications: 'Beverage & mineral water preforms, thermoformed packaging trays, BOPET film.',
    image: {
      src: '/images/prd-pet-chips-1200.webp',
      alt: 'Clear PET bottle grade resin chips',
    },
  },
  {
    id: 'solvents',
    name: 'Industrial Chemicals & Solvents',
    grade: 'Technical & Industrial Grade',
    summary: 'Wide spectrum of chemical intermediates, specialty solvents, and industrial reagents delivered in bulk or drums.',
    applications: 'Resins, adhesives, paints & coatings, textile auxiliaries, industrial cleaning compounds.',
    image: {
      src: '/images/chemical-drums-1800.webp',
      alt: 'Industrial chemical drums and solvent storage containers',
    },
  },
];

// Traded Raw Material Categories
export const OTHER_COMMODITIES = [
  {
    id: 'minerals',
    title: 'Industrial Minerals & Ores',
    tag: 'Raw Commodities',
    text: 'Sourcing of bulk industrial minerals, quartz, silica, bauxite, and raw metallic ores connecting resource-rich basins with smelting and processing facilities.',
    image: {
      src: '/images/mineral-facets-1800.webp',
      alt: 'Industrial mineral facets and mined raw ores',
    },
  },
  {
    id: 'paper',
    title: 'Kraft Paper & Packaging Media',
    tag: 'Packaging & Board',
    text: 'Containerboard, testliner, fluting medium, and virgin kraft rolls for high-speed corrugated box manufacturing and industrial wrapping.',
    image: {
      src: '/images/paper-rolls-1800.webp',
      alt: 'Jumbo rolls of packaging paper and linerboard in warehouse',
    },
  },
  {
    id: 'agro',
    title: 'Agro Commodities & Grain',
    tag: 'Bulk Agricultural Trade',
    text: 'Origin sourcing and bulk maritime trading of agricultural raw produce, pulses, grains, and animal feed ingredients.',
    image: {
      src: '/images/cat-agro-1200.webp',
      alt: 'Bulk agro commodities, grains, and agricultural produce',
    },
  },
  {
    id: 'timber',
    title: 'Industrial Timber & Sawn Wood',
    tag: 'Forestry Products',
    text: 'Kiln-dried sawn timber, hardwood poles, and softwood logs supplying construction, furniture manufacturing, and pallet packaging sectors.',
    image: {
      src: '/images/timber-stack-1800.webp',
      alt: 'Stacked timber and industrial sawn lumber',
    },
  },
];

// Area cards with photos for Textile Yarns page
export const YARN_AREAS = [
  {
    title: 'Natural Fibre Yarns',
    text: 'Enquiries for 100% natural cotton yarns (combed, carded, compact) evaluated against buyer count, twist, and end-use requirements.',
    image: {
      src: '/images/prd-cotton-yarn-1200.webp',
      alt: 'Natural cotton yarn package',
    },
  },
  {
    title: 'Synthetic Filament & Spun Yarns',
    text: 'Enquiries for polyester and nylon yarns (FDY, DTY, POY) tailored to weaving or high-speed knitting tensions.',
    image: {
      src: '/images/prd-polyester-filament-yarn-1200.webp',
      alt: 'Synthetic filament yarn spinning and packaging',
    },
  },
  {
    title: 'Blended & Technical Yarns',
    text: 'Poly-viscose, poly-cotton, and customized blended compositions where fibre ratio and consistency dictate fabric performance.',
    image: {
      src: '/images/prd-poly-viscose-blended-yarn-1200.webp',
      alt: 'Blended yarn cones for circular knitting',
    },
  },
  {
    title: 'Staple Fibres & Specification Sourcing',
    text: 'Polyester staple fibres and specialty deniers reviewed case by case with leading certified production mills.',
    image: {
      src: '/images/prd-psf-1200.webp',
      alt: 'Polyester staple fibre loose stock',
    },
  },
];

// Area cards with photos for Petrochemicals page
export const PETRO_AREAS = [
  {
    title: 'Virgin Polymers & Resins',
    text: 'Prime polymer grades including PP, HDPE, LDPE, LLDPE, and suspension PVC resin for extrusion and injection processing.',
    image: {
      src: '/images/polymer-pellets-1800.webp',
      alt: 'Virgin polymer pellets and polyolefin granules',
    },
  },
  {
    title: 'Fibre Raw Materials (PTA & MEG)',
    text: 'Purified terephthalic acid and monoethylene glycol connecting producers with synthetic fibre and PET resin manufacturers.',
    image: {
      src: '/images/prd-pta-1200.webp',
      alt: 'Purified terephthalic acid raw material',
    },
  },
  {
    title: 'PET Resin Chips (Bottle Grade)',
    text: 'High-clarity, food-grade certified PET chips for carbonated beverage, mineral water, and thermoformed food container packaging.',
    image: {
      src: '/images/prd-pet-chips-1200.webp',
      alt: 'Clear PET bottle resin chips',
    },
  },
  {
    title: 'Industrial Chemicals & Solvents',
    text: 'Solvents, plasticizers, and organic intermediates supplied in ISO tanks, bulk vessels, and standard steel drums.',
    image: {
      src: '/images/chemical-drums-1800.webp',
      alt: 'Industrial chemical drums and solvent containers',
    },
  },
];

export const INDUSTRIES = [
  {
    icon: 'spool',
    title: 'Spinning, Weaving & Knitting',
    text: 'Mills and fabric producers whose raw-material requirements include natural, synthetic, and blended textile yarns.',
    image: {
      src: '/images/ind-weaving-texturising-1200.webp',
      alt: 'Industrial weaving looms and yarn texturizing',
    },
  },
  {
    icon: 'shirt',
    title: 'Garment & Home Textiles',
    text: 'Manufacturers of apparel, performance sportswear, denim, and home textile products further along the value chain.',
    image: {
      src: '/images/mat-textile-800.webp',
      alt: 'Garment fabric production and finished textiles',
    },
  },
  {
    icon: 'box',
    title: 'Plastics & Packaging',
    text: 'Processors, blown-film converters, and injection moulders converting polymer pellets and PVC resin into consumer products.',
    image: {
      src: '/images/mat-packaging-800.webp',
      alt: 'Industrial packaging films and plastic containers',
    },
  },
  {
    icon: 'factory',
    title: 'Industrial Manufacturing',
    text: 'Plants and chemical formulators that rely on consistent supplies of solvents, monomers, and basic chemical intermediates.',
    image: {
      src: '/images/petrochemical-plant-night-1000.webp',
      alt: 'Chemical manufacturing and processing facility',
    },
  },
  {
    icon: 'ship',
    title: 'Trading & Distribution',
    text: 'Regional trading houses, stockists, and distribution networks seeking reliable indenting and supply coordination from Singapore.',
    image: {
      src: '/images/container-yard-aerial-1000.webp',
      alt: 'Commercial shipping and global container logistics',
    },
  },
  {
    icon: 'layers',
    title: 'Synthetic Fibres & Non-Wovens',
    text: 'Enterprises polymerizing petrochemical intermediates (PTA, MEG) into filament yarns, staple fibre, and technical geotextiles.',
    image: {
      src: '/images/ind-synthetic-fibres-1200.webp',
      alt: 'Synthetic fibre extrusion facility',
    },
  },
];

export const PROCESS = [
  {
    title: 'Enquiry',
    text: 'You share your requirement — product grade, technical specification, quantity range, destination port, and delivery schedule.',
  },
  {
    title: 'Requirement Review',
    text: 'Our Singapore trading desk reviews every technical parameter and verifies supplier capabilities before approaching mills.',
  },
  {
    title: 'Sourcing & Coordination',
    text: 'We coordinate with vetted producers across key production hubs to secure optimal commercial terms and vessel space.',
  },
  {
    title: 'Offer & Terms',
    text: 'Incoterms (FOB, CFR, CIF), LC documentation criteria, inspection certificates, and shipping schedules are agreed in writing.',
  },
  {
    title: 'Order Follow-Through',
    text: 'We monitor production milestones, vessel loading, bill of lading issuance, and customs documentation until arrival.',
  },
  {
    title: 'Ongoing Relationship',
    text: 'Post-delivery review ensures the delivered cargo meets all specifications, establishing steady, repeatable trade flow.',
  },
];

export const ENQUIRY_CHECKLIST = [
  'Exact product name and required commercial specification or grade (e.g. DTY 150D/48F, PVC K-67)',
  'Indicative order volume (metric tons / containers) and frequency of procurement',
  'Target destination port (e.g. Singapore, Port Klang, Nhava Sheva, Chittagong, Jebel Ali)',
  'Preferred shipment window and Incoterms (CFR, CIF, FOB)',
  'Specific packaging requirements (palletized, jumbo bags, steel drums, paper bags) or documentation needs',
];

export const INSIGHTS = [
  {
    tag: 'Trade Basics',
    title: 'What an indenting company does in commodity trade',
    summary: 'Indenting connects an industrial buyer directly with vetted manufacturing sources and manages cross-border execution.',
    body: [
      'In global raw material trade, an indenting house acts as the indispensable bridge between industrial consumers and primary producers. Rather than merely speculating on stock, an indenter identifies verified sources, harmonizes technical specifications, negotiates volume pricing, and structures trade finance documentation.',
      'For buyers, this provides access to certified primary manufacturers with a dedicated Singapore desk protecting their delivery timelines. For producers, it expands export distribution into targeted regional manufacturing hubs.',
    ],
  },
  {
    tag: 'Sourcing',
    title: 'Preparing a high-efficiency sourcing enquiry',
    summary: 'Clear parameters drastically cut quote turnaround times and avoid grade mismatches.',
    body: [
      'The most effective enquiries specify the resin grade or yarn count, expected monthly volume, destination discharge port, target arrival month, and required payment mechanism (such as LC at sight or TT).',
      'If technical tolerances allow alternative equivalents (e.g. replacing a brand grade with a compliant ASTM/ISO standard), highlighting flexibility helps the trading desk identify advantageous supply options.',
    ],
  },
  {
    tag: 'Documentation',
    title: 'Incoterms & shipping documentation alignment',
    summary: 'Clear division of maritime risks, freight charges, and title transfer ensures frictionless customs clearance.',
    body: [
      'International Commercial Terms (Incoterms® 2020) clearly establish when risk transfers from seller to buyer during marine carriage. Aligning whether a shipment is CFR (Cost & Freight) or CIF (with Marine Insurance) before issuing Letters of Credit prevents costly port demurrage.',
      'Standard indenting workflows verify Clean On Board Bills of Lading, Certificate of Analysis (COA), Certificate of Origin (COO), and Packing Lists prior to bank presentation.',
    ],
  },
  {
    tag: 'Textiles',
    title: 'Understanding technical parameters in yarn sourcing',
    summary: 'Denier, filament count, intermingling, and twist determine downstream weaving efficiency.',
    body: [
      'Industrial yarn orders require precise definitions: denier indicates linear density, filament count determines softness and cover, while intermingling (NIM, SIM, HIM) determines how the yarn performs through high-speed air-jet or rapier looms.',
      'Providing the downstream fabric application (e.g. circular knit jersey vs. heavyweight twill workwear) allows our team to recommend the exact draw ratio and thermal shrinkage profile.',
    ],
  },
];
