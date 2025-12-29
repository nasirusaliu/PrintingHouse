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

 const modal = new bootstrap.Modal(document.getElementById('mediaModal'));
  const modalImg = document.getElementById('modalImage');
  const modalVid = document.getElementById('modalVideo');

  function openImage(src) {
    modalVid.pause();
    modalVid.classList.add('d-none');
    modalImg.classList.remove('d-none');
    modalImg.src = src;
    modal.show();
  }

  function openVideo(src) {
    modalImg.classList.add('d-none');
    modalVid.classList.remove('d-none');
    modalVid.src = src;
    modalVid.play();
    modal.show();
  }

  document.getElementById('mediaModal').addEventListener('hidden.bs.modal', () => {
    modalVid.pause();
    modalVid.src = '';
    modalImg.src = '';
  });

   // SEE MORE LOGIC
  document.getElementById('seeMoreBtn').addEventListener('click', () => {
    document.querySelectorAll('.mobile-hidden').forEach(el => {
      el.style.display = 'block';
    });
    document.getElementById('seeMoreBtn').style.display = 'none';
  });

  function filterProjects(type) {
    const items = document.querySelectorAll('#projectsGrid .project-item');

    items.forEach(item => {
      if (type === 'all') {
        item.style.display = 'block';
      } else {
        item.style.display = item.getAttribute('data-type') === type ? 'block' : 'none';
      }
    });

    // Update button active state
    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('btn-warning'));
    document.querySelectorAll('.btn').forEach(btn => btn.classList.add('btn-outline-warning'));
    if(type === 'image') {
      document.querySelector('button[onclick="filterProjects(\'image\')"]').classList.add('btn-warning');
      document.querySelector('button[onclick="filterProjects(\'image\')"]').classList.remove('btn-outline-warning');
    }
    if(type === 'video') {
      document.querySelector('button[onclick="filterProjects(\'video\')"]').classList.add('btn-warning');
      document.querySelector('button[onclick="filterProjects(\'video\')"]').classList.remove('btn-outline-warning');
    }
    if(type === 'all') {
      document.querySelector('button[onclick="filterProjects(\'all\')"]').classList.add('btn-warning');
      document.querySelector('button[onclick="filterProjects(\'all\')"]').classList.remove('btn-outline-warning');
    }
  }

  // Show images by default
  filterProjects('image');

  // Optional: functions for openImage and openVideo (simple lightbox)
  function openImage(src) {
    const imgWindow = window.open("", "_blank");
    imgWindow.document.write('<img src="' + src + '" style="width:100%;">');
  }

  function openVideo(src) {
    const videoWindow = window.open("", "_blank");
    videoWindow.document.write('<video src="' + src + '" autoplay controls style="width:100%; height:auto;"></video>');
  }