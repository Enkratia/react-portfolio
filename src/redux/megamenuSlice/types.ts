export type megamenuApiType = [
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
