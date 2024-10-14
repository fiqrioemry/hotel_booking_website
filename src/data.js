// rooms images
import Room1Img from "./assets/img/rooms/1.png";
import Room1ImgLg from "./assets/img/rooms/1-lg.png";
import Room2Img from "./assets/img/rooms/2.png";
import Room2ImgLg from "./assets/img/rooms/2-lg.png";
import Room3Img from "./assets/img/rooms/3.png";
import Room3ImgLg from "./assets/img/rooms/3-lg.png";
import Room4Img from "./assets/img/rooms/4.png";
import Room4ImgLg from "./assets/img/rooms/4-lg.png";
import Room5Img from "./assets/img/rooms/5.png";
import Room5ImgLg from "./assets/img/rooms/5-lg.png";
import Room6Img from "./assets/img/rooms/6.png";
import Room6ImgLg from "./assets/img/rooms/6-lg.png";
import Room7Img from "./assets/img/rooms/7.png";
import Room7ImgLg from "./assets/img/rooms/7-lg.png";
import Room8Img from "./assets/img/rooms/8.png";
import Room8ImgLg from "./assets/img/rooms/8-lg.png";
// import icons
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from "react-icons/fa";

export const roomData = [
  {
    id: 1,
    name: "Superior Room",
    description:
      "Elevate your stay in our Superior Room, where comfort meets style in a perfectly balanced space. Thoughtfully designed with modern elegance and premium amenities, this room offers a serene retreat with everything you need for a restful and memorable experience. Enjoy a superior level of relaxation and hospitality.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 30,
    maxPerson: 1,
    price: 115,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: "Signature Room",
    description:
      "Step into the essence of bespoke luxury with our Signature Room, crafted for those who seek a truly unique experience. This room blends modern sophistication with timeless elegance, offering curated furnishings, exclusive amenities, and personalized service. Every detail is designed to leave a lasting impression, making your stay as distinctive as you are.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 70,
    maxPerson: 2,
    price: 220,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: "Deluxe Room",
    description:
      "Indulge in the perfect blend of sophistication and relaxation. Our Deluxe Room offers a stylish retreat with premium furnishings, sleek design, and personalized touches. Enjoy the finest comforts and immerse yourself in an unforgettable stay that exceeds all expectations.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 50,
    maxPerson: 3,
    price: 265,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
  {
    id: 4,
    name: "Luxury Room",
    description:
      " Step into a world of elegance and comfort, where every detail is designed to elevate your stay. Unwind in the serenity of a spacious, beautifully appointed room with modern amenities, plush bedding, and breathtaking views. Experience luxury like never before.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 50,
    maxPerson: 4,
    price: 289,
    image: Room4Img,
    imageLg: Room4ImgLg,
  },
  {
    id: 5,
    name: "Luxury Suite Room",
    description:
      "Discover the pinnacle of opulence in our Luxury Suite Room, where spacious elegance meets unparalleled comfort. Featuring a private lounge, exquisite decor, and top-tier amenities, this suite is designed to cater to your every need. Bask in the luxury of refined living, with breathtaking views and an ambiance of exclusivity tailored just for you.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 90,
    maxPerson: 5,
    price: 320,
    image: Room5Img,
    imageLg: Room5ImgLg,
  },
  {
    id: 6,
    name: "Deluxe Room",
    description:
      "Indulge in the perfect blend of sophistication and relaxation. Our Deluxe Room offers a stylish retreat with premium furnishings, sleek design, and personalized touches. Enjoy the finest comforts and immerse yourself in an unforgettable stay that exceeds all expectations.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 45,
    maxPerson: 6,
    price: 344,
    image: Room6Img,
    imageLg: Room6ImgLg,
  },
  {
    id: 7,
    name: "Luxury Room",
    description:
      "Step into a world of elegance and comfort, where every detail is designed to elevate your stay. Unwind in the serenity of a spacious, beautifully appointed room with modern amenities, plush bedding, and breathtaking views. Experience luxury like never before.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 84,
    maxPerson: 7,
    price: 389,
    image: Room7Img,
    imageLg: Room7ImgLg,
  },
  {
    id: 8,
    name: "Deluxe Room",
    description:
      "Indulge in the perfect blend of sophistication and relaxation. Our Deluxe Room offers a stylish retreat with premium furnishings, sleek design, and personalized touches. Enjoy the finest comforts and immerse yourself in an unforgettable stay that exceeds all expectations.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 48,
    maxPerson: 8,
    price: 499,
    image: Room8Img,
    imageLg: Room8ImgLg,
  },
];
