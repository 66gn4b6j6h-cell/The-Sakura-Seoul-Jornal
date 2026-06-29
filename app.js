const moduleRoot = document.getElementById("module-root");

const views = {
  itinerary: renderItinerary,
  journey: () => placeholder("Journey is locked. City selection will use the approved design."),
  readiness: () => placeholder("Trip Readiness is locked."),
  stay: () => placeholder("Stay module is locked. Osaka Stay will be added as the next component."),
  budget: () => placeholder("Budget module will be designed later."),
  collections: () => placeholder("Collections module will be designed later."),
  tinyjoys: () => placeholder("Tiny Joys module will be designed later."),
  memories: () => placeholder("Memories module will be designed later."),
  wallet: () => placeholder("Wallet module will be designed later.")
};

document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    (views[btn.dataset.view] || renderItinerary)();
  });
});

function placeholder(text){ moduleRoot.innerHTML = `<div class="module"><div class="placeholder">${text}</div></div>`; }

function renderItinerary(){
  moduleRoot.innerHTML = `
    <section class="module">
      <div class="hero">
        <div class="hero-art"></div>
        <div>
          <div class="tag">Master Planner</div>
          <h1>October 8</h1>
          <div class="city">Osaka, Japan</div>
          <div class="script">Let’s have a beautiful day ♡</div>
          <div class="hero-meta">
            <span>Weather <b>23°C</b></span>
            <span>Sunrise <b>06:03</b></span>
            <span>Sunset <b>17:32</b></span>
          </div>
        </div>
        <div class="botanical"></div>
      </div>

      <div class="day-tabs">
        <button class="day-tab">Day 1<br><small>Oct 7</small></button>
        <button class="day-tab active">Day 2<br><small>Oct 8</small></button>
        <button class="day-tab">Day 3<br><small>Oct 9</small></button>
        <button class="day-tab">Day 4<br><small>Oct 10</small></button>
      </div>

      <div class="itinerary-grid">
        <div class="timeline">
          ${row("☕","Start the Day","Ease in gently",[["Morning Coffee","Coffee or matcha to begin"]],"")}
          ${row("⛩","Explore","Main places for today",[["Dotonbori","Street lights and canal energy"],["Shinsaibashi","Shopping and wandering"],["Hiraoka Park","A quiet green escape"]],gentle("💧","Hydrate","Take a moment for water before the next adventure."))}
          ${row("🍜","Pause & Recharge","Rest, eat and enjoy",[["Lunch","Vegetarian options nearby"],["Café Break","Pick a cozy spot"],["Tiny Joy","Something delightful"]],gentle("🍱","Pause to Eat","How about a leisurely lunch before you continue?"))}
          ${row("🏮","Wind Down","Evening adventures",[["Dotonbori Night Walk","Vibes and views"],["Canal Walk","Relax and enjoy the lights"],["Dinner","Vegan-friendly picks"]],gentle("🍰","Treat Yourselves","You saved a few dessert places nearby. Maybe today is the day."))}
        </div>

        <aside class="side-panel">
          <div class="panel-card"><h3>Day Summary</h3><div class="summary-list"><div class="summary-line"><span>Activities</span><b>7</b></div><div class="summary-line"><span>Gentle Pauses</span><b>3</b></div><div class="summary-line"><span>Cafés</span><b>2</b></div><div class="summary-line"><span>Train rides</span><b>2</b></div></div></div>
          <div class="panel-card"><h3>Today’s Map</h3><div class="map-box">Saved route preview</div></div>
          <div class="panel-card"><h3>Soft Note</h3><p>Keep the day flexible. The best memories might be the unplanned ones.</p></div>
        </aside>

        <div class="day-summary">
          <div><h3>Today’s Summary</h3><div class="stats"><span>Steps <b>18,700</b></span><span>Cafés <b>4</b></span><span>Train rides <b>2</b></span><span>Tiny joy <b>1</b></span></div></div>
          <div class="complete"><div class="seal">❧</div><div><h3>Day Complete</h3><p>See you tomorrow.</p></div></div>
        </div>
      </div>
    </section>`;
}

function row(icon, title, subtitle, items, pause){
  return `<div class="section-row"><div class="phase"><div class="phase-icon">${icon}</div><div><h3>${title}</h3><p>${subtitle}</p></div></div><div class="items">${items.map(i => `<div class="item"><span class="dot"></span><div><b>${i[0]}</b><small>${i[1]}</small></div><span>›</span></div>`).join("")}</div>${pause || `<div></div>`}</div>`;
}

function gentle(icon, title, text){
  return `<div class="gentle-pause"><div><div class="label">🌿 Gentle Pause</div><h4>${icon} ${title}</h4><p>${text}</p></div><button class="press-leaf" onclick="pressLeaf(this)"><span class="leaf"></span><span>Press Leaf</span></button></div>`;
}

function pressLeaf(btn){
  btn.querySelector("span:last-child").textContent = "Pressed";
  btn.style.opacity = ".72";
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js"));
}
renderItinerary();
