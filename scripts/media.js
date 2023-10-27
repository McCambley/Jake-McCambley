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
  {
    type: "Video",
    date: "2023-06-14",
    title: "TripleTen Interview",
    description:
      "In 2021 I graduated from TripleTen's Software Engineering program. A year after graduation, I sat down with them to talk about my journey, from hiking in the mountains of New Hampshire, to working for a Brooklyn based mental health startup.",
    tags: ["Software Engineering", "Interview", "Learning", "Hiking"],
    readLength: "6 minute watch",
    image: "../images/tripleten_screenshot.png",
    link: "https://www.youtube.com/watch?v=SratIvYEjc8&ab_channel=TripleTen",
  },
  {
    type: "Article",
    date: "Mar 13, 2022",
    title: "Fixing CORS Errors — How to Build a Proxy Server to Handle Cross-Origin Requests",
    description:
      "Problem — CORS Errors As you begin building and working with APIs, chances are you’ll come across the following error: For security reasons, browsers will only permit scripts from one source to access data from another source if the two sources share the same origin. Cross-Origin Resource Sharing (CORS) can allow for cross domain…",
    tags: ["Nodejs", "CORS", "Security", "APIs", "JavaScript", "Tutorial"],
    readLength: "4 minute read",
    image: "https://miro.medium.com/v2/resize:fill:224:224/1*J-mfKeiN6KN-0caWGCcRzw.png",
    link: "https://jakemccambley.medium.com/fixing-cors-errors-when-working-with-3rd-party-apis-a69dc5474804",
  },
  {
    type: "Article",
    date: "Nov 3, 2021",
    title: "Transient Props in styled-components",
    description:
      "How to avoid errors when passing boolean state values as custom attributes to React styled-components — Overview: Transient Props allow you to pass boolean value props to styled-components such that they do not render as an element’s attributes on the DOM. This prevents the errors and allows for some more complex use of styled-component props. By preceding a component’s boolean attribute with a $, styled-components will…",
    tags: [
      "React",
      "styled-components",
      "CSS",
      "Web Development",
      "JavaScript",
      "Programming",
      "Tutorial",
    ],
    readLength: "3 minute read",
    image: "https://miro.medium.com/v2/resize:fill:224:224/0*Saw-RykOIJs4-cPI",
    link: "https://jakemccambley.medium.com/transient-props-in-styled-components-3105f16cb91f",
  },
  {
    type: "Article",
    date: "Jul 8, 2021", // The date is not specified in the DOM element
    title: "How to make a professional email signature",
    description:
      "I finally got around to setting up an Email Signature for sending professional emails. I used this free tool to get started with a template. The tool has a few nice templates that users can play around with right out of the box. …",
    tags: ["Email", "Professional Development", "Career", "Tutorial"],
    readLength: "2 minute read",
    image: "https://miro.medium.com/v2/resize:fill:224:224/0*AlZf06vP6jEcOOxi",
    link: "https://jakemccambley.medium.com/how-to-make-a-professional-email-signature-3e88eb3a50b8",
  },
  {
    type: "Article",
    date: "Jul 5, 2021",
    title: "Create a Dark Mode for your website",
    description:
      "Dark Mode is popular, and for good reason. Does it require less energy? Only on some devices. Does it reduce eyestrain? It actually doesn’t. Does it look damn good? Absolutely. The undertaking of creating a Dark Mode for your personal website is a pursuit that shouldn’t just follow a trend…",
    tags: ["Dark Mode", "Web Development", "CSS", "JavaScript", "Programming", "Tutorial"],
    readLength: "11 minute read",
    image: "https://miro.medium.com/v2/resize:fill:224:224/0*b_jfRqbS3_tQrkDZ",
    link: "https://bootcamp.uxdesign.cc/create-a-dark-mode-for-your-website-d62e73a4275d",
  },
  {
    type: "Article",
    date: "June 30, 2021",
    title: "How do you Pair Program?",
    description:
      "Recently I was asked to answer this question in order to provide feedback on the Pair Programming curriculum at Practicum by Yandex, the school at which I’ve been studying full-stack web development for about five months. Throughout my studies, I’ve been attending weekly webinars intended to teach the practice and methodology of Pair Programming.",
    tags: ["Pair Programming", "Programming", "Computer Science", "Software Development"],
    readLength: "11 minute read",
    image: "https://miro.medium.com/v2/resize:fit:1400/0*uc2qreXMn9C9rQ8m",
    link: "https://jakemccambley.medium.com/how-do-you-pair-program-a914fbf64162",
  },
  {
    type: "Article",
    date: "June 29, 2021",
    title: "HTML5 Data Attributes",
    description:
      "Data-* attributes allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, or extra properties on DOM. In other words, Data Attributes allow us to store data in your markup that you can access easily in your CSS and JS in order to expand the potential of your page styling and behavior.",
    tags: ["HTML5", "Web Development", "JavaScript", "Date", "Programming", "Tutorial"],
    readLength: "2 minute read",
    image: "https://miro.medium.com/v2/resize:fit:1400/0*8yT_sDqT5IFu2AEO",
    link: "https://jakemccambley.medium.com/html5-data-attributes-a252082783cc",
  },
  {
    type: "Article",
    date: "March 28, 2021",
    title: "Ugly Sweaters with CSS",
    description:
      "When I sit down to code in the evening, my usual focus space is in a window nook in my family room surrounded on three sides by windows. In the chill of spring in New Hampshire, I’ll typically find myself in a cozy sweater, with a cup of tea, looking through my reflection out over a yard of slowly melting slush.",
    tags: ["Fun", "CSS", "Grid", "Tutorial", "Programming", "Tutorial"],
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
