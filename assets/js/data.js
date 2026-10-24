// UP Purreins & Purreins Frequency - Central Data Store
// Curated pure-living catalog: Curd Soaps, Pasture Duck Eggs, GOTS Quilt Rolls & Organic Moringa/Tulsi Leaves

const BRAND_CONFIG = {
  brandName: "UP Purreins",
  companyName: "Purreins Frequency",
  tagline: "Purreins Frequency, waves of raw & real resources.",
  description: "Handcrafted curd soaps, pasture duck eggs in straw, GOTS & OEKO-TEX certified artisanal quilt rolls, and sun-cured moringa and sacred tulsi leaves.",
  currency: "INR",
  currencySymbol: "INR ",
  phone: "+91 72042 71822",
  whatsappNumber: "917204271822",
  email: "look@uppurreins.com",
  wholesaleEmail: "look@uppurreins.com",
  address: "347/A Royalwings Nilayam, Kallapara, Sadak road, Kizhakkambalam, Oorakadu, Kunnathunad, Ernakulam 683562",
  hours: "Every Day: 07:00 – 17:00",
  bankDetails: {
    accountName: "Purreins Frequency",
    accountNumber: "Contact for Account No",
    bankName: "Direct Bank Transfer",
    ifscCode: "Contact for IFSC",
    branch: "Ernakulam",
    accountType: "Current Account",
    paymentLink: "" // Add direct payment link URL here
  },
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    pinterest: "https://pinterest.com"
  }
};

const CATEGORIES = [
  { id: "all", name: "All Offerings", icon: "sparkles" },
  { id: "produce", name: "Microgreens & Mushrooms", icon: "sprout" },
  { id: "bundles", name: "Farmstead Hampers", icon: "gift" },
  { id: "soaps", name: "Curd Soaps", icon: "droplets" },
  { id: "duck-eggs", name: "Pasture Duck Eggs", icon: "egg" },
  { id: "quilts", name: "Artisanal Quilt Rolls", icon: "scissors" },
  { id: "herbs", name: "Herbal Leaves", icon: "leaf" }
];

// Master 6 Pastel Colorways Palette & Signature Nature Prints
const PASTEL_COLORWAYS = [
  { id: "lavender", name: "Pastel Lavender", motif: "Dreamy Clouds", hex: "#D8CCE4", image: "assets/images/lookbook-lavender-clouds.jpg" },
  { id: "bluegrey", name: "Pastel Misty Blue-Grey", motif: "Crescent Moons", hex: "#C6D2DC", image: "assets/images/lookbook-bluegrey-moons.jpg" },
  { id: "pink",     name: "Pastel Blush Pink", motif: "Gentle Swirls", hex: "#F0C4CE", image: "assets/images/lookbook-pink-swirls.jpg" },
  { id: "mint",     name: "Pastel Mint Green", motif: "Minimalist Trees", hex: "#C5E0C2", image: "assets/images/lookbook-mint-trees.jpg" },
  { id: "peach",    name: "Pastel Peach", motif: "Radiant Suns", hex: "#F4C6A8", image: "assets/images/lookbook-peach-suns.jpg" },
  { id: "yellow",   name: "Pastel Butter Yellow", motif: "Five-Pointed Stars", hex: "#F4E098", image: "assets/images/lookbook-yellow-stars.jpg" }
];

