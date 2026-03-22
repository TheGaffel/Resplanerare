
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// SPR&#197;K
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
let lang = 'sv';
const T = {
  sv:{
    logo:'Ruttkarta', go:'PLANERA RUTT', startPH:'Startplats...', endPH:'Destination...',
    routeLbl:'Rutt', gpsLbl:'GPS & Nearby', catLbl:'Kategorier',
    car:'Bil',foot:'Fot',bike:'Cykel',transit:'Buss',
    gpsOn:'Aktivera GPS', gpsOff:'Stoppa GPS', gpsTracking:'F&#246;ljer dig...',
    searchView:'S&#246;k i kartvy',
    tabPOIs:'Sev&#228;rdheter', tabTrips:'Resor', tabJournal:'Dagbok',
    sortDist:'Avst&#229;nd', sortRoute:'L&#228;ngs rutten', sortRating:'Betyg', sortName:'Namn A&#8211;&#214;',
    saveTrip:'Spara', saveTitle:'Spara resa', namePH:'Namn p&#229; resan...',
    save:'Spara', cancel:'Avbryt',
    fav:'&#11088; Favorit', unfav:'&#9734; Ta bort', markVis:'&#9989; Bes&#246;kt', unmarkVis:'&#9675; Ej bes&#246;kt',
    journal:'&#128211; Anteckning', focusMap:'&#128506; Visa', openMaps:'&#129517; Navigera', shareItem:'&#128279; Dela',
    calcDetour:'Ber&#228;kna avstickare',
    kmAway:'km bort', kmFromStart:'km in p&#229; rutten', detourLbl:'avstickare',
    open:'&#214;ppet nu', closed:'St&#228;ngt', unknownHours:'Ok&#228;nd &#246;ppettid',
    free:'Gratis', fee:'Intr&#228;de', unknownFee:'',
    calculating:'Ber&#228;knar rutt...', fetchPOIs:'H&#228;mtar sev&#228;rdheter...',
    ready:'Redo', routeDone:'Rutt klar',
    geocodeErr:'Platsen hittades inte.', routeErr:'Kunde inte ber&#228;kna rutt.',
    gpsLocating:'H&#228;mtar position...', gpsDone:'Position hittad',gpsErr:'GPS-fel',
    noPOIs:'Inga sev&#228;rdheter hittades.', noTrips:'Inga sparade resor.', noJournal:'Inga anteckningar.',
    journalTitle:'Anteckning', journalPH:'Skriv dina minnen...',
    shareTitle:'Dela', shareCopy:'Kopiera',
    saved:'Sparad!', deleted:'Borttagen', copied:'Kopierad!',
    tripLoad:'Visa karta', tripShare:'Dela', tripDel:'Ta bort', tripPOIs:'platser',
    rating:'betyg',
  },
  en:{
    logo:'Route Planner', go:'PLAN ROUTE', startPH:'Starting point...', endPH:'Destination...',
    routeLbl:'Route', gpsLbl:'GPS & Nearby', catLbl:'Categories',
    car:'Car',foot:'Walk',bike:'Bike',transit:'Bus',
    gpsOn:'Enable GPS', gpsOff:'Stop GPS', gpsTracking:'Tracking...',
    searchView:'Search this area',
    tabPOIs:'Sights', tabTrips:'Trips', tabJournal:'Journal',
    sortDist:'Distance', sortRoute:'Along route', sortRating:'Rating', sortName:'Name A&#8211;Z',
    saveTrip:'Save', saveTitle:'Save trip', namePH:'Trip name...',
    save:'Save', cancel:'Cancel',
    fav:'&#11088; Favourite', unfav:'&#9734; Remove', markVis:'&#9989; Visited', unmarkVis:'&#9675; Not visited',
    journal:'&#128211; Note', focusMap:'&#128506; Show', openMaps:'&#129517; Navigate', shareItem:'&#128279; Share',
    calcDetour:'Calculate detour',
    kmAway:'km away', kmFromStart:'km along route', detourLbl:'detour',
    open:'Open now', closed:'Closed', unknownHours:'',
    free:'Free', fee:'Paid entry', unknownFee:'',
    calculating:'Calculating route...', fetchPOIs:'Fetching sights...',
    ready:'Ready', routeDone:'Route done',
    geocodeErr:'Location not found.', routeErr:'Could not calculate route.',
    gpsLocating:'Getting location...', gpsDone:'Location found', gpsErr:'GPS error',
    noPOIs:'No sights found.', noTrips:'No saved trips.', noJournal:'No journal entries.',
    journalTitle:'Journal entry', journalPH:'Write your memories...',
    shareTitle:'Share', shareCopy:'Copy',
    saved:'Saved!', deleted:'Deleted', copied:'Copied!',
    tripLoad:'Show map', tripShare:'Share', tripDel:'Delete', tripPOIs:'places',
    rating:'rating',
  }
};
function t(k){ return T[lang][k] || k; }

function setLang(l){
  lang = l;
  document.getElementById('mob-lang-btn').textContent = l === 'sv' ? 'EN' : 'SV';
  document.getElementById('desk-lang-btn').textContent = l === 'sv' ? 'EN' : 'SV';
  applyTr();
}

function applyTr(){
  const map2 = {
    'mob-logo':'logo','desk-logo':'logo',
    'mob-go-txt':'go','go-txt':'go',
    'desk-route-lbl':'routeLbl','desk-gps-lbl':'gpsLbl','desk-cat-lbl':'catLbl',
    'ml-car':'car','ml-foot':'foot','ml-bike':'bike','ml-transit':'transit',
    'mob-ml-car':'car','mob-ml-foot':'foot','mob-ml-bike':'bike','mob-ml-transit':'transit',
    'gps-btn-txt':'gpsOn',
    'tl-pois':'tabPOIs','tl-trips':'tabTrips','tl-journal':'tabJournal',
    'mob-tl-pois':'tabPOIs','mob-tl-trips':'tabTrips','mob-tl-journal':'tabJournal',
    'rb-time-lbl':'sortDist','rb-pois-lbl':'tabPOIs','rb-save-txt':'saveTrip',
    'ms-title':'saveTitle','ms-ok':'save','ms-cancel':'cancel',
    'mj-title':'journalTitle','mj-ok':'save','mj-cancel':'cancel',
    'msh-title':'shareTitle','msh-copy':'shareCopy','msh-close':'cancel',
    'sb-txt':'ready',
  };
  for(const [id,key] of Object.entries(map2)){
    const el = document.getElementById(id);
    if(el) el.textContent = t(key);
  }
  const phs = [
    ['si','startPH'],['ei','endPH'],['mob-si','startPH'],['mob-ei','endPH'],
    ['ms-name','namePH'],['mj-note','journalPH'],
  ];
  phs.forEach(([id,key]) => { const el = document.getElementById(id); if(el) el.placeholder = t(key); });
  buildDistFilter();
  buildCatFilters();
  updateTripsCount();
  updateSortOptions();
  sortAndRender();
}

function updateSortOptions(){
  [['sort-select'],['mob-sort-select']].forEach(([id]) => {
    const el = document.getElementById(id);
    if(!el) return;
    el.options[0].text = t('sortDist');
    if(el.options[1]) el.options[1].text = t('sortRoute');
    if(el.options[2]) el.options[2].text = t('sortRating');
    if(el.options[3]) el.options[3].text = t('sortName');
  });
}

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// TEMA
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
let theme = localStorage.getItem('rk_theme') || 'dark';
function applyTheme(){
  document.documentElement.setAttribute('data-theme', theme);
  const icons = {dark:'&#127769;', light:'&#9728;&#65039;', unicorn:'&#129412;'};
  ['desk-theme-btn','mob-theme-btn'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.textContent = icons[theme]||'&#127769;';
  });
  localStorage.setItem('rk_theme', theme);
}
function toggleTheme(){
  theme = theme==='dark'?'light':theme==='light'?'unicorn':'dark';
  applyTheme();
}

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// KATEGORIER
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
const CATS = {
  museum:    {icon:'&#127963;',lbl:{sv:'Museum',   en:'Museum'},      tag:['tourism','museum'],          bg:'rgba(91,141,184,.15)'},
  attraction:{icon:'&#127919;',lbl:{sv:'Attraktion',en:'Attraction'}, tag:['tourism','attraction'],      bg:'rgba(91,141,184,.15)'},
  viewpoint: {icon:'&#128301;',lbl:{sv:'Utsikt',   en:'Viewpoint'},   tag:['tourism','viewpoint'],       bg:'rgba(91,141,184,.15)'},
  gallery:   {icon:'&#128444;',lbl:{sv:'Galleri',  en:'Gallery'},     tag:['tourism','gallery'],         bg:'rgba(91,141,184,.15)'},
  zoo:       {icon:'&#129409;',lbl:{sv:'Djurpark', en:'Zoo'},         tag:['tourism','zoo'],             bg:'rgba(91,141,184,.15)'},
  theme_park:{icon:'&#127905;',lbl:{sv:'N&#246;jespark',en:'Theme Park'},  tag:['tourism','theme_park'],      bg:'rgba(91,141,184,.15)'},
  aquarium:  {icon:'&#128031;',lbl:{sv:'Akvarium', en:'Aquarium'},    tag:['tourism','aquarium'],        bg:'rgba(91,141,184,.15)'},
  castle:    {icon:'&#127984;',lbl:{sv:'Slott',    en:'Castle'},      tag:['historic','castle'],         bg:'rgba(212,145,58,.15)'},
  monument:  {icon:'&#128511;',lbl:{sv:'Monument', en:'Monument'},    tag:['historic','monument'],       bg:'rgba(212,145,58,.15)'},
  ruins:     {icon:'&#127962;',lbl:{sv:'Ruiner',   en:'Ruins'},       tag:['historic','ruins'],          bg:'rgba(212,145,58,.15)'},
  church:    {icon:'&#9962;',lbl:{sv:'Kyrka',    en:'Church'},      tag:['amenity','place_of_worship'],bg:'rgba(212,145,58,.15)'},
  peak:      {icon:'&#9968;',lbl:{sv:'Berg',     en:'Peak'},        tag:['natural','peak'],            bg:'rgba(106,177,135,.15)'},
  beach:     {icon:'&#127958;',lbl:{sv:'Strand',   en:'Beach'},       tag:['natural','beach'],           bg:'rgba(106,177,135,.15)'},
  waterfall: {icon:'&#128167;',lbl:{sv:'Vattenfall',en:'Waterfall'},  tag:['waterway','waterfall'],      bg:'rgba(106,177,135,.15)'},
  nature:    {icon:'&#127807;',lbl:{sv:'Natur',    en:'Nature'},      tag:['leisure','nature_reserve'],  bg:'rgba(106,177,135,.15)'},
  camping:   {icon:'&#9978;',lbl:{sv:'Camping',  en:'Camping'},     tag:['tourism','camp_site'],       bg:'rgba(106,177,135,.15)'},
  restaurant:{icon:'&#127869;',lbl:{sv:'Restaurang',en:'Restaurant'}, tag:['amenity','restaurant'],      bg:'rgba(168,125,184,.15)'},
  cafe:      {icon:'&#9749;',lbl:{sv:'Caf&#233;',     en:'Caf&#233;'},        tag:['amenity','cafe'],            bg:'rgba(168,125,184,.15)'},
  pub:       {icon:'&#127866;',lbl:{sv:'Pub/Bar',  en:'Pub/Bar'},     tag:['amenity','pub'],             bg:'rgba(168,125,184,.15)'},
  fuel:      {icon:'&#9981;',lbl:{sv:'Bensin',   en:'Fuel'},        tag:['amenity','fuel'],            bg:'rgba(74,68,56,.3)'},
  charging:  {icon:'&#128267;',lbl:{sv:'Laddning', en:'EV Charge'},   tag:['amenity','charging_station'],bg:'rgba(74,68,56,.3)'},
};

