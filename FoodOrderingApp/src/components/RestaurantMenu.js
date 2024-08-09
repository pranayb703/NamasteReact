import { useEffect, useState } from "react";
import { MENU_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  console.log("Lets get the data first");
  const { resId } = useParams();
  console.log("useParams : ", resId);
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
    console.log(
      "🚀 ~ fetchMenu ~ json:",
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card,
    );
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

  //const { itemCategory } = resInfo.categories[0];

  // if (!resInfo.itemCards) {
  //   console.log("ResInfo.ItemCards");
  //   console.log("resInfo", resInfo.categories[0].itemCards[0].card.info.name);
  //   const { itemCategory } = resInfo.categories[0];
  // }

  //URL
  //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=28405&catalog_qa=undefined&submitAction=ENTER
  return (
    <div>
      <ul>
        {menuMap.map((item) => (
          <li>
            {item.card.info.name} - Rs.{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
