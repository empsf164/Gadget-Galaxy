/**
 * GADGET GALAXY - Master Products Database
 * Rich, structured electronics catalog with detailed specs, gallery images, variants, ratings, and reviews.
 */

const GADGET_PRODUCTS = [
  {
    id: "gg-phone-01",
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    category: "Smartphones",
    categorySlug: "smartphones",
    price: 1199,
    originalPrice: 1299,
    discountPercentage: 8,
    rating: 4.9,
    reviewCount: 342,
    badge: "Trending",
    badgeType: "hot",
    isFeatured: true,
    isDeal: true,
    isNewArrival: true,
    isBestSeller: true,
    stockStatus: "In Stock (Demo: 28 units)",
    stockCount: 28,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Desert Titanium", hex: "#C7B89B" },
      { name: "Natural Titanium", hex: "#9E9991" },
      { name: "White Titanium", hex: "#F3F3F1" },
      { name: "Black Titanium", hex: "#292929" }
    ],
    storageOptions: ["256GB", "512GB", "1TB"],
    shortDescription: "Forged in Grade 5 Titanium with the groundbreaking A18 Pro chip, 48MP Fusion camera system with 5x telephoto optical zoom, and industry-leading battery endurance.",
    keyFeatures: [
      "Grade 5 Titanium design with refined micro-blasted texture",
      "A18 Pro chip with 6-core GPU and dedicated neural hardware",
      "48MP Fusion camera with 4K 120 fps Dolby Vision recording",
      "Dedicated Camera Control haptic tactile capture button",
      "All-day battery life with up to 33 hours video playback",
      "Super Retina XDR OLED display with ProMotion 120Hz"
    ],
    specs: {
      Display: "6.9-inch Super Retina XDR OLED, 2868 x 1320 px, 120Hz ProMotion, 2000 nits peak",
      Processor: "Apple A18 Pro (3nm architecture, 6-core CPU, 6-core GPU, 16-core Neural Engine)",
      Memory: "8GB Unified LPDDR5X RAM",
      Storage: "256GB / 512GB / 1TB NVMe Solid State",
      Camera: "Triple: 48MP Main (f/1.78) + 48MP Ultra-Wide (f/2.2) + 12MP 5x Periscope Telephoto (120mm)",
      Battery: "4,685 mAh Lithium-ion, 25W MagSafe Qi2 wireless, 50% charge in 30 minutes",
      Connectivity: "5G Sub-6 & mmWave, Wi-Fi 7 (802.11be), Bluetooth 5.3, Ultra Wideband 2, USB-C 3.2 (10Gbps)",
      Dimensions: "163.0 x 77.6 x 8.25 mm | 227 grams | IP68 water & dust resistant"
    },
    reviews: [
      { author: "Marcus Vance", rating: 5, date: "October 14, 2026", title: "Phenomenal battery and camera control", text: "The camera shutter button feels like a traditional SLR. Battery easily lasts 1.5 days with heavy photo and video work." },
      { author: "Sarah Jenkins", rating: 5, date: "October 02, 2026", title: "Titanium feels featherlight yet premium", text: "Upgraded from a 13 Pro. The screen brightness under harsh sunlight is night and day. Seamless delivery from Gadget Galaxy!" },
      { author: "David Lin", rating: 4, date: "September 28, 2026", title: "Excellent flagship device", text: "Performance is unmatched for mobile editing and gaming. The desert titanium hue looks remarkably refined in person." }
    ]
  },
  {
    id: "gg-phone-02",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    categorySlug: "smartphones",
    price: 1099,
    originalPrice: 1299,
    discountPercentage: 15,
    rating: 4.8,
    reviewCount: 284,
    badge: "Special Deal",
    badgeType: "deal",
    isFeatured: true,
    isDeal: true,
    isNewArrival: false,
    isBestSeller: true,
    stockStatus: "In Stock (Demo: 19 units)",
    stockCount: 19,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Titanium Gray", hex: "#7E7B78" },
      { name: "Titanium Black", hex: "#2B2A29" },
      { name: "Titanium Violet", hex: "#4C4656" },
      { name: "Titanium Yellow", hex: "#EADDAE" }
    ],
    storageOptions: ["256GB", "512GB", "1TB"],
    shortDescription: "Empowered by Galaxy AI with an integrated S Pen stylus, titanium perimeter frame, 200MP Quad Telephoto optical system, and a completely glare-free flat Dynamic AMOLED 2X display.",
    keyFeatures: [
      "Galaxy AI tools: Circle to Search, Live Call Translation, Note Assist",
      "Integrated low-latency precision S Pen stylus",
      "200MP wide sensor with Corning Gorilla Armor anti-reflective glass",
      "Snapdragon 8 Gen 3 for Galaxy with 1.9x enlarged vapor chamber",
      "Titanium frame construction with IP68 structural resilience",
      "Guaranteed 7 generations of Android OS & security patch upgrades"
    ],
    specs: {
      Display: "6.8-inch Dynamic AMOLED 2X Flat, 3120 x 1440 px, 1-120Hz LTPO, 2600 nits peak, Anti-glare",
      Processor: "Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm, 8-core CPU, Adreno 750)",
      Memory: "12GB LPDDR5X RAM",
      Storage: "256GB / 512GB / 1TB UFS 4.0",
      Camera: "Quad: 200MP Wide (OIS) + 50MP 5x Periscope + 10MP 3x Telephoto + 12MP Ultra-Wide",
      Battery: "5,000 mAh, 45W wired Fast Charge 2.0, 15W Fast Wireless, Wireless PowerShare",
      Connectivity: "5G, Wi-Fi 7, Bluetooth 5.3, UWB, NFC, USB-C 3.2 DisplayPort",
      Dimensions: "162.3 x 79.0 x 8.6 mm | 232 grams | IP68 water & dust resistant"
    },
    reviews: [
      { author: "Elena Rostova", rating: 5, date: "October 18, 2026", title: "The anti-glare screen is revolutionary", text: "Zero reflections when working outdoors. Galaxy AI note summarization saves me hours every day." },
      { author: "Brian K.", rating: 5, date: "October 08, 2026", title: "Best mobile zoom on the market", text: "The 200MP camera produces stunning detail even in dim banquet lighting. Build quality is top notch." }
    ]
  },
  {
    id: "gg-phone-03",
    name: "Google Pixel 9 Pro",
    brand: "Google",
    category: "Smartphones",
    categorySlug: "smartphones",
    price: 999,
    originalPrice: 1099,
    discountPercentage: 9,
    rating: 4.7,
    reviewCount: 176,
    badge: "New Arrival",
    badgeType: "new",
    isFeatured: false,
    isDeal: false,
    isNewArrival: true,
    isBestSeller: false,
    stockStatus: "In Stock (Demo: 14 units)",
    stockCount: 14,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Obsidian", hex: "#1F2124" },
      { name: "Porcelain", hex: "#EAE7DF" },
      { name: "Hazel", hex: "#7E837D" },
      { name: "Rose Quartz", hex: "#E9D2D6" }
    ],
    storageOptions: ["128GB", "256GB", "512GB"],
    shortDescription: "Engineered with the Google Tensor G4 chipset and advanced on-device Gemini Nano multimodal AI. Features an iconic sculpted camera bar and pristine Super Actua display.",
    keyFeatures: [
      "Google Tensor G4 engineered for advanced on-device Gemini AI",
      "Pro triple camera array with 50MP main and 30x Super Res Zoom",
      "Magic Editor with Add Me, Best Take, and generative Zoom Enhance",
      "Super Actua OLED display reaching up to 3000 nits peak brightness",
      "Satin glass finish with polished metal chassis perimeter",
      "7 full years of Android OS and Pixel Feature Drops"
    ],
    specs: {
      Display: "6.3-inch Super Actua LTPO OLED, 1280 x 2856 px, 1-120Hz, 3000 nits peak",
      Processor: "Google Tensor G4 (Titan M2 security co-processor)",
      Memory: "16GB LPDDR5X RAM",
      Storage: "128GB / 256GB / 512GB UFS 3.1",
      Camera: "Triple: 50MP Octa PD Wide + 48MP Quad PD Ultra-Wide + 48MP 5x Telephoto",
      Battery: "4,700 mAh, 27W Fast Charging, Qi Wireless, Battery Share",
      Connectivity: "5G Sub-6/mmWave, Wi-Fi 7, Bluetooth 5.3, Ultra-Wideband, USB-C 3.2",
      Dimensions: "152.8 x 72.0 x 8.5 mm | 199 grams | IP68 rating"
    },
    reviews: [
      { author: "Chloe Martin", rating: 5, date: "October 22, 2026", title: "Gemini features work like magic", text: "The camera is pure wizardry. 'Add Me' feature solved all family photo dilemmas." }
    ]
  },
  {
    id: "gg-laptop-01",
    name: "MacBook Pro 16\" M3 Max",
    brand: "Apple",
    category: "Laptops",
    categorySlug: "laptops",
    price: 3499,
    originalPrice: 3899,
    discountPercentage: 10,
    rating: 5.0,
    reviewCount: 198,
    badge: "Pro Choice",
    badgeType: "hot",
    isFeatured: true,
    isDeal: true,
    isNewArrival: false,
    isBestSeller: true,
    stockStatus: "In Stock (Demo: 11 units)",
    stockCount: 11,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Space Black", hex: "#2E3033" },
      { name: "Silver", hex: "#E3E4E5" }
    ],
    storageOptions: ["1TB SSD", "2TB SSD", "4TB SSD"],
    shortDescription: "The zenith of pro mobile computing. Features the 16-core M3 Max chip with 40-core GPU, Liquid Retina XDR screen with 1600 nits peak brightness, and 22 hours of continuous battery longevity.",
    keyFeatures: [
      "Apple M3 Max chip with 16-core CPU, 40-core GPU, Hardware Ray Tracing",
      "16.2-inch Liquid Retina XDR screen with Extreme Dynamic Range",
      "Up to 22 hours of real-world battery endurance",
      "Studio-quality three-mic array and six-speaker sound system with Spatial Audio",
      "Three Thunderbolt 4 ports, HDMI port, SDXC card slot, MagSafe 3",
      "Revolutionary anodization seal that repels fingerprints"
    ],
    specs: {
      Display: "16.2-inch Liquid Retina XDR (3456 x 2234 px), 120Hz ProMotion, 1600 nits HDR",
      Processor: "Apple M3 Max (16-core CPU, 40-core GPU, 16-core Neural Engine, 300GB/s bandwidth)",
      Memory: "48GB Unified Memory (Configurable to 128GB)",
      Storage: "1TB Ultra-fast NVMe SSD (Read up to 7.4 GB/s)",
      Camera: "1080p FaceTime HD camera with computational video DSP",
      Battery: "100-watt-hour lithium-polymer, 140W USB-C Power Adapter (MagSafe 3)",
      Connectivity: "Wi-Fi 6E (802.11ax), Bluetooth 5.3, 3x Thunderbolt 4, HDMI, SDXC, 3.5mm jack",
      Dimensions: "35.57 x 24.81 x 1.68 cm | 2.16 kg"
    },
    reviews: [
      { author: "Julian Reed", rating: 5, date: "October 05, 2026", title: "Render speeds are unbelievable", text: "4K ProRes timelines in DaVinci Resolve render in realtime with zero thermal throttling or fan noise. A true workstation." },
      { author: "Liam Chen", rating: 5, date: "September 19, 2026", title: "Battery life defies physics", text: "I worked an entire cross-country flight coding and editing photos without plugging into the outlet once." }
    ]
  },
  {
    id: "gg-laptop-02",
    name: "Dell XPS 15 9530",
    brand: "Dell",
    category: "Laptops",
    categorySlug: "laptops",
    price: 1899,
    originalPrice: 2199,
    discountPercentage: 14,
    rating: 4.6,
    reviewCount: 145,
    badge: "Best Seller",
    badgeType: "hot",
    isFeatured: true,
    isDeal: true,
    isNewArrival: false,
    isBestSeller: true,
    stockStatus: "In Stock (Demo: 16 units)",
    stockCount: 16,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Platinum Silver", hex: "#D6D9DC" },
      { name: "Carbon Black Interior", hex: "#1C1D1F" }
    ],
    storageOptions: ["512GB SSD", "1TB SSD", "2TB SSD"],
    shortDescription: "Precision-crafted CNC aluminum chassis with aerospace-grade carbon fiber palm rest, vibrant 3.5K OLED touchscreen, 13th Gen Intel Core i7, and dedicated NVIDIA GeForce RTX 4060 graphics.",
    keyFeatures: [
      "Machined aluminum casing with carbon fiber composite palm rest",
      "15.6-inch 3.5K (3456 x 2160) OLED InfinityEdge 400-nit touchscreen",
      "Intel Core i7-13700H 14-Core Processor (up to 5.0 GHz Turbo)",
      "NVIDIA GeForce RTX 4060 8GB GDDR6 Laptop GPU",
      "Waves Nx 3D audio quad-speaker design tuned by Grammy winner Jack Joseph Puig",
      "Dual Thunderbolt 4 USB-C ports with Power Delivery and DisplayPort"
    ],
    specs: {
      Display: "15.6\" 3.5K (3456 x 2160) OLED InfinityEdge Touch, 100% DCI-P3, 400 nits, DisplayHDR 500",
      Processor: "13th Gen Intel Core i7-13700H (14 cores, 20 threads, up to 5.0 GHz)",
      Memory: "32GB Dual Channel DDR5 4800MHz",
      Storage: "1TB M.2 PCIe Gen 4 NVMe SSD",
      Camera: "720p at 30 fps HD camera, dual-array digital microphones",
      Battery: "86 Whr 6-Cell Integrated Battery, 130W Type-C AC Adapter",
      Connectivity: "Intel Killer Wi-Fi 6E 1675 (AX211), Bluetooth 5.3, 2x Thunderbolt 4, SD card reader",
      Dimensions: "344.7 x 230.1 x 18.0 mm | 1.92 kg"
    },
    reviews: [
      { author: "Anthony Brooks", rating: 5, date: "October 11, 2026", title: "Gorgeous OLED screen", text: "Colors pop with deep inky blacks. Perfect for photography and UI design." }
    ]
  },
  {
    id: "gg-laptop-03",
    name: "ASUS ROG Zephyrus G16 OLED",
    brand: "ASUS",
    category: "Laptops",
    categorySlug: "laptops",
    price: 2299,
    originalPrice: 2499,
    discountPercentage: 8,
    rating: 4.9,
    reviewCount: 112,
    badge: "Gaming Flagship",
    badgeType: "hot",
    isFeatured: false,
    isDeal: false,
    isNewArrival: true,
    isBestSeller: false,
    stockStatus: "In Stock (Demo: 8 units)",
    stockCount: 8,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Eclipse Gray", hex: "#3A3D40" },
      { name: "Platinum White", hex: "#EBEBEB" }
    ],
    storageOptions: ["1TB NVMe", "2TB NVMe"],
    shortDescription: "Ultra-slim CNC milled gaming laptop featuring the ROG Nebula 2.5K 240Hz OLED display, Intel Core Ultra 9 with AI Boost, and NVIDIA GeForce RTX 4080 graphics with Slash Lighting lid.",
    keyFeatures: [
      "16-inch 2.5K 240Hz 0.2ms ROG Nebula OLED display with G-SYNC",
      "Intel Core Ultra 9 185H processor with built-in NPU for AI acceleration",
      "NVIDIA GeForce RTX 4080 Laptop GPU with 12GB GDDR6 VRAM",
      "Slash Lighting lid with customizable mini-LED array animations",
      "ROG Intelligent Cooling with liquid metal and 2nd Gen Arc Flow Fans",
      "Sub-2cm thin profile weighing just 1.85 kg"
    ],
    specs: {
      Display: "16-inch 2.5K (2560 x 1600) OLED, 240Hz, 0.2ms, 100% DCI-P3, VESA DisplayHDR True Black 500",
      Processor: "Intel Core Ultra 9 Processor 185H 2.3 GHz (24MB Cache, up to 5.1 GHz, 16 cores)",
      Memory: "32GB LPDDR5X 7467MHz on-board",
      Storage: "2TB PCIe 4.0 NVMe M.2 Performance SSD",
      Camera: "1080p FHD IR Camera with Windows Hello support",
      Battery: "90WHrs, 4S1P, 4-cell Li-ion, 240W AC Adapter, 100W Type-C charging support",
      Connectivity: "Wi-Fi 6E, Bluetooth 5.3, 1x Thunderbolt 4, 1x USB-C 3.2 Gen 2, HDMI 2.1 FRL",
      Dimensions: "35.4 x 24.6 x 1.49 cm | 1.85 kg"
    },
    reviews: [
      { author: "Dante Rossi", rating: 5, date: "October 20, 2026", title: "A true masterpiece of design and power", text: "Gaming at 240Hz on an OLED panel with pure blacks feels transcendent. Lightweight enough for daily commute." }
    ]
  },
  {
    id: "gg-tablet-01",
    name: "iPad Pro 13\" M4",
    brand: "Apple",
    category: "Tablets",
    categorySlug: "tablets",
    price: 1299,
    originalPrice: 1399,
    discountPercentage: 7,
    rating: 4.9,
    reviewCount: 215,
    badge: "Ultra Thin",
    badgeType: "hot",
    isFeatured: true,
    isDeal: false,
    isNewArrival: true,
    isBestSeller: true,
    stockStatus: "In Stock (Demo: 22 units)",
    stockCount: 22,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Space Black", hex: "#222326" },
      { name: "Silver", hex: "#E2E3E5" }
    ],
    storageOptions: ["256GB", "512GB", "1TB", "2TB"],
    shortDescription: "The thinnest Apple product ever made at just 5.1 mm. Powered by the groundbreaking Apple M4 chip with dual-layer Tandem OLED Ultra Retina XDR screen.",
    keyFeatures: [
      "Remarkably thin 5.1mm aerospace aluminum unibody enclosure",
      "Groundbreaking Tandem OLED Ultra Retina XDR display with 1000 nits full-screen brightness",
      "Next-generation Apple M4 chip with hardware-accelerated mesh shading",
      "Compatible with Apple Pencil Pro with barrel roll and squeeze haptics",
      "Landscape 12MP Center Stage camera with TrueDepth Face ID",
      "Thunderbolt / USB 4 port with external monitor support up to 6K resolution"
    ],
    specs: {
      Display: "13-inch Tandem OLED Ultra Retina XDR (2752 x 2064 px), 10-120Hz ProMotion, 1600 nits peak HDR",
      Processor: "Apple M4 chip (9-core CPU or 10-core CPU, 10-core GPU with Ray Tracing)",
      Memory: "8GB or 16GB Unified RAM",
      Storage: "256GB / 512GB / 1TB / 2TB NVMe",
      Camera: "12MP Wide back camera with LiDAR scanner + 12MP Center Stage Ultra Wide front",
      Battery: "38.99-watt-hour rechargeable lithium-polymer, up to 10 hours web surfing on Wi-Fi",
      Connectivity: "Wi-Fi 6E (802.11ax), Bluetooth 5.3, Thunderbolt / USB 4, Smart Connector",
      Dimensions: "281.6 x 215.5 x 5.1 mm | 579 grams"
    },
    reviews: [
      { author: "Emily Watson", rating: 5, date: "October 16, 2026", title: "The tandem OLED is mesmerizing", text: "Contrast ratio is sublime. Procreate and Logic Pro run smoother than on my desktop rig." }
    ]
  },
  {
    id: "gg-tablet-02",
    name: "Samsung Galaxy Tab S9 Ultra",
    brand: "Samsung",
    category: "Tablets",
    categorySlug: "tablets",
    price: 1049,
    originalPrice: 1199,
    discountPercentage: 13,
    rating: 4.7,
    reviewCount: 94,
    badge: "Special Offer",
    badgeType: "deal",
    isFeatured: false,
    isDeal: true,
    isNewArrival: false,
    isBestSeller: false,
    stockStatus: "In Stock (Demo: 13 units)",
    stockCount: 13,
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Graphite", hex: "#35373A" },
      { name: "Beige", hex: "#E7DFD5" }
    ],
    storageOptions: ["256GB", "512GB", "1TB"],
    shortDescription: "Gigantic 14.6-inch Dynamic AMOLED 2X canvas with IP68 water resistance on both tablet and included S Pen. Powered by Snapdragon 8 Gen 2 for Galaxy.",
    keyFeatures: [
      "Massive 14.6\" Dynamic AMOLED 2X display with 120Hz refresh rate",
      "IP68 dust and water resistance on tablet chassis and S Pen stylus",
      "Quad AKG stereo speakers with Dolby Atmos immersive surround",
      "Samsung DeX mode provides true desktop-style multitasking",
      "Snapdragon 8 Gen 2 for Galaxy optimized mobile architecture",
      "MicroSD card expansion slot support up to 1TB"
    ],
    specs: {
      Display: "14.6-inch Dynamic AMOLED 2X, 2960 x 1848 px, 120Hz, HDR10+, 16:10 aspect ratio",
      Processor: "Qualcomm Snapdragon 8 Gen 2 for Galaxy (4nm, Octa-Core up to 3.36 GHz)",
      Memory: "12GB or 16GB RAM",
      Storage: "256GB / 512GB / 1TB UFS + MicroSD slot",
      Camera: "Rear: 13MP + 8MP Ultra-wide | Front: Dual 12MP (Wide + Ultra-wide)",
      Battery: "11,200 mAh, 45W Fast Charging",
      Connectivity: "Wi-Fi 6E, Bluetooth 5.3, USB Type-C 3.2 Gen 1, POGO pins",
      Dimensions: "326.4 x 208.6 x 5.5 mm | 732 grams | IP68 certified"
    },
    reviews: [
      { author: "Devon Lee", rating: 5, date: "September 29, 2026", title: "Incredible for multitasking and drawing", text: "DeX mode with keyboard cover replaces my laptop when travelling." }
    ]
  },
  {
    id: "gg-audio-01",
    name: "Sony WH-1000XM5 Wireless Headphones",
    brand: "Sony",
    category: "Audio & Headphones",
    categorySlug: "audio",
    price: 348,
    originalPrice: 399,
    discountPercentage: 13,
    rating: 4.8,
    reviewCount: 462,
    badge: "Industry Standard",
    badgeType: "hot",
    isFeatured: true,
    isDeal: true,
    isNewArrival: false,
    isBestSeller: true,
    stockStatus: "In Stock (Demo: 35 units)",
    stockCount: 35,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Midnight Black", hex: "#1A1A1A" },
      { name: "Silver White", hex: "#E4E3DF" },
      { name: "Smoky Pink", hex: "#D6B8B8" }
    ],
    storageOptions: ["Standard Edition"],
    shortDescription: "Two processors controlling 8 microphones for world-class active noise cancellation. Auto NC Optimizer, carbon fiber composite drivers, and up to 30 hours of wireless playback.",
    keyFeatures: [
      "Integrated Processor V1 and HD Noise Cancelling Processor QN1",
      "Specially engineered 30mm carbon fiber driver unit delivers pristine acoustics",
      "Crystal clear hands-free calling with 4 beamforming microphones and AI noise reduction",
      "Up to 30 hours battery life with quick charging (3 min gives 3 hours)",
      "Speak-to-Chat automatically pauses playback when you start speaking",
      "Multipoint connection connects to two Bluetooth devices simultaneously"
    ],
    specs: {
      Display: "N/A (Wearable Audio)",
      Processor: "Sony HD Noise Cancelling QN1 + Integrated Processor V1",
      Memory: "Custom DSP Firmware",
      Storage: "N/A",
      Camera: "N/A",
      Battery: "Up to 30 hours (NC ON), up to 40 hours (NC OFF), USB-PD fast charge",
      Connectivity: "Bluetooth 5.2 (LDAC, AAC, SBC), 3.5mm stereo mini jack cable included",
      Dimensions: "250 grams | Soft fit leather headband | Fold-flat carrying case"
    },
    reviews: [
      { author: "Liam Campbell", rating: 5, date: "October 19, 2026", title: "Airplane flights are completely silent now", text: "The noise cancellation shuts down jet engines and office chatter effortlessly. Ear cushions are like clouds." },
      { author: "Grace Harper", rating: 5, date: "October 07, 2026", title: "Audio clarity with LDAC is superb", text: "Listening to lossless classical audio reveals subtleties you didn't even know existed." }
    ]
  },
  {
    id: "gg-audio-02",
    name: "Apple AirPods Max",
    brand: "Apple",
    category: "Audio & Headphones",
    categorySlug: "audio",
    price: 499,
    originalPrice: 549,
    discountPercentage: 9,
    rating: 4.7,
    reviewCount: 310,
    badge: "Premium Design",
    badgeType: "hot",
    isFeatured: true,
    isDeal: false,
    isNewArrival: false,
    isBestSeller: true,
    stockStatus: "In Stock (Demo: 17 units)",
    stockCount: 17,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Space Gray", hex: "#4B4E54" },
      { name: "Silver", hex: "#E8E8E8" },
      { name: "Sky Blue", hex: "#9EB6C9" },
      { name: "Pink", hex: "#E4B0A7" },
      { name: "Green", hex: "#A8B8A0" }
    ],
    storageOptions: ["Standard Edition"],
    shortDescription: "A custom acoustic design combined with advanced software and Apple H1 chips for computational audio. Breathable knit mesh canopy and anodized aluminum ear cups.",
    keyFeatures: [
      "Apple-designed dynamic driver delivers high-fidelity sound",
      "Active Noise Cancellation blocks outside noise, so you can immerse yourself in music",
      "Transparency mode for hearing and interacting with the world around you",
      "Spatial audio with dynamic head tracking provides theater-like sound",
      "Designed with a knit-mesh canopy and memory foam ear cushions for an exceptional fit",
      "Digital Crown for volume control, track skip, and Siri activation"
    ],
    specs: {
      Display: "N/A (Over-Ear)",
      Processor: "Apple H1 headphone chip (each ear cup)",
      Memory: "N/A",
      Storage: "N/A",
      Camera: "N/A",
      Battery: "Up to 20 hours listening time on a single charge with ANC / Spatial Audio enabled",
      Connectivity: "Bluetooth 5.0, Lightning to USB-C charging",
      Dimensions: "168.6 x 187.3 x 83.4 mm | 384.8 grams | Smart Case included"
    },
    reviews: [
      { author: "Samantha Price", rating: 5, date: "October 12, 2026", title: "Spatial audio is unmatched for movies", text: "Watching movies on an Apple TV or iPad with head tracking feels like being inside an IMAX auditorium." }
    ]
  },
  {
    id: "gg-audio-03",
    name: "Bose QuietComfort Ultra Earbuds",
    brand: "Bose",
    category: "Audio & Headphones",
    categorySlug: "audio",
    price: 249,
    originalPrice: 299,
    discountPercentage: 17,
    rating: 4.8,
    reviewCount: 189,
    badge: "Special Deal",
    badgeType: "deal",
    isFeatured: false,
    isDeal: true,
    isNewArrival: false,
    isBestSeller: false,
    stockStatus: "In Stock (Demo: 26 units)",
    stockCount: 26,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Black", hex: "#1C1C1E" },
      { name: "White Smoke", hex: "#F2F2F4" },
      { name: "Moonstone Blue", hex: "#95A3B3" }
    ],
    storageOptions: ["Standard Edition"],
    shortDescription: "Breakthrough spatialized audio for more immersive listening. World-class active noise cancellation customized specifically to the geometry of your ear canal with CustomTune technology.",
    keyFeatures: [
      "Bose Immersive Audio spatializes acoustic field outside of your head",
      "CustomTune technology calibrates noise cancellation and sound specifically to your ears",
      "Quiet Mode, Aware Mode, and Immersion Mode with ActiveSense technology",
      "Nine combinations of eartips and stability bands for all-day comfort",
      "Up to 6 hours listening time (up to 4 hours with Immersive Audio)",
      "IPX4 water-resistant build withstands gym sweat and light rain"
    ],
    specs: {
      Display: "N/A (True Wireless In-Ear)",
      Processor: "Qualcomm Snapdragon Sound Platform with Bose CustomTune DSP",
      Memory: "N/A",
      Storage: "N/A",
      Camera: "N/A",
      Battery: "6 hours per charge, 24 hours total with charging case, 20-min quick charge gives 2 hours",
      Connectivity: "Bluetooth 5.3, aptX Adaptive, AAC, SBC",
      Dimensions: "Earbuds: 7.7 grams each | Case: 59.8 grams | IPX4 splash resistant"
    },
    reviews: [
      { author: "Nathan Drake", rating: 5, date: "October 15, 2026", title: "Best in-ear noise cancellation ever tested", text: "Commutes on the metro are whisper quiet. The immersion mode makes live concerts feel realistic." }
    ]
  },
  {
    id: "gg-watch-01",
    name: "Apple Watch Ultra 2",
    brand: "Apple",
    category: "Smartwatches",
    categorySlug: "smartwatches",
    price: 799,
    originalPrice: 849,
    discountPercentage: 6,
    rating: 4.9,
    reviewCount: 312,
    badge: "Rugged Pro",
    badgeType: "hot",
    isFeatured: true,
    isDeal: false,
    isNewArrival: true,
    isBestSeller: true,
    stockStatus: "In Stock (Demo: 20 units)",
    stockCount: 20,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Natural Titanium", hex: "#A8A59E" },
      { name: "Black Titanium", hex: "#292929" }
    ],
    storageOptions: ["64GB GPS + Cellular"],
    shortDescription: "The ultimate sports and adventure watch. Powered by the S9 SiP with double tap gesture, brightest 3000 nits display, precision dual-frequency GPS, and up to 72 hours in Low Power Mode.",
    keyFeatures: [
      "49mm aerospace-grade titanium case with sapphire front crystal",
      "Brightest display ever at 3000 nits for crystal visibility in blazing sun",
      "S9 SiP enables magical double tap gesture and on-device Siri",
      "Precision dual-frequency GPS (L1 and L5) with track detection",
      "100m water resistance, EN13319 certified for recreational scuba diving to 40m",
      "Customizable Action button to mark compass waypoints, workouts, or dive depth"
    ],
    specs: {
      Display: "49mm Always-On Retina LTPO OLED, 410 x 502 px, 3000 nits peak, Sapphire crystal",
      Processor: "Apple S9 SiP with 64-bit dual-core processor and 4-core Neural Engine",
      Memory: "64GB capacity",
      Storage: "64GB integrated",
      Camera: "N/A",
      Battery: "Up to 36 hours normal use, up to 72 hours in Low Power Mode, fast magnetic charging",
      Connectivity: "LTE & UMTS, Wi-Fi 4 (802.11n), Bluetooth 5.3, UWB 2nd Gen, Dual-frequency GPS",
      Dimensions: "49 x 44 x 14.4 mm | 61.4 grams | 100m water resistant, IP6X dust"
    },
    reviews: [
      { author: "Chris Henderson", rating: 5, date: "October 17, 2026", title: "Indispensable for ultramarathons", text: "Battery handled a 50k mountain trail with GPS tracking, music, and heart rate with 45% remaining." }
    ]
  },
  {
    id: "gg-watch-02",
    name: "Samsung Galaxy Watch 6 Classic",
    brand: "Samsung",
    category: "Smartwatches",
    categorySlug: "smartwatches",
    price: 369,
    originalPrice: 429,
    discountPercentage: 14,
    rating: 4.7,
    reviewCount: 140,
    badge: "Special Deal",
    badgeType: "deal",
    isFeatured: false,
    isDeal: true,
    isNewArrival: false,
    isBestSeller: false,
    stockStatus: "In Stock (Demo: 18 units)",
    stockCount: 18,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Silver Stainless", hex: "#D2D5D9" },
      { name: "Black Stainless", hex: "#1F2022" }
    ],
    storageOptions: ["43mm Bluetooth", "47mm Bluetooth", "47mm LTE"],
    shortDescription: "Iconic rotating physical bezel returns with a 20% larger screen, personalized heart rate zones, advanced sleep coaching, and BIA body composition analysis.",
    keyFeatures: [
      "Interactive mechanical rotating bezel for smooth navigation",
      "Sapphire crystal display over stainless steel timeless timepiece frame",
      "Samsung BioActive sensor: Optical Heart Rate, Electrical Heart, Bioelectrical Impedance",
      "Personalized HR Zone training and fall detection safety suite",
      "Comprehensive sleep monitoring with animal sleep symbol coaching",
      "Wear OS Powered by Samsung with Google Wallet and Google Maps integration"
    ],
    specs: {
      Display: "1.5-inch Super AMOLED (480 x 480 px), Sapphire crystal, Always-on display",
      Processor: "Exynos W930 (5nm) Dual-core 1.4 GHz Cortex-A55",
      Memory: "2GB RAM",
      Storage: "16GB Internal storage",
      Camera: "N/A",
      Battery: "425 mAh, WPC-based wireless fast charging, up to 40 hours typical usage",
      Connectivity: "Bluetooth 5.3, Wi-Fi 802.11 a/b/g/n, NFC, GPS/Glonass/Beidou/Galileo",
      Dimensions: "46.5 x 46.5 x 10.9 mm | 59 grams | 5ATM + IP68 / MIL-STD-810H"
    },
    reviews: [
      { author: "Simon Ortiz", rating: 5, date: "October 03, 2026", title: "That mechanical bezel is tactile heaven", text: "Navigating notifications with the clicking bezel is so much better than wiping fingerprints on glass." }
    ]
  },
  {
    id: "gg-gaming-01",
    name: "Sony PlayStation 5 Pro Console",
    brand: "Sony",
    category: "Gaming",
    categorySlug: "gaming",
    price: 699,
    originalPrice: 749,
    discountPercentage: 6,
    rating: 4.9,
    reviewCount: 388,
    badge: "Trending",
    badgeType: "hot",
    isFeatured: true,
    isDeal: false,
    isNewArrival: true,
    isBestSeller: true,
    stockStatus: "In Stock (Demo: 9 units left)",
    stockCount: 9,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Glacier White with Black Accent", hex: "#F3F4F6" }
    ],
    storageOptions: ["2TB SSD Integrated"],
    shortDescription: "Play games at fidelity mode graphics with fluid 60-120fps performance. Features PlayStation Spectral Super Resolution (PSSR) AI upscaling, upgraded GPU, and advanced ray tracing.",
    keyFeatures: [
      "PlayStation Spectral Super Resolution (PSSR) AI machine-learning upscaler",
      "Upgraded GPU with 67% more compute units and 28% faster memory bandwidth",
      "Advanced Ray Tracing provides double to triple dynamic lighting reflections",
      "Pre-installed massive 2TB ultra-high-speed custom solid state drive",
      "PS5 Pro Game Boost supports over 8,500 backward-compatible PS4 titles",
      "Wi-Fi 7 readiness for minimal latency online multiplayer gaming"
    ],
    specs: {
      Display: "HDMI 2.1 output supports 4K 120Hz, 8K TVs, VRR (Variable Refresh Rate)",
      Processor: "x86-64-AMD Ryzen Zen 2, 8 Cores / 16 Threads, variable frequency up to 3.85 GHz",
      Memory: "16GB GDDR6 + 2GB DDR5 for system memory",
      Storage: "2TB Custom NVMe SSD (5.5GB/s Raw Read Bandwidth) + M.2 expansion slot",
      Camera: "HD Camera accessory compatible",
      Battery: "N/A (390W Internal Power Supply)",
      Connectivity: "Wi-Fi 7 (802.11be), Bluetooth 5.1, Ethernet Gigabit, 2x USB-C (10Gbps), 2x USB-A",
      Dimensions: "388 x 89 x 216 mm | 3.1 kg | Includes DualSense Wireless Controller"
    },
    reviews: [
      { author: "Kyle Larson", rating: 5, date: "October 24, 2026", title: "60 FPS with full Ray Tracing is a dream", text: "Spider-Man 2 and Gran Turismo 7 look photorealistic without needing to compromise on framerate." },
      { author: "Zack Tyler", rating: 5, date: "October 16, 2026", title: "Whisper quiet cooling", text: "Even after a 6-hour marathon session of Horizon Forbidden West, the console remained silent." }
    ]
  },
  {
    id: "gg-gaming-02",
    name: "Steam Deck OLED 512GB",
    brand: "Valve",
    category: "Gaming",
    categorySlug: "gaming",
    price: 549,
    originalPrice: 599,
    discountPercentage: 8,
    rating: 4.9,
    reviewCount: 224,
    badge: "Handheld King",
    badgeType: "hot",
    isFeatured: true,
    isDeal: false,
    isNewArrival: false,
    isBestSeller: true,
    stockStatus: "In Stock (Demo: 15 units)",
    stockCount: 15,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Matte Black", hex: "#18191B" }
    ],
    storageOptions: ["512GB NVMe SSD", "1TB Anti-Glare NVMe SSD"],
    shortDescription: "Experience your entire PC game library wherever you roam. Boasts a 7.4-inch 90Hz HDR OLED display, improved battery runtime, faster Wi-Fi 6E, and upgraded thermal acoustics.",
    keyFeatures: [
      "7.4-inch HDR OLED display with 1,000,000:1 contrast and 1000 nits peak brightness",
      "90Hz fluid refresh rate with 0.1ms rapid pixel response time",
      "50Whr battery delivering 30-50% longer playtimes over LCD generation",
      "6nm AMD APU with higher efficiency and quieter internal fan profile",
      "Wi-Fi 6E architecture enables 2-3x faster game download speeds",
      "Dual capacitive thumbsticks, dual trackpads, and analog triggers"
    ],
    specs: {
      Display: "7.4\" diagonal, 1280 x 800 x RGB, HDR OLED, 90Hz, 1000 nits peak HDR, 110% DCI-P3",
      Processor: "6nm AMD APU: Zen 2 4c/8t (2.4-3.5GHz) + 8 RDNA 2 CUs (1.6GHz, 1.6 TFlops)",
      Memory: "16 GB LPDDR5 on-board RAM (6400 MT/s quad 32-bit channels)",
      Storage: "512GB NVMe SSD + High speed UHS-I microSD card slot",
      Camera: "N/A",
      Battery: "50Whr battery. 3-12 hours of gameplay (game dependent), 45W USB-C PD3.0",
      Connectivity: "Tri-band Wi-Fi 6E (2.4/5/6GHz), Bluetooth 5.3 with dedicated antenna, USB-C DP",
      Dimensions: "298 x 117 x 49 mm | 640 grams | Deluxe carry case included"
    },
    reviews: [
      { author: "Alex Ramos", rating: 5, date: "October 14, 2026", title: "The screen makes games look brand new", text: "Hades and Cyberpunk look jaw-dropping on the HDR OLED panel. Battery life is vastly improved." }
    ]
  },
  {
    id: "gg-camera-01",
    name: "Sony Alpha A7 IV Full-Frame Camera",
    brand: "Sony",
    category: "Cameras",
    categorySlug: "cameras",
    price: 2498,
    originalPrice: 2699,
    discountPercentage: 7,
    rating: 4.9,
    reviewCount: 167,
    badge: "Pro Creator",
    badgeType: "hot",
    isFeatured: true,
    isDeal: false,
    isNewArrival: false,
    isBestSeller: true,
    stockStatus: "In Stock (Demo: 12 units)",
    stockCount: 12,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Pro Textured Black", hex: "#1F1F1F" }
    ],
    storageOptions: ["Body Only", "With 28-70mm Lens Kit"],
    shortDescription: "A groundbreaking hybrid mirrorless camera with 33MP Exmor R back-illuminated sensor, BIONZ XR image processor, 4K 60p 10-bit 4:2:2 video, and real-time AI eye autofocus tracking.",
    keyFeatures: [
      "33MP Full-Frame Exmor R back-illuminated CMOS sensor",
      "Next-generation BIONZ XR processing engine with 8x more power",
      "Up to 4K 60p 10-bit 4:2:2 video capture with S-Cinetone profile",
      "759-point phase-detection AF covering 94% of the image frame",
      "Real-time Eye AF for Humans, Animals, and Birds in both stills and video",
      "5.5-step 5-axis in-body optical image stabilization (IBIS)"
    ],
    specs: {
      Display: "3.0-inch 1.03M-dot side-opening vari-angle LCD touch monitor + 3.68M-dot Quad-VGA OLED EVF",
      Processor: "BIONZ XR image processing engine",
      Memory: "Dual media slots (Slot 1: CFexpress Type A / SD UHS-II, Slot 2: SD UHS-II)",
      Storage: "Dual card slot media",
      Camera: "33.0 Megapixels Effective, ISO 100-51200 (expands to 50-204800)",
      Battery: "Sony NP-FZ100 rechargeable battery (approx. 580 shots per CIPA standard)",
      Connectivity: "Wi-Fi 5GHz/2.4GHz, Bluetooth 5.0, USB 3.2 Gen 2 Type-C (10Gbps, supports 4K webcam UVC/UAC), Full HDMI",
      Dimensions: "131.3 x 96.4 x 79.8 mm | 658 grams (including battery and memory card)"
    },
    reviews: [
      { author: "Trevor Hall", rating: 5, date: "October 10, 2026", title: "The ultimate hybrid camera for work", text: "Autofocus never misses a beat, even in low-light weddings. 10-bit color grading latitude is gorgeous." }
    ]
  },
  {
    id: "gg-camera-02",
    name: "DJI Mini 4 Pro Drone Combo",
    brand: "DJI",
    category: "Cameras",
    categorySlug: "cameras",
    price: 959,
    originalPrice: 1099,
    discountPercentage: 13,
    rating: 4.8,
    reviewCount: 142,
    badge: "Special Deal",
    badgeType: "deal",
    isFeatured: false,
    isDeal: true,
    isNewArrival: true,
    isBestSeller: false,
    stockStatus: "In Stock (Demo: 17 units)",
    stockCount: 17,
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Light Gray", hex: "#DCDDE0" }
    ],
    storageOptions: ["Fly More Combo with RC 2 Controller"],
    shortDescription: "Ultra-compact sub-249g mini drone featuring omnidirectional obstacle sensing, 4K/60fps HDR true vertical video shooting, D-Log M color profile, and 20km FHD video transmission.",
    keyFeatures: [
      "Regulated ultralight sub-249g weight: no FAA registration needed for hobby flight",
      "Omnidirectional active obstacle sensing with APAS 5.0 braking",
      "4K/60fps HDR True Vertical Shooting ready for Instagram Reels and TikTok",
      "DJI O4 video transmission up to 20 km range with crystal clear 1080p/60fps live feed",
      "Up to 34 minutes flight time per battery (includes 3 batteries in Fly More Combo)",
      "ActiveTrack 360° cinematic subject tracking with customized pathing"
    ],
    specs: {
      Display: "DJI RC 2 Controller features 5.5\" FHD 700 nits high-brightness touchscreen",
      Processor: "DJI FlightAutonomy processor with dual vision sensors",
      Memory: "2GB Internal onboard storage",
      Storage: "MicroSD expansion up to 512GB (UHS-I Speed Class 3)",
      Camera: "1/1.3-inch CMOS, 48MP, f/1.7 aperture, 24mm equivalent lens, 4K 100fps slow-mo",
      Battery: "2590 mAh Intelligent Flight Battery, up to 34 min flight time per pack",
      Connectivity: "DJI O4 transmission, Wi-Fi 6, Bluetooth 5.2",
      Dimensions: "Folded: 148 x 94 x 64 mm | Takeoff weight: < 249 grams"
    },
    reviews: [
      { author: "Jordan Miles", rating: 5, date: "October 09, 2026", title: "Best travel drone without question", text: "Takes zero room in my hiking backpack. The omnidirectional sensors prevent any accidents." }
    ]
  },
  {
    id: "gg-home-01",
    name: "Sonos Era 300 Spatial Speaker",
    brand: "Sonos",
    category: "Home Electronics",
    categorySlug: "home",
    price: 399,
    originalPrice: 449,
    discountPercentage: 11,
    rating: 4.8,
    reviewCount: 96,
    badge: "Dolby Atmos",
    badgeType: "hot",
    isFeatured: true,
    isDeal: true,
    isNewArrival: false,
    isBestSeller: false,
    stockStatus: "In Stock (Demo: 21 units)",
    stockCount: 21,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Matte Black", hex: "#1C1D1F" },
      { name: "Matte White", hex: "#F5F5F7" }
    ],
    storageOptions: ["Single Speaker", "Stereo Pair (+10% Bundle)"],
    shortDescription: "Revolutionary acoustic architecture featuring six optimally positioned drivers all around the front, sides, and top to support Dolby Atmos Spatial Audio for room-filling sound.",
    keyFeatures: [
      "Six class-D digital amplifiers precision tuned for speaker acoustic structure",
      "Direct Dolby Atmos music playback from Apple Music and Amazon Music",
      "Trueplay tuning technology optimizes sound according to room acoustics",
      "Intuitive capacitive touch controls: tap to play, pause, swipe to adjust volume",
      "Stream via Wi-Fi 6, connect Bluetooth 5.0, or use 3.5mm line-in adapter",
      "Far-field microphone array with beamforming for hands-free Sonos Voice & Alexa"
    ],
    specs: {
      Display: "N/A (Smart Acoustic System)",
      Processor: "Quad-Core A55 1.9GHz processor",
      Memory: "2GB DDR4 RAM + 8GB eMMC Storage",
      Storage: "N/A",
      Camera: "N/A",
      Battery: "N/A (100-240V 50/60Hz Internal Power Supply)",
      Connectivity: "Wi-Fi 6 (802.11 a/b/g/n/ac/ax), Bluetooth 5.0, USB-C line-in and ethernet adapter support, Apple AirPlay 2",
      Dimensions: "160 x 260 x 185 mm | 4.47 kg"
    },
    reviews: [
      { author: "Hannah Ross", rating: 5, date: "October 13, 2026", title: "Spatial audio in the living room is magical", text: "Instruments float across the room like you are sitting right in the recording studio." }
    ]
  },
  {
    id: "gg-home-02",
    name: "Apple HomePod (2nd Gen)",
    brand: "Apple",
    category: "Home Electronics",
    categorySlug: "home",
    price: 299,
    originalPrice: 299,
    discountPercentage: 0,
    rating: 4.7,
    reviewCount: 114,
    badge: "Smart Home",
    badgeType: "hot",
    isFeatured: false,
    isDeal: false,
    isNewArrival: false,
    isBestSeller: true,
    stockStatus: "In Stock (Demo: 18 units)",
    stockCount: 18,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Midnight", hex: "#1D2027" },
      { name: "White", hex: "#F0F0F2" }
    ],
    storageOptions: ["Standard Edition"],
    shortDescription: "High-fidelity audio powerhouse with high-excursion woofer, beamforming array of five tweeters, advanced computational audio, and integrated room temperature/humidity sensors.",
    keyFeatures: [
      "Custom-engineered high-excursion woofer with 20mm motor diaphragm",
      "Beamforming array of five horn-loaded tweeters with neodymium magnets",
      "Real-time acoustic modeling and bass-management computational audio via S7 chip",
      "Spatial Audio support with Dolby Atmos for music and movies with Apple TV 4K",
      "Built-in temperature and humidity sensor triggers smart home automations",
      "Sound Recognition listens for smoke and carbon monoxide alarms and alerts your iPhone"
    ],
    specs: {
      Display: "Backlit touch surface with animated Siri waveform lights",
      Processor: "Apple S7 chip with real-time feedback tuning",
      Memory: "System Flash",
      Storage: "N/A",
      Camera: "N/A",
      Battery: "N/A (Built-in power cord)",
      Connectivity: "802.11n Wi-Fi, Thread networking, Bluetooth 5.0, Ultra-Wideband (UWB) chip for device handoff",
      Dimensions: "168 x 142 mm | 2.3 kg | Seamless acoustically transparent mesh fabric"
    },
    reviews: [
      { author: "Carl Mason", rating: 5, date: "October 01, 2026", title: "Deep, rich bass without distortion", text: "Pairing two HomePods in stereo with Apple TV 4K replaces a $1,000 soundbar system." }
    ]
  },
  {
    id: "gg-acc-01",
    name: "Keychron Q1 Pro Mechanical Keyboard",
    brand: "Keychron",
    category: "Accessories",
    categorySlug: "accessories",
    price: 199,
    originalPrice: 229,
    discountPercentage: 13,
    rating: 4.9,
    reviewCount: 153,
    badge: "Special Deal",
    badgeType: "deal",
    isFeatured: true,
    isDeal: true,
    isNewArrival: false,
    isBestSeller: true,
    stockStatus: "In Stock (Demo: 24 units)",
    stockCount: 24,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Carbon Black", hex: "#232428" },
      { name: "Silver Grey", hex: "#C5C8CC" },
      { name: "Shell White", hex: "#EEF0F2" }
    ],
    storageOptions: ["Red Linear Switch", "Brown Tactile Switch", "Banana Switch"],
    shortDescription: "CNC aluminum full-metal custom wireless mechanical keyboard with double-gasket acoustic mounting, hot-swappable sockets, programmable rotary encoder knob, and QMK/VIA support.",
    keyFeatures: [
      "Full CNC 6063 aluminum body precision sculpted and anodized",
      "Double-gasket design with acoustic foam layers delivers deep 'thocky' acoustics",
      "Seamless wireless Bluetooth 5.1 and Type-C wired 1000Hz polling rate",
      "Hot-swappable switch sockets compatible with 3-pin and 5-pin MX mechanical switches",
      "Fully remappable keys and custom macros via QMK/VIA browser tool",
      "4000 mAh rechargeable battery gives up to 300 hours typing time"
    ],
    specs: {
      Display: "South-facing RGB backlight with 22 dynamic lighting animation modes",
      Processor: "Ultra-low-power ARM Cortex-M4 32-bit STM32L432 (128KB Flash)",
      Memory: "Onboard EEPROM memory saves custom VIA keymaps",
      Storage: "N/A",
      Camera: "N/A",
      Battery: "4000 mAh Rechargeable Li-polymer, up to 300 hours (backlight off)",
      Connectivity: "Bluetooth 5.1 (3 device switching) & USB Type-C wired",
      Dimensions: "327.5 x 145 mm | Height: 35.8 mm | Weight: 1738 ± 10 grams"
    },
    reviews: [
      { author: "Ethan Wright", rating: 5, date: "October 21, 2026", title: "Heaviest, most satisfying keyboard I own", text: "The acoustic damping creates an addictively pleasant keystroke sound. VIA web config worked instantly on Mac and Windows." }
    ]
  },
  {
    id: "gg-acc-02",
    name: "Anker 737 GaNPrime 140W Power Bank",
    brand: "Anker",
    category: "Accessories",
    categorySlug: "accessories",
    price: 119,
    originalPrice: 149,
    discountPercentage: 20,
    rating: 4.9,
    reviewCount: 318,
    badge: "Best Seller",
    badgeType: "deal",
    isFeatured: true,
    isDeal: true,
    isNewArrival: false,
    isBestSeller: true,
    stockStatus: "In Stock (Demo: 42 units)",
    stockCount: 42,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Gunmetal Gray", hex: "#3A3D42" }
    ],
    storageOptions: ["24,000 mAh Capacity"],
    shortDescription: "Ultra-powerful 140W two-way fast charging power bank with smart digital color display, 24,000mAh capacity, GaNPrime cooling, and Power Delivery 3.1 protocol.",
    keyFeatures: [
      "Ultra-powerful 140W two-way fast charging using USB Power Delivery 3.1",
      "Smart digital color display indicates output wattage, battery percentage, recharge time and health",
      "Enormous 24,000mAh capacity charges iPhone 15 five times or MacBook Pro 16\" to 50%",
      "GaNPrime multi-device power distribution charges 3 gadgets simultaneously",
      "ActiveShield 2.0 temperature monitoring samples heat 3 million times per day",
      "Recharges to full in only 52 minutes with a 140W wall adapter"
    ],
    specs: {
      Display: "Integrated Smart Interactive TFT Color Display showing live voltage, wattage and battery temperature",
      Processor: "Anker GaNPrime Smart Power Distribution Chip with ActiveShield 2.0",
      Memory: "N/A",
      Storage: "N/A",
      Camera: "N/A",
      Battery: "24,000 mAh (86.4 Wh) Airline-approved Lithium-ion battery pack",
      Connectivity: "2x USB-C ports (140W Max each), 1x USB-A port (18W Max)",
      Dimensions: "155.8 x 54.6 x 49.6 mm | 630 grams | 140W 2ft USB-C cable included"
    },
    reviews: [
      { author: "Victor Cole", rating: 5, date: "October 18, 2026", title: "Charges my MacBook Pro at full 140W speed", text: "The color screen that shows wattage drew compliments from everyone at the co-working space. An absolute powerhouse." }
    ]
  }
];

