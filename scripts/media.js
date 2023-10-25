// MEDIA
const mediaContainer = document.querySelector(".media__list");

const mediaItems = [
  {
    type: "blog",
    date: "2023-10-25",
    title: "Understanding HTML Templates",
    description: "A deep dive into HTML template elements.",
    tags: ["HTML", "Web Dev"],
    readLength: "5 min read",
    image: "https://example.com/blog-image.jpg",
  },
];

class MediaCard {
  constructor({ type, date, title, description, tags, readLength, image }) {
    this._type = type;
    this._date = date;
    this._title = title;
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
    const mediaDescription = newMediaProjectClone.querySelector(".media-item__description");
    const mediaReadLength = newMediaProjectClone.querySelector(".media-item__read-length");
    const tagList = newMediaProjectClone.querySelector(".media-item__tags");

    image.src = this._image;
    image.alt = this._title;
    mediaTitle.textContent = this._title;
    mediaType.textContent = `Type: ${this._type}`;
    mediaDate.textContent = `Date: ${this._date}`;
    mediaDescription.textContent = this._description;
    mediaReadLength.textContent = this._readLength;

    this._tags.forEach((tag) => {
      const li = document.createElement("li");
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