let activeCats = new Set(Object.keys(CATS));

function buildCatFilters(){
  ['cat-filters','mob-cat-filters'].forEach(id => {
    const el = document.getElementById(id);
    if(!el) return;
    el.innerHTML = Object.entries(CATS).map(([k,v]) =>
      '<label class="fchk' + (activeCats.has(k)?' on':'') + '" id="cf-'+id+'-'+k+'" onclick="toggleCat(\''+k+'\',this)">' +
      v.icon + ' ' + v.lbl[lang] + '</label>'
    ).join('');
  });
}

function toggleCat(k, el){
  if(activeCats.has(k)){ if(activeCats.size > 1) activeCats.delete(k); }
  else activeCats.add(k);
  const on = activeCats.has(k);
  el.classList.toggle('on', on);
  // Synka andra instansen
  ['cat-filters','mob-cat-filters'].forEach(id => {
    const other = document.getElementById('cf-'+id+'-'+k);
    if(other && other !== el) other.classList.toggle('on', on);
  });
}

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// AVST&#197;NDFILTER
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
const DIST_OPTIONS = [0.5, 1, 2, 5, 10, 20]; // km
let activeDistKm = 5; // standard

function buildDistFilter(){
  ['dist-filter','mob-dist-filter'].forEach(id => {
    const el = document.getElementById(id);
    if(!el) return;
    el.innerHTML = DIST_OPTIONS.map(d =>
      '<button class="dist-chip' + (d === activeDistKm?' on':'') + '" onclick="setDistFilter('+d+',this)">' + d + ' km</button>'
    ).join('');
  });
}

function setDistFilter(km, el){
  activeDistKm = km;
  document.querySelectorAll('.dist-chip').forEach(b => b.classList.toggle('on', parseFloat(b.textContent) === km));
  // Om GPS aktiv &#8212; s&#246;k om
  if(gpsWatchId !== null && userPos) fetchPOIsNearby(userPos.lat, userPos.lon);
}

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// KARTA
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
const map = L.map('map', {zoomControl:true}).setView([62,15], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:'&#169; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>', maxZoom:19
}).addTo(map);
map.zoomControl.setPosition('bottomright');

const clusterGroup = L.markerClusterGroup({maxClusterRadius:50, showCoverageOnHover:false});
map.addLayer(clusterGroup);

let routeLayer=null, mStart=null, mEnd=null;
let allPOIs=[], currentRouteData=null;
let currentMode='car';

// Auto-s&#246;k vid panorering (ej i ruttl&#228;ge eller GPS-l&#228;ge)
// Flagga f&#246;rhindrar loop: s&#246;kning &#8594; mark&#246;rer &#8594; karta r&#246;r sig &#8594; s&#246;kning igen
let mapMoveTimer = null;
let isFetchingFromMove = false;

map.on('moveend', () => {
  if(currentRouteData) return;   // Ruttl&#228;ge &#8212; hoppa &#246;ver
  if(gpsWatchId !== null) return; // GPS hanterar sin egen s&#246;kning
  if(isFetchingFromMove) return;  // Redan i en s&#246;kning &#8212; hoppa &#246;ver
  if(map.getZoom() < 12) return;  // F&#246;r utzoomed &#8212; hoppa &#246;ver

  clearTimeout(mapMoveTimer);
  mapMoveTimer = setTimeout(() => {
    isFetchingFromMove = true;
    const c = map.getCenter();
    fetchPOIsNearby(c.lat, c.lng, true).finally(() => {
      // V&#228;nta lite extra innan vi till&#229;ter n&#228;sta s&#246;kning
      setTimeout(() => { isFetchingFromMove = false; }, 2000);
    });
  }, 1200);
});

function makeEndIcon(color){
  return L.divIcon({
    html:'<div style="width:14px;height:14px;background:'+color+';border:2px solid var(--bg);border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.5)"></div>',
    className:'', iconSize:[14,14], iconAnchor:[7,7]
  });
}

function makePOIIcon(p){
  const st = getPOIState(p.id);
  const border = st.fav ? '#f0b865' : st.visited ? '#6ab187' : (CATS[p.cat] ? 'var(--amber-d)' : '#666');
  const bg = st.visited ? 'rgba(106,177,135,.15)' : 'var(--panel2)';
  return L.divIcon({
    html:'<div style="background:'+bg+';border:2px solid '+border+';border-radius:8px;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:14px;box-shadow:0 2px 8px rgba(0,0,0,.4)">' + (CATS[p.cat]?.icon||'&#128205;') + '</div>',
    className:'', iconSize:[28,28], iconAnchor:[14,14], popupAnchor:[0,-16]
  });
}

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// GPS &#8212; LIVE TRACKING
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
let gpsWatchId = null;
let userPos = null;
let gpsMarker = null;
let gpsAccCircle = null;

function toggleGPS(){
  if(gpsWatchId !== null) stopGPS();
  else startGPS();
}

function startGPS(){
  if(!navigator.geolocation){ alert(t('gpsErr')); return; }
  setSB(t('gpsLocating'));
  setGPSActive(true);

  gpsWatchId = navigator.geolocation.watchPosition(pos => {
    const {latitude:lat, longitude:lon, accuracy} = pos.coords;
    userPos = {lat, lon};

    // Uppdatera / skapa GPS-mark&#246;r
    if(gpsMarker) map.removeLayer(gpsMarker);
    if(gpsAccCircle) map.removeLayer(gpsAccCircle);
    gpsAccCircle = L.circle([lat,lon], {radius:Math.min(accuracy||50,200), color:'#5b8db8', fillOpacity:.06, weight:1}).addTo(map);
    gpsMarker = L.marker([lat,lon], {
      icon: L.divIcon({html:'<div class="gps-ring live"></div>', className:'', iconSize:[16,16], iconAnchor:[8,8]}),
      zIndexOffset:1000
    }).addTo(map);

    // Centrera kartan f&#246;rsta g&#229;ngen
    if(!map._initialGPSCenter){ map.setView([lat,lon],14); map._initialGPSCenter=true; }

    setSB(t('gpsTracking'));
    // S&#246;k sev&#228;rdheter runt nuvarande position (inte tyst &#8212; visa laddning)
    if(!isFetchingFromMove) fetchPOIsNearby(lat, lon, false);

  }, err => { stopGPS(); setSB(t('gpsErr')); }, {enableHighAccuracy:true, maximumAge:5000});
}

function stopGPS(){
  if(gpsWatchId !== null){ navigator.geolocation.clearWatch(gpsWatchId); gpsWatchId=null; }
  map._initialGPSCenter = false;
  setGPSActive(false);
  setSB(t('ready'));
}

function setGPSActive(on){
  ['desk-gps-btn','mob-gps-btn','gps-fab','mob-gps-btn'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.classList.toggle('active', on);
  });
  const btn = document.getElementById('gps-btn-txt');
  if(btn) btn.textContent = on ? t('gpsOff') : t('gpsOn');
}

function searchInView(){
  const c = map.getCenter();
  fetchPOIsNearby(c.lat, c.lng, false);
}

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// GEOCODING &#8212; Photon
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
let geoTimers={}, sCoords=null, eCoords=null;

