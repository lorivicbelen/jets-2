// Function to split h1 into span letters and set delays dynamically
document.querySelectorAll(".animate-chars").forEach((h1) => {
  let text = h1.innerText;
  h1.innerHTML = text
    .split("")
    .map((char, index) => `<span style="transition-delay: ${index * 15}ms">${char}</span>`)
    .join("");
});

// Observe elements for scroll animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {threshold: 0.2}
);

document.querySelectorAll(".animate-chars, .fade-up, .reveal").forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", function () {
  const navIcon = document.querySelector("#nav-icon4");
  const header = document.querySelector("header");

  // header
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const promo = document.querySelector("header");

    if (!promo) return; // Exit if .promo doesn't exist

    if (window.scrollY > lastScrollY) {
      // Scrolling down - hide promo
      promo.classList.add("hidden");
    } else {
      // Scrolling up - show promo
      navIcon.classList.remove("open");
      header.classList.remove("active");
      promo.classList.remove("hidden");
    }

    lastScrollY = window.scrollY; // Update last scroll position
  });

  navIcon.addEventListener("click", function () {
    this.classList.toggle("open");
    header.classList.toggle("active");
  });
});
