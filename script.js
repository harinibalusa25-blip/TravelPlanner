/* ============ DATA ============ */
const IMG = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`;

const destinations = [
  { id: 1, name: "Bali", country: "Indonesia", region: "Asia", category: "Beach", rating: 4.8, popularity: 95, price: 650,
    img: IMG("photo-1537996194471-e657df975ab4"),
    desc: "Terraced rice fields, surf beaches and ancient temples on the Island of the Gods.",
    highlights: ["Ubud Monkey Forest", "Tanah Lot Temple", "Seminyak Beach", "Mount Batur Sunrise"],
    plan: ["Arrive, check in and relax at Seminyak Beach", "Explore Ubud: rice terraces and Monkey Forest", "Visit Tanah Lot Temple at sunset", "Mount Batur sunrise trek", "Nusa Penida island day trip", "Spa day and local cooking class", "Shopping at Ubud Market and departure"] },
  { id: 2, name: "Paris", country: "France", region: "Europe", category: "City", rating: 4.7, popularity: 98, price: 1200,
    img: IMG("photo-1502602898657-3e91760cbb34"),
    desc: "The city of light: art, cafés, fashion and the iconic Eiffel Tower.",
    highlights: ["Eiffel Tower", "Louvre Museum", "Montmartre", "Seine River Cruise"],
    plan: ["Arrive and evening stroll along the Seine", "Eiffel Tower and Champ de Mars", "Louvre Museum and Tuileries Garden", "Montmartre and Sacré-Cœur", "Day trip to Palace of Versailles", "Latin Quarter and Notre-Dame area", "Café hopping and departure"] },
  { id: 3, name: "Tokyo", country: "Japan", region: "Asia", category: "City", rating: 4.9, popularity: 93, price: 1400,
    img: IMG("photo-1540959733332-eab4deabeeaf"),
    desc: "Neon skylines meet quiet shrines. A city of food, technology and tradition.",
    highlights: ["Shibuya Crossing", "Senso-ji Temple", "Akihabara", "Tsukiji Outer Market"],
    plan: ["Arrive and explore Shinjuku at night", "Senso-ji Temple and Asakusa", "Shibuya, Harajuku and Meiji Shrine", "Tsukiji market and Ginza", "Day trip to Mount Fuji / Hakone", "Akihabara and teamLab", "Last-minute shopping and departure"] },
  { id: 4, name: "Maldives", country: "Maldives", region: "Asia", category: "Beach", rating: 4.9, popularity: 90, price: 2200,
    img: IMG("photo-1514282401047-d79a71a590e8"),
    desc: "Overwater villas, turquoise lagoons and some of the world's best snorkeling.",
    highlights: ["Overwater Villas", "Snorkeling", "Sandbank Picnic", "Sunset Cruise"],
    plan: ["Speedboat transfer and resort check-in", "Snorkeling at the house reef", "Sandbank picnic and kayaking", "Dolphin watching sunset cruise", "Spa and relaxation day", "Scuba or island hopping", "Breakfast on the deck and departure"] },
  { id: 5, name: "Switzerland", country: "Switzerland", region: "Europe", category: "Mountains", rating: 4.8, popularity: 88, price: 1800,
    img: IMG("photo-1530122037265-a5f1f91d3b99"),
    desc: "Snow-capped Alps, crystal lakes and scenic train journeys.",
    highlights: ["Jungfraujoch", "Lake Lucerne", "Zermatt", "Glacier Express"],
    plan: ["Arrive in Zurich and stroll the old town", "Lucerne and Chapel Bridge", "Interlaken and Lake Brienz", "Jungfraujoch – Top of Europe", "Glacier Express to Zermatt", "Matterhorn viewpoint and hiking", "Swiss chocolate tasting and departure"] },
  { id: 6, name: "Santorini", country: "Greece", region: "Europe", category: "Beach", rating: 4.8, popularity: 86, price: 1500,
    img: IMG("photo-1570077188670-e3a8d69ac5ff"),
    desc: "White-washed villages, blue domes and legendary caldera sunsets.",
    highlights: ["Oia Sunset", "Red Beach", "Fira Town", "Wine Tasting"],
    plan: ["Arrive and check in with caldera views", "Explore Fira and Imerovigli", "Oia village and sunset", "Catamaran cruise and hot springs", "Red Beach and Akrotiri ruins", "Winery tour", "Relaxed morning and departure"] },
  { id: 7, name: "New York", country: "USA", region: "Americas", category: "City", rating: 4.6, popularity: 92, price: 1700,
    img: IMG("photo-1496442226666-8d4d0e62e6e9"),
    desc: "The city that never sleeps: skyscrapers, Broadway and Central Park.",
    highlights: ["Times Square", "Central Park", "Statue of Liberty", "Brooklyn Bridge"],
    plan: ["Arrive and walk Times Square", "Statue of Liberty and Ellis Island", "Central Park and the Met Museum", "Brooklyn Bridge and DUMBO", "Top of the Rock and Fifth Avenue", "Broadway show", "Brunch and departure"] },
  { id: 8, name: "Dubai", country: "UAE", region: "Asia", category: "City", rating: 4.7, popularity: 89, price: 1600,
    img: IMG("photo-1512453979798-5ea266f8880c"),
    desc: "Futuristic skyline, desert safaris, luxury shopping and golden beaches.",
    highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Palm Jumeirah"],
    plan: ["Arrive and explore Dubai Marina", "Burj Khalifa and Dubai Mall fountain show", "Old Dubai: souks and creek abra", "Desert safari with BBQ dinner", "Palm Jumeirah and beach day", "Abu Dhabi Grand Mosque trip", "Shopping and departure"] },
  { id: 9, name: "Cape Town", country: "South Africa", region: "Africa", category: "Nature", rating: 4.7, popularity: 70, price: 1100,
    img: IMG("photo-1580060839134-75a5edca2e99"),
    desc: "Table Mountain, penguins, vineyards and dramatic coastal drives.",
    highlights: ["Table Mountain", "Boulders Beach Penguins", "Cape Point", "Stellenbosch Wine"],
    plan: ["Arrive and V&A Waterfront", "Table Mountain cable car", "Cape Point and penguins", "Stellenbosch wine tour", "Robben Island visit", "Chapman's Peak drive", "Market browsing and departure"] },
  { id: 10, name: "Kyoto", country: "Japan", region: "Asia", category: "Culture", rating: 4.9, popularity: 80, price: 1300,
    img: IMG("photo-1493976040374-85c8e12f0c0e"),
    desc: "Temples, geisha districts, bamboo groves and timeless Japanese culture.",
    highlights: ["Fushimi Inari", "Arashiyama Bamboo Grove", "Kinkaku-ji", "Gion District"],
    plan: ["Arrive and walk Gion at dusk", "Fushimi Inari Shrine", "Arashiyama bamboo grove", "Kinkaku-ji and Ryoan-ji", "Tea ceremony and Nishiki Market", "Day trip to Nara", "Last temple visit and departure"] },
  { id: 11, name: "Rio de Janeiro", country: "Brazil", region: "Americas", category: "Beach", rating: 4.5, popularity: 72, price: 1000,
    img: IMG("photo-1483729558449-99ef09a8c325"),
    desc: "Samba, Copacabana and the Christ the Redeemer statue.",
    highlights: ["Christ the Redeemer", "Copacabana", "Sugarloaf Mountain", "Santa Teresa"],
    plan: ["Arrive and Copacabana walk", "Christ the Redeemer", "Sugarloaf cable car at sunset", "Ipanema and Selaron Steps", "Tijuca Forest hike", "Samba night in Lapa", "Beach morning and departure"] },
  { id: 12, name: "Banff", country: "Canada", region: "Americas", category: "Nature", rating: 4.8, popularity: 75, price: 1400,
    img: IMG("photo-1503614472-8c93d56e92ce"),
    desc: "Turquoise lakes, towering peaks and wildlife in the Canadian Rockies.",
    highlights: ["Lake Louise", "Moraine Lake", "Banff Gondola", "Icefields Parkway"],
    plan: ["Arrive and explore Banff town", "Lake Louise and canoeing", "Moraine Lake sunrise", "Icefields Parkway drive", "Banff Gondola and hot springs", "Johnston Canyon hike", "Last coffee and departure"] }
];

const popularIds = [1, 2, 3, 4, 5, 6];

/* Merge the extra destinations from destinations.js */
(function addExtraDestinations() {
  if (typeof extraDestinationData === "undefined") return;
  extraDestinationData.forEach((e, i) => {
    const [name, country, region, category, rating, popularity, price, desc, highlights, img] = e;
    destinations.push({
      id: 100 + i, name, country, region, category, rating, popularity, price, desc, highlights, img,
      plan: [
        `Arrive in ${name}, check in and get oriented`,
        `Explore ${highlights[0]}`,
        `Visit ${highlights[1]}`,
        `Spend the day at ${highlights[2]}`,
        `Enjoy ${highlights[3]} and local cuisine`,
        `Free day: relax, shop or revisit your favorites`,
        `Last-minute souvenirs and departure`
      ]
    });
  });
})();

const CAT_ICON = { Beach: "🏖", Mountains: "⛰", City: "🏙", Nature: "🌿", Culture: "🏛" };
function pic(d) {
  if (d.img) return imgTag(d.img, d.name);
  return `<div class="ph"><span>${CAT_ICON[d.category] || "🌍"}</span><b>${d.name}</b></div>`;
}

const guides = [
  { cat: "Tips", ico: "💡", title: "Book Flights Early", text: "Book international flights 2-3 months ahead and fly mid-week for the best fares." },
  { cat: "Tips", ico: "📱", title: "Download Offline Maps", text: "Save maps and translation packs offline so you are never lost without data." },
  { cat: "Guides", ico: "🧭", title: "How to Plan a Trip", text: "Pick dates, set a budget, choose a destination, then book flights, stay and activities." },
  { cat: "Guides", ico: "🛂", title: "Visa & Passport Basics", text: "Check passport validity (6+ months) and visa rules for each country before booking." },
  { cat: "Packing", ico: "🎒", title: "Carry-On Packing List", text: "Roll clothes, pack versatile layers, and keep documents, chargers and meds in your day bag." },
  { cat: "Packing", ico: "🔌", title: "Don't Forget Adapters", text: "Carry a universal plug adapter and a power bank for long travel days." },
  { cat: "Safety", ico: "🛡", title: "Stay Safe Abroad", text: "Share your itinerary, keep copies of documents and use licensed taxis or ride apps." },
  { cat: "Safety", ico: "🏥", title: "Get Travel Insurance", text: "Cover medical emergencies, cancellations and lost luggage before you leave." },
  { cat: "Culture", ico: "🙏", title: "Respect Local Customs", text: "Learn basic greetings, dress modestly at religious sites and ask before photographing people." },
  { cat: "Culture", ico: "🍜", title: "Eat Like a Local", text: "Try street food from busy stalls and ask locals for their favorite spots." }
];

/* Cost per person per day (USD) */
const styleRates = { budget: 70, mid: 160, luxury: 380 };
const travelerMult = { 1: 1, 2: 2, 4: 3.6, 6: 5.2 };
const currencies = { USD: { sym: "$", rate: 1 }, EUR: { sym: "€", rate: 0.92 }, INR: { sym: "₹", rate: 83 }, GBP: { sym: "£", rate: 0.79 } };
const breakdownSplit = [["🏨 Accommodation", 0.35], ["🍽 Food & Dining", 0.25], ["🚕 Local Transport", 0.12], ["🎟 Activities", 0.18], ["🛍 Shopping & Misc", 0.10]];

/* ============ HELPERS ============ */
const $ = id => document.getElementById(id);
const store = {
  get: (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
let savedDest = store.get("gt_dest", []);
let savedItin = store.get("gt_itin", []);
let lastItinerary = null;

function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove("show"), 2200);
}
const getDest = id => destinations.find(d => d.id === Number(id));
const fmt = (n, cur = "USD") => currencies[cur].sym + Math.round(n * currencies[cur].rate).toLocaleString("en-US");

/* Destination multiplier so cost varies with place */
function destFactor(d) { return 0.7 + d.price / 2000; }
function calcBudget(d, days, trav, style) {
  const total = styleRates[style] * days * travelerMult[trav] * destFactor(d);
  return total;
}

function imgTag(src, alt) {
  return `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.style.display='none'">`;
}

