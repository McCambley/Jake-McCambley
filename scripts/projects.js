// PROJECTS
const projectContainer = document.querySelector(".projects__projects");
const projectTemplate = document.querySelector("#projectcard");

const projects = [
  {
    name: "NewsExplorer",
    description:
      "This application allows users to login and explore the day's news using the News API. Users can search for, read, and save articles according to their interests. This project is the capstone project of my education at Practicum by Yandex.",
    tech: "React | TypeScript | MongoDB | Express | Node.js | Google Cloud | Styled-components",
    imgSrc: "./images/newsexplorer.png",
    imgAlt: "Teh news explorer project",
    liveLink: "https://mccambley.github.io/news-explorer-frontend/",
    repoLink: "https://github.com/McCambley/news-explorer-frontend",
    demoLink: "https://youtu.be/q7IdngTegY8",
  },
  {
    name: "Around the U.S.",
    description:
      "This application allows users to upload photos with custom captions to a personal photo collection. Users may also create a custom profile. I built modals windows and unique client-side form validation behavior to improve the user's experience.",
    tech: "React | Express | MongoDB | Node.js | Google Cloud",
    imgSrc: "./images/jean.jpeg",
    imgAlt: "Shaggy hiker",
    liveLink: "https://mccambley.github.io/react-around-api-full/",
    repoLink: "https://github.com/McCambley/react-around-api-full",
    demoLink: "https://youtu.be/z0kQNpBVMcw",
  },
  {
    name: "DotCot",
    description:
      "An app designed to make it easier for investors and startups to connect, DotCot allows investors to easily create custom forms, share forms with founders in their network, and collect sortable descriptive data on new startups.",
    tech: "React | Express | MongoDB | Node.js | CI-CD | Heroku | Passport | Mocha | Styled-components",
    imgSrc: "./images/dotcot-phone.png",
    imgAlt: "DotCot Phone",
    liveLink: "https://peaceful-woodland-39661.herokuapp.com/",
    repoLink: "https://github.com/McCambley/private-projects/tree/main/dotcot#dotcot-by-venturecat",
    demoLink: "https://youtu.be/yGJ2WOfZvew",
  },
  {
    name: "Orange Runner",
    description:
      "My brother, The Orange Runner, writes and illustrates a comic about running. As his biggest fan, I rebuilt his outdated WordPress site using Next.js with content published via Contentful. Static generation with server rendering on request mean faster performance with maximized SEO.",
    tech: "Next.js | React | Node | styled-components | Contentful",
    imgSrc: "./images/tor.png",
    imgAlt: "DotCot Phone",
    liveLink: "https://the-orange-runner.vercel.app/",
    repoLink: "https://github.com/McCambley/the-orange-runner",
    demoLink: "https://youtu.be/G9VpHw2V0II",
  },
  {
    name: "Apiary",
    description:
      "A single page application built for Practicum by Yandex's Apiary program, which lets students build pages for startups in order to gain experience. Clients may update the page content via Contentful. Queries are sent using GraphQL and managed with Apollo Client. ",
    tech: "React | Contentful | GraphQL | Apollo | Node",
    imgSrc: "./images/apiary.png",
    imgAlt: "Apiary",
    liveLink: "https://mccambley.github.io/apiary/",
    repoLink: "https://github.com/McCambley/apiary",
    demoLink: "https://youtu.be/ztpOAcOPbu0",
  },

  {
    name: "Aviary",
    description:
      "Aviary uses eBird, xeno-canto, and Unsplash to build a soothing audiovisual experience of birdcalls and landscape photography for users depending on their location and desired environment. The result of a 96-hour hackathon, this app was built to help users stay grounded during a global pandemic",
    tech: "React | Figma | Node",
    imgSrc: "./images/aviary.png",
    imgAlt: "Bird silhouette",
    liveLink: "https://mccambley.github.io/hacktober-code-jam/",
    repoLink: "https://github.com/McCambley/hacktober-code-jam",
    demoLink: "https://youtu.be/6hlaG0G9euE",
  },
  {
    name: "U.S. & Racism",
    description:
      "On Juneteenth 2021 I built a project that presents facts and provides resources to educate readers about some of the many ways in which systemic racism affects the lives of black americans today.",
    tech: "HTML | CSS | JS",
    imgSrc: "./images/racism.png",
    imgAlt: "Screenshot of Project",
    liveLink: "https://mccambley.github.io/US-Racism",
    repoLink: "https://github.com/McCambley/US-Racism",
    demoLink: "https://youtu.be/cYGvG8u6Lxc",
  },
  {
    name: "Prim-U",
    description:
      "Prim-U is a South African beauty service startup. I built them a homepage that achieves their goal of helping freelance beauticians connect with new customers.",
    tech: "HTML | CSS | JS | Figma",
    imgSrc: "./images/primu.png",
    imgAlt: "Woman posing in fresh Makeup",
    liveLink: "https://mccambley.github.io/Prim-U",
    repoLink: "https://github.com/McCambley/Prim-U",
    demoLink: "https://youtu.be/g9YNXG74x9o",
  },
  {
    name: "Portland to Portland",
    description:
      "How can we make sure our page is accessible on any device? A foray into the world of responsiveness, this project fulfilled a Figma design and implemented media queries to ensure that the page appeared and functioned seamlessly across all device sizes.",
    tech: "HTML | CSS | Figma",
    imgSrc: "./images/lead-mountains.jpg",
    imgAlt: "Portland to Portland",
    liveLink: "https://mccambley.github.io/web_project_3/",
    repoLink: "https://github.com/McCambley/web_project_3",
    demoLink: "https://youtu.be/zEunkGz6Q74",
  },
  // {
  //   name: "Learning how to learn",
  //   description: "This project is an exercise in how to communicate information more effectively using design layouts. This pixel perfect page was my first exercise in transforming an idea to an interactive website.",
  //   tech: "HTML5 | CSS",
  //   imgSrc: "./images/feynman.png",
  //   imgAlt: "Richard Feynman",
  //   liveLink: "https://mccambley.github.io/web_project_1",
  //   repoLink: "https://github.com/McCambley/web_project_1",
  //   demoLink: "https://github.com/McCambley/web_project_1",
  // },

  {
    name: "Personal Website",
    description:
      "The goal of this page is to display both my mission and work clearly and concisely in a way that catches the eye without sacrificing functionality. In the beginning of my development education, this website was an exploration in how to create a modern website using solely CSS.",
    tech: "HTML5 | CSS | JS",
    imgSrc: "./images/portlogo.png",
    imgAlt: "Portfolio logo",
    liveLink: "#home",
    repoLink: "https://github.com/McCambley/Jake-McCambley",
    demoLink: "https://youtu.be/Gi7lSsnpxlY",
  },

  {
    name: "JS Playground",
    description:
      "This project is a collection of smaller projects built with the intention of learning the intricacies and capabilities of vanilla javascript prior to embarking on the journey of React. These projects also provided and oppurtunity to dive into UX/UI, as all twenty-seven projects include original designs ",
    tech: "HTML5 | CSS | JS",
    imgSrc: "./images/js30.jpeg",
    imgAlt: "Pink clouds",
    liveLink: "https://mccambley.github.io/JavaScript30/",
    repoLink: "https://github.com/McCambley/JavaScript30",
    demoLink: "https://youtu.be/8z9hugvI4-U",
  },
];

