/* Skolta · maqueta guiada para eventos. Todo es simulado y funciona sin internet. */
(() => {
  'use strict';

  // ---------- Iconos (trazos al estilo de la app) ----------
  const paths = {
    shield: '<path d="M12 3l8 3v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6z"/><path d="M8.5 12.2l2.4 2.4 4.6-5"/>',
    truck: '<path d="M2 6h11v10H2z"/><path d="M13 9h4.5l3.5 4v3h-8"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
    route: '<circle cx="6" cy="19" r="2.2"/><circle cx="18" cy="5" r="2.2"/><path d="M8.2 19H16a3.5 3.5 0 000-7H8a3.5 3.5 0 010-7h7.8"/>',
    alert: '<path d="M10.3 3.9L2 18a2 2 0 001.7 3h16.6a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    x: '<path d="M18 6L6 18"/><path d="M6 6l12 12"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
    pin: '<path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
    phone: '<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z"/>',
    radio: '<circle cx="12" cy="12" r="2"/><path d="M16.2 7.8a6 6 0 010 8.4M7.8 16.2a6 6 0 010-8.4M19.1 4.9a10 10 0 010 14.2M4.9 19.1a10 10 0 010-14.2"/>',
    building: '<path d="M4 21V5a2 2 0 012-2h8a2 2 0 012 2v16"/><path d="M16 9h2a2 2 0 012 2v10"/><path d="M2 21h20M8 7h4M8 11h4M8 15h4"/>',
    restart: '<path d="M3 12a9 9 0 109-9 9.7 9.7 0 00-6.7 2.8L3 8"/><path d="M3 3v5h5"/>',
    sound: '<path d="M11 5L6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 010 7M19 5a10 10 0 010 14"/>',
    mute: '<path d="M11 5L6 9H2v6h4l5 4z"/><path d="M22 9l-6 6M16 9l6 6"/>',
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.2.4-2.3 1-3.2.3 1.2 1.2 2.5 2.5 2.7z"/>',
    heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0016.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.8-3.8a6 6 0 01-7.9 7.9l-6.9 6.9a2.1 2.1 0 01-3-3l6.9-6.9a6 6 0 017.9-7.9z"/>',
    crash: '<path d="M5 17h14v-5l-2-5H7l-2 5z"/><path d="M5 12h14"/><circle cx="8" cy="17" r="1.5"/><circle cx="16" cy="17" r="1.5"/>',
    hand: '<path d="M18 11V6a2 2 0 00-4 0v5M14 10V4a2 2 0 00-4 0v6M10 10.5V6a2 2 0 00-4 0v8a8 8 0 008 8h2a8 8 0 008-8v-1a2 2 0 00-4 0"/>',
    block: '<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>',
    mountain: '<path d="M8 3l4 8 5-5 5 15H2z"/>',
    arrow: '<path d="M12 2l7 19-7-4-7 4z"/>',
    users: '<path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8"/>',
    book: '<path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>',
    next: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  };
  const icon = (name, extra = '') =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${paths[name]}</svg>`;

  // ---------- Voz: frases grabadas (voz neural Lorenzo, Chile), iguales en todo teléfono y sin internet ----------
  const VOICE_LINES = ['vehiculo', 'rutas', 'cuesta', 'ruta-viva', 'panel',
    'panico-accidente', 'panico-salud', 'panico-incendio', 'panico-asalto', 'panico-falla', 'panico-obstaculo'];
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  const audio = AudioCtx ? new AudioCtx() : null;
  const buffers = {};
  let soundOn = true;
  let voiceToken = 0;
  let playing = null;
  const loadLine = (name) => (buffers[name] ??= fetch(`voz/${name}.mp3`)
    .then((r) => r.arrayBuffer())
    .then((data) => new Promise((ok, fail) => audio.decodeAudioData(data, ok, fail))));
  function stopVoice() {
    voiceToken++;
    try { playing?.stop(); } catch { /* ya terminó */ }
    playing = null;
  }
  async function say(name) {
    if (!soundOn || !audio) return;
    stopVoice();
    const token = voiceToken;
    const buffer = await loadLine(name).catch(() => null);
    if (!buffer || !soundOn || token !== voiceToken) return; // la pantalla ya cambió
    const source = audio.createBufferSource();
    source.buffer = buffer;
    source.connect(audio.destination);
    source.start();
    playing = source;
  }
  // Los navegadores solo dejan sonar audio después de un toque: cada toque lo habilita.
  document.addEventListener('pointerdown', () => { if (audio?.state === 'suspended') audio.resume(); });
  if (audio) VOICE_LINES.forEach((name) => loadLine(name).catch(() => {}));

  // ---------- Mapa ilustrativo (no es cartografía real) ----------
  // Todo lo importante va en la mitad de arriba: abajo flotan las tarjetas.
  const ROUTE_SKOLTA = 'M262 102 C 228 122, 196 136, 180 166 C 166 192, 160 220, 166 248 C 172 276, 186 304, 198 324 C 208 340, 218 348, 232 352';
  const ROUTE_GPS = 'M262 102 C 268 150, 266 200, 262 235 C 258 262, 254 278, 252 290 C 250 318, 242 336, 232 352';
  function mapSvg({ showGps = false, showSkolta = false, dimGps = false, extra = '', view = '0 30 400 700', fit = 'xMidYMin meet' } = {}) {
    return `
    <svg class="map" viewBox="${view}" preserveAspectRatio="${fit}" aria-label="Mapa ilustrativo de la ruta">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#417886" stroke-opacity="0.12"/></pattern>
      </defs>
      <rect x="-200" y="-200" width="800" height="1100" fill="#1A1D21"/>
      <rect x="-200" y="-200" width="800" height="1100" fill="url(#grid)"/>
      <path d="M-10 52 C 80 34, 150 74, 230 56 S 360 34, 420 48" fill="none" stroke="#0B2A35" stroke-width="9" stroke-linecap="round"/>
      <path d="M-10 296 C 70 278, 140 306, 212 290 S 340 270, 420 284" fill="none" stroke="#0B2A35" stroke-width="10" stroke-linecap="round"/>
      <path d="M-10 520 C 80 500, 160 540, 240 520 S 360 500, 420 514" fill="none" stroke="#0B2A35" stroke-width="8" stroke-linecap="round"/>
      <path d="M40 -10 L 100 710 M 330 -10 L 352 710 M -10 176 L 410 196 M -10 430 L 410 410 M -10 610 L 410 640" stroke="#2C3D4A" stroke-width="3" opacity="0.55"/>
      <g font-family="Outfit, sans-serif" font-size="12" fill="#B6BBC2">
        <circle cx="300" cy="82" r="5"/><text x="310" y="86">Chillán</text>
        <circle cx="262" cy="102" r="4"/><text x="272" y="116" font-size="11">Chillán Viejo</text>
        <circle cx="104" cy="150" r="3.5" opacity="0.7"/><text x="80" y="140" font-size="11" opacity="0.7">Bulnes</text>
        <text x="70" y="318" font-size="10" opacity="0.6">río Itata</text>
      </g>
      ${showGps ? `<path id="gps" d="${ROUTE_GPS}" fill="none" stroke="#B6BBC2" stroke-width="5" stroke-dasharray="2 10" stroke-linecap="round" opacity="${dimGps ? 0.35 : 0.9}"/>` : ''}
      ${showSkolta ? `<path d="${ROUTE_SKOLTA}" fill="none" stroke="#08171C" stroke-width="10" stroke-linecap="round"/><path id="skolta" d="${ROUTE_SKOLTA}" fill="none" stroke="#CEDC00" stroke-width="6" stroke-linecap="round"/>` : ''}
      ${showGps ? `<g id="m-bridge" transform="translate(253 288)"><circle r="17" fill="#B82235" stroke="#FF8585" stroke-width="2"/><text y="4.5" text-anchor="middle" font-family="Outfit" font-size="11" font-weight="600" fill="#fff">15 t</text></g>
        <text x="276" y="276" font-family="Outfit" font-size="11" fill="#FF8585">Puente</text><text x="276" y="290" font-family="Outfit" font-size="11" fill="#FF8585">El Estero</text>` : ''}
      ${showSkolta ? `<g transform="translate(164 222)"><circle r="13" fill="#3a2e10" stroke="#F6B23E" stroke-width="2"/><path d="M-6 5 L-1 -5 L2 0 L4 -3 L8 5Z" fill="#F6B23E"/></g>
        <text x="144" y="226" text-anchor="end" font-family="Outfit" font-size="11" fill="#F6B23E">Cuesta Quilmo</text>` : ''}
      <g id="m-dest" transform="translate(232 352)"><circle r="9" fill="#0FA79A" stroke="#fff" stroke-width="2"/></g>
      <text x="246" y="370" font-family="Outfit" font-size="12" fill="#E6E9EC">Planta El Carmen</text>
      ${extra}
    </svg>`;
  }

  // ---------- Pantallas ----------
  const truck = { name: 'Tractocamión', plate: 'BXTR-21', measures: '4,2 × 2,6 × 18,6 m', weight: '45 t', axles: '5 ejes', trailer: 'Semirremolque' };
  // Partes de la ruta Skolta (0 a 1): donde parte la navegación, donde está la Cuesta Quilmo
  // y donde el camión se detiene y aparece la emergencia. La ruta mide 32 km.
  const START_AT = 0.4;
  const QUILMO_AT = 0.516;
  const STOP_AT = 0.78;
  const ROUTE_KM = 32;
  const GRADE_KM = 3; // la alerta de la cuesta se da a 3 km
  const JAM_KM = 6; // el tráfico detenido se reporta a 6 km
  let incidentKind = 'Falla grave';
  const truckSide = `
    <svg viewBox="0 0 300 124" style="width:100%;height:auto" aria-label="Tractocamión de 4,2 metros de alto y 18,6 metros de largo">
      <path d="M0 92 H300" stroke="#417886" stroke-width="2"/>
      <rect x="20" y="20" width="176" height="54" rx="5" fill="#0F637A" stroke="#13B3A5"/>
      <path d="M200 74 V44 Q200 36 208 36 H232 L248 54 V74 Z" fill="#13748F" stroke="#13B3A5"/>
      <path d="M212 42 H230 L242 55 H212 Z" fill="#083446" stroke="#13B3A5" stroke-width="0.8"/>
      ${[36, 56, 76, 180].map((x) => `<circle cx="${x}" cy="82" r="9" fill="#1A1D21" stroke="#B6BBC2" stroke-width="2"/>`).join('')}
      <circle cx="232" cy="82" r="9" fill="#1A1D21" stroke="#B6BBC2" stroke-width="2"/>
      <g stroke="#CEDC00" stroke-width="1.4" fill="none">
        <path d="M266 20 V92 M261 20 H271 M261 92 H271"/>
        <path d="M20 106 H248 M20 101 V111 M248 101 V111"/>
      </g>
      <g font-family="Outfit, sans-serif" font-size="12" fill="#CEDC00">
        <text x="272" y="60">4,2 m</text>
        <text x="134" y="122" text-anchor="middle">18,6 m</text>
      </g>
      <text x="108" y="52" text-anchor="middle" font-family="Outfit, sans-serif" font-size="14" fill="#fff" opacity="0.9">45 t · 5 ejes</text>
    </svg>`;

  const screens = [
    // 1 · Portada
    {
      story: true,
      render: () => `
        <section class="screen story">
          <div class="story-body">
            <div class="wordmark">SKOLTA</div>
            <h1>La escolta digital del <strong>transporte pesado</strong></h1>
            <p class="lead">Guía, protege y monitorea a camiones y buses en ruta, con las medidas reales de cada vehículo.</p>
          </div>
          <button class="btn pulse" data-next>Comenzar<span class="btn__badge">${icon('next')}</span></button>
        </section>`,
      auto: 6000,
    },
    // 2 · El dolor
    {
      story: true,
      render: () => `
        <section class="screen story">
          <span class="eyebrow">El problema</span>
          <h2>Los GPS fueron hechos <strong>para autos</strong></h2>
          <svg class="scene" viewBox="0 0 340 150" aria-label="Un camión de 45 toneladas frente a un puente con límite de 15 toneladas">
            <path d="M0 108 H196" stroke="#417886" stroke-width="2"/>
            <path d="M196 108 L206 140 M330 108 L320 140" stroke="#417886" stroke-width="2"/>
            <g stroke="#1d5466" stroke-width="2" fill="none" opacity="0.9"><path d="M206 128 q8 -4 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0"/><path d="M212 138 q8 -4 16 0 t16 0 t16 0 t16 0 t16 0 t16 0"/></g>
            <g stroke="#B6BBC2" fill="none" stroke-linejoin="round">
              <path d="M196 108 H340" stroke-width="4"/>
              <path d="M196 108 L214 74 H322 L340 108" stroke-width="2.5"/>
              <path d="M214 74 L232 108 L250 74 L268 108 L286 74 L304 108 L322 74" stroke-width="1.6" opacity="0.8"/>
            </g>
            <path d="M178 108 V58" stroke="#B6BBC2" stroke-width="2.5"/>
            <g transform="translate(178 38)"><circle r="21" fill="#fff" stroke="#B82235" stroke-width="5"/><text y="5.5" text-anchor="middle" font-family="Outfit" font-weight="700" font-size="15" fill="#1A1D21">15t</text></g>
            <g transform="translate(14 54)"><rect x="0" y="0" width="98" height="40" rx="5" fill="#0F637A" stroke="#13B3A5"/><path d="M102 40 V18 Q102 12 108 12 H124 L136 26 V40 Z" fill="#13748F" stroke="#13B3A5"/><circle cx="16" cy="46" r="8" fill="#1A1D21" stroke="#B6BBC2" stroke-width="2"/><circle cx="34" cy="46" r="8" fill="#1A1D21" stroke="#B6BBC2" stroke-width="2"/><circle cx="92" cy="46" r="8" fill="#1A1D21" stroke="#B6BBC2" stroke-width="2"/><circle cx="124" cy="46" r="8" fill="#1A1D21" stroke="#B6BBC2" stroke-width="2"/><text x="50" y="25" text-anchor="middle" font-family="Outfit" font-size="14" fill="#fff">45 t</text></g>
          </svg>
          <ul class="list">
            <li><span class="badge-icon bad">${icon('route')}</span><p>Mandan camiones por puentes con límite de peso, pasos bajo nivel y calles prohibidas.</p></li>
            <li><span class="badge-icon bad">${icon('alert')}</span><p>El conductor se entera cuando ya está ahí<span>Maniobras peligrosas, multas, daños y atrasos.</span></p></li>
            <li><span class="badge-icon bad">${icon('building')}</span><p>La empresa no sabe qué pasa con su flota<span>Ante una emergencia, la información llega tarde y dispersa.</span></p></li>
          </ul>
          <button class="btn" data-next>Siguiente<span class="btn__badge">${icon('next')}</span></button>
        </section>`,
      auto: 9000,
    },
    // 3 · La pregunta
    {
      story: true,
      render: () => `
        <section class="screen story">
          <div class="story-body">
            <span class="eyebrow">La pregunta correcta</span>
            <h1>¿Puede <strong>este</strong> camión pasar por aquí?</h1>
            <p class="lead">No basta con la ruta más rápida. Skolta revisa si este vehículo, con sus medidas y su carga, puede transitar de forma segura, legal y controlada.</p>
            <div class="card accent row">
              <span class="badge-icon">${icon('shield')}</span>
              <p style="color:var(--niebla)">Perfil del vehículo + base territorial de puntos críticos + comunidad de conductores.</p>
            </div>
          </div>
          <button class="btn pulse" data-next>Ver cómo funciona<span class="btn__badge">${icon('next')}</span></button>
        </section>`,
      auto: 8000,
    },
    // 4 · Demo: vehículo
    {
      render: () => `
        <section class="screen">
          <span class="eyebrow">Demo · App del conductor</span>
          <h2 style="margin:6px 0 16px">Su camión, <strong>sus medidas</strong></h2>
          <div class="card strong stack">
            <div class="row">
              <span class="badge-icon">${icon('truck')}</span>
              <div><div class="route-title">${truck.name} · ${truck.plate}</div><div class="muted">${truck.trailer} · carga general</div></div>
            </div>
            ${truckSide}
            <div class="row" style="gap:8px;flex-wrap:wrap">
              <span class="chip">Ancho 2,6 m</span><span class="chip">Giro 12,5 m</span><span class="chip">Carga general</span>
            </div>
          </div>
          <p class="muted" style="margin-top:16px">Skolta usa estas medidas en cada ruta: alto, ancho, largo, peso, ejes, radio de giro y tipo de carga. Si algo no cabe o no soporta el peso, esa ruta no se ofrece.</p>
          <div class="grow"></div>
          <button class="btn pulse" data-next>Usar este vehículo<span class="btn__badge">${icon('next')}</span></button>
        </section>`,
      auto: 7000,
      voice: 'vehiculo',
    },
    // 5 · Demo: buscar destino
    {
      render: () => `
        <section class="screen">
          <div class="phone-ui">
            <div class="map-wrap">${mapSvg()}<span class="map-label">Mapa ilustrativo · Ñuble</span></div>
            <div class="overlay-top" style="padding-top:40px">
              <div class="search">${icon('search')}<span id="typed"></span><span class="caret"></span></div>
            </div>
            <div class="overlay-bottom">
              <div class="card strong row result" data-next id="result" style="opacity:0">
                <span class="badge-icon">${icon('pin')}</span>
                <div><div class="route-title">Planta El Carmen</div><div class="muted">El Carmen, Ñuble</div></div>
              </div>
            </div>
          </div>
        </section>`,
      enter: () => {
        const text = 'Planta El Carmen';
        const el = document.getElementById('typed');
        let i = 0;
        timer(() => {
          const tick = () => {
            if (!el.isConnected) return;
            el.textContent = text.slice(0, ++i);
            if (i < text.length) timer(tick, 70); else timer(() => { const r = document.getElementById('result'); if (r) { r.style.opacity = '1'; r.classList.add('alert-pop'); } }, 250);
          };
          tick();
        }, 400);
      },
      auto: 4500,
    },
    // 6 · Demo: comparar rutas
    {
      render: () => `
        <section class="screen">
          <div class="phone-ui">
            <div class="map-wrap">${mapSvg({ showGps: true, showSkolta: true })}<span class="map-label">Mapa ilustrativo · Ñuble</span></div>
            <div class="overlay-bottom">
              <div class="card bad stack alert-pop">
                <div class="row between"><span class="route-title">GPS común · 38 min</span><span class="chip bad">${icon('x')} No apta</span></div>
                <p class="small" style="color:var(--niebla)">Cruza el <b>Puente El Estero, máximo 15 t</b>. Su camión pesa 45 t.</p>
              </div>
              <div class="card accent stack alert-pop route-card" data-next style="animation-delay:.25s">
                <div class="row between"><span class="route-title">Ruta Skolta · 44 min</span><span class="chip ok">${icon('check')} Compatible</span></div>
                <p class="small compact-hide" style="color:var(--niebla)">Evita el puente. 1 alerta preventiva en el camino: Cuesta Quilmo.</p>
                <button class="btn pulse" data-next style="min-height:50px">Iniciar navegación<span class="btn__badge">${icon('arrow')}</span></button>
              </div>
            </div>
          </div>
        </section>`,
      voice: 'rutas',
      auto: 11000,
    },
    // 7 · Demo: navegación con alertas y Ruta Viva
    {
      render: () => `
        <section class="screen">
          <div class="phone-ui">
            <div class="map-wrap">${mapSvg({ showGps: true, showSkolta: true, dimGps: true })}
              <svg class="map map-top" viewBox="0 30 400 700" preserveAspectRatio="xMidYMin meet" aria-hidden="true"><g id="truck"><circle r="13" fill="#0FA79A" stroke="#fff" stroke-width="2.5"/><path d="M0 -7 L5 5 L0 2 L-5 5Z" fill="#fff"/></g></svg>
            </div>
            <div class="overlay-top" style="padding-top:6px">
              <div class="nav-head"><span class="nav-tile">${icon('arrow')}</span><div><div class="dist" id="nav-dist">19,2 km</div><div class="small" id="nav-road">Siga por la ruta N-59-Q</div></div></div>
            </div>
            <button class="panic" id="panic" aria-label="Botón de pánico">SOS</button>
            <div class="overlay-bottom" id="nav-cards">
              <div class="nav-foot"><div><b id="eta">26 min</b> <span class="muted">· llega 10:24</span></div><span class="chip ok">${icon('shield')} Ruta compatible</span></div>
            </div>
          </div>
        </section>`,
      enter: () => {
        const path = document.getElementById('skolta');
        const truckEl = document.getElementById('truck');
        const total = path.getTotalLength();
        const duration = 17000;
        const start = performance.now();
        let shownGrade = false;
        let shownRadio = false;
        const cards = document.getElementById('nav-cards');
        const add = (html) => { const div = document.createElement('div'); div.innerHTML = html; cards.prepend(div.firstElementChild); };
        const frame = (now) => {
          if (!truckEl.isConnected) return;
          const progress = Math.min(1, (now - start) / duration);
          const t = START_AT + (STOP_AT - START_AT) * progress;
          const p = path.getPointAtLength(total * t);
          const q = path.getPointAtLength(Math.min(total, total * t + 1));
          const angle = Math.atan2(q.y - p.y, q.x - p.x) * 180 / Math.PI + 90;
          truckEl.setAttribute('transform', `translate(${p.x} ${p.y}) rotate(${angle})`);
          document.getElementById('nav-dist').textContent = `${(ROUTE_KM * (1 - t)).toFixed(1).replace('.', ',')} km`;
          document.getElementById('eta').textContent = `${Math.max(1, Math.round(44 * (1 - t)))} min`;
          if (t > QUILMO_AT - GRADE_KM / ROUTE_KM && !shownGrade) {
            shownGrade = true;
            add(`<div class="card warn row alert-pop"><span class="badge-icon warn">${icon('mountain')}</span><div><div class="route-title">En ${GRADE_KM} km · Cuesta Quilmo</div><div class="muted">Pendiente fuerte y curva. Use freno motor.</div></div></div>`);
            say('cuesta');
          }
          if (t > STOP_AT - JAM_KM / ROUTE_KM && !shownRadio) {
            shownRadio = true;
            cards.firstElementChild?.remove();
            add(`<div class="card strong stack alert-pop"><div class="row"><span class="badge-icon">${icon('radio')}</span><div><div class="eyebrow">Ruta Viva · Adelante</div><div class="route-title">Tráfico detenido a ${JAM_KM} km</div><div class="muted small">Reportado por «Halcón del Itata» · 3 conductores lo confirman</div></div></div><div class="row" data-answer><button class="btn ghost" style="min-height:44px" data-action="still-there">Sigue ahí</button><button class="btn ghost" style="min-height:44px" data-action="gone">Ya no está</button></div></div>`);
            say('ruta-viva');
          }
          if (progress < 1) requestAnimationFrame(frame);
          else {
            const panic = document.getElementById('panic');
            panic.classList.add('ready');
            cards.firstElementChild?.remove();
            add(`<div class="card accent row alert-pop"><span class="badge-icon bad">${icon('alert')}</span><div><div class="route-title">¿Y si ocurre una emergencia?</div><div class="muted small">Toque el botón SOS.</div></div></div>`);
          }
        };
        requestAnimationFrame(frame);
        document.getElementById('panic').addEventListener('click', () => go(+1));
      },
      auto: 19500,
    },
    // 8 · Demo: botón de pánico
    {
      render: () => `
        <section class="screen">
          <span class="eyebrow" style="color:var(--coral)">Botón de pánico</span>
          <h2 style="margin:6px 0 14px">¿Qué está pasando?</h2>
          <div class="choices" id="choices">
            ${[['crash', 'Accidente', 'accidente'], ['heart', 'Salud', 'salud'], ['flame', 'Incendio', 'incendio'], ['hand', 'Asalto o robo', 'asalto'], ['wrench', 'Falla grave', 'falla'], ['block', 'Obstáculo crítico', 'obstaculo']]
              .map(([i, label, line]) => `<button class="choice" data-kind="${label}" data-line="${line}">${icon(i)}${label}</button>`).join('')}
          </div>
          <div id="sheet" class="stack" style="margin-top:14px"></div>
          <div class="grow"></div>
          <p class="muted small" style="margin-top:12px">Skolta no reemplaza a los servicios de emergencia: acelera la coordinación y deja todo registrado.</p>
        </section>`,
      enter: () => {
        const pick = (button) => {
          document.querySelectorAll('.choice').forEach((b) => b.classList.toggle('pick', b === button));
          const kind = button.dataset.kind;
          incidentKind = kind;
          const now = new Date();
          const hour = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
          document.getElementById('sheet').innerHTML = `
            <div class="card strong stack alert-pop">
              <div class="row between"><span class="route-title">Ficha automática</span><span class="chip bad">${kind}</span></div>
              <dl class="facts">
                <dt>Vehículo</dt><dd>${truck.name} · ${truck.plate}</dd>
                <dt>Conductor</dt><dd>Juan Pérez · Transportes Ñuble</dd>
                <dt>Ubicación</dt><dd>Ruta N-59-Q, km 9 · sentido sur</dd>
                <dt>Hora</dt><dd>${hour}</dd>
              </dl>
              <div class="sent">${icon('check')} Aviso enviado al panel de la empresa</div>
              <div class="row compact-hide" data-call><button class="btn danger" style="min-height:48px" data-action="call">${icon('phone')} Llamar a la empresa</button></div>
            </div>
            <button class="btn pulse" data-next>Ver lo que ve la empresa<span class="btn__badge">${icon('next')}</span></button>`;
          say(`panico-${button.dataset.line}`);
        };
        document.querySelectorAll('.choice').forEach((b) => b.addEventListener('click', () => pick(b)));
        if (vitrina) timer(() => pick(document.querySelector('[data-kind="Falla grave"]')), 1800);
      },
      auto: 8000,
    },
    // 9 · Demo: panel empresa
    {
      render: () => `
        <section class="screen">
          <span class="eyebrow">Panel de la empresa</span>
          <h2 style="margin:6px 0 14px">La flota, <strong>en vivo</strong></h2>
          <div class="kpis">
            <div class="kpi"><div class="num">4</div><div class="muted small">en ruta</div></div>
            <div class="kpi bad"><div class="num">1</div><div class="muted small">incidente</div></div>
            <div class="kpi"><div class="num">0</div><div class="muted small">rutas no aptas</div></div>
          </div>
          <div class="fleet-map">
            ${mapSvg({ showSkolta: true, view: '40 60 330 330', fit: 'xMidYMid slice', extra: `
              <g transform="translate(306 150)"><circle r="9" fill="#0FA79A" stroke="#fff" stroke-width="2"/></g>
              <g transform="translate(110 250)"><circle r="9" fill="#0FA79A" stroke="#fff" stroke-width="2"/></g>
              <g transform="translate(318 296)"><circle r="9" fill="#0FA79A" stroke="#fff" stroke-width="2"/></g>
              <g id="incident"><circle r="22" fill="#B82235" opacity="0.3"><animate attributeName="r" values="12;30;12" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.5;0;0.5" dur="1.6s" repeatCount="indefinite"/></circle><circle r="10" fill="#B82235" stroke="#fff" stroke-width="2"/></g>` })}
          </div>
          <div class="card incident stack alert-pop">
            <div class="row between"><span class="route-title">BXTR-21 · ${incidentKind}</span><span class="chip bad">Ahora</span></div>
            <p class="small">Juan Pérez · Ruta N-59-Q, km 9 · sentido sur</p>
            <div class="row" style="gap:8px;flex-wrap:wrap"><span class="chip ok">${icon('check')} Conductor contactado</span><span class="chip warn">Grúa en camino</span></div>
          </div>
          <button class="btn" data-next style="margin-top:12px">Siguiente<span class="btn__badge">${icon('next')}</span></button>
        </section>`,
      enter: () => {
        // El incidente queda justo donde se detuvo el camión en la navegación.
        const path = document.getElementById('skolta');
        const p = path.getPointAtLength(path.getTotalLength() * STOP_AT);
        document.getElementById('incident').setAttribute('transform', `translate(${p.x} ${p.y})`);
      },
      voice: 'panel',
      auto: 8000,
    },
    // 10 · Las capas
    {
      story: true,
      render: () => `
        <section class="screen story">
          <span class="eyebrow">Una plataforma integrada</span>
          <h2>Cuatro capas, <strong>conectadas</strong></h2>
          <div class="layers">
            <div class="layer">${icon('route')}<b>Navegación compatible</b><span>Rutas según medidas, peso, carga y restricciones del territorio.</span></div>
            <div class="layer" style="animation-delay:.1s">${icon('shield')}<b>Seguridad en ruta</b><span>Alertas preventivas, botón de pánico y ficha automática.</span></div>
            <div class="layer" style="animation-delay:.2s">${icon('building')}<b>Monitoreo empresarial</b><span>Flota en vivo, incidentes, viajes y reportes.</span></div>
            <div class="layer" style="animation-delay:.3s">${icon('users')}<b>Comunidad profesional</b><span>Ruta Viva, perfil verificado del conductor y formación.</span></div>
          </div>
          <button class="btn" data-next>Siguiente<span class="btn__badge">${icon('next')}</span></button>
        </section>`,
      auto: 9000,
    },
    // 11 · Cierre
    {
      story: true,
      render: () => `
        <section class="screen story" style="text-align:center;align-items:center">
          <div class="story-body" style="align-items:center">
            <div class="wordmark">SKOLTA</div>
            <h2>Piloto en <strong>Ñuble</strong></h2>
            <p class="lead">Rutas compatibles, alertas preventivas, reportes de conductores, panel de empresa y botón de pánico, validados en terreno.</p>
          </div>
          <button class="btn" data-restart>Ver de nuevo<span class="btn__badge">${icon('restart')}</span></button>
          <p class="disclaimer">Maqueta ilustrativa: mapa, nombres y datos simulados.</p>
        </section>`,
      auto: 8000,
    },
  ];

  // ---------- Motor de la maqueta ----------
  const params = new URLSearchParams(location.search);
  const vitrina = params.has('vitrina');
  const app = document.getElementById('app');
  app.classList.toggle('vitrina', vitrina);
  // ?paso=N abre directo en la pantalla N (por ejemplo, ?paso=4 empieza en la demo).
  let index = Math.min(screens.length - 1, Math.max(0, (parseInt(params.get('paso'), 10) || 1) - 1));
  let timers = [];

  function timer(fn, ms) { timers.push(setTimeout(fn, ms)); }
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }

  function render() {
    clearTimers();
    stopVoice();
    const screen = screens[index];
    app.innerHTML = `
      <header class="topbar">
        <div class="brand">SKOLTA</div>
        <div class="progress" aria-label="Paso ${index + 1} de ${screens.length}">${screens.map((_, i) => `<span class="${i <= index ? 'on' : ''}"></span>`).join('')}</div>
        <button class="icon-btn" id="sound" aria-label="${soundOn ? 'Silenciar voz' : 'Activar voz'}">${icon(soundOn ? 'sound' : 'mute')}</button>
        <button class="icon-btn" data-restart aria-label="Volver al inicio">${icon('restart')}</button>
      </header>
      ${screen.render()}
      ${vitrina ? '<span class="hint">Modo vitrina · toque para pausar</span>' : ''}`;
    screen.enter?.();
    if (screen.voice) timer(() => say(screen.voice), 500);
    if (vitrina && !paused && screen.auto) timer(() => go(+1, true), screen.auto);
  }

  function go(step, loop = false) {
    const next = index + step;
    if (next >= screens.length) { if (loop) { index = 0; render(); } return; }
    if (next < 0) return;
    index = next;
    render();
  }

  // Respuestas simuladas de los botones que no cambian de pantalla.
  const actions = {
    call(button) {
      button.disabled = true;
      button.innerHTML = `${icon('phone')} Llamando a la central…`;
      timer(() => {
        const row = button.closest('[data-call]');
        if (row) row.innerHTML = `<span class="chip ok">${icon('check')} En línea con la central de Transportes Ñuble</span>`;
      }, 1400);
    },
    'still-there'(button) {
      button.closest('[data-answer]').outerHTML = `<p class="small sent">${icon('check')} Gracias. Ya se avisa a los conductores que vienen atrás.</p>`;
    },
    gone(button) {
      button.closest('[data-answer]').outerHTML = `<p class="small sent">${icon('check')} Gracias. Si otro conductor lo confirma, el aviso se retira.</p>`;
    },
  };

  // Un solo manejador para toda la app: también funciona con botones que aparecen después.
  let paused = false;
  app.addEventListener('click', (event) => {
    const target = event.target.closest('[data-next], [data-restart], [data-action], #sound');
    if (target?.matches('[data-next]')) { go(+1); return; }
    if (target?.matches('[data-restart]')) { index = 0; render(); return; }
    if (target?.id === 'sound') { soundOn = !soundOn; if (!soundOn) stopVoice(); render(); return; }
    if (target?.dataset.action) { actions[target.dataset.action]?.(target); return; }
    // En modo vitrina corre solo; un toque en otra parte lo pausa y otro lo reanuda.
    if (vitrina && !event.target.closest('button')) {
      paused = !paused;
      if (paused) clearTimers(); else render();
    }
  });

  // Deslizar a la izquierda o derecha también avanza o retrocede.
  let touchX = null;
  app.addEventListener('touchstart', (event) => { touchX = event.touches[0].clientX; }, { passive: true });
  app.addEventListener('touchend', (event) => {
    if (touchX === null) return;
    const dx = event.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 70) go(dx < 0 ? +1 : -1);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') go(+1);
    if (event.key === 'ArrowLeft') go(-1);
  });

  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    // Si llega una versión nueva mientras está abierta, recarga una vez para quedar entera en la nueva.
    const hadVersion = !!navigator.serviceWorker.controller;
    let reloading = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (hadVersion && !reloading) { reloading = true; location.reload(); }
    });
    navigator.serviceWorker.register('sw.js').catch(() => { /* sin caché, igual funciona en línea */ });
  }
  render();
})();
