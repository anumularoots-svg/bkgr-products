import React, { useState, useEffect } from 'react';

// ===========================================
// 📸 PRODUCT IMAGES CONFIGURATION
// ===========================================

const LOGO_URL = 'https://i.ibb.co/ymtC805y/logo.jpg';

const PRODUCT_IMAGES = {
  rice: {
    category: 'https://i.ibb.co/wFRGvPvQ/rice-bag.png',
    brown: 'https://i.ibb.co/zDm822J/brow.png',
    semi: 'https://i.ibb.co/JWx6g5fD/smibr.png',
    full: 'https://i.ibb.co/RpW7Z8FZ/fullw.png',
  },
  urad: {
    category: 'https://i.ibb.co/qLhm6r9x/urad-bag.png',
    split: 'https://i.ibb.co/jNtB0qz/Urad-Dal-Split.png',
    whole: 'https://i.ibb.co/qLhm6r9x/urad-bag.png',
  },
  pickles: {
    category: 'https://i.ibb.co/yn6LYRDX/chicken.png',
    mango: 'https://i.ibb.co/BVx09zvb/mango.png',
    lemon: 'https://i.ibb.co/8nkpcBC2/lemon.png',
    gongura: 'https://i.ibb.co/yFG8wSz1/gongura.png',
    tomato: 'https://i.ibb.co/tTQGtVP3/tomato.png',
    brinjal: 'https://i.ibb.co/99XFpDSC/Brinjal.png',
    redchilli: 'https://i.ibb.co/RpFkNTJ3/redchilli.png',
    drumstick: 'https://i.ibb.co/HLDbsG3N/drumstick.png',
    chicken: 'https://i.ibb.co/yn6LYRDX/chicken.png',
    mutton: 'https://i.ibb.co/LXpxxrVS/mutton.png',
    fish: 'https://i.ibb.co/pjm8MhfB/prawn.png',
    prawn: 'https://i.ibb.co/pjm8MhfB/prawn.png',
  },
  karam: {
    category: 'https://i.ibb.co/0p3gT5ZF/all-mix.png',
    vepudu: 'https://i.ibb.co/0RRS4sf7/vepudu.png',
    pappula: 'https://i.ibb.co/rKdW0zXz/pappula.png',
    nuvvula: 'https://i.ibb.co/5XWt8my5/nvula.png',
    kobbari: 'https://i.ibb.co/SHTHJg2/kobbari.png',
    karivepaku: 'https://i.ibb.co/Vp9nny5h/karivepaku.png',
    munagaku: 'https://i.ibb.co/hJQrdwsv/mungaku.png',
    gongura: 'https://i.ibb.co/LhzXN19X/gongura-podi.png',
  },
};

// ===========================================
// 📦 HYDERABAD MARKET BASED PRICING - REALISTIC COST CALCULATION
// ===========================================
// 
// 🐔 CHICKEN PICKLE (1kg) - Market Rate: ₹260/kg
// ├── Chicken 1.3kg (bone removal, wastage) × ₹260 = ₹338
// ├── Gingelly Oil 250ml (₹400/L) = ₹100
// ├── Spices (mirchi, fenugreek, mustard) = ₹80
// ├── Gas (1.5 hours cooking) = ₹30
// ├── Glass Bottle + Lid = ₹40
// └── Labor = ₹50
// TOTAL COST = ₹638 → OUR PRICE = ₹780 (22% margin)
// MARKET PRICE = ₹950
//
// 🐐 MUTTON PICKLE (1kg) - Market Rate: ₹900/kg  
// ├── Mutton 1.2kg (bones, wastage) × ₹900 = ₹1080
// ├── Gingelly Oil 250ml = ₹100
// ├── Spices = ₹80
// ├── Gas (2+ hours slow cooking) = ₹40
// ├── Glass Bottle + Lid = ₹40
// └── Labor = ₹60
// TOTAL COST = ₹1400 → OUR PRICE = ₹1700 (21% margin)
// MARKET PRICE = ₹2100
//
// 🐟 FISH PICKLE (1kg) - Market Rate: ₹180/kg
// ├── Fish 1.5kg (head, bones, scales removal) × ₹180 = ₹270
// ├── Gingelly Oil 250ml = ₹100
// ├── Spices + Tamarind = ₹70
// ├── Gas = ₹25
// ├── Glass Bottle + Lid = ₹40
// └── Labor = ₹40
// TOTAL COST = ₹545 → OUR PRICE = ₹680 (25% margin)
// MARKET PRICE = ₹850
//
// 🦐 PRAWN PICKLE (1kg) - Market Rate: ₹500/kg
// ├── Prawns 1.4kg (shell, head removal) × ₹500 = ₹700
// ├── Gingelly Oil 250ml = ₹100
// ├── Spices = ₹70
// ├── Gas = ₹30
// ├── Glass Bottle + Lid = ₹40
// └── Labor = ₹50
// TOTAL COST = ₹990 → OUR PRICE = ₹1200 (21% margin)
// MARKET PRICE = ₹1500
//
// Note: Pure homemade quality with no compromise on ingredients!

