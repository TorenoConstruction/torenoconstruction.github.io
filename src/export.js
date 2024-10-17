import fullhouse from "../src/assets/fullhouse.svg";
import bathroom from "../src/assets/bathroom.svg";
import kitchen from "../src/assets/kitchen.svg";
import basement from "../src/assets/basement.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

export const allservices = [
  {
    icon: kitchen,
    title: "KITCHEN RENOVATIONS",
    about:
      "A kitchen renovation refreshes your home’s heart, combining style and functionality. Updating cabinets, countertops, and appliances enhances both appearance and efficiency.",
  },
  {
    icon: bathroom,
    title: "BATHROOM RENOVATIONS",
    about:
      "A bathroom renovation revitalizes your space, merging elegance with efficiency. Modern fixtures, stylish tiles, and smart storage solutions enhance both form and function.",
  },
  {
    icon: basement,
    title: "BASEMENT RENOVATIONS",
    about:
      "A basement renovation transforms underutilized space into a functional, inviting area. This upgrade not only enhances comfort but also boosts your home's overall value and usability.",
  },
  {
    icon: fullhouse,
    title: "FULL HOUSE RENOVATIONS",
    about:
      "A full house renovation revitalizes every corner of your home, blending modern design with enhanced functionality. The result is a refreshed, cohesive home that reflects your style and meets your needs.",
  },

];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "planning",
    about:
      "We will help with planning your project, ensuring seamless execution, tailored designs, and exceptional quality from start to finish.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "design",
    about:
      "We will help with creating suitable designs for your project, blending functionality with style, tailored to your specific needs.",
  },
  {
    icon: FaRegBuilding,
    title: "building",
    about:
      "We are committed to expertly building your project, delivering quality craftsmanship, attention to detail, and ensuring timely completion.",
  },
  {
    icon: FaSitemap,
    title: "finish",
    about:
      "We are dedicated to perfecting the finish of your project, ensuring high-quality results with attention to detail and precision.",
  },
];

export const clients = [
  {
    image: client1,
    name: "Elizabeth, Kitchener",
    about:
      "The kitchen renovation exceeded our expectations! The design was flawless, quality top-notch, and the team was professional and efficient throughout.",
    
  },
  {
    image: client2,
    name: "Drew, BURLINGTON",
    about:
      "Our bathroom renovation turned out beautifully! The team was attentive, delivered high-quality craftsmanship, and finished the project on time.",
    
  },
  {
    image: client3,
    name: "Sam, Guelph",
    about:
      "The basement renovation was outstanding! The team delivered on time, with excellent craftsmanship, creative design, and seamless communication throughout the process.",
    
  },
];
