// UP Purreins & Purreins Frequency - Central Data Store
// Curated pure-living catalog: Coir/Straw Baskets, Soaps, Duck Eggs, Quilt Rolls & Herbal Stems

const BRAND_CONFIG = {
  brandName: "UP Purreins",
  companyName: "Purreins Frequency",
  tagline: "Purreins Frequency, waves of raw & real resources.",
  description: "Handcrafted soaps, pasture duck eggs in straw, natural quilt rolls, fresh herbal stems, and hand-woven coir baskets.",
  currency: "INR",
  currencySymbol: "INR ",
  phone: "+91 72042 71822",
  whatsappNumber: "917204271822",
  email: "hello@purreinsfrequency.com",
  wholesaleEmail: "wholesale@purreinsfrequency.com",
  address: "347/A Royalwings Nilayam, Kallapara, Sadak road, Kizhakkambalam, Oorakadu, Kunnathunad, Ernakulam 683562",
  hours: "Tuesday – Sunday: 8:00 AM – 6:00 PM (Monday Closed for Regeneration)",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    pinterest: "https://pinterest.com"
  }
};

const CATEGORIES = [
  { id: "all", name: "All Offerings", icon: "sparkles" },
  { id: "bundles", name: "Farmstead Hampers", icon: "gift" },
  { id: "soaps", name: "Soaps", icon: "droplets" },
  { id: "duck-eggs", name: "Pasture Duck Eggs", icon: "egg" },
  { id: "quilts", name: "Heirloom Quilt Rolls", icon: "scissors" },
  { id: "herbs", name: "Herbal Stems & Leaves", icon: "leaf" },
  { id: "coir", name: "Coir & Straw Crafts", icon: "box" }
];

