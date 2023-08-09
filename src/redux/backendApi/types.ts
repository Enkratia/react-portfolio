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

// **
interface ObjectKeys {
  [key: string]: number | string | string[] | ProductReviewsType[] | ProductVideoType[];
}

type ProductReviewsType = {
  name: string;
  date: string;
  rating: number;
  text: string;
  recipient: string;
  like: number;
  dislike: number;
};

type ProductVideoType = {
  thumbnail: string;
  video: string;
};

export interface ProductType extends ObjectKeys {
  id: number;
  title: string;
  linkUrl: string;
  imageUrls: string[];
  videos: ProductVideoType[];
  rating: number;
  price: number;
  oldPrice: number;
  discount: number;
  size: string[];
  color: string[];
  group: string;
  type: string;
  reviews: ProductReviewsType[];
}

export type ProductsType = ProductType[];

// **
export type BannersType = [
  {
    id: number;
    title: string;
    subtitle: string;
    linkUrl: string;
    btnText: string;
    date: string;
  },
];

// **
export type PopularCategoriesType = [
  {
    name: string;
    linkUrl: string;
    imageUrl: string;
  },
];

// **
export type PostsType = [
  {
    id: number;
    linkUrl: string;
    imageUrl: string;
    title: string;
    category: string;
    categoryLink: string;
    date: string;
    comments: string[];
    text: string;
  },
];

// **
export type CountriesType = string[];

export type CitiesType = [
  {
    country: string;
    cities: string[];
  },
];

// **
export type ShippingMethods = [
  {
    destination: string;
    date: string;
    price: string;
  },
];
