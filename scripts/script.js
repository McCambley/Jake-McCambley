const page = document.querySelector(".page");
const headerLogo = page.querySelector(".logo__image");
const overlayLogo = page.querySelector(".page__loading-logo");
const toggle = page.querySelector(".header__toggle-input");
const toggleIcon = page.querySelector(".header__toggle-icon");

function toggleTheme() {
  page.classList.toggle("page_theme_dark");
  page.classList.toggle("page_theme_light");
  toggleIconTheme();

  //change logo source
  //change overlay source
}

function toggleIconTheme() {
  if (page.classList.contains("page_theme_light")) {
    headerLogo.src = "/images/logo-new-nobrdr-dark.svg";
    toggleIcon.src = "/images/page-icons/moon.svg";
    overlayLogo.style.backgroundImage = "url(/images/logo-new-nobrdr-dark.svg)";
  } else {
    headerLogo.src = "/images/logo-new-nobrdr.svg";
    toggleIcon.src = "/images/page-icons/sun.svg";
    overlayLogo.style.backgroundImage = "url(/images/logo-new-nobrdr.svg)";
  }
}

// page.addEventListener("click", toggleTheme);
// headshot.addEventListener("click", toggleTheme);
toggle.addEventListener("change", toggleTheme);
