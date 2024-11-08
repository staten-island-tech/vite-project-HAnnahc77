import "../CSS/style.css";
import { DOMSelectors } from "./selectors.js";
import { albums } from "./selectors.js";

DOMSelectors.button.addEventListener("click", function () {
  if (DOMSelectors.body.classList.contains("cool")) {
    DOMSelectors.body.classList.add("warm");
    DOMSelectors.body.classList.remove("cool");
  } else {
    DOMSelectors.body.classList.add("cool");
    DOMSelectors.body.classList.remove("warm");
  }
});

albums.forEach((album) => {
  DOMSelectors.body.insertAdjacentHTML(
    "beforeend",
    `<div class="spacing">
    <div class="card">
        <h2 id="card-header" class="padding">${album.name}</h2>
        <img src="${album.image}" alt="Album Image"class="padding">
        <h3 class="padding">${album.genre}</h3>
        <h3 class="padding" >${album.language}</h3>
        <p class="padding">${album.price}</p>
      </div>
      </div>`
  );
});
