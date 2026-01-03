import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// ESM __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//  VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

//  STATIC
app.use("/assets", express.static(path.join(__dirname, "..", "assets")));
app.use("/images", express.static(path.join(__dirname, "..", "images")));

//  DATA
// META
const meta = {
  description: "My personal gallery and portfolio website",
  keywords: "portfolio, gallery, frontend, html5up",
};

// INTRO
const intro = {
  title: "My Gallery",
  description: "The next level image gallery",
  image: "images/pic01.avif",
};

// SECTIONS (dynamic main sections)
const sections = [
  {
    id: "first",
    title: "Magna sed nullam nisl adipiscing",
    content: `
      <strong>Lorem ipsum dolor</strong> sit amet consectetur adipiscing elit.
      Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
      torquent per conubia nostra.
    `,
    image: "images/pic02.webp",
  },
];

// FEATURES
const features = {
  title: "Feugiat consequat tempus ultrices",
  description: `
    <strong>Etiam tristique libero</strong> eu nibh porttitor amet
    fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies
    condimentum.
  `,
  items: [
    { icon: "fa-laptop", text: "Consequat tempus" },
    { icon: "fa-bolt", text: "Etiam adipiscing" },
    { icon: "fa-signal", text: "Libero nullam" },
    { icon: "fa-cog", text: "Blandit condimentum" },
    { icon: "fa-map-marker-alt", text: "Lorem ipsum dolor" },
    { icon: "fa-code", text: "Nibh amet venenatis" },
  ],
  footerText: `
    Vehicula ultrices sed ultricies condimentum. Magna sed etiam
    consequat, et lorem adipiscing sed nulla.
  `,
};

// GALLERY
const gallery = {
  title: "Ultrices erat magna sed condimentum",
  description: `
    <strong>Integer mollis egestas</strong> nam maximus erat id euismod
    egestas. Pellentesque sapien ac quam.
  `,
  blocks: [
    {
      title: "Erat aliquam",
      description: "Vehicula ultrices dolor amet ultricies et condimentum.",
    },
    {
      title: "Nisl consequat",
      description: "Aenean ornare velit lacus, ac varius enim ullamcorper eu.",
    },
    {
      title: "Lorem gravida",
      description:
        "Proin aliquam facilisis ante interdum. Sed nulla amet lorem.",
    },
  ],
};

// IMAGES
const images = [
  {
    image: {
      full: "images/gallery/fulls/08.avif",
      thumb: "images/gallery/thumbs/08.webp",
    },
    name: "Diam compus accumsan",
    orientation: "portrait",
  },
  {
    image: {
      full: "images/gallery/fulls/09.avif",
      thumb: "images/gallery/thumbs/09.webp",
    },
    name: "Magna feugiat",
    orientation: "portrait",
  },
  {
    image: {
      full: "images/gallery/fulls/10.avif",
      thumb: "images/gallery/thumbs/10.webp",
    },
    name: "Nullam sed",
    orientation: "landscape",
  },
];

// CTA
const cta = {
  title: "Duis sed adipiscing veroeros amet",
  description: `
    <strong>Proin tempus feugiat</strong> sed varius enim lorem ullamcorper
    dolore aliquam aenean ornare velit lacus.
  `,
  buttons: [
    {
      text: "Get Started",
      link: "#",
      type: "primary",
      size: "large",
    },
    {
      text: "Learn More",
      link: "#",
      type: "",
      size: "large",
    },
  ],
};

// CONTACT
const contact = {
  title: "Get in touch",
  description: `
    <strong>Auctor commodo</strong> interdum et malesuada fames ac ante
    ipsum primis in faucibus.
  `,
  email: "example@gmail.com",
  phoneRaw: "+998957990034",
  phoneDisplay: "(+998) 95 799 00 34",
  address: {
    city: "Toshkent city",
    district: "Chilonzor district",
    details: "Quarter 20, Building 8, Entrance 3, Apartment 31",
  },
  submitText: "Send Message",
  form: [
    { type: "text", placeholder: "Name", half: true },
    { type: "email", placeholder: "Email", half: true },
    { type: "textarea", placeholder: "Message", half: false },
  ],
};

// SOCIAL
const social = [
  {
    label: "Telegram",
    icon: "fa-telegram",
    link: "https://t.me/Jama_9133",
  },
  {
    label: "WhatsApp",
    icon: "fa-whatsapp",
    link: "https://wa.me/998957990034",
  },
  {
    label: "Instagram",
    icon: "fa-instagram",
    link: "https://instagram.com/jamshiddinbabajonov",
  },
  {
    label: "LinkedIn",
    icon: "fa-linkedin-in",
    link: "https://www.linkedin.com/in/jamshiddin-babajonov-168705382",
  },
  {
    label: "GitHub",
    icon: "fa-github",
    link: "https://github.com/jama050690",
  },
];

// COPYRIGHT
const copyright = {
  text: "All rights reserved. Design:",
  author: "HTML5 UP",
  link: "https://jamshiddin.uz",
};

//  ROUTE

app.get("/", (req, res) => {
  res.render("index", {
    title: "My Gallery",

    metaDescription: meta.description,
    metaKeywords: meta.keywords,

    intro,
    sections,
    features,
    gallery,
    images,
    cta,
    contact,
    social,
    copyright,
  });
});

//  SERVER
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