/* ============ NAVBAR ============ */
$("menuBtn").addEventListener("click", () => $("navLinks").classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => $("navLinks").classList.remove("open")));

const sections = ["home", "destinations", "itinerary", "budget", "saved", "guide"];
window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach(id => { const el = $(id); if (el && window.scrollY + 120 >= el.offsetTop) current = id; });
  document.querySelectorAll(".nav-links a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
});

/* ============ SELECT OPTIONS ============ */
function fillSelect(id, list) {
  const sorted = [...list].sort((a, b) => a.name.localeCompare(b.name));
  $(id).innerHTML = sorted.map(d => `<option value="${d.id}">${d.name}, ${d.country}</option>`).join("");
}
fillSelect("qDest", destinations.filter(d => popularIds.includes(d.id)));
fillSelect("iDest", destinations);
fillSelect("bDest", destinations);

/* ============ POPULAR ============ */
function renderPopular() {
  $("popularGrid").innerHTML = popularIds.map(id => {
    const d = getDest(id);
    return `<div class="pop-card" data-id="${d.id}">${imgTag(d.img, d.name)}
      <div class="info"><h4>${d.name}</h4><span>${d.country} · from $${d.price}</span></div></div>`;
  }).join("");
  document.querySelectorAll(".pop-card").forEach(c => c.addEventListener("click", () => openModal(c.dataset.id)));
}

