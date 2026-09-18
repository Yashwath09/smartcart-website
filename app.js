// ═══════════════════════════════════════════════════════
// SMARTCART 2.0 AI — Gemini Multimodal Internet Lens & IoT
// ═══════════════════════════════════════════════════════

'use strict';

// ─────────────────────────────────────────────
// BASE IN-MART & OPEN-WORLD PRODUCT DATABASE
// (Enriched with Exact Nutrition, Manufacturing & Health Verdict Data)
// ─────────────────────────────────────────────
const products = {
  // Wheat & Grain Products
  '8901230000055': {
    name: '100% Whole Wheat Flour (Atta, 5kg)',
    aliases: ['wheat', 'wheat flour', 'atta', 'whole wheat', 'gehu', 'chakki atta', 'flour'],
    emoji: '🌾',
    price: 240,
    weight: 5000,
    category: 'grocery',
    specs: { spec1: '100% Whole Grain', spec2: 'Stone Milled', spec3: '11g Fiber', spec4: 'Zero Maida' },
    ingredients: ['100% Whole Grain Wheat (Endosperm, Bran & Germ)', 'Natural Wheat Gluten Proteins (Gliadin & Glutenin)', 'Dietary Insoluble Fiber', 'B-Complex Micronutrients'],
    manufacturing: 'Manufactured via traditional slow-speed stone chakki milling. Unlike refined white flour (maida), the nutrient-rich outer bran layer and antioxidant germ are 100% preserved without chemical bleaching agents or benzoyl peroxide.',
    healthGood: '✅ Excellent source of sustained complex carbohydrates to fuel workouts; high fiber slows glucose absorption and promotes healthy colon microbiome.',
    healthBad: '⚠️ Contains gluten (Gliadin/Glutenin). Avoid if diagnosed with Celiac Disease or severe wheat allergy.',
    ingredientNotes: 'Natural unbleached whole grain wheat providing steady glycogen replenishment with a moderate Glycemic Index (GI ~54).',
    allergens: ['Contains Gluten (Wheat)'],
    suitableGoals: ['high-protein', 'balanced'],
    sugar: 2, protein: 12, salt: 0, calories: 340
  },
  '2345678901234': {
    name: 'Whole Wheat Brown Bread (400g)',
    aliases: ['bread', 'brown bread', 'wheat bread', 'whole wheat bread', 'loaf'],
    emoji: '🍞',
    price: 40,
    weight: 400,
    category: 'grocery',
    specs: { spec1: 'Whole Wheat', spec2: '7g Protein', spec3: 'High Fiber', spec4: 'No Added Color' },
    ingredients: ['100% Whole Wheat Flour (Atta)', 'Purified Water', 'Active Baker\'s Yeast (Saccharomyces cerevisiae)', 'Vital Wheat Gluten', 'Iodized Salt', 'Preservative (INS 282 Calcium Propionate)'],
    manufacturing: 'Produced by natural yeast fermentation of stone-ground whole wheat dough followed by precision baking at 200°C. Contains minimal calcium propionate to prevent fungal mold growth on store shelves.',
    healthGood: '✅ High dietary fiber aids digestion and provides slow-release energy for daily workouts.',
    healthBad: '⚠️ Contains yeast and gluten. Check portion size if you are monitoring strict keto or low-carb limits.',
    ingredientNotes: 'Whole grain dietary fiber helps moderate glucose spikes compared to white bread. Good complex carb source for workout fuel.',
    allergens: ['Gluten (Wheat)', 'Yeast'],
    suitableGoals: ['balanced', 'high-protein'],
    sugar: 3, protein: 7, salt: 4, calories: 110
  },

  // Fresh Fruits & Produce
  '2468013579246': {
    name: 'Fresh Robusta Bananas (1 Dozen)',
    aliases: ['banana', 'bananas', 'yellow fruit', 'fruit', 'robusta banana'],
    emoji: '🍌',
    price: 49,
    weight: 1200,
    category: 'grocery',
    specs: { spec1: 'Potassium Rich', spec2: 'Pre-Workout', spec3: 'Vit B6', spec4: 'Electrolytes' },
    ingredients: ['100% Natural Fresh Bananas', 'Natural Fructose & Glucose', 'Dietary Fiber', 'Potassium & Vitamin B6'],
    manufacturing: 'Harvested fresh from certified organic banana plantations, naturally ripened without carbide, washed, and cold-chain transported to store shelves.',
    healthGood: '✅ Rich natural source of Potassium (358mg) and Vitamin B6 to prevent intra-workout muscle cramping and rapidly restore liver and muscle glycogen.',
    healthBad: '⚠️ Contains 14g natural fruit sugars per banana. Diabetic individuals should monitor portion sizes.',
    ingredientNotes: 'Natural potassium and Vitamin B6 prevent muscle spasms and support ATP cellular energy production during high-intensity training.',
    allergens: ['None'],
    suitableGoals: ['high-protein', 'balanced'],
    sugar: 14, protein: 1, salt: 0, calories: 89
  },

  // Dairy & Fresh Milk
  '6291056004027': {
    name: 'Full Cream Cow Milk (1L)',
    aliases: ['milk', 'milk carton', 'milk bottle', 'cow milk', 'fresh milk'],
    emoji: '🥛',
    price: 60,
    weight: 1030,
    category: 'dairy',
    specs: { spec1: '8g Protein', spec2: 'Calcium', spec3: 'Vit D3', spec4: 'Whole Milk' },
    ingredients: ['100% Pasteurized Homogenized Whole Cow Milk', 'Fortified Vitamin D3'],
    manufacturing: 'Sourced from grass-fed dairy farms, standardized to 3.5% fat, HTST pasteurized at 72°C to eliminate bacteria while keeping proteins and enzymes intact.',
    healthGood: '✅ Complete bioavailable whey & casein protein (8g/cup), rich in bio-calcium and Vitamin D3 for bone density and joint strength.',
    healthBad: '⚠️ Contains lactose and milk fat. Avoid if lactose intolerant or on a strict zero-fat deficit diet.',
    ingredientNotes: 'Natural dairy calcium and bioavailable protein supporting skeletal structure and cellular muscle repair.',
    allergens: ['Dairy (Lactose)'],
    suitableGoals: ['high-protein', 'balanced'],
    sugar: 5, protein: 8, salt: 2, calories: 120
  },
  '6789012345678': {
    name: 'Greek Yogurt (400g Plain)',
    aliases: ['yogurt', 'greek yogurt', 'curd', 'dairy tub', 'plain yogurt'],
    emoji: '🍶',
    price: 129,
    weight: 400,
    category: 'dairy',
    specs: { spec1: '20g Protein', spec2: 'Live Probiotics', spec3: '0% Fat', spec4: 'Skimmed' },
    ingredients: ['Pasteurized Skimmed Milk', 'Live Active Probiotic Cultures (Lactobacillus bulgaricus, Streptococcus thermophilus, Bifidobacterium)'],
    manufacturing: 'Triple-strained through micro-filters to remove liquid whey, concentrating slow-digesting casein protein to 20g per tub with live active probiotic cultures.',
    healthGood: '✅ High casein protein keeps you satiated for 4+ hours; live gut probiotics restore healthy gut bacteria and digestive immunity.',
    healthBad: '⚠️ Contains dairy milk proteins.',
    ingredientNotes: 'Concentrated casein protein and live active cultures supporting gut microbiome health.',
    allergens: ['Dairy'],
    suitableGoals: ['high-protein', 'weight-loss', 'balanced'],
    sugar: 4, protein: 20, salt: 1, calories: 100
  },

  // Snacks & Dark Chocolate
  '9135680247913': {
    name: 'Dark Chocolate (85% Cocoa, 100g)',
    aliases: ['dark chocolate', 'chocolate bar', 'cocoa', 'chocolate'],
    emoji: '🍫',
    price: 149,
    weight: 100,
    category: 'snack',
    specs: { spec1: '85% Cocoa', spec2: 'Flavanols', spec3: 'Low Sugar', spec4: 'Antioxidants' },
    ingredients: ['Cocoa Mass (85%)', 'Cocoa Butter', 'Raw Unrefined Cane Sugar', 'Natural Bourbon Vanilla'],
    manufacturing: 'Crafted from single-origin roasted cocoa beans, conched at low temperatures for 48 hours to preserve bioactive polyphenols and cocoa flavanols.',
    healthGood: '✅ Rich in Cocoa Flavanols and Magnesium that increase nitric oxide production, dilate blood vessels, and boost workout mental focus.',
    healthBad: '⚠️ High calorie density (550 kcal/bar). Enjoy 2-3 squares per day.',
    ingredientNotes: 'Bioactive cocoa polyphenols supporting cardiovascular nitric oxide and mental focus.',
    allergens: ['May contain trace milk/nuts'],
    suitableGoals: ['balanced', 'low-sugar', 'heart-health'],
    sugar: 12, protein: 5, salt: 1, calories: 550
  },
  '1357924680135': {
    name: 'Fresh Broccoli Florets (500g)',
    aliases: ['broccoli', 'green vegetable', 'florets', 'fresh broccoli'],
    emoji: '🥦',
    price: 59,
    weight: 500,
    category: 'grocery',
    specs: { spec1: '55 kcal', spec2: 'Sulforaphane', spec3: 'Vit C & K', spec4: 'High Fiber' },
    ingredients: ['100% Fresh Farm Broccoli Florets'],
    manufacturing: 'Farm-picked fresh, hydro-cooled immediately to preserve Vitamin C and Sulforaphane compounds, and packed under vacuum protection.',
    healthGood: '✅ Contains Sulforaphane & Indole-3-Carbinol which stimulate liver detoxification enzymes and fight exercise-induced systemic inflammation.',
    healthBad: '⚠️ None! Excellent superfood for all diets.',
    ingredientNotes: 'Sulforaphane and Vitamin C supporting cellular antioxidant defense and liver function.',
    allergens: ['None'],
    suitableGoals: ['weight-loss', 'diabetic-care', 'heart-health', 'balanced'],
    sugar: 2, protein: 5, salt: 1, calories: 55
  },

  // Electronics & Gadgets
  '8901230000011': {
    name: 'Wireless Bluetooth Earbuds (TWS)',
    aliases: ['earbuds', 'airpods', 'headphones', 'tws', 'earphones', 'buds', 'headset', 'bluetooth earbuds', 'wireless earbuds', 'boat airdopes'],
    emoji: '🎧',
    price: 1499,
    weight: 45,
    category: 'electronics',
    specs: { spec1: 'BT 5.3', spec2: '30h Playback', spec3: 'ENC Mic', spec4: 'Type-C' },
    ingredients: ['Bluetooth 5.3 Audio Chipset', '10mm Dynamic Bass Drivers', '40mAh Li-Po (Buds) + 300mAh (Case)', 'Dual ENC Noise Cancellation Microphones', 'ABS Polymer Body & Silicone Tips'],
    manufacturing: 'Surface Mount Technology (SMT) automated PCB assembly with ultrasonic welding of ABS plastic acoustic chambers and laser-tuned 10mm dynamic neodymium driver diaphragms.',
    healthGood: '✅ Ergonomic ear canal fit reduces physical ear strain; ENC mic enables low-volume listening without hearing damage.',
    healthBad: '⚠️ Keep volume below 75dB to protect long-term eardrum health.',
    ingredientNotes: 'Equipped with 10mm dynamic bass drivers for crystal clear treble and punchy low-end; ENC dual microphones filter 90% ambient noise during calls; 30-hour total battery life with fast Type-C charging.',
    allergens: ['IPX4 Water Resistant', 'RoHS Certified', 'Nickel-Free Silicone'],
    suitableGoals: ['tech-gadgets', 'balanced'],
    sugar: 0, protein: 0, salt: 0, calories: 0
  },
  '8901230000022': {
    name: 'Smartphone 65W Fast Charger',
    aliases: ['charger', 'adapter', 'fast charger', 'power adapter', 'usb charger', 'type c charger'],
    emoji: '🔌',
    price: 899,
    weight: 110,
    category: 'electronics',
    specs: { spec1: '65W GaN', spec2: 'PD 3.0', spec3: 'Type-C', spec4: 'Over-Temp Prot' },
    ingredients: ['Gallium Nitride (GaN) Semiconductor', 'Power Delivery (PD 3.0) Smart IC', 'Flame-Retardant Polycarbonate Casing', 'Pure Copper Terminals'],
    manufacturing: 'Engineered with cutting-edge Gallium Nitride (GaN) crystal power transistors that operate at 3x higher switching frequencies with 40% reduced thermal output.',
    healthGood: '✅ Low electromagnetic interference (EMI) certified with multi-stage auto-shutoff protection.',
    healthBad: '⚠️ Standard electronic safety precautions apply.',
    ingredientNotes: 'GaN technology enables faster charging efficiency with 40% less heat dissipation; supports multi-voltage dynamic negotiation (5V/9V/12V/20V) for all smartphones and laptops.',
    allergens: ['Over-Voltage & Short-Circuit Protection'],
    suitableGoals: ['tech-gadgets', 'balanced'],
    sugar: 0, protein: 0, salt: 0, calories: 0
  },

  // Fitness & Nutrition
  '7890123456789': {
    name: 'Whey Protein (1kg Chocolate)',
    aliases: ['whey', 'protein powder', 'whey protein', 'protein tub', 'chocolate protein'],
    emoji: '💪',
    price: 1299,
    weight: 1000,
    category: 'fitness',
    specs: { spec1: '80g Protein', spec2: '5.5g BCAA', spec3: 'Zero Bloat', spec4: 'Stevia' },
    ingredients: ['100% Whey Protein Isolate', 'Hydrolyzed Whey Peptides', 'BCAA Matrix (2:1:1 Leucine, Isoleucine, Valine)', 'Natural Dutch Cocoa', 'Digestive Enzymes (Papain & Bromelain)', 'Stevia Leaf Extract'],
    manufacturing: 'Extracted from pure sweet dairy milk using low-temperature Cross-Flow Microfiltration (CFM) to isolate native proteins without denaturing heat. Sweetened with organic non-glycemic Stevia leaf.',
    healthGood: '✅ 80% bioavailable complete protein; Leucine triggers mTOR muscle protein synthesis; papain enzymes eliminate digestive bloating.',
    healthBad: '⚠️ Contains trace dairy whey. Individuals with extreme dairy allergies should opt for Egg White or Plant Protein.',
    ingredientNotes: 'Whey Isolate provides ultra-fast amino acid delivery for post-workout muscle repair. Papain & Bromelain enzymes ensure smooth protein digestion with zero bloating.',
    allergens: ['Dairy / Whey'],
    suitableGoals: ['high-protein', 'balanced', 'weight-loss'],
    sugar: 3, protein: 80, salt: 3, calories: 400
  },
  '0123456789012': {
    name: 'Fresh Chicken Breast (500g)',
    aliases: ['chicken', 'chicken breast', 'raw chicken', 'meat', 'poultry'],
    emoji: '🍗',
    price: 259,
    weight: 500,
    category: 'fitness',
    specs: { spec1: '55g Protein', spec2: '0g Carbs', spec3: 'Farm Fresh', spec4: 'Skinless' },
    ingredients: ['100% Farm-Raised Skinless Boneless Chicken Breast'],
    manufacturing: 'Hygienically dressed fresh farm poultry, cold-chain preserved at 2°C with zero antibiotics, hormones, or chemical preservatives.',
    healthGood: '✅ Highest protein-to-calorie ratio; zero carbohydrates; rich in Niacin, Phosphorus, and Vitamin B6 for athletic metabolism.',
    healthBad: '⚠️ Must be fully cooked to 75°C internal temperature before eating.',
    ingredientNotes: 'Zero carbohydrates, ultra-pure lean complete protein containing all 9 essential amino acids necessary for muscle hypertrophy and tissue rebuilding.',
    allergens: ['None'],
    suitableGoals: ['high-protein', 'weight-loss', 'diabetic-care'],
    sugar: 0, protein: 55, salt: 2, calories: 280
  },
  '5791246803579': {
    name: 'L-Carnitine Liquid Caps (60s)',
    aliases: ['carnitine', 'l-carnitine', 'fat burner', 'capsules', 'supplement bottle'],
    emoji: '🔥',
    price: 549,
    weight: 120,
    category: 'fitness',
    specs: { spec1: '1000mg Carnitine', spec2: 'Vit B6', spec3: 'Zero Cal', spec4: 'Veg Cap' },
    ingredients: ['Pure L-Carnitine L-Tartrate (1000mg)', 'Vitamin B6 (Pyridoxine HCl)', 'Purified Water', 'Vegetarian Capsule Shell (Cellulose)'],
    manufacturing: 'Pharmaceutical-grade bio-fermentation synthesis yielding pure 100% L-isomer carnitine tartrate encapsulated in plant-derived HPMC cellulose capsules.',
    healthGood: '✅ Shuttles long-chain fatty acids into mitochondria to be oxidized for workout endurance and fat burn.',
    healthBad: '⚠️ Best taken 30 minutes before cardio; not needed on non-exercise rest days.',
    ingredientNotes: 'L-Carnitine shuttles long-chain fatty acids straight into cell mitochondria where they are converted into ATP energy, accelerating fat oxidation during workouts.',
    allergens: ['None'],
    suitableGoals: ['weight-loss', 'high-protein'],
    sugar: 0, protein: 0, salt: 0, calories: 5
  },
  '5678901234567': {
    name: 'Rolled Oats (500g Whole Grain)',
    aliases: ['oats', 'rolled oats', 'oatmeal', 'cereal box'],
    emoji: '🌾',
    price: 89,
    weight: 500,
    category: 'grocery',
    specs: { spec1: 'Beta-Glucan', spec2: '13g Protein', spec3: 'Low GI', spec4: '100% Whole' },
    ingredients: ['100% Whole Grain Rolled Oats', 'Beta-Glucan Soluble Dietary Fiber'],
    manufacturing: 'Whole oat groats are kiln-steamed and passed between heavy industrial rollers to flatten the grain while keeping the intact dietary fiber and germ layer alive.',
    healthGood: '✅ Beta-Glucan soluble fiber traps cholesterol, stabilizes blood sugar spikes, and feeds beneficial gut microbiota.',
    healthBad: '⚠️ High in dietary fiber; drink adequate water to avoid temporary digestive fullness.',
    ingredientNotes: 'Beta-glucan forms a gel in the digestive tract that slows glucose absorption, stabilizes insulin levels, and suppresses hunger cravings for 4+ hours.',
    allergens: ['Gluten-Friendly'],
    suitableGoals: ['weight-loss', 'diabetic-care', 'heart-health', 'balanced'],
    sugar: 1, protein: 13, salt: 1, calories: 370
  },
  '3456789012345': {
    name: 'Crispy Potato Chips (Salted, 100g)',
    aliases: ['chips', 'potato chips', 'crisps', 'snack bag', 'lays'],
    emoji: '🥔',
    price: 20,
    weight: 100,
    category: 'snack',
    specs: { spec1: 'Crispy', spec2: 'Salted', spec3: '100g', spec4: 'Snack' },
    ingredients: ['Fresh Potatoes', 'Refined Palm Olein Oil', 'Iodized Salt', 'Antioxidant (TBHQ - INS 319)'],
    manufacturing: 'Thinly sliced potatoes deep-fried in high-temperature refined palm olein oil and sprayed with iodized sodium chloride and synthetic antioxidant preservative TBHQ.',
    healthGood: '✅ Fast source of instant sodium and simple carbohydrates for temporary energy.',
    healthBad: '❌ High in saturated fats from deep frying, elevated sodium (10g), and synthetic preservative TBHQ. Frequent intake causes inflammation and arterial plaque buildup.',
    ingredientNotes: 'Deep fried with high sodium (10g) and saturated fatty acids.',
    allergens: ['None'],
    suitableGoals: ['balanced'],
    sugar: 2, protein: 3, salt: 10, calories: 180
  }
};

