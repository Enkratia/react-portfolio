export type megamenuLinksType = [
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

export type heroContentType = [
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

export type topCategoriesType = [
  {
    id: number;
    url: string;
    imageUrl: string;
    text: string;
  },
];
