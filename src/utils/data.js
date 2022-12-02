import I1 from "../img/i1.png";
import F1 from "../img/f1.png";
import C3 from "../img/c3.png";
import Fi1 from "../img/fi1.png";
import R4 from "../img/r4.png";
import D2 from "../img/d2.png";

const heroData = [
  {
    id: 1,
    name: "Icecream",
    decp: "Choclate & Vanilla",
    price: "249",
    imageSrc: I1,
  },
  {
    id: 2,
    name: "Strawberries",
    decp: "Fresh Strawberries",
    price: "349",
    imageSrc: F1,
  },
  {
    id: 3,
    name: "Chicken Kebab",
    decp: "Mixed kebab Plate",
    price: "499",
    imageSrc: C3,
  },
  {
    id: 4,
    name: "Fish Kebab",
    decp: "Mixed Fish Kebab",
    price: "399",
    imageSrc: Fi1,
  },
  // {
  //   id: 5,
  //   name: "Soft Drinks",
  //   decp: "Pepsi",
  //   price: "399",
  //   imageSrc: D2,
  // },
  // {
  //   id: 6,
  //   name: "Rice",
  //   decp: "Fried Rice",
  //   price: "399",
  //   imageSrc: R4,
  // },
];

export const categories = [
  {
    id: 1,
    name: "Chicken",
    urlParamName: "chicken",
  },
  {
    id: 2,
    name: "Curry",
    urlParamName: "curry",
  },
  {
    id: 3,
    name: "Rice",
    urlParamName: "rice",
  },
  {
    id: 4,
    name: "Fish",
    urlParamName: "fish",
  },
  {
    id: 5,
    name: "Fruits",
    urlParamName: "fruits",
  },
  {
    id: 6,
    name: "Icecreams",
    urlParamName: "icecreams",
  },
  {
    id: 7,
    name: "Soft Drinks",
    urlParamName: "drinks",
  },
];

export default heroData;