/* ============ QUICK PLANNER ============ */
const budgetRanges = { budget: [500, 1000], mid: [1000, 3000], luxury: [3000, 6000] };
function updateQuickBudget() {
  const days = Number($("qDays").value);
  const d = getDest($("qDest").value);
  const level = $("qBudget").value;
  const [lo, hi] = budgetRanges[level];
  const total = Math.min(hi, Math.max(lo, calcBudget(d, days, 1, level) * 1.6));
  $("qBudgetTitle").textContent = `Budget Estimator (${days} Days)`;
  $("qTotal").textContent = "$" + Math.round(total).toLocaleString("en-US");
  $("qBreakdown").innerHTML = breakdownSplit.map(([n, p]) => `<li><span>${n}</span><b>$${Math.round(total * p).toLocaleString("en-US")}</b></li>`).join("");
}
["qDest", "qDays", "qBudget"].forEach(id => $(id).addEventListener("change", updateQuickBudget));
$("qGenerate").addEventListener("click", () => {
  $("iDest").value = $("qDest").value;
  $("iDays").value = $("qDays").value;
  $("iBudget").value = $("qBudget").value;
  generateItinerary();
  $("itinerary").scrollIntoView();
});

/* ============ DESTINATIONS ============ */
function card(d) {
  const on = savedDest.includes(d.id);
  return `<div class="dest-card">
    <div class="dest-img" data-open="${d.id}">${pic(d)}
      <span class="tag">${d.category}</span>
      <button class="heart ${on ? "on" : ""}" data-heart="${d.id}" aria-label="Save">${on ? "♥" : "♡"}</button>
    </div>
    <div class="dest-body">
      <h3>${d.name}</h3><div class="loc">📍 ${d.country}, ${d.region}</div>
      <p>${d.desc}</p>
      <div class="dest-foot"><span class="rating">★ ${d.rating}</span><span class="price">from $${d.price}</span></div>
    </div></div>`;
}