const productsData = {
  rice: {
    title: "Premium BPT Sannalu Rice",
    subtitle: "Hand-harvested from our village paddy fields",
    description: "Experience authentic village-grown rice, hand-milled to perfection",
    image: PRODUCT_IMAGES.rice.category,
    items: [
      {
        id: 'rice-brown',
        name: 'Brown Rice',
        description: 'Unpolished whole grain rice with natural bran layer intact. Rich in fiber, vitamins & minerals. Handpicked from our organic fields for your healthy lifestyle.',
        tag: 'HEALTHY',
        tagColor: '#059669',
        image: PRODUCT_IMAGES.rice.brown,
        // Brown rice - least processing = lowest price (₹58/kg)
        variants: [
          { size: '5 KG', ourPrice: 290, marketPrice: 350 },
          { size: '25 KG', ourPrice: 1450, marketPrice: 1750 },
          { size: '50 KG', ourPrice: 2900, marketPrice: 3500 },
        ]
      },
      {
        id: 'rice-semi',
        name: 'Semi Polished Rice',
        description: 'Perfectly balanced rice that retains natural bran for nutrition with softer texture. Traditional stone-ground process preserves authentic taste and aroma.',
        tag: 'BESTSELLER',
        tagColor: '#D97706',
        image: PRODUCT_IMAGES.rice.semi,
        // Semi polish - medium processing (₹62/kg)
        variants: [
          { size: '5 KG', ourPrice: 310, marketPrice: 375 },
          { size: '25 KG', ourPrice: 1550, marketPrice: 1875 },
          { size: '50 KG', ourPrice: 3100, marketPrice: 3750 },
        ]
      },
      {
        id: 'rice-full',
        name: 'Full Polished Rice',
        description: 'Premium quality pure white rice, completely polished for perfect texture. Ideal for biryanis, pulao & special occasions. Long grain, non-sticky finish.',
        tag: 'PREMIUM',
        tagColor: '#7C3AED',
        image: PRODUCT_IMAGES.rice.full,
        // Full polish - most processing = highest price (₹68/kg)
        variants: [
          { size: '5 KG', ourPrice: 340, marketPrice: 410 },
          { size: '25 KG', ourPrice: 1700, marketPrice: 2050 },
          { size: '50 KG', ourPrice: 3400, marketPrice: 4100 },
        ]
      }
    ]
  },
  urad: {
    title: "Fresh Urad Dal",
    subtitle: "Freshly harvested for perfect idli & dosa",
    description: "Premium quality urad dal for soft idlis and crispy dosas",
    image: PRODUCT_IMAGES.urad.category,
    items: [
      {
        id: 'urad-round',
        name: 'Urad Round',
        description: 'Whole black urad dal with skin intact. Perfect for crispy medu vadas and dal makhani. High protein content, naturally grown without chemicals.',
        tag: 'FOR VADA',
        tagColor: '#78716C',
        image: PRODUCT_IMAGES.urad.whole,
        // Whole dal - less processing = lower price (₹125/kg)
        variants: [
          { size: '1 KG', ourPrice: 145, marketPrice: 185 },
          { size: '2 KG', ourPrice: 285, marketPrice: 355 },
          { size: '5 KG', ourPrice: 700, marketPrice: 880 },
        ]
      },
      {
        id: 'urad-split',
        name: 'Urad Dal Split',
        description: 'Premium quality split urad dal, hand-sorted for uniform size. Makes the softest idlis and crispiest dosas. Stone-ground fresh for authentic South Indian taste.',
        tag: 'IDLI & DOSA',
        tagColor: '#2563EB',
        image: PRODUCT_IMAGES.urad.split,
        // Split dal - more processing = higher price (₹145/kg)
        variants: [
          { size: '1 KG', ourPrice: 125, marketPrice: 155 },
          { size: '2 KG', ourPrice: 245, marketPrice: 305 },
          { size: '5 KG', ourPrice: 600, marketPrice: 750 },
        ]
      }
    ]
  },
  pickles: {
    title: "Homemade Pickles",
    subtitle: "Authentic recipes from grandmother's kitchen",
    description: "Traditional homemade pickles made with pure ingredients",
    image: PRODUCT_IMAGES.pickles.category,
    subcategories: [
      {
        name: "Mango Pickles",
        icon: "🥭",
        items: [
          { 
            id: 'pickle-avakaya', 
            name: 'Avakaya', 
            description: 'Traditional raw mango pickle made with hand-pounded spices, cold-pressed mustard oil & rock salt. Aged to perfection for authentic tangy-spicy taste. 100% homemade with pure quality ingredients.', 
            tag: 'SIGNATURE', 
            tagColor: '#DC2626', 
            image: PRODUCT_IMAGES.pickles.mango 
          },
          { 
            id: 'pickle-magaya', 
            name: 'Magaya', 
            description: 'Sweet and tangy tender mango pickle prepared with jaggery, tamarind & aromatic spices. A delightful blend of traditional flavors, handcrafted in small batches for premium quality.', 
            tag: 'SWEET & TANGY', 
            tagColor: '#F59E0B', 
            image: PRODUCT_IMAGES.pickles.mango 
          },
        ]
      },
      {
        name: "Vegetable Pickles",
        icon: "🥬",
        items: [
          { 
            id: 'pickle-lemon', 
            name: 'Lemon Pickle', 
            description: 'Fresh lemons marinated in aromatic spices & cold-pressed oil. Sun-dried for 15 days to develop rich tangy flavor. Natural immunity booster with Vitamin C. Pure homemade quality.', 
            tag: 'CLASSIC', 
            tagColor: '#FBBF24', 
            image: PRODUCT_IMAGES.pickles.lemon 
          },
          { 
            id: 'pickle-tomato', 
            name: 'Tomato Pickle', 
            description: 'Ripe tomatoes cooked with garlic, red chilies & traditional spices. Sweet, tangy & mildly spicy. Made fresh without preservatives, perfect for all ages. Homemade with love.', 
            tag: 'TANGY', 
            tagColor: '#EF4444', 
            image: PRODUCT_IMAGES.pickles.tomato 
          },
          { 
            id: 'pickle-gongura', 
            name: 'Gongura Pickle', 
            description: 'Authentic gongura (sorrel leaves) pickle with garlic & green chilies. Distinctive sour taste, rich in iron & vitamins. A true regional delicacy, 100% pure & homemade.', 
            tag: 'REGIONAL SPECIAL', 
            tagColor: '#10B981', 
            image: PRODUCT_IMAGES.pickles.gongura 
          },
          { 
            id: 'pickle-brinjal', 
            name: 'Brinjal Pickle', 
            description: 'Tender brinjals roasted over wood fire, mixed with aromatic spices & sesame. Smoky flavor with homemade masala. A village-style recipe passed down generations.', 
            tag: 'SMOKY', 
            tagColor: '#8B5CF6', 
            image: PRODUCT_IMAGES.pickles.brinjal 
          },
          { 
            id: 'pickle-redchilli', 
            name: 'Red Chilli Pickle', 
            description: 'Large red chilies stuffed with aromatic spice mix & preserved in mustard oil. Bold, fiery taste for spice lovers. Handmade with premium Guntur chilies, pure quality guaranteed.', 
            tag: 'EXTRA SPICY', 
            tagColor: '#B91C1C', 
            image: PRODUCT_IMAGES.pickles.redchilli 
          },
          { 
            id: 'pickle-drumstick', 
            name: 'Drumstick Pickle', 
            description: 'Fresh tender drumsticks marinated in tangy tamarind masala. Rich in calcium & nutrients. Traditional village recipe with no artificial ingredients. Pure homemade goodness.', 
            tag: 'NUTRITIOUS', 
            tagColor: '#65A30D', 
            image: PRODUCT_IMAGES.pickles.drumstick 
          },
        ]
      },
      {
        name: "Non-Veg Pickles",
        icon: "🍗",
        items: [
          { 
            id: 'pickle-chicken', 
            name: 'Chicken Pickle', 
            description: 'Tender boneless chicken pieces cooked in aromatic spices & preserved in pure gingelly oil. Made with fresh farm chicken, slow-cooked for rich flavor. 100% homemade quality.', 
            tag: 'BESTSELLER', 
            tagColor: '#EC4899', 
            image: PRODUCT_IMAGES.pickles.chicken,
            // CHICKEN: Market ₹260/kg
            // 1.3kg chicken (wastage)=₹338 + Gingelly Oil ₹100 + Spices ₹80 + Gas ₹30 + Bottle ₹40 + Labor ₹50 = ₹638 cost
            // Selling: ₹780/kg (22% margin) - Pure homemade quality
            variants: [
              { size: '250 G', ourPrice: 220, marketPrice: 280 },
              { size: '500 G', ourPrice: 420, marketPrice: 520 },
              { size: '1 KG', ourPrice: 780, marketPrice: 950 },
            ]
          },
          { 
            id: 'pickle-mutton', 
            name: 'Mutton Pickle', 
            description: 'Premium goat meat pickle prepared with traditional spices. Tender pieces marinated for 48 hours, cooked to perfection in pure gingelly oil. Authentic homemade recipe.', 
            tag: 'PREMIUM', 
            tagColor: '#9333EA', 
            image: PRODUCT_IMAGES.pickles.mutton,
            // MUTTON: Market ₹900/kg
            // 1.2kg mutton (bones/wastage)=₹1080 + Gingelly Oil ₹100 + Spices ₹80 + Gas ₹40 + Bottle ₹40 + Labor ₹60 = ₹1400 cost
            // Selling: ₹1700/kg (21% margin) - Premium homemade quality
            variants: [
              { size: '250 G', ourPrice: 480, marketPrice: 580 },
              { size: '500 G', ourPrice: 900, marketPrice: 1100 },
              { size: '1 KG', ourPrice: 1700, marketPrice: 2100 },
            ]
          },
          { 
            id: 'pickle-fish', 
            name: 'Fish Pickle', 
            description: 'Fresh river fish marinated in tangy tamarind & spicy masala. Boneless pieces fried golden, preserved in aromatic gingelly oil. Coastal recipe, pure homemade quality.', 
            tag: 'SEAFOOD', 
            tagColor: '#0891B2', 
            image: PRODUCT_IMAGES.pickles.fish,
            // FISH: Market ₹180/kg
            // 1.5kg fish (head/bones/scales removal)=₹270 + Gingelly Oil ₹100 + Spices ₹70 + Gas ₹25 + Bottle ₹40 + Labor ₹40 = ₹545 cost
            // Selling: ₹680/kg (25% margin) - Pure homemade quality
            variants: [
              { size: '250 G', ourPrice: 200, marketPrice: 250 },
              { size: '500 G', ourPrice: 380, marketPrice: 460 },
              { size: '1 KG', ourPrice: 680, marketPrice: 850 },
            ]
          },
          { 
            id: 'pickle-prawn', 
            name: 'Prawn Pickle', 
            description: 'Fresh prawns cleaned & cooked with aromatic spices in traditional style. Crunchy texture with bold spicy flavor. Made with premium quality prawns, 100% homemade.', 
            tag: 'PREMIUM', 
            tagColor: '#EA580C', 
            image: PRODUCT_IMAGES.pickles.prawn,
            // PRAWN: Market ₹500/kg
            // 1.4kg prawns (shell/head removal)=₹700 + Gingelly Oil ₹100 + Spices ₹70 + Gas ₹30 + Bottle ₹40 + Labor ₹50 = ₹990 cost
            // Selling: ₹1200/kg (21% margin) - Premium homemade quality
            variants: [
              { size: '250 G', ourPrice: 350, marketPrice: 420 },
              { size: '500 G', ourPrice: 650, marketPrice: 780 },
              { size: '1 KG', ourPrice: 1200, marketPrice: 1500 },
            ]
          },
        ]
      }
    ],
    // VEG PICKLES: Mango/Vegetables + Oil + Spices = ~₹180 cost for 1kg
    // Selling: ₹280/kg (55% margin - vegetables are cheaper)
    defaultVariants: [
      { size: '250 G', ourPrice: 90, marketPrice: 115 },
      { size: '500 G', ourPrice: 160, marketPrice: 200 },
      { size: '1 KG', ourPrice: 280, marketPrice: 350 },
    ]
  },
  karam: {
    title: "Spice Powders",
    subtitle: "Freshly ground spice powders for flavorful meals",
    description: "Traditional spice powders made with premium ingredients",
    image: PRODUCT_IMAGES.karam.category,
    items: [
      { 
        id: 'karam-vepudu', 
        name: 'Vepudu Karam', 
        description: 'Spicy fry powder blend made with premium red chilies & aromatic spices. Perfect for rice, curries & stir-fries. Stone-ground fresh for authentic taste. 100% homemade & pure.', 
        tag: 'SPICY', 
        tagColor: '#DC2626', 
        image: PRODUCT_IMAGES.karam.vepudu 
      },
      { 
        id: 'karam-kandi', 
        name: 'Kandi Podi', 
        description: 'Aromatic toor dal powder roasted with red chilies & cumin. Classic spice powder for ghee rice & idli. Made with hand-picked dal, no additives. Pure homemade quality.', 
        tag: 'CLASSIC', 
        tagColor: '#F59E0B', 
        image: PRODUCT_IMAGES.karam.pappula 
      },
      { 
        id: 'karam-pappula', 
        name: 'Pappula Podi', 
        description: 'Mixed lentils spice powder with chana, urad & moong dal. Protein-rich, perfect for hot rice with ghee. Traditional recipe, roasted to perfection. Homemade with love.', 
        tag: 'HIGH PROTEIN', 
        tagColor: '#D97706', 
        image: PRODUCT_IMAGES.karam.pappula 
      },
      { 
        id: 'karam-nuvvula', 
        name: 'Nuvvula Karam', 
        description: 'Nutritious sesame seeds powder with red chilies & garlic. Rich in calcium & healthy fats. Perfect for idli, dosa & rice. Stone-ground fresh, 100% pure quality.', 
        tag: 'NUTRITIOUS', 
        tagColor: '#92400E', 
        image: PRODUCT_IMAGES.karam.nuvvula 
      },
      { 
        id: 'karam-kobbari', 
        name: 'Kobbari Karam', 
        description: 'Dry coconut chutney powder with aromatic spices. South Indian specialty, perfect for idli & dosa. Made with fresh copra, roasted golden brown. Pure homemade goodness.', 
        tag: 'SOUTH INDIAN', 
        tagColor: '#A16207', 
        image: PRODUCT_IMAGES.karam.kobbari 
      },
      { 
        id: 'karam-karivepaku', 
        name: 'Karivepaku Podi', 
        description: 'Fresh curry leaves powder rich in iron & antioxidants. Promotes hair growth & digestion. Sun-dried leaves ground with premium spices. 100% natural & homemade.', 
        tag: 'HEALTHY', 
        tagColor: '#059669', 
        image: PRODUCT_IMAGES.karam.karivepaku 
      },
      { 
        id: 'karam-munagaku', 
        name: 'Munagaku Podi', 
        description: 'Moringa leaves powder - a superfood rich in vitamins, minerals & protein. Boosts immunity & energy. Farm-fresh leaves, traditionally prepared. Pure homemade quality.', 
        tag: 'SUPERFOOD', 
        tagColor: '#16A34A', 
        image: PRODUCT_IMAGES.karam.munagaku 
      },
      { 
        id: 'karam-gongura', 
        name: 'Gongura Karam', 
        description: 'Tangy sorrel leaves powder with distinctive sour taste. Rich in iron & folic acid. Authentic traditional recipe, perfect for rice & snacks. 100% homemade with pure ingredients.', 
        tag: 'TANGY', 
        tagColor: '#65A30D', 
        image: PRODUCT_IMAGES.karam.gongura 
      },
    ],
    // Karam powders - dal/spices + grinding + labor
    variants: [
      { size: '100 G', ourPrice: 55, marketPrice: 70 },
      { size: '250 G', ourPrice: 130, marketPrice: 165 },
      { size: '500 G', ourPrice: 250, marketPrice: 320 },
    ]
  }
};

