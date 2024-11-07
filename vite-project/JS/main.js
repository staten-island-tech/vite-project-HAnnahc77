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
  DOMSelectors.body.insertAdjacentHTML("beforebegin");
});