const PAGE_SIZE = 12;
let visibleCount = PAGE_SIZE;
function renderDestinations() {
  const q = $("searchBox").value.trim().toLowerCase();
  const region = $("fRegion").value, cat = $("fCategory").value, sort = $("fSort").value;
  let list = destinations.filter(d =>
    (region === "all" || d.region === region) &&
    (cat === "all" || d.category === cat) &&
    (!q || (d.name + " " + d.country).toLowerCase().includes(q)));
  if (sort === "popular") list.sort((a, b) => b.popularity - a.popularity);
  if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
  if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
  $("destGrid").innerHTML = list.slice(0, visibleCount).map(card).join("");
  $("destEmpty").hidden = list.length > 0;
  $("destCount").textContent = list.length ? `Showing ${Math.min(visibleCount, list.length)} of ${list.length} destinations` : "";
  $("loadMore").hidden = visibleCount >= list.length;
}
["searchBox", "fRegion", "fCategory", "fSort"].forEach(id => $(id).addEventListener("input", () => { visibleCount = PAGE_SIZE; renderDestinations(); }));
$("loadMore").addEventListener("click", () => { visibleCount += PAGE_SIZE; renderDestinations(); });

/* Heart + open handlers (delegated) */
document.addEventListener("click", e => {
  const heart = e.target.closest("[data-heart]");
  if (heart) { e.stopPropagation(); toggleSave(Number(heart.dataset.heart)); return; }
  const open = e.target.closest("[data-open]");
  if (open) openModal(open.dataset.open);
});

