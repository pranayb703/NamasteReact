import { useEffect, useState } from "react";
import { MENU_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { json, useParams } from "react-router-dom";
import Header from './Header';

const RestaurantMenu = () => {
  console.log("Lets get the data first");
  const { resId } = useParams();
  console.log("useParams : ", resId);
  const [resName, setName] = useState(null);
  const [resInfo, setResInfo] = useState(null);
  const [resSubwayInfo, setResSubwayInfo] = useState(null);

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
    console.log("🚀 ~ fetchMenu ~ json:", json.data.cards[0].card.card.text);
    //resName = json.data.cards[0].card.card.text;

    setName(json.data.cards[0].card.card.text);
    setResInfo(
      json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card,
    );
    /** Adding this for subway issue */
    setResSubwayInfo(
      json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card,
    );
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

  // const { name } = resInfo?.data;
  // console.log("🚀 ~ RestaurantMenu ~ name:", name);
  console.log("🚀 ~ fetchMenu ~ resName:", resName);

  return (
    <div className="bg-red-100 justify-center items-center">
      <h2 className="font-extrabold font-sans text-xl shadow">{resName}</h2>
      <ul>
        {menuMap.map((item) => (
          <li className="">
            {item.card.info.name} - Rs.{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