const deliveryAreas = [
  'Kukatpally', 'KPHB', 'Hitech City', 'Madhapur', 'Miyapur', 
  'Gachibowli', 'Kondapur', 'Moosapet', 'Chintal', 'Manikonda', 
  'Nizampet', 'Bachupally'
];

// ===========================================
// 🎨 PREMIUM COLOR THEME
// ===========================================
const theme = {
  primary: '#1B4332',
  primaryLight: '#2D6A4F',
  primaryDark: '#081C15',
  accent: '#D4A853',
  accentLight: '#E9C46A',
  success: '#40916C',
  background: '#FEFDFB',
  surface: '#FFFFFF',
  text: '#1A1A1A',
  textSecondary: '#5C5C5C',
  textMuted: '#8A8A8A',
  border: '#E8E4E0',
  cardShadow: '0 4px 20px rgba(27, 67, 50, 0.08)',
};

// Product Image Component
const ProductImage = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  
  if (error || !src) {
    return (
      <div className={`${className} bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center`}>
        <span className="text-4xl">📦</span>
      </div>
    );
  }
  
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`${className} object-contain`}
      onError={() => setError(true)}
    />
  );
};

// Logo Component
const Logo = ({ className }) => {
  const [error, setError] = useState(false);
  
  if (error || !LOGO_URL || LOGO_URL.includes('XXXXXXX')) {
    return (
      <div className={`${className} bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg`}>
        <span className="text-3xl">🌾</span>
      </div>
    );
  }
  
  return (
    <img 
      src={LOGO_URL} 
      alt="BKGR Logo" 
      className={`${className} object-cover rounded-2xl shadow-lg`}
      onError={() => setError(true)}
    />
  );
};

