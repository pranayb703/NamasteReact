import { useEffect, useState } from "react";
import { MENU_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  console.log("Lets get the data first");
  const { resId } = useParams();
  console.log("useParams : ", resId);
  const [resName, setName] = useState(null);
  const [resInfo, setResInfo] = useState(null);
  const [resSubwayInfo, setResSubwayInfo] = useState(null);
  const [resCategory, setResCategory] = useState(null);
  const [showIndex, setShowIndex] = useState(null);

  const [resObjRM, setResObjRM] = useState(null);

  useEffect(() => {
    console.log("Restaurant data");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    //const resId = 28405;
    console.log("Fetching data", MENU_URL + resId);
    //const data = await fetch(MENU_URL + resId);
    //URL USED :  // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=78036",
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(
      "🚀 ~ fetchMenu ~ json:",
      json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR,
    );

    //resName = json.data.cards[0].card.card.text;

    setResObjRM(json.data);

    setName(json.data.cards[0].card.card.text);
    console.log("Getting cuisines : ", json.data.cards[2].card.card);
    setResInfo(
      json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card,
    );
    /** Adding this for subway issue */
    setResSubwayInfo(
      json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card,
    );

    setResCategory(json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
  };

  if (resInfo === null) return <Shimmer />;
  console.log("ResInfo.ItemCards");

  const { itemCards } = resInfo;
  if (itemCards === undefined) {
    console.log("Subway issue");
  }
  const subwayItemCards = resSubwayInfo.itemCards;
  console.log("🚀 ~ RestaurantMenu ~ subwayItemCards:", subwayItemCards);

  const menuMap = itemCards === undefined ? subwayItemCards : itemCards;
  console.log("🚀 ~ RestaurantMenu ~ menuMap:", menuMap);

  //console.log("🚀 ~ fetchMenu ~ resName:", resName);
  console.log("🚀 ~ fetchMenu ~ isArray:", Array.isArray(resCategory.cards));
  +console.log("🚀 ~ fetchMenu ~ resCategory:", resCategory.cards);

  console.log("ResObjRM ", resObjRM.cards[2].card.card);

  const { cuisines, costForTwoMessage } = resObjRM.cards[2].card.card.info;
  // console.log(
  //   "🚀 ~ fetchMenu ~ resCategory:",
  //   resCategory.cards[1].card.card["@type"],
  // );
  // console.log(
  //   "Filter option ",
  //   resCategory.cards.filter(
  //     (c) =>
  //       c.card?.card?.["@type"] ===
  //       "type.googleapis.com / swiggy.presentation.food.v2.ItemCategory",
  //   ),
  // );

  // console.log(
  //   resCategory?.cards.forEach((el) =>
  //     console.log("ForEach : ", el.card?.card?.["@type"]),
  //   ),
  // );

  // const categories = resCategory.cards.filter(
  //   (c) =>
  //     c.card?.card?.["@type"] ===
  //     "type.googleapis.com / swiggy.presentation.food.v2.ItemCategory",
  // );

  // resCategory.cards.forEach((el) =>
  //   console.log("ForEach : ", el.card?.card?.["@type"]),
  // );

  const categories = resCategory.cards.filter((c) =>
    c.card?.card?.["@type"].includes(
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    ),
  );

  const categories1 = resCategory.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCard",
  );

  // const categories = resCategory.cards.filter((c) =>
  //   c.card?.card?.["@type"].includes(
  //     "type.googleapis.com / swiggy.presentation.food.v2.ItemCategory",
  //   ),
  // );
  console.log("🚀 ~ RestaurantMenu ~ categories:", categories.length);
  // categories.forEach((el) =>
  //   console.log("ForEach : ", el.card),
  // );

  //console.log("Filter elements")
  //})

  return (
    <div className="justify-center items-center">
      <h2 className="text-center font-extrabold font-sans text-2xl shadow p-6 bg-gray-50">
        {resName}
      </h2>
      <h3 className="text-center font-light text-sm p-2 m-2">
        {cuisines.join(" ")} - 
        {costForTwoMessage}
      </h3>
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
      {/* <ul>
        {menuMap.map((item) => (
          <li key={item.card.info.id} className="bg-gray-300 text-black">
            {item.card.info.name} - Rs.{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
      <RestaurantCategory/> */}
    </div>
  );
};

export default RestaurantMenu;
