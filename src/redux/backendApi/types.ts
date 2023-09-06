// Megamenu
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

// Hero
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

// Top categories
export type TopCategoriesType = [
  {
    id: number;
    url: string;
    imageUrl: string;
    text: string;
  },
];

// Product
interface ObjectKeys {
  [key: string]: number | string | string[] | ProductVideoType[] | ProductDetails | ProductRating;
}

interface ObjectKeysRating {
  [key: string]: number;
}

type ProductVideoType = {
  thumbnail: string;
  video: string;
};

type ProductDetails = {
  details: {
    description: string;
    items: string[];
  };
  fabric: string[];
  care: {
    wash: string;
    ironing: string;
    bleach: string;
    tumble: string;
  };
};

// ProductReview
export type ProductReviewType = {
  productId: number;
  name: string;
  date: string;
  rating: number;
  text: string;
  recipient: string;
  like: number;
  dislike: number;
  email: string;
  title: string;
  productLink: string;
};

export type ProductReviews = ProductReviewType[];

export interface ProductRating extends ObjectKeysRating {
  "5": number;
  "4": number;
  "3": number;
  "2": number;
  "1": number;
}

export interface ProductType extends ObjectKeys {
  id: number;
  title: string;
  linkUrl: string;
  imageUrls: string[];
  videos: ProductVideoType[];
  rating: ProductRating;
  price: number;
  oldPrice: number;
  discount: number;
  size: string[];
  color: string[];
  group: string;
  type: string;
  category: string[];
  productDetails: ProductDetails;
  brand: string;
  material: string[];
  object: string[];
}

export type ProductsType = ProductType[];

// Banners
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

// Popular categories
export type PopularCategoriesType = [
  {
    name: string;
    linkUrl: string;
    imageUrl: string;
  },
];

// Posts (Hero page)
export type PostType = {
  id: number;
  linkUrl: string;
  imageUrl: string;
  title: string;
  category: string;
  categoryLink: string;
  date: string;
  comments: string[];
  text: string;
  isFeatured: boolean;
  tags: string[];
};

export type PostsType = PostType[];

// Countries / Cities
export type CountriesType = string[];

export type CitiesType = [
  {
    country: string;
    cities: string[];
  },
];

// Shipping
export type ShippingMethods = [
  {
    destination: string;
    date: string;
    price: string;
  },
];

// Complete look
export type CompleteLookType = {
  lookImage: string;
  productIds: number[];
};

// User`s orders
export type UsersOrdersProductsType = {
  imageUrl: string;
  linkUrl: string;
  title: string;
  color?: string;
  size?: string;
  price: number;
  quantity: number;
};

export type UsersOrdersType = {
  vendor: string;
  state: string;
  date: string;
  shipping: number;
  tax: number;
  subtotal: number;
  total: number;
  trackUrl: string;
  products: UsersOrdersProductsType[];
};

// Posts Comments
export type PostsCommentType = {
  postId: string[];
  name: string;
  date: string;
  text: string;
  recipient: string;
  email: string;
};

// Contacts
export type OutletStoresInfoType = {
  href: string;
  text: string;
};

export type OutletStoresType = {
  imageUrl: string;
  title: string;
  info: OutletStoresInfoType[];
};

// **
export type ContactUsType = {
  href: string;
  text: string;
};

// **
export type ContactsFAQType = {
  question: string;
  answer: string;
};

// Orders
export type OrderInfoType = {
  status: string;
  location: string;
  timedate?: string;
};

// **
export type OrderType = {
  number: string;
  shipping: string;
  shippingDate: string;
  destination: string;
  expectedDate: string;
  status: string;
  isNotify: boolean;
  info: OrderInfoType[];
};

// Auth
export type RegisterType = {
  fullName: string;
  email: string;
  password: string;
};

export type LoginType = {
  email: string;
  password: string;
};
