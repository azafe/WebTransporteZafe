// Ejecutar cuando el DOM está listo
window.addEventListener("DOMContentLoaded", () => {
  // =====================
  // Datos editables
  // =====================
  const DATA = {
    kpisHero: [
      { label: "Disponibilidad meta", value: "≥ 95%" },
      { label: "Flota objetivo",      value: "6 camiones" },
      { label: "Modelo",              value: "Contrato anual" },
      { label: "Base",                value: "Zafra + Fijos" }
    ],
    flotaTabla: [
      { camion: "Mercedes Benz 1620", anio: "2006", servicio: "Por viaje" },
      { camion: "Mercedes Benz Atego 1726", anio: "2021", servicio: "Por viaje" },
      { camion: "Ford Cargo 1831", anio: "2007", servicio: "Alquiler" },
      { camion: "VW Constellation 17280", anio: "2017", servicio: "Alquiler" }
    ],
    plan12m: [
      { fase: "Q1", texto: "Carpeta institucional (web/PDF), lista de cuentas objetivo y requisitos." },
      { fase: "Q2", texto: "Auditoría de mantenimiento/seguridad y registros digitalizados. Postular a licitaciones." },
      { fase: "Q3", texto: "Cerrar 1er contrato anual. Ajuste operativo (SLAs, reporting, GPS, KPIs)." },
      { fase: "Q4", texto: "2º contrato o ampliación. Evaluar flota → objetivo 5–6 camiones." }
    ],
    kpisTabla: [
      ["Puntualidad", "≥ 98%"],
      ["Incidencias / 100k km", "↓ continuo"],
      ["Tiempo medio en taller", "↓ 20%"],
      ["Satisfacción cliente", "≥ 9/10"]
    ],
    proximos30: [
      "Aprobar horizonte familiar.",
      "Finalizar carpeta institucional (landing + PDF).",
      "Cerrar lista de 10 empresas objetivo y sus requisitos.",
      "Agendar presentaciones y visitas iniciales."
    ],
    progresoEsperado: 60
  };

  // ===== FLEET (galería) =====
  // Usa estos nombres si renombraste los archivos (recomendado).
  const FLEET = [
    {
      nombre: "Mercedes Benz 1620",
      anio: 2006,
      tipo: "Camión cañero",
      carga: "Transporte de caña, granel y materiales.",
      img: "Images/mb1620.jpg"
    },
    {
      nombre: "Mercedes Benz Atego 1726",
      anio: 2021,
      tipo: "Camión multipropósito",
      carga: "Granos, azúcar, pellet, fletes regionales.",
      img: "Images/Atego1726.jpg"
    },
    {
      nombre: "Ford Cargo 1831",
      anio: 2007,
      tipo: "Camión de apoyo",
      carga: "Materiales industriales y cargas medianas.",
      img: "Images/acoplado-canero.jpg"
    },
    {
      nombre: "VW Constellation 17.280",
      anio: 2017,
      tipo: "Camión con semirremolque 14,5 m",
      carga: "Contenedores, fertilizantes y palletizados.",
      img: "Images/VW17280.jpg"
    }
  ];

  // ==============
  // Helpers
  // ==============
  const $  = (s, el=document) => el.querySelector(s);
  const $$ = (s, el=document) => [...el.querySelectorAll(s)];

  // Año footer
  const y = $("#y");
  if (y) y.textContent = new Date().getFullYear();

  // KPIs Hero
  const kpisHero = $("#kpisHero");
  if (kpisHero) {
    kpisHero.innerHTML = DATA.kpisHero
      .map(k => `<div class="kpi"><div class="label">${k.label}</div><b>${k.value}</b></div>`)
      .join("");
  }

  // Tabla flota (si seguís usando la tabla en el Plan)
  const flotaBody = $("#flotaTable tbody");
  if (flotaBody) {
    flotaBody.innerHTML = DATA.flotaTabla
      .map(f => `<tr><td>${f.camion}</td><td>${f.anio}</td><td>${f.servicio}</td></tr>`)
      .join("");
  }

  // Timeline Plan
  const timeline = $("#timeline");
  if (timeline) {
    timeline.innerHTML = DATA.plan12m
      .map(p => `<div class="step"><b>${p.fase}</b> • ${p.texto}</div>`)
      .join("");
  }

  // KPIs tabla
  const kpiTable = $("#kpiTable tbody");
  if (kpiTable) {
    kpiTable.innerHTML = DATA.kpisTabla
      .map(([k, v]) => `<tr><td>${k}</td><td><b>${v}</b></td></tr>`)
      .join("");
  }

  // Próximos 30 días
  const prox = $("#prox30");
  if (prox) prox.innerHTML = DATA.proximos30.map(i => `<li>${i}</li>`).join("");

  // Progreso animado
  const bar = $("#bar");
  if (bar) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          bar.style.width = DATA.progresoEsperado + "%";
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(bar);
  }

  // ===== Render de la galería de flota =====
  const fleetGrid = $("#fleetGrid");
  if (fleetGrid) {
    fleetGrid.innerHTML = FLEET.map(f => `
      <div class="fleet-card">
        <span class="fleet-tag">${f.anio}</span>
        <img src="${f.img}" alt="${f.nombre}" class="fleet-img" />
        <div class="fleet-info">
          <h4>${f.nombre}</h4>
          <p><b>${f.tipo}</b></p>
          <p>${f.carga}</p>
        </div>
      </div>
    `).join("");
  }

  // Scroll suave
  $$('#menu a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      const t = $(id);
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior:"smooth", block:"start" }); }
      menu.classList.remove("open");
    });
  });

  // Menú activo por sección
  const sections = ["#proposito","#camino","#plan","#impacto","#compromiso","#flota"]
    .map(id => $(id))
    .filter(Boolean);

  const navLinks = $$("#menu a");
  const spy = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id = "#"+entry.target.id;
        navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href")===id));
      }
    });
  }, { rootMargin:"-50% 0px -45% 0px", threshold:0.01 });
  sections.forEach(s => spy.observe(s));

  // Botón imprimir
  const btnPrint = $("#btnPrint");
  if (btnPrint) btnPrint.addEventListener("click", ()=> window.print());

  // Botón toTop
  const toTop = $("#toTop");
  if (toTop) {
    window.addEventListener("scroll", ()=>{
      toTop.classList.toggle("show", window.scrollY > 600);
    });
    toTop.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));
  }

  // Menú hamburguesa
  const hamb = $("#hamb");
  const menu = $("#menu");
  if (hamb && menu) hamb.addEventListener("click", ()=> menu.classList.toggle("open"));
});