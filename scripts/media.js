// @ts-check
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
    type: "Blog",
    date: "2023-10-25",
    title: "Understanding HTML Templates",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor convallis neque non gravida. Donec luctus, magna in ornare tristique, turpis urna porta erat, eu pharetra enim eros quis tortor. Cras sagittis quam vitae eleifend laoreet. In dapibus nisi vel magna tristique, ac suscipit purus lacinia. Nunc et diam eu nisl fringilla scelerisque non vitae ex. ",
    tags: ["HTML", "Web Dev", "Debugging", "Pair Programming"],
    readLength: "5 minute read",
    image:
      "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?auto=format&fit=crop&q=80&w=1362&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.youtube.com/watch?v=SratIvYEjc8&ab_channel=TripleTen",
  },
  {
    type: "Video",
    date: "2023-04-25",
    title: "Rust vs. HTMX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor convallis neque non gravida. Donec luctus, magna in ornare tristique, turpis urna porta erat, eu pharetra enim eros quis tortor. Cras sagittis quam vitae eleifend laoreet. In dapibus nisi vel magna tristique, ac suscipit purus lacinia. Nunc et diam eu nisl fringilla scelerisque non vitae ex. ",
    tags: ["Rust", "HTMX", "Growth", "Leadership"],
    readLength: "45 minute read",
    image:
      "https://images.unsplash.com/photo-1457144759132-40d119c2f120?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.youtube.com/watch?v=SratIvYEjc8&ab_channel=TripleTen",
  },
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
    const mediaTitle = newMediaProjectClone.querySelector(".media-item__title");
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