class Card {
  constructor({ name, description, tech, imgSrc, imgAlt, liveLink, repoLink, demoLink }) {
    this._name = name;
    this._description = description;
    this._tech = tech;
    this._imgSrc = imgSrc;
    this._imgAlt = imgAlt;
    this._liveLink = liveLink;
    this._repoLink = repoLink;
    this._demoLink = demoLink;
  }

  createCard() {
    const newProjectClone = projectTemplate.content.cloneNode(true);
    const image = newProjectClone.querySelector(".projects__card-image");
    const title = newProjectClone.querySelector(".projects__title-link");
    const description = newProjectClone.querySelector(".projects__project-description");
    const tech = newProjectClone.querySelector(".projects__project-tech");
    const repo = newProjectClone.querySelector(".projects__icon-repo");
    const live = newProjectClone.querySelector(".projects__icon-live");
    const demo = newProjectClone.querySelector(".projects__icon-demo");
    image.src = this._imgSrc;
    image.alt = this._imgAlt;
    title.textContent = this._name;
    title.href = this._liveLink;
    description.textContent = this._description;
    tech.textContent = this._tech;
    repo.href = this._repoLink;
    live.href = this._liveLink;
    demo.href = this._demoLink;
    return newProjectClone;
  }
}

(function renderProjects() {
  projects.forEach((project) => {
    const newProjectCard = new Card(project);
    projectContainer.append(newProjectCard.createCard());
  });
})();
