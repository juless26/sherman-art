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

  // ---- Works grid ----
  const grid = document.getElementById("grid");
  const lb = document.getElementById("lightbox");
  const priceText = p => (p.status === "sold" ? "Sold" : p.price || "");

  function openPainting(p) {
    const img = document.getElementById("lb-img");
    img.src = IMG_DIR + p.image;
    img.alt = p.title + ", watercolor by Mark Sherman";
    document.getElementById("lb-title").textContent = p.title;
    document.getElementById("lb-meta").textContent = [p.size, p.framed, priceText(p)].filter(Boolean).join(" · ");
    document.getElementById("lb-desc").textContent = p.description || "";
    const buy = document.getElementById("lb-buy");
    buy.href = p.etsy || "#";
    buy.hidden = p.status === "sold" || !p.etsy;
    lb.showModal();
  }

  if (grid && typeof PAINTINGS !== "undefined") {
    PAINTINGS.forEach(p => {
      const fig = document.createElement("figure");
      fig.className = "work";
      const btn = document.createElement("button");
      btn.className = "work-image";
      btn.setAttribute("aria-label", "See " + p.title + " larger");
      const img = document.createElement("img");
      img.src = IMG_DIR + p.image;
      img.alt = p.title + ", watercolor by Mark Sherman";
      img.loading = "lazy";
      btn.appendChild(img);
      btn.addEventListener("click", () => openPainting(p));
      const cap = document.createElement("figcaption");
      const t = document.createElement("span");
      t.className = "work-title";
      t.textContent = p.title;
      cap.appendChild(t);
      [p.size, priceText(p)].filter(Boolean).forEach(line => {
        const m = document.createElement("span");
        m.className = "work-meta";
        m.textContent = line;
        cap.appendChild(m);
      });
      fig.append(btn, cap);
      grid.appendChild(fig);
    });
  }

  if (lb) {
    document.getElementById("lightbox-close").addEventListener("click", () => lb.close());
    lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
