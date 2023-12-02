// THEME TOGGLE

const page = document.querySelector(".page");
const headerLogo = page.querySelector(".logo__image");
const overlayLogo = page.querySelector(".page__loading-logo");
const toggle = page.querySelector(".header__toggle-input");
const toggleIcon = page.querySelector(".header__toggle-icon");
const menuButton = page.querySelector(".header__menu-toggle");
const menuButtonIcon = document.querySelector(".header__menu-toggle-icon");

setCheckedState();

// Set state of checkbox then toggle theme accordingly
function setCheckedState() {
  if (!(localStorage.checked === undefined)) {
    toggle.checked = isTrue(localStorage.getItem("checked"));
    toggleTheme();
  }
}

// Toggle theme based on state of checkbox
function toggleTheme() {
  if (toggle.checked) {
    page.classList.replace("page_theme_light", "page_theme_dark");
  } else {
    page.classList.replace("page_theme_dark", "page_theme_light");
  }
  toggleIconTheme();
  localStorage.setItem("checked", toggle.checked);
}

// Replace icons not able to be targeted by css variables
function toggleIconTheme() {
  if (page.classList.contains("page_theme_light")) {
    headerLogo.src = "/images/logo-new-nobrdr-dark.svg";
    toggleIcon.src = "/images/page-icons/moon.svg";
    overlayLogo.style.backgroundImage = "url(/images/logo-new-nobrdr-dark.svg)";
    menuButtonIcon.src = "/images/page-icons/menu_dark.svg";
  } else {
    headerLogo.src = "/images/logo-new-nobrdr.svg";
    toggleIcon.src = "/images/page-icons/sun.svg";
    overlayLogo.style.backgroundImage = "url(/images/logo-new-nobrdr.svg)";
    menuButtonIcon.src = "/images/page-icons/menu_light.svg";
  }
}

// Toggle menu on button click
function toggleMenu() {
  const menu = document.querySelector(".header__menu");
  const menuIsOpen = menu.classList.contains("header__menu_visible");
  const themeIsDark = page.classList.contains("page_theme_dark");
  menu.classList.toggle("header__menu_visible");
  menuButtonIcon.src = "../images/page-icons/" + (menuIsOpen ? `menu${themeIsDark ? "_light" : "_dark"}.svg` : `close${themeIsDark ? "_light" : "_dark"}.svg`);
}

// Close menu on link click
page.querySelectorAll(".header__menu-link").forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

// convert string to boolean
function isTrue(value) {
  return value === "true";
}

// Event listeners
toggle.addEventListener("change", toggleTheme);
menuButton.addEventListener("click", toggleMenu);

// Use intersection observer to fade in elements
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in_visible");
        // observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("fade-in_visible");
      }
    });
  },
  {
    // root: null,
    // rootMargin: "0px",
    // threshold: 0.25,
  }
);
const fadeInElements = document.querySelectorAll(".fade-in");
// window.addEventListener("DOMContentLoaded", (event) => {
fadeInElements.forEach((element) => {
  observer.observe(element);
});
// });