const PRODUCTS = [
  // CURATED FARMSTEAD HAMPERS (Each with unique image)
  {
    id: "bundle-farmstead-harvest",
    name: "The Farmstead Harvest Hamper",
    category: "bundles",
    price: 4500,
    unit: "Artisanal Gift Hamper with Eggs, Curd Soaps & Leaves",
    badge: "Signature Hamper",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 47,
    image: "assets/images/hero-basket.jpg?v=4",
    description: "Our signature farmstead gift hamper: fresh pasture duck eggs, two cold-process curd soaps, sun-cured tulsi and moringa leaves, and an earthen pot of fresh setting curd.",
    ingredients: "6 Pasture Duck Eggs in Straw + 2 Farmstead Curd Soaps + Sun-Cured Sacred Tulsi & Moringa White Packets + Earthen Setting Curd Pot.",
    benefits: ["100% natural, biodegradable materials", "Soothes the senses with natural earthy textures", "Direct farm-to-table presentation completely plastic-free"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "bundle-heirloom-quilt-hamper",
    name: "The Artisanal Quilt Roll & Curd Soap Hamper",
    category: "bundles",
    price: 5800,
    unit: "Collector Living Quilt & Soap Hamper",
    badge: "Artisan Heirloom",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 22,
    image: "assets/images/quilt-hamper.jpg?v=clean_5",
    description: "The complete farmstead set: an individual quilt (60\" × 90\") filled with Tamizhnad Ilavam Panju silk cotton, two cold-process curd soaps, and sun-cured herbal leaves in non-plastic packs.",
    ingredients: "Individual (60\" × 90\") Tamizhnad Ilavam Panju Quilt Roll + 2 Cold-Process Curd Soaps + Sun-Cured Herbal Leaves in Non-Plastic Packs.",
    benefits: ["Natural Ilavam Panju (silk cotton harvested from Tamizhnad) filling encased in GOTS & OEKO-TEX certified cotton fabric", "100% eco-friendly labels & packaging — strictly NO PLASTIC", "Handcrafted durability built to last generations"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: false
  },
  {
    id: "bundle-nest-crate",
    name: "The Pasture Duck Egg & Curd Soap Nest",
    category: "bundles",
    price: 950,
    unit: "Straw Nest with 12 Eggs & Curd Soap",
    badge: "Daily Ritual",
    badgeType: "featured",
    rating: 4.9,
    reviewsCount: 34,
    image: "assets/images/egg-soap-nest.jpg?v=curd_only_5",
    description: "A fresh morning pairing: 12 pasture duck eggs, an artisanal curd soap bar, and sun-cured sacred tulsi leaves.",
    ingredients: "12 Pasture Duck Eggs + 1 Farmstead Curd Soap Bar + Sun-Cured Sacred Tulsi in Golden Straw Nest.",
    benefits: ["Rich in natural nutrients and skin-loving lipids", "Free of chemical pesticides or artificial additives", "Packaged in eco-friendly compostable straw bedding"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },

  // CURD SOAPS (Sculptural 3D Bubble Cubes • 3x3 rounded spheres all around, wrapped in plain unbranded organic paper stating ONLY the botanical name with NO word 'Soap', tied with seed-flecked cotton thread)
  {
    id: "soap-curd",
    name: "Curd",
    category: "soaps",
    price: 440,
    unit: "120g 3D Bubble Cube",
    badge: "Creamy Milky Ivory",
    badgeType: "featured",
    rating: 4.9,
    reviewsCount: 38,
    image: "assets/images/bubble-cube-curd.jpg?v=1",
    description: "Sculptural 3D bubble cube soap cold-processed solely with fresh cold-pressed coconut oil and farmstead fresh curd. Creamy ivory tone with rounded bubble spheres that double as a gentle acupressure massage bar. Aged 6 weeks for a rich, skin-softening lather.",
    ingredients: "Fresh Cold-Pressed Coconut Oil, Farmstead Fresh Organic Curd.",
    benefits: ["3D bubble spheres provide a gentle, relaxing skin massage", "Natural lactic acid from living curd softens and clarifies", "Gentle everyday lather for sensitive skin"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "soap-banana",
    name: "Banana",
    category: "soaps",
    price: 440,
    unit: "120g 3D Bubble Cube",
    badge: "Lush Leaf Green & Warm Yellow",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 42,
    image: "assets/images/bubble-cube-banana.jpg?v=1",
    description: "Cold-process 3D bubble cube soap made with fresh cold-pressed coconut oil, fresh farm curd, and fresh banana leaves. Leafy green tone with rounded spheres for an invigorating massage lather.",
    ingredients: "Fresh Cold-Pressed Coconut Oil, Farmstead Fresh Organic Curd, Fresh Farm-Harvested Banana Leaves.",
    benefits: ["Natural plant enzymes from fresh banana leaves clarify the skin", "Tactile 3D bubble contours gently stimulate circulation", "Refreshing, nourishing daily body cleanse"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "soap-bamboo",
    name: "Bamboo",
    category: "soaps",
    price: 440,
    unit: "120g 3D Bubble Cube",
    badge: "Pale Yellow-Green",
    badgeType: "featured",
    rating: 4.9,
    reviewsCount: 36,
    image: "assets/images/bubble-cube-bamboo.jpg?v=1",
    description: "Cold-process 3D bubble cube soap crafted with fresh cold-pressed coconut oil, fresh farm curd, and organic bamboo silica. Soft pale yellowish-green hue with rounded spheres for a gentle massage cleanse.",
    ingredients: "Fresh Cold-Pressed Coconut Oil, Farmstead Fresh Organic Curd, Organic Farm Bamboo Silica.",
    benefits: ["Natural bamboo silica strengthens and smooths skin texture", "3D rounded spheres provide a relaxing bath massage", "Mineral-rich and gentle on sensitive skin"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "soap-moringa",
    name: "Moringa",
    category: "soaps",
    price: 440,
    unit: "120g 3D Bubble Cube",
    badge: "Textured Herbal Green",
    badgeType: "organic",
    rating: 4.9,
    reviewsCount: 29,
    image: "assets/images/bubble-cube-moringa.jpg?v=1",
    description: "Nutrient-packed cold-process 3D bubble cube soap crafted with fresh cold-pressed coconut oil, fresh farm curd, and moringa leaves from our farmstead trees. Herbal green tone with natural moringa speckles.",
    ingredients: "Fresh Cold-Pressed Coconut Oil, Farmstead Fresh Organic Curd, Organic Farm-Harvested Moringa Leaves.",
    benefits: ["Dense with natural vitamins and antioxidants", "3D bubble contours provide an invigorating massage", "Nourishes and revitalizes tired skin"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "soap-dry-grass",
    name: "Dry Grass",
    category: "soaps",
    price: 410,
    unit: "120g 3D Bubble Cube",
    badge: "Green-Tinted Meadow",
    badgeType: "organic",
    rating: 4.8,
    reviewsCount: 24,
    image: "assets/images/bubble-cube-dry-grass.jpg?v=1",
    description: "Grounding cold-process 3D bubble cube soap made with fresh cold-pressed coconut oil, fresh farm curd, and sun-cured native meadow grass. Earthy green-tinted beige tone with fine wild grass fibers.",
    ingredients: "Fresh Cold-Pressed Coconut Oil, Farmstead Fresh Organic Curd, Solar-Cured Native Dry Grass.",
    benefits: ["Fine natural grass fibers gently buff and smooth the skin", "Tactile bubble spheres soothe and relax during bath", "Earthy, calming botanical cleanse"],
    inStock: true,
    isFeatured: false,
    wholesaleAvailable: true
  },
  {
    id: "soap-turmeric",
    name: "Turmeric",
    category: "soaps",
    price: 440,
    unit: "120g 3D Bubble Cube",
    badge: "Warm Earthy Yellow",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 31,
    image: "assets/images/bubble-cube-turmeric.jpg?v=1",
    description: "Brightening cold-process 3D bubble cube soap crafted with fresh cold-pressed coconut oil, fresh farm curd, and whole native turmeric. Warm golden ochre hue with rounded spheres for an invigorating cleanse.",
    ingredients: "Fresh Cold-Pressed Coconut Oil, Farmstead Fresh Organic Curd, Organically Grown Native Turmeric.",
    benefits: ["Native turmeric curcumin helps brighten and even skin tone", "3D bubble contours stimulate circulation while lathering", "Warm, clarifying lather for radiant skin"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "soap-coffee",
    name: "Coffee",
    category: "soaps",
    price: 440,
    unit: "120g 3D Bubble Cube",
    badge: "Deep Espresso Brown",
    badgeType: "organic",
    rating: 4.9,
    reviewsCount: 27,
    image: "assets/images/bubble-cube-coffee.jpg?v=1",
    description: "Exfoliating cold-process 3D bubble cube soap crafted with fresh cold-pressed coconut oil, fresh farm curd, and freshly ground Arabica coffee. Deep espresso brown shade with roasted coffee grounds for a buffing massage.",
    ingredients: "Fresh Cold-Pressed Coconut Oil, Farmstead Fresh Organic Curd, Freshly Ground Arabica Coffee.",
    benefits: ["Fine coffee grounds gently exfoliate and tone skin", "3D bubble spheres double as an acupressure body massage bar", "Energizing and refreshing shower experience"],
    inStock: true,
    isFeatured: false,
    wholesaleAvailable: true
  },


  // PASTURE DUCK EGGS
  {
    id: "eggs-pasture-duck-6",
    name: "Pasture-Roaming Duck Eggs (Half Dozen • 6 Eggs)",
    category: "duck-eggs",
    price: 220,
    unit: "6 Jumbo Eggs in Golden Meadow Straw",
    badge: "Pasture Roaming",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 38,
    image: "assets/images/duck-eggs.jpg",
    description: "Half dozen (6 jumbo eggs) rich, creamy duck eggs from heritage white Pekin ducks roaming freely along organic permaculture wetland banks. Nestled safely in clean natural golden straw.",
    ingredients: "6 Free-Range Pasture-Raised Organic Duck Eggs in Straw.",
    benefits: ["Double the Omega-3 fatty acids and vitamin D of chicken eggs", "Rich golden yolks high in choline for brain health", "Incredible richness for baking and wholesome cooking"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "eggs-pasture-duck-24",
    name: "Pasture-Roaming Duck Eggs — Farmstead Pack (24 Eggs / 2 Dozen)",
    category: "duck-eggs",
    price: 950,
    unit: "24 Jumbo Eggs in Natural Meadow Straw",
    badge: "Family Pack",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 19,
    image: "assets/images/duck-eggs.jpg",
    description: "Two full dozen (24 jumbo eggs) fresh pasture-roaming duck eggs nestled securely in clean golden meadow straw. Specially curated for families, healthy kitchens, and gourmet baking.",
    ingredients: "24 Free-Range Pasture-Raised Organic Duck Eggs + Natural Golden Straw Bedding.",
    benefits: ["Direct farm harvest with maximum freshness and richness", "High in natural vitamins A, B12, and healthy fatty acids", "Eco-friendly compostable straw cushioning"],
    inStock: true,
    isFeatured: false,
    wholesaleAvailable: true
  },

  // ARTISANAL QUILT ROLLS & ORGANIC COTTON LINEN (4 Distinct Products)
  {
    id: "quilt-heirloom-kids",
    name: "Heirloom Artisanal Quilt — Kids (40\" × 60\")",
    category: "quilts",
    price: 5400,
    unit: "40\" × 60\" Solid Pastel Kids Quilt • Tamizhnad Ilavam Panju",
    badge: "For Kids & Puppies",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 16,
    image: "assets/images/lookbook-lavender-clouds.jpg?v=1",
    colorways: PASTEL_COLORWAYS,
    description: "Handcrafted solid pastel kids quilt filled with 100% natural Ilavam Panju (pure silk cotton harvested from Tamizhnad) and encased in ultra-soft, brushed organically dyed solid pastel cotton fabric (available in all 6 pastel shades: Pastel Lavender, Pastel Misty Blue-Grey, Pastel Blush Pink, Pastel Mint Green, Pastel Peach, and Pastel Butter Yellow — our quilts are 100% solid pastel, completely unprinted). While the handcrafted quilt itself is not separately certified, the organic cotton fabric it is made from is GOTS and OEKO-TEX Standard 100 certified. Includes a handcrafted cotton tote bag.",
    ingredients: "Natural Ilavam Panju (Silk Cotton harvested from Tamizhnad) Filling + Handcrafted from 100% Solid Pastel GOTS & OEKO-TEX Certified Organic Cotton Fabric, organically dyed.",
    benefits: ["100% solid pastel brushed cotton with pure Tamizhnad Ilavam Panju (silk cotton) filling", "Crafted from GOTS & OEKO-TEX certified fabric", "Available in all 6 soothing pastel shades • Kids size (40\" × 60\")"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: false
  },
  {
    id: "quilt-heirloom-individual",
    name: "Heirloom Artisanal Quilt — Individual (60\" × 90\")",
    category: "quilts",
    price: 5800,
    unit: "60\" × 90\" Solid Pastel Individual Quilt • Tamizhnad Ilavam Panju",
    badge: "Pastel Misty Blue • Solid Quilt",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 21,
    image: "assets/images/lookbook-bluegrey-moons.jpg?v=1",
    colorways: PASTEL_COLORWAYS,
    description: "Master solid pastel individual quilt (60\" × 90\") filled with 100% natural Ilavam Panju (silk cotton harvested from Tamizhnad) and encased in ultra-soft, brushed organically dyed solid pastel cotton fabric (available in all 6 pastel shades: Pastel Misty Blue-Grey, Pastel Lavender, Pastel Blush Pink, Pastel Mint Green, Pastel Peach, and Pastel Butter Yellow — our quilts are 100% solid pastel, completely unprinted). While the handcrafted quilt itself is not separately certified, the organic cotton fabric it is made from is GOTS and OEKO-TEX Standard 100 certified. Finished with 100% eco-friendly plastic-free labels and a handcrafted tote carry bag.",
    ingredients: "Natural Ilavam Panju (Silk Cotton harvested from Tamizhnad) Filling + Handcrafted from 100% Solid Pastel GOTS & OEKO-TEX Certified Organic Cotton Fabric, organically dyed.",
    benefits: ["100% solid pastel brushed cotton with pure Tamizhnad Ilavam Panju filling for cloud-like comfort", "Crafted from GOTS & OEKO-TEX certified fabric", "Available in all 6 soothing pastel shades • Individual size (60\" × 90\")"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: false
  },
  {
    id: "quilt-throw-kids",
    name: "Organically Dyed Throw Blanket — Kids (40\" × 60\")",
    category: "quilts",
    price: 2400,
    unit: "40\" × 60\" Kids Throw • Solid Pastel One Side, Printed Other Side",
    badge: "Pastel Blush Pink • Swirls Print",
    badgeType: "organic",
    rating: 4.8,
    reviewsCount: 14,
    image: "assets/images/lookbook-pink-swirls.jpg?v=1",
    colorways: PASTEL_COLORWAYS,
    description: "Lightweight, ultra-soft reversible kids throw blanket handcrafted from organic cotton thread yarns: solid pastel brushed cotton on one side and white with delicate pastel nature prints on the other side (Pastel Blush Pink with Swirls, Pastel Mint Green with Trees, Pastel Lavender with Clouds, Pastel Misty Blue-Grey with Crescent Moons, Pastel Peach with Suns, and Pastel Butter Yellow with Stars). While the finished throw itself is not separately certified, the organic fabric it is made from is GOTS and OEKO-TEX Standard 100 certified. Includes a handcrafted cotton tote bag.",
    ingredients: "Handcrafted from 100% GOTS-Certified & OEKO-TEX Certified Organic Cotton Fabric (Solid Pastel One Side & Printed Other Side), organically dyed.",
    benefits: ["Reversible: solid pastel brushed cotton on one side, delicate pastel print on the other side", "Made from GOTS & OEKO-TEX certified fabric", "Available in all 6 distinct pastel colorways • Kids size (40\" × 60\")"],
    inStock: true,
    isFeatured: false,
    wholesaleAvailable: true
  },
  {
    id: "quilt-throw-adult",
    name: "Organically Dyed Throw Blanket — Adult (60\" × 90\")",
    category: "quilts",
    price: 3200,
    unit: "60\" × 90\" Adult Throw • Solid Pastel One Side, Printed Other Side",
    badge: "Pastel Mint Green • Trees Print",
    badgeType: "organic",
    rating: 4.9,
    reviewsCount: 18,
    image: "assets/images/lookbook-mint-trees.jpg?v=1",
    colorways: PASTEL_COLORWAYS,
    description: "Generous reversible adult throw blanket (60\" × 90\") handcrafted from organic cotton thread yarns: solid pastel brushed cotton on one side and white with delicate pastel nature prints on the other side (Pastel Mint Green with Trees, Pastel Misty Blue-Grey with Crescent Moons, Pastel Lavender with Clouds, Pastel Blush Pink with Swirls, Pastel Peach with Suns, and Pastel Butter Yellow with Stars). While the finished throw itself is not separately certified, the organic fabric it is made from is GOTS and OEKO-TEX Standard 100 certified. Includes a handcrafted cotton tote bag.",
    ingredients: "Handcrafted from 100% GOTS-Certified & OEKO-TEX Certified Organic Cotton Fabric (Solid Pastel One Side & Printed Other Side), organically dyed.",
    benefits: ["Reversible: solid pastel brushed cotton on one side, delicate pastel print on the other side", "Made from GOTS & OEKO-TEX certified fabric with 100% eco-friendly plastic-free labels", "Available in all 6 distinct pastel colorways • Adult size (60\" × 90\")"],
    inStock: true,
    isFeatured: false,
    wholesaleAvailable: true
  },

  // HERBAL LEAVES (Organic White Packets, 100g)
  {
    id: "herb-sacred-tulsi",
    name: "Sun-Cured Sacred Tulsi Leaves (100g)",
    category: "herbs",
    price: 280,
    unit: "100g Non-Plastic Pack",
    badge: "Non-Plastic Pack",
    badgeType: "organic",
    rating: 4.9,
    reviewsCount: 19,
    image: "assets/images/sacred-tulsi-leaves.jpg",
    description: "Adaptogenic sacred holy basil (Tulsi) grown in mineral-rich living soil, shade-dried to preserve natural aromatic volatile oils, therapeutic properties, and whole leaf integrity. Packed in non-plastic packs.",
    ingredients: "100% Pure Organic Krishna & Rama Tulsi Leaves (Ocimum sanctum).",
    benefits: ["Calms the nervous system and supports natural stress resilience", "Rich in natural antioxidants, eugenol, and essential phytochemicals", "Packed in non-plastic packs to protect whole leaf vitality"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "herb-moringa-leaves",
    name: "Sun-Dried Organic Moringa Leaves (100g)",
    category: "herbs",
    price: 320,
    unit: "100g Non-Plastic Pack",
    badge: "Non-Plastic Pack",
    badgeType: "fresh",
    rating: 4.9,
    reviewsCount: 26,
    image: "assets/images/rosemary-sage-stems.jpg",
    description: "Sun-dried whole organic moringa leaves harvested fresh from our farmstead trees, retaining natural plant protein, bioavailable iron, active chlorophyll, and nutritional vitality. Packed in non-plastic packs.",
    ingredients: "100% Organically Grown Whole Moringa Leaves (Moringa oleifera).",
    benefits: ["Dense with essential vitamins, bio-available iron, and amino acids", "Gentle sun-drying preserves active chlorophyll and plant vitality", "Packed in non-plastic packs for everyday wellness"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },

  // LIVING HARVEST: MICROGREENS (Earthen Pots) & MUSHROOMS (Biodegradable Buckets)
  {
    id: "produce-living-microgreens",
    name: "Living Microgreens in Earthen Pots",
    category: "produce",
    price: 240,
    unit: "Living Terracotta Pot",
    badge: "Earthen Pot • No Plastic",
    badgeType: "organic",
    rating: 4.9,
    reviewsCount: 34,
    image: "assets/images/microgreens-earthen-pots.jpg",
    description: "Vibrant living microgreens grown directly in handcrafted terracotta earthen clay pots without plastic trays. Snip fresh at your table at peak nutritional vitality.",
    ingredients: "100% Organically sprouted living microgreens in porous terracotta clay pot.",
    benefits: ["Grown in mineral living soil inside reusable clay pots", "Delivered alive for maximum freshness and active enzymes", "Completely plastic-free from root to harvest"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "produce-farmstead-mushrooms",
    name: "Farmstead Mushrooms in Biodegradable Buckets",
    category: "produce",
    price: 360,
    unit: "Fruiting Bio Bucket",
    badge: "Biodegradable Bucket • No Bags",
    badgeType: "fresh",
    rating: 5.0,
    reviewsCount: 28,
    image: "assets/images/mushrooms-biodegradable-buckets.jpg",
    description: "Plump gourmet farmstead mushrooms fruiting naturally out of biodegradable plant-fiber buckets instead of plastic grow bags. Clean, chemical-free, and rich in natural umami.",
    ingredients: "100% Organically cultivated oyster mushrooms in biodegradable plant-fiber bucket.",
    benefits: ["Grown in biodegradable plant-fiber buckets, never in plastic bags", "Dense with natural protein, beta-glucans, and minerals", "Harvested fresh at prime culinary tenderness"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  }
];

// FARMSTEAD EXPERIENCES (1–2 Hours Visit • Open Every Day 07:00 – 17:00)
const FARM_VISITS = [
  {
    id: "tour-farmstead-experience",
    title: "Farmstead Experience",
    duration: "1–2 Hours Visit",
    pricePerPerson: 450,
    image: "assets/images/hero-basket.jpg?v=4",
    badge: "Farm Walk",
    days: "Open Every Day",
    timing: "07:00 – 17:00",
    description: "A small, peaceful 1–2 hour farmstead walk. Explore living soil permaculture beds, see herbal gardens, feed pasture ducks by the water, and enjoy fresh herbal farm hospitality.",
    included: [
      "1–2 hours guided farmstead immersion (living soil permaculture)",
      "Meet and feed free-roaming pasture ducks by the pond",
      "Interactive whole herbal stem walk",
      "Complimentary fresh farm herbal welcome drink"
    ],
    times: ["Morning Slot (07:00 – 09:00)", "Mid-Morning Slot (09:30 – 11:30)", "Midday Slot (12:00 – 14:00)", "Afternoon Slot (14:30 – 16:30)"]
  },
  {
    id: "tour-duckling-meadow",
    title: "Duckling Meadow Experience",
    duration: "1–2 Hours Visit",
    pricePerPerson: 350,
    image: "assets/images/duck-family.jpg",
    badge: "Duckling Meadow",
    days: "Open Every Day",
    timing: "07:00 – 17:00",
    description: "A gentle 1–2 hour experience with pasture ducks and ducklings in their natural pond habitat. Learn about ethical free-range duck keeping and natural straw nesting.",
    included: [
      "Feed and interact with free-range heritage ducks along wetland reeds",
      "Gentle duckling meadow time and straw nest walk",
      "Complimentary pasture duck eggs to take home",
      "Peaceful 1–2 hour immersion by the pond reedbeds"
    ],
    times: ["Morning Slot (07:00 – 09:00)", "Mid-Morning Slot (09:30 – 11:30)", "Midday Slot (12:00 – 14:00)", "Afternoon Slot (14:30 – 16:30)"]
  },
  {
    id: "tour-make-your-own-soap",
    title: "Make Your Own Soap",
    duration: "1–2 Hours",
    pricePerPerson: 950,
    image: "assets/images/artisan-soaps.jpg",
    badge: "Artisan Craft",
    days: "Open Every Day",
    timing: "07:00 – 17:00",
    description: "A hands-on 1–2 hour artisanal soapmaking session. Formulate and pour your own custom cold-process curd soap bar using fresh cold-pressed coconut oil, farmstead fresh organic curd, and fresh farm botanicals.",
    included: [
      "1–2 hours guided hands-on soapmaking session",
      "Formulate your own custom cold-process curd soap bar",
      "Fresh cold-pressed coconut oil, farmstead fresh organic curd, and farm botanicals provided",
      "Take your newly crafted soap bar home with curing guide"
    ],
    times: ["Morning Slot (07:00 – 09:00)", "Mid-Morning Slot (09:30 – 11:30)", "Midday Slot (12:00 – 14:00)", "Afternoon Slot (14:30 – 16:30)"]
  }
];

// Master Dispatches Schedule — Strictly 1 post per day at 4:40 AM IST (Newest First)
const ALL_BLOG_DISPATCHES = [
  {
    id: "blog-11-productivity-pace",
    title: "How much productivity is productive?",
    category: "Farmstead Lore & Rhythm",
    date: "Oct 23, 2026",
    publishAt: "2026-10-23T04:40:00+05:30",
    readTime: "3 min read",
    author: "Purreins Frequency",
    image: "assets/images/blog11_productivity_pace.jpg",
    url: "journal-11-how-much-productivity-is-productive.html",
    excerpt: "Whatever you do needs consistency, but too much consistency is toxic and backfires into destruction. At Purreins Frequency, we prioritize health, quality, and products—strictly in that order.",
    content: `
      <p class="text-base sm:text-lg text-[#E2C9A5] font-normal leading-relaxed mb-4">Whatever you do and aim for it to be productive needs consistency—but too much consistency is actually toxic and can backfire on productivity, making it more of a force than a want.</p>
      <p class="mb-4">So how productive should you be to make it effective productivity?</p>
      <p class="mb-4">Let’s say, we at Purreins Frequency need to water all the farm plants once a day, every day. So what happens when we fall sick? We have another one of us doing it on our behalf, and other work—such as shipment, delivery, or manufacturing—is pushed to the next day.</p>
      <p class="mb-4">We are honest about this, because in reality forced consistency doesn’t actually lead to productivity, but rather destruction—causing damage to health and hence multiple departments henceforth.</p>
      <div class="my-6 p-5 bg-[#4E693B]/10 border border-[#8EB264]/20 rounded-sm font-mono text-xs sm:text-sm tracking-wide">
        <div class="flex items-start gap-2.5 text-[#E2C9A5]"><span class="text-[#D6AB66] font-bold">✦</span><span>At Purreins Frequency, we prioritise health, quality, and products—strictly in that order. Whichever serves the immediate need is provided. At the end of the day, we want to provide our users with the best quality products at the expected time range.</span></div>
      </div>
      <div class="py-3 my-6 pl-5 border-l-2 border-[#D6AB66]/60">
        <p class="font-serif text-xl sm:text-2xl text-[#D6AB66] italic leading-relaxed">“One message for the day we’d like to put out there is that misalignment in body, plant, or quality can only be aligned with extra time and not instantly, because we strictly forbid the use of chemicals and antibiotics.”</p>
      </div>
      <div class="my-6 p-6 bg-[#4E693B]/20 border border-[#8EB264]/30 rounded-sm text-center">
        <p class="font-serif text-xl sm:text-2xl text-[#E2C9A5] italic mb-3">Honest farming, living soil, and handcrafted rhythms.</p>
        <a href="shop.html" class="inline-flex items-center gap-2 px-6 py-3 bg-[#4E693B] hover:bg-[#688450] text-[#E2C9A5] text-xs uppercase tracking-widest font-semibold rounded-sm transition">
          <span>Visit Farm Store</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>
    `,
    tags: ["PurreinsFrequency", "EffectiveProductivity", "ToxicConsistency", "HealthFirst", "NaturalAlignment", "ExtraTimeOverShortcuts", "ChemicalFreeFarm"]
  },
  {
    id: "blog-10-banana-leaf-soap",
    title: "Why do we make banana soaps from leaf not the fruit?",
    category: "Artisan Craft & Science",
    date: "Oct 22, 2026",
    publishAt: "2026-10-22T04:40:00+05:30",
    readTime: "3 min read",
    author: "Purreins Frequency",
    image: "assets/images/blog10_banana_leaf_soap.jpg",
    url: "journal-10-why-do-we-make-banana-soaps-from-leaf-not-the-fruit.html",
    excerpt: "Yes, our banana soaps are made from freshly harvested banana leaves from our farm. With natural antimicrobial detox properties, green-tea-level anti-inflammatory compounds, and natural UV shielding, they heal from the root.",
    content: `
      <p class="text-base sm:text-lg text-[#E2C9A5] font-normal leading-relaxed mb-4">Yes, our banana soaps are made from the banana leaves, freshly harvested from our farm. It focuses on cleansing and evening skin texture.</p>
      <p class="mb-4">The banana leaf is known for its antimicrobial properties, acting as a natural detox on your skin. It also has the same anti-inflammatory presence found in green tea—this strips away any acne or redness from the surface, and regular use can cure it from the root too. One other cool factor is that banana leaves are natural shielders, protecting your skin from intense sun exposure and artificial UV indoor light exposure.</p>
      <div class="my-6 p-5 bg-[#4E693B]/10 border border-[#8EB264]/20 rounded-sm font-mono text-xs sm:text-sm tracking-wide">
        <div class="flex items-start gap-2.5 text-[#E2C9A5]"><span class="text-[#D6AB66] font-bold">✦</span><span>If initial usage causes burning or irritation on skin, please give a break of a few days before using it again. As the antimicrobial effect starts working, it may cause burning on some sensitive skin types—this just means that the soap is doing good on you and is healing something from underneath.</span></div>
      </div>
      <div class="py-3 my-6 pl-5 border-l-2 border-[#D6AB66]/60">
        <p class="font-serif text-xl sm:text-2xl text-[#D6AB66] italic leading-relaxed">We take full responsibility in saying this: “Nothing in nature is allergic—especially nothing that is edible is ever allergic—until you have antibiotics inside that are killing your good bacterias inside and confusing your body on the natural digestive process,” hence our soaps are safe naturally.</p>
      </div>
      <div class="my-6 p-6 bg-[#4E693B]/20 border border-[#8EB264]/30 rounded-sm text-center">
        <p class="font-serif text-xl sm:text-2xl text-[#E2C9A5] italic mb-3">Detox, shield, and heal from the root with our farm-harvested soaps.</p>
        <a href="shop.html" class="inline-flex items-center gap-2 px-6 py-3 bg-[#4E693B] hover:bg-[#688450] text-[#E2C9A5] text-xs uppercase tracking-widest font-semibold rounded-sm transition">
          <span>Visit Farm Store &amp; Explore Soaps</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>
    `,
    tags: ["PurreinsFrequency", "BananaLeafSoap", "NaturalUVShield", "AntimicrobialDetox", "NothingInNatureIsAllergic", "RootHealing"]
  },
  {
    id: "blog-09-swaddle-is-addictive",
    title: "Swaddle is addictive.",
    category: "Conscious Parenting & Rhythm",
    date: "Oct 21, 2026",
    publishAt: "2026-10-21T04:40:00+05:30",
    readTime: "3 min read",
    author: "Purreins Frequency",
    image: "assets/images/blog9_swaddle_quilt.jpg?v=4",
    url: "journal-09-swaddle-is-addictive.html",
    excerpt: "Swaddling helps babies sleep, they say—but only till they mature into their bodies. Once they show the first signs of rolling over, keeping them swaddled stops them from exploring their limbs and syncing with nature.",
    content: `
      <p class="text-base sm:text-lg text-[#E2C9A5] font-normal leading-relaxed mb-4">Swaddle your baby and that helps them relax and sleep better; they say.</p>
      <p class="mb-4">Well, yes—swaddling your baby helps them sleep better and probably relax too, <strong class="text-[#E2C9A5] font-medium">but only till they mature.</strong> Babies mature? Yes, babies mature into their bodies and try learning to use their body parts, move around, and even try talking. So to facilitate these movements, you stop swaddling your baby when they show the first signs of rolling over onto their tummy.</p>
      <div class="my-6 p-5 bg-[#4E693B]/10 border border-[#8EB264]/20 rounded-sm font-mono text-xs sm:text-sm tracking-wide">
        <div class="flex items-start gap-2.5 text-[#E2C9A5]"><span class="text-[#D6AB66] font-bold">✦</span><span>Disclaimer: If you keep them swaddled and simulating the feeling of still being in the womb, it prevents them from trying to move anything at all.</span></div>
      </div>
      <div class="py-3 my-6 pl-5 border-l-2 border-[#D6AB66]/60">
        <p class="font-serif text-xl sm:text-2xl text-[#D6AB66] italic leading-relaxed">“Does that mean you should completely stop swaddling your baby, even when rocking them to sleep? YES, because babies haven't yet synced with the circadian rhythm of nature—they will try to explore their body anytime they're awake. This can be early in the morning, middle of the day, or even middle of the night.”</p>
      </div>
      <p class="mb-4">Your role as a parent is to give them the feeling of being secure and safe, and the space to grow up into a fully developed little human to big human.</p>
      <p class="font-serif text-xl sm:text-2xl text-[#E2C9A5] font-bold pt-4 mt-4 border-t border-[#E2C9A5]/15 mb-6">You can cover them gently with a <span class="text-[#D6AB66]">throw blanket or even a quilt</span>, while keeping the temperature just right—this will help them relax and rock them to sleep naturally.</p>
      <div class="my-6 p-6 bg-[#4E693B]/20 border border-[#8EB264]/30 rounded-sm text-center">
        <p class="font-serif text-xl sm:text-2xl text-[#E2C9A5] italic mb-3">Wrap them in breathable, hand-stitched organic cotton quilts &amp; throws.</p>
        <a href="shop.html" class="inline-flex items-center gap-2 px-6 py-3 bg-[#4E693B] hover:bg-[#688450] text-[#E2C9A5] text-xs uppercase tracking-widest font-semibold rounded-sm transition">
          <span>Explore Heirloom Quilt Rolls</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>
    `,
    tags: ["PurreinsFrequency", "ConsciousParenting", "CircadianRhythm", "LetBabiesMove", "HeirloomQuilts", "NaturalGrowth"]
  },
  {
    id: "blog-08-curd-is-dairy",
    title: "Curd is dairy too, right?",
    category: "Nutrition & Intuition",
    date: "Oct 20, 2026",
    publishAt: "2026-10-20T04:40:00+05:30",
    readTime: "3 min read",
    author: "Purreins Frequency",
    image: "assets/images/blog8_curd_is_dairy.jpg",
    url: "journal-08-curd-is-dairy-too-right.html",
    excerpt: "Remember I told you we are all Lactose intolerant? Curd, unlike other dairy products, is fermented—literally killing away the sugar and giving you pure, gut-friendly acid that turns your body into a self-curing powerhouse.",
    content: `
      <p class="text-base sm:text-lg text-[#E2C9A5] font-normal leading-relaxed mb-4">Remember I told you we are all Lactose intolerant? How is curd any different and why we should take it regularly?</p>
      <p class="mb-4">Curd, unlike other dairy products, is fermented (an anaerobic metabolic process where micro-organisms like yeast and bacteria break down carbohydrates such as glucose into acids, gases, or alcohol to produce cellular energy). This literally kills away the sugar and gives you pure, gut-friendly acid that stimulates faster and cleaner digestion.</p>
      <div class="py-3 my-6 pl-5 border-l-2 border-[#D6AB66]/60">
        <p class="font-serif text-xl sm:text-2xl text-[#D6AB66] italic leading-relaxed">“Taking curd everyday feeds your good gut bacteria and multiplies into many, many more good gut bacterias that keep regular watch on your system, and get you capable to fight any misalignment immediately and provide for instant cure. So your body becomes a self-curing powerhouse without the need of antibiotics, meds, long rest.”</p>
      </div>
      <div class="my-6 p-5 bg-[#4E693B]/10 border border-[#8EB264]/20 rounded-sm font-mono text-xs sm:text-sm tracking-wide">
        <div class="flex items-start gap-2.5 text-[#E2C9A5]"><span class="text-[#D6AB66] font-bold">✦</span><span>Keep eyes out for curds with preservatives—that's not what we are talking about here, that's just bad, very bad bacteria.</span></div>
      </div>
      <p class="font-serif text-xl sm:text-2xl text-[#E2C9A5] font-bold pt-4 mt-4 border-t border-[#E2C9A5]/15 mb-6">Make your own curd for your inner self and <span class="text-[#D6AB66]">use our curd soap for your outer self ^-^</span></p>
      <div class="my-6 p-6 bg-[#4E693B]/20 border border-[#8EB264]/30 rounded-sm text-center">
        <p class="font-serif text-xl sm:text-2xl text-[#E2C9A5] italic mb-3">Nourish your outer self with our cold-process farmstead curd soaps.</p>
        <a href="shop.html" class="inline-flex items-center gap-2 px-6 py-3 bg-[#4E693B] hover:bg-[#688450] text-[#E2C9A5] text-xs uppercase tracking-widest font-semibold rounded-sm transition">
          <span>Explore Curd Soaps in Farm Store</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>
    `,
    tags: ["PurreinsFrequency", "CurdIsDifferent", "FermentedGutHealth", "SelfCuringPowerhouse", "CurdSoap", "InnerAndOuterSelf"]
  },
  {
    id: "blog-07-lactose-intolerant",
    title: "We are all naturally Lactose intolerant?",
    category: "Nutrition & Intuition",
    date: "Oct 19, 2026",
    publishAt: "2026-10-19T04:40:00+05:30",
    readTime: "3 min read",
    author: "Purreins Frequency",
    image: "assets/images/blog7_lactose_intolerant.jpg",
    url: "journal-07-we-are-all-naturally-lactose-intolerant.html",
    excerpt: "Yep, we are all naturally lactose intolerant. But this fact hides behind the chemicals in commercial pasteurization. Stopping dairy early gives your body time to make space for good bacteria.",
    content: `
      <p class="text-base sm:text-lg text-[#E2C9A5] font-normal leading-relaxed mb-4">Yep, we are all naturally lactose intolerant. But this fact hides behind the many chemicals added to the commercial pasteurization process that makes digestion more suitable for the short term. Continued intake of this eventually trains your body to digest it as normal food over time.</p>
      <p class="mb-4">The true effect of dairy products flares up either when you are too sensitive to it as a baby, or when you give it a long break and come back to it. First one, is as good as very good reflex and high presence of good bacteria. The second one, is where your body heals and clears away the bad bacteria and the natural effect shows.</p>
      <div class="py-3 my-6 pl-5 border-l-2 border-[#D6AB66]/60">
        <p class="font-serif text-xl sm:text-2xl text-[#D6AB66] italic leading-relaxed">“So does that mean you should stop taking in dairy and never have it again? Not quite, but yeah, because it is not doing anything but stocking up a set of illnesses that will show when your body gets old and doesn't have the young strength to keep producing new good bacteria.”</p>
      </div>
      <p class="mb-4">Stopping it early will give your body time to clear it out and make space for new good bacteria that will stay healthy and multiply through your old age and more.</p>
      <p class="font-serif text-xl sm:text-2xl text-[#E2C9A5] font-bold pt-4 mt-4 border-t border-[#E2C9A5]/15">Well, you still need some kind of “milk” to take in your Matcha and Tea and Coffee, yes, and you have various options to choose from: Coconut milk. Cashew milk. Almond milk. Rice milk. Groundnut milk. La la la.</p>
    `,
    tags: ["PurreinsFrequency", "LactoseIntolerance", "DairyTruth", "PlantMilks", "GutBacteria", "RealNutrition"]
  },
  {
    id: "blog-06-soaps-made-of",
    title: "What are soaps made of?",
    category: "Artisan Craft & Science",
    date: "Oct 18, 2026",
    publishAt: "2026-10-18T04:40:00+05:30",
    readTime: "3 min read",
    author: "Purreins Frequency",
    image: "assets/images/blog6_soap_ingredients.jpg",
    url: "journal-06-what-are-soaps-made-of.html",
    excerpt: "At Purreins Frequency, we use all farm produced ingredients with one “chemical agent” called Sodium Hydroxide NaOH, the breakdown of Sea Salt using electricity. Simple and heavy is the way to squishy skin.",
    content: `
      <p class="text-base sm:text-lg text-[#E2C9A5] font-normal leading-relaxed mb-4">At Purreins Frequency, we use all farm-produced ingredients with one “chemical agent” called Sodium Hydroxide (NaOH), which is the breakdown of Sea Salt using electricity. This in real language is not a chemical—it's a byproduct of nature.</p>
      <p class="mb-4">So our soaps are, oh so gently, blessed by Sea Breeze, and we add to that our freshly sourced products from cows and soil. We wouldn't claim to be 100% natural, because the process of turning Sea Salt into NaOH crystals is not natural, BUT we will claim and stand by being the brand that makes use of this byproduct crystal in the most ORGANIC WAY possible.</p>
      <div class="py-3 my-6 pl-5 border-l-2 border-[#D6AB66]/60">
        <p class="font-serif text-xl sm:text-2xl text-[#D6AB66] italic leading-relaxed">“We obviously cannot disclose the exact components for trademark reasons, but we assure you that when you use our soaps, the rich mixture of cleansing and nourishing will make your skin feel healthy and hungry for more ^_^”</p>
      </div>
      <p class="font-serif text-xl sm:text-2xl text-[#E2C9A5] mb-6">Simple and heavy is the way to squishy skin.</p>
      <div class="my-6 p-6 bg-[#4E693B]/20 border border-[#8EB264]/30 rounded-sm text-center">
        <p class="font-serif text-xl sm:text-2xl text-[#E2C9A5] italic mb-3">Click here to experience luxurious showering with our organic soaps.</p>
        <a href="shop.html" class="inline-flex items-center gap-2 px-6 py-3 bg-[#4E693B] hover:bg-[#688450] text-[#E2C9A5] text-xs uppercase tracking-widest font-semibold rounded-sm transition">
          <span>Visit Farm Store</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>
    `,
    tags: ["PurreinsFrequency", "WhatAreSoapsMadeOf", "SeaBreezeSoap", "ColdProcessTruth", "SodiumHydroxide", "SquishySkin", "FarmsteadStore"]
  },
  {
    id: "blog-05-ai-speed",
    title: "How fast should your AI agent be?",
    category: "Technology & Mindset",
    date: "Oct 17, 2026",
    publishAt: "2026-10-17T04:40:00+05:30",
    readTime: "3 min read",
    author: "Purreins Frequency",
    image: "assets/images/blog5_ai_agent_speed.jpg",
    url: "journal-05-how-fast-should-your-ai-agent-be.html",
    excerpt: "AI is not a person, but hey it is kind of a person, right? Be nice to AI, give it time, let it cook. We eat heavy breakfast, heavy lunch and heavy dinner everyday, but we eat 3 times, not all at once.",
    content: `
      <p class="text-base sm:text-lg text-[#E2C9A5] font-normal leading-relaxed mb-4">AI is not a person, but hey it is kind of a person, right?</p>
      <p class="mb-4">Let’s be realistic about our expectation from AI just because it's AI. It is a tool that is here to make our lives easier, but not jetfast, we don't even need that.</p>
      <p class="mb-4">One, it's going to crash the damn agent for loading it with so much task within an unrealistic timeframe. Think about it: asking your Mac to run 5 YouTube videos in the background, while asking it to export 6 keys as PDFs, while asking it to install 7 softwares, while asking it to update the existing 8 apps, while trying to ask it to also edit your photos. Your computer is going to heat up so much, you could start cooking on it.</p>
      <div class="py-3 my-6 pl-5 border-l-2 border-[#D6AB66]/60">
        <p class="font-serif text-xl sm:text-2xl text-[#D6AB66] italic leading-relaxed">“THAT is exact, rather more happens when you ask your AI agents to do all these tasks together and be insanely fast at it. It's burning tokens, data, and internet at an insane rate that's not even comparable, qualifying for a big downtime. For days. Yes.”</p>
      </div>
      <p class="mb-4 font-serif text-xl sm:text-2xl text-[#E2C9A5] italic">Be nice to AI, give it time, let it cook.</p>
      <p class="font-serif text-xl sm:text-2xl text-[#E2C9A5] font-bold pt-4 mt-4 border-t border-[#E2C9A5]/15">We here at Purreins Frequency, eat heavy breakfast, heavy lunch and heavy dinner everyday, but we eat 3 times, not all at once.</p>
    `,
    tags: ["PurreinsFrequency", "AINotJetFast", "LetItCook", "AgentMindset", "HeavyBreakfast", "RhythmOverSpeed"]
  },
  {
    id: "blog-04-sustainable-ai",
    title: "Sustainable AI?",
    category: "Technology & Ecology",
    date: "Oct 16, 2026",
    publishAt: "2026-10-16T04:40:00+05:30",
    readTime: "3 min read",
    author: "Purreins Frequency",
    image: "assets/images/blog4_sustainable_ai.jpg",
    url: "journal-04-sustainable-ai.html",
    excerpt: "In the world of AI skyrocketing every second and sustainability figuring out a way to conclude itself, AI by itself can be or already is sustainable. When AI does technical things for me, I can give my human hours to the farm.",
    content: `
      <p class="text-base sm:text-lg text-[#E2C9A5] font-normal leading-relaxed mb-4">Yes, you read that right. In the world of AI skyrocketing every second and sustainability figuring out a way to conclude itself, AI by itself can be or already is sustainable.</p>
      <p class="mb-4">Being a farmer, I say this because when AI does technical things for me on the computers, on the machines, and on my phones, I can give my human time and working hours into the farm harvesting, nurturing my seeds, and meditating with the sun.</p>
      <div class="py-3 my-6 pl-5 border-l-2 border-[#D6AB66]/60">
        <p class="font-serif text-xl sm:text-2xl text-[#D6AB66] italic leading-relaxed">“AI is actually making our life sustainable in a way that the human race has not yet fully understood its capabilities. If you tap into the mechanics of AI and configure it to work for you, then you can work on yourself and spiritually take yourself to a level where the world actually feels like bliss.”</p>
      </div>
      <p class="mb-4">You can start by giving more time to learning what AI is and what your everyday is, and connecting the two to each other so the automatics are done by the AI, and the thinking, creativity, and manufacturing are done by you.</p>
      <div class="my-6 p-5 bg-[#4E693B]/10 border border-[#8EB264]/20 rounded-sm space-y-2.5 font-mono text-xs sm:text-sm tracking-wide">
        <div class="flex items-start gap-2.5 text-[#E2C9A5]"><span class="text-[#D6AB66] font-bold">✦</span><span>Automatics, technical maintenance, and data routing belong to algorithms.</span></div>
        <div class="flex items-start gap-2.5 text-[#E2C9A5]"><span class="text-[#D6AB66] font-bold">✦</span><span>Soil tending, craftsmanship, sensory feeling, and presence belong to humans.</span></div>
      </div>
      <p class="font-serif text-lg sm:text-xl text-[#E2C9A5] pt-4 mt-4 border-t border-[#E2C9A5]/15">This might seem like a techie dev statement, but <strong class="text-[#D6AB66] font-semibold">AI is the essential ground for sustainability.</strong></p>
    `,
    tags: ["PurreinsFrequency", "SustainableAI", "FarmsteadTech", "NatureAndCode", "ConsciousAutomation", "HumanHours"]
  },
  {
    id: "blog-03-rushing",
    title: "What’re we all rushing towards?",
    category: "Slow Living & Philosophy",
    date: "Oct 15, 2026",
    publishAt: "2026-10-15T04:40:00+05:30",
    readTime: "3 min read",
    author: "Purreins Frequency",
    image: "assets/images/blog3_rushing.jpg",
    url: "journal-03-what-are-we-all-rushing-towards.html",
    excerpt: "AI is good - Assistance is good - Speed is good. But none of that can equal nature, the process of nature, the sequence of nature. The only way to get healthy, is to slow down.",
    content: `
      <p class="text-base sm:text-lg text-[#E2C9A5] font-normal leading-relaxed mb-4">AI is good - Assistance is good - Speed is good.</p>
      <p class="mb-4">But none of that can equal nature, the process of nature, the sequence of nature.</p>
      <div class="py-3 my-6 pl-5 border-l-2 border-[#D6AB66]/60">
        <p class="font-serif text-xl sm:text-2xl text-[#D6AB66] italic leading-relaxed">“The only way to get healthy, is to slow down. Not shut down, just slow down, take a moment, question yourself, run through your goals, prioritise them, realise them, balance them, with your self existence.”</p>
      </div>
      <p class="mb-4">Yes, achieving is important, but you need to be there to achieve it. You are as much important as the goals you have. And the way to do is the be alive, be healthy, be active.</p>
      <div class="my-6 p-5 bg-[#4E693B]/10 border border-[#8EB264]/20 rounded-sm space-y-2.5 font-mono text-xs sm:text-sm tracking-wide">
        <div class="flex items-start gap-2.5 text-[#E2C9A5]"><span class="text-[#D6AB66] font-bold">✦</span><span>There is a race, one that we made for ourselves, nothing that nature made against us, except the food chain (which some of us aren’t even aware of).</span></div>
        <div class="flex items-start gap-2.5 text-[#E2C9A5]"><span class="text-[#D6AB66] font-bold">✦</span><span>To be part of the human race, you need to be aligned with the nature’s race at the least.</span></div>
      </div>
      <p class="font-serif text-lg sm:text-xl text-[#E2C9A5] pt-4 mt-4 border-t border-[#E2C9A5]/15">There’s no time, you might say, yes, there is no time, for yourself, you are giving away all your time to the race and others in the race. <strong class="text-[#D6AB66] font-semibold">The rushing will stop when you get this context.</strong></p>
    `,
    tags: ["PurreinsFrequency", "SlowDown", "SequenceOfNature", "StopTheRush", "MindfulPace", "HumanExistence"]
  },
  {
    id: "blog-02-hard-way",
    title: "Why’re we doing everything the hard way?",
    category: "Farmstead Lore",
    date: "Oct 14, 2026",
    publishAt: "2026-10-14T04:40:00+05:30",
    readTime: "3 min read",
    author: "Purreins Frequency",
    image: "assets/images/blog2_hard_way.jpg",
    url: "journal-02-why-are-we-doing-everything-the-hard-way.html",
    excerpt: "In the world of AI and ultrafast moving times, why is Purreins Frequency going into the forests and living a convenience-free life? Convenience and speed isn’t the way towards getting healthy.",
    content: `
      <p class="text-base sm:text-lg text-[#E2C9A5] font-normal leading-relaxed mb-4">In the world of AI and ultrafast moving times, why is Purreins Frequency going into the forests and living a holistic, convenience-free life?</p>
      <p class="mb-4">Well, turns out, that convenience and speed isn’t the way towards getting healthy.</p>
      <p class="mb-4">All our plants, all our ducks, all our soaps are made Organically, as in made By Nature, not by intimidating the process of nature. The time needed to do that is the time we use to focus on our human instincts and soul purpose of being on planet earth.</p>
      <div class="py-3 my-6 pl-5 border-l-2 border-[#D6AB66]/60 space-y-1.5">
        <p class="font-serif text-xl sm:text-2xl text-[#D6AB66] italic">Sounds spiritual?</p>
        <p class="text-xs sm:text-sm text-[#CBB89D]/80 leading-relaxed">Not quite, not everything that is about Nature and holistic living, has to do with spirituality, most has to do with just existing and being in sync with the elements.</p>
      </div>
      <div class="space-y-2.5 bg-[#4E693B]/10 border border-[#8EB264]/20 p-5 rounded-sm my-6 text-xs sm:text-sm">
        <div class="flex items-start gap-2.5"><span class="text-[#8EB264] font-mono">✦</span><p>Waking up with sun, falling asleep with the sun, using the rain, <strong class="text-[#D6AB66] font-semibold uppercase tracking-wide">IS the EXERCISE.</strong></p></div>
        <div class="flex items-start gap-2.5"><span class="text-[#8EB264] font-mono">✦</span><p>Tilling the soil, harvesting produce, making food, <strong class="text-[#D6AB66] font-semibold uppercase tracking-wide">IS the GYM.</strong></p></div>
        <div class="flex items-start gap-2.5"><span class="text-[#8EB264] font-mono">✦</span><p>Keeping it healthy, watching it grow, multiplying it, <strong class="text-[#D6AB66] font-semibold uppercase tracking-wide">IS the TASK.</strong></p></div>
      </div>
      <p class="mb-4">Get through all this, in the day, and the time you have remaining, is what you will need to start being spiritual.</p>
      <p class="font-serif text-xl sm:text-2xl text-[#E2C9A5] font-bold pt-4 mt-4 border-t border-[#E2C9A5]/15">It’s not the hard way, it’s the only way.</p>
    `,
    tags: ["PurreinsFrequency", "ConvenienceFree", "NatureIsTheGym", "ForestLiving", "OrganicallyMade", "FarmsteadRhythm"]
  },
  {
    id: "blog-01-eating-healthy",
    title: "Is eating healthy, healthy?",
    category: "Nutrition & Intuition",
    date: "Oct 13, 2026",
    publishAt: "2026-10-13T04:40:00+05:30",
    readTime: "4 min read",
    author: "Purreins Frequency",
    image: "assets/images/blog1_eating_healthy.jpg",
    url: "journal-01-is-eating-healthy-healthy.html",
    excerpt: "In the world of AI crafting us diet charts, what does eating healthy look like? Eating what is right for your body and your metabolism. Forget the charts, forget the supplements.",
    content: `
      <p class="text-base sm:text-lg text-[#E2C9A5] font-normal leading-relaxed mb-4">In the world of AI crafting us diet charts, what does eating healthy look like? It looks vegan? Organic? Fresh?</p>
      <p class="mb-4">Eating healthy in simple means, eating what is right for your body and for your metabolism. It means giving your body exactly what it is asking for. It is feeling satisfied with what you've eaten. It is what builds your body for you. Forget the charts, forget the supplements, forget the timing. Just curate your diet for the first few days to ‘eating all the things that you crave for’.</p>
      <div class="my-6 p-5 bg-[#4E693B]/10 border border-[#8EB264]/20 rounded-sm space-y-2.5 font-mono text-xs sm:text-sm tracking-wide">
        <div class="flex items-start gap-2.5 text-[#E2C9A5]"><span class="text-[#D6AB66] font-bold">✦</span><span>This first step will take you to a clean transition from unorganized to organic eating.</span></div>
        <div class="flex items-start gap-2.5 text-[#E2C9A5]"><span class="text-[#D6AB66] font-bold">✦</span><span>This step will give you a balanced diet between cravings and nutrition.</span></div>
        <div class="flex items-start gap-2.5 text-[#E2C9A5]"><span class="text-[#D6AB66] font-bold">✦</span><span>This will eventually set tone for daily food and festive food.</span></div>
      </div>
      <p class="mb-4">Only thing to keep on mind is that, feeding your mind is the only way to quiet it and focus on what your body needs. In traditional plans, this probably sounds unhealthy, but its actually the opposite of that. When you push away to noise, the underlying problem shows up, for instance, craving sugar is a result of missing glucose in your diet, sugar may temporarily mask that away, but the glucose is still lacking.</p>
      <div class="py-3 my-6 pl-5 border-l-2 border-[#D6AB66]/60">
        <p class="font-serif text-lg sm:text-xl text-[#D6AB66] italic leading-relaxed">“On our first chat, we are obviously taking sugar as the topic, because everyone flags it as unhealthy, the truth however is that sugar disguises itself in many forms; some that are healthy; some that are unhealthy. You need to find the forms of sugar that are healthy for you.”</p>
      </div>
      <div class="space-y-1.5 py-2 font-serif text-lg sm:text-xl text-[#E2C9A5]">
        <p class="text-[#CBB89D]/75">Not because the Internet said so.</p>
        <p class="text-[#CBB89D]/75">Not because the video said so.</p>
        <p class="text-[#D6AB66] font-bold italic">But because your body is saying so.</p>
      </div>
      <p class="font-serif italic text-xl sm:text-2xl text-[#E2C9A5] pt-5 mt-5 border-t border-[#E2C9A5]/15">Take time, give yourself the time and feeding that it needs to identify these, have a sugary day ^-^</p>
    `,
    tags: ["PurreinsFrequency", "IntuitiveEating", "BodyWisdom", "RealFoodNutrition", "EatWhatYouCrave", "NaturalSugars"]
  }
];

// Fully autonomous client-side schedule: unlocks strictly at 4:40 AM IST on each post's date, sorted newest first
const _now = new Date();
const BLOG_POSTS = ALL_BLOG_DISPATCHES
  .filter(post => !post.publishAt || new Date(post.publishAt) <= _now)
  .sort((a, b) => new Date(b.publishAt || b.date) - new Date(a.publishAt || a.date));

const STAGED_BLOG_POSTS = ALL_BLOG_DISPATCHES
  .filter(post => post.publishAt && new Date(post.publishAt) > _now);

const FAQS = [
  {
    q: "How do I place an order for products?",
    a: "You can add any items to your online cart and click 'Complete Order via WhatsApp' or 'Submit Order by Email'. This sends your exact order directly to our farm packing team without any middleman fees, and we confirm payment in INR & dispatch immediately!"
  },
  {
    q: "Are your soaps 100% free of synthetic fragrances and other oils?",
    a: "Yes! Every single bar of UP Purreins soap is cold-processed using only fresh cold-pressed coconut oil, farmstead fresh organic curd, and the pure farm-harvested flavor in the soap's name itself. No virgin olive oil, no castor oil, no shea butter, no artificial dyes, and completely free of synthetics."
  },
  {
    q: "Can we order custom farmstead gift hampers?",
    a: "Yes! Our artisanal farmstead hampers can be customized with your choice of cold-process curd soaps, pasture duck eggs, sun-cured moringa and sacred tulsi leaves, and GOTS-certified organic quilt rolls for festive gifting, wedding favors, and corporate hampers."
  },
  {
    q: "How does Farm Visit booking work?",
    a: "Booking is simple: choose any day between 07:00 and 17:00 for a peaceful 1–2 hours farmstead visit. The rate is calculated simply as [Number of Guests] × [Price per person]. You can confirm your booking instantly via WhatsApp or pay upon arrival."
  }
];

const WHOLESALE_TIERS = [
  {
    category: "Living Microgreens & Mushrooms",
    minOrder: "15 Pots / Bio Buckets (Weekly standing order)",
    discount: "Direct restaurant & cafe wholesale rates",
    packaging: "Earthen clay pots & biodegradable fiber buckets",
    leadTime: "Harvested fresh on delivery morning"
  },
  {
    category: "Handcrafted Curd Soaps",
    minOrder: "30 Bars (Assorted varieties: Curd, Banana & Bamboo, Moringa, Dry Grass)",
    discount: "35% - 45% off retail",
    packaging: "Plastic-free paper band",
    leadTime: "3-5 business days"
  },
  {
    category: "Artisanal Quilt Rolls",
    minOrder: "10 Rolls / Throws",
    discount: "Trade & boutique wholesale rates",
    packaging: "Cotton tote bag & care card",
    leadTime: "Handcrafted to order"
  },
  {
    category: "Fresh Pasture Duck Eggs",
    minOrder: "10 Cartons (Weekly standing order)",
    discount: "Direct bakery & restaurant rates",
    packaging: "Molded pulp cartons in clean straw bed",
    leadTime: "Daily morning collection"
  },
  {
    category: "Sun-Cured Herbal Leaves",
    minOrder: "20 Packs (Moringa Leaves & Sacred Tulsi)",
    discount: "Apothecary & cafe wholesale rates",
    packaging: "Non-plastic packs / hand-tied organic bundles",
    leadTime: "3-5 business days"
  }
];

const MARKET_EVENTS = [
  {
    id: "mkt-kochi-fleak",
    name: "Kochi On Flea.k Pop-up",
    city: "Kochi",
    venue: "The Grounds, Chakola Mill, Kalamassery",
    timing: "Seasonal Weekend Edition (11:00 AM – 10:00 PM)",
    focus: "Curd Soaps, GOTS Quilt Rolls, Farm Leaves",
    highlight: "Kerala's premier youth & conscious lifestyle flea market",
    status: "Upcoming Edition"
  },
  {
    id: "mkt-kochi-naattunanma",
    name: "Naattunanma Organic Farmers Market",
    city: "Kochi",
    venue: "Govt LP School Grounds, Kakkanad",
    timing: "Every Sunday Morning (8:00 AM – 11:00 AM)",
    focus: "Pasture Duck Eggs, Curd Soaps, Sun-Cured Leaves",
    highlight: "Direct farm-to-table community for health-conscious families",
    status: "Recurring Weekly"
  },
  {
    id: "mkt-cbe-cctn",
    name: "Crafts Bazaar (Crafts Council of Tamil Nadu)",
    city: "Coimbatore",
    venue: "Suguna Kalyana Mandapam, Peelamedu",
    timing: "Annual Festival Edition",
    focus: "Heirloom Quilt Rolls & Cold-Process Soaps",
    highlight: "Prestigious master artisan exhibition for high-value handmade living",
    status: "Curated Showcase"
  },
  {
    id: "mkt-cbe-uyir",
    name: "Uyir Organic Sunday Market",
    city: "Coimbatore",
    venue: "RS Puram / Saibaba Colony",
    timing: "Sundays (7:30 AM – 11:00 AM)",
    focus: "Duck Eggs, Handcrafted Soaps, Straw Baskets",
    highlight: "Kongu region's oldest chemical-free direct farmers collective",
    status: "Recurring Weekly"
  },
  {
    id: "mkt-pollachi-papyrus",
    name: "The Pollachi Papyrus Farmstead Trail",
    city: "Pollachi",
    venue: "Anaimalai Foothills & Coconut Groves",
    timing: "Monthly Agro-Tourism Weekends",
    focus: "Farm Visits, Duck Eggs, Coir Crafts, Soaps",
    highlight: "Agro-tourism experiential market connecting travelers with local soil",
    status: "Monthly Gathering"
  },
  {
    id: "mkt-erode-texvalley",
    name: "Texvalley Handloom & Organic Lifestyle Expo",
    city: "Erode",
    venue: "Texvalley Exhibition Center, NH 544",
    timing: "Monthly Regional Fair",
    focus: "Organic Cotton Quilt Rolls & Soaps",
    highlight: "South India's textile heartland showcasing artisan weaving",
    status: "Upcoming Fair"
  },
  {
    id: "mkt-salem-thinnai",
    name: "Salem Thinnai Natural Farmers Market",
    city: "Salem",
    venue: "Fairlands Community Grounds",
    timing: "Sunday Mornings (7:00 AM – 10:30 AM)",
    focus: "Pasture Duck Eggs & Cold-Processed Soaps",
    highlight: "Direct farmer-to-consumer exchange of organic produce",
    status: "Recurring Weekly"
  },
  {
    id: "mkt-tiruppur-ikf",
    name: "Tiruppur Sustainable Craft & Agro Fair",
    city: "Tiruppur",
    venue: "IKF Complex, Kangayam Road",
    timing: "Seasonal Consumer Expo",
    focus: "Natural Quilt Rolls, Coir Crafts, Soaps",
    highlight: "Sustainable textiles & regional organic farmers gathering",
    status: "Seasonal Expo"
  }
];
