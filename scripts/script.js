// THEME TOGGLE

const page = document.querySelector(".page");
const headerLogo = page.querySelector(".logo__image");
const overlayLogo = page.querySelector(".page__loading-logo");
const toggle = page.querySelector(".header__toggle-input");
const toggleIcon = page.querySelector(".header__toggle-icon");

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
  } else {
    headerLogo.src = "/images/logo-new-nobrdr.svg";
    toggleIcon.src = "/images/page-icons/sun.svg";
    overlayLogo.style.backgroundImage = "url(/images/logo-new-nobrdr.svg)";
  }
}

// convert string to boolean
function isTrue(value) {
  return value === "true";
}

// Event listeners
toggle.addEventListener("change", toggleTheme);

// PROJECTS
const projectContainer = document.querySelector(".projects__projects");
const projectTemplate = document.querySelector("#projectcard");

const projects = [
  {
    name: "NewsExplorer",
    description: "This fullstack applications allows users to login and explore the day's news using the News API. Users can search for, read, and save articles according to their interests. This project is the capstone project of my education at Practicum by Yandex.",
    tech: "MongoDB | Express | React | Node | Google Cloud | Styled-components",
    imgSrc: "./images/newsexplorer.png",
    imgAlt: "Teh news explorer project",
    liveLink: "https://github.com/McCambley/news-explorer-frontend",
    repoLink: "https://github.com/McCambley/news-explorer-frontend",
  },
  {
    name: "Around the U.S.",
    description: "This project allows users to upload photos with custom captions to a personal photo collection. Users may also create a custom profile. I built modals windows and unique client-side form validation behavior to improve the user's experience.",
    tech: "MongoDB | Express | React | Node | Google Cloud",
    imgSrc: "./images/shaggy.jpeg",
    imgAlt: "Shaggy hiker",
    liveLink: "https://mccambley.students.nomoreparties.site/",
    repoLink: "https://github.com/McCambley/react-around-api-full",
  },
  {
    name: "DotCot",
    description: "An app designed to make it easier for investors and startups to connect, DotCot allows investors to easily create custom forms, share forms with founders in their network, and collect sortable descriptive data on new startups.",
    tech: "MongoDB | Express | React | Node | CI-CD | Heroku | Passport | Mocha | Styled-components",
    imgSrc: "./images/dotcot-phone.png",
    imgAlt: "DotCot Phone",
    liveLink: "https://peaceful-woodland-39661.herokuapp.com/",
    repoLink: "https://github.com/vgalilei/venturecat",
  },
  {
    name: "Apiary",
    description: "A single page application built for Practicum by Yandex's Apiary program, which lets students build pages for startups in order to gain experience. Clients may update the page content via Contentful. Queries are sent using GraphQL and managed with Apollo Client. ",
    tech: "Contentful | GraphQL | Apollo | React | Node",
    imgSrc: "./images/apiary.png",
    imgAlt: "Apiary",
    liveLink: "https://mccambley.github.io/apiary/",
    repoLink: "https://github.com/McCambley/apiary",
  },

  {
    name: "Aviary",
    description: "Aviary uses eBird, xeno-canto, and Unsplash to build a soothing audiovisual experience of birdcalls and landscape photography for users depending on their location and desired environment. The result of a 96-hour hackathon, this app was built to help users stay grounded during a global pandemic",
    tech: "React | Figma | Node",
    imgSrc: "./images/aviary.png",
    imgAlt: "Bird silhouette",
    liveLink: "https://mccambley.github.io/hacktober-code-jam/",
    repoLink: "https://github.com/McCambley/hacktober-code-jam",
  },
  {
    name: "U.S. & Racism",
    description: "On Juneteenth 2021 I built a project that presents facts and provides resources to educate readers about some of the many ways in which systemic racism affects the lives of black americans today.",
    tech: "HTML | CSS | JS",
    imgSrc: "./images/racism.png",
    imgAlt: "Screenshot of Project",
    liveLink: "https://mccambley.github.io/US-Racism",
    repoLink: "https://github.com/McCambley/US-Racism",
  },
  {
    name: "Prim-U",
    description: "Prim-U is a South African beauty service startup. I built them a homepage that achieves their goal of helping freelance beauticians connect with new customers.",
    tech: "HTML | CSS | JS | Figma",
    imgSrc: "./images/primu.png",
    imgAlt: "Woman posing in fresh Makeup",
    liveLink: "https://mccambley.github.io/Prim-U",
    repoLink: "https://github.com/McCambley/Prim-U",
  },
  {
    name: "Portland to Portland",
    description: "How can we make sure our page is accessible on any device? A foray into the world of responsiveness, this project fulfilled a Figma design and implemented media queries to ensure that the page appeared and functioned seamlessly across all device sizes.",
    tech: "HTML | CSS | Figma",
    imgSrc: "./images/lead-mountains.jpg",
    imgAlt: "Portland to Portland",
    liveLink: "https://mccambley.github.io/web_project_3/",
    repoLink: "https://github.com/McCambley/web_project_3",
  },
  // {
  //   name: "Learning how to learn",
  //   description: "This project is an exercise in how to communicate information more effectively using design layouts. This pixel perfect page was my first exercise in transforming an idea to an interactive website.",
  //   tech: "HTML5 | CSS",
  //   imgSrc: "./images/feynman.png",
  //   imgAlt: "Richard Feynman",
  //   liveLink: "https://mccambley.github.io/web_project_1",
  //   repoLink: "https://github.com/McCambley/web_project_1",
  // },

  {
    name: "Personal Website",
    description: "The goal of this page is to display both my mission and work clearly and concisely in a way that catches the eye without sacrificing functionality. In the beginning of my development education, this website was an exploration in how to create a modern website using solely CSS.",
    tech: "HTML5 | CSS | JS",
    imgSrc: "./images/portlogo.png",
    imgAlt: "Portfolio logo",
    liveLink: "#home",
    repoLink: "https://github.com/McCambley/Jake-McCambley",
  },

  {
    name: "JS Playground",
    description: "This project is a collection of smaller projects built with the intention of learning the intricacies and capabilities of vanilla javascript prior to embarking on the journey of React. These projects also provided and oppurtunity to dive into UX/UI, as all twenty-seven projects include original designs ",
    tech: "HTML5 | CSS | JS",
    imgSrc: "./images/js30.jpeg",
    imgAlt: "Pink clouds",
    liveLink: "https://mccambley.github.io/JSPlayground/",
    repoLink: "https://github.com/McCambley/JSPlayground",
  },
];

class Card {
  constructor({ name, description, tech, imgSrc, imgAlt, liveLink, repoLink }) {
    this._name = name;
    this._description = description;
    this._tech = tech;
    this._imgSrc = imgSrc;
    this._imgAlt = imgAlt;
    this._liveLink = liveLink;
    this._repoLink = repoLink;
  }

  createCard() {
    const newProjectClone = projectTemplate.content.cloneNode(true);
    const image = newProjectClone.querySelector(".projects__card-image");
    const title = newProjectClone.querySelector(".projects__title-link");
    const description = newProjectClone.querySelector(".projects__project-description");
    const tech = newProjectClone.querySelector(".projects__project-tech");
    const repo = newProjectClone.querySelector(".projects__icon-repo");
    const live = newProjectClone.querySelector(".projects__icon-live");
    image.src = this._imgSrc;
    image.alt = this._imgAlt;
    title.textContent = this._name;
    title.href = this._liveLink;
    description.textContent = this._description;
    tech.textContent = this._tech;
    repo.href = this._repoLink;
    live.href = this._liveLink;
    return newProjectClone;
  }
}

(function renderProjects() {
  projects.forEach((project) => {
    const newProjectCard = new Card(project);
    projectContainer.append(newProjectCard.createCard());
  });
})();