// ─────────────────────────────────────────────
// APP & HARDWARE STATE
// ─────────────────────────────────────────────
let cart = [];
let detectedProduct = null;
let scannerControls = null;
let apiKey = localStorage.getItem('sc2_apikey') || '';
let dietGoal = localStorage.getItem('sc2_goal') || 'high-protein';
let espIp = localStorage.getItem('sc2_esp_ip') || '192.168.4.1';
let hwSimEnabled = true;
let currentCamMode = 'webcam';
let chatHistory = [];
let msgIdCounter = 0;
let actualCartWeight = 0; // grams read by load cell
let isChatOpen = false;

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('dietGoal').value = dietGoal;
  document.getElementById('apiKeyInput').value = apiKey;
  document.getElementById('espIpInput').value = espIp;
  if (apiKey) document.getElementById('quickApiKeyInput').value = apiKey;

  updateApiKeyUI();
  updateCart();
  renderMartInventory('all');
  updateTelemetryUI();
  updateCatalogCount();

  document.getElementById('chatInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') askAI();
  });
  document.getElementById('manualBarcode').addEventListener('keydown', e => {
    if (e.key === 'Enter') manualSearchOrScan();
  });
});

function updateCatalogCount() {
  const countEl = document.getElementById('mart-total-count');
  if (countEl) countEl.textContent = Object.keys(products).length;
}

