import img1 from "../assets/productImages/card-key-storage/card-key-storage-2.png";
import img2 from "../assets/productImages/Card-key/card-key.png";
import img3 from "../assets/productImages/card-storage/card-storage2.png";
import img4 from "../assets/productImages/Card/card1.png"


export const addOnOptions = [
  {
    id: "powerbank",
    name: "Powerbank",
    price: 99,
    description: "Add a powerbank to your setup.",
  },
  {
    id: "magsafe",
    name: "MagSafe",
    price: 20,
    description: "Add MagSafe to your setup.",
  },
  {
    id : "coin module",
    name: "Coin Back Cover",
    price: 5,
    description: "Add a coin back cover to your setup.",
  },
  // {
  //   id : "additional_eyelet",
  //   name: "Additional Eyelet",
  //   price: 5,
  //   description: "Add an additional eyelet to your setup.",
  // }
];

export const configurations = [
  {
    id: "all-accessories",
    name: "Full Accessory Bundle",
    subtitle: "Includes Key Module, Hinge Attachment & Additional Eyelet",
    price: 125,
    tag: "Best Value",
    description:
      "The ultimate LYNK ID Holder setup featuring all available modular attachments for maximum functionality and utility.",
    features: [
      "Key holder module",
      "Hinge attachment",
      "Eyelet",
      "Quick card release slider",
      "Tool box (contains extra screws & screw driver)",
    ],
    image: img1,
  },
  {
    id: "key-card",
    name: "Key Module Config",
    subtitle: "With Top Key Attachment & Additional Eyelet",
    price: 117,
    description:
      "Designed for quick access to your ID while securely storing physical keys on the top module attachment.",
    features: [
      "Top key module",
      "Eyelet",
      "Quick card release slider",
      "Tool box (contains extra screws)",
    ],
    image: img2,
  },
  {
    id: "small-card",
    name: "Storage Module Config",
    subtitle: "With Side Hinge & Additional Eyelet",
    price: 104,
    description:
      "Features a durable side-hinge mechanism for attaching tool accessories or flexible mounting options.",
    features: [
      "Side hinge mechanism",
      "Eyelet",
      "Quick card release slider",
      "Tool box (contains extra screws)",
    ],
    image: img3,
  },
  {
    id: "minimal",
    name: "Minimalist Card & Key Holder",
    subtitle: "Base Holder Only",
    price: 96.00,
    description:
      "Sleek, lightweight, and ultra-compact base configuration for essential ID carrying without extra attachments.",
    features: [
      "Base frame",
      "Quick card release slider",
      "Slim minimalist profile",
      "Tool box (contains extra screws)",
    ],
    image: img4,
  },
];
