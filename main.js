// Builds the home slideshow, the Works grid and the larger view from paintings.js.
(function () {
  const IMG_DIR = "images/";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- Home page slideshow (photos listed under SLIDESHOW in paintings.js) ----
  const hero = document.getElementById("hero");
  if (hero && typeof SLIDESHOW !== "undefined") {
    const caption = document.getElementById("hero-caption");
    SLIDESHOW.forEach((s, i) => {
      const img = document.createElement("img");
      img.src = IMG_DIR + "commissions/" + s.image;
      img.alt = (s.caption || "Painting") + " by Mark Sherman";
      img.className = "hero-slide" + (i === 0 ? " is-active" : "");
      img.loading = i === 0 ? "eager" : "lazy";
      hero.appendChild(img);
    });
    let current = 0;
    const show = n => {
      const slides = hero.querySelectorAll(".hero-slide");
      if (!slides.length) return;
      slides[current].classList.remove("is-active");
      current = (n + slides.length) % slides.length;
      slides[current].classList.add("is-active");
      if (caption) caption.textContent = SLIDESHOW[current].caption || "";
    };
    show(0);
    if (!reduceMotion && SLIDESHOW.length > 1) setInterval(() => show(current + 1), 5500);
  }

  // ---- Works gallery and full-screen viewer ----
  const grid = document.getElementById("grid");
  const lb = document.getElementById("lightbox");
  const priceText = p => (p.status === "sold" ? "Sold" : p.price || "");
  let shown = 0;

  function openPainting(i) {
    shown = (i + PAINTINGS.length) % PAINTINGS.length;
    const p = PAINTINGS[shown];
    const img = document.getElementById("lb-img");
    img.src = IMG_DIR + p.image;
    img.alt = p.title + ", watercolor by Mark Sherman";
    document.getElementById("lb-title").textContent = p.title;
    document.getElementById("lb-meta").textContent = [p.size, priceText(p)].filter(Boolean).join(" · ");
    const buy = document.getElementById("lb-buy");
    buy.href = p.etsy || "#";
    buy.hidden = p.status === "sold" || !p.etsy;
    if (!lb.open) lb.showModal();
  }

  if (grid && typeof PAINTINGS !== "undefined") {
    PAINTINGS.forEach((p, i) => {
      const btn = document.createElement("button");
      btn.className = "gallery-item";
      btn.setAttribute("aria-label", p.title + ", see larger");
      const img = document.createElement("img");
      img.src = IMG_DIR + p.image;
      img.alt = p.title + ", watercolor by Mark Sherman";
      img.loading = i < 4 ? "eager" : "lazy";
      btn.appendChild(img);
      btn.addEventListener("click", () => openPainting(i));
      grid.appendChild(btn);
    });
  }

  if (lb) {
    document.getElementById("lightbox-close").addEventListener("click", () => lb.close());
    document.getElementById("lb-prev").addEventListener("click", () => openPainting(shown - 1));
    document.getElementById("lb-next").addEventListener("click", () => openPainting(shown + 1));
    lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
    document.addEventListener("keydown", e => {
      if (!lb.open) return;
      if (e.key === "ArrowLeft") openPainting(shown - 1);
      if (e.key === "ArrowRight") openPainting(shown + 1);
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