function updateApiKeyUI() {
  const banner = document.getElementById('apiPromptBanner');
  const badge = document.getElementById('apiKeyBadge');
  if (apiKey) {
    if (banner) banner.style.display = 'none';
    if (badge) badge.textContent = 'Active (Live AI)';
  } else {
    if (banner) banner.style.display = 'flex';
    if (badge) badge.textContent = 'Enter Key';
  }
}

// ─────────────────────────────────────────────
// FLOATING POP-UP CHAT TOGGLE
// ─────────────────────────────────────────────
function toggleChatPopup() {
  isChatOpen = !isChatOpen;
  const popup = document.getElementById('chat-popup');
  const fab = document.getElementById('chat-fab');
  const unread = document.getElementById('fab-unread');

  if (isChatOpen) {
    popup.classList.remove('hidden');
    unread.style.display = 'none';
    fab.style.display = 'none';
    document.getElementById('chatInput').focus();
  } else {
    popup.classList.add('hidden');
    fab.style.display = 'flex';
  }
}

function openChatPopup() {
  isChatOpen = true;
  document.getElementById('chat-popup').classList.remove('hidden');
  document.getElementById('chat-fab').style.display = 'none';
  document.getElementById('fab-unread').style.display = 'none';
  document.getElementById('chatInput').focus();
}

function closeChatPopup() {
  isChatOpen = false;
  document.getElementById('chat-popup').classList.add('hidden');
  document.getElementById('chat-fab').style.display = 'flex';
}

// ─────────────────────────────────────────────
// CAMERA & STREAM SOURCE SWITCHING
// ─────────────────────────────────────────────
function setCameraSource(mode) {
  currentCamMode = mode;
  document.getElementById('tabWebcam').classList.toggle('active', mode === 'webcam');
  document.getElementById('tabEsp').classList.toggle('active', mode === 'esp32');

  const video = document.getElementById('camera');
  const imgStream = document.getElementById('espCamStream');
  const preview = document.getElementById('snapshotPreview');
  const idle = document.getElementById('cameraIdle');

  preview.classList.add('hidden');

  if (mode === 'esp32') {
    if (video.srcObject) {
      video.srcObject.getTracks().forEach(t => t.stop());
      video.srcObject = null;
    }
    video.style.display = 'none';
    imgStream.src = `http://${espIp}:81/stream`;
    imgStream.classList.remove('hidden');
    idle.style.display = 'none';
    setStatus(`📡 Streaming live from ESP32-CAM (http://${espIp}:81/stream)...`, 'ok');
  } else {
    imgStream.classList.add('hidden');
    imgStream.src = '';
    idle.style.display = 'flex';
    setStatus('📷 Webcam / Phone mode active. Click "Start Camera" to turn on video.', '');
  }
}

async function startCamera() {
  if (currentCamMode === 'esp32') {
    setCameraSource('esp32');
    return;
  }
  if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia) {
    setStatus('❌ Camera needs a secure page. Open this app through localhost (not file://) or use Upload Image.', 'err');
    return;
  }
  try {
    setStatus('📷 Activating local video camera...', '');
    const cameraRequest = navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: false
    });
    const stream = await Promise.race([
      cameraRequest,
      new Promise((_, reject) => setTimeout(() => reject(new Error('Camera permission request timed out')), 10000))
    ]);
    const cam = document.getElementById('camera');
    cam.srcObject = stream;
    cam.style.display = 'block';
    document.getElementById('snapshotPreview').classList.add('hidden');
    document.getElementById('cameraIdle').style.display = 'none';
    await cam.play();
    setStatus('📷 Camera active. Point at Wheat, Earbuds, or Food and click "Search with Gemini Lens".', 'ok');
  } catch (err) {
    const reason = err.name === 'NotAllowedError'
      ? 'Allow camera permission in the browser and try again.'
      : err.name === 'NotFoundError'
        ? 'No camera was found. Use Upload Image instead.'
        : err.message === 'Camera permission request timed out'
          ? 'Camera permission did not respond. Open through localhost and allow access.'
        : 'Check camera permissions and that no other app is using the camera.';
    setStatus(`❌ ${reason}`, 'err');
    console.error(err);
  }
}

function stopCamera() {
  if (scannerControls) {
    try { scannerControls.stop(); } catch (e) { }
    scannerControls = null;
  }
  const cam = document.getElementById('camera');
  if (cam.srcObject) {
    cam.srcObject.getTracks().forEach(t => t.stop());
    cam.srcObject = null;
  }
  cam.style.display = 'none';
  document.getElementById('espCamStream').classList.add('hidden');
  document.getElementById('snapshotPreview').classList.add('hidden');
  document.getElementById('cameraIdle').style.display = 'flex';
  setStatus('⛔ Camera paused.', '');
}

function handleImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async function (evt) {
    const dataUrl = evt.target.result;
    const base64Data = dataUrl.split(',')[1];

    const preview = document.getElementById('snapshotPreview');
    preview.src = dataUrl;
    preview.classList.remove('hidden');
    document.getElementById('camera').style.display = 'none';
    document.getElementById('cameraIdle').style.display = 'none';

    processVisionFrame(base64Data);
  };
  reader.readAsDataURL(file);
}