// Helper functions for easy data access across all pages
const GadgetData = {
  getAll: () => GADGET_PRODUCTS,
  getById: (id) => GADGET_PRODUCTS.find(p => p.id === id),
  getByCategory: (catSlug) => {
    if (!catSlug || catSlug === "all") return GADGET_PRODUCTS;
    return GADGET_PRODUCTS.filter(p => p.categorySlug.toLowerCase() === catSlug.toLowerCase());
  },
  getFeatured: () => GADGET_PRODUCTS.filter(p => p.isFeatured),
  getDeals: () => GADGET_PRODUCTS.filter(p => p.isDeal),
  getNewArrivals: () => GADGET_PRODUCTS.filter(p => p.isNewArrival),
  getBestSellers: () => GADGET_PRODUCTS.filter(p => p.isBestSeller),
  getCategories: () => [
    { name: "Smartphones", slug: "smartphones", icon: "bi-phone", count: 3, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80", desc: "Flagship phones with pro cameras and AI" },
    { name: "Laptops", slug: "laptops", icon: "bi-laptop", count: 3, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", desc: "High-performance ultrabooks & mobile workstations" },
    { name: "Tablets", slug: "tablets", icon: "bi-tablet", count: 2, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80", desc: "Tandem OLED & AMOLED creative powerhouses" },
    { name: "Audio & Headphones", slug: "audio", icon: "bi-headphones", count: 3, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80", desc: "Spatial sound, active noise cancelling, and audiophile gear" },
    { name: "Smartwatches", slug: "smartwatches", icon: "bi-smartwatch", count: 2, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80", desc: "Titanium rugged fitness & health trackers" },
    { name: "Gaming", slug: "gaming", icon: "bi-controller", count: 2, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80", desc: "Next-gen consoles, handhelds, and pro gear" },
    { name: "Cameras", slug: "cameras", icon: "bi-camera", count: 2, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80", desc: "Full-frame hybrid mirrorless and 4K drones" },
    { name: "Home Electronics", slug: "home", icon: "bi-house-gear", count: 2, image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80", desc: "Dolby Atmos smart speakers and ambient tech" },
    { name: "Accessories", slug: "accessories", icon: "bi-plug", count: 2, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80", desc: "GaN chargers, mechanical keyboards, and peripherals" }
  ]
};
