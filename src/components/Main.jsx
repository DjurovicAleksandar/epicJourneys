import InfoCard from "./InfoCard";

import santorini from "../assets/imgs/santorini.jpg";
import maldives from "../assets/imgs/maldives.jpg";
import bali from "../assets/imgs/bali.jpg";
import newyorkcity from "../assets/imgs/newyorkcity.jpg";
import berlin from "../assets/imgs/berlin.jpg";
import barcelona from "../assets/imgs/barcelona.jpg";
import interlaken from "../assets/imgs/interlaken.jpg";
import queenstown from "../assets/imgs/queenstown.jpg";
import patagonia from "../assets/imgs/patagonia.jpg";
import cusco from "../assets/imgs/cusco.jpg";
import jaipur from "../assets/imgs/jaipur.jpg";
import siemreap from "../assets/imgs/siemreap.jpg";

function Main() {
  const destinations = [
    {
      destination: {
        name: "Santorini",
        description:
          "Santorini is a fantastic Cycladic island in the southern Aegean Sea with astonishing volcanic scenery and world-famous sunset vistas. It comprises a luxury-oriented destination that is perfect for couples, with rich viticulture and history to dive into.",
        img: { santorini },
      },
      state: "Greece",
    },
    {
      destination: {
        name: "Maldives",
        description:
          "The Maldives is renowned for its white sandy beaches, pristine turquoise waters and unique underwater marine life. ",
        img: { maldives },
      },
      state: "Maldives",
    },
    {
      destination: {
        name: "Bali",
        description:
          "Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers' paradise!",
        img: { bali },
      },
      state: "Indonesia",
    },
    {
      destination: {
        name: "New York City",
        description:
          "New York is composed of five borough: Brooklyn, the Bronx, Manhattan, Queens and Staten Island - is home to 8.4 million people who speak more than 200 languages, hail from every corner of the globe, and, together, are the heart and soul of the most dynamic city in the world.",
        img: { newyorkcity },
      },
      state: "USA",
    },
    {
      destination: {
        name: "Berlin",
        description:
          "Berlin, the capital city of Germany, is renowned for its exceptional range of landmarks, vibrant cultural scene and way of life that's somehow all go yet relaxed. In fact, the city is best known for its striking contrasts.",
        img: { berlin },
      },
      state: "Germany",
    },
    {
      destination: {
        name: "Barcelona",
        description:
          "Barcelona is a city with a wide range of original leisure options that encourage you to visit time and time again. Overlooking the Mediterranean Sea, and famous for Gaudí and other Art Nouveau architecture, Barcelona is one of Europe's trendiest cities.",
        img: { barcelona },
      },
      state: "Spain",
    },
    {
      destination: {
        name: "Interlaken",
        description:
          "Interlaken is a small city in the Bernese Highlands region of central Switzerland. Located between two alpine lakes (Lake Brienz (Brienzersee) and Lake Thun (Thunersee)), Interlaken is a popular base camp for outdoor sports and travel.",
        img: { interlaken },
      },
      state: "Switzerland",
    },
    {
      destination: {
        name: "Queenstown",
        description:
          "Queenstown sits on the shore of Lake Wakatipu among dramatic alpine ranges. It's rumoured that gold prospectors - captivated by the majestic beauty of the surrounding mountains and rivers - gave this now cosmopolitan town its name.",
        img: { queenstown },
      },
      state: "New Zealand",
    },
    {
      destination: {
        name: "Patagonia",
        description:
          "Patagonia is a sparsely populated region located at the southern end of South America, shared by Argentina and Chile. The region comprises the southern section of the Andes mountains as well as the deserts, steppes and grasslands east of this southern portion of the Andes.",
        img: { patagonia },
      },
      state: "Argentina",
    },
    {
      destination: {
        name: "Cusco",
        description:
          "The city is famous for its spectacular main square, cobbled streets, and houses with terracotta tile roofs that will remind you of some ancient European villages. One of the most outstanding facts is its unique architecture in the world.",
        img: { cusco },
      },
      state: "Peru",
    },
    {
      destination: {
        name: "Siem Reap",
        description:
          "Set along the Siem Reap River, this small provincial capital boasts hundreds of sightseeing opportunities such as well-preserved colonial buildings, museums, traditional markets, and cultural performances.",
        img: { siemreap },
      },
      state: "Cambodia",
    },
    {
      destination: {
        name: "Jaipur",
        description:
          "With broad avenues and spacious gardens, the city is steeped in history and culture. Here the past comes alive in magnificent forts and palaces, blushed pink, where once lived the maharajas.",
        img: { jaipur },
      },
      state: "India",
    },
  ];
  return (
    <div id="destinations" className="container mx-auto px-10 lg:px-[100px]">
      <div className="grid grid-cols-12 2xl:grid-cols-15 gap-4 p-4">
        {destinations.map((obj, i) => {
          console.log(obj.state);
          return (
            <div
              key={i}
              className="col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-3"
            >
              <InfoCard info={obj} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