// ─────────────────────────────────────────────
// UNIVERSAL MULTIMODAL GEMINI VISION RECOGNITION
// ─────────────────────────────────────────────
async function triggerAIVisionDetection() {
  const cam = document.getElementById('camera');
  const isVideo = (currentCamMode === 'webcam' && cam.srcObject);
  const isEsp = (currentCamMode === 'esp32');

  if (!isVideo && !isEsp) {
    if (!apiKey) {
      simulateVisionObject('100% Whole Wheat Flour (Atta)');
    } else {
      await startCamera();
      setTimeout(() => triggerAIVisionDetection(), 800);
    }
    return;
  }

  const canvas = document.getElementById('captureCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 640;
  canvas.height = 480;

  if (isVideo) {
    ctx.drawImage(cam, 0, 0, canvas.width, canvas.height);
  } else if (isEsp) {
    try {
      const response = await fetch(`http://${espIp}/capture`, { cache: 'no-store' });
      if (!response.ok) throw new Error(`ESP32 capture HTTP ${response.status}`);
      const blob = await response.blob();
      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('Could not read ESP32 camera frame'));
        reader.readAsDataURL(blob);
      });
      const base64Jpeg = dataUrl.split(',')[1];
      const preview = document.getElementById('snapshotPreview');
      preview.src = dataUrl;
      preview.classList.remove('hidden');
      processVisionFrame(base64Jpeg);
    } catch (err) {
      console.error('ESP32 capture error:', err);
      setStatus(`❌ Could not capture from ESP32 at ${espIp}. Check Wi-Fi and IP address.`, 'err');
    }
    return;
  }

  const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
  const base64Jpeg = dataUrl.split(',')[1];

  const preview = document.getElementById('snapshotPreview');
  preview.src = dataUrl;
  preview.classList.remove('hidden');

  processVisionFrame(base64Jpeg);
}

async function processVisionFrame(base64Jpeg) {
  setStatus('🌐 Analyzing ingredients & manufacturing via Gemini 2.0...', 'ok');
  showDetectionTag('🔍 Inspecting Ingredients & Health Impact...', true);

  if (!apiKey) {
    setTimeout(() => {
      const item = matchOrGenerateProduct('100% Whole Wheat Flour (Atta)');
      showDetectionTag(`✅ Identified: ${item.name}`, false);
      displayProduct(item);
      setStatus(`✅ Recognized "${item.name}" (Connect Gemini API Key for live custom internet search).`, 'ok');
    }, 1000);
    return;
  }

  try {
    const aiResult = await callGeminiUniversalVision(base64Jpeg);
    showDetectionTag(`✅ Identified: ${aiResult.name}`, false);
    const productItem = registerDynamicProduct(aiResult);
    displayProduct(productItem);
    setStatus(`✅ Identified "${productItem.name}" (₹${productItem.price}) with complete ingredient analysis!`, 'ok');
  } catch (err) {
    console.error('Vision API error:', err);
    showDetectionTag('⚠️ Fallback Lens Active', false);
    const fallback = matchOrGenerateProduct('100% Whole Wheat Flour (Atta)');
    displayProduct(fallback);
    setStatus(`⚠️ Gemini call error (${err.message}). Showing detected wheat card.`, 'err');
  }
}

async function callGeminiUniversalVision(base64Data) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const promptText = `You are a universal SmartCart Google Lens & Nutrition/Ingredient Scientist.
Analyze the image captured by the camera. Identify the EXACT object/product shown (for example: Whole Wheat Atta, Wheat Bread, Banana, Milk, Earbuds, Whey Protein, Chips, Fruit, Gadget, etc.).

Return a VALID JSON object ONLY (NO markdown code fences, NO backticks, NO other words) in this exact JSON schema:
{
  "name": "Exact specific product name (e.g. 'Fresh Robusta Bananas (1 Dozen)', '100% Whole Wheat Flour (Atta)', 'TWS Wireless Bluetooth Earbuds')",
  "emoji": "Single appropriate emoji (e.g. 🍌, 🌾, 🍞, 🥛, 🎧, 💪)",
  "category": "grocery" | "fitness" | "electronics" | "dairy" | "snack" | "general",
  "price": realistic estimated Indian Rupee integer price number,
  "weight": realistic estimated weight in grams number,
  "specs": {
    "spec1": "Short key spec 1 (e.g. 'Potassium Rich' or 'BT 5.3')",
    "spec2": "Short key spec 2 (e.g. '14g Sugar' or '30h Batt')",
    "spec3": "Short key spec 3 (e.g. 'Pre-Workout' or 'ENC Mic')",
    "spec4": "Short key spec 4 (e.g. 'Vit B6' or 'Type-C')"
  },
  "ingredients": ["Array of 4-6 key specific ingredients or materials used"],
  "manufacturing": "2-3 sentences explaining exactly HOW this product is made/manufactured and processed.",
  "healthGood": "1-2 sentences on why this is GOOD for health / body fitness.",
  "healthBad": "1-2 sentences on what to watch out for or why it may be BAD for certain health conditions (e.g. gluten, diabetes, sodium).",
  "ingredientNotes": "2 sentences explaining the nutritional/technical mechanism.",
  "allergens": ["Compliance, materials or allergen info (e.g. 'Contains Gluten (Wheat)', 'IPX4 Water Resistant')"],
  "sugar": realistic sugar grams number (e.g. 14 for banana, 2 for wheat, 0 for earbuds),
  "protein": realistic protein grams number (e.g. 1 for banana, 12 for wheat, 80 for whey),
  "salt": realistic sodium/salt grams number,
  "calories": realistic calories integer number (e.g. 89 for banana, 340 for wheat)
}`;

  const body = {
    contents: [
      {
        parts: [
          { text: promptText },
          {
            inline_data: {
              mime_type: "image/jpeg",
              data: base64Data
            }
          }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.2,
      response_mime_type: "application/json"
    }
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`HTTP ${res.status}: ${errText}`);
  }
  const data = await res.json();
  const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '{}';
  const cleanJson = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
  return JSON.parse(cleanJson);
}

function registerDynamicProduct(pData) {
  const dynamicBarcode = '890' + Math.floor(1000000000 + Math.random() * 9000000000);
  const newItem = {
    name: pData.name || 'Identified Smart Product',
    aliases: [pData.name.toLowerCase()],
    emoji: pData.emoji || '📦',
    price: Number(pData.price) || 299,
    weight: Number(pData.weight) || 500,
    category: pData.category || 'grocery',
    specs: pData.specs || { spec1: 'Verified', spec2: 'AI Lens', spec3: 'Smart Item', spec4: 'In-Stock' },
    ingredients: Array.isArray(pData.ingredients) ? pData.ingredients : ['Natural Ingredients', 'Standard Components'],
    manufacturing: pData.manufacturing || 'Produced under standard certified processing conditions.',
    healthGood: pData.healthGood || 'Provides essential functional nutrition for daily metabolic activity.',
    healthBad: pData.healthBad || 'Consume in moderation based on personal health profile.',
    ingredientNotes: pData.ingredientNotes || 'Recognized via Universal Google Lens AI vision.',
    allergens: Array.isArray(pData.allergens) ? pData.allergens : ['Standard Certified'],
    suitableGoals: ['balanced', 'high-protein'],
    sugar: pData.sugar !== undefined ? Number(pData.sugar) : 0,
    protein: pData.protein !== undefined ? Number(pData.protein) : 0,
    salt: pData.salt !== undefined ? Number(pData.salt) : 0,
    calories: pData.calories !== undefined ? Number(pData.calories) : 0,
    barcode: dynamicBarcode
  };

  products[dynamicBarcode] = newItem;
  updateCatalogCount();
  return newItem;
}

function simulateVisionObject(productName) {
  showDetectionTag(`✨ Lens Inspecting: ${productName}...`, true);
  setStatus(`🤖 Gemini Lens analyzing ingredients & manufacturing of "${productName}"...`, 'ok');

  setTimeout(() => {
    const item = matchOrGenerateProduct(productName);
    showDetectionTag(`✅ Identified: ${item.name}`, false);
    displayProduct(item);
    setStatus(`✅ Identified "${item.name}" (₹${item.price}) with full ingredient science!`, 'ok');
  }, 750);
}

