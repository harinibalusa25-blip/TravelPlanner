/* Extra destinations. Compact format:
   [name, country, region, category, rating, popularity, priceFrom, description, [4 highlights], optionalImageURL]
   To add your own: copy a line, change the values. Image is optional (a gradient card is used if missing). */
const extraDestinationData = [
  /* ---------- ASIA ---------- */
  ["Singapore", "Singapore", "Asia", "City", 4.7, 85, 1300, "A spotless garden city of hawker food, skyline views and futuristic parks.", ["Gardens by the Bay", "Marina Bay Sands", "Sentosa Island", "Hawker Centres"]],
  ["Bangkok", "Thailand", "Asia", "City", 4.5, 87, 700, "Golden temples, street food, river markets and buzzing nightlife.", ["Grand Palace", "Wat Arun", "Chatuchak Market", "Chinatown Street Food"]],
  ["Phuket", "Thailand", "Asia", "Beach", 4.5, 82, 800, "Thailand's largest island with lively beaches and island-hopping boat trips.", ["Patong Beach", "Phi Phi Islands", "Big Buddha", "Old Phuket Town"]],
  ["Ha Long Bay", "Vietnam", "Asia", "Nature", 4.7, 74, 600, "Thousands of limestone islands rising from emerald water.", ["Overnight Junk Cruise", "Sung Sot Cave", "Kayaking", "Titop Island"]],
  ["Hanoi", "Vietnam", "Asia", "Culture", 4.6, 70, 550, "Old Quarter lanes, coffee culture and French colonial charm.", ["Old Quarter", "Hoan Kiem Lake", "Water Puppet Show", "Pho Food Tour"]],
  ["Seoul", "South Korea", "Asia", "City", 4.7, 80, 1200, "Palaces, K-culture, skincare shops and incredible Korean BBQ.", ["Gyeongbokgung Palace", "Bukchon Hanok Village", "Myeongdong", "N Seoul Tower"]],
  ["Jaipur", "India", "Asia", "Culture", 4.6, 78, 450, "The Pink City: forts, palaces and vibrant bazaars of Rajasthan.", ["Amber Fort", "Hawa Mahal", "City Palace", "Johari Bazaar"]],
  ["Agra", "India", "Asia", "Culture", 4.7, 84, 400, "Home of the Taj Mahal and Mughal-era marvels.", ["Taj Mahal", "Agra Fort", "Mehtab Bagh", "Fatehpur Sikri"]],
  ["Goa", "India", "Asia", "Beach", 4.5, 83, 450, "Sandy beaches, Portuguese heritage, seafood and beach parties.", ["Baga Beach", "Fort Aguada", "Old Goa Churches", "Dudhsagar Falls"]],
  ["Kerala", "India", "Asia", "Nature", 4.7, 79, 500, "Palm-fringed backwaters, tea hills and Ayurvedic retreats.", ["Alleppey Houseboat", "Munnar Tea Gardens", "Periyar Wildlife", "Kathakali Show"]],
  ["Manali", "India", "Asia", "Mountains", 4.5, 77, 400, "Himalayan valley of snow, adventure sports and pine forests.", ["Solang Valley", "Rohtang Pass", "Hadimba Temple", "Old Manali Cafes"]],
  ["Ladakh", "India", "Asia", "Mountains", 4.8, 72, 650, "High-altitude desert, turquoise lakes and ancient monasteries.", ["Pangong Lake", "Nubra Valley", "Leh Palace", "Khardung La Pass"]],
  ["Udaipur", "India", "Asia", "Culture", 4.7, 71, 450, "The City of Lakes with romantic palaces and sunset boat rides.", ["City Palace", "Lake Pichola", "Jag Mandir", "Saheliyon Ki Bari"]],
  ["Kathmandu", "Nepal", "Asia", "Culture", 4.4, 60, 500, "Gateway to the Himalayas with ancient stupas and living heritage.", ["Boudhanath Stupa", "Swayambhunath", "Durbar Square", "Thamel"]],
  ["Bhutan", "Bhutan", "Asia", "Mountains", 4.8, 55, 1500, "The last Himalayan kingdom, known for happiness, monasteries and peaks.", ["Tiger's Nest", "Punakha Dzong", "Thimphu", "Paro Valley"]],
  ["Siem Reap", "Cambodia", "Asia", "Culture", 4.7, 73, 550, "Base for exploring the magnificent temples of Angkor.", ["Angkor Wat", "Bayon Temple", "Ta Prohm", "Tonle Sap Lake"]],
  ["Petra", "Jordan", "Asia", "Culture", 4.8, 66, 1100, "A rose-red city carved into desert cliffs over 2,000 years ago.", ["The Treasury", "Monastery Trail", "Wadi Rum", "Dead Sea Float"]],
  ["Hong Kong", "China", "Asia", "City", 4.5, 81, 1200, "Dense skyline, harbour views, dim sum and hillside trails.", ["Victoria Peak", "Star Ferry", "Tian Tan Buddha", "Temple Street Night Market"]],
  ["Beijing", "China", "Asia", "Culture", 4.6, 76, 900, "Imperial palaces, hutongs and the Great Wall nearby.", ["Great Wall at Mutianyu", "Forbidden City", "Temple of Heaven", "Peking Duck Dinner"]],
  ["Sri Lanka", "Sri Lanka", "Asia", "Nature", 4.7, 68, 700, "Tea hills, wild elephants, ancient cities and golden beaches.", ["Sigiriya Rock", "Ella Train Ride", "Yala Safari", "Galle Fort"]],
  ["Langkawi", "Malaysia", "Asia", "Beach", 4.4, 58, 750, "Tropical archipelago of rainforest, beaches and duty-free shopping.", ["Sky Bridge", "Pantai Cenang", "Mangrove Tour", "Island Hopping"]],
  ["Boracay", "Philippines", "Asia", "Beach", 4.6, 62, 700, "Powdery White Beach and sunset sailing.", ["White Beach", "Puka Shell Beach", "Mount Luho", "Sunset Paraw Sailing"]],
  ["Istanbul", "Turkey", "Europe", "Culture", 4.7, 91, 900, "Where Europe meets Asia: mosques, bazaars and Bosphorus cruises.", ["Hagia Sophia", "Blue Mosque", "Grand Bazaar", "Bosphorus Cruise"]],
  ["Cappadocia", "Turkey", "Europe", "Nature", 4.9, 80, 900, "Fairy chimneys, cave hotels and hot-air balloons at sunrise.", ["Hot Air Balloon", "Goreme Open-Air Museum", "Underground City", "Uchisar Castle"]],

  /* ---------- EUROPE ---------- */
  ["Rome", "Italy", "Europe", "Culture", 4.8, 96, 1200, "The Eternal City: ancient ruins, Renaissance art and fantastic pasta.", ["Colosseum", "Vatican Museums", "Trevi Fountain", "Roman Forum"]],
  ["Venice", "Italy", "Europe", "Culture", 4.6, 84, 1300, "A floating city of canals, gondolas and Gothic palaces.", ["Grand Canal", "St Mark's Square", "Rialto Bridge", "Murano & Burano"]],
  ["Florence", "Italy", "Europe", "Culture", 4.8, 78, 1200, "Cradle of the Renaissance with world-class galleries.", ["Duomo", "Uffizi Gallery", "Ponte Vecchio", "Tuscan Wine Day Trip"]],
  ["Amalfi Coast", "Italy", "Europe", "Beach", 4.8, 79, 1700, "Pastel cliffside villages above the Mediterranean.", ["Positano", "Amalfi Town", "Path of the Gods", "Capri Boat Trip"]],
  ["Barcelona", "Spain", "Europe", "City", 4.7, 93, 1100, "Gaudí architecture, tapas, beaches and nightlife.", ["Sagrada Familia", "Park Güell", "La Rambla", "Gothic Quarter"]],
  ["London", "United Kingdom", "Europe", "City", 4.6, 94, 1500, "Royal landmarks, theatres, museums and historic pubs.", ["Tower of London", "British Museum", "London Eye", "Buckingham Palace"]],
  ["Edinburgh", "United Kingdom", "Europe", "Culture", 4.7, 69, 1100, "A dramatic medieval castle city and Scottish Highlands gateway.", ["Edinburgh Castle", "Royal Mile", "Arthur's Seat", "Highlands Day Trip"]],
  ["Amsterdam", "Netherlands", "Europe", "City", 4.6, 86, 1250, "Canals, cycling, museums and tulip fields.", ["Canal Cruise", "Van Gogh Museum", "Anne Frank House", "Keukenhof Gardens"]],
  ["Prague", "Czech Republic", "Europe", "Culture", 4.7, 82, 800, "A fairy-tale old town with a castle and cheap, great beer.", ["Charles Bridge", "Prague Castle", "Old Town Square", "Astronomical Clock"]],
  ["Vienna", "Austria", "Europe", "Culture", 4.7, 72, 1100, "Imperial palaces, classical music and café culture.", ["Schönbrunn Palace", "Belvedere", "Vienna State Opera", "Naschmarkt"]],
  ["Budapest", "Hungary", "Europe", "City", 4.7, 77, 750, "Thermal baths, ruin bars and grand Danube views.", ["Széchenyi Baths", "Parliament Building", "Fisherman's Bastion", "Danube Night Cruise"]],
  ["Lisbon", "Portugal", "Europe", "City", 4.7, 80, 900, "Pastel hills, trams, pastéis de nata and fado music.", ["Alfama District", "Belém Tower", "Tram 28", "Sintra Day Trip"]],
  ["Athens", "Greece", "Europe", "Culture", 4.5, 75, 850, "Where Western civilization began: the Acropolis and ancient agora.", ["Acropolis", "Parthenon", "Plaka District", "Cape Sounion Sunset"]],
  ["Dubrovnik", "Croatia", "Europe", "Beach", 4.7, 73, 950, "Walled Adriatic old town with turquoise sea views.", ["City Walls Walk", "Lokrum Island", "Cable Car", "Old Town"]],
  ["Reykjavik", "Iceland", "Europe", "Nature", 4.8, 76, 1700, "Northern lights, geysers, waterfalls and volcanic landscapes.", ["Blue Lagoon", "Golden Circle", "Northern Lights", "Vatnajökull Glacier"]],
  ["Norwegian Fjords", "Norway", "Europe", "Nature", 4.9, 70, 1900, "Steep cliffs, deep fjords and cascading waterfalls.", ["Geirangerfjord", "Flåm Railway", "Preikestolen", "Bergen"]],
  ["Lapland", "Finland", "Europe", "Nature", 4.8, 64, 1800, "Snowy forests, reindeer sleighs, huskies and aurora skies.", ["Santa Claus Village", "Husky Safari", "Glass Igloo Stay", "Aurora Hunting"]],
  ["Berlin", "Germany", "Europe", "City", 4.5, 74, 950, "History, street art, museums and legendary nightlife.", ["Brandenburg Gate", "Berlin Wall Memorial", "Museum Island", "East Side Gallery"]],

  /* ---------- AMERICAS ---------- */
  ["San Francisco", "USA", "Americas", "City", 4.6, 78, 1500, "Golden Gate views, cable cars and a vibrant food scene.", ["Golden Gate Bridge", "Alcatraz Island", "Fisherman's Wharf", "Muir Woods"]],
  ["Grand Canyon", "USA", "Americas", "Nature", 4.9, 83, 1100, "A mile-deep canyon painted in red and orange rock.", ["South Rim Viewpoints", "Skywalk", "Rim Trail Hike", "Colorado River Rafting"]],
  ["Hawaii", "USA", "Americas", "Beach", 4.8, 88, 2000, "Volcanoes, surf beaches and aloha spirit across the islands.", ["Waikiki Beach", "Pearl Harbor", "Haleakalā Sunrise", "Hanauma Bay Snorkeling"]],
  ["Las Vegas", "USA", "Americas", "City", 4.4, 85, 1000, "Neon-lit resorts, shows and desert excursions.", ["The Strip", "Bellagio Fountains", "Fremont Street", "Red Rock Canyon"]],
  ["Cancún", "Mexico", "Americas", "Beach", 4.5, 84, 1100, "Caribbean beaches, Mayan ruins and cenotes.", ["Chichén Itzá", "Isla Mujeres", "Cenote Swim", "Tulum Ruins"]],
  ["Machu Picchu", "Peru", "Americas", "Culture", 4.9, 90, 1400, "The lost Inca citadel high in the Andes.", ["Machu Picchu Citadel", "Sacred Valley", "Cusco Old Town", "Rainbow Mountain"]],
  ["Buenos Aires", "Argentina", "Americas", "City", 4.6, 66, 900, "Tango, steak, grand boulevards and European elegance.", ["La Boca", "Recoleta Cemetery", "Tango Show", "Palermo District"]],
  ["Patagonia", "Chile", "Americas", "Nature", 4.9, 65, 1900, "Granite towers, glaciers and wild windswept trails.", ["Torres del Paine", "Perito Moreno Glacier", "W Trek", "Fitz Roy"]],
  ["Galápagos", "Ecuador", "Americas", "Nature", 4.9, 61, 3000, "Darwin's living laboratory of fearless wildlife.", ["Giant Tortoises", "Snorkel with Sea Lions", "Blue-Footed Boobies", "Isabela Island"]],
  ["Havana", "Cuba", "Americas", "Culture", 4.5, 59, 900, "Vintage cars, salsa music and colorful colonial streets.", ["Old Havana", "Malecón Seawall", "Classic Car Tour", "Viñales Valley"]],
  ["Costa Rica", "Costa Rica", "Americas", "Nature", 4.8, 72, 1200, "Rainforests, volcanoes, wildlife and eco-adventures.", ["Arenal Volcano", "Monteverde Cloud Forest", "Manuel Antonio", "Zip-lining"]],
  ["Vancouver", "Canada", "Americas", "City", 4.6, 67, 1300, "Mountains, ocean and a diverse food scene in one city.", ["Stanley Park", "Granville Island", "Capilano Bridge", "Whistler Day Trip"]],
  ["Cartagena", "Colombia", "Americas", "Culture", 4.6, 57, 800, "A colorful Caribbean walled city with salsa and seafood.", ["Walled City", "Getsemaní Street Art", "Rosario Islands", "Castillo San Felipe"]],

  /* ---------- AFRICA ---------- */
  ["Marrakech", "Morocco", "Africa", "Culture", 4.6, 82, 800, "Souks, riads, spices and the Atlas Mountains on the horizon.", ["Jemaa el-Fnaa", "Majorelle Garden", "Bahia Palace", "Sahara Desert Trip"]],
  ["Cairo", "Egypt", "Africa", "Culture", 4.5, 81, 750, "Pyramids, pharaohs and the mighty Nile.", ["Pyramids of Giza", "Egyptian Museum", "Khan el-Khalili", "Nile Dinner Cruise"]],
  ["Serengeti", "Tanzania", "Africa", "Nature", 4.9, 76, 2500, "Endless plains and the Great Wildebeest Migration.", ["Game Drives", "Great Migration", "Hot Air Balloon Safari", "Ngorongoro Crater"]],
  ["Maasai Mara", "Kenya", "Africa", "Nature", 4.9, 74, 2200, "Big-five safaris and Maasai culture on golden savannah.", ["Big Five Safari", "Mara River Crossing", "Maasai Village", "Balloon Ride"]],
  ["Zanzibar", "Tanzania", "Africa", "Beach", 4.7, 71, 1100, "Spice island with white sands and Stone Town history.", ["Stone Town", "Nungwi Beach", "Spice Tour", "Prison Island"]],
  ["Victoria Falls", "Zambia / Zimbabwe", "Africa", "Nature", 4.8, 63, 1500, "One of the world's largest waterfalls: 'The Smoke that Thunders'.", ["Falls Viewpoints", "Devil's Pool", "Zambezi Sunset Cruise", "Bungee Bridge"]],
  ["Kilimanjaro", "Tanzania", "Africa", "Mountains", 4.8, 56, 2500, "Africa's tallest peak and an iconic summit trek.", ["Machame Route", "Uhuru Peak", "Moshi Town", "Coffee Plantation Tour"]],
  ["Mauritius", "Mauritius", "Africa", "Beach", 4.7, 64, 1600, "Lagoons, waterfalls and multicultural island flavors.", ["Le Morne Brabant", "Chamarel Waterfall", "Île aux Cerfs", "Black River Gorges"]],
  ["Seychelles", "Seychelles", "Africa", "Beach", 4.9, 60, 2600, "Granite boulders, pristine beaches and giant tortoises.", ["Anse Source d'Argent", "Vallée de Mai", "La Digue Island", "Snorkeling"]],

  /* ---------- OCEANIA ---------- */
  ["Sydney", "Australia", "Oceania", "City", 4.7, 91, 1600, "Harbour views, iconic Opera House and golden beaches.", ["Sydney Opera House", "Harbour Bridge Climb", "Bondi Beach", "Blue Mountains"]],
  ["Great Barrier Reef", "Australia", "Oceania", "Nature", 4.9, 85, 2000, "The world's largest coral reef system, ideal for diving.", ["Reef Snorkeling", "Scuba Diving", "Whitsunday Islands", "Heart Reef Flight"]],
  ["Uluru", "Australia", "Oceania", "Nature", 4.8, 58, 1900, "The sacred red heart of Australia's Outback.", ["Uluru Sunrise", "Kata Tjuta", "Field of Light", "Aboriginal Cultural Tour"]],
  ["Queenstown", "New Zealand", "Oceania", "Mountains", 4.8, 75, 1700, "Adventure capital with alpine lakes and bungee jumping.", ["Bungee Jumping", "Skyline Gondola", "Lake Wakatipu", "Arrowtown"]],
  ["Milford Sound", "New Zealand", "Oceania", "Nature", 4.9, 62, 1700, "Dramatic fjord with waterfalls and misty peaks.", ["Fjord Cruise", "Mitre Peak", "Routeburn Track", "Kayaking"]],
  ["Fiji", "Fiji", "Oceania", "Beach", 4.8, 70, 1900, "Friendly islands, coral lagoons and palm-lined beaches.", ["Mamanuca Islands", "Cloud 9 Platform", "Sigatoka River Safari", "Village Visit"]],
  ["Bora Bora", "French Polynesia", "Oceania", "Beach", 4.9, 69, 3500, "The ultimate honeymoon lagoon with overwater bungalows.", ["Overwater Bungalow", "Lagoon Snorkeling", "Mount Otemanu", "Shark & Ray Tour"]],

  /* ---------- ANTARCTICA ---------- */
  ["Antarctica", "Antarctica", "Antarctica", "Nature", 4.9, 40, 6500, "The frozen continent of icebergs, penguins and total wilderness.", ["Penguin Colonies", "Zodiac Cruises", "Lemaire Channel", "Whale Watching"]]
];