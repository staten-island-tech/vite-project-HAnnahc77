const DOMSelectors = {
  button: document.querySelector(".button"),
  body: document.querySelector("body"),
};

const albums = [
  {
    name: "Future Nostalgia",
    genre: "Pop",
    language: "English",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/97/Dua_Lipa_-_Future_Nostalgia.png",
    price: 9.99,
  },
  {
    name: "folklore",
    genre: "Indie Folk",
    language: "English",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/Taylor_Swift_-_Folklore.png",
    price: 12.99,
  },
  {
    name: "Blonde",
    genre: "R&B",
    language: "English",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/0c/Frank_Ocean_-_Blonde.png",
    price: 14.99,
  },
  {
    name: "The Dark Side of the Moon",
    genre: "Progressive Rock",
    language: "English",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/04/Pink_Floyd_-_The_Dark_Side_of_the_Moon.png",
    price: 15.99,
  },
  {
    name: "Abbey Road",
    genre: "Rock",
    language: "English",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
    price: 11.99,
  },
  {
    name: "DAMN.",
    genre: "Hip-Hop",
    language: "English",
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/1a/Kendrick_Lamar_-_DAMN.png",
    price: 13.99,
  },
  {
    name: "Divide",
    genre: "Pop",
    language: "English",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/4b/Ed_Sheeran_-_Divide.png",
    price: 9.99,
  },
  {
    name: "After Hours",
    genre: "R&B",
    language: "English",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/The_Weeknd_-_After_Hours.png",
    price: 12.99,
  },
  {
    name: "Lover",
    genre: "Pop",
    language: "English",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c0/Taylor_Swift_-_Lover.png",
    price: 10.99,
  },
  {
    name: "In the Lonely Hour",
    genre: "Pop Soul",
    language: "English",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/52/Sam_Smith_-_In_the_Lonely_Hour.png",
    price: 11.49,
  },
  {
    name: "A Night at the Opera",
    genre: "Rock",
    language: "English",
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/fb/Queen_-_A_Night_at_the_Opera.png",
    price: 13.99,
  },
  {
    name: "Back to Black",
    genre: "Soul",
    language: "English",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a6/Amy_Winehouse_-_Back_to_Black.png",
    price: 9.99,
  },
  {
    name: "No. 6 Collaborations Project",
    genre: "Pop/Rap",
    language: "English",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/5c/Ed_Sheeran_-_No._6_Collaborations_Project.png",
    price: 11.99,
  },
  {
    name: "The Fame",
    genre: "Pop",
    language: "English",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/84/Lady_Gaga_-_The_Fame.png",
    price: 8.99,
  },
  {
    name: "Unorthodox Jukebox",
    genre: "Pop/Funk",
    language: "English",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Bruno_Mars_-_Unorthodox_Jukebox.png",
    price: 9.99,
  },
  {
    name: "The College Dropout",
    genre: "Hip-Hop",
    language: "English",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/4b/Kanye_West_-_The_College_Dropout.png",
    price: 12.49,
  },
  {
    name: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
    genre: "Glam Rock",
    language: "English",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7a/Ziggy_Stardust.jpg",
    price: 10.99,
  },
  {
    name: "Viva La Vida or Death and All His Friends",
    genre: "Alternative Rock",
    language: "English",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a6/Coldplay_-_Viva_la_Vida.png",
    price: 11.99,
  },
  {
    name: "In the Aeroplane Over the Sea",
    genre: "Indie Rock",
    language: "English",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e2/NMNH_-_In_the_Aeroplane_Over_the_Sea.png",
    price: 15.49,
  },
  {
    name: "good kid, m.A.A.d city",
    genre: "Hip-Hop",
    language: "English",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/46/Good_Kid_M.A.A.D_City.jpg",
    price: 13.49,
  },
];

export { DOMSelectors };
export { albums };