function matchOrGenerateProduct(query) {
  const q = query.toLowerCase().trim();

  // 1. Exact or Alias Match in catalog
  for (const [bc, p] of Object.entries(products)) {
    if (p.name.toLowerCase().includes(q) || q.includes(p.name.toLowerCase())) {
      return { ...p, barcode: bc };
    }
    if (p.aliases && p.aliases.some(a => q.includes(a) || a.includes(q))) {
      return { ...p, barcode: bc };
    }
  }

  // 2. Smart Category Fallbacks with REAL Nutrition
  const isBanana = q.includes('banana');
  const isMilk = q.includes('milk');
  const isWheat = q.includes('wheat') || q.includes('atta') || q.includes('bread') || q.includes('flour');
  const isElectronics = q.includes('earbud') || q.includes('phone') || q.includes('headphone') || q.includes('charger');

  if (isBanana) {
    return registerDynamicProduct({
      name: 'Fresh Robusta Bananas (1 Dozen)',
      emoji: '🍌',
      category: 'grocery',
      price: 49,
      weight: 1200,
      specs: { spec1: 'Potassium Rich', spec2: '14g Sugar', spec3: 'Pre-Workout', spec4: 'Vit B6' },
      ingredients: ['100% Natural Fresh Bananas', 'Natural Fructose & Glucose', 'Dietary Fiber', 'Potassium & Vitamin B6'],
      manufacturing: 'Harvested fresh from certified organic plantations, naturally ripened, washed, and cold-chain distributed.',
      healthGood: '✅ Excellent natural source of Potassium (358mg) and Vitamin B6 to prevent muscle cramps and boost workout stamina.',
      healthBad: '⚠️ Contains 14g natural fruit sugar per banana. Diabetic individuals should monitor portion sizes.',
      ingredientNotes: 'Natural potassium and Vitamin B6 prevent muscle spasms and support ATP cellular energy production.',
      allergens: ['None'],
      sugar: 14, protein: 1, salt: 0, calories: 89
    });
  }

  if (isMilk) {
    return registerDynamicProduct({
      name: 'Full Cream Cow Milk (1L)',
      emoji: '🥛',
      category: 'dairy',
      price: 60,
      weight: 1030,
      specs: { spec1: '8g Protein', spec2: 'Calcium', spec3: 'Vit D3', spec4: 'Whole Milk' },
      ingredients: ['100% Pasteurized Homogenized Whole Cow Milk', 'Fortified Vitamin D3'],
      manufacturing: 'Sourced from grass-fed dairy farms, standardized to 3.5% fat, HTST pasteurized at 72°C.',
      healthGood: '✅ Complete bioavailable whey & casein protein (8g/cup), rich in bio-calcium and Vitamin D3 for bone density.',
      healthBad: '⚠️ Contains lactose and milk fat. Avoid if lactose intolerant.',
      ingredientNotes: 'Natural dairy calcium and bioavailable protein supporting bone density and muscle tissue repair.',
      allergens: ['Dairy (Lactose)'],
      sugar: 5, protein: 8, salt: 2, calories: 120
    });
  }

  return registerDynamicProduct({
    name: query.charAt(0).toUpperCase() + query.slice(1),
    emoji: isWheat ? '🌾' : (isElectronics ? '🎧' : '📦'),
    category: isWheat ? 'grocery' : (isElectronics ? 'electronics' : 'general'),
    price: isWheat ? 240 : (isElectronics ? 1499 : 199),
    weight: isWheat ? 5000 : (isElectronics ? 45 : 300),
    specs: { spec1: isWheat ? '100% Whole Grain' : 'Verified', spec2: isWheat ? 'Chakki Milled' : 'Grade A', spec3: isWheat ? 'High Fiber' : 'Quality', spec4: isWheat ? 'Zero Maida' : 'Ready' },
    ingredients: isWheat ? ['100% Whole Wheat (Bran, Endosperm, Germ)', 'Insoluble Fiber', 'Wheat Gluten Proteins'] : ['Quality Certified Ingredients'],
    manufacturing: isWheat ? 'Ground through slow stone mills preserving native bran and germ layers.' : 'Manufactured under standard quality protocols.',
    healthGood: isWheat ? 'High complex carbohydrates for sustained energy; prebiotic fiber for digestion.' : 'Provides daily energy.',
    healthBad: isWheat ? 'Contains gluten proteins; avoid if having Celiac disease.' : 'Consume mindfully.',
    ingredientNotes: `Real-time specifications for ${query}. Recognized and cataloged into SmartCart 2.0.`,
    allergens: [isWheat ? 'Contains Gluten (Wheat)' : 'Standard Quality'],
    sugar: isWheat ? 2 : 0,
    protein: isWheat ? 12 : 0,
    salt: 0,
    calories: isWheat ? 340 : 100
  });
}

function showDetectionTag(text, isScanning) {
  const tag = document.getElementById('detectionTag');
  const frame = document.getElementById('scanFrame');
  tag.textContent = text;
  tag.classList.remove('hidden');

  if (isScanning) {
    frame.style.borderColor = 'var(--amber)';
  } else {
    frame.style.borderColor = 'var(--cyan)';
    setTimeout(() => {
      tag.classList.add('hidden');
    }, 3500);
  }
}

// ─────────────────────────────────────────────
// BARCODE & MANUAL SEARCH
// ─────────────────────────────────────────────
async function startBarcodeScan() {
  const ZXing = window.ZXingBrowser || window.ZXing;
  if (!ZXing) {
    setStatus('⚠️ ZXing barcode library loading... Type barcode in input.', 'err');
    return;
  }
  const cam = document.getElementById('camera');
  if (!cam.srcObject) {
    await startCamera();
  }

  setStatus('🔍 Aligning barcode inside scan frame...', '');
  try {
    const reader = new ZXingBrowser.BrowserMultiFormatReader();
    scannerControls = await reader.decodeFromVideoDevice(
      undefined,
      cam,
      (result, err) => {
        if (result) {
          const barcode = result.getText();
          setStatus('✅ Barcode decoded: ' + barcode, 'ok');
          const matched = matchOrGenerateProduct(barcode);
          displayProduct(matched);
          if (scannerControls) { scannerControls.stop(); scannerControls = null; }
        }
      }
    );
  } catch (err) {
    setStatus('❌ Optical scanner error. Enter product name manually.', 'err');
  }
}

function manualSearchOrScan() {
  const input = document.getElementById('manualBarcode').value.trim();
  if (!input) return;
  const item = matchOrGenerateProduct(input);
  displayProduct(item);
  document.getElementById('manualBarcode').value = '';
}

function quickScanBarcode(barcode) {
  const item = matchOrGenerateProduct(barcode);
  displayProduct(item);
}

function setStatus(msg, type) {
  const el = document.getElementById('cameraStatus');
  el.textContent = msg;
  el.className = 'status-bar ' + (type || '');
}

// ─────────────────────────────────────────────
// PRODUCT DETAILS & INGREDIENT/MANUFACTURING SCIENCE
// ─────────────────────────────────────────────
function displayProduct(p) {
  detectedProduct = p;

  const catTag = document.getElementById('productCategoryTag');
  catTag.textContent = (p.category || 'Product').toUpperCase();
  catTag.classList.remove('hidden');

  const isElectronics = (p.category === 'electronics');
  const specs = p.specs || { spec1: 'Spec 1', spec2: 'Spec 2', spec3: 'Spec 3', spec4: 'Spec 4' };

  let specGridHtml = '';
  if (isElectronics) {
    specGridHtml = `
      <div class="info-chip good"><span class="chip-label">📶 Connectivity</span><span class="chip-value">${specs.spec1 || 'Wireless'}</span></div>
      <div class="info-chip good"><span class="chip-label">🔋 Battery / Power</span><span class="chip-value">${specs.spec2 || 'Fast Charge'}</span></div>
      <div class="info-chip"><span class="chip-label">🎙️ Audio / IC</span><span class="chip-value">${specs.spec3 || 'Dynamic'}</span></div>
      <div class="info-chip"><span class="chip-label">⚡ Charging Port</span><span class="chip-value">${specs.spec4 || 'Type-C'}</span></div>
    `;
  } else {
    const sugarClass = p.sugar > 10 ? 'warn' : p.sugar > 5 ? 'warn' : 'good';
    const saltClass = p.salt > 6 ? 'bad' : p.salt > 3 ? 'warn' : 'good';
    const proteinClass = p.protein > 15 ? 'good' : p.protein > 7 ? 'warn' : 'good';
    specGridHtml = `
      <div class="info-chip ${proteinClass}"><span class="chip-label">💪 Protein</span><span class="chip-value">${p.protein}g</span></div>
      <div class="info-chip ${sugarClass}"><span class="chip-label">🍬 Sugar</span><span class="chip-value">${p.sugar}g</span></div>
      <div class="info-chip ${saltClass}"><span class="chip-label">🧂 Sodium</span><span class="chip-value">${p.salt}g</span></div>
      <div class="info-chip"><span class="chip-label">🔥 Energy</span><span class="chip-value">${p.calories} kcal</span></div>
    `;
  }

  const ingPillsHtml = (p.ingredients || []).map(ing => `<span class="ing-pill">${escapeHtml(ing)}</span>`).join('');
  const allergenHtml = (p.allergens && p.allergens.length && p.allergens[0] !== 'None')
    ? `<span class="allergen-tag">🏷️ ${p.allergens.join(' • ')}</span>`
    : `<span style="font-size:0.72rem;color:var(--cyan)">✅ Verified Quality</span>`;

  document.getElementById('productDetails').innerHTML = `
    <div class="product-hero-row">
      <span class="product-hero-emoji">${p.emoji}</span>
      <div>
        <div class="product-hero-name">${p.name}</div>
        <div class="product-hero-barcode">WEIGHT: ${p.weight}g • CODE: ${p.barcode || 'N/A'}</div>
      </div>
      <div class="product-hero-price">₹${p.price}</div>
    </div>

    <div class="product-info-grid">
      ${specGridHtml}
    </div>

    <div class="ingredients-block">
      <div class="ingredients-heading">
        <span>🌱 Ingredients & Components Used</span>
        ${allergenHtml}
      </div>
      <div class="ingredient-pills">
        ${ingPillsHtml}
      </div>

      <!-- MANUFACTURING & PROCESSING METHOD -->
      <div class="manufacturing-box">
        <strong>🏭 How It Is Made & Processed:</strong><br>
        ${p.manufacturing || 'Processed under certified food and manufacturing safety standards.'}
      </div>

      <!-- HEALTH IMPACT VERDICT (GOOD VS BAD) -->
      <div class="health-impact-grid">
        <div class="health-box good">
          <strong>🟢 Good For Health:</strong>
          ${p.healthGood || 'Provides essential functional nutrition for daily metabolic activity.'}
        </div>
        <div class="health-box bad">
          <strong>🔴 Watch Out:</strong>
          ${p.healthBad || 'Consume in moderation based on your dietary restrictions.'}
        </div>
      </div>

      <div class="ingredient-explanation">
        <strong>🧪 Scientific Mechanism:</strong> ${p.ingredientNotes}
      </div>
    </div>

    <div class="ai-rating">
      <strong>🤖 Gemini Health Suitability Evaluation (${dietGoal.replace('-', ' ').toUpperCase()})</strong>
      ${getHealthEvaluation(p)}
    </div>
  `;

  document.getElementById('product-action-row').classList.remove('hidden');
  addBotMsg(`🔍 Identified <strong>${p.name}</strong> (₹${p.price})!<br><em>Weight: ${p.weight}g • Sugar: ${p.sugar}g • Protein: ${p.protein}g • Calories: ${p.calories} kcal</em><br>🏭 <em>${p.manufacturing || ''}</em>`);
}