export default function BKGRApp() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => setCurrentScreen('home'), 2800);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const addToCart = (product, variant, category) => {
    const existingItem = cart.find(
      item => item.product.id === product.id && item.variant.size === variant.size
    );
    if (existingItem) {
      setCart(cart.map(item =>
        item.product.id === product.id && item.variant.size === variant.size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { product, variant, quantity: 1, category }]);
    }
  };

  const updateCartQuantity = (productId, size, delta) => {
    setCart(cart.map(item => {
      if (item.product.id === productId && item.variant.size === size) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const getCartTotal = () => cart.reduce((total, item) => total + (item.variant.ourPrice * item.quantity), 0);
  const getCartSavings = () => cart.reduce((total, item) => total + ((item.variant.marketPrice - item.variant.ourPrice) * item.quantity), 0);
  const getCartItemCount = () => cart.reduce((total, item) => total + item.quantity, 0);
  const getDiscount = (our, market) => Math.round(((market - our) / market) * 100);

  // Helper to get variants for pickles (non-veg have individual pricing)
  const getPickleVariants = (product) => {
    if (product.variants) {
      return product.variants;
    }
    return productsData.pickles.defaultVariants;
  };

  // ===========================================
  // 🌟 SPLASH SCREEN
  // ===========================================
  if (currentScreen === 'splash') {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans relative overflow-hidden" 
           style={{background: `linear-gradient(145deg, ${theme.primary} 0%, ${theme.primaryLight} 50%, ${theme.primary} 100%)`}}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 border-2 border-white/30 rounded-full"></div>
          <div className="absolute bottom-32 right-8 w-56 h-56 border border-white/20 rounded-full"></div>
          <div class="absolute top-1/3 right-1/4 w-28 h-28 border border-white/15 rounded-full"></div>
        </div>
        
        <div className="text-center text-white z-10 animate-fade-in px-8">
          <Logo className="w-32 h-32 mx-auto mb-8 border-4 border-white/20" />
          <h1 className="text-3xl font-bold tracking-wide mb-2" style={{fontFamily: 'Georgia, serif'}}>
            BIYAM KRISHNA GARI
          </h1>
          <p className="text-xl font-semibold mb-1" style={{color: theme.accent}}>PRODUCTS</p>
          <p className="text-sm opacity-80 mb-12 tracking-widest">Farm to Home • Pure Quality</p>
          
          <div className="w-64 h-1.5 bg-white/20 rounded-full mx-auto overflow-hidden">
            <div className="h-full w-1/3 rounded-full animate-loading" style={{background: `linear-gradient(90deg, ${theme.accent}, ${theme.accentLight})`}}></div>
          </div>
          
          <p className="text-xs mt-10 tracking-widest opacity-60">100% Homemade • No Preservatives • Pure Ingredients</p>
        </div>
      </div>
    );
  }

  // ===========================================
  // ✅ ORDER SUCCESS
  // ===========================================
  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 font-sans" style={{background: '#F8FAFC'}}>
        <div className="text-center max-w-sm">
          <div className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-8 text-white text-5xl shadow-2xl"
               style={{background: `linear-gradient(135deg, ${theme.success}, ${theme.primaryLight})`}}>
            ✓
          </div>
          <h2 className="text-2xl font-bold mb-3" style={{color: theme.text}}>Order Placed Successfully!</h2>
          <p className="mb-8" style={{color: theme.textSecondary}}>Your fresh products will be prepared and delivered soon.</p>
          
          <div className="rounded-2xl p-5 mb-6 border-2" style={{background: '#F0FDF4', borderColor: '#86EFAC'}}>
            <p className="font-bold text-lg" style={{color: theme.success}}>📅 Made Fresh For You</p>
            <p className="text-sm mt-1" style={{color: '#166534'}}>Manufacturing starts from your order date</p>
          </div>
          
          <button onClick={() => { setOrderPlaced(false); setShowCheckout(false); setCart([]); setSelectedCategory(null); }} 
                  className="w-full text-white py-4 rounded-2xl font-bold text-lg shadow-xl transition-all active:scale-98"
                  style={{background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`}}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  // ===========================================
  // 🛒 CHECKOUT
  // ===========================================
  if (showCheckout) {
    return (
      <div className="min-h-screen font-sans max-w-md mx-auto" style={{background: '#F8FAFC'}}>
        <div className="p-4 flex items-center gap-4 border-b sticky top-0 z-50" style={{background: theme.surface, borderColor: theme.border}}>
          <button onClick={() => setShowCheckout(false)} 
                  className="w-11 h-11 flex items-center justify-center rounded-xl text-xl"
                  style={{background: theme.background}}>←</button>
          <h1 className="text-lg font-bold flex-1" style={{color: theme.text}}>Checkout</h1>
        </div>
        
        <div className="p-4 pb-32">
          <div className="rounded-2xl p-5 shadow-lg mb-4" style={{background: theme.surface, boxShadow: theme.cardShadow}}>
            <h3 className="font-bold mb-4 flex items-center gap-2 text-lg" style={{color: theme.text}}>📦 Order Summary</h3>
            {cart.map((item, idx) => {
              const itemColors = {
                rice: '#FEF3C7', urad: '#E0E7FF', pickles: '#FCE7F3', karam: '#FFEDD5'
              };
              const bgColor = itemColors[item.category] || '#F8FAFC';
              return (
                <div key={idx} className="flex items-center gap-3 py-3 px-3 rounded-xl mb-2" style={{background: bgColor}}>
                  <ProductImage src={item.product.image} alt={item.product.name} className="w-14 h-14 rounded-xl" />
                  <div className="flex-1">
                    <p className="font-semibold" style={{color: theme.text}}>{item.product.name}</p>
                    <p className="text-sm" style={{color: theme.textSecondary}}>{item.variant.size} × {item.quantity}</p>
                  </div>
                  <p className="font-bold text-lg" style={{color: theme.success}}>₹{item.variant.ourPrice * item.quantity}</p>
                </div>
              );
            })}
            <div className="mt-4 pt-4 border-t space-y-2" style={{borderColor: theme.border}}>
              <div className="flex justify-between" style={{color: theme.textSecondary}}><span>Subtotal</span><span>₹{getCartTotal()}</span></div>
              <div className="flex justify-between font-semibold" style={{color: theme.success}}><span>You Save</span><span>₹{getCartSavings()}</span></div>
              <div className="flex justify-between" style={{color: theme.textSecondary}}><span>Delivery</span><span className="font-medium" style={{color: theme.success}}>FREE</span></div>
              <div className="flex justify-between text-xl font-bold pt-3 border-t" style={{color: theme.text, borderColor: theme.border}}><span>Total</span><span>₹{getCartTotal()}</span></div>
            </div>
          </div>

          <div className="rounded-2xl p-5 shadow-lg mb-4" style={{background: theme.surface, boxShadow: theme.cardShadow}}>
            <h3 className="font-bold mb-4 flex items-center gap-2 text-lg" style={{color: theme.text}}>📍 Delivery Details</h3>
            <input type="text" placeholder="Full Name *" className="w-full p-4 border rounded-xl mb-3 focus:outline-none transition-all" 
                   style={{borderColor: theme.border, background: theme.background}} />
            <input type="tel" placeholder="Phone Number *" className="w-full p-4 border rounded-xl mb-3 focus:outline-none" 
                   style={{borderColor: theme.border, background: theme.background}} />
            <select className="w-full p-4 border rounded-xl mb-3 focus:outline-none" style={{borderColor: theme.border, background: theme.background}}>
              <option value="">Select Delivery Area *</option>
              {deliveryAreas.map(area => <option key={area} value={area}>{area}</option>)}
            </select>
            <textarea placeholder="Full Address *" className="w-full p-4 border rounded-xl resize-none focus:outline-none" 
                      style={{borderColor: theme.border, background: theme.background}} rows={3}></textarea>
          </div>

          <div className="rounded-2xl p-5 mb-6 flex items-center gap-4" style={{background: `linear-gradient(135deg, ${theme.accent}15, ${theme.accentLight}20)`, border: `2px solid ${theme.accent}40`}}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl" style={{background: theme.accent}}>⏰</div>
            <div>
              <p className="font-bold" style={{color: '#92400E'}}>Made Fresh On Order</p>
              <p className="text-sm" style={{color: '#A16207'}}>Manufacturing date = Your order date</p>
            </div>
          </div>

          <button onClick={() => setOrderPlaced(true)} 
                  className="w-full text-white py-4 rounded-2xl font-bold text-lg shadow-xl mb-3 transition-all active:scale-98"
                  style={{background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`}}>
            Place Order • ₹{getCartTotal()}
          </button>
          <a href={`https://wa.me/917993822600?text=New Order:%0A${cart.map(i => `${i.product.name} - ${i.variant.size} x ${i.quantity}`).join('%0A')}%0ATotal: ₹${getCartTotal()}`} 
             className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-lg text-white"
             style={{background: '#25D366'}}>
            💬 Order via WhatsApp
          </a>
        </div>
      </div>
    );
  }

  // ===========================================
  // 🛒 CART
  // ===========================================
  if (showCart) {
    return (
      <div className="min-h-screen font-sans max-w-md mx-auto" style={{background: '#F8FAFC'}}>
        <div className="p-4 flex items-center gap-4 border-b sticky top-0 z-50" style={{background: theme.surface, borderColor: theme.border}}>
          <button onClick={() => setShowCart(false)} 
                  className="w-11 h-11 flex items-center justify-center rounded-xl text-xl"
                  style={{background: theme.background}}>←</button>
          <h1 className="text-lg font-bold flex-1" style={{color: theme.text}}>Your Cart ({getCartItemCount()})</h1>
        </div>
        
        {cart.length === 0 ? (
          <div className="text-center py-20 px-5">
            <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: theme.background}}>
              <span className="text-6xl opacity-40">🛒</span>
            </div>
            <h3 className="text-xl font-bold mb-2" style={{color: theme.text}}>Your cart is empty</h3>
            <p className="mb-6" style={{color: theme.textSecondary}}>Add fresh farm products!</p>
            <button onClick={() => setShowCart(false)} 
                    className="text-white px-8 py-3 rounded-xl font-bold"
                    style={{background: theme.primary}}>
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="p-4 pb-44">
            {cart.map((item, idx) => {
              const itemColors = {
                rice: '#FEF3C7', urad: '#E0E7FF', pickles: '#FCE7F3', karam: '#FFEDD5'
              };
              const bgColor = itemColors[item.category] || '#F8FAFC';
              return (
                <div key={idx} className="rounded-2xl p-4 mb-3" style={{background: bgColor, boxShadow: '0 4px 15px rgba(0,0,0,0.08)'}}>
                  <div className="flex gap-4">
                    <ProductImage src={item.product.image} alt={item.product.name} className="w-20 h-20 rounded-xl" />
                    <div className="flex-1">
                      <h4 className="font-bold" style={{color: theme.text}}>{item.product.name}</h4>
                      <p className="text-sm mb-2" style={{color: theme.textSecondary}}>{item.variant.size}</p>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg" style={{color: theme.success}}>₹{item.variant.ourPrice}</span>
                        <span className="text-sm line-through" style={{color: theme.textMuted}}>₹{item.variant.marketPrice}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full font-bold text-white" style={{background: theme.success}}>
                          {getDiscount(item.variant.ourPrice, item.variant.marketPrice)}% OFF
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t" style={{borderColor: 'rgba(0,0,0,0.1)'}}>
                    <div className="flex items-center rounded-xl overflow-hidden" style={{background: theme.primary}}>
                      <button onClick={() => updateCartQuantity(item.product.id, item.variant.size, -1)} 
                              className="w-10 h-10 text-white font-bold text-xl">−</button>
                      <span className="w-12 text-center text-white font-bold text-lg">{item.quantity}</span>
                      <button onClick={() => updateCartQuantity(item.product.id, item.variant.size, 1)} 
                              className="w-10 h-10 text-white font-bold text-xl">+</button>
                    </div>
                    <p className="font-bold text-xl" style={{color: theme.text}}>₹{item.variant.ourPrice * item.quantity}</p>
                  </div>
                </div>
              );
            })}
            
            <div className="rounded-2xl p-5 mt-4" style={{background: `linear-gradient(135deg, ${theme.accent}15, ${theme.accentLight}20)`, border: `2px solid ${theme.accent}40`}}>
              <div className="flex justify-between mb-2" style={{color: theme.textSecondary}}><span>Items ({getCartItemCount()})</span><span>₹{getCartTotal()}</span></div>
              <div className="flex justify-between mb-2"><span style={{color: theme.textSecondary}}>Delivery</span><span className="font-semibold" style={{color: theme.success}}>FREE</span></div>
              <div className="flex justify-between font-semibold mb-3" style={{color: theme.success}}><span>You Save</span><span>₹{getCartSavings()}</span></div>
              <div className="flex justify-between text-xl font-bold pt-3 border-t" style={{borderColor: theme.accent}}><span>Grand Total</span><span>₹{getCartTotal()}</span></div>
            </div>
          </div>
        )}

        {cart.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 border-t p-4 max-w-md mx-auto" style={{background: theme.surface, borderColor: theme.border}}>
            <button onClick={() => setShowCheckout(true)} 
                    className="w-full text-white py-4 rounded-2xl font-bold text-lg shadow-xl transition-all active:scale-98"
                    style={{background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`}}>
              Proceed to Checkout • ₹{getCartTotal()}
            </button>
          </div>
        )}
      </div>
    );
  }

  // ===========================================
  // 📦 PRODUCT DETAIL
  // ===========================================
  if (selectedProduct) {
    let variants;
    if (selectedCategory === 'pickles') {
      variants = getPickleVariants(selectedProduct);
    } else if (selectedCategory === 'karam') {
      variants = productsData.karam.variants;
    } else {
      variants = selectedProduct.variants;
    }

    const detailColors = {
      rice: { bg: '#FEF3C7', light: '#FFFBEB', accent: '#F59E0B' },
      urad: { bg: '#E0E7FF', light: '#EEF2FF', accent: '#6366F1' },
      pickles: { bg: '#FCE7F3', light: '#FDF2F8', accent: '#EC4899' },
      karam: { bg: '#FFEDD5', light: '#FFF7ED', accent: '#EA580C' },
    };
    const colors = detailColors[selectedCategory] || detailColors.rice;

    return (
      <div className="min-h-screen font-sans max-w-md mx-auto" style={{background: '#F8FAFC'}}>
        <div className="p-4 flex items-center justify-between border-b sticky top-0 z-50" style={{background: theme.surface, borderColor: theme.border}}>
          <button onClick={() => setSelectedProduct(null)} 
                  className="w-11 h-11 flex items-center justify-center rounded-xl text-xl"
                  style={{background: theme.background}}>←</button>
          <h1 className="text-lg font-bold" style={{color: theme.text}}>Product Details</h1>
          <button onClick={() => setShowCart(true)} className="relative w-11 h-11 flex items-center justify-center">
            <span className="text-2xl">🛒</span>
            {getCartItemCount() > 0 && (
              <span className="absolute -top-1 -right-1 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
                    style={{background: theme.primary}}>{getCartItemCount()}</span>
            )}
          </button>
        </div>
        
        <div className="p-8 flex items-center justify-center relative" style={{background: colors.bg}}>
          <div className="absolute top-4 left-4 text-white text-sm px-3 py-1.5 rounded-full font-bold shadow-lg" style={{background: theme.success}}>
            {getDiscount(variants[0].ourPrice, variants[0].marketPrice)}% OFF
          </div>
          <div className="w-52 h-52 rounded-3xl flex items-center justify-center overflow-hidden" 
               style={{background: colors.light, boxShadow: '0 8px 30px rgba(0,0,0,0.1)'}}>
            <ProductImage src={selectedProduct.image} alt={selectedProduct.name} className="w-44 h-44" />
          </div>
        </div>
        
        <div className="p-6 pb-36 border-t" style={{background: theme.surface, borderColor: theme.border}}>
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-2xl font-bold flex-1 pr-4" style={{color: theme.text}}>{selectedProduct.name}</h2>
            <span className="px-3 py-1.5 rounded-full text-xs font-bold text-white" style={{backgroundColor: selectedProduct.tagColor}}>{selectedProduct.tag}</span>
          </div>
          <p className="mb-6 leading-relaxed" style={{color: theme.textSecondary}}>{selectedProduct.description}</p>
          
          <div className="rounded-2xl p-4 mb-6 flex items-center gap-4" style={{background: '#F0FDF4', border: '2px solid #86EFAC'}}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl" style={{background: theme.success}}>🌿</div>
            <div>
              <p className="font-bold" style={{color: theme.success}}>Made Fresh On Order</p>
              <p className="text-sm" style={{color: '#166534'}}>Manufacturing date = Your order date</p>
            </div>
          </div>

          <h3 className="font-bold mb-4 text-lg" style={{color: theme.text}}>Select Size</h3>
          
          {variants.map((variant, idx) => (
            <div key={idx} className="rounded-2xl p-4 mb-3 flex items-center justify-between transition-all cursor-pointer hover:scale-[1.01]"
                 style={{background: colors.bg, boxShadow: '0 4px 15px rgba(0,0,0,0.06)'}}>
              <div>
                <p className="font-bold text-lg" style={{color: theme.text}}>{variant.size}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-2xl font-bold" style={{color: theme.success}}>₹{variant.ourPrice}</span>
                  <span className="line-through" style={{color: theme.textMuted}}>₹{variant.marketPrice}</span>
                  <span className="text-xs px-2 py-1 rounded-full font-bold text-white" style={{background: theme.success}}>
                    {getDiscount(variant.ourPrice, variant.marketPrice)}% OFF
                  </span>
                </div>
              </div>
              <button onClick={() => addToCart(selectedProduct, variant, selectedCategory)} 
                      className="text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-all active:scale-95"
                      style={{background: colors.accent}}>
                ADD
              </button>
            </div>
          ))}
        </div>

        {getCartItemCount() > 0 && (
          <div onClick={() => setShowCart(true)} 
               className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md rounded-2xl p-4 flex justify-between items-center shadow-2xl cursor-pointer z-50"
               style={{background: theme.primary}}>
            <div>
              <span className="text-white font-bold">{getCartItemCount()} items</span>
              <span className="block text-sm" style={{color: theme.accentLight}}>₹{getCartTotal()}</span>
            </div>
            <span className="text-white font-bold px-4 py-2 rounded-xl" style={{background: theme.primaryLight}}>View Cart →</span>
          </div>
        )}
      </div>
    );
  }

  // ===========================================
  // 🥒 PICKLE SUBCATEGORY
  // ===========================================
  if (selectedCategory === 'pickles' && selectedSubcategory) {
    const subcat = productsData.pickles.subcategories.find(s => s.name === selectedSubcategory);
    const pickleColors = { bg: '#FCE7F3', light: '#FDF2F8', accent: '#EC4899' };
    
    return (
      <div className="min-h-screen font-sans max-w-md mx-auto" style={{background: '#F8FAFC'}}>
        <div className="p-4 flex items-center justify-between border-b sticky top-0 z-50" style={{background: theme.surface, borderColor: theme.border}}>
          <button onClick={() => setSelectedSubcategory(null)} 
                  className="w-11 h-11 flex items-center justify-center rounded-xl text-xl"
                  style={{background: theme.background}}>←</button>
          <h1 className="text-lg font-bold" style={{color: theme.text}}>{subcat.icon} {subcat.name}</h1>
          <button onClick={() => setShowCart(true)} className="relative w-11 h-11 flex items-center justify-center">
            <span className="text-2xl">🛒</span>
            {getCartItemCount() > 0 && (
              <span className="absolute -top-1 -right-1 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
                    style={{background: theme.primary}}>{getCartItemCount()}</span>
            )}
          </button>
        </div>

        <div className="p-4 pb-28">
          <div className="grid grid-cols-2 gap-3">
            {subcat.items.map(product => {
              const variants = getPickleVariants(product);
              return (
                <div key={product.id} onClick={() => setSelectedProduct(product)} 
                     className="rounded-2xl overflow-hidden cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                     style={{background: pickleColors.bg, boxShadow: '0 4px 15px rgba(0,0,0,0.08)'}}>
                  <div className="p-4 relative">
                    <span className="absolute top-2 right-2 text-white text-[10px] px-2 py-1 rounded-full font-bold" 
                          style={{background: theme.success}}>
                      {getDiscount(variants[0].ourPrice, variants[0].marketPrice)}% OFF
                    </span>
                    <div className="w-24 h-24 mx-auto mb-3 rounded-2xl flex items-center justify-center"
                         style={{background: pickleColors.light}}>
                      <ProductImage src={product.image} alt={product.name} className="w-20 h-20 rounded-xl" />
                    </div>
                    <h4 className="font-bold text-sm text-center mb-1" style={{color: theme.text}}>{product.name}</h4>
                    <p className="text-[10px] text-center mb-2" style={{color: theme.textMuted}}>250g / 500g / 1kg</p>
                    <div className="text-center mb-3">
                      <span className="font-bold text-lg" style={{color: theme.success}}>₹{variants[0].ourPrice}</span>
                      <span className="line-through text-xs ml-1" style={{color: theme.textMuted}}>₹{variants[0].marketPrice}</span>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); addToCart(product, variants[0], 'pickles'); }} 
                            className="w-full py-2 rounded-xl text-sm font-bold text-white shadow-lg transition-all active:scale-95"
                            style={{background: pickleColors.accent}}>
                      ADD
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {getCartItemCount() > 0 && (
          <div onClick={() => setShowCart(true)} 
               className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md rounded-2xl p-4 flex justify-between items-center shadow-2xl cursor-pointer z-50"
               style={{background: theme.primary}}>
            <div>
              <span className="text-white font-bold">{getCartItemCount()} items</span>
              <span className="block text-sm" style={{color: theme.accentLight}}>₹{getCartTotal()}</span>
            </div>
            <span className="text-white font-bold px-4 py-2 rounded-xl" style={{background: theme.primaryLight}}>View Cart →</span>
          </div>
        )}
      </div>
    );
  }

  // ===========================================
  // 📂 CATEGORY VIEWS
  // ===========================================
  if (selectedCategory) {
    const category = productsData[selectedCategory];
    
    if (selectedCategory === 'pickles') {
      const pickleColors = { bg: '#FCE7F3', light: '#FDF2F8', accent: '#EC4899' };
      return (
        <div className="min-h-screen font-sans max-w-md mx-auto" style={{background: '#F8FAFC'}}>
          <div className="p-4 flex items-center justify-between border-b sticky top-0 z-50" style={{background: theme.surface, borderColor: theme.border}}>
            <button onClick={() => setSelectedCategory(null)} 
                    className="w-11 h-11 flex items-center justify-center rounded-xl text-xl"
                    style={{background: theme.background}}>←</button>
            <h1 className="text-lg font-bold" style={{color: theme.text}}>Homemade Pickles</h1>
            <button onClick={() => setShowCart(true)} className="relative w-11 h-11 flex items-center justify-center">
              <span className="text-2xl">🛒</span>
              {getCartItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
                      style={{background: theme.primary}}>{getCartItemCount()}</span>
              )}
            </button>
          </div>

          <div className="p-4 pb-28">
            {category.subcategories.map((subcat, idx) => (
              <div key={idx} className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" 
                       style={{background: pickleColors.bg}}>{subcat.icon}</div>
                  <h3 className="text-lg font-bold" style={{color: theme.text}}>{subcat.name}</h3>
                  <span className="text-sm ml-auto px-2 py-1 rounded-full" 
                        style={{background: pickleColors.bg, color: pickleColors.accent}}>{subcat.items.length} items</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {subcat.items.slice(0, 4).map(product => {
                    const variants = getPickleVariants(product);
                    return (
                      <div key={product.id} onClick={() => { setSelectedSubcategory(subcat.name); setSelectedProduct(product); }} 
                           className="rounded-2xl p-3 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                           style={{background: pickleColors.bg, boxShadow: '0 3px 12px rgba(0,0,0,0.06)'}}>
                        <div className="w-full h-20 rounded-xl flex items-center justify-center mb-2"
                             style={{background: pickleColors.light}}>
                          <ProductImage src={product.image} alt={product.name} className="w-16 h-16 rounded-lg" />
                        </div>
                        <h4 className="font-bold text-sm truncate" style={{color: theme.text}}>{product.name}</h4>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="font-bold text-sm" style={{color: theme.success}}>₹{variants[0].ourPrice}</span>
                          <span className="line-through text-xs" style={{color: theme.textMuted}}>₹{variants[0].marketPrice}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {subcat.items.length > 4 && (
                  <button onClick={() => setSelectedSubcategory(subcat.name)} 
                          className="w-full mt-3 font-bold text-sm py-3 rounded-xl transition-all text-white"
                          style={{background: pickleColors.accent}}>
                    View All {subcat.items.length} {subcat.name} →
                  </button>
                )}
              </div>
            ))}
          </div>

          {getCartItemCount() > 0 && (
            <div onClick={() => setShowCart(true)} 
                 className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md rounded-2xl p-4 flex justify-between items-center shadow-2xl cursor-pointer z-50"
                 style={{background: theme.primary}}>
              <div>
                <span className="text-white font-bold">{getCartItemCount()} items</span>
                <span className="block text-sm" style={{color: theme.accentLight}}>₹{getCartTotal()}</span>
              </div>
              <span className="text-white font-bold px-4 py-2 rounded-xl" style={{background: theme.primaryLight}}>View Cart →</span>
            </div>
          )}
        </div>
      );
    }

    if (selectedCategory === 'karam') {
      const karamColors = { bg: '#FFEDD5', light: '#FFF7ED', accent: '#EA580C' };
      return (
        <div className="min-h-screen font-sans max-w-md mx-auto" style={{background: '#F8FAFC'}}>
          <div className="p-4 flex items-center justify-between border-b sticky top-0 z-50" style={{background: theme.surface, borderColor: theme.border}}>
            <button onClick={() => setSelectedCategory(null)} 
                    className="w-11 h-11 flex items-center justify-center rounded-xl text-xl"
                    style={{background: theme.background}}>←</button>
            <h1 className="text-lg font-bold" style={{color: theme.text}}>{category.title}</h1>
            <button onClick={() => setShowCart(true)} className="relative w-11 h-11 flex items-center justify-center">
              <span className="text-2xl">🛒</span>
              {getCartItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
                      style={{background: theme.primary}}>{getCartItemCount()}</span>
              )}
            </button>
          </div>

          <div className="p-5" style={{background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`}}>
            <h2 className="text-white font-bold text-xl text-center">{category.title}</h2>
            <p className="text-center" style={{color: theme.accentLight}}>{category.subtitle}</p>
          </div>

          <div className="p-4 pb-28">
            <div className="grid grid-cols-2 gap-3">
              {category.items.map(product => (
                <div key={product.id} onClick={() => setSelectedProduct(product)} 
                     className="rounded-2xl overflow-hidden cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                     style={{background: karamColors.bg, boxShadow: '0 4px 15px rgba(0,0,0,0.08)'}}>
                  <div className="p-4 relative">
                    <span className="absolute top-2 right-2 text-white text-[10px] px-2 py-1 rounded-full font-bold" 
                          style={{background: theme.success}}>
                      {getDiscount(category.variants[0].ourPrice, category.variants[0].marketPrice)}% OFF
                    </span>
                    <div className="w-20 h-20 mx-auto mb-3 rounded-2xl flex items-center justify-center"
                         style={{background: karamColors.light}}>
                      <ProductImage src={product.image} alt={product.name} className="w-16 h-16 rounded-xl" />
                    </div>
                    <h4 className="font-bold text-sm text-center mb-1" style={{color: theme.text}}>{product.name}</h4>
                    <p className="text-[10px] text-center mb-2" style={{color: theme.textMuted}}>
                      {category.variants.map(v => v.size).join(' / ')}
                    </p>
                    <div className="text-center mb-3">
                      <span className="font-bold text-lg" style={{color: theme.success}}>₹{category.variants[0].ourPrice}</span>
                      <span className="line-through text-xs ml-1" style={{color: theme.textMuted}}>₹{category.variants[0].marketPrice}</span>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); addToCart(product, category.variants[0], selectedCategory); }} 
                            className="w-full py-2 rounded-xl text-sm font-bold text-white shadow-lg transition-all active:scale-95"
                            style={{background: karamColors.accent}}>
                      ADD
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {getCartItemCount() > 0 && (
            <div onClick={() => setShowCart(true)} 
                 className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md rounded-2xl p-4 flex justify-between items-center shadow-2xl cursor-pointer z-50"
                 style={{background: theme.primary}}>
              <div>
                <span className="text-white font-bold">{getCartItemCount()} items</span>
                <span className="block text-sm" style={{color: theme.accentLight}}>₹{getCartTotal()}</span>
              </div>
              <span className="text-white font-bold px-4 py-2 rounded-xl" style={{background: theme.primaryLight}}>View Cart →</span>
            </div>
          )}
        </div>
      );
    }

    // Product card colors for each category
    const productCardColors = {
      rice: { bg: '#FEF3C7', light: '#FFFBEB', accent: '#F59E0B' },
      urad: { bg: '#E0E7FF', light: '#EEF2FF', accent: '#6366F1' },
      pickles: { bg: '#FCE7F3', light: '#FDF2F8', accent: '#EC4899' },
      karam: { bg: '#FFEDD5', light: '#FFF7ED', accent: '#EA580C' },
    };
    const cardColors = productCardColors[selectedCategory] || productCardColors.rice;

    return (
      <div className="min-h-screen font-sans max-w-md mx-auto" style={{background: '#F8FAFC'}}>
        <div className="p-4 flex items-center justify-between border-b sticky top-0 z-50" style={{background: theme.surface, borderColor: theme.border}}>
          <button onClick={() => setSelectedCategory(null)} 
                  className="w-11 h-11 flex items-center justify-center rounded-xl text-xl"
                  style={{background: theme.background}}>←</button>
          <h1 className="text-lg font-bold" style={{color: theme.text}}>{category.title}</h1>
          <button onClick={() => setShowCart(true)} className="relative w-11 h-11 flex items-center justify-center">
            <span className="text-2xl">🛒</span>
            {getCartItemCount() > 0 && (
              <span className="absolute -top-1 -right-1 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
                    style={{background: theme.primary}}>{getCartItemCount()}</span>
            )}
          </button>
        </div>

        <div className="p-5" style={{background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`}}>
          <h2 className="text-white font-bold text-xl text-center">{category.title}</h2>
          <p className="text-center" style={{color: theme.accentLight}}>{category.subtitle}</p>
        </div>

        <div className="p-4 pb-28">
          <div className="space-y-4">
            {category.items.map(product => (
              <div key={product.id} onClick={() => setSelectedProduct(product)} 
                   className="rounded-2xl overflow-hidden cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99]"
                   style={{background: cardColors.bg, boxShadow: '0 4px 15px rgba(0,0,0,0.08)'}}>
                <div className="flex items-center p-4">
                  <div className="w-28 h-28 rounded-2xl flex items-center justify-center relative mr-4"
                       style={{background: cardColors.light}}>
                    <ProductImage src={product.image} alt={product.name} className="w-24 h-24 rounded-xl" />
                    <span className="absolute -top-2 -left-2 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg" 
                          style={{background: theme.success}}>
                      {getDiscount(product.variants[0].ourPrice, product.variants[0].marketPrice)}% OFF
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-lg" style={{color: theme.text}}>{product.name}</h4>
                      <span className="text-[10px] px-2 py-1 rounded-full text-white font-bold ml-2" 
                            style={{backgroundColor: product.tagColor}}>{product.tag}</span>
                    </div>
                    <p className="text-xs mb-2 line-clamp-2" style={{color: theme.textSecondary}}>{product.description}</p>
                    <p className="text-xs mb-3" style={{color: theme.textMuted}}>{product.variants.map(v => v.size).join(' • ')}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-xl" style={{color: theme.success}}>₹{product.variants[0].ourPrice}</span>
                        <span className="text-sm line-through ml-2" style={{color: theme.textMuted}}>₹{product.variants[0].marketPrice}</span>
                      </div>
                      <button onClick={(e) => { e.stopPropagation(); addToCart(product, product.variants[0], selectedCategory); }} 
                              className="px-5 py-2 rounded-xl font-bold text-white shadow-lg transition-all active:scale-95"
                              style={{background: cardColors.accent}}>
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {getCartItemCount() > 0 && (
          <div onClick={() => setShowCart(true)} 
               className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md rounded-2xl p-4 flex justify-between items-center shadow-2xl cursor-pointer z-50"
               style={{background: theme.primary}}>
            <div>
              <span className="text-white font-bold">{getCartItemCount()} items</span>
              <span className="block text-sm" style={{color: theme.accentLight}}>₹{getCartTotal()}</span>
            </div>
            <span className="text-white font-bold px-4 py-2 rounded-xl" style={{background: theme.primaryLight}}>View Cart →</span>
          </div>
        )}
      </div>
    );
  }

  // Category background colors for attractive product cards
  const categoryColors = {
    rice: { bg: '#FEF3C7', accent: '#F59E0B', light: '#FFFBEB' },
    urad: { bg: '#E0E7FF', accent: '#6366F1', light: '#EEF2FF' },
    pickles: { bg: '#FCE7F3', accent: '#EC4899', light: '#FDF2F8' },
    karam: { bg: '#FFEDD5', accent: '#EA580C', light: '#FFF7ED' },
  };

  // ===========================================
  // 🏠 HOME SCREEN
  // ===========================================
  return (
    <div className="min-h-screen font-sans max-w-md mx-auto pb-28" style={{background: '#F8FAFC'}}>
      {/* Header */}
      <div className="p-4 flex items-center justify-between" style={{background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`}}>
        <div className="flex items-center gap-3">
          <Logo className="w-14 h-14 border-2 border-white/20" />
          <div className="text-white">
            <h1 className="font-bold text-lg leading-tight" style={{fontFamily: 'Georgia, serif'}}>BIYAM KRISHNA GARI</h1>
            <p className="text-xs" style={{color: theme.accentLight}}>Farm to Home • Pure Quality</p>
          </div>
        </div>
        <button onClick={() => setShowCart(true)} 
                className="relative w-12 h-12 rounded-xl flex items-center justify-center"
                style={{background: 'rgba(255,255,255,0.15)'}}>
          <span className="text-2xl">🛒</span>
          {getCartItemCount() > 0 && (
            <span className="absolute -top-1 -right-1 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold"
                  style={{background: '#EF4444'}}>{getCartItemCount()}</span>
          )}
        </button>
      </div>

      {/* Hero Banner - Attractive Design */}
      <div className="p-4">
        <div className="rounded-3xl p-6 relative overflow-hidden" 
             style={{background: 'linear-gradient(135deg, #065F46 0%, #047857 50%, #10B981 100%)'}}>
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20" 
               style={{background: 'white', transform: 'translate(30%, -30%)'}}></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-10" 
               style={{background: 'white', transform: 'translate(-30%, 30%)'}}></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🏆</span>
              <span className="text-white/90 text-sm font-semibold">Premium Quality Promise</span>
            </div>
            
            <h2 className="text-white text-2xl font-bold mb-2">Made With Love & Care</h2>
            <h3 className="text-white text-xl font-bold mb-4">100% Pure Homemade Products</h3>
            
            <div className="space-y-2 mb-4">
              <p className="text-white/90 text-sm flex items-center gap-2">
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</span>
                No Preservatives • No Chemicals
              </p>
              <p className="text-white/90 text-sm flex items-center gap-2">
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</span>
                Traditional Recipes • Fresh Ingredients
              </p>
              <p className="text-white/90 text-sm flex items-center gap-2">
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</span>
                Made Fresh On Order • Hygienic Packing
              </p>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <span className="bg-white/20 backdrop-blur px-3 py-1.5 rounded-full text-white text-xs font-semibold">
                🏠 100% Homemade
              </span>
              <span className="bg-white/20 backdrop-blur px-3 py-1.5 rounded-full text-white text-xs font-semibold">
                🚚 Free Delivery
              </span>
              <span className="bg-white/20 backdrop-blur px-3 py-1.5 rounded-full text-white text-xs font-semibold">
                ⭐ Best Quality
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Strip */}
      <div className="mx-4 mb-4 p-3 rounded-2xl flex items-center justify-center gap-6" 
           style={{background: 'linear-gradient(90deg, #FEF3C7, #FDE68A)'}}>
        <div className="flex items-center gap-2">
          <span className="text-xl">📅</span>
          <div>
            <p className="text-xs font-bold text-amber-800">Manufacturing Date</p>
            <p className="text-[10px] text-amber-700">= Your Order Date</p>
          </div>
        </div>
        <div className="w-px h-8 bg-amber-400"></div>
        <div className="flex items-center gap-2">
          <span className="text-xl">🏪</span>
          <div>
            <p className="text-xs font-bold text-amber-800">Direct from Kitchen</p>
            <p className="text-[10px] text-amber-700">No Middlemen</p>
          </div>
        </div>
      </div>

      {/* Shop by Category - Colorful Cards */}
      <div className="px-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold" style={{color: theme.text}}>Shop by Category</h2>
            <p className="text-sm" style={{color: theme.textSecondary}}>Fresh from our farm to your home</p>
          </div>
          <span className="text-2xl">🛍️</span>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(productsData).map(([key, cat]) => {
            const colors = categoryColors[key];
            return (
              <div key={key} onClick={() => setSelectedCategory(key)} 
                   className="rounded-2xl overflow-hidden cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                   style={{background: colors.bg, boxShadow: '0 4px 15px rgba(0,0,0,0.08)'}}>
                <div className="p-4 relative">
                  <div className="absolute top-2 right-2 px-2 py-1 rounded-full text-[10px] font-bold text-white"
                       style={{background: colors.accent}}>
                    {cat.items?.length || cat.subcategories?.reduce((a, s) => a + s.items.length, 0)} items
                  </div>
                  <div className="w-20 h-20 mx-auto mb-3 rounded-2xl flex items-center justify-center"
                       style={{background: colors.light}}>
                    <ProductImage src={cat.image} alt={cat.title} className="w-16 h-16 rounded-xl" />
                  </div>
                  <h3 className="font-bold text-sm text-center mb-1" style={{color: theme.text}}>
                    {key === 'rice' ? 'Premium Rice' : key === 'urad' ? 'Urad Dal' : key === 'pickles' ? 'Homemade Pickles' : 'Spice Powders'}
                  </h3>
                  <p className="text-[10px] text-center mb-2" style={{color: theme.textSecondary}}>
                    {cat.subtitle.split(' ').slice(0, 4).join(' ')}
                  </p>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white"
                          style={{background: colors.accent}}>
                      View All →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Choose Us - Price Comparison */}
      <div className="mx-4 mb-4 rounded-2xl overflow-hidden" style={{boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
        <div className="p-4 text-white text-center" style={{background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`}}>
          <h3 className="font-bold text-lg">💡 Why Choose Us?</h3>
          <p className="text-xs text-white/80">Compare & Save with BKGR Products</p>
        </div>
        <div className="p-4 bg-white">
          <div className="flex items-center justify-around">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Market Price</p>
              <p className="text-2xl font-bold text-gray-400 line-through">₹1,875</p>
            </div>
            <div className="text-3xl">→</div>
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Our Price</p>
              <p className="text-3xl font-bold" style={{color: theme.success}}>₹1,550</p>
              <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-bold text-white bg-green-500">
                Save ₹325!
              </span>
            </div>
          </div>
          <p className="text-center text-xs mt-3 text-gray-500">25kg Semi Polished Rice</p>
        </div>
      </div>

      {/* Our Promise */}
      <div className="mx-4 mb-4 p-4 rounded-2xl" style={{background: 'linear-gradient(135deg, #FDF2F8, #FCE7F3)'}}>
        <h3 className="font-bold text-center mb-3" style={{color: '#9D174D'}}>🤝 Our Promise to You</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            {icon: '👩‍🍳', title: 'Homemade Style', desc: 'Traditional home recipes'},
            {icon: '🌿', title: 'Pure Ingredients', desc: 'No artificial additives'},
            {icon: '📦', title: 'Fresh Packing', desc: 'Hygienic & sealed'},
            {icon: '💯', title: 'Quality Assured', desc: 'Checked before delivery'},
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-3 text-center" style={{boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
              <span className="text-2xl block mb-1">{item.icon}</span>
              <p className="font-bold text-xs" style={{color: theme.text}}>{item.title}</p>
              <p className="text-[10px]" style={{color: theme.textSecondary}}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Areas */}
      <div className="px-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">🚚</span>
          <h3 className="font-bold text-lg" style={{color: theme.text}}>Free Delivery Areas</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {deliveryAreas.map(area => (
            <span key={area} className="px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{background: '#E0F2FE', color: '#0369A1'}}>{area}</span>
          ))}
        </div>
      </div>

      {/* Contact Buttons */}
      <div className="flex gap-3 px-4 pb-4">
        <a href="tel:+917993822600" 
           className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold shadow-lg"
           style={{border: `2px solid ${theme.primary}`, color: theme.primary, background: theme.surface}}>
          📞 Call Us
        </a>
        <a href="https://wa.me/917993822600" 
           className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl text-white font-bold shadow-lg"
           style={{background: '#25D366'}}>
          💬 WhatsApp
        </a>
      </div>

      {getCartItemCount() > 0 && (
        <div onClick={() => setShowCart(true)} 
             className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md rounded-2xl p-4 flex justify-between items-center shadow-2xl cursor-pointer z-50"
             style={{background: theme.primary}}>
          <div>
            <span className="text-white font-bold">{getCartItemCount()} items</span>
            <span className="block text-sm" style={{color: theme.accentLight}}>Saving ₹{getCartSavings()}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white text-xl font-bold">₹{getCartTotal()}</span>
            <span className="text-white font-bold px-4 py-2 rounded-xl" style={{background: theme.primaryLight}}>View Cart →</span>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        * { font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif; }
        @keyframes loading { 0% { transform: translateX(-100%); } 100% { transform: translateX(300%); } }
        .animate-loading { animation: loading 1.5s ease-in-out infinite; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </div>
  );
}