async function geocode(q){
  const r = await fetch('https://photon.komoot.io/api/?q='+encodeURIComponent(q)+'&limit=5');
  const d = await r.json();
  return (d.features||[]).map(f=>({
    lat:f.geometry.coordinates[1], lon:f.geometry.coordinates[0],
    display_name:[f.properties.name,f.properties.city,f.properties.country].filter(Boolean).join(', ')
  }));
}

function onInput(w, isMob){
  const srcId = isMob ? (w==='s'?'mob-si':'mob-ei') : (w==='s'?'si':'ei');
  const dstId = isMob ? (w==='s'?'si':'ei')          : (w==='s'?'mob-si':'mob-ei');
  const suggId = isMob ? (w==='s'?'mob-ss':'mob-es') : (w==='s'?'ss':'es');
  document.getElementById(dstId).value = document.getElementById(srcId).value;
  if(w==='s') sCoords=null; else eCoords=null;
  clearTimeout(geoTimers[w]);
  geoTimers[w] = setTimeout(async()=>{
    const val = document.getElementById(srcId).value.trim();
    if(val.length < 2){ document.getElementById(suggId).style.display='none'; return; }
    try{ const res = await geocode(val); showSugg(suggId,res,w); }catch(e){}
  }, 350);
}

function showSugg(suggId, results, w){
  const el = document.getElementById(suggId);
  if(!results.length){ el.style.display='none'; return; }
  el.innerHTML = results.slice(0,5).map(r =>
    '<div class="sugg-item" onmousedown="selSugg(\''+w+'\',\''+suggId+'\','+r.lat+','+r.lon+',\''+r.display_name.replace(/'/g,'&apos;')+'\')">' + r.display_name + '</div>'
  ).join('');
  el.style.display = 'block';
}

function selSugg(w, suggId, lat, lon, name){
  const short = name.split(',').slice(0,2).join(',').trim();
  document.getElementById(w==='s'?'si':'ei').value = short;
  document.getElementById(w==='s'?'mob-si':'mob-ei').value = short;
  document.getElementById(suggId).style.display='none';
  if(w==='s') sCoords={lat:+lat,lon:+lon};
  else eCoords={lat:+lat,lon:+lon};
}

function hideSugg(id){ setTimeout(()=>{ const el=document.getElementById(id); if(el) el.style.display='none'; },200); }

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// F&#196;RDS&#196;TT
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
function setMode(m){
  currentMode=m;
  document.querySelectorAll('.mode-b').forEach(b=>b.classList.toggle('on',b.dataset.mode===m));
}
function osrmProf(m){ return m==='car'?'car':m==='bike'?'bike':'foot'; }

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// RUTTPLANERING
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
async function planRoute(){
  const sv = (document.getElementById('si')||{value:''}).value.trim() || document.getElementById('mob-si').value.trim();
  const ev = (document.getElementById('ei')||{value:''}).value.trim() || document.getElementById('mob-ei').value.trim();
  if(!sv||!ev) return;
  stopGPS();
  setLoad(true, t('calculating'));
  try{
    if(!sCoords){ const r=await geocode(sv); if(!r.length){alert(t('geocodeErr'));setLoad(false);return;} sCoords={lat:r[0].lat,lon:r[0].lon}; }
    if(!eCoords){ const r=await geocode(ev); if(!r.length){alert(t('geocodeErr'));setLoad(false);return;} eCoords={lat:r[0].lat,lon:r[0].lon}; }

    const prof = osrmProf(currentMode);
    const resolvedWPs = await resolveWaypoints();
    updateWPMarkers(resolvedWPs);
    const wpoints = [
      sCoords.lon+','+sCoords.lat,
      ...resolvedWPs.map(w=>w.coords.lon+','+w.coords.lat),
      eCoords.lon+','+eCoords.lat
    ];
    const url = 'https://router.project-osrm.org/route/v1/'+prof+'/'+wpoints.join(';')+'?overview=full&geometries=geojson';
    const rd = await (await fetch(url)).json();
    if(!rd.routes||!rd.routes.length){alert(t('routeErr'));setLoad(false);return;}

    const route = rd.routes[0];
    const coords = route.geometry.coordinates.map(c=>[c[1],c[0]]);
    const distKm = (route.distance/1000).toFixed(1);
    const mins = Math.round(route.duration/60);

    if(routeLayer) map.removeLayer(routeLayer);
    routeLayer = L.polyline(coords,{color:'#d4913a',weight:4,opacity:.85,dashArray:currentMode==='transit'?'8,5':null}).addTo(map);
    if(mStart) map.removeLayer(mStart);
    if(mEnd) map.removeLayer(mEnd);
    mStart = L.marker([sCoords.lat,sCoords.lon],{icon:makeEndIcon('#6ab187')}).addTo(map);
    mEnd   = L.marker([eCoords.lat,eCoords.lon],{icon:makeEndIcon('#c0614e')}).addTo(map);
    map.fitBounds(routeLayer.getBounds(),{padding:[60,60]});

    document.getElementById('rb-dist').textContent = distKm+' km';
    document.getElementById('rb-time').textContent = mins>=60?Math.floor(mins/60)+'h '+(mins%60)+'m':mins+' min';
    document.getElementById('routebar').classList.add('show');

    currentRouteData={startName:sv,endName:ev,sCoords:{...sCoords},eCoords:{...eCoords},mode:currentMode,distKm,mins,coords};

    setSB(t('fetchPOIs'));
    clusterGroup.clearLayers(); allPOIs=[];
    await fetchPOIsAlongRoute(coords, route.distance);
    const n = allPOIs.length;
    document.getElementById('rb-pois').textContent = n;
    setSB(t('routeDone')+' &#183; '+n);
    openPOIPanel();
  }catch(e){ console.error(e); alert(t('routeErr')); setSB(t('ready')); }
  setLoad(false);
}

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// WIKIMEDIA BILDER
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
const imgCache = {};

async function fetchWikiImage(name){
  if(imgCache[name] !== undefined) return imgCache[name];
  imgCache[name] = null; // Markera som laddad (undvik dubbletter)
  try{
    const url = 'https://en.wikipedia.org/api/rest_v1/page/summary/'+encodeURIComponent(name);
    const r = await fetch(url);
    if(!r.ok) throw new Error('no wiki');
    const d = await r.json();
    const img = d.thumbnail?.source || null;
    imgCache[name] = img;
    return img;
  }catch(e){
    // F&#246;rs&#246;k med Wikimedia Commons s&#246;kning som backup
    try{
      const url2 = 'https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch='+encodeURIComponent(name)+'&srnamespace=6&srlimit=1&format=json&origin=*';
      const r2 = await fetch(url2);
      const d2 = await r2.json();
      const title = d2.query?.search?.[0]?.title;
      if(!title) return null;
      const url3 = 'https://commons.wikimedia.org/w/api.php?action=query&titles='+encodeURIComponent(title)+'&prop=imageinfo&iiprop=url&iiurlwidth=400&format=json&origin=*';
      const r3 = await fetch(url3);
      const d3 = await r3.json();
      const pages = Object.values(d3.query?.pages||{});
      const img2 = pages[0]?.imageinfo?.[0]?.thumburl || null;
      imgCache[name] = img2;
      return img2;
    }catch(e2){ return null; }
  }
}

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// &#214;PPETTIDER & PRISER (OSM-taggar)
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
function parseOpeningHours(oh){
  if(!oh) return null;
  // Enkel koll om &#246;ppet just nu (Mo-Su 09:00-18:00 etc)
  try{
    const now = new Date();
    const day = ['Su','Mo','Tu','We','Th','Fr','Sa'][now.getDay()];
    const hm = now.getHours()*100 + now.getMinutes();
    // Hantera "24/7"
    if(oh === '24/7') return {open:true, text:'24/7'};
    // S&#246;k efter dagens dag i str&#228;ngen
    const m = oh.match(new RegExp(day+'[^;]*(\\d{2}:\\d{2})-(\\d{2}:\\d{2})'));
    if(m){
      const open  = parseInt(m[1].replace(':',''));
      const close = parseInt(m[2].replace(':',''));
      const isOpen = hm >= open && hm <= close;
      return {open:isOpen, text:m[1]+'-'+m[2]};
    }
    return {open:null, text:oh.substring(0,20)};
  }catch(e){ return null; }
}

function parseFee(tags){
  if(tags.fee === 'no' || tags.fee === 'free') return {free:true};
  if(tags.fee === 'yes') return {free:false, amount:tags.charge||null};
  if(tags.charge) return {free:false, amount:tags.charge};
  return null;
}

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// OVERPASS &#8212; h&#228;mta POIs
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
function densConfig(){
  return {max:150, radius:Math.round(activeDistKm*1000)};
}

function buildQuery(cats, radius, pointList, max){
  const lines = ['[out:json][timeout:60];','('];
  cats.forEach(k=>{
    if(!CATS[k]) return;
    const [tk,tv] = CATS[k].tag;
    lines.push('node["'+tk+'"="'+tv+'"](around:'+radius+','+pointList+');');
  });
  lines.push(');','out tags '+max+';');
  return lines.join('\n');
}

async function fetchPOIsNearby(lat, lon, silent){
  if(!silent) setLoad(true, t('fetchPOIs'));
  // Rensa bara om detta INTE &#228;r en tyst bakgrundss&#246;kning &#8212; undviker flimmer
  clusterGroup.clearLayers();
  allPOIs = [];
  const {max,radius} = densConfig();
  const query = buildQuery([...activeCats], radius, lat+','+lon, max);
  try{
    const data = await (await fetch('https://overpass-api.de/api/interpreter',{method:'POST',body:query,headers:{'Content-Type':'text/plain'}})).json();
    await processResults(data.elements||[], null, radius/111000, {lat,lon});
    sortAndRender();
    updatePoiCount();
    if(allPOIs.length > 0) openPOIPanel();
    setSB(allPOIs.length+' '+(lang==='sv'?'sev&#228;rdheter hittade':'sights found'));
  }catch(e){ console.error(e); setSB(lang==='sv'?'Fel vid h&#228;mtning':'Fetch error'); }
  if(!silent) setLoad(false);
}

async function fetchPOIsAlongRoute(coords, routeDistM){
  clusterGroup.clearLayers();
  allPOIs = [];
  const routeKm = routeDistM/1000;
  const radius = Math.min(20000, Math.max(5000, activeDistKm*1000));
  const numSamples = Math.min(40, Math.max(4, Math.ceil(routeKm/25)));
  const step = Math.max(1, Math.floor(coords.length/numSamples));
  const samples = [];
  for(let i=0;i<coords.length;i+=step) samples.push(coords[i]);
  if(samples[samples.length-1]!==coords[coords.length-1]) samples.push(coords[coords.length-1]);
  const pts = samples.map(c=>c[0]+','+c[1]).join(' ');
  const query = buildQuery([...activeCats], radius, pts, 200);
  try{
    const data = await (await fetch('https://overpass-api.de/api/interpreter',{method:'POST',body:query,headers:{'Content-Type':'text/plain'}})).json();
    await processResults(data.elements||[], coords, radius/111000, null);
    sortAndRender();
    updatePoiCount();
  }catch(e){ console.error(e); }
}

async function processResults(elements, coords, threshold, nearPos){
  const seen = new Set();
  const toProcess = [];

  elements.forEach(el=>{
    const lat = el.lat||(el.center&&el.center.lat);
    const lon = el.lon||(el.center&&el.center.lon);
    if(!lat||!lon) return;
    if(coords && ptLineDist([lat,lon],coords) > threshold*1.2) return;
    const tags = el.tags||{};
    const name = tags.name||tags['name:sv']||tags['name:en'];
    if(!name) return;
    const key = name+'|'+lat.toFixed(4);
    if(seen.has(key)) return;
    seen.add(key);

    let cat='attraction';
    for(const [k,v] of Object.entries(CATS)){
      const [tk,tv]=v.tag;
      if(tags[tk]===tv){cat=k;break;}
    }

    let routeKm=0;
    if(coords){
      let bi=0,bd=Infinity;
      for(let i=0;i<coords.length;i++){
        const d=Math.hypot(lat-coords[i][0],lon-coords[i][1]);
        if(d<bd){bd=d;bi=i;}
      }
      for(let i=1;i<=bi;i++) routeKm+=Math.hypot(coords[i][0]-coords[i-1][0],coords[i][1]-coords[i-1][1])*111;
    }

    const distFromUser = nearPos
      ? Math.round(Math.hypot(lat-nearPos.lat,lon-nearPos.lon)*111*10)/10
      : (userPos ? Math.round(Math.hypot(lat-userPos.lat,lon-userPos.lon)*111*10)/10 : null);

    const ratingRaw = tags.stars||tags.rating||tags['tourism:stars']||null;
    const rating = ratingRaw ? parseFloat(ratingRaw) : null;
    const hours = parseOpeningHours(tags.opening_hours||tags['opening_hours:covid19']||null);
    const fee = parseFee(tags);
    const website = tags.website||tags['contact:website']||null;
    const wikipedia = tags.wikipedia||null;
    const wikiname = wikipedia ? wikipedia.replace(/^[a-z]+:/,'') : name;

    toProcess.push({
      id:key, lat, lon, name, cat, tags,
      routeKm:routeKm.toFixed(1),
      distFromUser,
      rating, hours, fee, website, wikipedia, wikiname,
      detourMins:null, detourKm:null,
      imgUrl:null
    });
  });

  allPOIs = toProcess;

  // L&#228;gg till mark&#246;rer direkt
  allPOIs.forEach(p => addPOIMarker(p));

  // H&#228;mta bilder i bakgrunden (f&#246;r de 20 n&#228;rmaste)
  const first20 = [...allPOIs].slice(0,20);
  first20.forEach(p => {
    fetchWikiImage(p.wikiname).then(url => {
      p.imgUrl = url;
      // Uppdatera kortet om det visas
      const cardImg = document.getElementById('pc-img-'+p.id.replace(/[|.]/g,'-'));
      if(cardImg && url){
        cardImg.src = url;
        cardImg.style.display='block';
        const ph = document.getElementById('pc-ph-'+p.id.replace(/[|.]/g,'-'));
        if(ph) ph.style.display='none';
      }
    });
  });
}

function addPOIMarker(p){
  const m = L.marker([p.lat,p.lon],{icon:makePOIIcon(p)})
    .bindPopup(()=>makePopupHTML(p), {maxWidth:280});
  clusterGroup.addLayer(m);
  p._marker = m;
  // Uppdatera popup med bild n&#228;r den &#246;ppnas
  m.on('popupopen', () => {
    if(p.imgUrl) updatePopupImg(p);
    else fetchWikiImage(p.wikiname).then(url=>{ p.imgUrl=url; if(url) updatePopupImg(p); });
  });
}

function makePopupHTML(p){
  const cat = CATS[p.cat];
  const parts = [];
  if(p.distFromUser !== null) parts.push(p.distFromUser+' '+t('kmAway'));
  if(p.rating) parts.push('&#11088; '+p.rating.toFixed(1));
  if(p.detourMins !== null) parts.push('+'+p.detourMins+'min '+t('detourLbl'));
  if(p.hours){
    if(p.hours.open === true) parts.push('<span style="color:var(--green)">&#9679; '+t('open')+'</span>');
    else if(p.hours.open === false) parts.push('<span style="color:var(--red)">&#9679; '+t('closed')+'</span>');
  }
  if(p.fee){ if(p.fee.free) parts.push('<span style="color:var(--green)">'+t('free')+'</span>'); else parts.push(t('fee')); }
  return '<div class="pop-title">'+(cat?cat.icon+' ':'')+p.name+'</div>'+
    '<div class="pop-type">'+(cat?cat.lbl[lang]:p.cat)+'</div>'+
    (parts.length?'<div class="pop-meta">'+parts.join(' &#183; ')+'</div>':'')+
    '<div class="pop-actions">'+
      '<div class="pop-btn" data-pid="'+p.id+'" onclick="focusPOIById(this.dataset.pid)">'+t('focusMap')+'</div>'+
      '<div class="pop-btn" data-lat="'+p.lat+'" data-lon="'+p.lon+'" data-name="'+p.name.replace(/"/g,'&quot;')+'" onclick="openInMapsBtn(this)">'+t('openMaps')+'</div>'+
      '<div class="pop-btn" style="background:var(--amber-bg);border-color:var(--amber-d);color:var(--amber)" data-pid="'+p.id+'" onclick="addToRouteDirect(this.dataset.pid)">&#128784; '+(lang==='sv'?'Rutt':'Route')+'</div>'+
      '<div class="pop-btn" data-pid="'+p.id+'" onclick="sharePOI(this.dataset.pid)">'+t('shareItem')+'</div>'+
    '</div>';
}


function updatePopupImg(p){
  const popEl = document.getElementById('pop-'+p.id.replace(/[|.]/g,'-'));
  if(popEl && p.imgUrl && !popEl.querySelector('.pop-img')){
    const img = document.createElement('img');
    img.className='pop-img'; img.src=p.imgUrl; img.alt=p.name;
    popEl.insertBefore(img, popEl.firstChild);
  }
}

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// AVST&#197;ND &#8212; uppdateras l&#246;pande med GPS
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
function updateDistances(){
  if(!userPos) return;
  allPOIs.forEach(p=>{
    p.distFromUser = Math.round(Math.hypot(p.lat-userPos.lat,p.lon-userPos.lon)*111*10)/10;
  });
}

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// &#214;PPNA I MAPS
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
function openInMaps(lat, lon, name){
  const q = encodeURIComponent(name+' '+lat+','+lon);
  // iOS: Apple Maps, Android/Desktop: Google Maps
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  if(isIOS){
    window.open('maps://maps.apple.com/?q='+q+'&ll='+lat+','+lon, '_blank');
  } else {
    window.open('https://www.google.com/maps/search/?api=1&query='+lat+','+lon, '_blank');
  }
}

function shareRoute(){
  if(!currentRouteData) return;
  const data = btoa(encodeURIComponent(JSON.stringify({s:currentRouteData.startName,e:currentRouteData.endName,sc:currentRouteData.sCoords,ec:currentRouteData.eCoords,m:currentRouteData.mode})));
  document.getElementById('msh-url').value = location.href.split('?')[0]+'?trip='+data;
  document.getElementById('modal-share').classList.add('show');
}

function sharePOI(id){
  const p = allPOIs.find(p2=>p2.id===id);
  if(!p) return;
  const url = location.href.split('?')[0]+'?poi='+p.lat.toFixed(5)+','+p.lon.toFixed(5)+','+encodeURIComponent(p.name);
  document.getElementById('msh-url').value = url;
  document.getElementById('modal-share').classList.add('show');
}

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// RENDERA LISTAN
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
function getSort(){
  const ds = document.getElementById('sort-select');
  const ms = document.getElementById('mob-sort-select');
  return (ds&&ds.offsetParent?ds:ms).value;
}

function sortAndRender(){
  updateDistances();
  let pois = [...allPOIs];
  const sort = getSort();
  if(sort==='dist')   pois.sort((a,b)=>(a.distFromUser??9999)-(b.distFromUser??9999));
  else if(sort==='route')  pois.sort((a,b)=>parseFloat(a.routeKm)-parseFloat(b.routeKm));
  else if(sort==='rating') pois.sort((a,b)=>(b.rating||0)-(a.rating||0));
  else if(sort==='name')   pois.sort((a,b)=>a.name.localeCompare(b.name));
  // Favoriter alltid &#246;verst
  pois.sort((a,b)=>{ const sa=getPOIState(a.id),sb=getPOIState(b.id); return (sa.fav?0:1)-(sb.fav?0:1); });

  const html = renderPOICards(pois);
  ['tab-content-pois','mob-tab-content-pois'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.innerHTML=html||emptyState(t('noPOIs'));
  });

  // Uppdatera mark&#246;rer
  clusterGroup.clearLayers();
  pois.forEach(p=>{ if(p._marker) clusterGroup.addLayer(p._marker); });
}

function renderPOICards(pois){
  if(!pois.length) return '';
  const jSet = new Set(loadJournal().map(j=>j.poiId));
  const priL = {high:'\u2191\u2191 H\u00f6g', med:'\u2191 Medel', low:'\u2193 L\u00e5g'};

  return pois.map((p,i)=>{
    const st = getPOIState(p.id);
    const cat = CATS[p.cat];
    const safeId = p.id.replace(/[|.]/g,'-');
    const chips = [];
    if(p.distFromUser!==null) chips.push('<span class="chip amber">'+p.distFromUser+' '+t('kmAway')+'</span>');
    if(p.routeKm>0&&currentRouteData) chips.push('<span class="chip blue">'+p.routeKm+' '+t('kmFromStart')+'</span>');
    if(p.detourMins!==null) chips.push('<span class="chip blue">+'+p.detourMins+'m '+t('detourLbl')+'</span>');
    else if(currentRouteData) chips.push('<span class="chip" style="cursor:pointer;text-decoration:underline dotted" onclick="calcAndShow(\''+p.id+'\')">' +t('calcDetour')+'</span>');
    if(p.rating) chips.push('<span class="chip star">&#11088; '+p.rating.toFixed(1)+'</span>');
    if(jSet.has(p.id)) chips.push('<span class="chip">&#128211;</span>');
    if(p.website) chips.push('<a class="chip" href="'+p.website+'" target="_blank" style="text-decoration:none;color:var(--blue)">&#127760;</a>');
    let hoursHtml='';
    if(p.hours){
      const col=p.hours.open===true?'var(--green)':p.hours.open===false?'var(--red)':'var(--text-m)';
      const txt=p.hours.open===true?t('open'):p.hours.open===false?t('closed'):p.hours.text||'';
      if(txt) hoursHtml='<div class="pc-hours" style="color:'+col+'">'+txt+'</div>';
    }
    const priBadge=st.priority!=='none'?'<span class="pri-badge pri-'+st.priority+'">'+priL[st.priority]+'</span>':'';
    const catLabel=cat?cat.icon+' '+cat.lbl[lang]:p.cat;
    const imgHtml=p.imgUrl
      ?'<img class="pc-img" src="'+p.imgUrl+'" alt="'+p.name+'" id="pc-img-'+safeId+'" loading="lazy">'
      :'<div class="pc-img-placeholder" id="pc-ph-'+safeId+'">'+(cat?cat.icon:'&#128205;')+'</div>';

    return [
      '<div class="pc'+(st.fav?' fav':'')+(st.visited?' visited':'')+'" style="animation-delay:'+i*.025+'s">',
        imgHtml,
        '<div class="pc-body">',
          '<div class="pc-top">',
            '<div class="pc-icon" style="background:'+(cat?cat.bg:'rgba(91,141,184,.1)')+'">'+(cat?cat.icon:'&#128205;')+'</div>',
            '<div class="pc-info">',
              '<div class="pc-name" title="'+p.name+'">'+p.name+'</div>',
              '<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:2px">',
                '<span class="cat-badge">'+catLabel+'</span>',
                priBadge,
              '</div>',
            '</div>',
          '</div>',
          chips.length?'<div class="pc-chips">'+chips.join('')+'</div>':'',
          hoursHtml,
          '<div class="pri-row">',
            '<button class="pri-btn'+(st.priority==='high'?' on-high':'')+'" data-pid="'+p.id+'" data-pri="high" onclick="setPriorityBtn(this)">'+priL.high+'</button>',
            '<button class="pri-btn'+(st.priority==='med'?' on-med':'')+'" data-pid="'+p.id+'" data-pri="med" onclick="setPriorityBtn(this)">'+priL.med+'</button>',
            '<button class="pri-btn'+(st.priority==='low'?' on-low':'')+'" data-pid="'+p.id+'" data-pri="low" onclick="setPriorityBtn(this)">'+priL.low+'</button>',
          '</div>',
          '<div class="pc-actions">',
            '<button class="pa-btn" data-pid="'+p.id+'" onclick="addToRouteBtn(this)">&#128784; Rutt</button>',
            '<button class="pa-btn'+(st.fav?' fav-on':'')+'" data-pid="'+p.id+'" onclick="toggleFavBtn(this)">'+(st.fav?t('unfav'):t('fav'))+'</button>',
            '<button class="pa-btn'+(st.visited?' vis-on':'')+'" data-pid="'+p.id+'" onclick="toggleVisitedBtn(this)">'+(st.visited?t('unmarkVis'):t('markVis'))+'</button>',
            '<button class="pa-btn" data-pid="'+p.id+'" data-name="'+p.name.replace(/"/g,'&quot;')+'" onclick="openJournalBtn(this)">'+t('journal')+'</button>',
            '<button class="pa-btn" data-pid="'+p.id+'" onclick="focusPOIById(this.dataset.pid)">'+t('focusMap')+'</button>',
            '<button class="pa-btn" data-lat="'+p.lat+'" data-lon="'+p.lon+'" data-name="'+p.name.replace(/"/g,'&quot;')+'" onclick="openInMapsBtn(this)">'+t('openMaps')+'</button>',
          '</div>',
        '</div>',
      '</div>'
    ].join('');
  }).join('');
}

function emptyState(msg){
  return '<div class="empty-state"><div class="ei">&#128506;</div><p>'+msg+'</p></div>';
}

function updatePoiCount(){
  const n = allPOIs.length;
  const txt = n+' '+(lang==='sv'?'sev&#228;rdheter':'sights');
  ['poi-count','mob-poi-count'].forEach(id=>{ const el=document.getElementById(id); if(el) el.textContent=txt; });
  ['rb-pois'].forEach(id=>{ const el=document.getElementById(id); if(el) el.textContent=n; });
}

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// POI STATUS & DAGBOK
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
function loadState(){ try{return JSON.parse(localStorage.getItem('rk_poi_state')||'{}')}catch(e){return{}} }
function saveState(s){ localStorage.setItem('rk_poi_state',JSON.stringify(s)); }
function getPOIState(id){ return loadState()[id]||{fav:false,visited:false,priority:'none'}; }
function setPOIState(id,patch){ const s=loadState(); s[id]={...getPOIState(id),...patch}; saveState(s); }

function toggleFav(id){ const st=getPOIState(id); setPOIState(id,{fav:!st.fav}); refreshMarker(id); sortAndRender(); }
function toggleVisited(id){ const st=getPOIState(id); setPOIState(id,{visited:!st.visited}); refreshMarker(id); sortAndRender(); }
function refreshMarker(id){ const p=allPOIs.find(p2=>p2.id===id); if(p&&p._marker) p._marker.setIcon(makePOIIcon(p)); }

async function calcDetour(p){
  if(!currentRouteData||p.detourMins!==null) return;
  try{
    const prof=osrmProf(currentMode);
    const sc=currentRouteData.sCoords,ec=currentRouteData.eCoords;
    const url='https://router.project-osrm.org/route/v1/'+prof+'/'+sc.lon+','+sc.lat+';'+p.lon+','+p.lat+';'+ec.lon+','+ec.lat+'?overview=false';
    const d=await (await fetch(url)).json();
    if(d.routes&&d.routes[0]){
      p.detourKm=Math.max(0,d.routes[0].distance/1000-parseFloat(currentRouteData.distKm)).toFixed(1);
      p.detourMins=Math.max(0,Math.round(d.routes[0].duration/60)-currentRouteData.mins);
    }
  }catch(e){}
}
async function calcAndShow(id){ const p=allPOIs.find(p2=>p2.id===id); if(p){await calcDetour(p);sortAndRender();} }

function loadJournal(){ try{return JSON.parse(localStorage.getItem('rk_journal')||'[]')}catch(e){return[]} }
function saveJournal(j){ localStorage.setItem('rk_journal',JSON.stringify(j)); }
let journalId=null, journalName=null;

function openJournal(idOrEl,name){
  const id = typeof idOrEl === 'string' ? idOrEl : idOrEl.dataset.pid;
  const nm = typeof idOrEl === 'string' ? name : idOrEl.dataset.name;
  journalId=id; journalName=nm;
  document.getElementById('mj-poi-name').textContent=name;
  const ex=loadJournal().find(j=>j.poiId===id);
  document.getElementById('mj-note').value=ex?ex.note:'';
  document.getElementById('modal-journal').classList.add('show');
}
function confirmJournal(){
  const note=document.getElementById('mj-note').value.trim();
  if(!note){closeModal('modal-journal');return;}
  const j=loadJournal().filter(e=>e.poiId!==journalId);
  j.unshift({poiId:journalId,name:journalName,note,date:new Date().toISOString()});
  saveJournal(j);
  setPOIState(journalId,{visited:true});
  closeModal('modal-journal');
  sortAndRender();
  renderJournal();
  toast(t('saved'));
}
function renderJournal(){
  const j=loadJournal();
  const html = j.length ? j.map(e=>{
    const safeId = e.poiId.replace(/"/g,'&quot;');
    const safeName = e.name.replace(/"/g,'&quot;');
    return '<div class="journal-entry">' +
      '<div class="je-name">'+e.name+'</div>' +
      '<div class="je-date">'+new Date(e.date).toLocaleDateString(lang==='sv'?'sv-SE':'en-GB')+'</div>' +
      '<div class="je-note">'+e.note+'</div>' +
      '<div class="je-actions">' +
        '<button class="pa-btn" onclick="openJournal(this)" data-pid="'+safeId+'" data-name="'+safeName+'">&#9999; Redigera</button>' +
        '<button class="pa-btn" onclick="deleteJE(this)" data-pid="'+safeId+'">&#128465;</button>' +
      '</div>' +
    '</div>';
  }).join('') : emptyState(t('noJournal'));
  ['tab-content-journal','mob-tab-content-journal'].forEach(id=>{ const el=document.getElementById(id); if(el) el.innerHTML=html; });
}
function deleteJE(idOrEl){ const id=typeof idOrEl==='string'?idOrEl:idOrEl.dataset.pid; saveJournal(loadJournal().filter(e=>e.poiId!==id)); renderJournal(); }

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// SPARADE RESOR
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
function loadTrips(){ try{return JSON.parse(localStorage.getItem('rk_trips')||'[]')}catch(e){return[]} }
function saveTrips(t2){ localStorage.setItem('rk_trips',JSON.stringify(t2)); }

function openSaveModal(){
  if(!currentRouteData) return;
  const si=document.getElementById('si').value.split(',')[0]||document.getElementById('mob-si').value.split(',')[0];
  const ei=document.getElementById('ei').value.split(',')[0]||document.getElementById('mob-ei').value.split(',')[0];
  document.getElementById('ms-name').value=si+' &#8594; '+ei;
  document.getElementById('modal-save').classList.add('show');
  setTimeout(()=>document.getElementById('ms-name').select(),80);
}
function confirmSave(){
  const name=document.getElementById('ms-name').value.trim();
  if(!name) return;
  const state=loadState();
  const pois=allPOIs.filter(p=>state[p.id]&&(state[p.id].fav||state[p.id].visited)).map(p=>({...p,_marker:undefined}));
  loadTrips(); const trips=loadTrips();
  trips.unshift({id:Date.now(),name,...currentRouteData,pois,savedAt:new Date().toISOString()});
  saveTrips(trips);
  closeModal('modal-save');
  toast(t('saved'));
  renderTrips();
  updateTripsCount();
}
function renderTrips(){
  const trips=loadTrips();
  const mIcon={car:'&#128663;',foot:'&#128694;',bike:'&#128690;',transit:'&#128652;'};
  const html=trips.length ? trips.map(tr=>
    '<div class="trip-card">' +
      '<div class="tc-name">'+tr.name+'</div>' +
      '<div class="tc-meta">' +
        '<span>'+( mIcon[tr.mode]||'&#128663;')+' '+tr.distKm+' km</span>' +
        '<span>'+(tr.mins>=60?Math.floor(tr.mins/60)+'h '+(tr.mins%60)+'m':tr.mins+' min')+'</span>' +
        '<span>'+tr.pois.length+' '+t('tripPOIs')+'</span>' +
        '<span>'+new Date(tr.savedAt).toLocaleDateString(lang==='sv'?'sv-SE':'en-GB')+'</span>' +
      '</div>' +
      '<div class="tc-actions">' +
        '<button class="tc-btn" onclick="loadTrip('+tr.id+')">'+t('tripLoad')+'</button>' +
        '<button class="tc-btn" onclick="shareRouteById('+tr.id+')">'+t('tripShare')+'</button>' +
        '<button class="tc-btn del" onclick="deleteTrip('+tr.id+')">'+t('tripDel')+'</button>' +
      '</div>' +
    '</div>'
  ).join('') : emptyState(t('noTrips'));
  ['tab-content-trips','mob-tab-content-trips'].forEach(id=>{ const el=document.getElementById(id); if(el) el.innerHTML=html; });
}
function updateTripsCount(){
  const n=loadTrips().length;
  ['tl-trips','mob-tl-trips'].forEach(id=>{ const el=document.getElementById(id); if(el) el.textContent=t('tabTrips')+(n?' ('+n+')':''); });
}
function loadTrip(id){
  const tr=loadTrips().find(t2=>t2.id===id);
  if(!tr) return;
  ['si','mob-si'].forEach(id2=>{ const el=document.getElementById(id2); if(el) el.value=tr.startName; });
  ['ei','mob-ei'].forEach(id2=>{ const el=document.getElementById(id2); if(el) el.value=tr.endName; });
  sCoords=tr.sCoords; eCoords=tr.eCoords;
  setMode(tr.mode);
  switchTab('pois');
  planRoute();
}
function deleteTrip(id){ saveTrips(loadTrips().filter(t2=>t2.id!==id)); renderTrips(); updateTripsCount(); toast(t('deleted')); }
function shareRouteById(id){
  const tr=loadTrips().find(t2=>t2.id===id);
  if(!tr) return;
  const data=btoa(encodeURIComponent(JSON.stringify({s:tr.startName,e:tr.endName,sc:tr.sCoords,ec:tr.eCoords,m:tr.mode})));
  document.getElementById('msh-url').value=location.href.split('?')[0]+'?trip='+data;
  document.getElementById('modal-share').classList.add('show');
}
function copyShareUrl(){
  const inp=document.getElementById('msh-url');
  inp.select();
  try{document.execCommand('copy');}catch(e){navigator.clipboard.writeText(inp.value);}
  toast(t('copied'));
  closeModal('modal-share');
}
function handleImport(e){
  const file=e.target.files[0];if(!file)return;
  const r=new FileReader();
  r.onload=ev=>{
    try{
      const imp=JSON.parse(ev.target.result);
      const arr=Array.isArray(imp)?imp:[imp];
      const ex=loadTrips();
      const ids=new Set(ex.map(t=>t.id));
      saveTrips([...arr.filter(t=>!ids.has(t.id)),...ex]);
      renderTrips();updateTripsCount();toast(t('saved'));
    }catch(err){alert('Ogiltig fil');}
  };
  r.readAsText(file);e.target.value='';
}

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// URL PARAMETER &#8212; L&#228;s in delad resa eller POI
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
function checkUrlParams(){
  const params=new URLSearchParams(location.search);
  const tripParam=params.get('trip');
  const poiParam=params.get('poi');
  if(tripParam){
    try{
      const tr=JSON.parse(decodeURIComponent(atob(tripParam)));
      ['si','mob-si'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=tr.s; });
      ['ei','mob-ei'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=tr.e; });
      sCoords=tr.sc; eCoords=tr.ec;
      setMode(tr.m||'car');
      planRoute();
    }catch(e){console.error(e);}
  }
  if(poiParam){
    try{
      const parts=poiParam.split(',');
      const lat=parseFloat(parts[0]),lon=parseFloat(parts[1]);
      const name=decodeURIComponent(parts.slice(2).join(','));
      map.setView([lat,lon],15);
      L.popup().setLatLng([lat,lon]).setContent('<div class="pop-title">'+name+'</div>').addTo(map).openOn(map);
    }catch(e){}
  }
}

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// UI HELPERS
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
let desktopPanelOpen=true;
function toggleDesktopPanel(){
  desktopPanelOpen=!desktopPanelOpen;
  document.getElementById('left-panel').classList.toggle('collapsed',!desktopPanelOpen);
  document.getElementById('panel-toggle-btn').textContent=desktopPanelOpen?'&#9664;':'&#9654;';
  const mapEl=document.getElementById('map');
  mapEl.style.left=desktopPanelOpen?'380px':'40px';
  setTimeout(()=>map.invalidateSize(),320);
}

let bottomSheetOpen=true;
function toggleBottomSheet(){
  bottomSheetOpen=!bottomSheetOpen;
  document.getElementById('bottom-sheet').classList.toggle('hidden',!bottomSheetOpen);
  document.getElementById('mob-panel-btn').classList.toggle('active',bottomSheetOpen);
}
function openPOIPanel(){
  if(window.innerWidth<=768){
    bottomSheetOpen=true;
    document.getElementById('bottom-sheet').classList.remove('hidden');
    document.getElementById('mob-panel-btn').classList.add('active');
  }
}

let mobFilterOpen=false;
function toggleMobFilter(){
  mobFilterOpen=!mobFilterOpen;
  const el=document.getElementById('mob-filter-expand');
  el.style.display=mobFilterOpen?'block':'none';
  document.getElementById('mob-filter-btn').classList.toggle('active',mobFilterOpen);
  setTimeout(()=>map.invalidateSize(),100);
}

let activeTab='pois';
function switchTab(tab){
  activeTab=tab;
  ['pois','trips','journal'].forEach(t2=>{
    ['tab-'+t2,'mob-tab-'+t2].forEach(id=>{ const el=document.getElementById(id); if(el) el.classList.toggle('on',t2===tab); });
    ['tab-content-'+t2,'mob-tab-content-'+t2].forEach(id=>{ const el=document.getElementById(id); if(el) el.style.display=t2===tab?'block':'none'; });
  });
  if(tab==='trips') renderTrips();
  if(tab==='journal') renderJournal();
}

function focusPOIById(id){
  const p=allPOIs.find(p2=>p2.id===id);
  if(!p) return;
  map.setView([p.lat,p.lon],15);
  if(p._marker) clusterGroup.zoomToShowLayer(p._marker,()=>p._marker.openPopup());
}

function setLoad(show,txt){
  document.getElementById('loading').classList.toggle('show',show);
  if(txt) document.getElementById('load-txt').textContent=txt;
  ['go-btn','mob-go-btn'].forEach(id=>{ const b=document.getElementById(id); if(b) b.disabled=show; });
}
function setSB(msg){ document.getElementById('sb-txt').textContent=msg; }
function closeModal(id){ document.getElementById(id).classList.remove('show'); }
['modal-save','modal-journal','modal-share'].forEach(id=>{
  document.getElementById(id).addEventListener('click',e=>{ if(e.target.id===id) closeModal(id); });
});
let toastTmr;
function toast(msg){
  const el=document.getElementById('toast');
  el.textContent=msg; el.classList.add('show');
  clearTimeout(toastTmr); toastTmr=setTimeout(()=>el.classList.remove('show'),2500);
}

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// GEOMETRI
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
function ptLineDist(pt,line){
  let min=Infinity;
  for(let i=0;i<line.length-1;i++){
    const d=segDist(pt[0],pt[1],line[i][0],line[i][1],line[i+1][0],line[i+1][1]);
    if(d<min) min=d;
  }
  return min;
}
function segDist(px,py,ax,ay,bx,by){
  const dx=bx-ax,dy=by-ay;
  if(!dx&&!dy) return Math.hypot(px-ax,py-ay);
  const t2=Math.max(0,Math.min(1,((px-ax)*dx+(py-ay)*dy)/(dx*dx+dy*dy)));
  return Math.hypot(px-ax-t2*dx,py-ay-t2*dy);
}

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// GEOAPIFY HELPERS
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
const GKEY = '5decbd1af5e544089f2e74a99b66d534';

function buildGeoapifyCategories(cats){
  const map = {
    museum:'entertainment.museum', attraction:'tourism.sights',
    viewpoint:'tourism.sights', gallery:'entertainment.culture',
    zoo:'entertainment.zoo', theme_park:'entertainment.theme_park',
    aquarium:'entertainment.aquarium', castle:'tourism.sights',
    monument:'tourism.sights', ruins:'tourism.sights',
    church:'religion', peak:'natural', beach:'beach',
    waterfall:'natural', nature:'natural', camping:'accommodation',
    restaurant:'catering.restaurant', cafe:'catering.cafe',
    pub:'catering.pub', fuel:'service.vehicle.fuel',
    charging:'service.vehicle.charging_station',
  };
  const result = new Set();
  cats.forEach(k=>{ if(map[k]) result.add(map[k]); });
  if(result.size===0) result.add('tourism.sights');
  return [...result].slice(0,4).join(',');
}

function geoapifyCat(categories){
  const cat = (categories[0]||'').toLowerCase();
  if(cat.includes('museum')) return 'museum';
  if(cat.includes('castle')) return 'castle';
  if(cat.includes('monument')) return 'monument';
  if(cat.includes('zoo')) return 'zoo';
  if(cat.includes('aquarium')) return 'aquarium';
  if(cat.includes('theme_park')) return 'theme_park';
  if(cat.includes('religion')) return 'church';
  if(cat.includes('beach')) return 'beach';
  if(cat.includes('natural')) return 'nature';
  if(cat.includes('camping')) return 'camping';
  if(cat.includes('restaurant')) return 'restaurant';
  if(cat.includes('cafe')) return 'cafe';
  if(cat.includes('pub')) return 'pub';
  if(cat.includes('fuel')) return 'fuel';
  if(cat.includes('charging')) return 'charging';
  if(cat.includes('culture')||cat.includes('gallery')) return 'gallery';
  if(cat.includes('catering')) return 'restaurant';
  return 'attraction';
}

async function fetchPOIsNearby(lat, lon, silent){
  if(!silent) setLoad(true, t('fetchPOIs'));
  clusterGroup.clearLayers(); allPOIs=[];
  const radiusM = Math.min(10000, Math.max(500, activeDistKm*1000));
  const geoCats = buildGeoapifyCategories([...activeCats]);
  try{
    const url='https://api.geoapify.com/v2/places?categories='+geoCats+'&filter=circle:'+lon+','+lat+','+radiusM+'&limit=50&apiKey='+GKEY;
    const resp=await fetch(url);
    if(!resp.ok){console.error('Geoapify nearby:',resp.status);if(!silent)setLoad(false);return;}
    const data=await resp.json();
    const features=data.features||[];
    console.log('Geoapify nearby:',features.length,'results');
    features.forEach(f=>{
      const p=f.properties,[flon,flat]=f.geometry.coordinates;
      const name=p.name||p.address_line1;if(!name)return;
      const key='geo|'+(p.place_id||(name+'|'+flat.toFixed(4)));
      const cat=geoapifyCat(p.categories||[]);
      const poi={id:key,lat:flat,lon:flon,name,cat,tags:{},routeKm:'0',
        distFromUser:Math.round(Math.hypot(flat-lat,flon-lon)*111*10)/10,
        rating:p.datasource?.raw?.stars?parseFloat(p.datasource.raw.stars):null,
        hours:p.opening_hours?parseOpeningHours(p.opening_hours):null,
        fee:null,website:p.website||null,wikipedia:null,wikiname:name,
        detourMins:null,detourKm:null,imgUrl:null};
      allPOIs.push(poi);addPOIMarker(poi);
    });
    sortAndRender();updatePoiCount();
    if(allPOIs.length>0)openPOIPanel();
    setSB(allPOIs.length+' '+(lang==='sv'?'sev&#228;rdheter hittade':'sights found'));
    allPOIs.slice(0,15).forEach(p=>{fetchWikiImage(p.wikiname).then(url=>{p.imgUrl=url;const img=document.getElementById('pc-img-'+p.id.replace(/[|.]/g,'-'));if(img&&url){img.src=url;img.style.display='block';}const ph=document.getElementById('pc-ph-'+p.id.replace(/[|.]/g,'-'));if(ph&&url)ph.style.display='none';});});
  }catch(e){console.error('Geoapify nearby:',e);}
  if(!silent)setLoad(false);
}

async function fetchPOIsAlongRoute(coords, routeDistM){
  const routeKm=routeDistM/1000;
  const radiusM=Math.min(10000,Math.max(2000,activeDistKm*1000));
  const geoCats=buildGeoapifyCategories([...activeCats]);
  const numSamples=Math.min(15,Math.max(3,Math.ceil(routeKm/60)));
  const step=Math.max(1,Math.floor(coords.length/numSamples));
  const samples=[];
  for(let i=0;i<coords.length;i+=step) samples.push(coords[i]);
  if(samples[samples.length-1]!==coords[coords.length-1]) samples.push(coords[coords.length-1]);
  console.log('Geoapify route:',routeKm.toFixed(0)+'km,',samples.length,'points, radius:',radiusM+'m');
  const seen=new Set();
  for(let si=0;si<samples.length;si++){
    const [lat,lon]=samples[si];
    setProgress(30+Math.round((si/samples.length)*65),'S&#246;ker... ('+(si+1)+'/'+samples.length+')');
    try{
      const url='https://api.geoapify.com/v2/places?categories='+geoCats+'&filter=circle:'+lon+','+lat+','+radiusM+'&limit=30&apiKey='+GKEY;
      const resp=await fetch(url);
      if(!resp.ok){console.warn('Geoapify point',si,'error:',resp.status);continue;}
      const data=await resp.json();
      const features=data.features||[];
      console.log('Point',si,':',features.length,'results');
      features.forEach(f=>{
        const p=f.properties,[flon,flat]=f.geometry.coordinates;
        const name=p.name||p.address_line1;if(!name)return;
        const key='geo|'+(p.place_id||(name+'|'+flat.toFixed(4)));
        if(seen.has(key))return;seen.add(key);
        if(coords&&ptLineDist([flat,flon],coords)>radiusM/111000*1.2)return;
        let routeKmPos=0,bi=0,bd=Infinity;
        for(let i=0;i<coords.length;i++){const d=Math.hypot(flat-coords[i][0],flon-coords[i][1]);if(d<bd){bd=d;bi=i;}}
        for(let i=1;i<=bi;i++) routeKmPos+=Math.hypot(coords[i][0]-coords[i-1][0],coords[i][1]-coords[i-1][1])*111;
        const cat=geoapifyCat(p.categories||[]);
        const poi={id:key,lat:flat,lon:flon,name,cat,tags:{},
          routeKm:routeKmPos.toFixed(1),
          distFromUser:userPos?Math.round(Math.hypot(flat-userPos.lat,flon-userPos.lon)*111*10)/10:null,
          rating:p.datasource?.raw?.stars?parseFloat(p.datasource.raw.stars):null,
          hours:p.opening_hours?parseOpeningHours(p.opening_hours):null,
          fee:null,website:p.website||null,wikipedia:null,wikiname:name,
          detourMins:null,detourKm:null,imgUrl:null};
        allPOIs.push(poi);addPOIMarker(poi);
      });
      sortAndRender();updatePoiCount();
    }catch(e){console.error('Geoapify point',si,':',e);}
    if(si<samples.length-1) await new Promise(r=>setTimeout(r,200));
  }
  setProgress(100);
  console.log('Total POIs:',allPOIs.length);
  allPOIs.slice(0,20).forEach(p=>{fetchWikiImage(p.wikiname).then(url=>{p.imgUrl=url;const img=document.getElementById('pc-img-'+p.id.replace(/[|.]/g,'-'));if(img&&url){img.src=url;img.style.display='block';}const ph=document.getElementById('pc-ph-'+p.id.replace(/[|.]/g,'-'));if(ph&&url)ph.style.display='none';});});
}

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// WAYPOINTS
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
let waypoints=[], wpGeoTimers={}, wpCounter=0;

function addWaypoint(){
  const id='wp'+(++wpCounter);
  waypoints.push({id,name:'',coords:null});
  renderWaypoints();
}
function removeWaypoint(id){ waypoints=waypoints.filter(w=>w.id!==id); renderWaypoints(); }
function moveWaypoint(id,dir){
  const idx=waypoints.findIndex(w=>w.id===id);
  const ni=idx+dir;
  if(ni<0||ni>=waypoints.length)return;
  [waypoints[idx],waypoints[ni]]=[waypoints[ni],waypoints[idx]];
  renderWaypoints();
}

function renderWaypoints(){
  ['wp-list','mob-wp-list'].forEach(listId=>{
    const el=document.getElementById(listId);
    if(!el)return;
    const isMob=listId.startsWith('mob');
    const inputCls=isMob?'mob-input':'route-input';
    el.innerHTML='';
    waypoints.forEach((wp,i)=>{
      const row=document.createElement('div'); row.className='wp-row';
      const wrap=document.createElement('div'); wrap.className='wp-inp-wrap';
      const dot=document.createElement('div'); dot.className='wp-dot-abs';
      wrap.appendChild(dot);
      const inp=document.createElement('input');
      inp.className=inputCls; inp.style.paddingLeft='24px';
      inp.id=listId+'I'+wp.id; inp.placeholder='Via...'; inp.value=wp.name;
      inp.autocomplete='off'; inp.dataset.wpid=wp.id; inp.dataset.lid=listId;
      inp.addEventListener('input',function(){onWPInput(this);});
      inp.addEventListener('blur',function(){setTimeout(()=>{const s=document.getElementById(listId+'S'+wp.id);if(s)s.style.display='none';},200);});
      wrap.appendChild(inp);
      const sugg=document.createElement('div');
      sugg.className='suggestions wp-suggestions'; sugg.id=listId+'S'+wp.id; sugg.style.display='none';
      wrap.appendChild(sugg); row.appendChild(wrap);
      const ctrl=document.createElement('div'); ctrl.className='wp-controls';
      if(i>0){const up=document.createElement('button');up.className='wp-ctrl-btn';up.innerHTML='&#9650;';up.addEventListener('click',()=>moveWaypoint(wp.id,-1));ctrl.appendChild(up);}
      else ctrl.appendChild(Object.assign(document.createElement('div'),{style:'height:14px'}));
      if(i<waypoints.length-1){const dn=document.createElement('button');dn.className='wp-ctrl-btn';dn.innerHTML='&#9660;';dn.addEventListener('click',()=>moveWaypoint(wp.id,1));ctrl.appendChild(dn);}
      else ctrl.appendChild(Object.assign(document.createElement('div'),{style:'height:14px'}));
      row.appendChild(ctrl);
      const rm=document.createElement('button'); rm.className='wp-remove'; rm.innerHTML='&#215;';
      rm.addEventListener('click',()=>removeWaypoint(wp.id)); row.appendChild(rm);
      el.appendChild(row);
    });
  });
}

function onWPInput(inp){
  const wpId=inp.dataset.wpid, listId=inp.dataset.lid, val=inp.value;
  const wp=waypoints.find(w=>w.id===wpId);
  if(wp){wp.name=val;wp.coords=null;}
  const otherId=(listId==='wp-list'?'mob-wp-list':'wp-list')+'I'+wpId;
  const other=document.getElementById(otherId);
  if(other&&other!==inp) other.value=val;
  clearTimeout(wpGeoTimers[wpId]);
  if(val.trim().length<3)return;
  wpGeoTimers[wpId]=setTimeout(async()=>{
    const sid=listId+'S'+wpId;
    const suggEl=document.getElementById(sid);
    if(!suggEl)return;
    try{
      const results=await geocode(val);
      if(!results.length){suggEl.style.display='none';return;}
      suggEl.innerHTML='';
      results.slice(0,5).forEach(r=>{
        const div=document.createElement('div');
        div.className='sugg-item'; div.textContent=r.display_name;
        div.addEventListener('mousedown',()=>{
          const short=r.display_name.split(',').slice(0,2).join(',').trim();
          if(wp){wp.name=short;wp.coords={lat:r.lat,lon:r.lon};}
          ['wp-list','mob-wp-list'].forEach(lid=>{
            const el=document.getElementById(lid+'I'+wpId);if(el)el.value=short;
            const s=document.getElementById(lid+'S'+wpId);if(s)s.style.display='none';
          });
        });
        suggEl.appendChild(div);
      });
      suggEl.style.display='block';
    }catch(e){}
  },350);
}

async function resolveWaypoints(){
  for(const wp of waypoints){
    if(!wp.coords&&wp.name.trim().length>=3){
      const r=await geocode(wp.name);
      if(r.length)wp.coords={lat:r[0].lat,lon:r[0].lon};
    }
  }
  return waypoints.filter(w=>w.coords);
}

let wpMarkers=[];
function updateWPMarkers(resolved){
  wpMarkers.forEach(m=>map.removeLayer(m)); wpMarkers=[];
  resolved.forEach((wp,i)=>{
    const m=L.marker([wp.coords.lat,wp.coords.lon],{icon:L.divIcon({
      html:'<div style="background:#d4913a;border:2px solid #0e0d0b;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-family:monospace;font-size:10px;font-weight:bold;color:#0e0d0b;box-shadow:0 2px 6px rgba(0,0,0,.5)">'+(i+1)+'</div>',
      className:'',iconSize:[22,22],iconAnchor:[11,11]
    })}).addTo(map).bindPopup('<b>'+wp.name+'</b>');
    wpMarkers.push(m);
  });
}

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// PRIORITY & ADD-TO-ROUTE
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
function setPriorityBtn(btn){
  const id=btn.dataset.pid, pri=btn.dataset.pri;
  const st=getPOIState(id);
  setPOIState(id,{priority:st.priority===pri?'none':pri});
  sortAndRender();
}
function toggleFavBtn(btn){ toggleFav(btn.dataset.pid); }
function toggleVisitedBtn(btn){ toggleVisited(btn.dataset.pid); }
function openJournalBtn(btn){ openJournal(btn.dataset.pid, btn.dataset.name); }
function openInMapsBtn(btn){ openInMaps(parseFloat(btn.dataset.lat),parseFloat(btn.dataset.lon),btn.dataset.name); }
function addToRouteDirect(id){
  const p=allPOIs.find(p2=>p2.id===id);
  if(!p)return;
  setPOIState(p.id,{fav:true});
  const wpid='wp'+(++wpCounter);
  waypoints.push({id:wpid,name:p.name,coords:{lat:p.lat,lon:p.lon}});
  renderWaypoints();
  if(sCoords&&eCoords)planRoute();
  toast((lang==='sv'?'Lagt till: ':'Added: ')+p.name);
}
function addToRouteBtn(btn){
  const p=allPOIs.find(p2=>p2.id===btn.dataset.pid);
  if(!p)return;
  setPOIState(p.id,{fav:true});
  const id='wp'+(++wpCounter);
  waypoints.push({id,name:p.name,coords:{lat:p.lat,lon:p.lon}});
  renderWaypoints();
  if(sCoords&&eCoords)planRoute();
  toast((lang==='sv'?'Lagt till: ':'Added: ')+p.name);
}


function setProgress(pct, msg){
  const bar = document.getElementById('progress-bar');
  const toast = document.getElementById('status-toast');
  const txt = document.getElementById('st-txt');
  if(bar) bar.style.width = pct + '%';
  if(msg && txt) txt.textContent = msg;
  if(toast){
    if(pct > 0 && pct < 100) toast.classList.add('show');
    else toast.classList.remove('show');
  }
  if(pct >= 100) setTimeout(()=>{ if(bar) bar.style.width='0%'; if(toast) toast.classList.remove('show'); }, 800);
}

// TANGENTBORD
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
['si','ei','mob-si','mob-ei'].forEach(id=>{
  const el=document.getElementById(id);
  if(el){ el.addEventListener('keydown',e=>{ if(e.key==='Enter') planRoute(); }); }
});

// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
// INIT
// &#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;
applyTheme();
buildDistFilter();
buildCatFilters();
applyTr();
updateTripsCount();
checkUrlParams();

// Starta med tom lista
['tab-content-pois','mob-tab-content-pois'].forEach(id=>{
  const el=document.getElementById(id);
  if(el) el.innerHTML=emptyState(t('noPOIs'));
});