function getHealthEvaluation(p) {
  if (dietGoal === 'gluten-sensitive' && p.allergens && p.allergens.some(a => a.toLowerCase().includes('gluten'))) {
    return `❌ <strong>NOT RECOMMENDED:</strong> Contains gluten proteins. Unsuitable for Celiac or gluten-sensitive diets.`;
  }
  if (dietGoal === 'diabetic-care' && p.sugar > 8) {
    return `⚠️ <strong>HIGH GLYCEMIC RISK:</strong> Contains ${p.sugar}g sugar. May trigger insulin spikes.`;
  }
  if (dietGoal === 'high-protein' && p.protein >= 15) {
    return `✅ <strong>HIGHLY RECOMMENDED:</strong> Rich in complete proteins (${p.protein}g) to stimulate muscle hypertrophy.`;
  }
  return `✅ High-quality product matching your active lifestyle profile!`;
}

function askAboutCurrentIngredients() {
  if (!detectedProduct) return;
  openChatPopup();
  const prompt = `Explain the ingredients in ${detectedProduct.name}, how it is manufactured, and whether it is good or bad for ${dietGoal.replace('-', ' ')}.`;
  document.getElementById('chatInput').value = prompt;
  askAI();
}

// ─────────────────────────────────────────────
// CART & LOAD CELL SYNC
// ─────────────────────────────────────────────
function addToCart() {
  if (!detectedProduct) return;
  addProductToCartDirectly(detectedProduct.barcode || detectedProduct.name);
}