const PRODUCTS = [
  // CURATED FARMSTEAD HAMPERS (Each with unique image)
  {
    id: "bundle-straw-coir-basket",
    name: "The Farmstead Straw & Coir Harvest Hamper",
    category: "bundles",
    price: 1450,
    unit: "Woven Coir Basket with Eggs, Soaps & Fresh Leaves",
    badge: "Signature Hamper",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 47,
    image: "assets/images/hero-basket.jpg",
    description: "Our signature artisanal gift hamper: a hand-woven organic straw and coir basket filled with fresh pasture duck eggs on straw, two cold-process soaps crafted with farmstead curd and wrapped in plain organic paper stating only the flavor, tied with textured off-white cotton thread with natural seed flecks, alongside whole leafy herbal stems and an earthen black pot of fresh setting curd.",
    ingredients: "Handcrafted Coir & Straw Basket + 6 Pasture Duck Eggs + 2 Curd Soaps with Textured Cotton Thread + Fresh Herbal Stems + Setting Curd Pot.",
    benefits: ["100% natural, biodegradable materials", "Soothes the senses with natural earthy textures", "Direct farm-to-table presentation with zero plastic"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "bundle-heirloom-quilt-hamper",
    name: "The Heirloom Quilt Roll & Soap Hamper",
    category: "bundles",
    price: 5800,
    unit: "Master Collector Living Hamper",
    badge: "Artisan Heirloom",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 22,
    image: "assets/images/quilt-hamper.jpg",
    description: "The complete artisanal home upgrade: a queen-size hand-stitched organic cotton quilt roll tied with textured cotton twine, paired with two cold-process soaps wrapped in plain unbranded organic paper and whole dried herbal stems in a wooden gift crate.",
    ingredients: "Queen Organic Cotton Quilt Roll + 2 Cold-Process Soaps + Dried Herbal Stems + Rustic Wooden Crate.",
    benefits: ["GOTS-certified organic cotton with zero synthetic fibers", "Hypoallergenic and naturally breathable", "Handcrafted durability built to last generations"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: false
  },
  {
    id: "bundle-nest-crate",
    name: "The Pasture Duck Egg & Soap Nest",
    category: "bundles",
    price: 950,
    unit: "Shallow Coir Tray with Eggs & Soap",
    badge: "Daily Ritual",
    badgeType: "featured",
    rating: 4.9,
    reviewsCount: 34,
    image: "assets/images/egg-soap-nest.jpg",
    description: "A calming morning pairing: fresh pasture-roaming duck eggs nestled in golden straw and raw coir fibers, alongside an oat, curd, and honey cold-process soap wrapped in simple organic paper and tied with textured cotton thread with natural flecks, with a whole fresh herbal stem.",
    ingredients: "Half-Dozen Pasture Duck Eggs + 1 Artisanal Curd Soap Bar + Fresh Herbal Stems in Straw Bed.",
    benefits: ["Rich in natural nutrients and skin-loving lipids", "Zero chemical pesticides or artificial additives", "Packaged in eco-friendly compostable straw bedding"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },

  // SOAPS (Simplified naming, clean packaging: organic paper with only flavor name, no company logo)
  {
    id: "soap-wild-honey-oat",
    name: "Honey & Oat Soap",
    category: "soaps",
    price: 280,
    unit: "120g Artisan Bar",
    badge: "Bestseller",
    badgeType: "featured",
    rating: 4.9,
    reviewsCount: 38,
    image: "assets/images/artisan-soaps.jpg",
    description: "Cold-processed soap enriched with fresh farmstead curd, raw unpasteurized honey, organic colloidal oats, and pure shea butter. Wrapped in plain organic paper showing only the flavor name, tied with textured off-white cotton thread with natural seed flecks. Aged 6 weeks for rich, creamy lather.",
    ingredients: "Saponified Extra Virgin Olive Oil, Virgin Coconut Oil, Farmstead Organic Curd, Raw Farm Honey, Organic Colloidal Oats, Raw Shea Butter.",
    benefits: ["Natural lactic acid from farm curd gently clarifies and softens", "Deeply hydrating & calming for sensitive skin", "Tied with textured cotton thread, zero company logos on packaging"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "soap-eucalyptus-clay",
    name: "Eucalyptus & Clay Soap",
    category: "soaps",
    price: 280,
    unit: "120g Artisan Bar",
    badge: "Mineral Dense",
    badgeType: "organic",
    rating: 4.8,
    reviewsCount: 24,
    image: "assets/images/artisan-soaps.jpg",
    description: "Clarifying soap loaded with mineral-dense French green clay, steam-distilled eucalyptus, and wild tea tree oil. Wrapped in plain organic paper with only the soap flavor, tied with textured off-white cotton thread.",
    ingredients: "Saponified Extra Virgin Olive Oil, French Green Clay, Organic Eucalyptus Globulus Oil, Organic Melaleuca (Tea Tree) Oil, Castor Seed Oil.",
    benefits: ["Draws out impurities and clarifies pores", "Invigorating aromatherapy with pure essential oils", "No palm oil, parabens, or artificial dyes"],
    inStock: true,
    isFeatured: false,
    wholesaleAvailable: true
  },
  {
    id: "soap-lavender-calendula",
    name: "Calendula & Lavender Soap",
    category: "soaps",
    price: 320,
    unit: "120g Artisan Bar",
    badge: "Cold Cured",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 42,
    image: "assets/images/artisan-soaps.jpg",
    description: "Infused with whole organic calendula petals hand-harvested from our permaculture beds and mountain lavender oil. Wrapped in plain organic paper with flavor name, tied with textured cotton thread.",
    ingredients: "Solar-infused Calendula Olive Oil, Organic Lavender Essential Oil, Babassu Oil, Cocoa Butter, Whole Calendula Florets.",
    benefits: ["Soothes delicate skin", "Relaxing floral herbal aroma", "Aged for 6 weeks for ultra-creamy lather"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },

  // DUCK EGGS
  {
    id: "eggs-pasture-duck",
    name: "Pasture-Roaming Duck Eggs",
    category: "duck-eggs",
    price: 180,
    unit: "Half Dozen (6 Jumbo Eggs in Straw Bed)",
    badge: "Pasture Roaming",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 38,
    image: "assets/images/duck-eggs.jpg",
    description: "Rich, creamy duck eggs from heritage ducks roaming freely along organic permaculture pond beds and fresh herb patches. Nestled safely in clean natural straw.",
    ingredients: "100% Free-Range Pasture-Raised Organic Duck Eggs.",
    benefits: ["Double the Omega-3 fatty acids and vitamin D of chicken eggs", "Rich golden yolks high in choline for brain health", "Incredible richness for baking and gourmet cooking"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },

  // HANDCRAFTED QUILT ROLLS
  {
    id: "quilt-heirloom-patchwork",
    name: "Heirloom Artisan Patchwork Quilt Roll",
    category: "quilts",
    price: 5400,
    unit: "90\" x 90\" Queen Quilt Roll",
    badge: "Hand-Stitched",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 16,
    image: "assets/images/quilt-roll.jpg",
    description: "Artisan-stitched quilt crafted with unbleached organic cotton and naturally plant-dyed textile remnants. Rolled and tied with raw jute twine.",
    ingredients: "100% Organic GOTS-Certified Cotton, naturally dyed with madder root and indigo.",
    benefits: ["Zero synthetic microplastics or chemical flame retardants", "Breathable thermal regulation for deep, restful sleep", "Hand-stitched durability made to pass down generations"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: false
  },
  {
    id: "quilt-organic-indigo-throw",
    name: "Hand-Dyed Organic Cotton Linen Blanket Roll",
    category: "quilts",
    price: 2800,
    unit: "50\" x 70\" Throw Blanket Roll",
    badge: "Plant Dyed",
    badgeType: "organic",
    rating: 4.8,
    reviewsCount: 12,
    image: "assets/images/quilt-roll.jpg",
    description: "Cozy lap throw hand-dyed in small wooden fermentation vats using farm-grown organic indigo leaves. Neatly rolled and tied with rustic twine.",
    ingredients: "100% Organic Unbleached Hand-Spun Cotton, Organic Indigofera tinctoria dye.",
    benefits: ["Pure plant dye is hypoallergenic and skin-soothing", "Lightweight yet exceptionally cozy for all seasons", "Each piece features unique artisanal ombre patterning"],
    inStock: true,
    isFeatured: false,
    wholesaleAvailable: true
  },

  // HERBAL STEMS & LEAVES (Unique image for fresh stems)
  {
    id: "herb-sacred-tulsi",
    name: "Sun-Cured Sacred Tulsi Leaves",
    category: "herbs",
    price: 240,
    unit: "80g Glass Apothecary Jar",
    badge: "Wild Harvest",
    badgeType: "organic",
    rating: 4.9,
    reviewsCount: 19,
    image: "assets/images/tulsi-jar.jpg",
    description: "Adaptogenic holy basil grown in mineral-rich living soil, shade-dried to preserve essential volatile oils and whole leaf structure.",
    ingredients: "100% Pure Organic Krishna & Rama Tulsi Leaves (Ocimum sanctum).",
    benefits: ["Calms the nervous system and supports stress resilience", "Rich in natural antioxidants and eugenol", "Ideal for daily restorative herbal tea infusions"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "herb-rosemary-sage-bundle",
    name: "Fresh Farmstead Rosemary & Sage Whole Stems",
    category: "herbs",
    price: 190,
    unit: "Fresh Harvest Whole Stem Bundle",
    badge: "Fresh Stems",
    badgeType: "fresh",
    rating: 4.8,
    reviewsCount: 15,
    image: "assets/images/rosemary-sage-stems.jpg",
    description: "Hand-tied with organic unbleached cotton string. Fresh aromatic rosemary whole branch paired with garden-grown cleansing sage stems.",
    ingredients: "Fresh Cut Rosemary Whole Stems (Salvia rosmarinus), Organic Garden Sage Stems (Salvia officinalis).",
    benefits: ["Intense natural aroma for room freshness and culinary use", "Can be hung dry in warm kitchens", "Harvested same morning of dispatch"],
    inStock: true,
    isFeatured: false,
    wholesaleAvailable: true
  },

  // COIR & STRAW CRAFTS (Unique image for basket)
  {
    id: "craft-coir-soap-deck",
    name: "Hand-Loomed Coconut Coir Soap Deck",
    category: "coir",
    price: 150,
    unit: "Natural Coir Fiber Draining Tray",
    badge: "Zero Waste",
    badgeType: "organic",
    rating: 4.9,
    reviewsCount: 28,
    image: "assets/images/coir-products.jpg",
    description: "Woven entirely by hand from raw coconut husk coir fiber. Drains excess water away from soap bars, extending bar longevity naturally.",
    ingredients: "100% Untreated Raw Coconut Coir Fiber.",
    benefits: ["Naturally antimicrobial and quick-drying", "Extends artisanal soap life by 30%", "Completely compostable at end of life"],
    inStock: true,
    isFeatured: false,
    wholesaleAvailable: true
  },
  {
    id: "craft-straw-coir-basket",
    name: "Hand-Woven Natural Straw & Coir Farm Basket",
    category: "coir",
    price: 750,
    unit: "Artisan Basket with Handles",
    badge: "Hand Woven",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 17,
    image: "assets/images/straw-basket-craft.jpg",
    description: "Traditional sturdy storage and harvest basket crafted from natural straw and coir fiber. Perfect for holding farm eggs, soaps, and textiles.",
    ingredients: "Natural Coir Husk Fibers and Dried Meadow Straw.",
    benefits: ["Sturdy braided construction with dual handles", "Zero plastic or synthetic varnishes", "Timeless organic aesthetic for any living space"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  }
];

// CLEAR 1-DAY FARM VISITS (Simple calculation per visitor per day, open Tue–Sun)
const FARM_VISITS = [
  {
    id: "tour-farmstead-day-pass",
    title: "Full Farmstead Experience (1 Day Visit)",
    duration: "1 Day Visit",
    pricePerPerson: 450,
    image: "assets/images/hero-basket.jpg",
    badge: "Most Popular",
    days: "Open Daily (Tue – Sun)",
    timing: "9:00 AM – 5:00 PM",
    description: "Spend a relaxing day at our organic farm. Walk living soil permaculture beds, feed pasture ducks by the pond, and enjoy farmstead hospitality.",
    included: [
      "Full 1-day farm access (permaculture beds & living soil grounds)",
      "Meet and feed free-roaming pasture ducks by the pond",
      "Interactive whole herbal stem harvesting session",
      "Complimentary fresh herbal tea & farm hospitality"
    ],
    times: ["Morning Entry (9:00 AM – 1:00 PM)", "Afternoon Entry (1:00 PM – 5:00 PM)"]
  },
  {
    id: "tour-duckling-homestead",
    title: "Duckling Meadow & Family Day (1 Day Visit)",
    duration: "1 Day Visit",
    pricePerPerson: 350,
    image: "assets/images/duck-family.jpg",
    badge: "Family Friendly",
    days: "Open Daily (Tue – Sun)",
    timing: "9:00 AM – 5:00 PM",
    description: "Experience our pasture-roaming ducks in their natural pond habitat. Learn about ethical free-range egg collection and heritage poultry care.",
    included: [
      "Feed and spend time with free-range heritage ducks along wetland reeds",
      "Fresh egg collection and straw nest preparation session",
      "Complimentary half-dozen pasture duck eggs to take home",
      "Educational talk on regenerative duck-assisted permaculture"
    ],
    times: ["Morning Entry (9:00 AM – 1:00 PM)", "Afternoon Entry (1:00 PM – 5:00 PM)"]
  },
  {
    id: "tour-soap-masterclass",
    title: "Cold-Process Soap Workshop & Day Visit",
    duration: "1 Day Workshop",
    pricePerPerson: 950,
    image: "assets/images/artisan-soaps.jpg",
    badge: "Craft Workshop",
    days: "Open Daily (Tue – Sun)",
    timing: "11:00 AM – 3:00 PM",
    description: "Full day access to the farm grounds plus hands-on artisan soapmaking. Formulate your own custom 500g soap block using farm herbs, natural clays, and curd.",
    included: [
      "Full 1-day farm access and guided workshop",
      "Formulate and craft your own custom 500g soap block",
      "All organic ingredients, molds, and safety gear provided",
      "Recipe handbook and soap-curing guide to take home"
    ],
    times: ["Workshop Session (11:00 AM – 3:00 PM)"]
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
  },
  {
    id: "blog-02-hard-way",
    title: "Why’re we doing everything the hard way?",
    category: "Farmstead Lore",
    date: "Oct 13, 2026",
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
  }
];

// Staged for Day After (Wednesday, Oct 14, 2026) - Cadence: 2 blogs per day
const STAGED_BLOG_POSTS = [
  {
    id: "blog-03-rushing",
    title: "What’re we all rushing towards?",
    category: "Slow Living & Philosophy",
    date: "Oct 14, 2026",
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
    q: "Can we order custom gift hampers with straw baskets?",
    a: "Yes! Our hand-woven straw and coir hampers can be customized with your choice of cold-process soaps, pasture duck eggs, and organic quilt rolls for festive gifting, wedding favors, and corporate hampers."
  },
  {
    q: "How does Farm Visit booking work?",
    a: "Booking is simple: choose any day between Tuesday and Sunday for a 1-day farm visit. The rate is calculated simply as [Number of Guests] × [Price per person]. You can confirm your booking instantly via WhatsApp or pay upon arrival."
  }
];

const WHOLESALE_TIERS = [
  {
    category: "Handcrafted Soaps",
    minOrder: "30 Bars (Assorted scents)",
    discount: "35% - 45% off retail",
    packaging: "Plain unbranded organic Kraft paper noting only soap flavor, tied with textured cotton thread",
    leadTime: "3-5 business days"
  },
  {
    category: "Heirloom Quilt Rolls",
    minOrder: "10 Rolls / Throws",
    discount: "Trade & boutique wholesale rates",
    packaging: "Rolled with raw jute twine & care cards",
    leadTime: "Handcrafted to order"
  },
  {
    category: "Fresh Pasture Duck Eggs",
    minOrder: "10 Cartons (Weekly standing order)",
    discount: "Direct bakery & restaurant rates",
    packaging: "Molded pulp cartons in straw bed",
    leadTime: "Daily morning collection"
  }
];

const MARKET_EVENTS = [
  {
    id: "mkt-kochi-fleak",
    name: "Kochi On Flea.k Pop-up",
    city: "Kochi",
    venue: "The Grounds, Chakola Mill, Kalamassery",
    timing: "Seasonal Weekend Edition (11:00 AM – 10:00 PM)",
    focus: "Soaps, Quilt Rolls, Coir Baskets",
    highlight: "Kerala's premier youth & conscious lifestyle flea market",
    status: "Upcoming Edition"
  },
  {
    id: "mkt-kochi-naattunanma",
    name: "Naattunanma Organic Farmers Market",
    city: "Kochi",
    venue: "Govt LP School Grounds, Kakkanad",
    timing: "Every Sunday Morning (8:00 AM – 11:00 AM)",
    focus: "Pasture Duck Eggs, Soaps, Whole Herbal Stems",
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
