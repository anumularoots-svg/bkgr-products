import React, { useState, useEffect } from 'react';

// ===========================================
// 📸 PRODUCT IMAGES CONFIGURATION
// ===========================================
// All your actual product images from ImgBB

const PRODUCT_IMAGES = {
  // Rice Images
  rice: {
    category: 'https://i.ibb.co/wFRGvPvQ/rice-bag.png',
    brown: 'https://i.ibb.co/zDm822J/brow.png',
    semi: 'https://i.ibb.co/JWx6g5fD/smibr.png',
    full: 'https://i.ibb.co/RpW7Z8FZ/fullw.png',
  },
  // Urad Dal Images
  urad: {
    category: 'https://i.ibb.co/qLhm6r9x/urad-bag.png',
    split: 'https://i.ibb.co/jNtB0qz/Urad-Dal-Split.png',
    whole: 'https://i.ibb.co/qLhm6r9x/urad-bag.png',
  },
  // Pickle Images
  pickles: {
    category: 'https://i.ibb.co/B5vxvhvC/mixed.png',
    mango: 'https://i.ibb.co/BVx09zvb/mango.png',
    lemon: 'https://i.ibb.co/8nkpcBC2/lemon.png',
    gongura: 'https://i.ibb.co/yFG8wSz1/gongura.png',
    tomato: 'https://i.ibb.co/tTQGtVP3/tomato.png',
    brinjal: 'https://i.ibb.co/99XFpDSC/Brinjal.png',
    redchilli: 'https://i.ibb.co/RpFkNTJ3/redchilli.png',
    drumstick: 'https://i.ibb.co/HLDbsG3N/drumstick.png',
    chicken: 'https://i.ibb.co/jvwcsGmJ/chicken.png',
    mutton: 'https://i.ibb.co/1t8DMnq7/mutton.png',
    fish: 'https://i.ibb.co/MDczFFB5/fish.png',
    prawn: 'https://i.ibb.co/LhBG59n6/prawn.png',
    default: 'https://i.ibb.co/B5vxvhvC/mixed.png',
  },
  // Karam Powder Images
  karam: {
    category: 'https://i.ibb.co/rKdW0zXz/pappula.png',
    vepudu: 'https://i.ibb.co/0RRS4sf7/vepudu.png',
    pappula: 'https://i.ibb.co/rKdW0zXz/pappula.png',
    nuvvula: 'https://i.ibb.co/5XWt8my5/nvula.png',
    kobbari: 'https://i.ibb.co/SHTHJg2/kobbari.png',
    karivepaku: 'https://i.ibb.co/Vp9nny5h/karivepaku.png',
    munagaku: 'https://i.ibb.co/hJQrdwsv/mungaku.png',
    gongura: 'https://i.ibb.co/LhzXN19X/gongura-podi.png',
    default: 'https://i.ibb.co/rKdW0zXz/pappula.png',
  },
  // Microgreens Images
  microgreens: {
    category: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop',
    default: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=300&fit=crop',
  }
};