function addProductToCartDirectly(identifier) {
  let product = products[identifier];
  if (!product) {
    product = matchOrGenerateProduct(identifier);
  }

  const existing = cart.find(c => c.name === product.name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  if (hwSimEnabled) {
    actualCartWeight += product.weight;
  }

  updateCart();
  updateTelemetryUI();
  addBotMsg(`🛒 Added <strong>${product.name}</strong> to Smart Cart! (+${product.weight}g verified by ESP32 load cell).`);
}
window.addProductToCartDirectly = addProductToCartDirectly;

function removeItem(barcode) {
  const item = cart.find(c => c.barcode === barcode || c.name === barcode);
  if (item && hwSimEnabled) {
    actualCartWeight = Math.max(0, actualCartWeight - (item.weight * item.qty));
  }
  cart = cart.filter(c => (c.barcode !== barcode && c.name !== barcode));
  updateCart();
  updateTelemetryUI();
}
window.removeItem = removeItem;

function updateCart() {
  const el = document.getElementById('cartItems');
  const payBtn = document.getElementById('payBtn');
  const summary = document.getElementById('billSummary');
  const badge = document.getElementById('cart-count-badge');
  const payLabel = document.getElementById('payTotalLabel');

  const totalCount = cart.reduce((s, c) => s + c.qty, 0);
  badge.textContent = totalCount;
  badge.classList.toggle('hidden', totalCount === 0);

  if (!cart.length) {
    el.innerHTML = '<div class="empty-state"><span>🛒</span><p>Smart Cart is empty</p><small>Items detected via AI Lens or Barcode are added here with live load cell weight sync</small></div>';
    payBtn.classList.add('hidden');
    summary.style.display = 'none';
    return;
  }

  el.innerHTML = '';
  let subtotal = 0;
  let totalWeight = 0;

  cart.forEach(item => {
    subtotal += item.price * item.qty;
    totalWeight += (item.weight * item.qty);

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="cart-item-info">
        <span class="cart-emoji">${item.emoji}</span>
        <div>
          <div class="cart-name">${item.name}</div>
          <div style="font-size:0.72rem;color:var(--text3)">₹${item.price} • ${item.weight}g × ${item.qty}</div>
        </div>
      </div>
      <span class="cart-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
      <button class="btn-remove" onclick="removeItem('${item.barcode || item.name}')" title="Remove item">🗑</button>
    `;
    el.appendChild(div);
  });

  const gst = subtotal * 0.18;
  const grand = subtotal + gst;
  document.getElementById('subtotalAmt').textContent = '₹' + subtotal.toFixed(2);
  document.getElementById('gstAmt').textContent = '₹' + gst.toFixed(2);
  document.getElementById('billWeightTotal').textContent = totalWeight + ' g';
  document.getElementById('grandTotal').textContent = '₹' + grand.toFixed(2);
  if (payLabel) payLabel.textContent = '₹' + grand.toFixed(2);

  summary.style.display = 'block';
  payBtn.classList.remove('hidden');
}

// ─────────────────────────────────────────────
// ECE HARDWARE TELEMETRY & THEFT CONTROLS
// ─────────────────────────────────────────────
function updateTelemetryUI() {
  const expectedWeight = cart.reduce((s, c) => s + (c.weight * c.qty), 0);
  const diff = Math.abs(actualCartWeight - expectedWeight);

  document.getElementById('telemetryWeight').textContent = `${actualCartWeight} g`;
  document.getElementById('telemetryWeightDiff').textContent = `Expected: ${expectedWeight} g (Diff: ${diff} g)`;

  const theftStatus = document.getElementById('telemetryTheftStatus');
  const theftSub = document.getElementById('theftSub');

  if (diff > 50) {
    theftStatus.textContent = '⚠️ WEIGHT MISMATCH';
    theftStatus.className = 'telemetry-val alert';
    theftSub.textContent = `Unregistered +${diff}g placed in cart!`;
  } else {
    theftStatus.textContent = 'SECURE';
    theftStatus.className = 'telemetry-val ok';
    theftSub.textContent = 'Scale matches digital bill';
  }
}

function simulateWeightTheft() {
  actualCartWeight += 350;
  updateTelemetryUI();
  addBotMsg('🚨 <strong>ANTI-THEFT ALERT:</strong> ESP32 HX711 Load Cell detected an un-scanned +350g item in physical basket! Buzzer triggered.');
}

function tareLoadCell() {
  const expectedWeight = cart.reduce((s, c) => s + (c.weight * c.qty), 0);
  actualCartWeight = expectedWeight;
  updateTelemetryUI();
  setStatus('⚖️ Load cell zero-calibrated to current cart contents.', 'ok');
}

function testHardwareBuzzer() {
  setStatus('🔔 ESP32 Piezo Buzzer triggered (BEEP BEEP)!', 'ok');
  if (espIp && espIp !== '192.168.4.1') {
    fetch(`http://${espIp}/buzzer?duration=500`).catch(() => { });
  }
}

// ─────────────────────────────────────────────
// MART CATALOG MODAL
// ─────────────────────────────────────────────
function openMartModal() {
  document.getElementById('mart-modal').classList.remove('hidden');
  renderMartInventory('all');
}
function closeMartModal() {
  document.getElementById('mart-modal').classList.add('hidden');
}

function filterMart(cat, btn) {
  document.querySelectorAll('.mart-filter').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderMartInventory(cat);
}

function renderMartInventory(cat) {
  const container = document.getElementById('mart-product-list');
  if (!container) return;
  container.innerHTML = '';

  const entries = Object.entries(products).filter(([barcode, item]) => {
    if (cat === 'all') return true;
    return item.category === cat;
  });

  entries.forEach(([barcode, item]) => {
    const card = document.createElement('div');
    card.className = 'mart-item-card';
    card.innerHTML = `
      <div class="mart-item-top">
        <span class="mart-item-emoji">${item.emoji}</span>
        <div>
          <div class="mart-item-name">${item.name}</div>
          <div style="font-size:0.72rem;color:var(--text3);font-family:monospace">${item.weight}g • ${(item.category || '').toUpperCase()}</div>
        </div>
        <span class="mart-item-price">₹${item.price}</span>
      </div>
      <div class="mart-item-ing-preview">
        <strong>Ingredients:</strong> ${(item.ingredients || []).slice(0, 3).join(', ')}...
      </div>
      <div class="mart-item-actions">
        <button class="btn-mart-scan" onclick="displayProduct(products['${barcode}']); closeMartModal();">🔍 Inspect</button>
        <button class="btn-mart-add" onclick="addProductToCartDirectly('${barcode}')">+ Add</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// ─────────────────────────────────────────────
// SETTINGS & CONFIG
// ─────────────────────────────────────────────
function openSettings() { document.getElementById('settings-modal').classList.remove('hidden'); }
function closeSettings() { document.getElementById('settings-modal').classList.add('hidden'); }

function openEspModal() { document.getElementById('esp-modal').classList.remove('hidden'); }
function closeEspModal() { document.getElementById('esp-modal').classList.add('hidden'); }

function saveEspConfig() {
  const val = document.getElementById('espIpInput').value.trim();
  if (val) {
    espIp = val;
    localStorage.setItem('sc2_esp_ip', espIp);
    document.getElementById('headerEspLabel').textContent = `ESP32: ${espIp}`;
    closeEspModal();
  }
}

function toggleHwSimulation() {
  hwSimEnabled = document.getElementById('hwSimulationCheck').checked;
}

function saveApiKey() {
  const key = document.getElementById('apiKeyInput').value.trim();
  const status = document.getElementById('apiStatus');
  if (!key || !key.startsWith('AIza')) {
    status.textContent = '❌ Invalid key format. Should start with "AIzaSy..."';
    status.className = 'err';
    return;
  }
  apiKey = key;
  localStorage.setItem('sc2_apikey', key);
  status.textContent = '✅ Gemini API Key saved! Universal AI Lens is now active.';
  status.className = 'ok';
  updateApiKeyUI();
}

function saveQuickApiKey() {
  const key = document.getElementById('quickApiKeyInput').value.trim();
  if (!key || !key.startsWith('AIza')) {
    alert('Please enter a valid Gemini API key starting with "AIzaSy..." (get it free from aistudio.google.com)');
    return;
  }
  apiKey = key;
  localStorage.setItem('sc2_apikey', key);
  document.getElementById('apiKeyInput').value = key;
  updateApiKeyUI();
  setStatus('✅ Gemini AI Live Lens Activated! Point your camera and search.', 'ok');
}

function onGoalChange() {
  dietGoal = document.getElementById('dietGoal').value;
  localStorage.setItem('sc2_goal', dietGoal);
  if (detectedProduct) displayProduct(detectedProduct);
}

// ─────────────────────────────────────────────
// DYNAMIC UPI QR CODE CHECKOUT & AUTO-BILLING
// ─────────────────────────────────────────────
function checkout() {
  if (!cart.length) {
    addBotMsg('⚠️ Your cart is currently empty. Scan items or pick a product first!');
    return;
  }
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const grand = subtotal * 1.18;
  const totalWeight = cart.reduce((s, c) => s + (c.weight * c.qty), 0);

  const invoiceId = 'SC2-' + Math.floor(100000 + Math.random() * 900000);
  const upiPayload = `upi://pay?pa=smartcart.mart@oksbi&pn=SmartCart+Supermarket&am=${grand.toFixed(2)}&cu=INR&tn=Invoice_${invoiceId}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiPayload)}`;

  const qrImg = document.getElementById('dynamicQrImage');
  if (qrImg) qrImg.src = qrUrl;

  document.getElementById('qrGrandTotal').textContent = '₹' + grand.toFixed(2);
  document.getElementById('qrWeightVerified').textContent = `${totalWeight} g Verified (HX711)`;
  document.getElementById('qrVerifiedOverlay').classList.add('hidden');
  document.getElementById('btnVerifyPayment').style.display = 'block';

  const receipt = document.getElementById('receipt-content');
  receipt.innerHTML = '';
  cart.forEach(item => {
    const line = document.createElement('div');
    line.className = 'receipt-line';
    line.innerHTML = `<span>${item.emoji} ${item.name} (${item.weight}g ×${item.qty})</span><span>₹${(item.price * item.qty).toLocaleString('en-IN')}</span>`;
    receipt.appendChild(line);
  });

  const subtotalLine = document.createElement('div');
  subtotalLine.className = 'receipt-line';
  subtotalLine.innerHTML = `<span>Items Subtotal</span><span>₹${subtotal.toFixed(2)}</span>`;
  receipt.appendChild(subtotalLine);

  const gstLine = document.createElement('div');
  gstLine.className = 'receipt-line';
  gstLine.innerHTML = `<span>GST Tax (18%)</span><span>₹${(subtotal * 0.18).toFixed(2)}</span>`;
  receipt.appendChild(gstLine);

  const totalLine = document.createElement('div');
  totalLine.className = 'receipt-line';
  totalLine.innerHTML = `<span>Grand Total to Pay</span><span>₹${grand.toFixed(2)}</span>`;
  receipt.appendChild(totalLine);

  document.getElementById('success-modal').classList.remove('hidden');
}

function simulatePaymentSuccess() {
  document.getElementById('qrVerifiedOverlay').classList.remove('hidden');
  document.getElementById('btnVerifyPayment').style.display = 'none';

  testHardwareBuzzer();
  addBotMsg(`✅ <strong>PAYMENT VERIFIED!</strong> Transaction ID: <code>UPI-${Math.floor(10000000 + Math.random() * 90000000)}</code>.<br>🚪 ESP32 Smart Exit Turnstile Gate #02 is now UNLOCKED! Have a wonderful day!`);
}

function closeSuccess() {
  document.getElementById('success-modal').classList.add('hidden');
  cart = [];
  detectedProduct = null;
  chatHistory = [];
  actualCartWeight = 0;
  updateCart();
  updateTelemetryUI();
  document.getElementById('productDetails').innerHTML = `
    <div class="empty-state">
      <span>📦</span>
      <p>No product scanned or detected yet</p>
      <small>Point camera at ANY object (Wheat, Earbuds, Groceries) and click "Search with Gemini Lens".</small>
    </div>`;
  document.getElementById('product-action-row').classList.add('hidden');
}

// ─────────────────────────────────────────────
// AI CUSTOMER ASSISTANT & CHATBOT WITH BILLING ACTIONS
// ─────────────────────────────────────────────
function quickAsk(text) {
  openChatPopup();
  document.getElementById('chatInput').value = text;
  askAI();
}

async function askAI() {
  const input = document.getElementById('chatInput');
  const question = input.value.trim();
  if (!question) return;
  input.value = '';

  appendUserMsg(question);
  const qLower = question.toLowerCase();

  // 1. AUTO-BILLING & DYNAMIC QR GENERATION ON CUSTOMER COMMAND:
  if (qLower.includes('bill') || qLower.includes('checkout') || qLower.includes('stop shopping') || qLower.includes('stop billing') || qLower.includes('pay now') || qLower.includes('finish shopping') || qLower.includes('qr')) {
    if (!cart.length) {
      appendBotMsg('🛒 Your cart is currently empty! Scan some products first, and then tell me to generate your QR bill.');
      return;
    }
    const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
    const grand = subtotal * 1.18;
    const totalWeight = cart.reduce((s, c) => s + (c.weight * c.qty), 0);

    const itemsSummary = cart.map(c => `• ${c.emoji} <strong>${c.name}</strong> (${c.weight}g ×${c.qty}) = ₹${(c.price * c.qty).toLocaleString('en-IN')}`).join('<br>');

    appendBotMsg(`🧾 <strong>Generating Dynamic UPI QR Code Bill:</strong><br><br>${itemsSummary}<br><br>
⚖️ <strong>ESP32 Scale Weight:</strong> ${totalWeight} g (Verified)<br>
💵 <strong>Subtotal:</strong> ₹${subtotal.toFixed(2)}<br>
📊 <strong>GST (18%):</strong> ₹${(subtotal * 0.18).toFixed(2)}<br>
💳 <strong>Grand Total:</strong> ₹${grand.toFixed(2)}<br><br>
📱 <em>Opening your UPI QR Code Gateway (GPay, PhonePe, Paytm, BHIM) now...</em>`);

    setTimeout(() => checkout(), 900);
    return;
  }

  // 2. REAL-TIME GEMINI AI INGREDIENT & MANUFACTURING CONSULTATION:
  const system = buildCustomerSystemPrompt();
  const typingId = appendBotMsg('⋯ analyzing ingredients, manufacturing science & health impact...', true);

  if (!apiKey) {
    removeMsgEl(typingId);
    appendBotMsg(getIngredientFallback(question));
    return;
  }

  try {
    const reply = await callGeminiText(system, question);
    removeMsgEl(typingId);
    appendBotMsg(reply);
  } catch (err) {
    removeMsgEl(typingId);
    appendBotMsg(getIngredientFallback(question));
    console.error(err);
  }
}

function buildCustomerSystemPrompt() {
  const currentProduct = detectedProduct
    ? `Currently inspected product: ${detectedProduct.name} [Category: ${detectedProduct.category}]. Sugar: ${detectedProduct.sugar}g, Protein: ${detectedProduct.protein}g, Salt: ${detectedProduct.salt}g, Calories: ${detectedProduct.calories} kcal. Ingredients: ${(detectedProduct.ingredients || []).join(', ')}. How it's made: ${detectedProduct.manufacturing || 'N/A'}. Good for health: ${detectedProduct.healthGood || 'N/A'}. Bad for health: ${detectedProduct.healthBad || 'N/A'}.`
    : 'No product currently being scanned.';

  const cartSummary = cart.length
    ? 'Items currently in customer cart: ' + cart.map(c => `${c.name} (Qty: ${c.qty}, ₹${c.price})`).join(', ')
    : 'Cart is empty.';

  return `You are Gemini SmartCart AI, an expert customer shopping assistant, nutrition biochemist, and IoT billing engineer.

CUSTOMER CONTEXT:
- Health/Diet Goal: ${dietGoal}
- ${currentProduct}
- ${cartSummary}

YOUR MISSION:
1. INGREDIENTS & MANUFACTURING: When asked about any product (e.g. Fresh Bananas, Wheat flour/Atta, Milk, Bread, Whey Protein, Chips, Earbuds), explain:
   - What specific ingredients/nutrients are used (e.g. Banana contains 14g natural fruit sugars, 1g protein, 358mg Potassium, Vit B6).
   - What type of ingredients they are (natural fruit sugars, refined flour, preservatives, isolated proteins).
   - How they are made / manufactured / harvested / processed.
   - Whether it is GOOD or BAD for health, giving clear scientific reasons.
2. SHOPPING ASSISTANCE: Suggest the best products to consume for their specific body goal.
3. CONCISE & ACTIONABLE: Keep answers structured, friendly, clear, and rich with helpful emojis.`;
}

async function callGeminiText(systemPrompt, userMsg) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
  chatHistory.push({ role: 'user', parts: [{ text: userMsg }] });
  if (chatHistory.length > 20) chatHistory = chatHistory.slice(-20);

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: systemPrompt }] },
      contents: chatHistory
    })
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Analyzed product data!';
  chatHistory.push({ role: 'model', parts: [{ text: reply }] });
  return reply;
}

