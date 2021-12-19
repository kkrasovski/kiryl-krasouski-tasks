import { Product } from './products.model';

export const products = [
  {
    id: 1,
    name: "лампочка",
    room: "спальная",
    price: 30,
    category: "электрика",
  },
  {
    id: 2,
    name: "шпаклёва",
    room: "спальная",
    price: 1030,
    category: "смеси",
  },
  {
    id: 3,
    name: "саморезы",
    room: "спальная",
    price: 100,
    category: "расходники",
  },
  {
    id: 4,
    name: "ламинат",
    room: "спальная",
    price: 1230,
    category: "напольные покрытия",
  },
  {
    id: 13,
    name: "плитка Италия",
    room: "кухня",
    price: 690,
    category: "напольные покрытия",

  },
  {
    id: 5,
    name: "люстра Pro 2000",
    room: "кухня",
    price: 930,
    category: "электрика",

  },
  {
    id: 6,
    name: "унитаз",
    room: "туалет",
    price: 1010,
    category: "сантехника",

  },
  {
    id: 11,
    name: "люстра Ligt 1000",
    room: "спальная",
    price: 745,
    category: "электрика",

  },
  {
    id: 7,
    name: "плитка Керамин",
    room: "туалет",
    price: 1125,
    category: "напольные покрытия",

  },
  {
    id: 8,
    name: "точечные светильники",
    room: "туалет",
    price: 500,
    category: "электрика",

  },
  {
    id: 9,
    name: "кабель ВВГ",
    room: "спальная",
    price: 600,
    category: "электрика",

  },
  {
    id: 10,
    name: "смеситель Geberit",
    room: "кухня",
    price: 480,
    category: "сантехника",

  }
];

// export class ProductsListDb {
//   public productsDb: any = [
//     new Product(
//       1,
//       'лампочка',
//       30,
//       'спальная',

//       'электрика',
//       'Thu Jan 01 1970',
//       'куплен на распродаже'
//     ),
//     new Product(
//       2,
//       'шпаклёва',
//       1030,
//       'спальная',

//       'смеси',
//       'Thu Jan 01 1970',
//       '12мм Egger'
//     ),
//   ];
// }

export const rooms = [
  {
    id: 1,
    name: 'спальная',
  },
  {
    id: 2,
    name: 'кухня',
  },
  {
    id: 3,
    name: 'туалет',
  },
];

export const groups = [
  {
    id: 1,
    name: 'электрика',
  },
  {
    id: 2,
    name: 'смеси',
  },
  {
    id: 6,
    name: 'напольные покрытия',
  },
  {
    id: 7,
    name: 'сантехника',
  },
];