// Complete Product Data with English Names
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
        description: 'Whole grain with bran intact. Rich in fiber & vitamins.',
        tag: 'HEALTHY',
        tagColor: '#4CAF50',
        image: PRODUCT_IMAGES.rice.brown,
        variants: [
          { size: '5 KG', ourPrice: 375, marketPrice: 450 },
          { size: '25 KG', ourPrice: 1750, marketPrice: 2100 },
          { size: '50 KG', ourPrice: 3400, marketPrice: 4000 },
        ]
      },
      {
        id: 'rice-semi',
        name: 'Semi Polished Rice',
        description: 'Retains bran for nutrition with softer texture.',
        tag: 'BESTSELLER',
        tagColor: '#FF9800',
        image: PRODUCT_IMAGES.rice.semi,
        variants: [
          { size: '5 KG', ourPrice: 350, marketPrice: 420 },
          { size: '25 KG', ourPrice: 1625, marketPrice: 1950 },
          { size: '50 KG', ourPrice: 3150, marketPrice: 3800 },
        ]
      },
      {
        id: 'rice-full',
        name: 'Full Polished Rice',
        description: 'Completely polished, pure white. Perfect for biryanis.',
        tag: 'PREMIUM',
        tagColor: '#9C27B0',
        image: PRODUCT_IMAGES.rice.full,
        variants: [
          { size: '5 KG', ourPrice: 400, marketPrice: 480 },
          { size: '25 KG', ourPrice: 1875, marketPrice: 2250 },
          { size: '50 KG', ourPrice: 3650, marketPrice: 4400 },
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
        id: 'urad-split',
        name: 'Urad Dal Split',
        description: 'Premium split urad for soft idlis and crispy dosas.',
        tag: 'IDLI & DOSA',
        tagColor: '#2196F3',
        image: PRODUCT_IMAGES.urad.split,
        variants: [
          { size: '1 KG', ourPrice: 180, marketPrice: 220 },
          { size: '2 KG', ourPrice: 350, marketPrice: 430 },
          { size: '5 KG', ourPrice: 850, marketPrice: 1050 },
        ]
      },
      {
        id: 'urad-whole',
        name: 'Urad Whole Black',
        description: 'Whole black urad. Perfect for crispy vadas.',
        tag: 'FOR VADA',
        tagColor: '#795548',
        image: PRODUCT_IMAGES.urad.whole,
        variants: [
          { size: '1 KG', ourPrice: 165, marketPrice: 200 },
          { size: '2 KG', ourPrice: 320, marketPrice: 390 },
          { size: '5 KG', ourPrice: 780, marketPrice: 950 },
        ]
      }
    ]
  },
  pickles: {
    title: "Homemade Pickles",
    subtitle: "Authentic traditional recipes from grandmother's kitchen",
    description: "Traditional Telugu pickles made with pure ingredients",
    image: PRODUCT_IMAGES.pickles.category,
    subcategories: [
      {
        name: "Mango Pickles",
        icon: "🥭",
        items: [
          { id: 'pickle-avakaya', name: 'Avakaya', description: 'Traditional spicy raw mango pickle', tag: 'SIGNATURE', tagColor: '#FF5722', image: PRODUCT_IMAGES.pickles.mango },
          { id: 'pickle-magaya', name: 'Magaya', description: 'Sweet and tangy tender mango pickle', tag: 'POPULAR', tagColor: '#FFC107', image: PRODUCT_IMAGES.pickles.mango },
        ]
      },
      {
        name: "Vegetable Pickles",
        icon: "🥬",
        items: [
          { id: 'pickle-lemon', name: 'Lemon Pickle', description: 'Tangy lemon pickle with traditional spices', tag: 'CLASSIC', tagColor: '#FFEB3B', image: PRODUCT_IMAGES.pickles.lemon },
          { id: 'pickle-gooseberry', name: 'Gooseberry Pickle', description: 'Healthy amla pickle rich in Vitamin C', tag: 'HEALTHY', tagColor: '#8BC34A', image: PRODUCT_IMAGES.pickles.default },
          { id: 'pickle-tomato', name: 'Tomato Pickle', description: 'Tangy tomato pickle with garlic', tag: 'TANGY', tagColor: '#F44336', image: PRODUCT_IMAGES.pickles.tomato },
          { id: 'pickle-ridgegourd', name: 'Ridge Gourd Pickle', description: 'Crispy ridge gourd in spicy oil', tag: 'CRUNCHY', tagColor: '#4CAF50', image: PRODUCT_IMAGES.pickles.default },
          { id: 'pickle-ivygourd', name: 'Ivy Gourd Pickle', description: 'Tender ivy gourd with mustard', tag: 'SPECIAL', tagColor: '#009688', image: PRODUCT_IMAGES.pickles.default },
          { id: 'pickle-gongura', name: 'Gongura Pickle', description: 'Tangy sorrel leaves pickle', tag: 'TELUGU SPECIAL', tagColor: '#4CAF50', image: PRODUCT_IMAGES.pickles.gongura },
          { id: 'pickle-curryleaves', name: 'Curry Leaves Pickle', description: 'Aromatic curry leaves pickle', tag: 'AROMATIC', tagColor: '#2E7D32', image: PRODUCT_IMAGES.pickles.default },
          { id: 'pickle-radish', name: 'Radish Pickle', description: 'Crunchy radish in spicy marinade', tag: 'CRUNCHY', tagColor: '#E91E63', image: PRODUCT_IMAGES.pickles.default },
          { id: 'pickle-bittergourd', name: 'Bitter Gourd Pickle', description: 'Healthy bitter gourd pickle', tag: 'HEALTHY', tagColor: '#689F38', image: PRODUCT_IMAGES.pickles.default },
          { id: 'pickle-brinjal', name: 'Brinjal Pickle', description: 'Roasted brinjal with spices', tag: 'SMOKY', tagColor: '#7B1FA2', image: PRODUCT_IMAGES.pickles.brinjal },
          { id: 'pickle-redchilli', name: 'Red Chilli Pickle', description: 'Spicy stuffed red chilli pickle', tag: 'SPICY', tagColor: '#D32F2F', image: PRODUCT_IMAGES.pickles.redchilli },
          { id: 'pickle-drumstick', name: 'Drumstick Pickle', description: 'Tender drumstick in tangy masala', tag: 'NUTRITIOUS', tagColor: '#558B2F', image: PRODUCT_IMAGES.pickles.drumstick },
        ]
      },
      {
        name: "Non-Veg Pickles",
        icon: "🍗",
        items: [
          { id: 'pickle-chicken', name: 'Chicken Pickle', description: 'Spicy boneless chicken pickle', tag: 'POPULAR', tagColor: '#E91E63', image: PRODUCT_IMAGES.pickles.chicken },
          { id: 'pickle-countrychicken', name: 'Country Chicken Pickle', description: 'Desi chicken with country spices', tag: 'DESI', tagColor: '#C2185B', image: PRODUCT_IMAGES.pickles.chicken },
          { id: 'pickle-chickenfry', name: 'Chicken Fry Pickle', description: 'Crispy fried chicken pickle', tag: 'CRISPY', tagColor: '#AD1457', image: PRODUCT_IMAGES.pickles.chicken },
          { id: 'pickle-mutton', name: 'Mutton Pickle', description: 'Premium goat meat pickle', tag: 'PREMIUM', tagColor: '#9C27B0', image: PRODUCT_IMAGES.pickles.mutton },
          { id: 'pickle-countrymutton', name: 'Country Mutton Pickle', description: 'Desi goat with traditional spices', tag: 'DESI', tagColor: '#7B1FA2', image: PRODUCT_IMAGES.pickles.mutton },
          { id: 'pickle-fish', name: 'Fish Pickle', description: 'Fresh fish in spicy marinade', tag: 'SEAFOOD', tagColor: '#00BCD4', image: PRODUCT_IMAGES.pickles.fish },
          { id: 'pickle-countryfish', name: 'Country Fish Pickle', description: 'River fish with village spices', tag: 'SPECIAL', tagColor: '#0097A7', image: PRODUCT_IMAGES.pickles.fish },
          { id: 'pickle-fishfry', name: 'Fish Fry Pickle', description: 'Crispy fried fish pickle', tag: 'CRISPY', tagColor: '#00838F', image: PRODUCT_IMAGES.pickles.fish },
          { id: 'pickle-prawn', name: 'Prawn Pickle', description: 'Fresh prawns in traditional spices', tag: 'PREMIUM', tagColor: '#FF5722', image: PRODUCT_IMAGES.pickles.prawn },
          { id: 'pickle-saltedprawn', name: 'Salted Prawn Pickle', description: 'Dry salted prawn pickle', tag: 'DRY', tagColor: '#E64A19', image: PRODUCT_IMAGES.pickles.prawn },
        ]
      }
    ],
    defaultVariants: [
      { size: '250 G', ourPrice: 150, marketPrice: 190 },
      { size: '500 G', ourPrice: 280, marketPrice: 360 },
      { size: '1 KG', ourPrice: 520, marketPrice: 680 },
    ],
    nonVegVariants: [
      { size: '250 G', ourPrice: 220, marketPrice: 280 },
      { size: '500 G', ourPrice: 420, marketPrice: 540 },
      { size: '1 KG', ourPrice: 800, marketPrice: 1020 },
    ]
  },
  karam: {
    title: "Karam Powders",
    subtitle: "Freshly ground spice powders for flavorful meals",
    description: "Traditional spice powders made with premium ingredients",
    image: PRODUCT_IMAGES.karam.category,
    items: [
      { id: 'karam-vepudu', name: 'Vepudu Karam', description: 'Spicy fry powder for rice', tag: 'SPICY', tagColor: '#D32F2F', image: PRODUCT_IMAGES.karam.vepudu },
      { id: 'karam-kandi', name: 'Kandi Podi', description: 'Aromatic toor dal powder', tag: 'CLASSIC', tagColor: '#FF9800', image: PRODUCT_IMAGES.karam.pappula },
      { id: 'karam-pappula', name: 'Pappula Podi', description: 'Mixed lentils spice powder', tag: 'PROTEIN', tagColor: '#FFC107', image: PRODUCT_IMAGES.karam.pappula },
      { id: 'karam-nuvvula', name: 'Nuvvula Karam', description: 'Sesame seeds powder with chilies', tag: 'NUTRITIOUS', tagColor: '#795548', image: PRODUCT_IMAGES.karam.nuvvula },
      { id: 'karam-kobbari', name: 'Kobbari Karam', description: 'Coconut chutney powder', tag: 'SOUTH INDIAN', tagColor: '#8D6E63', image: PRODUCT_IMAGES.karam.kobbari },
      { id: 'karam-karivepaku', name: 'Karivepaku Podi', description: 'Curry leaves powder rich in iron', tag: 'HEALTHY', tagColor: '#4CAF50', image: PRODUCT_IMAGES.karam.karivepaku },
      { id: 'karam-munagaku', name: 'Munagaku Podi', description: 'Moringa leaves powder', tag: 'SUPERFOOD', tagColor: '#8BC34A', image: PRODUCT_IMAGES.karam.munagaku },
      { id: 'karam-gongura', name: 'Gongura Karam', description: 'Tangy sorrel leaves powder', tag: 'TANGY', tagColor: '#689F38', image: PRODUCT_IMAGES.karam.gongura },
      { id: 'karam-pudina', name: 'Pudina Karam', description: 'Fresh mint leaves powder', tag: 'REFRESHING', tagColor: '#00C853', image: PRODUCT_IMAGES.karam.default },
      { id: 'karam-kothimeera', name: 'Kothimeera Karam', description: 'Coriander leaves powder', tag: 'AROMATIC', tagColor: '#76FF03', image: PRODUCT_IMAGES.karam.default },
    ],
    variants: [
      { size: '100 G', ourPrice: 65, marketPrice: 85 },
      { size: '250 G', ourPrice: 150, marketPrice: 195 },
      { size: '500 G', ourPrice: 280, marketPrice: 370 },
    ]
  },
  microgreens: {
    title: "Micro Greens",
    subtitle: "Fresh & nutritious, harvested on your order date",
    description: "Farm fresh microgreens packed with nutrients",
    image: PRODUCT_IMAGES.microgreens.category,
    items: [
      { id: 'micro-sunflower', name: 'Sunflower Microgreens', description: 'Nutty flavor, high in protein & vitamins', tag: 'SUPERFOOD', tagColor: '#FFC107', image: PRODUCT_IMAGES.microgreens.default },
      { id: 'micro-pea', name: 'Pea Shoots', description: 'Sweet & tender, rich in fiber', tag: 'SWEET', tagColor: '#4CAF50', image: PRODUCT_IMAGES.microgreens.default },
      { id: 'micro-radish', name: 'Radish Microgreens', description: 'Spicy kick, great for salads', tag: 'ZESTY', tagColor: '#E91E63', image: PRODUCT_IMAGES.microgreens.default },
      { id: 'micro-fenugreek', name: 'Fenugreek Microgreens', description: 'Traditional methi, aromatic & healthy', tag: 'TRADITIONAL', tagColor: '#795548', image: PRODUCT_IMAGES.microgreens.default },
      { id: 'micro-mustard', name: 'Mustard Microgreens', description: 'Peppery taste, rich in antioxidants', tag: 'SPICY', tagColor: '#FFEB3B', image: PRODUCT_IMAGES.microgreens.default },
      { id: 'micro-broccoli', name: 'Broccoli Microgreens', description: 'Mild flavor, packed with nutrients', tag: 'NUTRITIOUS', tagColor: '#8BC34A', image: PRODUCT_IMAGES.microgreens.default },
      { id: 'micro-amaranth', name: 'Amaranth Microgreens', description: 'Colorful & nutritious red leaves', tag: 'COLORFUL', tagColor: '#9C27B0', image: PRODUCT_IMAGES.microgreens.default },
      { id: 'micro-wheatgrass', name: 'Wheatgrass', description: 'Detox superfood, rich in chlorophyll', tag: 'DETOX', tagColor: '#00E676', image: PRODUCT_IMAGES.microgreens.default },
    ],
    variants: [
      { size: '50 G', ourPrice: 75, marketPrice: 110 },
      { size: '100 G', ourPrice: 140, marketPrice: 200 },
      { size: '200 G', ourPrice: 260, marketPrice: 380 },
    ]
  }
};