// ─────────────────────────────────────────────
// DYNAMIC INTENT-DRIVEN FALLBACK ENGINE
// (Used when no Gemini API key is set, or the Gemini call fails.
//  Reads live from the `products` DB, `cart`, and `dietGoal` state
//  so the reply always matches what the customer actually asked —
//  instead of only recognizing 3 hardcoded items.)
// ─────────────────────────────────────────────

// Find the best-matching product for free-text input by scanning
// every product's name + aliases (not just a few hardcoded ones).
function findProductByQuery(text) {
  const q = text.toLowerCase();
  let best = null, bestLen = 0;
  for (const code in products) {
    const p = products[code];
    const candidates = [p.name.toLowerCase(), ...(p.aliases || [])];
    for (const alias of candidates) {
      if (alias.length > 2 && q.includes(alias) && alias.length > bestLen) {
        best = p;
        bestLen = alias.length;
      }
    }
  }
  return best;
}

function formatProductInfo(p) {
  const allergenText = (p.allergens && p.allergens.length && p.allergens[0] !== 'None')
    ? p.allergens.join(', ') : 'None';
  return `${p.emoji} <strong>${p.name} — Ingredient & Nutrition Breakdown:</strong>
<br><br>
• <strong>Nutritional Content:</strong> ${p.sugar}g Sugar, ${p.protein}g Protein, ${p.salt}g Salt, ${p.calories} kcal.
<br><br>
• <strong>Ingredients:</strong> ${(p.ingredients || []).join(', ') || 'N/A'}
<br><br>
• <strong>How It's Made:</strong> ${p.manufacturing || 'N/A'}
<br><br>
• <strong>🟢 Good for Health:</strong> ${p.healthGood || 'N/A'}
<br><br>
• <strong>🔴 Watch Out:</strong> ${p.healthBad || 'None specific.'}
<br><br>
• <strong>Allergens:</strong> ${allergenText}
<br>💵 <strong>Price:</strong> ₹${p.price}`;
}

// Recommend products that match the customer's saved diet goal
// (or a goal keyword mentioned directly in their message).
function recommendForGoal(goalHint) {
  const goal = goalHint || dietGoal;
  const matches = Object.values(products).filter(p => (p.suitableGoals || []).includes(goal));
  if (!matches.length) return null;
  const lines = matches.slice(0, 5)
    .map(p => `${p.emoji} <strong>${p.name}</strong> — ₹${p.price} (${p.protein}g protein, ${p.sugar}g sugar, ${p.calories} kcal)`)
    .join('<br>');
  return `🎯 <strong>Best picks for your "${goal}" goal:</strong><br><br>${lines}`;
}

function describeCart() {
  if (!cart.length) {
    return `🛒 Your cart is empty right now. Scan or click a product and I'll track it here — then just say <em>"generate my bill"</em> when you're done.`;
  }
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const items = cart.map(c => `${c.emoji} <strong>${c.name}</strong> ×${c.qty} — ₹${(c.price * c.qty).toLocaleString('en-IN')}`).join('<br>');
  return `🛒 <strong>Your Cart:</strong><br><br>${items}<br><br>💵 <strong>Subtotal:</strong> ₹${subtotal.toFixed(2)} (excl. GST)`;
}

// Maps casual goal phrases in a user's message to the internal goal keys
// used in each product's `suitableGoals` array.
const GOAL_KEYWORDS = {
  'weight-loss': ['weight loss', 'lose weight', 'fat loss', 'cutting', 'slim'],
  'high-protein': ['high protein', 'muscle', 'bulk', 'gain', 'workout', 'gym'],
  'diabetic-care': ['diabetic', 'diabetes', 'sugar-free', 'low sugar', 'blood sugar'],
  'heart-health': ['heart', 'cholesterol', 'cardiac'],
  'gluten-sensitive': ['gluten free', 'gluten-free', 'celiac'],
  'balanced': ['balanced', 'healthy', 'general']
};

function detectGoalMention(q) {
  for (const [goal, keywords] of Object.entries(GOAL_KEYWORDS)) {
    if (keywords.some(k => q.includes(k))) return goal;
  }
  return null;
}

function getIngredientFallback(question) {
  const q = question.toLowerCase().trim();

  // 1. Greetings / small talk
  if (/^(hi|hello|hey|yo|hii+|good (morning|evening|afternoon))\b/.test(q)) {
    return `👋 Hey! I'm your SmartCart assistant. Ask me about any product's ingredients, get recommendations for your goal (<strong>${dietGoal}</strong>), check your cart, or say <em>"generate my bill"</em> whenever you're ready to pay.`;
  }
  if (q.includes('thank')) {
    return `😊 You're welcome! Anything else you'd like to know before checkout?`;
  }

  // 2. Cart / what's in my cart
  if (q.includes('cart') || q.includes('my items') || q.includes('what did i')) {
    return describeCart();
  }

  // 3. Recommendation requests (works for ANY goal it recognizes, not just the saved one)
  const wantsRecommendation = q.includes('recommend') || q.includes('suggest') || q.includes('best for') || q.includes('what should i');
  const mentionedGoal = detectGoalMention(q);
  if (wantsRecommendation || mentionedGoal) {
    const rec = recommendForGoal(mentionedGoal);
    if (rec) return rec;
  }

  // 4. Product lookup — scans the FULL product catalog & aliases,
  //    so it answers about whatever product the user actually named.
  const matched = findProductByQuery(q) || detectedProduct;
  if (matched && (q.includes('ingredient') || q.includes('healthy') || q.includes('made') || q.includes('nutrition') || findProductByQuery(q))) {
    return formatProductInfo(matched);
  }

  // 5. Default — guide them, but don't pretend to only know 3 products
  return `🤖 <strong>SmartCart Assistant:</strong> I can look up ingredients & nutrition for any product in the store, recommend items for your goal, show your cart, or generate your bill.
<br><br>
• Ask: <em>"What's in the Greek yogurt?"</em> or <em>"Is dark chocolate healthy?"</em>
• Ask: <em>"Recommend something for weight loss"</em>
• Say: <em>"Generate my bill"</em> to get your Dynamic UPI QR Code 😊`;
}

// ─────────────────────────────────────────────
// CHAT UI HELPERS
// ─────────────────────────────────────────────
function appendUserMsg(text) {
  const chat = document.getElementById('chat');
  const div = document.createElement('div');
  div.className = 'user-msg';
  div.innerHTML = `
    <span class="msg-icon">👤</span>
    <div class="msg-bubble">${escapeHtml(text)}</div>
  `;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function appendBotMsg(text, isTyping = false) {
  const id = 'msg-' + (++msgIdCounter);
  const chat = document.getElementById('chat');
  const div = document.createElement('div');
  div.className = `bot-msg${isTyping ? ' typing' : ''}`;
  div.id = id;

  let formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');

  div.innerHTML = `
    <span class="msg-icon">🤖</span>
    <div class="msg-bubble">${formatted}</div>
  `;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;

  // Show unread indicator if closed
  if (!isChatOpen) {
    const unread = document.getElementById('fab-unread');
    if (unread) unread.style.display = 'block';
  }

  return id;
}

function addBotMsg(text) { appendBotMsg(text); }

function removeMsgEl(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

window.toggleChatPopup = toggleChatPopup;
window.openChatPopup = openChatPopup;
window.closeChatPopup = closeChatPopup;
window.simulatePaymentSuccess = simulatePaymentSuccess;

console.log('🌐 SmartCart Universal Lens 2.0 with Full Nutrition & Dynamic UPI QR Billing ready!');