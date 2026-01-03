export default {
  // BASIC INFO (har ikkala sahifaga umumiy)
  projectName: "Lionel Messi",
  description: "World Champion • Football Legend",
  heroImage: "/images/gallery/messi(04).webp",

  facebookUsername: "leomessi",
  instagramUsername: "leomessi",
  youtubeUsername: "leomessi",
  tiktokUsername: "leomessi",

  // PROFILE PAGE (index)
  profile: {
    personal: {
      fullName: "Lionel Andrés Messi",
      birthDate: "24 June 1987",
      birthPlace: "Rosario, Argentina",
      position: "Forward",
      height: "170 cm",
      img: "/images/gallery/messi(01).webp",
    },

    careerStart: {
      firstClub: "Newell's Old Boys",
      academyYear: 1994,
      debutClub: "FC Barcelona",
      professionalDebut: 2004,
      nationalTeamDebut: 2005,
      img: "/images/gallery/messi(02).webp",
    },

    family: {
      wife: "Antonela Roccuzzo",
      children: ["Thiago", "Mateo", "Ciro"],
      img: "/images/gallery/messi(05).webp",
    },

    gallery: [
      "/images/gallery/fulls/messi(02).webp",
      "/images/gallery/fulls/messi(03).webp",
      "/images/gallery/fulls/messi(04).webp",
      "/images/gallery/fulls/messi(05).webp",
      "/images/gallery/fulls/messi(07).webp",
      "/images/gallery/fulls/messi(08).webp",
      "/images/gallery/fulls/messi(09).webp",
      "/images/gallery/fulls/messi(10).webp",
      "/images/gallery/fulls/messi(11).webp",
      "/images/gallery/fulls/messi(12).webp",
    ],
  },

  //  ACHIEVEMENTS FAQAT SHU YERDA (ROOT)
  achievements: {
    trophies: {
      ballonDor: 8,
      worldCup: 1,
      copaAmerica: 1,
      championsLeague: 4,
      laLiga: 10,
    },

    stats: {
      totalGoals: 900,
      totalAssists: 401,

      clubs: [
        { name: "Barcelona", goals: 672, assists: 305 },
        { name: "PSG", goals: 32, assists: 35 },
        { name: "Inter Miami", goals: 28, assists: 16 },
      ],

      nationalTeam: {
        goals: 106,
        assists: 56,
      },

      gallery: [
        "/images/gallery/thumbs/messi(01).webp",
        "/images/gallery/thumbs/messi(02).webp",
        "/images/gallery/thumbs/messi(03).webp",
        "/images/gallery/thumbs/messi(04).webp",
        "/images/gallery/thumbs/messi(05).webp",
        "/images/gallery/thumbs/messi(06).webp",
        "/images/gallery/thumbs/messi(10).webp",
        "/images/gallery/thumbs/messi(11).webp",
      ],
    },
  },
};
