// MEDIA
const mediaContainer = document.querySelector(".media__list");

/**
 * @typedef {Object} MediaItem
 * @property {string} type - The type of media item (e.g. video, blog, etc.)
 * @property {string} date - The date the media item was published
 * @property {string} title - The title of the media item
 * @property {string} description - A short description of the media item
 * @property {string[]} tags - A list of tags associated with the media item
 * @property {string} readLength - The estimated read time of the media item
 * @property {string} image - The image associated with the media item
 * @property {string} link - The link to the media item
 */
/**
 * @type {MediaItem[]}
 */
const mediaItems = [
  // Reflecting on Epic React
  {
    type: "Video",
    date: "2025-07-31",
    title: "Beyond The Code: Alumni Check in with Jake McCambley",
    description:
      "Four years after graduating from TripleTen's Software Engineering program, I sat down with them to talk about how my life has changed, from working seasonally, to building software to help people improve their mental health.",
    tags: ["Interview", "TripleTen", "Software Engineering"],
    readLength: "5 minute watch",
    image: "/images/tripleten.png",
    link: "https://www.youtube.com/watch?v=tYpx7Pk6P9I",
  },

  // Reflecting on Epic React
  {
    type: "Blog",
    date: "2024-11-26",
    title: "Reflecting on Epic React",
    description:
      "I just wrapped up Kent C. Dodds’ course called Epic React. In an effort to deepen the grooves of my learning, I thought I would revisit each section of the course and share one thing that I learned. Here are my main takeaways from each module.",
    tags: ["React", "Learning", "Software Engineering"],
    readLength: "10 minute read",
    image: "/images/rocketv2.png",
    link: "https://jakemccambley.medium.com/reflecting-on-epic-react-0e1c9fb6edd0",
  },

  // SheCanCode Webinar
  {
    type: "Webinar",
    date: "2024-02-21",
    title: "Unearthing Tech Gems: Discovering Tech Talent Beyond City Limits",
    description:
      "I was recently invited to speak at SheCanCode's webinar, where I discussed the emergence of tech in small cities and rural areas. I spoke with a panel of other tech professionals about remote work, quality of life, distributed teams, and the link to increasing diversity of perspectives.",
    tags: ["Rural Innovation", "Tech Industry", "Remote Work"],
    readLength: "46 minute watch",
    image: "/images/gem.jpeg",
    link: "https://shecancode.io/blog/in-case-you-missed-it-power-up-webinar-unearthing-tech-gems-discovering-tech-talent-beyond-city-limits/",
  },
  // Snowplow Guide
  {
    type: "Article",
    date: "2024-02-08",
    title: "Creating and Documenting Snowplow Schemas with ChatGPT",
    description:
      "Recently I configured Snowplow analytics on our homepage in order to get a sense for how users utilize our new search features. I leveraged ChatGPT to speed up the process, and thought I'd help others to the same.",
    tags: ["Data", "Analytics", "AI"],
    readLength: "4 minute read",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*xSCvjElDlV9iQi2f",
    link: "https://jakemccambley.medium.com/creating-and-documenting-snowplow-schemas-with-chatgpt-32dfd978e6d3",
  },
  // TechStart Podcast
  {
    type: "Podcast",
    date: "2023-11-17",
    title: "Hiking the Career Trail",
    description:
      "I was recently interviewed by TripleTen's TechStart Podcast. We talked about my journey from hiking in the mountains of Appalachian Trail, to working for a Brooklyn based mental health startup.",
    tags: ["Interview", "Software Engineering", "TechStart"],
    readLength: "31 minute listen",
    image: "../images/TechStart.jpeg",
    link: "https://podcasts.apple.com/us/podcast/hiking-the-career-trail/id1711188418?i=1000635037010&utm_campaign=podcast&utm_source=landing&utm_content=ep5_hikingthecareertrail_apple&_gl=1*1oewwmt*_gcl_au*MTgwMDA1NTYyNC4xNzAxNTAwNjc2*_ga*MTkyMDE4NTUyMy4xNzAxNTAwNjc2*_ga_0S9V7R9M47*MTcwMTUwMDY3NS4xLjAuMTcwMTUwMDY3Ni41OS4wLjA.",
  },
  // TripleTen
  {
    type: "Video",
    date: "2023-06-14",
    title: "TripleTen Interview",
    description:
      "In 2021 I graduated from TripleTen's Software Engineering program. A year after graduation, I sat down with them to talk about my journey, from hiking in the mountains of New Hampshire, to working for a Brooklyn based mental health startup.",
    tags: ["Interview", "Software Engineering", "TripleTen"],
    readLength: "6 minute watch",
    image: "../images/tripleten_screenshot.png",
    link: "https://www.youtube.com/watch?v=SratIvYEjc8&ab_channel=TripleTen",
  },
  // Fixing CORS Errors
  {
    type: "Article",
    date: "Mar 13, 2022",
    title: "Fixing CORS Errors — How to Build a Proxy Server to Handle Cross-Origin Requests",
    description:
      "Problem — CORS Errors As you begin building and working with APIs, chances are you’ll come across the following error: For security reasons, browsers will only permit scripts from one source to access data from another source if the two sources share the same origin. Cross-Origin Resource Sharing (CORS) can allow for cross domain…",
    tags: ["CORS", "Security", "APIs"],
    readLength: "4 minute read",
    image: "https://miro.medium.com/v2/resize:fill:224:224/1*J-mfKeiN6KN-0caWGCcRzw.png",
    link: "https://jakemccambley.medium.com/fixing-cors-errors-when-working-with-3rd-party-apis-a69dc5474804",
  },
  // Create a Dark Mode for your website
  {
    type: "Article",
    date: "Jul 5, 2021",
    title: "Create a Dark Mode for your website",
    description:
      "Dark Mode is popular, and for good reason. Does it require less energy? Only on some devices. Does it reduce eyestrain? It actually doesn’t. Does it look damn good? Absolutely. The undertaking of creating a Dark Mode for your personal website is a pursuit that shouldn’t just follow a trend…",
    tags: ["CSS", "JavaScript", "Dark Mode"],
    readLength: "11 minute read",
    image: "https://miro.medium.com/v2/resize:fill:224:224/0*b_jfRqbS3_tQrkDZ",
    link: "https://bootcamp.uxdesign.cc/create-a-dark-mode-for-your-website-d62e73a4275d",
  },
  // How do you Pair Program?
  {
    type: "Article",
    date: "June 30, 2021",
    title: "How do you Pair Program?",
    description:
      "Recently I was asked to answer this question in order to provide feedback on the Pair Programming curriculum at TripleTen, the school at which I’ve been studying full-stack web development for about five months. Throughout my studies, I’ve been attending weekly webinars intended to teach the practice and methodology of Pair Programming.",
    tags: ["Pair Programming", "Soft Skills", "Leadership"],
    readLength: "11 minute read",
    image: "https://miro.medium.com/v2/resize:fit:1400/0*uc2qreXMn9C9rQ8m",
    link: "https://jakemccambley.medium.com/how-do-you-pair-program-a914fbf64162",
  },
  // Transient Props in styled-components
  {
    type: "Article",
    date: "Nov 3, 2021",
    title: "Transient Props in styled-components",
    description:
      "How to avoid errors when passing boolean state values as custom attributes to React styled-components — Overview: Transient Props allow you to pass boolean value props to styled-components such that they do not render as an element’s attributes on the DOM. This prevents the errors and allows for some more complex use of styled-component props. By preceding a component’s boolean attribute with a $, styled-components will…",
    tags: ["React", "styled-components", "Transient Props"],
    readLength: "3 minute read",
    image: "https://miro.medium.com/v2/resize:fill:224:224/0*Saw-RykOIJs4-cPI",
    link: "https://jakemccambley.medium.com/transient-props-in-styled-components-3105f16cb91f",
  },
  // HTML5 Data Attributes
  {
    type: "Article",
    date: "June 29, 2021",
    title: "HTML5 Data Attributes",
    description:
      "Data-* attributes allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, or extra properties on DOM. In other words, Data Attributes allow us to store data in your markup that you can access easily in your CSS and JS in order to expand the potential of your page styling and behavior.",
    tags: ["HTML5", "JavaScript", "Web Development"],
    readLength: "2 minute read",
    image: "https://miro.medium.com/v2/resize:fit:1400/0*8yT_sDqT5IFu2AEO",
    link: "https://jakemccambley.medium.com/html5-data-attributes-a252082783cc",
  },
  // How to make a professional email signature
  {
    type: "Article",
    date: "Jul 8, 2021", // The date is not specified in the DOM element
    title: "How to make a professional email signature",
    description:
      "I finally got around to setting up an Email Signature for sending professional emails. I used this free tool to get started with a template. The tool has a few nice templates that users can play around with right out of the box. …",
    tags: ["Email", "Career", "Networking"],
    readLength: "2 minute read",
    image: "https://miro.medium.com/v2/resize:fill:224:224/0*AlZf06vP6jEcOOxi",
    link: "https://jakemccambley.medium.com/how-to-make-a-professional-email-signature-3e88eb3a50b8",
  },
  // How to use CSS Variables
  {
    type: "Article",
    date: "March 28, 2021",
    title: "Ugly Sweaters with CSS",
    description:
      "When I sit down to code in the evening, my usual focus space is in a window nook in my family room surrounded on three sides by windows. In the chill of spring in New Hampshire, I’ll typically find myself in a cozy sweater, with a cup of tea, looking through my reflection out over a yard of slowly melting slush.",
    tags: ["HTML5", "CSS", "Grid"],
    readLength: "15 minute read",
    image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*uyTGv3O6SA9x3m16dxS1-A.png",
    link: "https://jakemccambley.medium.com/ugly-sweaters-with-css-332340d44c9b",
  },

  // ----------------------------------------
  // TESTS
  // {
  //   type: "Blog",
  //   date: "2023-10-25",
  //   title: "Understanding HTML Templates",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor convallis neque non gravida. Donec luctus, magna in ornare tristique, turpis urna porta erat, eu pharetra enim eros quis tortor. Cras sagittis quam vitae eleifend laoreet. In dapibus nisi vel magna tristique, ac suscipit purus lacinia. Nunc et diam eu nisl fringilla scelerisque non vitae ex. ",
  //   tags: ["HTML", "Web Dev", "Debugging", "Pair Programming"],
  //   readLength: "5 minute read",
  //   image:
  //     "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?auto=format&fit=crop&q=80&w=1362&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   link: "https://www.youtube.com/watch?v=SratIvYEjc8&ab_channel=TripleTen",
  // },
  // {
  //   type: "Video",
  //   date: "2023-04-25",
  //   title: "Rust vs. HTMX",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor convallis neque non gravida. Donec luctus, magna in ornare tristique, turpis urna porta erat, eu pharetra enim eros quis tortor. Cras sagittis quam vitae eleifend laoreet. In dapibus nisi vel magna tristique, ac suscipit purus lacinia. Nunc et diam eu nisl fringilla scelerisque non vitae ex. ",
  //   tags: ["Rust", "HTMX", "Growth", "Leadership"],
  //   readLength: "45 minute read",
  //   image:
  //     "https://images.unsplash.com/photo-1457144759132-40d119c2f120?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   link: "https://www.youtube.com/watch?v=SratIvYEjc8&ab_channel=TripleTen",
  // }
  // ----------------------------------------
];

