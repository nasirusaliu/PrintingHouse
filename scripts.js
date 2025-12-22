/* =========================
   GLOBAL SETTINGS
========================= */
const isMobile = window.matchMedia("(max-width: 768px)").matches;

/* =========================
   NAVBAR SCROLL EFFECT
   (DESKTOP ONLY)
========================= */
const navbar = document.querySelector(".navbar");

if (!isMobile && navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });
}

/* =========================
   SMOOTH SCROLL (ALL DEVICES)
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

/* =========================
   AOS (ANIMATE ON SCROLL)
   SMART MOBILE HANDLING
========================= */
if (!isMobile) {
  // Desktop → Full animations
  AOS.init({
    once: true,
    duration: 800,
    easing: "ease-out-cubic",
    offset: 120
  });
} else {
  // Mobile → Minimal animations (performance)
  AOS.init({
    disable: true
  });
}

/* =========================
   CAROUSEL TUNING
========================= */
const carouselElement = document.querySelector("#carouselExample");

if (carouselElement) {
  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: isMobile ? 5000 : 4000,
    pause: "hover",
    ride: "carousel",
    touch: true
  });
}

/* =========================
   PRINTING HERO SCROLL ARROW
   (DESKTOP ONLY)
========================= */
const scrollArrow = document.querySelector(".printing-scroll-arrow");

if (!isMobile && scrollArrow) {
  scrollArrow.addEventListener("click", () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  });
}

if (isMobile && scrollArrow) {
  scrollArrow.style.display = "none";
}

/* =========================
   SERVICES CARD HOVER FIX
   (DISABLE HOVER ON TOUCH)
========================= */
if (isMobile) {
  document.querySelectorAll(".service-card").forEach(card => {
    card.style.transform = "none";
    card.style.transition = "none";
  });
}

/* =========================
   ABOUT IMAGE PERFORMANCE
========================= */
const aboutImage = document.querySelector(".about-image");
if (isMobile && aboutImage) {
  aboutImage.style.boxShadow = "none";
}

/* =========================
   TESTIMONIAL FADE (DESKTOP)
========================= */
if (!isMobile) {
  document.querySelectorAll(".testimonial-card").forEach(card => {
    card.setAttribute("data-aos", "fade-up");
  });
}



