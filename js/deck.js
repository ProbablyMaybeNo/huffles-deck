/* THE HUFFLES — Archive Deck runtime
   - scales the fixed 1920x1080 stage to fit any viewport
   - slide navigation (arrows / click / taskbar buttons)
   - in-world clock + slide counter
*/
(function () {
  const stage = document.getElementById("stage");
  const viewport = document.getElementById("viewport");

  function fit() {
    const sx = viewport.clientWidth / 1920;
    const sy = viewport.clientHeight / 1080;
    const s = Math.min(sx, sy);
    stage.style.transform = `scale(${s})`;
  }
  window.addEventListener("resize", fit);
  fit();

  // ---- Inject shared desktop furniture (icon rail + taskbar) ----
  const ICONS = [
    ["recycle.png", "Recycle Bin"],
    ["network.png", "HRUMF&nbsp;Net"],
    ["folder_file.png", "CASE&nbsp;FILES"],
    ["keys.png", "CLEARANCE"],
    ["world.png", "THE&nbsp;HAPPENING"],
    ["video.png", "FOUND&nbsp;FOOTAGE"],
    ["disk.png", "COLD&nbsp;STORAGE"],
    ["internet.png", "DOLOS&nbsp;WATCH"],
  ];
  const ICON_BASE = "assets/icons/";
  function iconRail() {
    const rail = document.createElement("div");
    rail.className = "desktop-icons";
    rail.innerHTML = ICONS.map(([img, label]) =>
      `<div class="dicon"><img src="${ICON_BASE}${img}" alt=""><span>${label}</span></div>`
    ).join("");
    return rail;
  }
  function taskbar() {
    const tb = document.createElement("div");
    tb.className = "taskbar";
    tb.innerHTML = `
      <button class="start-btn"><img src="${ICON_BASE}computer2.png" alt="">Start</button>
      <button class="task-window"><img src="${ICON_BASE}folder_file.png" alt=""><span class="tw-label">THE HUFFLES — Classified Cache</span></button>
      <div class="tray">
        <div class="nav-group">
          <button data-nav="prev">&#9664; Prev</button>
          <button data-nav="next">Next &#9654;</button>
        </div>
        <span class="counter">01 / 01</span>
        <span class="clock">12:00 PM</span>
      </div>`;
    return tb;
  }
  document.querySelectorAll('.slide[data-chrome="desktop"]').forEach(s => {
    if (!s.querySelector(".desktop-icons")) s.prepend(iconRail());
    if (!s.querySelector(".taskbar")) s.appendChild(taskbar());
  });

  // build voice-log waveforms
  document.querySelectorAll(".waveform").forEach((wf) => {
    let html = "";
    for (let k = 0; k < 56; k++) {
      const h = 22 + Math.round(Math.abs(Math.sin(k * 0.6) + Math.sin(k * 0.27)) * 40);
      html += `<i style="height:${Math.min(100, h)}%;--i:${k % 14}"></i>`;
    }
    wf.innerHTML = html;
  });

  const slides = Array.from(document.querySelectorAll(".slide"));
  let i = 0;

  function show(n) {
    i = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach((s, k) => s.classList.toggle("active", k === i));
    // restart entrance animations on the slide we're landing on
    if (!document.body.classList.contains("static")) {
      slides[i].querySelectorAll(".anim-line,.anim-beat,.crt-on").forEach((el) => {
        el.style.animationName = "none"; void el.offsetWidth; el.style.animationName = "";
      });
    }
    document.querySelectorAll(".counter").forEach(c => {
      c.textContent = String(i + 1).padStart(2, "0") + " / " + String(slides.length).padStart(2, "0");
    });
    // update the active task-window title to the slide's label
    const label = slides[i].getAttribute("data-task") || "THE HUFFLES — Classified Cache";
    document.querySelectorAll(".task-window .tw-label").forEach(el => el.textContent = label);
    location.hash = "s" + (i + 1);
  }
  function next() { show(i + 1); }
  function prev() { show(i - 1); }

  document.addEventListener("keydown", (e) => {
    if (["ArrowRight", "PageDown", " ", "Enter"].includes(e.key)) { next(); e.preventDefault(); }
    else if (["ArrowLeft", "PageUp", "Backspace"].includes(e.key)) { prev(); e.preventDefault(); }
    else if (e.key === "Home") { show(0); }
    else if (e.key === "End") { show(slides.length - 1); }
  });

  // click anywhere to advance; click the Prev control (or anything marked prev) to go back
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-nav='prev']")) prev();
    else next();
  });

  // in-world clock — frozen-ish archive time, ticks for life
  function tick() {
    const d = new Date();
    const hh = String(((d.getHours() + 11) % 12) + 1);
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ap = d.getHours() >= 12 ? "PM" : "AM";
    document.querySelectorAll(".clock").forEach(c => c.textContent = `${hh}:${mm} ${ap}`);
  }
  setInterval(tick, 10000); tick();

  // deep-link support
  const m = location.hash.match(/^#s(\d+)$/);
  show(m ? parseInt(m[1], 10) - 1 : 0);

  window.__deck = { show, next, prev, count: slides.length };
})();