class MediaCard {
  constructor({ type, date, title, description, tags, readLength, image, link }) {
    this._type = type;
    this._date = date;
    this._title = title;
    this._link = link;
    this._description = description;
    this._tags = tags;
    this._readLength = readLength;
    this._image = image;
  }

  createCard() {
    const mediaProjectTemplate = document.querySelector("#media-item-template");
    const newMediaProjectClone = mediaProjectTemplate.content.cloneNode(true);

    const image = newMediaProjectClone.querySelector(".media-item__image");
    const mediaTitle = newMediaProjectClone.querySelector(".media-item__link");
    const mediaType = newMediaProjectClone.querySelector(".media-item__type");
    const mediaDate = newMediaProjectClone.querySelector(".media-item__date");
    // const mediaMetadata = newMediaProjectClone.querySelector(".media-item__metadata");
    const mediaDescription = newMediaProjectClone.querySelector(".media-item__description");
    const mediaReadLength = newMediaProjectClone.querySelector(".media-item__read-length");
    const tagList = newMediaProjectClone.querySelector(".media-item__tags");

    const date = new Date(this._date);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    image.src = this._image;
    image.alt = this._title;
    mediaTitle.textContent = this._title;
    mediaTitle.href = this._link;
    mediaType.textContent = `${this._type}`;
    mediaDate.textContent = formattedDate;
    // mediaMetadata.textContent = `${this._type} | ${this._date}`;
    mediaDescription.textContent = this._description;
    mediaReadLength.textContent = this._readLength;

    this._tags.forEach((tag) => {
      const li = document.createElement("li");
      li.classList.add("media-item__tag");
      li.textContent = tag;
      tagList.appendChild(li);
    });

    return newMediaProjectClone;
  }
}

(function renderMediaProjects() {
  const mediaProjectContainer = document.querySelector(".media__list");

  mediaItems.forEach((project) => {
    const newMediaCard = new MediaCard(project);
    mediaProjectContainer.appendChild(newMediaCard.createCard());
  });
})();
