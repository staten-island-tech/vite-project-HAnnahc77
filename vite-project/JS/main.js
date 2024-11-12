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

function insertCards(album){
  DOMSelectors.spacing.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h2 id="card-header" class="padding">${album.name}</h2>
      <img src="${album.image}" alt="Album Image" class="padding">
      <h3 class="padding">${album.genre}</h3>
      <h3 class="padding">${album.language}</h3>
      <p class="padding">$${album.price}</p>
    </div>`
  );
};

albums.forEach((album) => {
  insertCards(album);
});

function resetToAllAlbums() {
  DOMSelectors.allButton.addEventListener("click", function () {
    DOMSelectors.spacing.innerHTML = '';
    albums.forEach((album) => {
      insertCards(album);
    });
  });
}

function filterCheapAlbums() {
  DOMSelectors.cheapButton.addEventListener("click", function () {

    const cheapAlbums = albums.filter((album) => album.price < 10);

    DOMSelectors.spacing.innerHTML = '';

    cheapAlbums.forEach((album) => {
      insertCards(album);
    });
  });
};

function filterExpensiveAlbums() {
  DOMSelectors.expensiveButton.addEventListener("click", function () {

    const expensiveAlbums = albums.filter((album) => album.price > 10);

    DOMSelectors.spacing.innerHTML = '';

    expensiveAlbums.forEach((album) => {
      insertCards(album);
    });
  });
};

function filterPopAlbums() {
  DOMSelectors.popButton.addEventListener("click", function () {

    const popAlbums = albums.filter((album) => album.genre.includes("Pop"));

    DOMSelectors.spacing.innerHTML = '';

    popAlbums.forEach((album) => {
      insertCards(album);
    });
  });
};

resetToAllAlbums();
filterCheapAlbums();
filterExpensiveAlbums();
filterPopAlbums();
