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
  { id: "all", name: "All Offerings", name_de: "Alle Angebote", icon: "sparkles" },
  { id: "bundles", name: "Farmstead Hampers", name_de: "Hof-Präsentkörbe", icon: "gift" },
  { id: "soaps", name: "Curd Soaps", name_de: "Quarkseifen", icon: "droplets" },
  { id: "duck-eggs", name: "Pasture Duck Eggs", name_de: "Weide-Enteneier", icon: "egg" },
  { id: "quilts", name: "Artisanal Quilt Rolls", name_de: "Handgefertigte Steppdecken", icon: "scissors" },
  { id: "herbs", name: "Herbal Leaves", name_de: "Kräuterblätter", icon: "leaf" }
];

const PRODUCTS = [
  // CURATED FARMSTEAD HAMPERS (Each with unique image)
  {
    id: "bundle-farmstead-harvest",
    name: "The Farmstead Harvest Hamper",
    name_de: "Der Hof-Ernte-Präsentkorb",
    category: "bundles",
    price: 4500,
    priceEUR: 50.00,
    unit: "Artisanal Gift Hamper with Eggs, Curd Soaps & Leaves",
    unit_de: "Handgefertigter Präsentkorb mit Eiern, Quarkseifen & Kräutern",
    badge: "Signature Hamper",
    badge_de: "Hof-Präsentkorb",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 47,
    image: "assets/images/hero-basket.jpg",
    description: "Our signature artisanal gift hamper: fresh pasture-roaming duck eggs nestled in golden straw, two cold-process curd soaps wrapped in plain unbranded organic paper stating only the flavor, tied with textured off-white cotton thread with natural seed flecks, alongside sun-cured sacred tulsi and moringa leaves in organic white pouches, and an earthen pot of fresh setting curd.",
    description_de: "Unser exklusiver Hof-Präsentkorb: Frische Weide-Enteneier im Strohbett, zwei kaltgesiedete Quarkseifen in naturbelassenem Papier mit schlichter Sortenbezeichnung, verpackt mit Samen-gesprenkeltem Baumwollfaden, sonnengetrocknetes Tulsi- und Moringakraut im weißen Bio-Beutel und ein traditioneller Tontopf mit frischem Hof-Quark.",
    ingredients: "6 Pasture Duck Eggs in Straw + 2 Farmstead Curd Soaps + Sun-Cured Sacred Tulsi & Moringa White Packets + Earthen Setting Curd Pot.",
    ingredients_de: "6 Weide-Enteneier im Strohbett + 2 Hof-Quarkseifen + Sonnengetrocknetes Tulsi & Moringa im weißen Beutel + Tontopf mit Hof-Quark.",
    benefits: ["100% natural, biodegradable materials", "Soothes the senses with natural earthy textures", "Direct farm-to-table presentation with zero plastic"],
    benefits_de: ["100% natürliche, biologisch abbaubare Materialien", "Natürliche erdige Texturen für die Sinne", "Plastikfreie, direkte Hof-zu-Tisch Präsentation"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "bundle-heirloom-quilt-hamper",
    name: "The Artisanal Quilt Roll & Curd Soap Hamper",
    name_de: "Hof-Präsentkorb mit Steppdecke & Quarkseifen",
    category: "bundles",
    price: 7200,
    priceEUR: 80.00,
    unit: "Master Collector Living Hamper",
    unit_de: "Exklusives Hof-Sammlerset mit Steppdecke",
    badge: "Artisan Heirloom",
    badge_de: "Kunsthandwerk",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 22,
    image: "assets/images/quilt-hamper.jpg",
    description: "The complete artisanal home upgrade: an individual artisanal quilt roll (55\" × 90\") filled with natural Ilavam Panju (silk cotton), crafted from GOTS-certified and OEKO-TEX certified organically dyed cotton, paired with two cold-process curd soaps wrapped in plain unbranded organic paper and sun-cured herbal leaves in a rustic wooden gift crate.",
    description_de: "Das vollendete Wohn- und Wellness-Set: Eine handgefertigte Einzelbett-Steppdecke (55\" × 90\") gefüllt mit natürlicher Ilavam Panju (Seidenbaumwolle), GOTS & OEKO-TEX zertifiziert, biologisch gefärbt, gebunden mit rustikalem Baumwollgarn, zusammen mit zwei echten Quarkseifen und sonnengetrockneten Hofkräutern in einer rustikalen Holzkiste.",
    ingredients: "Individual (55\" × 90\") Ilavam Panju Quilt Roll + 2 Cold-Process Curd Soaps + Sun-Cured Herbal Leaves in White Pouches + Rustic Wooden Crate.",
    ingredients_de: "Einzelbett (55\" × 90\") Ilavam Panju Steppdecke + 2 Kaltprozess-Quarkseifen + Sonnengetrocknete Kräuterblätter + Rustikale Holzkiste.",
    benefits: ["Natural Ilavam Panju (silk cotton) filling with GOTS & OEKO-TEX certified cotton", "Hypoallergenic, breathable, and organically dyed", "Handcrafted durability built to last generations"],
    benefits_de: ["Reine Ilavam Panju Füllung (Seidenbaumwolle) mit GOTS & OEKO-TEX zertifizierter Baumwolle", "Hypoallergen, atmungsaktiv und schonend bio-gefärbt", "Handgefertigte Langlebigkeit für Generationen"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: false
  },
  {
    id: "bundle-nest-crate",
    name: "The Pasture Duck Egg & Curd Soap Nest",
    name_de: "Enteneier- & Quarkseifen-Nest",
    category: "bundles",
    price: 950,
    priceEUR: 10.50,
    unit: "Wooden Tray with 12 Eggs & Curd Soap",
    unit_de: "Holzschale mit 12 Eiern & Quarkseife",
    badge: "Daily Ritual",
    badge_de: "Tägliches Ritual",
    badgeType: "featured",
    rating: 4.9,
    reviewsCount: 34,
    image: "assets/images/egg-soap-nest.jpg",
    description: "A calming morning pairing: 12 fresh pasture-roaming duck eggs nestled in golden meadow straw, alongside an artisanal curd soap bar wrapped in simple organic paper and tied with textured cotton thread with natural flecks, with sun-cured sacred tulsi leaves in an organic white packet.",
    description_de: "Ein besinnliches Morgenritual: 12 frische Weide-Enteneier im weichen Wiesenstrohbett, dazu eine handgesiedete Hof-Quarkseife im schlichten Bio-Papier mit naturbelassenem Baumwollfaden und sonnengetrocknetes Heiliges Tulsikraut im weißen Frischebeutel.",
    ingredients: "12 Pasture Duck Eggs + 1 Farmstead Curd Soap Bar + Sun-Cured Sacred Tulsi in Clean Straw Bed.",
    ingredients_de: "12 Weide-Enteneier + 1 Hof-Quarkseife + Sonnengetrocknetes Heiliges Tulsi im Strohbett.",
    benefits: ["Rich in natural nutrients and skin-loving lipids", "Zero chemical pesticides or artificial additives", "Packaged in eco-friendly compostable straw bedding"],
    benefits_de: ["Reich an wertvollen Omega-3-Fettsäuren und Nährstoffen", "Frei von chemischen Pestiziden oder künstlichen Zusätzen", "Kompostierbare Wiesenstroh-Verpackung"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },

  // CURD SOAPS (Wrapped in plain unbranded organic paper with only flavor name, tied with seed-flecked cotton thread)
  {
    id: "soap-curd",
    name: "Curd Soap",
    name_de: "Echte Hof-Quarkseife",
    category: "soaps",
    price: 440,
    priceEUR: 4.90,
    unit: "120g Artisan Bar",
    unit_de: "120g Handgesiedetes Seifenstück",
    badge: "Signature Curd",
    badge_de: "Signature-Quark",
    badgeType: "featured",
    rating: 4.9,
    reviewsCount: 38,
    image: "assets/images/artisan-soaps.jpg",
    description: "Cold-processed soap crafted with fresh farmstead curd and pure skin-nourishing botanical oils. Wrapped in plain unbranded organic paper stating only the flavor name, tied with textured off-white cotton thread with natural seed flecks. Aged 6 weeks for a dense, ultra-gentle, skin-softening lather.",
    description_de: "Kaltgesiedete Naturseife mit frischem Hof-Quark und hautschonenden Pflanzenölen. Eingeschlagen in unbedrucktem Bio-Papier mit Sortenaufdruck, gebunden mit baumwollenem Faden mit natürlichen Samensprenkeln. 6 Wochen gereift für einen cremigen, hautberuhigenden Schaum.",
    ingredients: "Saponified Extra Virgin Olive Oil, Farmstead Organic Curd, Cold-Pressed Coconut Oil, Raw Shea Butter, Castor Seed Oil.",
    ingredients_de: "Verseiftes natives Olivenöl extra, frischer Bio-Hofquark, kaltgepresstes Kokosöl, reine Sheabutter, Rizinusöl.",
    benefits: ["Natural lactic acid from living farm curd gently softens and clarifies", "Deeply hydrating and restorative for delicate, sensitive skin", "Tied with textured cotton thread, zero company logos on packaging"],
    benefits_de: ["Natürliche Milchsäure aus frischem Hofquark glättet und beruhigt sanft", "Tiefenwirksam feuchtigkeitsspendend für empfindliche Haut", "Gebunden mit Baumwollschnur, frei von Werbelogos auf der Verpackung"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "soap-banana-bamboo",
    name: "Banana & Bamboo Soap",
    name_de: "Bananen- & Bambusseife",
    category: "soaps",
    price: 440,
    priceEUR: 4.90,
    unit: "120g Artisan Bar",
    unit_de: "120g Handgesiedetes Seifenstück",
    badge: "Silica Rich",
    badge_de: "Kieselsäurereich",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 42,
    image: "assets/images/artisan-soaps.jpg",
    description: "Botanical cold-process bar crafted with real farmstead banana purée and organic bamboo extract rich in bio-silica. Wrapped in plain organic paper showing only the flavor name, tied with textured off-white cotton thread.",
    description_de: "Botanische Kaltprozess-Seife mit erntefrischem Bananenpüree und natürlichem Bambusextrakt reich an wertvoller Bio-Kieselsäure. Eingeschlagen in schlichtem Bio-Papier mit naturbelassenem Baumwollgarn.",
    ingredients: "Fresh Farmstead Ripe Banana Purée, Organic Bamboo Extract, Saponified Olive Oil, Virgin Coconut Oil, Raw Cocoa Butter.",
    ingredients_de: "Frisches reifes Hof-Bananenpüree, Bio-Bambusextrakt, verseiftes Olivenöl, natives Kokosöl, reine Kakaobutter.",
    benefits: ["Natural potassium and fruit moisture promote smooth skin elasticity", "Bamboo silica strengthens skin barrier and softens texture", "Aged 6 weeks with zero artificial fragrances, colors, or synthetics"],
    benefits_de: ["Natürliches Kalium und Fruchtfeuchtigkeit fördern die Hautelastizität", "Bambus-Kieselsäure stärkt die Hautbarriere und verfeinert das Hautbild", "6 Wochen gereift, 100% frei von synthetischen Düften und Farbstoffen"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "soap-moringa",
    name: "Moringa Soap",
    name_de: "Moringaseife",
    category: "soaps",
    price: 440,
    priceEUR: 4.90,
    unit: "120g Artisan Bar",
    unit_de: "120g Handgesiedetes Seifenstück",
    badge: "Nutrient Dense",
    badge_de: "Nährstoffreich",
    badgeType: "organic",
    rating: 4.9,
    reviewsCount: 29,
    image: "assets/images/artisan-soaps.jpg",
    description: "Nutrient-packed cold-process soap infused with freshly ground organic moringa leaf powder and cold-pressed moringa seed oil from our farmstead trees. Wrapped in plain organic paper with only the flavor name, tied with textured cotton thread.",
    description_de: "Nährstoffreiche Kaltprozess-Seife mit feinst vermahlenen Bio-Moringablättern und kaltgepresstem Moringasamenöl von unseren Hofbäumen. Verpackt in reinem Papier, gebunden mit strukturierter Baumwollschnur.",
    ingredients: "Organic Farm-Harvested Moringa Leaf (Moringa oleifera), Cold-Pressed Moringa Seed Oil, Saponified Extra Virgin Olive Oil, Virgin Coconut Oil, Shea Butter.",
    ingredients_de: "Bio-Moringablätter (Moringa oleifera), kaltgepresstes Moringasamenöl, verseiftes natives Olivenöl extra, Kokosöl, Sheabutter.",
    benefits: ["Abundant in vitamins A, C, and E for deep cellular nourishment", "Potent antioxidants purify environmental stressors naturally", "Zero palm oil, chemical preservatives, or synthetic additives"],
    benefits_de: ["Reich an Vitamin A, C und E für intensive Tiefenpflege", "Kraftvolle Antioxidantien schützen die Haut vor Umwelteinflüssen", "Frei von Palmöl, Konservierungsstoffen und synthetischen Tensiden"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "soap-dry-grass",
    name: "Dry Grass Soap",
    name_de: "Wiesengrasseife",
    category: "soaps",
    price: 410,
    priceEUR: 4.60,
    unit: "120g Artisan Bar",
    unit_de: "120g Handgesiedetes Seifenstück",
    badge: "Earthy Botanical",
    badge_de: "Erdig & Botanisch",
    badgeType: "organic",
    rating: 4.8,
    reviewsCount: 24,
    image: "assets/images/artisan-soaps.jpg",
    description: "Grounding, therapeutic cold-process soap infused with aromatic solar-cured meadow dry grass and wholesome botanical oils. Offers gentle textural exfoliation and an authentic earthy farmstead aroma. Wrapped in plain organic paper tied with textured seed-flecked cotton thread.",
    description_de: "Erdende, wohltuende Naturseife veredelt mit sonnengetrocknetem aromatischem Wiesengras und nährenden Pflanzenölen. Bietet ein sanftes natürliches Peeling und einen authentischen, erdigen Duft nach sonnigem Heu.",
    ingredients: "Solar-Cured Aromatic Native Dry Grass, Saponified Olive Oil, Virgin Coconut Oil, Farmstead Curd, Raw Shea Butter.",
    ingredients_de: "Sonnengetrocknetes aromatisches Wiesengras, verseiftes Olivenöl, Kokosöl, frischer Hof-Quark, reine Sheabutter.",
    benefits: ["Fine natural dry grass fibers provide gentle, non-abrasive skin polishing", "Grounding earthy notes from pure sun-dried meadow botanicals", "Creamy, moisturizing lather cured naturally for 6 weeks"],
    benefits_de: ["Feine Wiesengrasfasern sorgen für ein sanftes, nicht-abrasives Hautpeeling", "Erdender, warmer Naturduft aus der sonnigen Wiesenvegetation", "Cremiger, rückfettender Schaum mit 6 Wochen traditioneller Reifung"],
    inStock: true,
    isFeatured: false,
    wholesaleAvailable: true
  },

  // PASTURE DUCK EGGS
  {
    id: "eggs-pasture-duck-6",
    name: "Pasture-Roaming Duck Eggs (Half Dozen • 6 Eggs)",
    name_de: "Freiland-Enteneier von der Weide (6 Stück)",
    category: "duck-eggs",
    price: 220,
    priceEUR: 2.50,
    unit: "6 Jumbo Eggs in Golden Meadow Straw",
    unit_de: "6 Jumbo-Eier im Wiesenstrohbett",
    badge: "Pasture Roaming",
    badge_de: "Freilandhaltung",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 38,
    image: "assets/images/duck-eggs.jpg",
    description: "Half dozen (6 jumbo eggs) rich, creamy duck eggs from heritage white Pekin ducks roaming freely along organic permaculture wetland banks. Nestled safely in clean natural golden straw.",
    description_de: "Ein halbes Dutzend (6 XL-Eier) cremige, nährstoffreiche Enteneier von weißen Pekin-Enten aus artgerechter Freilandhaltung an natürlichen Teichufern. Sicher gebettet in sauberem, duftendem Wiesenstroh.",
    ingredients: "6 Free-Range Pasture-Raised Organic Duck Eggs in Straw.",
    ingredients_de: "6 frische Enteneier aus Freiland-Weidehaltung im Strohbett.",
    benefits: ["Double the Omega-3 fatty acids and vitamin D of chicken eggs", "Rich golden yolks high in choline for brain health", "Incredible richness for baking and wholesome cooking"],
    benefits_de: ["Doppelt so viele Omega-3-Fettsäuren und Vitamin D wie Hühnereier", "Dunkelgelbe Dotter reich an Cholin für Vitalität", "Unvergleichliche Cremigkeit für Backwaren und die feine Küche"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "eggs-pasture-duck-24",
    name: "Pasture-Roaming Duck Eggs — Farmstead Crate (24 Eggs / 2 Dozen)",
    name_de: "Freiland-Enteneier — Hofkiste (24 Stück)",
    category: "duck-eggs",
    price: 950,
    priceEUR: 10.50,
    unit: "24 Jumbo Eggs in Handcrafted Wooden Straw Crate",
    unit_de: "24 Jumbo-Eier in der Holzkiste mit Strohbett",
    badge: "Farm Crate",
    badge_de: "Hofkiste",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 19,
    image: "assets/images/duck-eggs.jpg",
    description: "Two full dozen (24 jumbo eggs) fresh pasture-roaming duck eggs nestled securely in clean golden meadow straw inside a rustic wooden crate. Specially curated for families, healthy kitchens, and gourmet baking.",
    description_de: "Zwei volle Dutzend (24 XL-Eier) frische Weide-Enteneier im Wiesenstrohbett in einer handgefertigten Holzkiste. Ideal für gesundheitsbewusste Familien, Backliebhaber und anspruchsvolle Küchen.",
    ingredients: "24 Free-Range Pasture-Raised Organic Duck Eggs + Handcrafted Wooden Crate + Natural Golden Straw Bedding.",
    ingredients_de: "24 frische Weide-Enteneier + Handgefertigte Holzkiste + Wiesenstrohbett.",
    benefits: ["Direct farm harvest with maximum freshness and richness", "High in natural vitamins A, B12, and healthy fatty acids", "Eco-friendly compostable straw cushioning in reusable crate"],
    benefits_de: ["Erntefrisch direkt vom Hof für pure Frische und Nährstoffdichte", "Reich an natürlichem Vitamin A, B12 und gesunden Fettsäuren", "Nachhaltige Strohpolsterung in wiederverwendbarer Holzkiste"],
    inStock: true,
    isFeatured: false,
    wholesaleAvailable: true
  },

  // ARTISANAL QUILT ROLLS & ORGANIC COTTON LINEN (4 Distinct Products)
  {
    id: "quilt-heirloom-kids",
    name: "Heirloom Artisanal Quilt — Kids (40\" × 50\")",
    name_de: "Handgefertigte Steppdecke — Kinder (40\" × 50\")",
    category: "quilts",
    price: 5099,
    priceEUR: 56.90,
    unit: "40\" × 50\" Kids Quilt Roll • Ilavam Panju",
    unit_de: "40\" × 50\" Kinderdecke • Ilavam Panju Seidenbaumwolle",
    badge: "Ilavam Panju Filled",
    badge_de: "Ilavam Panju Füllung",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 16,
    image: "assets/images/quilt-roll.jpg",
    description: "Handcrafted kids quilt roll filled with 100% natural Ilavam Panju (pure kapok / silk cotton) and encased in unbleached organic cotton. Certified GOTS and OEKO-TEX Standard 100, organically dyed with non-toxic botanical pigments. Naturally hypoallergenic and cool in summer, warm in winter. Rolled and tied with raw cotton twine.",
    description_de: "Handgesteppte Kinder-Bettdecke, gefüllt mit 100% naturbelassenem Ilavam Panju (reine Kapok-/Seidenbaumwolle) und bezogen mit ungebleichter Bio-Baumwolle. GOTS & OEKO-TEX Standard 100 zertifiziert, biologisch mit Pflanzenfarben gefärbt. Von Natur aus hypoallergen, temperaturausgleichend und wolkenweich.",
    ingredients: "Natural Ilavam Panju (Silk Cotton) Filling + 100% GOTS & OEKO-TEX Certified Organic Cotton, organically dyed.",
    ingredients_de: "100% reine Ilavam Panju (Seidenbaumwolle) Füllung + GOTS & OEKO-TEX zertifizierte Bio-Baumwolle, pflanzlich gefärbt.",
    benefits: ["100% pure Ilavam Panju (silk cotton) filling — natural, chemical-free & buoyant", "GOTS & OEKO-TEX certified (zero synthetics, zero microplastics)", "Perfect size for toddlers and children (40\" × 50\")"],
    benefits_de: ["100% naturbelassene Ilavam Panju Seidenbaumwolle — chemiefrei & flaumweich", "GOTS & OEKO-TEX zertifiziert (keine Kunstfasern, kein Mikroplastik)", "Ideale Größe für Kinder und Kleinkinder (40\" × 50\" / ca. 102 × 127 cm)"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: false
  },
  {
    id: "quilt-heirloom-individual",
    name: "Heirloom Artisanal Quilt — Individual (55\" × 90\")",
    name_de: "Handgefertigte Steppdecke — Einzelbett (55\" × 90\")",
    category: "quilts",
    price: 7099,
    priceEUR: 78.90,
    unit: "55\" × 90\" Individual Quilt Roll • Ilavam Panju",
    unit_de: "55\" × 90\" Einzelbettdecke • Ilavam Panju Seidenbaumwolle",
    badge: "Ilavam Panju Filled",
    badge_de: "Ilavam Panju Füllung",
    badgeType: "featured",
    rating: 5.0,
    reviewsCount: 21,
    image: "assets/images/quilt-roll.jpg",
    description: "Master individual quilt roll (55\" × 90\") filled with 100% natural Ilavam Panju (silk cotton) and wrapped in unbleached, organically dyed cotton. Certified GOTS and OEKO-TEX Standard 100, providing breathable, thermal-regulating weight for deep, restorative sleep. Rolled and tied with raw cotton twine.",
    description_de: "Meisterhaft handgesteppte Steppdecke (55\" × 90\") gefüllt mit 100% reinem Ilavam Panju (natürliche Seidenbaumwolle) und umhüllt von biologisch gefärbter Baumwolle. GOTS & OEKO-TEX Standard 100 zertifiziert für einen tiefen, chemiefreien und erholsamen Schlaf. Aufgerollt und gebunden mit ungebleichtem Baumwollband.",
    ingredients: "Natural Ilavam Panju (Silk Cotton) Filling + 100% GOTS & OEKO-TEX Certified Organic Cotton, organically dyed.",
    ingredients_de: "100% reine Ilavam Panju (Seidenbaumwolle) Füllung + GOTS & OEKO-TEX zertifizierte Bio-Baumwolle, pflanzlich gefärbt.",
    benefits: ["100% pure Ilavam Panju (silk cotton) filling for natural buoyancy and thermal comfort", "GOTS & OEKO-TEX certified with zero toxic chemical treatments", "Generous individual single-bed dimensions (55\" × 90\")"],
    benefits_de: ["100% reine Ilavam Panju Seidenbaumwolle für optimale Thermoregulation", "GOTS & OEKO-TEX zertifiziert, absolut frei von Schadstoffen und Bleichmitteln", "Großzügige Einzelbettmaße (55\" × 90\" / ca. 140 × 229 cm)"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: false
  },
  {
    id: "quilt-throw-kids",
    name: "Organically Dyed Throw Blanket — Kids (40\" × 50\")",
    name_de: "Bio-Kuscheldecke — Kinder (40\" × 50\")",
    category: "quilts",
    price: 3399,
    priceEUR: 37.90,
    unit: "40\" × 50\" Kids Throw Blanket Roll",
    unit_de: "40\" × 50\" Kinder-Kuscheldecken-Rolle",
    badge: "GOTS & OEKO-TEX",
    badge_de: "GOTS & OEKO-TEX",
    badgeType: "organic",
    rating: 4.8,
    reviewsCount: 14,
    image: "assets/images/quilt-roll.jpg",
    description: "Lightweight, cozy kids throw blanket woven from premium organic cotton and pure linen, organically dyed in earthy botanical tones. Certified GOTS and OEKO-TEX Standard 100 with zero synthetic dyes or chemicals. Neatly rolled and tied with rustic twine.",
    description_de: "Leichte, atmungsaktive Kuscheldecke für Kinder aus feiner Bio-Baumwolle und Leinen, mit natürlichen Pflanzenfarben biologisch gefärbt. GOTS & OEKO-TEX Standard 100 zertifiziert, absolut frei von synthetischen Farbstoffen oder reizenden Chemikalien.",
    ingredients: "100% GOTS-Certified & OEKO-TEX Certified Organic Cotton & Pure Linen, organically dyed.",
    ingredients_de: "100% GOTS & OEKO-TEX zertifizierte Bio-Baumwolle & reines Leinen, pflanzlich gefärbt.",
    benefits: ["Organically dyed, skin-soothing & hypoallergenic for young skin", "GOTS & OEKO-TEX certified with zero synthetic mordants or chemicals", "Lightweight, breathable comfort for naps, car rides, and stroller strolls"],
    benefits_de: ["Pflanzlich gefärbt, samtweich und hypoallergen für empfindliche Kinderhaut", "GOTS & OEKO-TEX zertifiziert ohne chemische Fixiermittel", "Leicht, kuschelig und atmungsaktiv für Mittagsschlaf und unterwegs"],
    inStock: true,
    isFeatured: false,
    wholesaleAvailable: true
  },
  {
    id: "quilt-throw-adult",
    name: "Organically Dyed Throw Blanket — Adult (55\" × 80\")",
    name_de: "Bio-Kuscheldecke — Erwachsene (55\" × 80\")",
    category: "quilts",
    price: 4499,
    priceEUR: 49.90,
    unit: "55\" × 80\" Adult Throw Blanket Roll",
    unit_de: "55\" × 80\" Kuscheldecken-Rolle für Erwachsene",
    badge: "GOTS & OEKO-TEX",
    badge_de: "GOTS & OEKO-TEX",
    badgeType: "organic",
    rating: 4.9,
    reviewsCount: 18,
    image: "assets/images/quilt-roll.jpg",
    description: "Generous adult lap throw blanket roll woven from premium organic cotton and linen, organically dyed in rich earthy hues. Certified GOTS and OEKO-TEX Standard 100 for pure, non-toxic living. Neatly rolled and tied with rustic twine.",
    description_de: "Großzügige Wohndecke aus erstklassiger Bio-Baumwolle und Leinen, schonend biologisch in erdigen Naturtönen gefärbt. GOTS & OEKO-TEX Standard 100 zertifiziert für ein gesundes, schadstofffreies Wohngefühl. Eingerollt und gebunden mit Kordel.",
    ingredients: "100% GOTS-Certified & OEKO-TEX Certified Organic Cotton & Pure Linen, organically dyed.",
    ingredients_de: "100% GOTS & OEKO-TEX zertifizierte Bio-Baumwolle & reines Leinen, biologisch gefärbt.",
    benefits: ["Organically dyed with gentle botanical pigments", "GOTS & OEKO-TEX certified (hypoallergenic, zero chemical flame retardants)", "Versatile, breathable comfort for all living spaces and seasons"],
    benefits_de: ["Sanft pflanzlich gefärbt mit natürlichen Erdpigmenten", "GOTS & OEKO-TEX zertifiziert (hypoallergen, frei von Flammschutzmitteln)", "Vielseitig und behaglich für jede Jahreszeit"],
    inStock: true,
    isFeatured: false,
    wholesaleAvailable: true
  },

  // HERBAL LEAVES (Organic White Packets, 100g)
  {
    id: "herb-sacred-tulsi",
    name: "Sun-Cured Sacred Tulsi Leaves (100g)",
    name_de: "Sonnengereiftes Heiliges Tulsikraut (100g)",
    category: "herbs",
    price: 280,
    priceEUR: 3.10,
    unit: "100g Organic White Packet",
    unit_de: "100g Weißer Bio-Frischebeutel",
    badge: "Organic White Packet",
    badge_de: "Bio-Frischebeutel",
    badgeType: "organic",
    rating: 4.9,
    reviewsCount: 19,
    image: "assets/images/tulsi-jar.jpg",
    description: "Adaptogenic sacred holy basil (Tulsi) grown in mineral-rich living soil, shade-dried to preserve natural volatile oils and whole leaf integrity. Packaged in a 100g clean white organic packet (not brown Kraft or jar) to seal in therapeutic freshness.",
    description_de: "Adaptogenes Heiliges Basilikum (Tulsi) aus mineralreichem lebendigem Boden, schonend im Schatten getrocknet zum Erhalt aller ätherischen Öle und Blattstrukturen. Frischeversiegelt im weißen 100g Bio-Standbeutel (kein braunes Papier, kein Glas) für puren Aromaschutz.",
    ingredients: "100% Pure Organic Krishna & Rama Tulsi Leaves (Ocimum sanctum) in 100g White Packet.",
    ingredients_de: "100% reines Bio Krishna- & Rama-Tulsikraut (Ocimum sanctum) im 100g Beutel.",
    benefits: ["Calms the nervous system and supports natural stress resilience", "Rich in natural antioxidants, eugenol, and essential phytochemicals", "Packed in 100g clean white organic pouches for maximum purity"],
    benefits_de: ["Beruhigt das Nervensystem und stärkt die innere Ausgeglichenheit", "Reich an natürlichen Antioxidantien, Eugenol und sekundären Pflanzenstoffen", "Verpackt im licht- und aromadichten weißen 100g Bio-Beutel"],
    inStock: true,
    isFeatured: true,
    wholesaleAvailable: true
  },
  {
    id: "herb-moringa-leaves",
    name: "Sun-Dried Organic Moringa Leaves (100g)",
    name_de: "Sonnengestrocknete Bio-Moringablätter (100g)",
    category: "herbs",
    price: 320,
    priceEUR: 3.50,
    unit: "100g Organic White Packet",
    unit_de: "100g Weißer Bio-Frischebeutel",
    badge: "Organic White Packet",
    badge_de: "Bio-Frischebeutel",
    badgeType: "fresh",
    rating: 4.9,
    reviewsCount: 26,
    image: "assets/images/rosemary-sage-stems.jpg",
    description: "Sun-dried whole organic moringa leaves harvested fresh from our farmstead trees. Packed in a 100g clean white organic packet, locking in natural plant protein, iron, and vitality without exposure to moisture or light.",
    description_de: "Sonnengestrocknete ganze Moringablätter, von Hand geerntet von unseren Hofbäumen. Verpackt im lichtdichten weißen 100g Bio-Frischebeutel, vollgepackt mit pflanzlichem Protein, bioverfügbarem Eisen und Chlorophyll.",
    ingredients: "100% Organically Grown Whole Moringa Leaves (Moringa oleifera) in 100g White Packet.",
    ingredients_de: "100% sonnengetrocknete Bio-Moringablätter (Moringa oleifera) im 100g Beutel.",
    benefits: ["Dense with essential vitamins, bio-available iron, and amino acids", "Gentle sun-drying preserves active chlorophyll and plant vitality", "Packaged in 100g clean white organic packets for everyday wellness"],
    benefits_de: ["Konzentriert an essenziellen Vitaminen, Eisen und pflanzlichen Proteinen", "Schonende Trocknung bewahrt wertvolles Chlorophyll und Enzyme", "Praktischer weißer Frischebeutel für tägliche Tees und gesunde Ernährung"],
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
    title_de: "Bauernhof-Erlebnis",
    duration: "1–2 Hours Visit",
    duration_de: "1–2 Stunden Besuch",
    pricePerPerson: 450,
    pricePerPersonEUR: 5.00,
    image: "assets/images/hero-basket.jpg",
    badge: "Farm Walk",
    badge_de: "Hofrundgang",
    days: "Open Every Day",
    days_de: "Täglich geöffnet",
    timing: "07:00 – 17:00",
    timing_de: "07:00 – 17:00",
    description: "A small, peaceful 1–2 hour farmstead walk. Explore living soil permaculture beds, see herbal gardens, feed pasture ducks by the water, and enjoy fresh herbal farm hospitality.",
    description_de: "Ein kleiner, friedlicher 1–2-stündiger Hofrundgang. Erkunden Sie Permakultur-Beete auf lebendigem Boden, Kräutergärten, füttern Sie Weidententen am Teich und genießen Sie frische Kräuter-Gastfreundschaft.",
    included: [
      "1–2 hours guided farmstead immersion (living soil permaculture)",
      "Meet and feed free-roaming pasture ducks by the pond",
      "Interactive whole herbal stem walk",
      "Complimentary fresh farm herbal welcome drink"
    ],
    included_de: [
      "1–2 Stunden geführte Hof-Immersion (Permakultur auf lebendigem Boden)",
      "Freilaufende Weidententen am Teich treffen und füttern",
      "Interaktiver Kräutergarten-Spaziergang",
      "Kostenloses frisches Kräuter-Willkommensgetränk vom Hof"
    ],
    times: ["Morning Slot (07:00 – 09:00)", "Mid-Morning Slot (09:30 – 11:30)", "Midday Slot (12:00 – 14:00)", "Afternoon Slot (14:30 – 16:30)"],
    times_de: ["Morgenslot (07:00 – 09:00)", "Vormittagsslot (09:30 – 11:30)", "Mittagsslot (12:00 – 14:00)", "Nachmittagsslot (14:30 – 16:30)"]
  },
  {
    id: "tour-duckling-meadow",
    title: "Duckling Meadow Experience",
    title_de: "Entenküken-Wiesen-Erlebnis",
    duration: "1–2 Hours Visit",
    duration_de: "1–2 Stunden Besuch",
    pricePerPerson: 350,
    pricePerPersonEUR: 3.90,
    image: "assets/images/duck-family.jpg",
    badge: "Duckling Meadow",
    badge_de: "Entenküken-Wiese",
    days: "Open Every Day",
    days_de: "Täglich geöffnet",
    timing: "07:00 – 17:00",
    timing_de: "07:00 – 17:00",
    description: "A gentle 1–2 hour experience with pasture ducks and ducklings in their natural pond habitat. Learn about ethical free-range duck keeping and natural straw nesting.",
    description_de: "Ein sanftes 1–2-stündiges Erlebnis mit Weidententen und Küken in ihrem natürlichen Teich-Lebensraum. Erfahren Sie mehr über artgerechte Freilandhaltung und natürliche Strohnester.",
    included: [
      "Feed and interact with free-range heritage ducks along wetland reeds",
      "Gentle duckling meadow time and straw nest walk",
      "Complimentary pasture duck eggs to take home",
      "Peaceful 1–2 hour immersion by the pond reedbeds"
    ],
    included_de: [
      "Freilaufende Erpel & Enten im Schilfgebiet füttern und beobachten",
      "Sanfte Zeit auf der Kükenwiese & Spaziergang zu Strohnestern",
      "Kostenlose frische Weiden-Enteneier zum Mitnehmen",
      "Friedliche 1–2 Stunden Immersion im Schilfgebiet"
    ],
    times: ["Morning Slot (07:00 – 09:00)", "Mid-Morning Slot (09:30 – 11:30)", "Midday Slot (12:00 – 14:00)", "Afternoon Slot (14:30 – 16:30)"],
    times_de: ["Morgenslot (07:00 – 09:00)", "Vormittagsslot (09:30 – 11:30)", "Mittagsslot (12:00 – 14:00)", "Nachmittagsslot (14:30 – 16:30)"]
  },
  {
    id: "tour-make-your-own-soap",
    title: "Make Your Own Soap",
    title_de: "Eigene Seife Herstellen",
    duration: "1–2 Hours",
    duration_de: "1–2 Stunden",
    pricePerPerson: 950,
    pricePerPersonEUR: 10.50,
    image: "assets/images/artisan-soaps.jpg",
    badge: "Artisan Craft",
    badge_de: "Handwerkskunst",
    days: "Open Every Day",
    days_de: "Täglich geöffnet",
    timing: "07:00 – 17:00",
    timing_de: "07:00 – 17:00",
    description: "A hands-on 1–2 hour artisanal soapmaking session. Formulate and pour your own custom cold-process curd soap bar using pure plant oils, farm herbs, and natural earth clays.",
    description_de: "Ein praktischer 1–2-stündiger Seifensiederkurs. Kreieren und gießen Sie Ihr eigenes kaltgerührtes Stück Quarkseife aus reinen Pflanzenölen, Hofkräutern und Naturtonerden.",
    included: [
      "1–2 hours guided hands-on soapmaking session",
      "Formulate your own custom cold-process curd soap bar",
      "Pure plant oils, wild botanical stems, and molds provided",
      "Take your newly crafted soap bar home with curing guide"
    ],
    included_de: [
      "1–2 Stunden praktischer, geführter Seifensiederkurs",
      "Kreieren Sie Ihr eigenes handgerührtes Quarkseifenstück",
      "Reine Pflanzenöle, wilde Hofkräuter und Gussformen inklusive",
      "Nehmen Sie Ihr handgemachtes Seifenstück mit Reifeanleitung nach Hause"
    ],
    times: ["Morning Slot (07:00 – 09:00)", "Mid-Morning Slot (09:30 – 11:30)", "Midday Slot (12:00 – 14:00)", "Afternoon Slot (14:30 – 16:30)"],
    times_de: ["Morgenslot (07:00 – 09:00)", "Vormittagsslot (09:30 – 11:30)", "Mittagsslot (12:00 – 14:00)", "Nachmittagsslot (14:30 – 16:30)"]
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



// ============================================================
// I18N & CURRENCY & FULL-SITE TRANSLATION ENGINE (EN • INR ⇄ DE • EUR)
// ============================================================

window.currentLang = (function() {
  try {
    return localStorage.getItem('uppurreins_lang') || 'en';
  } catch (e) {
    return 'en';
  }
})();

window.getLocalized = function(obj, field) {
  if (!obj) return '';
  if (window.currentLang === 'de' && obj[field + '_de']) {
    return obj[field + '_de'];
  }
  return obj[field] || '';
};

window.getCategoryName = function(catId) {
  const cat = (typeof CATEGORIES !== 'undefined') ? CATEGORIES.find(c => c.id === catId) : null;
  if (!cat) {
    if (catId === 'bundles') {
      return window.currentLang === 'de' ? 'Hof-Präsentkörbe' : 'Farmstead Hamper';
    }
    return catId ? catId.replace('-', ' ') : '';
  }
  return window.getLocalized(cat, 'name');
};

window.formatPrice = function(inrAmount, productOrEur) {
  if (window.currentLang === 'de') {
    let eurVal = null;
    if (productOrEur && typeof productOrEur === 'object') {
      if (typeof productOrEur.priceEUR === 'number') {
        eurVal = productOrEur.priceEUR;
      } else if (typeof productOrEur.pricePerPersonEUR === 'number') {
        eurVal = productOrEur.pricePerPersonEUR;
      }
    } else if (typeof productOrEur === 'number') {
      eurVal = productOrEur;
    }
    if (eurVal === null) {
      eurVal = (Number(inrAmount) || 0) / 90;
    }
    return `€ ${eurVal.toFixed(2).replace('.', ',')}`;
  }
  // English: INR
  const val = Math.round(Number(inrAmount) || 0);
  return `INR ${val.toLocaleString('en-IN')}`;
};

// Master dictionary of phrases for instant client-side DOM translation
window.SITE_PHRASES_DE = {
  // Navigation & Core Buttons
  "Home": "Startseite",
  "Farm Store": "Hofladen",
  "Experiences & Visits": "Hoferlebnisse",
  "Journal": "Magazin",
  "About": "Über uns",
  "Wholesale": "Großhandel",
  "Contact": "Kontakt",
  "Book Visit": "Besuch buchen",
  "Select Date & Reserve": "Datum wählen & reservieren",
  "Select This Experience": "Dieses Erlebnis wählen",
  "Pre-Order (Ships Next Month)": "Vorbestellen (Versand nächsten Monat)",
  "Pre-Order Now": "Jetzt vorbestellen",
  "Pre-Order": "Vorbestellen",
  "Add to Basket": "In den Warenkorb",
  "Quick View": "Vorschau",
  "Quick Details": "Details ansehen",
  "Explore Farm Store": "Hofladen entdecken",
  "Book a Farmstead Visit": "Hoferlebnis buchen",
  "Book a Farm Experience": "Hoferlebnis buchen",
  "Confirm Visit Reservation": "Reservierung bestätigen",
  "Order via WhatsApp": "Per WhatsApp bestellen",
  "Direct Bank Transfer Checkout": "Kasse: Direkte Banküberweisung",
  "Direct Bank Transfer": "Direkte Banküberweisung",
  "Remove": "Entfernen",

  // Headings & Taglines
  "Crafted with Earth and Living Soil": "Im Einklang mit Erde und lebendigem Boden gefertigt",
  "Purreins Frequency, waves of raw & real resources.": "Purreins Frequency, Wellen reiner & wahrhaftiger Naturressourcen.",
  "Six Stalls of Living Wellness": "Sechs Stände lebendigen Wohlbefindens",
  "Featured Farm Favorites": "Ausgewählte Hof-Lieblinge",
  "Everything Cultivated from Soil, is Nature.": "Alles, was dem Boden entspringt, ist reine Natur.",
  "Soil-to-Soul Wellness": "Vom Boden zur Seele — Natürliches Wohlbefinden",
  "Regenerative Care": "Regenerative Hofpflege",
  "White Pekin Ducks & Their Straw Sanctuary": "Weiße Pekingenten & ihr Stroh-Paradies",
  "Supplying Cafes, Restaurants & Eco-Stores": "Belieferung von Cafés, Restaurants & Bioläden",
  "The Farm Journal": "Das Hof-Magazin",
  "Farm Offerings": "Hof-Angebote",
  "Experiences & B2B": "Erlebnisse & Großhandel",
  "Visit Our Farm": "Besuchen Sie unseren Hof",
  "The Organic Farm Store": "Der Bio-Hofladen",
  "Heirloom Solid Pastel Quilts & Printed Throws": "Handgefertigte Pastell-Steppdecken & gemusterte Plaids",
  "The 7 Sculptural 3D Bubble Cubes": "Die 7 skulpturalen 3D-Bubble-Cube-Seifen",
  "Effortless Grip & Acupressure Massage": "Müheloser Griff & Akupressur-Massage",
  "Cold-Processed & Naturally Cured": "Kaltgerührt & natürlich gereift",
  "Earth Harvests & Handcrafted Goods": "Ernte des Bodens & handgemachte Kostbarkeiten",
  "Small-Batch Season Underway — Pre-Orders Open": "Kleinserien-Saison eröffnet — Vorbestellungen möglich",
  "Pre-Order • Ships Next Month": "Vorbestellung • Versand nächsten Monat",
  "Farm Visits & Experiences": "Hofbesuche & Erlebnisse",
  "Available Farm Immersions": "Verfügbare Hof-Erlebnisse",
  "Select Date & Reserve Slots": "Datum wählen & Plätze reservieren",
  "Visit Reservation Confirmed!": "Hofbesuch erfolgreich reserviert!",
  "Pop-Up Markets & Regional Fairs": "Pop-Up-Märkte & regionale Bauernmärkte",
  "Frequently Asked Questions": "Häufig gestellte Fragen (FAQ)",
  "Pure Ingredients & Sourcing": "Reine Zutaten & Herkunft",
  "Choose Pastel Shade & Motif:": "Pastellton & Naturmuster wählen:",
  "No offerings matched your query": "Keine Angebote gefunden",
  "100% pure, natural, and organically grown at Purreins Frequency farmstead.": "100% rein, natürlich und ökologisch angebaut auf dem Hofgut Purreins Frequency.",

  // Booking Form & Labels
  "Number of Guests": "Anzahl der Gäste",
  "Select Date": "Datum wählen",
  "Select Time Slot": "Zeitfenster wählen",
  "Full Name": "Vollständiger Name",
  "Phone / WhatsApp": "Telefon / WhatsApp",
  "Email Address": "E-Mail-Adresse",
  "Special Notes": "Besondere Wünsche / Hinweise",
  "Payable upon arrival or direct bank transfer": "Zahlbar bei Ankunft oder per direkter Banküberweisung",
  "Payable Amount:": "Zu zahlender Betrag:",
  "Account Name": "Kontoinhaber",
  "Account Number": "Kontonummer (IBAN)",
  "Bank Name": "Bankinstitut",
  "Branch": "Filiale",
  "IFSC / SWIFT": "IFSC / SWIFT-Code",
  "Includes:": "Inklusive:",
  "Open Every Day": "Täglich geöffnet",
  "Person": "Person",
  "Guest": "Gast",
  "Guests": "Gäste",
  "Total": "Gesamt",
  "Subtotal": "Zwischensumme",
  "Free Delivery": "Kostenlose Lieferung",
  "Your Harvest Basket": "Ihr Erntekorb",
  "Your basket is empty": "Ihr Erntekorb ist leer",
  "Browse our farmstead offerings to add fresh produce and artisan goods.": "Stöbern Sie durch unsere Hofangebote für frische Erzeugnisse und Handwerkskunst.",
  "Search soaps, herbs, eggs...": "Seifen, Kräuter, Eier durchsuchen...",

  // Categories & Badges
  "All Offerings": "Alle Angebote",
  "Living Produce": "Lebendige Erzeugnisse",
  "Microgreens & Mushrooms": "Microgreens & Hofpilze",
  "Farmstead Hampers": "Hof-Präsentkörbe",
  "Curd Soaps": "Quarkseifen",
  "Pasture Duck Eggs": "Weide-Enteneier",
  "Artisanal Quilt Rolls": "Handgefertigte Steppdecken",
  "Herbal Leaves": "Kräuterblätter"
};

// UI Translations dictionary for code lookups
window.I18N_DICTIONARY = {
  en: {
    nav_home: "Home",
    nav_shop: "Farm Store",
    nav_visit: "Look",
    nav_journal: "Journal",
    nav_about: "About",
    nav_wholesale: "Wholesale",
    nav_contact: "Contact",
    nav_book_visit: "Look",
    cart_title: "Your Harvest Basket",
    cart_subtotal: "Subtotal",
    cart_free_delivery: "Free Delivery",
    cart_checkout_transfer: "Direct Bank Transfer Checkout",
    cart_checkout_whatsapp: "Order via WhatsApp",
    cart_empty_title: "Your basket is empty",
    cart_empty_msg: "Browse our farmstead offerings to add fresh produce and artisan goods.",
    cart_continue: "Explore Farm Store",
    cart_preorder_notice: "Pre-order only. Small batch, hand-cured. Dispatches next month.",
    cart_bank_title: "Direct Bank Transfer",
    cart_bank_desc: "Transfer directly to our farmstead bank account.",
    btn_add_to_cart: "Add to Basket",
    btn_added: "Added to Basket!",
    btn_quick_view: "Quick View",
    btn_details: "View Details",
    preorder_badge: "Pre-Order • Ships Next Month",
    visit_per_person: "Person",
    visit_reserve: "Select Date & Reserve",
    visit_includes: "Includes:",
    visit_open_days: "Open Every Day",
    visit_timing: "07:00 – 17:00",
    visit_select_exp: "Select This Experience"
  },
  de: {
    nav_home: "Startseite",
    nav_shop: "Hofladen",
    nav_visit: "Schau",
    nav_journal: "Magazin",
    nav_about: "Über uns",
    nav_wholesale: "Großhandel",
    nav_contact: "Kontakt",
    nav_book_visit: "Schau",
    cart_title: "Ihr Erntekorb",
    cart_subtotal: "Zwischensumme",
    cart_free_delivery: "Kostenlose Lieferung",
    cart_checkout_transfer: "Direkte Banküberweisung / Rechnung",
    cart_checkout_whatsapp: "Per WhatsApp bestellen",
    cart_empty_title: "Ihr Erntekorb ist leer",
    cart_empty_msg: "Entdecken Sie unsere Hofangebote für frische Erzeugnisse und Handwerkskunst.",
    cart_continue: "Hofladen erkunden",
    cart_preorder_notice: "Nur Vorbestellung. Kleine Chargen, handgereift. Versand im nächsten Monat.",
    cart_bank_title: "Direkte Banküberweisung",
    cart_bank_desc: "Überweisen Sie direkt auf unser offizielles Hofkonto.",
    btn_add_to_cart: "In den Warenkorb",
    btn_added: "Hinzugefügt!",
    btn_quick_view: "Vorschau",
    btn_details: "Details ansehen",
    preorder_badge: "Vorbestellung • Versand nächsten Monat",
    visit_per_person: "Person",
    visit_reserve: "Datum wählen & reservieren",
    visit_includes: "Inklusive:",
    visit_open_days: "Täglich geöffnet",
    visit_timing: "07:00 – 17:00",
    visit_select_exp: "Dieses Erlebnis wählen"
  }
};

window.t = function(key) {
  const dict = window.I18N_DICTIONARY[window.currentLang] || window.I18N_DICTIONARY.en;
  return dict[key] || window.I18N_DICTIONARY.en[key] || key;
};

// ── Google Translate & DOM Translation Integration ───────────
function initGoogleTranslateSystem() {
  if (document.getElementById('google_translate_element')) return;

  // 1. Inject hidden element
  const div = document.createElement('div');
  div.id = 'google_translate_element';
  div.style.display = 'none';
  document.body.appendChild(div);

  // 2. Inject clean CSS hiding Google branding/toolbars
  const style = document.createElement('style');
  style.id = 'google-translate-clean-styles';
  style.textContent = `
    .goog-te-banner-frame.skiptranslate, 
    .goog-te-banner-frame,
    iframe.goog-te-banner-frame {
      display: none !important;
      visibility: hidden !important;
      height: 0 !important;
    }
    body {
      top: 0px !important;
      position: static !important;
    }
    #goog-gt-tt, 
    .goog-te-balloon-frame {
      display: none !important;
    }
    .goog-text-highlight {
      background: none !important;
      box-shadow: none !important;
    }
    #google_translate_element {
      display: none !important;
    }
    .skiptranslate:not(#side-lang-currency-switcher) {
      display: none !important;
    }
  `;
  document.head.appendChild(style);

  // 3. Define callback on window
  window.googleTranslateElementInit = function() {
    try {
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,de',
        autoDisplay: false,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');

      if (window.currentLang === 'de') {
        applyGoogleTranslateTrigger('de');
      }
    } catch (e) {
      console.warn('Google Translate init notice:', e);
    }
  };

  // 4. Inject Google script tag
  const script = document.createElement('script');
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.head.appendChild(script);
}

function applyGoogleTranslateTrigger(lang) {
  const host = window.location.hostname;
  const parts = host.split('.');
  const root = parts.length > 1 ? '.' + parts.slice(-2).join('.') : '';

  if (lang === 'de') {
    document.cookie = "googtrans=/en/de; path=/;";
    if (root) document.cookie = "googtrans=/en/de; path=/; domain=" + root + ";";
    document.cookie = "googtrans=/en/de; path=/; domain=" + host + ";";
  } else {
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    if (root) document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + root + ";";
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + host + ";";
    document.cookie = "googtrans=/en/en; path=/;";
  }

  const select = document.querySelector('.goog-te-combo') || document.querySelector('select.goog-te-combo');
  if (select) {
    select.value = lang;
    select.dispatchEvent(new Event('change'));
    select.dispatchEvent(new Event('input'));
  } else {
    setTimeout(() => {
      const s = document.querySelector('.goog-te-combo') || document.querySelector('select.goog-te-combo');
      if (s) {
        s.value = lang;
        s.dispatchEvent(new Event('change'));
      }
    }, 400);
  }
}

// ── Instant Native DOM Text Replacer ──────────────────────────
function walkAndTranslateDOM(lang) {
  const isDe = (lang === 'de');
  const dict = window.SITE_PHRASES_DE || {};
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        if (!node || !node.parentNode) return NodeFilter.FILTER_REJECT;
        const tag = node.parentNode.nodeName.toLowerCase();
        if (tag === 'script' || tag === 'style' || tag === 'code' || tag === 'noscript') {
          return NodeFilter.FILTER_REJECT;
        }
        if (node.parentNode.closest('#side-lang-currency-switcher') || node.parentNode.closest('#book-visit-btn')) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const nodesToProcess = [];
  while (walker.nextNode()) {
    nodesToProcess.push(walker.currentNode);
  }

  nodesToProcess.forEach(node => {
    if (typeof node.__origText === 'undefined') {
      node.__origText = node.nodeValue;
    }

    if (isDe) {
      let currentVal = node.nodeValue;
      for (const [enText, deText] of Object.entries(dict)) {
        if (currentVal.includes(enText)) {
          currentVal = currentVal.split(enText).join(deText);
        }
      }
      if (currentVal !== node.nodeValue) {
        node.nodeValue = currentVal;
      }
    } else {
      if (node.nodeValue !== node.__origText) {
        node.nodeValue = node.__origText;
      }
    }
  });

  // Also translate input placeholders
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
    if (typeof el.__origPlaceholder === 'undefined') {
      el.__origPlaceholder = el.placeholder;
    }
    if (isDe) {
      if (dict[el.__origPlaceholder]) {
        el.placeholder = dict[el.__origPlaceholder];
      }
    } else {
      el.placeholder = el.__origPlaceholder;
    }
  });
}

window.setSiteLanguage = function(lang) {
  if (lang !== 'en' && lang !== 'de') lang = 'en';
  const prevLang = window.currentLang;
  window.currentLang = lang;
  try {
    localStorage.setItem('uppurreins_lang', lang);
  } catch (e) {}

  applyGoogleTranslateTrigger(lang);
  window.updateSiteLanguageUI();

  // Instant seamless reload so all translations, prices, and scripts apply immediately
  if (prevLang !== lang) {
    window.location.reload();
  }
};

window.toggleSiteLanguage = function() {
  window.setSiteLanguage(window.currentLang === 'en' ? 'de' : 'en');
};

window.updateSiteLanguageUI = function() {
  const lang = window.currentLang;
  
  // 1. Update side switcher active styles
  const btnEn = document.getElementById('side-lang-btn-en');
  const btnDe = document.getElementById('side-lang-btn-de');
  if (btnEn && btnDe) {
    if (lang === 'en') {
      btnEn.className = "w-full py-1.5 px-2 rounded-lg text-[11px] font-bold tracking-wider transition-all flex flex-col items-center gap-0.5 bg-[#4A5E3A] text-[#F2EAD8] shadow-md border border-[#8EB264]/40";
      btnDe.className = "w-full py-1.5 px-2 rounded-lg text-[11px] font-bold tracking-wider transition-all flex flex-col items-center gap-0.5 text-[#E8DCC8]/60 hover:text-[#F2EAD8] hover:bg-white/5";
    } else {
      btnDe.className = "w-full py-1.5 px-2 rounded-lg text-[11px] font-bold tracking-wider transition-all flex flex-col items-center gap-0.5 bg-[#4A5E3A] text-[#F2EAD8] shadow-md border border-[#8EB264]/40";
      btnEn.className = "w-full py-1.5 px-2 rounded-lg text-[11px] font-bold tracking-wider transition-all flex flex-col items-center gap-0.5 text-[#E8DCC8]/60 hover:text-[#F2EAD8] hover:bg-white/5";
    }
  }

  // 2. Perform DOM phrase translation
  walkAndTranslateDOM(lang);

  // 3. Update navigation links text (strictly skipping the header Look button)
  const navMap = [
    { href: 'index.html', key: 'nav_home' },
    { href: 'shop.html', key: 'nav_shop' },
    { href: 'blog.html', key: 'nav_journal' },
    { href: 'about.html', key: 'nav_about' },
    { href: 'wholesale.html', key: 'nav_wholesale' },
    { href: 'contact.html', key: 'nav_contact' },
  ];
  navMap.forEach(item => {
    document.querySelectorAll(`a[href="${item.href}"]`).forEach(el => {
      if (el.id === 'book-visit-btn' || el.closest('#book-visit-btn') || el.closest('#book-visit-nav-zone')) {
        return;
      }
      if (!el.querySelector('img') && !el.classList.contains('header-logo-link') && el.textContent.trim().length > 0) {
        el.textContent = window.t(item.key);
      }
    });
  });

  // 4. The Look button in header: "Look" in English, "Schau" in German with SVG intact
  const bookVisitBtn = document.getElementById('book-visit-btn');
  if (bookVisitBtn) {
    const isDe = (window.currentLang === 'de');
    const lookText = isDe ? 'Schau' : 'Look';
    const span = bookVisitBtn.querySelector('span');
    if (span) {
      span.textContent = lookText;
    } else {
      bookVisitBtn.innerHTML = `
        <svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v20" stroke="#8A9E6E" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M4 4.5h12l4 3.5-4 3.5H4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1z" fill="#4A5E3A" stroke="#8A9E6E" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M6 7.2h8M7.5 9.2h5" stroke="#8A9E6E" stroke-width="1.2" stroke-linecap="round"/>
          <path d="M9 22h6" stroke="#8A9E6E" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span class="text-[#e2c9a5]">${lookText}</span>
      `;
    }
  }

  // 5. Re-render Cart Drawer if cart exists
  if (window.cart && typeof window.cart.renderDrawer === 'function') {
    window.cart.renderDrawer();
  }

  // 6. Re-render shop page products if renderProducts exists
  if (typeof window.renderProducts === 'function') {
    if (typeof window.renderCategoryPills === 'function') {
      window.renderCategoryPills();
    }
    window.renderProducts();
  }

  // 7. Re-render index page featured products & tours if present
  if (typeof window.renderHomeDynamicGrids === 'function') {
    window.renderHomeDynamicGrids();
  }

  // 8. Re-render visit page tours if present
  if (typeof window.renderVisitDynamicGrids === 'function') {
    window.renderVisitDynamicGrids();
  }

    // Re-render open product modal if visible
  if (window.currentOpenProductId && typeof openProductModal === 'function') {
    const modal = document.getElementById('product-detail-modal');
    if (modal && !modal.classList.contains('hidden')) {
      openProductModal(window.currentOpenProductId);
    }
  }

  // 9. Re-initialize Lucide icons if available
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  // 10. Dispatch a custom window event for any other listeners
  window.dispatchEvent(new CustomEvent('siteLanguageChanged', { detail: { lang } }));
};

function injectSideLangSwitcher() {
  if (document.getElementById('side-lang-currency-switcher')) {
    window.updateSiteLanguageUI();
    return;
  }
  const container = document.createElement('div');
  container.id = 'side-lang-currency-switcher';
  container.className = 'fixed right-0 top-1/2 -translate-y-1/2 z-[999] flex flex-col items-center gap-1.5 p-1.5 bg-[#141A13]/95 border-l-2 border-y-2 border-[#C8995A]/50 rounded-l-2xl shadow-2xl backdrop-blur-md select-none transition-all';
  container.setAttribute('aria-label', 'Language and Currency Switcher');

  container.innerHTML = `
    <button type="button" id="side-lang-btn-en" onclick="window.setSiteLanguage('en')" class="w-full py-1.5 px-2 rounded-lg text-[11px] font-bold tracking-wider transition-all flex flex-col items-center gap-0.5" title="Switch to English (INR ₹)">
      <span class="text-xs">🇬🇧</span>
      <span class="leading-none text-[11px]">EN</span>
      <span class="text-[9px] font-mono text-[#C8995A] font-semibold">₹ INR</span>
    </button>
    <div class="w-5 h-[1px] bg-[#C8995A]/30"></div>
    <button type="button" id="side-lang-btn-de" onclick="window.setSiteLanguage('de')" class="w-full py-1.5 px-2 rounded-lg text-[11px] font-bold tracking-wider transition-all flex flex-col items-center gap-0.5" title="Auf Deutsch wechseln (EUR €) • Website komplett auf Deutsch übersetzen">
      <span class="text-xs">🇩🇪</span>
      <span class="leading-none text-[11px]">DE</span>
      <span class="text-[9px] font-mono text-[#C8995A] font-semibold">€ EUR</span>
    </button>
  `;

  document.body.appendChild(container);
  initGoogleTranslateSystem();
  window.updateSiteLanguageUI();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectSideLangSwitcher);
} else {
  injectSideLangSwitcher();
}
