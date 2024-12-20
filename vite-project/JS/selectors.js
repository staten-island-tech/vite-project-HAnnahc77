const DOMSelectors = {
  button: document.querySelector(".button"),
  spacing: document.querySelector(".spacing"),
  body: document.querySelector("body"),
  allButton: document.querySelector(".allButton"),
  cheapButton: document.querySelector(".cheapButton"),
  expensiveButton: document.querySelector(".expensiveButton"),
  popButton: document.querySelector(".popButton"),
};

const albums = [
  {
    name: "Future Nostalgia",
    genre: "Pop",
    language: "English",
    image: "/cover1.jfif", // Change the path here
    price: 9.99,
  },
  {
    name: "folklore",
    genre: "Indie Folk",
    language: "English",
    image: "/cover2.jfif", // Change the path here
    price: 12.99,
  },
  {
    name: "Blonde",
    genre: "R&B",
    language: "English",
    image: "/cover3.jfif", // Change the path here
    price: 14.99,
  },
  {
    name: "The Dark Side of the Moon",
    genre: "Progressive Rock",
    language: "English",
    image: "/cover4.jfif", // Change the path here
    price: 15.99,
  },
  {
    name: "Abbey Road",
    genre: "Rock",
    language: "English",
    image: "/cover5.jpg", // Change the path here
    price: 11.99,
  },
  {
    name: "DAMN.",
    genre: "Hip-Hop",
    language: "English",
    image: "/cover6.jfif", // Change the path here
    price: 13.99,
  },
  {
    name: "Divide",
    genre: "Pop",
    language: "English",
    image: "/cover7.jfif", // Change the path here
    price: 9.99,
  },
  {
    name: "After Hours",
    genre: "R&B",
    language: "English",
    image: "/cover8.jfif", // Change the path here
    price: 12.99,
  },
  {
    name: "Lover",
    genre: "Pop",
    language: "English",
    image: "/cover9.jfif", // Change the path here
    price: 10.99,
  },
  {
    name: "In the Lonely Hour",
    genre: "Pop Soul",
    language: "English",
    image: "/cover10.jfif", // Change the path here
    price: 11.49,
  },
  {
    name: "A Night at the Opera",
    genre: "Rock",
    language: "English",
    image: "/cover11.jfif", // Change the path here
    price: 13.99,
  },
  {
    name: "Back to Black",
    genre: "Soul",
    language: "English",
    image: "/cover12.jfif", // Change the path here
    price: 9.99,
  },
  {
    name: "No. 6 Collaborations Project",
    genre: "Pop",
    language: "English",
    image: "/cover13.jfif", // Change the path here
    price: 11.99,
  },
  {
    name: "The Fame",
    genre: "Pop",
    language: "English",
    image: "/cover14.jfif", // Change the path here
    price: 8.99,
  },
  {
    name: "Unorthodox Jukebox",
    genre: "Pop",
    language: "English",
    image: "/cover15.jfif", // Change the path here
    price: 9.99,
  },
  {
    name: "The College Dropout",
    genre: "Hip-Hop",
    language: "English",
    image: "/cover16.jfif", // Change the path here
    price: 12.49,
  },
  {
    name: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
    genre: "Glam Rock",
    language: "English",
    image: "/cover17.jfif", // Change the path here
    price: 10.99,
  },
  {
    name: "Viva La Vida or Death and All His Friends",
    genre: "Alternative Rock",
    language: "English",
    image: "/cover18.jfif", // Change the path here
    price: 11.99,
  },
  {
    name: "In the Aeroplane Over the Sea",
    genre: "Indie Rock",
    language: "English",
    image: "/cover19.jfif", // Change the path here
    price: 15.49,
  },
  {
    name: "good kid, m.A.A.d city",
    genre: "Hip-Hop",
    language: "English",
    image: "/cover20.jfif", // Change the path here
    price: 13.49,
  },
];

export { DOMSelectors };
export { albums };