const deliveryAreas = [
  'Kukatpally', 'KPHB', 'Hitech City', 'Madhapur', 'Miyapur', 
  'Gachibowli', 'Kondapur', 'Moosapet', 'Chintal', 'Manikonda', 
  'Nizampet', 'Bachupally'
];

// Product Image Component with fallback
const ProductImage = ({ src, alt, className, fallbackIcon = '📦' }) => {
  const [error, setError] = useState(false);
  
  if (error || !src) {
    return (
      <div className={`${className} bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center`}>
        <span className="text-4xl">{fallbackIcon}</span>
      </div>
    );
  }
  
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`${className} object-cover`}
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
      const timer = setTimeout(() => setCurrentScreen('home'), 2500);
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

  // Splash Screen
  if (currentScreen === 'splash') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-800 via-green-700 to-green-600 flex items-center justify-center font-sans">
        <div className="text-center text-white animate-fade-in">
          <div className="w-28 h-28 bg-amber-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <span className="text-6xl">🌾</span>
          </div>
          <h1 className="text-2xl font-bold tracking-wide mb-2">Farm to Home • Pure Quality</h1>
          <p className="text-sm font-medium opacity-90 mb-8 tracking-widest">BIYAM KRISHNA GARI PRODUCTS</p>
          <div className="w-48 h-1.5 bg-white/30 rounded-full mx-auto overflow-hidden">
            <div className="h-full w-1/3 bg-white rounded-full animate-loading"></div>
          </div>
          <p className="text-xs mt-6 tracking-widest opacity-70">Direct from Farm • No Middlemen</p>
        </div>
      </div>
    );
  }

  // Order Success
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-5 font-sans">
        <div className="text-center max-w-sm">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-5xl shadow-xl">✓</div>
          <h2 className="text-2xl font-bold text-green-800 mb-3">Order Placed Successfully!</h2>
          <p className="text-gray-600 mb-6">Your fresh products will be prepared and delivered soon.</p>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-4">
            <p className="text-amber-800 font-bold">📅 Made Fresh For You</p>
            <p className="text-amber-700 text-sm">Manufacturing starts from your order date</p>
          </div>
          <button onClick={() => { setOrderPlaced(false); setShowCheckout(false); setCart([]); setSelectedCategory(null); }} 
                  className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  // Checkout Screen
  if (showCheckout) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans max-w-md mx-auto">
        <div className="bg-white p-4 flex items-center gap-4 border-b sticky top-0 z-50 shadow-sm">
          <button onClick={() => setShowCheckout(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-xl">←</button>
          <h1 className="text-lg font-bold flex-1">Checkout</h1>
        </div>
        
        <div className="p-4 pb-32">
          {/* Order Summary */}
          <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-lg">📦 Order Summary</h3>
            {cart.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
                <ProductImage src={item.product.image} alt={item.product.name} className="w-14 h-14 rounded-xl" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{item.product.name}</p>
                  <p className="text-sm text-gray-500">{item.variant.size} × {item.quantity}</p>
                </div>
                <p className="font-bold text-lg">₹{item.variant.ourPrice * item.quantity}</p>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
              <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>₹{getCartTotal()}</span></div>
              <div className="flex justify-between text-green-600 font-semibold"><span>You Save</span><span>₹{getCartSavings()}</span></div>
              <div className="flex justify-between text-gray-600"><span>Delivery</span><span className="text-green-600 font-medium">FREE</span></div>
              <div className="flex justify-between text-xl font-bold text-gray-900 pt-3 border-t"><span>Total</span><span>₹{getCartTotal()}</span></div>
            </div>
          </div>

          {/* Delivery Form */}
          <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-lg">📍 Delivery Details</h3>
            <input type="text" placeholder="Full Name *" className="w-full p-4 border border-gray-200 rounded-xl mb-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100" />
            <input type="tel" placeholder="Phone Number *" className="w-full p-4 border border-gray-200 rounded-xl mb-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100" />
            <select className="w-full p-4 border border-gray-200 rounded-xl mb-3 bg-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100">
              <option value="">Select Delivery Area *</option>
              {deliveryAreas.map(area => <option key={area} value={area}>{area}</option>)}
            </select>
            <textarea placeholder="Full Address *" className="w-full p-4 border border-gray-200 rounded-xl resize-none focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100" rows={3}></textarea>
          </div>

          {/* Fresh Badge */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 mb-6 flex items-center gap-4">
            <div className="w-14 h-14 bg-amber-400 rounded-xl flex items-center justify-center text-2xl">⏰</div>
            <div>
              <p className="font-bold text-amber-800">Made Fresh On Order</p>
              <p className="text-amber-700 text-sm">Manufacturing date = Your order date</p>
            </div>
          </div>

          <button onClick={() => setOrderPlaced(true)} className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg mb-3 hover:bg-green-700 transition-colors">
            Place Order • ₹{getCartTotal()}
          </button>
          <a href={`https://wa.me/917993822600?text=New Order:%0A${cart.map(i => `${i.product.name} - ${i.variant.size} x ${i.quantity}`).join('%0A')}%0ATotal: ₹${getCartTotal()}`} 
             className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-4 rounded-2xl font-bold text-lg hover:bg-green-600 transition-colors">
            💬 Order via WhatsApp
          </a>
        </div>
      </div>
    );
  }

  // Cart Screen
  if (showCart) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans max-w-md mx-auto">
        <div className="bg-white p-4 flex items-center gap-4 border-b sticky top-0 z-50 shadow-sm">
          <button onClick={() => setShowCart(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-xl">←</button>
          <h1 className="text-lg font-bold flex-1">Your Cart ({getCartItemCount()})</h1>
        </div>
        
        {cart.length === 0 ? (
          <div className="text-center py-20 px-5">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-6xl opacity-40">🛒</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Add fresh farm products!</p>
            <button onClick={() => setShowCart(false)} className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold">
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="p-4 pb-44">
            {cart.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
                <div className="flex gap-4">
                  <ProductImage src={item.product.image} alt={item.product.name} className="w-20 h-20 rounded-xl" />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">{item.product.name}</h4>
                    <p className="text-sm text-gray-500 mb-2">{item.variant.size}</p>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-green-700 text-lg">₹{item.variant.ourPrice}</span>
                      <span className="text-sm text-gray-400 line-through">₹{item.variant.marketPrice}</span>
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-bold">{getDiscount(item.variant.ourPrice, item.variant.marketPrice)}% OFF</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center bg-green-600 rounded-xl overflow-hidden">
                    <button onClick={() => updateCartQuantity(item.product.id, item.variant.size, -1)} className="w-10 h-10 text-white font-bold text-xl hover:bg-green-700">−</button>
                    <span className="w-12 text-center text-white font-bold text-lg">{item.quantity}</span>
                    <button onClick={() => updateCartQuantity(item.product.id, item.variant.size, 1)} className="w-10 h-10 text-white font-bold text-xl hover:bg-green-700">+</button>
                  </div>
                  <p className="font-bold text-xl">₹{item.variant.ourPrice * item.quantity}</p>
                </div>
              </div>
            ))}
            
            {/* Summary */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mt-4">
              <div className="flex justify-between mb-2 text-gray-600"><span>Items ({getCartItemCount()})</span><span>₹{getCartTotal()}</span></div>
              <div className="flex justify-between mb-2"><span className="text-gray-600">Delivery</span><span className="text-green-600 font-semibold">FREE</span></div>
              <div className="flex justify-between text-green-600 font-semibold mb-3"><span>You Save</span><span>₹{getCartSavings()}</span></div>
              <div className="flex justify-between text-xl font-bold pt-3 border-t border-green-200"><span>Grand Total</span><span>₹{getCartTotal()}</span></div>
            </div>
          </div>
        )}

        {cart.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 max-w-md mx-auto">
            <button onClick={() => setShowCheckout(true)} className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-green-700 transition-colors">
              Proceed to Checkout • ₹{getCartTotal()}
            </button>
          </div>
        )}
      </div>
    );
  }

  // Product Detail Modal
  if (selectedProduct) {
    const variants = selectedCategory === 'pickles' 
      ? (['chicken', 'mutton', 'fish', 'prawn'].some(m => selectedProduct.id.includes(m)) 
        ? productsData.pickles.nonVegVariants 
        : productsData.pickles.defaultVariants)
      : selectedCategory === 'karam' 
        ? productsData.karam.variants
        : selectedCategory === 'microgreens'
          ? productsData.microgreens.variants
          : selectedProduct.variants;

    return (
      <div className="min-h-screen bg-gray-50 font-sans max-w-md mx-auto">
        <div className="bg-white/90 backdrop-blur-sm p-4 flex items-center justify-between border-b sticky top-0 z-50">
          <button onClick={() => setSelectedProduct(null)} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-xl">←</button>
          <h1 className="text-lg font-bold">Product Details</h1>
          <button onClick={() => setShowCart(true)} className="relative w-10 h-10 flex items-center justify-center">
            <span className="text-2xl">🛒</span>
            {getCartItemCount() > 0 && <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">{getCartItemCount()}</span>}
          </button>
        </div>
        
        {/* Product Image */}
        <div className="bg-gradient-to-br from-amber-50 via-amber-100 to-orange-50 p-8 flex items-center justify-center relative">
          <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full font-bold shadow-lg">
            {getDiscount(variants[0].ourPrice, variants[0].marketPrice)}% OFF
          </div>
          <div className="w-48 h-48 bg-white rounded-3xl shadow-xl flex items-center justify-center overflow-hidden">
            <ProductImage src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full" />
          </div>
        </div>
        
        {/* Product Info */}
        <div className="bg-white -mt-6 rounded-t-[2rem] p-6 pb-36 shadow-lg">
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-2xl font-bold text-gray-800 flex-1 pr-4">{selectedProduct.name}</h2>
            <span className="px-3 py-1.5 rounded-full text-xs font-bold text-white shadow" style={{backgroundColor: selectedProduct.tagColor}}>{selectedProduct.tag}</span>
          </div>
          <p className="text-gray-600 mb-5 leading-relaxed">{selectedProduct.description}</p>
          
          {/* Fresh Badge */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 mb-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl">🌿</div>
            <div>
              <p className="font-bold text-green-800">Made Fresh On Order</p>
              <p className="text-green-700 text-sm">Manufacturing date = Your order date</p>
            </div>
          </div>

          <h3 className="font-bold text-gray-800 mb-4 text-lg">Select Size</h3>
          
          {variants.map((variant, idx) => (
            <div key={idx} className="border-2 border-gray-100 rounded-2xl p-4 mb-3 flex items-center justify-between hover:border-green-500 transition-all cursor-pointer group">
              <div>
                <p className="font-bold text-gray-800 text-lg">{variant.size}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-2xl font-bold text-green-700">₹{variant.ourPrice}</span>
                  <span className="text-gray-400 line-through">₹{variant.marketPrice}</span>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">{getDiscount(variant.ourPrice, variant.marketPrice)}% OFF</span>
                </div>
              </div>
              <button onClick={() => addToCart(selectedProduct, variant, selectedCategory)} 
                      className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg">
                ADD
              </button>
            </div>
          ))}
        </div>

        {getCartItemCount() > 0 && (
          <div onClick={() => setShowCart(true)} className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md bg-green-600 rounded-2xl p-4 flex justify-between items-center shadow-2xl cursor-pointer z-50">
            <div>
              <span className="text-white font-bold">{getCartItemCount()} items</span>
              <span className="block text-green-200 text-sm">₹{getCartTotal()}</span>
            </div>
            <span className="text-white font-bold bg-green-700 px-4 py-2 rounded-xl">View Cart →</span>
          </div>
        )}
      </div>
    );
  }

  // Pickle Subcategory View
  if (selectedCategory === 'pickles' && selectedSubcategory) {
    const subcat = productsData.pickles.subcategories.find(s => s.name === selectedSubcategory);
    
    return (
      <div className="min-h-screen bg-gray-50 font-sans max-w-md mx-auto">
        <div className="bg-white p-4 flex items-center justify-between border-b sticky top-0 z-50 shadow-sm">
          <button onClick={() => setSelectedSubcategory(null)} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-xl">←</button>
          <h1 className="text-lg font-bold">{subcat.icon} {subcat.name}</h1>
          <button onClick={() => setShowCart(true)} className="relative w-10 h-10 flex items-center justify-center">
            <span className="text-2xl">🛒</span>
            {getCartItemCount() > 0 && <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">{getCartItemCount()}</span>}
          </button>
        </div>

        <div className="p-4 pb-28">
          <div className="grid grid-cols-2 gap-4">
            {subcat.items.map(product => {
              const variants = subcat.name === 'Non-Veg Pickles' ? productsData.pickles.nonVegVariants : productsData.pickles.defaultVariants;
              return (
                <div key={product.id} onClick={() => setSelectedProduct(product)} 
                     className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-36 flex items-center justify-center p-4">
                      <ProductImage src={product.image} alt={product.name} className="w-24 h-24 rounded-xl" />
                    </div>
                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-[11px] px-2 py-1 rounded-lg font-bold shadow">
                      {getDiscount(variants[0].ourPrice, variants[0].marketPrice)}% OFF
                    </span>
                  </div>
                  <div className="p-3">
                    <h4 className="font-bold text-gray-800 text-sm mb-1">{product.name}</h4>
                    <p className="text-gray-500 text-xs mb-2">250g / 500g / 1kg</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-green-700">₹{variants[0].ourPrice}</span>
                        <span className="text-gray-400 line-through text-xs ml-1">₹{variants[0].marketPrice}</span>
                      </div>
                      <button onClick={(e) => { e.stopPropagation(); addToCart(product, variants[0], 'pickles'); }} 
                              className="border-2 border-green-600 text-green-600 px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-green-600 hover:text-white transition-colors">
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {getCartItemCount() > 0 && (
          <div onClick={() => setShowCart(true)} className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md bg-green-600 rounded-2xl p-4 flex justify-between items-center shadow-2xl cursor-pointer z-50">
            <div>
              <span className="text-white font-bold">{getCartItemCount()} items</span>
              <span className="block text-green-200 text-sm">₹{getCartTotal()}</span>
            </div>
            <span className="text-white font-bold bg-green-700 px-4 py-2 rounded-xl">View Cart →</span>
          </div>
        )}
      </div>
    );
  }

  // Category Views
  if (selectedCategory) {
    const category = productsData[selectedCategory];
    
    // Pickles with Subcategories
    if (selectedCategory === 'pickles') {
      return (
        <div className="min-h-screen bg-gray-50 font-sans max-w-md mx-auto">
          <div className="bg-white p-4 flex items-center justify-between border-b sticky top-0 z-50 shadow-sm">
            <button onClick={() => setSelectedCategory(null)} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-xl">←</button>
            <h1 className="text-lg font-bold">🥒 Homemade Pickles</h1>
            <button onClick={() => setShowCart(true)} className="relative w-10 h-10 flex items-center justify-center">
              <span className="text-2xl">🛒</span>
              {getCartItemCount() > 0 && <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">{getCartItemCount()}</span>}
            </button>
          </div>

          <div className="p-4 pb-28">
            {category.subcategories.map((subcat, idx) => (
              <div key={idx} className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">{subcat.icon}</div>
                  <h3 className="text-lg font-bold text-green-800">{subcat.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {subcat.items.slice(0, 4).map(product => {
                    const variants = subcat.name === 'Non-Veg Pickles' ? category.nonVegVariants : category.defaultVariants;
                    return (
                      <div key={product.id} onClick={() => { setSelectedSubcategory(subcat.name); setSelectedProduct(product); }} 
                           className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all cursor-pointer">
                        <div className="bg-amber-50 w-full h-20 rounded-lg flex items-center justify-center mb-2 overflow-hidden">
                          <ProductImage src={product.image} alt={product.name} className="w-16 h-16 rounded-lg" />
                        </div>
                        <h4 className="font-bold text-gray-800 text-sm truncate">{product.name}</h4>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="font-bold text-green-700 text-sm">₹{variants[0].ourPrice}</span>
                          <span className="text-gray-400 line-through text-xs">₹{variants[0].marketPrice}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {subcat.items.length > 4 && (
                  <button onClick={() => setSelectedSubcategory(subcat.name)} 
                          className="w-full mt-3 text-green-700 font-bold text-sm py-3 border-2 border-green-200 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
                    View All {subcat.items.length} {subcat.name} →
                  </button>
                )}
              </div>
            ))}
          </div>

          {getCartItemCount() > 0 && (
            <div onClick={() => setShowCart(true)} className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md bg-green-600 rounded-2xl p-4 flex justify-between items-center shadow-2xl cursor-pointer z-50">
              <div>
                <span className="text-white font-bold">{getCartItemCount()} items</span>
                <span className="block text-green-200 text-sm">₹{getCartTotal()}</span>
              </div>
              <span className="text-white font-bold bg-green-700 px-4 py-2 rounded-xl">View Cart →</span>
            </div>
          )}
        </div>
      );
    }

    // Karam & Microgreens Grid
    if (selectedCategory === 'karam' || selectedCategory === 'microgreens') {
      return (
        <div className="min-h-screen bg-gray-50 font-sans max-w-md mx-auto">
          <div className="bg-white p-4 flex items-center justify-between border-b sticky top-0 z-50 shadow-sm">
            <button onClick={() => setSelectedCategory(null)} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-xl">←</button>
            <h1 className="text-lg font-bold">{category.title}</h1>
            <button onClick={() => setShowCart(true)} className="relative w-10 h-10 flex items-center justify-center">
              <span className="text-2xl">🛒</span>
              {getCartItemCount() > 0 && <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">{getCartItemCount()}</span>}
            </button>
          </div>

          <div className="bg-gradient-to-r from-green-700 to-green-600 p-5">
            <p className="text-green-100 text-center">{category.subtitle}</p>
          </div>

          <div className="p-4 pb-28">
            <div className="grid grid-cols-2 gap-4">
              {category.items.map(product => (
                <div key={product.id} onClick={() => setSelectedProduct(product)} 
                     className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-green-700 to-green-600 h-28 flex items-center justify-center">
                      <ProductImage src={product.image} alt={product.name} className="w-20 h-20 rounded-xl" />
                    </div>
                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-[11px] px-2 py-1 rounded-lg font-bold shadow">
                      {getDiscount(category.variants[0].ourPrice, category.variants[0].marketPrice)}% OFF
                    </span>
                  </div>
                  <div className="p-3">
                    <h4 className="font-bold text-gray-800 text-sm mb-1">{product.name}</h4>
                    <p className="text-gray-500 text-xs mb-2">{category.variants.map(v => v.size).join(' / ')}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-green-700">₹{category.variants[0].ourPrice}</span>
                        <span className="text-gray-400 line-through text-xs ml-1">₹{category.variants[0].marketPrice}</span>
                      </div>
                      <button onClick={(e) => { e.stopPropagation(); addToCart(product, category.variants[0], selectedCategory); }} 
                              className="border-2 border-green-600 text-green-600 px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-green-600 hover:text-white transition-colors">
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {getCartItemCount() > 0 && (
            <div onClick={() => setShowCart(true)} className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md bg-green-600 rounded-2xl p-4 flex justify-between items-center shadow-2xl cursor-pointer z-50">
              <div>
                <span className="text-white font-bold">{getCartItemCount()} items</span>
                <span className="block text-green-200 text-sm">₹{getCartTotal()}</span>
              </div>
              <span className="text-white font-bold bg-green-700 px-4 py-2 rounded-xl">View Cart →</span>
            </div>
          )}
        </div>
      );
    }

    // Rice & Urad List View
    return (
      <div className="min-h-screen bg-gray-50 font-sans max-w-md mx-auto">
        <div className="bg-white p-4 flex items-center justify-between border-b sticky top-0 z-50 shadow-sm">
          <button onClick={() => setSelectedCategory(null)} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-xl">←</button>
          <h1 className="text-lg font-bold">{category.title}</h1>
          <button onClick={() => setShowCart(true)} className="relative w-10 h-10 flex items-center justify-center">
            <span className="text-2xl">🛒</span>
            {getCartItemCount() > 0 && <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">{getCartItemCount()}</span>}
          </button>
        </div>

        <div className="bg-gradient-to-r from-green-700 to-green-600 p-6">
          <h2 className="text-white font-bold text-xl">{category.title}</h2>
          <p className="text-green-100">{category.subtitle}</p>
        </div>

        <div className="p-4 pb-28">
          {category.items.map(product => (
            <div key={product.id} onClick={() => setSelectedProduct(product)} 
                 className="bg-white rounded-2xl overflow-hidden shadow-sm mb-4 hover:shadow-lg transition-all cursor-pointer">
              <div className="flex">
                <div className="w-32 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center p-4 relative">
                  <ProductImage src={product.image} alt={product.name} className="w-24 h-24 rounded-xl" />
                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-lg font-bold shadow">
                    {getDiscount(product.variants[0].ourPrice, product.variants[0].marketPrice)}% OFF
                  </span>
                </div>
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-gray-800 text-lg">{product.name}</h4>
                    <span className="text-[10px] px-2 py-1 rounded-full text-white font-bold" style={{backgroundColor: product.tagColor}}>{product.tag}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-2">{product.description}</p>
                  <p className="text-gray-400 text-xs mb-3">{product.variants.map(v => v.size).join(' • ')}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-green-700 text-xl">₹{product.variants[0].ourPrice}</span>
                      <span className="text-gray-400 line-through text-sm ml-2">₹{product.variants[0].marketPrice}</span>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); addToCart(product, product.variants[0], selectedCategory); }} 
                            className="border-2 border-green-600 text-green-600 px-4 py-2 rounded-xl font-bold hover:bg-green-600 hover:text-white transition-colors">
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {getCartItemCount() > 0 && (
          <div onClick={() => setShowCart(true)} className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md bg-green-600 rounded-2xl p-4 flex justify-between items-center shadow-2xl cursor-pointer z-50">
            <div>
              <span className="text-white font-bold">{getCartItemCount()} items</span>
              <span className="block text-green-200 text-sm">₹{getCartTotal()}</span>
            </div>
            <span className="text-white font-bold bg-green-700 px-4 py-2 rounded-xl">View Cart →</span>
          </div>
        )}
      </div>
    );
  }

  // Home Screen
  return (
    <div className="min-h-screen bg-gray-50 font-sans max-w-md mx-auto pb-28">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-amber-400 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-3xl">🌾</span>
          </div>
          <div className="text-white">
            <h1 className="font-bold text-lg leading-tight">Farm to Home • Pure Quality</h1>
            <p className="text-xs text-green-200 tracking-wider">BIYAM KRISHNA GARI PRODUCTS</p>
          </div>
        </div>
        <button onClick={() => setShowCart(true)} className="relative w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
          <span className="text-2xl">🛒</span>
          {getCartItemCount() > 0 && <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">{getCartItemCount()}</span>}
        </button>
      </div>

      {/* Hero Banner */}
      <div className="p-4">
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl p-6 relative overflow-hidden shadow-lg">
          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-amber-200/50 rounded-full"></div>
          <div className="absolute right-4 bottom-4 text-7xl opacity-30">🌾</div>
          <span className="inline-block bg-green-600 text-white text-xs px-4 py-1.5 rounded-full font-bold shadow">🎉 FRESH PROMISE</span>
          <h2 className="text-2xl font-bold text-green-800 mt-3">Made Fresh On Order</h2>
          <p className="text-green-700 mb-4">Manufacturing date = Your order date</p>
          <div className="flex flex-wrap gap-3 text-xs font-semibold">
            <span className="bg-white/70 text-green-700 px-3 py-1.5 rounded-full">✓ No Middlemen</span>
            <span className="bg-white/70 text-green-700 px-3 py-1.5 rounded-full">✓ Free Delivery</span>
            <span className="bg-white/70 text-green-700 px-3 py-1.5 rounded-full">✓ Pure Quality</span>
          </div>
        </div>
      </div>

      {/* USP Bar */}
      <div className="flex justify-around py-5 bg-white mx-4 rounded-2xl shadow-sm">
        {[{icon: '🌿', text: '100% Pure'}, {icon: '🚫', text: 'No Chemicals'}, {icon: '🚚', text: 'Free Delivery'}, {icon: '💰', text: 'Best Price'}].map((item, i) => (
          <div key={i} className="text-center">
            <span className="text-2xl block mb-1">{item.icon}</span>
            <p className="text-[11px] text-gray-600 font-semibold">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-1">Shop by Category</h2>
        <p className="text-gray-500 text-sm mb-4">Fresh from our farm to your home</p>
        
        <div className="space-y-4">
          {Object.entries(productsData).map(([key, cat]) => (
            <div key={key} onClick={() => setSelectedCategory(key)} 
                 className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer">
              <div className="flex items-center">
                <div className={`w-28 h-28 flex items-center justify-center relative ${
                  key === 'rice' ? 'bg-gradient-to-br from-amber-100 to-amber-50' : 
                  key === 'urad' ? 'bg-gradient-to-br from-orange-100 to-orange-50' : 
                  key === 'pickles' ? 'bg-gradient-to-br from-green-100 to-green-50' : 
                  key === 'karam' ? 'bg-gradient-to-br from-red-100 to-red-50' : 
                  'bg-gradient-to-br from-emerald-100 to-emerald-50'
                }`}>
                  <ProductImage src={cat.image} alt={cat.title} className="w-20 h-20 rounded-xl" />
                </div>
                <div className="flex-1 p-4">
                  <h3 className="font-bold text-gray-800 text-lg">{cat.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{cat.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 text-sm font-semibold">
                      {cat.items?.length || cat.subcategories?.reduce((a, s) => a + s.items.length, 0)} products
                    </span>
                    <span className="bg-green-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold">View →</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price Compare */}
      <div className="mx-4 mb-4 bg-gradient-to-r from-green-700 to-green-600 rounded-2xl p-6 text-white shadow-lg">
        <h3 className="font-bold text-center mb-4 text-lg">💡 Why Choose Us?</h3>
        <div className="bg-white/20 rounded-2xl p-5 flex items-center justify-around backdrop-blur">
          <div className="text-center">
            <p className="text-xs opacity-80 mb-1">Market Price</p>
            <p className="text-2xl font-bold line-through opacity-60">₹1,950</p>
          </div>
          <div className="text-3xl font-bold opacity-50">VS</div>
          <div className="text-center">
            <p className="text-xs opacity-80 mb-1">Our Price</p>
            <p className="text-3xl font-bold">₹1,625</p>
            <p className="text-amber-300 text-sm font-bold mt-1">Save ₹325!</p>
          </div>
        </div>
        <p className="text-center text-green-200 text-sm mt-3">25kg Semi Polished Rice</p>
      </div>

      {/* Delivery Areas */}
      <div className="px-4 mb-4">
        <h3 className="font-bold text-gray-800 mb-3 text-lg">🚚 Free Delivery Areas</h3>
        <div className="flex flex-wrap gap-2">
          {deliveryAreas.map(area => (
            <span key={area} className="bg-white px-4 py-2 rounded-full text-sm text-gray-600 shadow-sm font-medium">{area}</span>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="flex gap-3 px-4 pb-4">
        <a href="tel:+917993822600" className="flex-1 flex items-center justify-center gap-2 py-4 bg-white border-2 border-green-600 rounded-2xl text-green-700 font-bold shadow-sm hover:bg-green-50 transition-colors">
          📞 Call Us
        </a>
        <a href="https://wa.me/917993822600" className="flex-1 flex items-center justify-center gap-2 py-4 bg-green-500 rounded-2xl text-white font-bold shadow-lg hover:bg-green-600 transition-colors">
          💬 WhatsApp
        </a>
      </div>

      {/* Floating Cart */}
      {getCartItemCount() > 0 && (
        <div onClick={() => setShowCart(true)} className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md bg-green-600 rounded-2xl p-4 flex justify-between items-center shadow-2xl cursor-pointer z-50">
          <div>
            <span className="text-white font-bold">{getCartItemCount()} items</span>
            <span className="block text-green-200 text-sm">Saving ₹{getCartSavings()}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white text-xl font-bold">₹{getCartTotal()}</span>
            <span className="text-white font-bold bg-green-700 px-4 py-2 rounded-xl">View Cart →</span>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
        @keyframes loading { 0% { transform: translateX(-100%); } 100% { transform: translateX(300%); } }
        .animate-loading { animation: loading 1.5s ease-in-out infinite; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
      `}</style>
    </div>
  );
}
