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
  DOMSelectors.body.insertAdjacentHTML("beforeend", `<div class="spacing">
    <div class="card">
        <h1 id="card-header">${album.name}</h1>
        <img src="${album.image}" alt="Album Image">
        <h2>${album.genre, album.language}</h2>
        <p>${album.price}</p>
      </div>
      </div>`)
});
