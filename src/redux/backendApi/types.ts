export type MegamenuLinksType = [
  {
    nonCategory: [
      {
        title: string;
        url: string;
        red: boolean;
      },
    ];
    clothes: [
      {
        title: string;
        url: string;
      },
    ];
    shoes: [
      {
        title: string;
        url: string;
      },
    ];
    accessories: [
      {
        title: string;
        url: string;
      },
    ];
    offer: {
      imageUrl: string;
      description: string;
    };
  },
];

export type HeroContentType = [
  {
    id: number;
    title: string;
    subtitle: string;
    link1: {
      url: string;
      text: string;
    };
    link2: {
      url: string;
      text: string;
    };
  },
];

export type TopCategoriesType = [
  {
    id: number;
    url: string;
    imageUrl: string;
    text: string;
  },
];

export type NewArrivalsType = [
  {
    id: number;
    title: string;
    linkUrl: string;
    imageUrls: string[];
    rating: number;
    price: number;
    oldPrice: number;
    sizes: string[];
    colors: string[];
    category: string;
  },
];