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
  { id: "bundles", name: "Farmstead Hampers", icon: "gift" },
  { id: "soaps", name: "Curd Soaps", icon: "droplets" },
  { id: "duck-eggs", name: "Pasture Duck Eggs", icon: "egg" },
  { id: "quilts", name: "Artisanal Quilt Rolls", icon: "scissors" },
  { id: "herbs", name: "Herbal Leaves", icon: "leaf" }
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
    image: "assets/images/hero-basket.jpg",
    description: "Our signature artisanal gift hamper: fresh pasture-roaming duck eggs nestled in golden straw, two cold-process curd soaps wrapped in plain unbranded organic paper stating only the flavor, tied with textured off-white cotton thread with natural seed flecks, alongside sun-cured sacred tulsi and moringa leaves in organic white pouches, and an earthen pot of fresh setting curd.",
    ingredients: "6 Pasture Duck Eggs in Straw + 2 Farmstead Curd Soaps + Sun-Cured Sacred Tulsi & Moringa White Packets + Earthen Setting Curd Pot.",
    benefits: ["100% natural, biodegradable materials", "Soothes the senses with natural earthy textures", "Direct farm-to-table presentation with zero plastic"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "bundle-heirloom-quilt-hamper",
    name: "The Artisanal Quilt Roll & Curd Soap Hamper",
    category: "bundles",
    price: 7200,
    unit: "Master Collector Living Hamper",
    badge: "Artisan Heirloom",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 22,
    image: "assets/images/quilt-hamper.jpg",
    description: "The complete artisanal home upgrade: an individual artisanal quilt roll (55\" × 90\") filled with natural Ilavam Panju (silk cotton), crafted from GOTS-certified and OEKO-TEX certified organically dyed cotton, paired with two cold-process curd soaps wrapped in plain unbranded organic paper and sun-cured herbal leaves in a rustic wooden gift crate.",
    ingredients: "Individual (55\" × 90\") Ilavam Panju Quilt Roll + 2 Cold-Process Curd Soaps + Sun-Cured Herbal Leaves in White Pouches + Rustic Wooden Crate.",
    benefits: ["Natural Ilavam Panju (silk cotton) filling with GOTS & OEKO-TEX certified cotton", "Hypoallergenic, breathable, and organically dyed", "Handcrafted durability built to last generations"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: false
  },
  {
    id: "bundle-nest-crate",
    name: "The Pasture Duck Egg & Curd Soap Nest",
    category: "bundles",
    price: 950,
    unit: "Wooden Tray with 12 Eggs & Curd Soap",
    badge: "Daily Ritual",
    badgeType: "featured",
    rating: 4.9,
    reviewsCount: 34,
    image: "assets/images/egg-soap-nest.jpg",
    description: "A calming morning pairing: 12 fresh pasture-roaming duck eggs nestled in golden meadow straw, alongside an artisanal curd soap bar wrapped in simple organic paper and tied with textured cotton thread with natural flecks, with sun-cured sacred tulsi leaves in an organic white packet.",
    ingredients: "12 Pasture Duck Eggs + 1 Farmstead Curd Soap Bar + Sun-Cured Sacred Tulsi in Clean Straw Bed.",
    benefits: ["Rich in natural nutrients and skin-loving lipids", "Zero chemical pesticides or artificial additives", "Packaged in eco-friendly compostable straw bedding"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },

  // CURD SOAPS (Wrapped in plain unbranded organic paper with only flavor name, tied with seed-flecked cotton thread)
  {
    id: "soap-curd",
    name: "Curd Soap",
    category: "soaps",
    price: 440,
    unit: "120g Artisan Bar",
    badge: "Signature Curd",
    badgeType: "featured",
    rating: 4.9,
    reviewsCount: 38,
    image: "assets/images/artisan-soaps.jpg",
    description: "Cold-processed soap crafted with fresh farmstead curd and pure skin-nourishing botanical oils. Wrapped in plain unbranded organic paper stating only the flavor name, tied with textured off-white cotton thread with natural seed flecks. Aged 6 weeks for a dense, ultra-gentle, skin-softening lather.",
    ingredients: "Saponified Extra Virgin Olive Oil, Farmstead Organic Curd, Cold-Pressed Coconut Oil, Raw Shea Butter, Castor Seed Oil.",
    benefits: ["Natural lactic acid from living farm curd gently softens and clarifies", "Deeply hydrating and restorative for delicate, sensitive skin", "Tied with textured cotton thread, zero company logos on packaging"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "soap-banana-bamboo",
    name: "Banana & Bamboo Soap",
    category: "soaps",
    price: 440,
    unit: "120g Artisan Bar",
    badge: "Silica Rich",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 42,
    image: "assets/images/artisan-soaps.jpg",
    description: "Botanical cold-process bar crafted with real farmstead banana purée and organic bamboo extract rich in bio-silica. Wrapped in plain organic paper showing only the flavor name, tied with textured off-white cotton thread.",
    ingredients: "Fresh Farmstead Ripe Banana Purée, Organic Bamboo Extract, Saponified Olive Oil, Virgin Coconut Oil, Raw Cocoa Butter.",
    benefits: ["Natural potassium and fruit moisture promote smooth skin elasticity", "Bamboo silica strengthens skin barrier and softens texture", "Aged 6 weeks with zero artificial fragrances, colors, or synthetics"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "soap-moringa",
    name: "Moringa Soap",
    category: "soaps",
    price: 440,
    unit: "120g Artisan Bar",
    badge: "Nutrient Dense",
    badgeType: "organic",
    rating: 4.9,
    reviewsCount: 29,
    image: "assets/images/artisan-soaps.jpg",
    description: "Nutrient-packed cold-process soap infused with freshly ground organic moringa leaf powder and cold-pressed moringa seed oil from our farmstead trees. Wrapped in plain organic paper with only the flavor name, tied with textured cotton thread.",
    ingredients: "Organic Farm-Harvested Moringa Leaf (Moringa oleifera), Cold-Pressed Moringa Seed Oil, Saponified Extra Virgin Olive Oil, Virgin Coconut Oil, Shea Butter.",
    benefits: ["Abundant in vitamins A, C, and E for deep cellular nourishment", "Potent antioxidants purify environmental stressors naturally", "Zero palm oil, chemical preservatives, or synthetic additives"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "soap-dry-grass",
    name: "Dry Grass Soap",
    category: "soaps",
    price: 410,
    unit: "120g Artisan Bar",
    badge: "Earthy Botanical",
    badgeType: "organic",
    rating: 4.8,
    reviewsCount: 24,
    image: "assets/images/artisan-soaps.jpg",
    description: "Grounding, therapeutic cold-process soap infused with aromatic solar-cured meadow dry grass and wholesome botanical oils. Offers gentle textural exfoliation and an authentic earthy farmstead aroma. Wrapped in plain organic paper tied with textured seed-flecked cotton thread.",
    ingredients: "Solar-Cured Aromatic Native Dry Grass, Saponified Olive Oil, Virgin Coconut Oil, Farmstead Curd, Raw Shea Butter.",
    benefits: ["Fine natural dry grass fibers provide gentle, non-abrasive skin polishing", "Grounding earthy notes from pure sun-dried meadow botanicals", "Creamy, moisturizing lather cured naturally for 6 weeks"],
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
    name: "Pasture-Roaming Duck Eggs — Farmstead Crate (24 Eggs / 2 Dozen)",
    category: "duck-eggs",
    price: 950,
    unit: "24 Jumbo Eggs in Handcrafted Wooden Straw Crate",
    badge: "Farm Crate",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 19,
    image: "assets/images/duck-eggs.jpg",
    description: "Two full dozen (24 jumbo eggs) fresh pasture-roaming duck eggs nestled securely in clean golden meadow straw inside a rustic wooden crate. Specially curated for families, healthy kitchens, and gourmet baking.",
    ingredients: "24 Free-Range Pasture-Raised Organic Duck Eggs + Handcrafted Wooden Crate + Natural Golden Straw Bedding.",
    benefits: ["Direct farm harvest with maximum freshness and richness", "High in natural vitamins A, B12, and healthy fatty acids", "Eco-friendly compostable straw cushioning in reusable crate"],
    inStock: true,
    isFeatured: false,
    wholesaleAvailable: true
  },

  // ARTISANAL QUILT ROLLS & ORGANIC COTTON LINEN (4 Distinct Products)
  {
    id: "quilt-heirloom-kids",
    name: "Heirloom Artisanal Quilt — Kids (40\" × 50\")",
    category: "quilts",
    price: 5400,
    unit: "40\" × 50\" Kids Quilt Roll • Ilavam Panju",
    badge: "Ilavam Panju Filled",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 16,
    image: "assets/images/quilt-roll.jpg",
    description: "Handcrafted kids quilt roll filled with 100% natural Ilavam Panju (pure kapok / silk cotton) and encased in unbleached organic cotton. Certified GOTS and OEKO-TEX Standard 100, organically dyed with non-toxic botanical pigments. Naturally hypoallergenic and cool in summer, warm in winter. Rolled and tied with raw cotton twine.",
    ingredients: "Natural Ilavam Panju (Silk Cotton) Filling + 100% GOTS & OEKO-TEX Certified Organic Cotton, organically dyed.",
    benefits: ["100% pure Ilavam Panju (silk cotton) filling — natural, chemical-free & buoyant", "GOTS & OEKO-TEX certified (zero synthetics, zero microplastics)", "Perfect size for toddlers and children (40\" × 50\")"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: false
  },
  {
    id: "quilt-heirloom-individual",
    name: "Heirloom Artisanal Quilt — Individual (55\" × 90\")",
    category: "quilts",
    price: 5800,
    unit: "55\" × 90\" Individual Quilt Roll • Ilavam Panju",
    badge: "Ilavam Panju Filled",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 21,
    image: "assets/images/quilt-roll.jpg",
    description: "Master individual quilt roll (55\" × 90\") filled with 100% natural Ilavam Panju (silk cotton) and wrapped in unbleached, organically dyed cotton. Certified GOTS and OEKO-TEX Standard 100, providing breathable, thermal-regulating weight for deep, restorative sleep. Rolled and tied with raw cotton twine.",
    ingredients: "Natural Ilavam Panju (Silk Cotton) Filling + 100% GOTS & OEKO-TEX Certified Organic Cotton, organically dyed.",
    benefits: ["100% pure Ilavam Panju (silk cotton) filling for natural buoyancy and thermal comfort", "GOTS & OEKO-TEX certified with zero toxic chemical treatments", "Generous individual single-bed dimensions (55\" × 90\")"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: false
  },
  {
    id: "quilt-throw-kids",
    name: "Organically Dyed Throw Blanket — Kids (40\" × 50\")",
    category: "quilts",
    price: 2400,
    unit: "40\" × 50\" Kids Throw Blanket Roll",
    badge: "GOTS & OEKO-TEX",
    badgeType: "organic",
    rating: 4.8,
    reviewsCount: 14,
    image: "assets/images/quilt-roll.jpg",
    description: "Lightweight, cozy kids throw blanket woven from premium organic cotton and pure linen, organically dyed in earthy botanical tones. Certified GOTS and OEKO-TEX Standard 100 with zero synthetic dyes or chemicals. Neatly rolled and tied with rustic twine.",
    ingredients: "100% GOTS-Certified & OEKO-TEX Certified Organic Cotton & Pure Linen, organically dyed.",
    benefits: ["Organically dyed, skin-soothing & hypoallergenic for young skin", "GOTS & OEKO-TEX certified with zero synthetic mordants or chemicals", "Lightweight, breathable comfort for naps, car rides, and stroller strolls"],
    inStock: true,
    isFeatured: false,
    wholesaleAvailable: true
  },
  {
    id: "quilt-throw-adult",
    name: "Organically Dyed Throw Blanket — Adult (55\" × 80\")",
    category: "quilts",
    price: 3200,
    unit: "55\" × 80\" Adult Throw Blanket Roll",
    badge: "GOTS & OEKO-TEX",
    badgeType: "organic",
    rating: 4.9,
    reviewsCount: 18,
    image: "assets/images/quilt-roll.jpg",
    description: "Generous adult lap throw blanket roll woven from premium organic cotton and linen, organically dyed in rich earthy hues. Certified GOTS and OEKO-TEX Standard 100 for pure, non-toxic living. Neatly rolled and tied with rustic twine.",
    ingredients: "100% GOTS-Certified & OEKO-TEX Certified Organic Cotton & Pure Linen, organically dyed.",
    benefits: ["Organically dyed with gentle botanical pigments", "GOTS & OEKO-TEX certified (hypoallergenic, zero chemical flame retardants)", "Versatile, breathable comfort for all living spaces and seasons"],
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
    unit: "100g Organic White Packet",
    badge: "Organic White Packet",
    badgeType: "organic",
    rating: 4.9,
    reviewsCount: 19,
    image: "assets/images/tulsi-jar.jpg",
    description: "Adaptogenic sacred holy basil (Tulsi) grown in mineral-rich living soil, shade-dried to preserve natural volatile oils and whole leaf integrity. Packaged in a 100g clean white organic packet (not brown Kraft or jar) to seal in therapeutic freshness.",
    ingredients: "100% Pure Organic Krishna & Rama Tulsi Leaves (Ocimum sanctum) in 100g White Packet.",
    benefits: ["Calms the nervous system and supports natural stress resilience", "Rich in natural antioxidants, eugenol, and essential phytochemicals", "Packed in 100g clean white organic pouches for maximum purity"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "herb-moringa-leaves",
    name: "Sun-Dried Organic Moringa Leaves (100g)",
    category: "herbs",
    price: 320,
    unit: "100g Organic White Packet",
    badge: "Organic White Packet",
    badgeType: "fresh",
    rating: 4.9,
    reviewsCount: 26,
    image: "assets/images/rosemary-sage-stems.jpg",
    description: "Sun-dried whole organic moringa leaves harvested fresh from our farmstead trees. Packed in a 100g clean white organic packet, locking in natural plant protein, iron, and vitality without exposure to moisture or light.",
    ingredients: "100% Organically Grown Whole Moringa Leaves (Moringa oleifera) in 100g White Packet.",
    benefits: ["Dense with essential vitamins, bio-available iron, and amino acids", "Gentle sun-drying preserves active chlorophyll and plant vitality", "Packaged in 100g clean white organic packets for everyday wellness"],
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
    image: "assets/images/hero-basket.jpg",
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
    description: "A hands-on 1–2 hour artisanal soapmaking session. Formulate and pour your own custom cold-process curd soap bar using pure plant oils, farm herbs, and natural earth clays.",
    included: [
      "1–2 hours guided hands-on soapmaking session",
      "Formulate your own custom cold-process curd soap bar",
      "Pure plant oils, wild botanical stems, and molds provided",
      "Take your newly crafted soap bar home with curing guide"
    ],
    times: ["Morning Slot (07:00 – 09:00)", "Mid-Morning Slot (09:30 – 11:30)", "Midday Slot (12:00 – 14:00)", "Afternoon Slot (14:30 – 16:30)"]
  }
];

const BLOG_POSTS = [
  {
    id: "blog-01-eating-healthy",
    title: "Is eating healthy, healthy?",
    category: "Nutrition & Intuition",
    date: "Oct 13, 2026",
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

// Staged Dispatches — Strictly ONE dispatch per day cadence
const STAGED_BLOG_POSTS = [
  {
    id: "blog-02-hard-way",
    title: "Why’re we doing everything the hard way?",
    category: "Farmstead Lore",
    date: "Oct 14, 2026",
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
    id: "blog-03-rushing",
    title: "What’re we all rushing towards?",
    category: "Slow Living & Philosophy",
    date: "Oct 15, 2026",
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
  }
];

const FAQS = [
  {
    q: "How do I place an order for products?",
    a: "You can add any items to your online cart and click 'Complete Order via WhatsApp' or 'Submit Order by Email'. This sends your exact order directly to our farm packing team without any middleman fees, and we confirm payment in INR & dispatch immediately!"
  },
  {
    q: "Are your soaps 100% free of synthetic fragrances and palm oil?",
    a: "Yes! Every single bar of UP Purreins soap is cold-processed using pure natural olive, coconut, shea, and sweet almond oils. We scent exclusively with pure steam-distilled essential oils and color with wild clays and plant extracts. Zero artificial dyes, zero palm oil, zero phthalates."
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
    category: "Handcrafted Curd Soaps",
    minOrder: "30 Bars (Assorted varieties: Curd, Banana & Bamboo, Moringa, Dry Grass)",
    discount: "35% - 45% off retail",
    packaging: "Plain unbranded organic Kraft paper noting only soap flavor, tied with textured seed-flecked cotton thread",
    leadTime: "3-5 business days"
  },
  {
    category: "Artisanal Quilt Rolls",
    minOrder: "10 Rolls / Throws",
    discount: "Trade & boutique wholesale rates",
    packaging: "GOTS & OEKO-TEX certified, organically dyed, rolled with raw cotton twine & care cards",
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
    packaging: "Aroma-sealed jars / hand-tied organic bundles",
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
