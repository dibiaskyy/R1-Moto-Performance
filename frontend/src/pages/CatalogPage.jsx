import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  ArrowRight, 
  CheckCircle2, 
  Bike, 
  Search, 
  RotateCcw,
  Eye,
  Check,
  X,
  CreditCard,
  Layers,
  FileText,
  Flame,
  ShieldAlert,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';

export default function CatalogPage() {
  const [searchParams] = useSearchParams();

  // Filter States
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedModel, setSelectedModel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItem, setAddedItem] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [modalTab, setModalTab] = useState('specs');

  useEffect(() => {
    const brandParam = searchParams.get('brand');
    const modelParam = searchParams.get('model');
    const catParam = searchParams.get('category');
    if (brandParam) setSelectedBrand(brandParam);
    if (modelParam) setSelectedModel(modelParam);
    if (catParam) setSelectedCategory(catParam);
  }, [searchParams]);

  // Helper to map product & spec highlight index to its authentic circular macro zoom directly from the product image itself
  const getMacroZoomImage = (product, index) => {
    if (!product) return null;
    const name = product.name.toLowerCase();
    let prefix = null;
    if (name.includes('pulley set')) prefix = 'pulley_set';
    else if (name.includes('clutch bell') || name.includes('bell')) prefix = 'bell';
    else if (name.includes('clutch lining')) prefix = 'clutch_lining';
    else if (name.includes('roller') || name.includes('flyball')) prefix = 'flyball';
    else if (name.includes('clutch spring')) prefix = 'clutch_spring';
    else if (name.includes('cvt cleaner')) prefix = 'cvt_cleaner';
    else if (name.includes('slider piece')) prefix = 'slider_piece';
    else if (name.includes('brake') || name.includes('pad')) prefix = 'brakepad';
    else if (name.includes('fork oil')) prefix = 'fork_oil';
    else if (name.includes('torque drive')) prefix = 'torque_drive';
    
    if (prefix) {
      return `/images/products/crops/${prefix}_${(index % 4) + 1}.png`;
    }
    return product.image;
  };

  // Exact catalog data according to official price sheet & brochure spec pages
  const allProducts = [
    {
      id: 1,
      partNumber: 'R1-PULLEY-Y-CLK',
      name: 'R1 Pulley Set (Click 125)',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      brand: 'Yamaha',
      model: 'Click 125',
      specs: 'Optimized Ramp Angle • Precision Machined',
      desc: 'High-performance variator pulley set engineered for Yamaha Click 125 for smooth power delivery.',
      image: '/images/products/pulley-set.png',
      brochureImage: '/images/brochures/Pullet Set.jpg',
      priceNum: 2000,
      price: '₱2,000',
      fitment: ['Yamaha Click 125'],
      fitmentSummary: 'Yamaha Click 125',
      specHighlights: [
        {
          title: 'High-Grade Aluminum Alloy',
          desc: 'Crafted from premium aluminum alloy for maximum strength with reduced weight, enhancing throttle response while maintaining durability under continuous CVT operation.'
        },
        {
          title: 'Precision-Machined Surface',
          desc: 'CNC-machined pulley faces ensure smooth belt travel and consistent contact. Reduces friction, minimizes belt wear, and improves overall transmission efficiency.'
        },
        {
          title: 'Optimized Ramp Angle',
          desc: 'Designed with precise ramp angles to deliver smoother acceleration and balanced power delivery. Improves shift response across low to high speeds.'
        },
        {
          title: 'Air Fins',
          desc: 'Engineered to channel air efficiently toward the pulley and belt area. Improves airflow circulation inside the CVT case, helping reduce heat buildup during operation.'
        }
      ],
      features: ['Precision Machined Variator', 'Optimized Ramp Angles', 'Direct Bolt-On Replacement', 'Consistent Belt Grip'],
    },
    {
      id: 2,
      partNumber: 'R1-PULLEY-Y-NMAX',
      name: 'R1 Pulley Set (NMAX / Aerox 155)',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      brand: 'Yamaha',
      model: 'Nmax / Aerox 155',
      specs: 'Optimized Ramp Angle • Billet Alloy',
      desc: 'Performance pulley set designed specifically for Yamaha NMAX 155 and Aerox 155.',
      image: '/images/products/pulley-set.png',
      brochureImage: '/images/brochures/Pullet Set.jpg',
      priceNum: 2700,
      price: '₱2,700',
      fitment: ['Yamaha NMAX 155', 'Yamaha Aerox 155'],
      fitmentSummary: 'Yamaha NMAX / Aerox 155',
      specHighlights: [
        {
          title: 'High-Grade Aluminum Alloy',
          desc: 'Crafted from premium aluminum alloy for maximum strength with reduced weight, enhancing throttle response while maintaining durability under continuous CVT operation.'
        },
        {
          title: 'Precision-Machined Surface',
          desc: 'CNC-machined pulley faces ensure smooth belt travel and consistent contact. Reduces friction, minimizes belt wear, and improves overall transmission efficiency.'
        },
        {
          title: 'Optimized Ramp Angle',
          desc: 'Designed with precise ramp angles to deliver smoother acceleration and balanced power delivery. Improves shift response across low to high speeds.'
        },
        {
          title: 'Air Fins',
          desc: 'Engineered to channel air efficiently toward the pulley and belt area. Improves airflow circulation inside the CVT case, helping reduce heat buildup during operation.'
        }
      ],
      features: ['CNC Billet Construction', 'Precision Ramp Profile', 'Smooth Acceleration Response', 'Direct Bolt-On Fitment'],
    },
    {
      id: 3,
      partNumber: 'R1-PULLEY-H-PCX',
      name: 'R1 Pulley Set (PCX / ADV 160)',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      brand: 'Honda',
      model: 'PCX/ ADV 160',
      specs: '160cc Tuned Ramps • Precision Alloy',
      desc: 'Performance variator pulley engineered for Honda PCX 160 and Honda ADV 160.',
      image: '/images/products/pulley-set.png',
      brochureImage: '/images/brochures/Pullet Set.jpg',
      priceNum: 2700,
      price: '₱2,700',
      fitment: ['Honda PCX 160', 'Honda ADV 160'],
      fitmentSummary: 'Honda PCX / ADV 160',
      specHighlights: [
        {
          title: 'High-Grade Aluminum Alloy',
          desc: 'Crafted from premium aluminum alloy for maximum strength with reduced weight, enhancing throttle response while maintaining durability.'
        },
        {
          title: 'Precision-Machined Surface',
          desc: 'CNC-machined pulley faces ensure smooth belt travel and consistent contact.'
        },
        {
          title: 'Optimized Ramp Angle',
          desc: 'Tuned specifically for Honda 160cc eSP+ engine dynamics.'
        },
        {
          title: 'Air Fins',
          desc: 'Active cooling vanes dissipate heat from variator compartment.'
        }
      ],
      features: ['Engineered for 160cc Platform', 'Smooth Belt Ascension', 'High Thermal Stability', 'Direct Bolt-On Installation'],
    },
    {
      id: 4,
      partNumber: 'R1-PULLEY-H-M3',
      name: 'R1 Pulley Set (M3)',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      brand: 'Honda',
      model: 'M3',
      specs: 'Precision Variator Profile',
      desc: 'Performance drive pulley set tailored for M3 engine platform.',
      image: '/images/products/pulley-set.png',
      brochureImage: '/images/brochures/Pullet Set.jpg',
      priceNum: 2000,
      price: '₱2,000',
      fitment: ['Honda M3'],
      fitmentSummary: 'Honda M3',
      specHighlights: [
        {
          title: 'High-Grade Aluminum Alloy',
          desc: 'Lightened alloy face provides immediate power transfer and crisp throttle pick-up.'
        },
        {
          title: 'Precision-Machined Surface',
          desc: 'CNC-cut faces reduce drag and belt temperature under continuous commuting.'
        },
        {
          title: 'Optimized Ramp Angle',
          desc: 'Calculated ramp path eliminates hesitation off the line.'
        },
        {
          title: 'Air Fins',
          desc: 'Engineered cooling ribs promote continuous air circulation.'
        }
      ],
      features: ['High-Strength Alloy', 'Optimized Roller Weight Motion', 'Reliable Acceleration', 'OEM Bolt-On'],
    },
    {
      id: 5,
      partNumber: 'R1-BELL-HONDA',
      name: 'R1 Clutch Bell (Honda All Models)',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      brand: 'Honda',
      model: 'ALL MODEL',
      specs: 'Multi-Vented • Anti-Fade Grooved',
      desc: 'Precision clutch bell with air-vented slots to dissipate heat and prevent clutch shuddering on all Honda models.',
      image: '/images/products/bell.png',
      brochureImage: '/images/brochures/Bell.jpg',
      priceNum: 1700,
      price: '₱1,700',
      fitment: ['Honda Click 125/150/160', 'Honda PCX 150/160', 'Honda ADV 150/160', 'Honda Beat', 'Honda Genio'],
      fitmentSummary: 'Honda All Models',
      specHighlights: [
        {
          title: 'Stainless Steel Material',
          desc: 'Commonly used in parts that require high strength, heat resistance, and durability. Stainless components can withstand constant friction, high RPM, and exposure to heat and moisture without easily wearing or corroding.'
        },
        {
          title: 'Linear Groove',
          desc: 'The linear grooves in a clutch bell are designed to help dissipate heat and improve clutch performance. As the clutch shoes engage the bell, friction generates heat; the linear grooves allow better airflow and give hot gases and dust a path to escape.'
        },
        {
          title: 'Dust Hole',
          desc: 'The dust hole allows clutch dust and debris produced by friction between the clutch shoes and bell to escape. Without this outlet, dust can build up inside the bell and cause slipping or uneven engagement. It also helps with heat dissipation, letting hot air escape and cooler air circulate.'
        },
        {
          title: 'Wing Cooling Vanes',
          desc: 'The wing in a CVT clutch bell refers to the cooling fins or vanes on the outer surface of the bell, designed to help manage heat produced during clutch engagement.'
        }
      ],
      features: ['Thermal Heat Dissipation Vents', 'Balanced Anti-Vibration Design', 'Eliminates Clutch Slippage', 'Durable Steel Construction'],
    },
    {
      id: 6,
      partNumber: 'R1-BELL-YAMAHA',
      name: 'R1 Clutch Bell (Yamaha All Models)',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      brand: 'Yamaha',
      model: 'ALL MODEL',
      specs: 'Multi-Vented • Anti-Fade Grooved',
      desc: 'Precision clutch bell engineered for all Yamaha scooter models, delivering firm clutch engagement.',
      image: '/images/products/bell.png',
      brochureImage: '/images/brochures/Bell.jpg',
      priceNum: 1700,
      price: '₱1,700',
      fitment: ['Yamaha Aerox 155', 'Yamaha NMAX 155', 'Yamaha Mio Soul i125', 'Yamaha Mio Gravis', 'Yamaha Mio Fazzio'],
      fitmentSummary: 'Yamaha All Models',
      specHighlights: [
        {
          title: 'Stainless Steel Material',
          desc: 'Withstands constant friction, high RPM, and intense city heat without warping or corroding.'
        },
        {
          title: 'Linear Groove',
          desc: 'Linear grooves clean shoe contact area and channel hot gases and dust outwards.'
        },
        {
          title: 'Dust Hole',
          desc: 'Exhausts clutch debris instantly to prevent shuddering in heavy Manila traffic.'
        },
        {
          title: 'Wing Cooling Vanes',
          desc: 'Radiates surface heat rapidly away from outer bell circumference.'
        }
      ],
      features: ['Vented Outer Flange', 'Internal Anti-Slip Texture', 'Resists Thermal Distortion', 'Fits Yamaha 125-155cc Platforms'],
    },
    {
      id: 7,
      partNumber: 'R1-LINING-HONDA',
      name: 'R1 Clutch Lining Assembly (Honda All Models)',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      brand: 'Honda',
      model: 'ALL MODEL',
      specs: 'High-Friction Compound • Reinforced Base',
      desc: 'Complete clutch shoe lining assembly with high-temperature friction pads for Honda models.',
      image: '/images/products/clutch-lining.png',
      brochureImage: '/images/brochures/Clutch Lining - Assy.jpg',
      priceNum: 1700,
      price: '₱1,700',
      fitment: ['Honda Click 125/150/160', 'Honda PCX 150/160', 'Honda ADV 150/160', 'Honda Beat'],
      fitmentSummary: 'Honda All Models',
      specHighlights: [
        {
          title: 'Kevlar Fiber Clutch Plates',
          desc: 'Made from premium Kevlar-reinforced friction material. The clutch plates offer exceptional heat resistance and superior wear durability, ensuring consistent performance even under high-stress conditions. Minimal slippage and longer service life.'
        },
        {
          title: 'Enhanced Grip Performance',
          desc: 'Optimized clutch shoe design delivers strong and stable grip during take-off and acceleration, minimizing slip and improving throttle response.'
        },
        {
          title: 'Steel Clutch Housing',
          desc: 'Constructed from high-tensile steel, the clutch housing provides superior structural integrity and long-lasting durability. Precision-engineered design ensures resistance to warping, deformation, and fatigue.'
        },
        {
          title: 'Heat-Resistant Design',
          desc: 'Built to withstand high temperatures generated during repeated clutch engagement. Maintains performance and structural integrity under heavy use.'
        }
      ],
      features: ['High-Friction Copper Kevlar Compound', 'Heavy-Duty Clutch Base', 'Immediate Bell Engagement', 'Resists Glazing'],
    },
    {
      id: 8,
      partNumber: 'R1-LINING-YAMAHA',
      name: 'R1 Clutch Lining Assembly (Yamaha All Models)',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      brand: 'Yamaha',
      model: 'ALL MODEL',
      specs: 'High-Friction Compound • Reinforced Base',
      desc: 'Complete clutch lining assembly engineered for consistent bite on Yamaha scooters.',
      image: '/images/products/clutch-lining.png',
      brochureImage: '/images/brochures/Clutch Lining - Assy.jpg',
      priceNum: 1700,
      price: '₱1,700',
      fitment: ['Yamaha Aerox 155', 'Yamaha NMAX 155', 'Yamaha Mio Series'],
      fitmentSummary: 'Yamaha All Models',
      specHighlights: [
        {
          title: 'Kevlar Fiber Clutch Plates',
          desc: 'Premium Kevlar-reinforced friction material for exceptional heat endurance and long service life.'
        },
        {
          title: 'Enhanced Grip Performance',
          desc: 'Eliminates lag during initial acceleration and throttle roll-on.'
        },
        {
          title: 'Steel Clutch Housing',
          desc: 'High-tensile steel backing plate prevents shoe flex under aggressive riding.'
        },
        {
          title: 'Heat-Resistant Design',
          desc: 'Maintains optimal friction coefficient even when the clutch reaches peak operating temperature.'
        }
      ],
      features: ['Pre-Arced Friction Shoes', 'High Thermal Resistance', 'Smooth Bite Response', 'Direct Replacement'],
    },
    {
      id: 9,
      partNumber: 'R1-ROLLER-NMAX',
      name: 'R1 Roller Ball Weights (Nmax)',
      category: 'cvt-tuning',
      categoryLabel: 'CVT Tuning & Rollers',
      brand: 'Yamaha',
      model: 'Nmax',
      specs: 'Available: 9g, 10g, 11g, 12g • Set of 6',
      desc: 'Precision gram-matched roller balls for Yamaha NMAX variators for custom acceleration and top-speed tuning.',
      image: '/images/products/flyball.png',
      brochureImage: '/images/brochures/Flyball.jpg',
      priceNum: 350,
      price: '₱350',
      fitment: ['Yamaha NMAX 155 (9g, 10g, 11g, 12g)'],
      fitmentSummary: 'Nmax (9g / 10g / 11g / 12g)',
      specHighlights: [
        {
          title: 'Improved Throttle Response',
          desc: 'Optimized to enhance power delivery and acceleration characteristics. Helps achieve quicker CVT response while maintaining smooth transitions at higher speeds.'
        },
        {
          title: 'Low-Friction Coating',
          desc: 'Features a smooth outer surface that reduces friction against the pulley ramps. Minimizes wear on both the fly balls and pulley face for extended service life.'
        },
        {
          title: 'High-Density Material',
          desc: 'Manufactured from high-density, wear-resistant material to ensure consistent weight and long-lasting performance. Designed to withstand continuous friction and rotation inside the CVT system.'
        },
        {
          title: 'Solid Copper Material',
          desc: 'Manufactured from high-quality copper core for excellent durability and thermal conductivity. Helps dissipate heat efficiently during continuous CVT operation.'
        }
      ],
      features: ['Precision Gram Calibration', 'Self-Lubricating Nylon Shell', 'Smooth Variator Travel', 'High Temperature Resistance'],
    },
    {
      id: 10,
      partNumber: 'R1-ROLLER-HONDA',
      name: 'R1 Roller Ball Weights (Honda)',
      category: 'cvt-tuning',
      categoryLabel: 'CVT Tuning & Rollers',
      brand: 'Honda',
      model: 'Honda',
      specs: 'Available: 10g, 11g, 12g, 13g, 16g, 17g • Set of 6',
      desc: 'Precision gram-matched roller balls for Honda scooter CVT variators.',
      image: '/images/products/flyball.png',
      brochureImage: '/images/brochures/Flyball.jpg',
      priceNum: 350,
      price: '₱350',
      fitment: ['Honda Click, PCX, ADV, Beat (10g, 11g, 12g, 13g, 16g, 17g)'],
      fitmentSummary: 'Honda (10g, 11g, 12g, 13g, 16g, 17g)',
      specHighlights: [
        {
          title: 'Improved Throttle Response',
          desc: 'Optimized to enhance power delivery and acceleration characteristics.'
        },
        {
          title: 'Low-Friction Coating',
          desc: 'Reduces friction against pulley ramps, minimizing ramp grooving.'
        },
        {
          title: 'High-Density Material',
          desc: 'Zero flat-spotting under continuous spinning friction.'
        },
        {
          title: 'Solid Copper Material',
          desc: 'Machined solid copper core for true gram balancing and thermal dissipation.'
        }
      ],
      features: ['Precision Gram Calibration', 'Durable Wear-Resistant Outer Coat', 'Matched 6-Piece Set', 'Quick Ramp Sliding'],
    },
    {
      id: 11,
      partNumber: 'R1-CLUTCH-SPRING-ALL',
      name: 'R1 Clutch Spring (All Models)',
      category: 'cvt-tuning',
      categoryLabel: 'CVT Tuning & Rollers',
      brand: 'All',
      model: 'ALL MODEL',
      specs: 'Silicon Chrome Spring Steel • Set of 3',
      desc: 'Small clutch shoe springs providing responsive high-RPM clutch engagement.',
      image: '/images/products/clutch-spring.png',
      brochureImage: '/images/brochures/Clutch Spring.jpg',
      priceNum: 320,
      price: '₱320',
      fitment: ['Universal for Yamaha & Honda Scooters (All Models)'],
      fitmentSummary: 'All Models',
      specHighlights: [
        {
          title: 'High-Tensile Steel Material',
          desc: 'Manufactured from premium high-tensile steel to ensure superior strength, elasticity, and long service life. Designed to withstand extreme clutch engagement cycles without deformation or loss of tension.'
        },
        {
          title: 'Optimized Spring Tension',
          desc: 'Engineered to provide consistent and balanced pressure on the clutch assembly. Improves power transfer, prevents clutch slip, and ensures smooth engagement during acceleration and gear changes.'
        },
        {
          title: 'Heat-Resistant Design',
          desc: 'Built to maintain performance under high operating temperatures caused by repeated clutch use. The spring resists heat fatigue, ensuring reliable operation even in heavy traffic or aggressive riding conditions.'
        },
        {
          title: 'Enhanced Durability',
          desc: 'Precision-wound construction minimizes metal fatigue and wear. Suitable for daily riding, long-distance use, and performance applications without compromising clutch response.'
        }
      ],
      features: ['Silicon Chrome Wire', 'Resists Heat Fatigue', 'Prevents Early Clutch Drag', 'Pack of 3'],
    },
    {
      id: 12,
      partNumber: 'R1-CENTER-SPRING-ALL',
      name: 'R1 Center Spring (All Models)',
      category: 'cvt-tuning',
      categoryLabel: 'CVT Tuning & Rollers',
      brand: 'All',
      model: 'ALL MODEL',
      specs: 'Tension-Rated Center Spring (1000RPM / 1500RPM)',
      desc: 'Rear pulley torque spring maintaining consistent belt grip and crisp downshifting.',
      image: '/images/products/clutch-spring.png',
      brochureImage: '/images/brochures/Center Spring.jpg',
      priceNum: 450,
      price: '₱450',
      fitment: ['Universal for Yamaha & Honda Scooters (All Models)'],
      fitmentSummary: 'All Models',
      specHighlights: [
        {
          title: 'High-Grade Spring Steel',
          desc: 'Manufactured from premium spring steel to deliver exceptional strength, elasticity, and long service life. Designed to withstand repeated compression under high RPM without fatigue, ensuring consistent clutch engagement and reliable performance.'
        },
        {
          title: 'Precision Spring Rate',
          desc: 'Engineered with an optimized spring rate to provide balanced clutch pressure. Improves power transfer while maintaining smooth engagement, reducing clutch slip during hard acceleration.'
        },
        {
          title: 'Heat-Resistant Performance',
          desc: 'Built to perform under extreme riding conditions. The material resists heat deformation caused by continuous clutch use, helping maintain stable tension even during aggressive riding or stop-and-go traffic.'
        },
        {
          title: 'Enhanced Clutch Response',
          desc: 'Improves throttle response by delivering quicker and more positive clutch engagement. Ideal for riders seeking sharper control, faster take-offs, and improved overall riding feel.'
        }
      ],
      features: ['Fatigue-Resistant Steel', 'Maintains Consistent Belt Tension', 'Prevents Belt Slip On Acceleration', 'Direct Replacement'],
    },
    {
      id: 13,
      partNumber: 'R1-CVT-CLEANER',
      name: 'R1 CVT Cleaner (450ml)',
      category: 'maintenance',
      categoryLabel: 'Maintenance & Fluids',
      brand: 'All',
      model: 'All',
      specs: 'High-Pressure Aerosol Formula • 450ml',
      desc: 'Fast-acting degreaser formulated to remove rubber belt dust, clutch glazing, and oil deposits in CVT compartments.',
      image: '/images/products/cvt-cleaner.png',
      brochureImage: '/images/brochures/CVT Cleaner.jpg',
      priceNum: 120,
      price: '₱120',
      fitment: ['Universal for All Motorcycle Transmissions & Belts'],
      fitmentSummary: 'Universal All',
      specHighlights: [
        {
          title: 'Fast-Acting Cleaning Formula',
          desc: 'Specially formulated to quickly remove dust, belt residue, oil, and grime from CVT components. Restores clean contact surfaces for optimal performance.'
        },
        {
          title: 'Improves CVT Performance',
          desc: 'Designed to stand high CVT operating temperatures. Safe on metal, aluminum, copper, and most rubber components when used as directed.'
        },
        {
          title: 'Smooth Movement',
          desc: 'Helps maintain smooth pulley movement and consistent belt operation. Reduces slipping, noise, and vibration caused by contamination.'
        },
        {
          title: 'Non-Residue Spray',
          desc: 'Dries quickly without leaving sticky residue. Safe for use on pulleys, fly balls, clutch components, and CVT housings.'
        }
      ],
      features: ['Fast-Evaporating Formula', 'Zero Residue', 'Safe on Belts & Oil Seals', 'Restores Pulley Traction'],
    },
    {
      id: 14,
      partNumber: 'R1-SLIDER-PIECE-ALL',
      name: 'R1 Slider Piece (All Models)',
      category: 'cvt-tuning',
      categoryLabel: 'CVT Tuning & Rollers',
      brand: 'All',
      model: 'ALL MODEL',
      specs: 'Pack of 3 • High-Heat Polymer',
      desc: 'Replacement ramp plate slider guides preventing variator vibration and ensuring smooth sliding movement.',
      image: '/images/products/slider-piece.png',
      brochureImage: '/images/brochures/Slider Piece.jpg',
      priceNum: 300,
      price: '₱300',
      fitment: ['Universal for Yamaha & Honda Scooter Variators (All Models)'],
      fitmentSummary: 'All Models',
      specHighlights: [
        {
          title: 'High-Density Engineering Material',
          desc: 'Manufactured from high-strength, wear-resistant material to withstand constant friction and load. Designed to maintain shape and performance under continuous clutch operation.'
        },
        {
          title: 'Precision-Machined Profile',
          desc: 'CNC-machined for accurate dimensions and smooth contact surfaces. Ensures consistent movement within the clutch system, reducing drag and uneven wear.'
        },
        {
          title: 'Low-Friction Operation',
          desc: 'Designed to minimize friction between moving components. Promotes smoother clutch action, improved response, and reduced power loss during engagement.'
        },
        {
          title: 'Stable & Consistent Performance',
          desc: 'Helps maintain proper alignment and movement of clutch components, reducing vibration and improving overall clutch stability.'
        }
      ],
      features: ['Self-Lubricating Synthetic Resin', 'Eliminates Ramp Plate Play', 'High Thermal Durability', 'Pack of 3 Pieces'],
    },
    {
      id: 15,
      partNumber: 'R1-FORK-OIL-ALL',
      name: 'R1 Racing Fork Oil (200mL)',
      category: 'maintenance',
      categoryLabel: 'Maintenance & Fluids',
      brand: 'All',
      model: 'ALL',
      specs: 'Advanced Synthetic Blend • 200mL',
      desc: 'High-performance synthetic fork oil engineered to deliver superior damping and consistent control across all riding conditions.',
      image: '/images/products/fork-oil.png',
      brochureImage: '/images/brochures/Fork Oil p1.jpg',
      priceNum: 150,
      price: '₱150',
      fitment: ['Suitable for all motorcycle telescopic, USD (Upside-Down), and hydraulic shock absorber systems.'],
      fitmentSummary: 'Universal Telescopic / USD',
      specHighlights: [
        {
          title: 'Consistent Damping',
          desc: 'High-Viscosity Index (VI) formula provides exceptional shear stability, ensuring your suspension performance remains consistent whether you\'re cruising on the highway or pushing your limits on the track.'
        },
        {
          title: 'Maximum Protection',
          desc: 'Special anti-wear and anti-corrosion additives protect critical internal fork components from premature wear and rust, significantly extending the service life of your fork seals and bushings.'
        },
        {
          title: 'Friction Reduction',
          desc: 'Advanced synthetic blend minimizes "stiction" and internal drag, allowing for quick, seamless fork action and improving small-bump sensitivity.'
        },
        {
          title: 'Anti-Foaming Control',
          desc: 'Excellent air release properties prevent foaming and air entrainment, maintaining constant damping and performance even under high-temperature, aggressive use.'
        }
      ],
      features: ['High Viscosity Stability', 'Anti-Foaming Chemistry', 'Protects Fork Seals', 'Consistent Damping Feel'],
    },
    {
      id: 16,
      partNumber: 'R1-PAD-H-ADV-PCX',
      name: 'R1 Brake Pads (Adv / Pcx)',
      category: 'braking',
      categoryLabel: 'Braking Systems',
      brand: 'Honda',
      model: 'Adv / Pcx',
      specs: 'Premium Ceramic Compound • Front / Rear',
      desc: 'Premium ceramic compound brake pads for Honda ADV and PCX scooters with smooth, consistent braking performance.',
      image: '/images/products/brakepad.png',
      brochureImage: '/images/brochures/Brake Pad.jpg',
      priceNum: 350,
      price: '₱350',
      fitment: ['Honda ADV 150 / 160', 'Honda PCX 150 / 160'],
      fitmentSummary: 'Honda Adv / Pcx',
      specHighlights: [
        {
          title: 'Premium Ceramic Compound Construction',
          desc: 'Made from high-quality ceramic material for smooth, consistent, and reliable braking performance.'
        },
        {
          title: 'Heat-Resistant Braking Material',
          desc: 'Designed to withstand high temperatures and maintain stable braking efficiency during long rides and spirited mountain descents.'
        }
      ],
      features: ['High Temperature Bite', 'Rotor Friendly Formula', 'Low Brake Dust', 'Direct OEM Caliper Fit'],
    },
    {
      id: 17,
      partNumber: 'R1-PAD-H-CLICK-BEAT',
      name: 'R1 Brake Pads (Click / Beat)',
      category: 'braking',
      categoryLabel: 'Braking Systems',
      brand: 'Honda',
      model: 'Click / Beat',
      specs: 'Premium Ceramic Compound • Front / Rear',
      desc: 'Responsive stopping brake pads engineered for Honda Click 125/150/160 and Honda Beat calipers.',
      image: '/images/products/brakepad.png',
      brochureImage: '/images/brochures/Brake Pad.jpg',
      priceNum: 350,
      price: '₱350',
      fitment: ['Honda Click 125i / 150i / 160', 'Honda Beat FI'],
      fitmentSummary: 'Honda Click / Beat',
      specHighlights: [
        {
          title: 'Premium Ceramic Compound Construction',
          desc: 'Smooth, consistent, and reliable braking bite with low dust formation.'
        },
        {
          title: 'Heat-Resistant Braking Material',
          desc: 'Withstands high thermal cycling without fade in stop-and-go city traffic.'
        }
      ],
      features: ['Immediate Cold Grip', 'Reduced Rotor Wear', 'Smooth Modulation', 'OEM Bolt-On Replacement'],
    },
    {
      id: 18,
      partNumber: 'R1-PAD-Y-NMAX-AEROX',
      name: 'R1 Brake Pads (Nmax / Aerox 155)',
      category: 'braking',
      categoryLabel: 'Braking Systems',
      brand: 'Yamaha',
      model: 'Nmax / Aerox 155',
      specs: 'Premium Ceramic Compound • Front / Rear',
      desc: 'Precision brake pads for Yamaha NMAX 155 and Aerox 155 for street and highway safety.',
      image: '/images/products/brakepad.png',
      brochureImage: '/images/brochures/Brake Pad.jpg',
      priceNum: 350,
      price: '₱350',
      fitment: ['Yamaha NMAX 155 (Front & Rear)', 'Yamaha Aerox 155 (Front)'],
      fitmentSummary: 'Yamaha Nmax / Aerox 155',
      specHighlights: [
        {
          title: 'Premium Ceramic Compound Construction',
          desc: 'High friction coefficient formulated for Yamaha dual-disc and single-disc calipers.'
        },
        {
          title: 'Heat-Resistant Braking Material',
          desc: 'Resists thermal glazing, keeping bite crisp during high-speed decels.'
        }
      ],
      features: ['High Thermal Bite', 'Anti-Fade Grooves', 'Gentle on Stainless Rotors', 'Exact Fitment'],
    },
    {
      id: 19,
      partNumber: 'R1-PAD-Y-M3-SPORTY',
      name: 'R1 Brake Pads (M3 / Sporty)',
      category: 'braking',
      categoryLabel: 'Braking Systems',
      brand: 'Yamaha',
      model: 'M3 / Sporty',
      specs: 'Premium Ceramic Compound • Front / Rear',
      desc: 'Reliable caliper brake pads for Yamaha Mio M3 and Mio Sporty series.',
      image: '/images/products/brakepad.png',
      brochureImage: '/images/brochures/Brake Pad.jpg',
      priceNum: 350,
      price: '₱350',
      fitment: ['Yamaha Mio M3 125', 'Yamaha Mio Sporty', 'Yamaha Mio Soul'],
      fitmentSummary: 'Yamaha M3 / Sporty',
      specHighlights: [
        {
          title: 'Premium Ceramic Compound Construction',
          desc: 'High-density ceramic formulation engineered for everyday commuter durability.'
        },
        {
          title: 'Heat-Resistant Braking Material',
          desc: 'Maintains pad integrity under continuous stop-and-go commuting.'
        }
      ],
      features: ['Strong Braking Friction', 'Consistent Pedal Response', 'Quick Bed-In Time', 'Direct Replacement'],
    },
    {
      id: 20,
      partNumber: 'R1-TD-H-ADV160',
      name: 'R1 Torque Drive (ADV 160)',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      brand: 'Honda',
      model: 'ADV 160',
      specs: 'Forged Torque Drive Assembly • 2-Pin Slots',
      desc: 'High-performance forged torque drive assembly tailored for Honda ADV 160 for optimal powerband shifting.',
      image: '/images/products/torque-drive.png',
      brochureImage: '/images/brochures/Torque Drive.jpg',
      priceNum: 7500,
      price: '₱7,500',
      fitment: ['Honda ADV 160'],
      fitmentSummary: 'Honda ADV 160',
      specHighlights: [
        {
          title: 'Forged Torque Drive Assemblies',
          desc: 'Forged aluminum construction engineered for extreme torque loads and high-rev endurance.'
        },
        {
          title: '2 Pins Slot Racing and Touring',
          desc: 'Dual guide pin slots provide interchangeable shifting curves for either aggressive track acceleration or smooth highway touring.'
        },
        {
          title: 'Long Duration Torque Drive',
          desc: 'Engineered for sustained high-temperature running without pin guide deformation or sheave sticking.'
        },
        {
          title: 'Racing / Upgraded Forged Aluminum (CNC-Machined)',
          desc: 'Lightweight forged billet aluminum structure maximizes RPM spool-up while maintaining extreme structural rigidity.'
        }
      ],
      features: ['Dual-Angle Shift Guide Slots', 'Hardened Alloy Bushing', 'High-Temp Oil Seals', 'Eliminates Mid-RPM Flat Spot'],
    },
    {
      id: 21,
      partNumber: 'R1-TD-H-ADV150',
      name: 'R1 Torque Drive (ADV 150)',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      brand: 'Honda',
      model: 'ADV 150',
      specs: 'Forged Torque Drive Assembly • 2-Pin Slots',
      desc: 'High-performance forged torque drive assembly tailored for Honda ADV 150.',
      image: '/images/products/torque-drive.png',
      brochureImage: '/images/brochures/Torque Drive.jpg',
      priceNum: 7500,
      price: '₱7,500',
      fitment: ['Honda ADV 150'],
      fitmentSummary: 'Honda ADV 150',
      specHighlights: [
        {
          title: 'Forged Torque Drive Assemblies',
          desc: 'Forged aluminum body provides structural rigidity.'
        },
        {
          title: '2 Pins Slot Racing and Touring',
          desc: 'Dual track angles permit custom shift calibration.'
        },
        {
          title: 'Long Duration Torque Drive',
          desc: 'Built to sustain long-distance continuous riding.'
        },
        {
          title: 'CNC-Machined Lightweight Billet',
          desc: 'Lightened rotational mass for immediate rear-wheel torque.'
        }
      ],
      features: ['Dual-Angle Shift Guide Slots', 'Hardened Alloy Bushing', 'High-Temp Oil Seals', 'Consistent Torque Delivery'],
    },
    {
      id: 22,
      partNumber: 'R1-TD-H-PCX160',
      name: 'R1 Torque Drive (PCX 160)',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      brand: 'Honda',
      model: 'PCX 160',
      specs: 'Forged Torque Drive Assembly • 2-Pin Slots',
      desc: 'Performance forged torque drive assembly precision engineered for Honda PCX 160.',
      image: '/images/products/torque-drive.png',
      brochureImage: '/images/brochures/Torque Drive.jpg',
      priceNum: 7500,
      price: '₱7,500',
      fitment: ['Honda PCX 160'],
      fitmentSummary: 'Honda PCX 160',
      specHighlights: [
        {
          title: 'Forged Torque Drive Assemblies',
          desc: 'High-durability forged construction.'
        },
        {
          title: '2 Pins Slot Racing and Touring',
          desc: 'Selectable racing and touring pin channels.'
        },
        {
          title: 'Long Duration Torque Drive',
          desc: 'Precision balanced for vibration-free high RPM runs.'
        },
        {
          title: 'CNC-Machined Forged Aluminum',
          desc: 'Delivers immediate response without belt slippage.'
        }
      ],
      features: ['Dual-Angle Shift Guide Slots', 'Precision Balanced Sheave', 'Smooth Downshift Recovery', 'Direct Bolt-On Fitment'],
    },
    {
      id: 23,
      partNumber: 'R1-TD-Y-CLICK125',
      name: 'R1 Torque Drive (CLICK 125)',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      brand: 'Yamaha',
      model: 'CLICK 125',
      specs: 'Forged Torque Drive Assembly • 2-Pin Slots',
      desc: 'Performance forged torque drive assembly engineered for CLICK 125 platform.',
      image: '/images/products/torque-drive.png',
      brochureImage: '/images/brochures/Torque Drive.jpg',
      priceNum: 7000,
      price: '₱7,000',
      fitment: ['Click 125'],
      fitmentSummary: 'CLICK 125',
      specHighlights: [
        {
          title: 'Forged Torque Drive Assemblies',
          desc: 'Forged sheave prevents flexing under heavy throttle.'
        },
        {
          title: '2 Pins Slot Racing and Touring',
          desc: 'Tune between aggressive ramp engagement and linear touring.'
        },
        {
          title: 'Long Duration Torque Drive',
          desc: 'High thermal heat dissipation under continuous use.'
        },
        {
          title: 'Upgraded Lightweight Forged Aluminum',
          desc: 'Smooth belt movement from low speed to top end.'
        }
      ],
      features: ['Optimized Cam Angle Channels', 'High Heat Resistance', 'Eliminates Shift Stutter', 'Direct Bolt-On Fitment'],
    },
    {
      id: 24,
      partNumber: 'R1-TD-Y-NMAX155',
      name: 'R1 Torque Drive (NMAX 155)',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      brand: 'Yamaha',
      model: 'NMAX 155',
      specs: 'Forged Torque Drive Assembly • 2-Pin Slots',
      desc: 'Performance forged torque drive assembly precision engineered for Yamaha NMAX 155.',
      image: '/images/products/torque-drive.png',
      brochureImage: '/images/brochures/Torque Drive.jpg',
      priceNum: 7500,
      price: '₱7,500',
      fitment: ['Yamaha NMAX 155'],
      fitmentSummary: 'Yamaha NMAX 155',
      specHighlights: [
        {
          title: 'Forged Torque Drive Assemblies',
          desc: 'Engineered specifically for Yamaha NMAX 155 4-valve VVA power curves.'
        },
        {
          title: '2 Pins Slot Racing and Touring',
          desc: 'Racing angle holds higher RPM on corner exit; Touring angle maintains high-speed cruising efficiency.'
        },
        {
          title: 'Long Duration Torque Drive',
          desc: 'Withstands extreme friction without pin channel wear.'
        },
        {
          title: 'Lightweight CNC Forged Aluminum',
          desc: 'Reduces rotational inertia for explosive throttle response.'
        }
      ],
      features: ['Dual-Angle Shift Guide Slots', 'Hardened Alloy Bushing', 'Zero Belt Slip Under Acceleration', 'Direct Bolt-On Fitment'],
    },
  ];

  // Filtering Logic
  const filtered = allProducts.filter((p) => {
    // Brand match
    let matchBrand = true;
    if (selectedBrand !== 'all') {
      const b = p.brand.toLowerCase();
      if (selectedBrand === 'yamaha') {
        matchBrand = b === 'yamaha' || b === 'all';
      } else if (selectedBrand === 'honda') {
        matchBrand = b === 'honda' || b === 'all';
      }
    }

    // Model match
    let matchModel = true;
    if (selectedModel !== 'all') {
      const m = p.model.toLowerCase();
      if (selectedModel === 'nmax-aerox') {
        matchModel = m.includes('nmax') || m.includes('aerox') || m === 'all model' || m === 'all';
      } else if (selectedModel === 'click') {
        matchModel = m.includes('click') || m === 'all model' || m === 'all';
      } else if (selectedModel === 'pcx-adv') {
        matchModel = m.includes('pcx') || m.includes('adv') || m === 'all model' || m === 'all';
      } else if (selectedModel === 'm3-sporty') {
        matchModel = m.includes('m3') || m.includes('sporty') || m === 'all model' || m === 'all';
      }
    }

    // Category / System match
    const matchCat = selectedCategory === 'all' || p.category === selectedCategory;

    // Search query match
    const fullText = (p.name + ' ' + p.desc + ' ' + p.specs + ' ' + p.partNumber + ' ' + p.brand + ' ' + p.model + ' ' + p.fitment.join(' ')).toLowerCase();
    const matchQuery = searchQuery === '' || fullText.includes(searchQuery.toLowerCase());

    return matchBrand && matchModel && matchCat && matchQuery;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.priceNum - b.priceNum;
    if (sortBy === 'price-high') return b.priceNum - a.priceNum;
    return a.id - b.id; // default
  });

  const handleResetFilters = () => {
    setSelectedBrand('all');
    setSelectedModel('all');
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  const handleAddToCart = (product, e) => {
    if (e) e.stopPropagation();
    setAddedItem(product.id);
    setTimeout(() => {
      setAddedItem(null);
    }, 2000);
  };

  const handleBuyNow = (product, e) => {
    if (e) e.stopPropagation();
    alert(`Proceeding to checkout for ${product.name} (${product.price})`);
  };

  const openProductDetails = (product) => {
    setQuickViewProduct(product);
    setModalTab('specs');
  };

  const hasActiveFilters = selectedBrand !== 'all' || selectedModel !== 'all' || selectedCategory !== 'all' || searchQuery !== '';

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 pb-24">
      
      {/* =========================================================================
          HERO BANNER: Clean, Simple & Straightforward
          ========================================================================= */}
      <section className="relative border-b border-white/[0.08] overflow-hidden pt-8 pb-10 sm:pt-12 sm:pb-14 bg-gradient-to-b from-[#0d0d12] via-[#09090d] to-[#070709]">
        <div className="absolute inset-0 tech-grid opacity-25 pointer-events-none"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight uppercase">
              Products Catalog
            </h1>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Browse our complete lineup of motorcycle performance parts, transmission components, and maintenance essentials.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FILTER & CONTROL BAR (Sticky Toolbar)
          ========================================================================= */}
      <div className="sticky top-20 z-40 bg-[#070709]/95 backdrop-blur-xl border-b border-white/[0.08] py-4 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
            
            {/* Search Input */}
            <div className="lg:col-span-4 relative">
              <Search size={15} className="absolute left-3.5 top-3 text-neutral-500" />
              <input
                type="text"
                placeholder="Search part, model (e.g. Nmax, Pulley, Adv)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#111116] border border-white/10 rounded-xl focus:outline-none focus:border-rose-500 text-white placeholder-neutral-500 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-neutral-500 hover:text-white"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Brand Dropdown */}
            <div className="lg:col-span-2">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#111116] border border-white/10 rounded-xl text-xs font-semibold text-white focus:outline-none focus:border-rose-500 cursor-pointer"
              >
                <option value="all">Brand: All Makes</option>
                <option value="yamaha">Yamaha</option>
                <option value="honda">Honda</option>
              </select>
            </div>

            {/* Model Dropdown */}
            <div className="lg:col-span-2">
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#111116] border border-white/10 rounded-xl text-xs font-semibold text-white focus:outline-none focus:border-rose-500 cursor-pointer"
              >
                <option value="all">Model: All Models</option>
                <option value="nmax-aerox">NMAX / Aerox 155</option>
                <option value="click">Click 125 / Beat</option>
                <option value="pcx-adv">PCX / ADV 150 / 160</option>
                <option value="m3-sporty">M3 / Sporty</option>
              </select>
            </div>

            {/* Category Dropdown */}
            <div className="lg:col-span-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#111116] border border-white/10 rounded-xl text-xs font-semibold text-white focus:outline-none focus:border-rose-500 cursor-pointer"
              >
                <option value="all">Category: All Systems</option>
                <option value="cvt-transmission">CVT Transmission</option>
                <option value="cvt-tuning">CVT Tuning & Rollers</option>
                <option value="braking">Brake Pads</option>
                <option value="maintenance">Maintenance & Oils</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="lg:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#111116] border border-white/10 rounded-xl text-xs font-semibold text-neutral-300 focus:outline-none focus:border-rose-500 cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

          </div>

          {/* Results Counter */}
          <div className="flex items-center justify-between text-xs text-neutral-400 pt-1">
            <div className="flex items-center space-x-2">
              <span>Showing <strong className="text-white font-semibold">{filtered.length}</strong> of {allProducts.length} items</span>
              {hasActiveFilters && (
                <span className="px-2 py-0.5 rounded-full bg-rose-600/20 text-rose-400 text-[10px] font-bold">
                  Filters Active
                </span>
              )}
            </div>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="flex items-center space-x-1 text-xs text-rose-500 hover:text-rose-400 transition"
              >
                <RotateCcw size={12} />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>

        </div>
      </div>

      {/* =========================================================================
          PRODUCT GRID SHOWCASE
          ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-[#0d0d12] rounded-3xl border border-white/[0.08] p-8 max-w-xl mx-auto">
            <Bike size={44} className="mx-auto text-neutral-600 mb-4" />
            <h3 className="font-heading font-bold text-lg text-white mb-2">No Parts Found</h3>
            <p className="text-xs text-neutral-400 mb-6">
              We couldn't find any components matching your search or filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider rounded-full transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-7">
            {filtered.map((product) => (
              <div
                key={product.id}
                onClick={() => openProductDetails(product)}
                className="group rounded-3xl bg-[#0c0c12] border border-white/[0.08] hover:border-rose-500/50 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(225,29,72,0.15)] cursor-pointer overflow-hidden"
              >
                
                {/* Product Card Top: Stage */}
                <div>
                  <div className="relative h-60 w-full stage-pedestal rounded-t-2xl p-6 flex items-center justify-center overflow-hidden border-b border-white/[0.05]">
                    
                    {/* Subtle Circular Backlight */}
                    <div className="absolute inset-0 stage-glow pointer-events-none"></div>

                    {/* Brand & Model Pill */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-black/60 border border-white/10 text-neutral-300">
                        {product.brand} • {product.model}
                      </span>
                    </div>

                    {/* Transparent Product PNG on Studio Pedestal */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-48 max-w-full object-contain product-shadow transition-transform duration-500 group-hover:scale-108 z-10"
                      loading="lazy"
                    />

                    {/* Hover Quick View Trigger Overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-20">
                      <span className="px-4 py-2 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye size={13} />
                        <span>View Details</span>
                      </span>
                    </div>
                  </div>

                  {/* Product Metadata */}
                  <div className="p-5 space-y-2.5">
                    
                    {/* Part SKU & Category Header */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                      <span className="uppercase tracking-wider text-rose-400 font-semibold">{product.categoryLabel}</span>
                      <span>{product.partNumber}</span>
                    </div>

                    {/* Product Title */}
                    <h3 className="font-heading font-bold text-sm text-white group-hover:text-rose-400 transition-colors line-clamp-1">
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                      {product.desc}
                    </p>

                    {/* Specifications Pill */}
                    <div className="px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] text-neutral-300 font-medium space-y-0.5">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 tracking-wider block">Spec</span>
                      <span className="text-white font-semibold">{product.specs}</span>
                    </div>

                    {/* Fitment Tag */}
                    <div className="flex items-center space-x-1.5 text-[11px] text-neutral-400 pt-0.5">
                      <Bike size={13} className="text-rose-500 flex-shrink-0" />
                      <span className="truncate">{product.fitmentSummary}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price & Direct Buy / Add Actions */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2">
                    <div className="text-xl font-extrabold text-white tracking-tight">
                      {product.price}
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => handleAddToCart(product, e)}
                        title="Add to Cart"
                        className={`p-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center ${
                          addedItem === product.id
                            ? 'bg-emerald-600 text-white'
                            : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                        }`}
                      >
                        {addedItem === product.id ? <Check size={14} /> : <ShoppingBag size={14} />}
                      </button>

                      <button
                        onClick={(e) => handleBuyNow(product, e)}
                        className="py-2 px-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex items-center space-x-1.5 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white shadow-rose-600/25"
                      >
                        <CreditCard size={13} />
                        <span>Buy Now</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </main>

      {/* =========================================================================
          PRODUCT DETAILS MODAL: OFFICIAL R1 BROCHURE MAGAZINE SYSTEM
          ========================================================================= */}
      {/* =========================================================================
          PRODUCT DETAILS MODAL: COMMERCIALIZED R1 BROCHURE SPECIFICATION SYSTEM
          ========================================================================= */}
      {quickViewProduct && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto animate-fadeIn"
          onClick={() => setQuickViewProduct(null)}
        >
          <div 
            className="max-w-5xl w-full my-auto rounded-[2rem] bg-[#08080c] border border-white/15 shadow-[0_25px_90px_rgba(225,29,72,0.18)] overflow-hidden relative flex flex-col max-h-[92vh] transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Commercial Header Banner */}
            <div className="relative px-6 py-3.5 bg-gradient-to-r from-[#0d0d14] via-[#161219] to-[#0d0d14] border-b border-rose-500/20 flex items-center justify-between flex-shrink-0 z-20">
              {/* Subtle crimson accent line on top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-600 to-transparent"></div>
              
              <div className="flex items-center space-x-3.5">
                <div className="p-1.5 rounded-xl bg-black/50 border border-white/10 shadow-inner">
                  <img 
                    src="/images/r1-logo-icon.png" 
                    alt="R1" 
                    className="h-7 w-auto object-contain drop-shadow-[0_0_12px_rgba(225,29,72,0.6)]" 
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[9px] font-mono font-black text-rose-500 tracking-[0.25em] uppercase px-1.5 py-0.5 rounded bg-rose-500/10 border border-rose-500/20">
                      R1 OFFICIAL SPECIFICATION
                    </span>
                    <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest hidden sm:inline">
                      GENUINE PERFORMANCE
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-heading font-black text-white uppercase tracking-wider flex items-center space-x-2 mt-0.5">
                    <span>{quickViewProduct.name}</span>
                    <span className="text-neutral-500 font-normal">•</span>
                    <span className="text-neutral-400 font-mono text-xs">{quickViewProduct.partNumber}</span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setQuickViewProduct(null)}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-rose-600 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-rose-500 hover:rotate-90 hover:scale-105"
                title="Close Window"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body: Commercial Brochure Spread */}
            <div className="overflow-y-auto p-5 sm:p-7 lg:p-8 space-y-7 flex-1 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#110e16] via-[#09090d] to-[#060608]">
              
              {/* PAGE SPREAD TOP: COMMERCIAL HERO STAGE (Like the glossy front cover of the R1 Brochure) */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#160c12] via-[#100c14] to-[#0a0a10] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                {/* Motorsport checkered & crimson lighting atmosphere */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/15 rounded-full blur-[110px] pointer-events-none"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-950/25 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40"></div>

                {/* Left/Center: Commercial Product Hero Studio with Glowing Pod */}
                <div className="relative w-full md:w-1/2 flex items-center justify-center min-h-[240px] sm:min-h-[280px]">
                  {/* Floating podium light rings */}
                  <div className="absolute w-64 h-64 rounded-full bg-rose-600/20 blur-[60px] animate-pulse"></div>
                  <div className="absolute w-56 h-56 rounded-full border border-rose-500/20 scale-110 pointer-events-none"></div>
                  <div className="absolute bottom-4 w-48 h-10 bg-black/80 rounded-full blur-xl pointer-events-none"></div>

                  <img
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    className="max-h-64 sm:max-h-72 max-w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] z-10 transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Right: Commercial Brochure Headline, Key Specs & Price */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-4 z-10">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <span className="px-3 py-1 rounded-full bg-rose-600 text-white font-mono text-[10px] uppercase font-black tracking-widest shadow-md shadow-rose-600/30">
                      {quickViewProduct.categoryLabel}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-neutral-300 font-mono text-[10px] uppercase font-bold tracking-wider">
                      {quickViewProduct.brand} • {quickViewProduct.model}
                    </span>
                  </div>

                  <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase tracking-tight leading-none drop-shadow-md">
                    {quickViewProduct.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {quickViewProduct.desc}
                  </p>

                  {/* Quick Highlight Feature Pills */}
                  {quickViewProduct.features && (
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {quickViewProduct.features.slice(0, 4).map((f, i) => (
                        <div key={i} className="flex items-center space-x-2 text-[11px] text-neutral-300 bg-white/[0.04] border border-white/[0.08] px-2.5 py-1.5 rounded-lg">
                          <Check size={12} className="text-rose-500 flex-shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Price Banner */}
                  <div className="pt-2 flex items-baseline justify-center md:justify-start space-x-3 border-t border-white/10">
                    <span className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
                      {quickViewProduct.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* BROCHURE BOTTOM SECTION: 4-COLUMN CIRCULAR MACRO BREAKDOWN (Brochure Zoom Insets) */}
              <div className="space-y-4">
                
                {/* Section Header with Red Racing Stripe */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center space-x-3">
                    <span className="h-5 w-1.5 bg-gradient-to-b from-rose-500 to-red-600 rounded-full shadow-[0_0_8px_rgba(225,29,72,0.8)]"></span>
                    <h3 className="font-heading font-black text-sm sm:text-base uppercase tracking-wider text-white">
                      Component Engineering Zoom Breakdown
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest hidden sm:inline">
                    Authentic R1 Product Views
                  </span>
                </div>

                {/* 4-Item Feature Columns with Circular Inset Highlights */}
                {quickViewProduct.specHighlights && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    {quickViewProduct.specHighlights.map((spec, i) => (
                      <div 
                        key={i} 
                        className="relative rounded-2xl bg-[#0f0f16] border border-white/[0.08] hover:border-rose-500/50 p-5 flex flex-col items-center text-center transition-all duration-300 group hover:-translate-y-1 shadow-xl hover:shadow-rose-950/20 overflow-hidden"
                      >
                        {/* Subtle top indicator glow on hover */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-600/0 group-hover:via-rose-600 transition-all duration-300"></div>

                        {/* Circular Macro Focus Frame (Metallic Outer Ring + Pure Product Close-up) */}
                        <div className="w-28 h-28 rounded-full bg-black border-2 border-white/80 group-hover:border-rose-500 transition-all duration-300 p-1 flex items-center justify-center overflow-hidden mb-4 shadow-[0_10px_30px_rgba(0,0,0,0.9)] relative ring-2 ring-black/60 group-hover:scale-105">
                          <img
                            src={getMacroZoomImage(quickViewProduct, i)}
                            alt={spec.title}
                            className="w-full h-full object-cover rounded-full filter contrast-110 brightness-105 group-hover:scale-115 transition-transform duration-500"
                          />
                          {/* Glossy sheen reflection on the macro circle lens */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-transparent to-black/30 pointer-events-none"></div>
                        </div>

                        {/* Red Capsule Title Ribbon (matches RED BANNER in official brochure) */}
                        <div className="w-full py-1.5 px-3 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white font-heading font-black text-[11px] sm:text-xs uppercase tracking-wider rounded-md mb-2.5 shadow-md shadow-rose-950/50 border-t border-rose-400/30">
                          {spec.title}
                        </div>

                        {/* Accurate technical explanation */}
                        <p className="text-[11px] text-neutral-300 leading-relaxed font-normal mt-1">
                          {spec.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

              </div>

              {/* GUARANTEED VEHICLE FITMENT TAGS */}
              <div className="rounded-2xl bg-[#0f0f16] border border-white/[0.08] p-5 space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs font-mono text-neutral-300 uppercase tracking-widest font-bold">
                    <Bike size={15} className="text-rose-500" />
                    <span>Guaranteed Bolt-On Fitment Compatibility</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Plug & Play Direct
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.fitment.map((bike, i) => (
                    <span 
                      key={i} 
                      className="px-3.5 py-1.5 rounded-lg bg-[#151522] border border-white/10 text-xs font-semibold text-neutral-200 flex items-center space-x-2 hover:border-rose-500/40 transition"
                    >
                      <CheckCircle2 size={13} className="text-rose-500 flex-shrink-0" />
                      <span>{bike}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Bottom Commercial Buy & Add to Cart Action Footer */}
            <div className="px-6 sm:px-8 py-4 bg-[#0d0d14] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0 z-20">
              <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-start">
                <div className="text-left">
                  <span className="text-[10px] text-neutral-400 uppercase tracking-wider block font-medium">Standard Retail Price</span>
                  <span className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">{quickViewProduct.price}</span>
                </div>
                <div className="hidden sm:block h-8 w-[1px] bg-white/10"></div>
                <div className="hidden sm:flex flex-col text-left text-[11px] text-neutral-400 font-mono">
                  <span className="text-emerald-400 font-bold flex items-center space-x-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Ready in Stock</span>
                  </span>
                  <span>Nationwide Shipping</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                <button
                  onClick={(e) => handleAddToCart(quickViewProduct, e)}
                  className={`flex-1 sm:flex-none px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 ${
                    addedItem === quickViewProduct.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/15 active:scale-95'
                  }`}
                >
                  {addedItem === quickViewProduct.id ? (
                    <>
                      <Check size={15} />
                      <span>Added to Cart</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={15} />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>

                <button
                  onClick={(e) => handleBuyNow(quickViewProduct, e)}
                  className="flex-1 sm:flex-none px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xl flex items-center justify-center space-x-2 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white shadow-rose-600/35 active:scale-95 border-t border-rose-400/30"
                >
                  <CreditCard size={15} />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
