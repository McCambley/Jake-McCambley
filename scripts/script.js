const page = document.querySelector(".page");
const headshot = page.querySelector(".intro__headshot");

function toggleTheme() {
  page.classList.toggle("page_theme_dark");
  page.classList.toggle("page_theme_light");
}

// page.addEventListener("click", toggleTheme);
// headshot.addEventListener("click", toggleTheme);