function toggleSave(id) {
  if (savedDest.includes(id)) { savedDest = savedDest.filter(x => x !== id); toast("Removed from saved trips"); }
  else { savedDest.push(id); toast("Saved to your trips ❤"); }
  store.set("gt_dest", savedDest);
  renderDestinations(); renderSaved(); updateCount();
}

/* ============ MODAL ============ */
function openModal(id) {
  const d = getDest(id);
  $("modalBody").innerHTML = `<div class="modal-img">${pic(d)}</div>
    <div class="modal-text"><h3>${d.name}, ${d.country}</h3>
    <div class="meta">${d.category} · ${d.region} · <span class="rating">★ ${d.rating}</span> · from $${d.price}</div>
    <p>${d.desc}</p>
    <div class="highlights">${d.highlights.map(h => `<span>${h}</span>`).join("")}</div>
    <button class="btn btn-primary" id="modalPlan">Plan this trip</button></div>`;
  $("modal").hidden = false;
  document.body.style.overflow = "hidden";
  $("modalPlan").addEventListener("click", () => {
    $("iDest").value = d.id; $("bDest").value = d.id;
    closeModal(); generateItinerary(); $("itinerary").scrollIntoView();
  });
}
function closeModal() { $("modal").hidden = true; document.body.style.overflow = ""; }
$("modalClose").addEventListener("click", closeModal);
$("modal").addEventListener("click", e => { if (e.target === $("modal")) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ============ ITINERARY PLANNER ============ */
const extraDays = ["Free day: explore at your own pace", "Local food tour and hidden gems", "Optional adventure activity", "Souvenir shopping and café time"];
function generateItinerary() {
  const d = getDest($("iDest").value);
  const days = Math.min(21, Math.max(1, Number($("iDays").value) || 1));
  const trav = $("iTrav").value;
  const style = $("iBudget").value;
  const items = [];
  for (let i = 0; i < days; i++) {
    let text;
    if (i === days - 1 && days > 1) text = d.plan[d.plan.length - 1];
    else if (i < d.plan.length - 1) text = d.plan[i];
    else text = extraDays[(i - d.plan.length + 1) % extraDays.length];
    items.push(text);
  }
  const total = calcBudget(d, days, trav, style);
  lastItinerary = { id: Date.now(), destId: d.id, days, trav, style, items, total };
  const travLabel = { 1: "Solo", 2: "2 Adults", 4: "Family (4)", 6: "Group (6+)" }[trav];
  $("iResult").innerHTML = `<div class="result-head"><h3>${d.name} · ${days} Day${days > 1 ? "s" : ""}</h3>
    <button class="save-btn" id="saveItin">💾 Save Itinerary</button></div>
    <div class="meta">${travLabel} · ${style[0].toUpperCase() + style.slice(1)} · Est. ${fmt(total)}</div>
    ${items.map((t, i) => `<div class="day"><div class="day-no"><small>DAY</small>${i + 1}</div>
      <div><h4>Day ${i + 1}</h4><p>${t}</p></div></div>`).join("")}`;
  $("saveItin").addEventListener("click", saveItinerary);
}
$("iGenerate").addEventListener("click", generateItinerary);

function saveItinerary() {
  if (!lastItinerary) return;
  if (savedItin.some(s => s.id === lastItinerary.id)) { toast("Already saved"); return; }
  savedItin.push(lastItinerary);
  store.set("gt_itin", savedItin);
  renderSaved(); updateCount(); toast("Itinerary saved ✔");
}

/* ============ BUDGET PLANNER ============ */
function calculateBudget() {
  const d = getDest($("bDest").value);
  const cur = $("bCur").value;
  const total = calcBudget(d, Number($("bDays").value), $("bTrav").value, $("bStyle").value);
  $("bTotal").textContent = fmt(total, cur);
  $("bBreakdown").innerHTML = breakdownSplit.map(([n, p]) => `<li><span>${n}</span><b>${fmt(total * p, cur)}</b></li>`).join("");
}
$("bCalc").addEventListener("click", calculateBudget);

/* ============ SAVED TRIPS ============ */
function renderSaved() {
  const sd = $("savedDest");
  sd.innerHTML = savedDest.length
    ? savedDest.map(id => card(getDest(id))).join("")
    : `<div class="empty-box">No saved destinations yet. Heart a destination to save it!</div>`;

  const si = $("savedItin");
  si.innerHTML = savedItin.length
    ? savedItin.map(s => {
        const d = getDest(s.destId);
        return `<div class="itin-card"><h4>${d.name}, ${d.country}</h4>
          <div class="meta">${s.days} days · ${s.style} · ${fmt(s.total)}</div>
          <ul>${s.items.slice(0, 3).map((t, i) => `<li><b>Day ${i + 1}:</b> ${t}</li>`).join("")}${s.items.length > 3 ? `<li>…and ${s.items.length - 3} more days</li>` : ""}</ul>
          <button class="del-btn" data-del="${s.id}">Delete</button></div>`;
      }).join("")
    : `<div class="empty-box">No saved itineraries yet. Generate one and save it!</div>`;
}
document.addEventListener("click", e => {
  const del = e.target.closest("[data-del]");
  if (!del) return;
  savedItin = savedItin.filter(s => s.id !== Number(del.dataset.del));
  store.set("gt_itin", savedItin);
  renderSaved(); updateCount(); toast("Itinerary deleted");
});
$("savedTabs").addEventListener("click", e => {
  const b = e.target.closest(".tab"); if (!b) return;
  document.querySelectorAll("#savedTabs .tab").forEach(t => t.classList.toggle("active", t === b));
  const isDest = b.dataset.tab === "dest";
  $("savedDest").hidden = !isDest;
  $("savedItin").hidden = isDest;
});
function updateCount() { $("tripCount").textContent = savedDest.length + savedItin.length; }

/* ============ TRAVEL GUIDE ============ */
function renderGuide(cat = "all") {
  $("guideGrid").innerHTML = guides.filter(g => cat === "all" || g.cat === cat).map(g =>
    `<div class="guide-card"><div class="ico">${g.ico}</div><span class="cat">${g.cat}</span>
     <h4>${g.title}</h4><p>${g.text}</p></div>`).join("");
}
$("guideTabs").addEventListener("click", e => {
  const b = e.target.closest(".tab"); if (!b) return;
  document.querySelectorAll("#guideTabs .tab").forEach(t => t.classList.toggle("active", t === b));
  renderGuide(b.dataset.cat);
});

/* ============ INIT ============ */
renderPopular();
renderDestinations();
renderSaved();
renderGuide();
updateQuickBudget();
updateCount();