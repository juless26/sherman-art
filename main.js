// Builds the slideshow, the painting grid and the larger view from paintings.js.
(function () {
  const IMG_DIR = "images/paintings/";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- Slideshow (photos from images/commissions/) ----
  const hero = document.getElementById("hero");
  const heroCaption = document.getElementById("hero-caption");
  const featured = SLIDESHOW;
  featured.forEach((s, i) => {
    const img = document.createElement("img");
    img.src = "images/commissions/" + s.image;
    img.alt = (s.caption || "Painting") + " by Mark Sherman";
    img.className = "hero-slide" + (i === 0 ? " is-active" : "");
    img.loading = i === 0 ? "eager" : "lazy";
    hero.appendChild(img);
  });
  let current = 0;
  function showSlide(n) {
    const slides = hero.querySelectorAll(".hero-slide");
    if (!slides.length) return;
    slides[current].classList.remove("is-active");
    current = (n + slides.length) % slides.length;
    slides[current].classList.add("is-active");
    heroCaption.textContent = featured[current].caption || "";
  }
  showSlide(0);
  if (!reduceMotion && featured.length > 1) {
    setInterval(() => showSlide(current + 1), 5500);
  }

  // ---- Grid ----
  const grid = document.getElementById("grid");
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
    const sold = p.status === "sold";
    cap.innerHTML =
      '<span class="work-title">' + p.title + "</span>" +
      '<span class="work-meta">' + p.size + "</span>" +
      '<span class="work-meta">' + (sold ? '<span class="sold">Sold</span>' : p.price) + "</span>";
    fig.append(btn, cap);
    grid.appendChild(fig);
  });

  // ---- Larger view ----
  const lb = document.getElementById("lightbox");
  function openPainting(p) {
    document.getElementById("lb-img").src = IMG_DIR + p.image;
    document.getElementById("lb-img").alt = p.title + ", watercolor by Mark Sherman";
    document.getElementById("lb-title").textContent = p.title;
    const sold = p.status === "sold";
    document.getElementById("lb-meta").textContent =
      [p.size, p.framed, sold ? "Sold" : p.price].filter(Boolean).join(" · ");
    document.getElementById("lb-desc").textContent = p.description;
    const buy = document.getElementById("lb-buy");
    buy.href = p.etsy;
    buy.hidden = sold || !p.etsy;
    lb.showModal();
  }
  document.getElementById("lightbox-close").addEventListener("click", () => lb.close());
  lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
