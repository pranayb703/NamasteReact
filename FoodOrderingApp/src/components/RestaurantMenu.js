import { useEffect, useState } from "react";
import { MENU_URL } from "../../utils/constants";

const RestaurantMenu = () => {
  console.log("Lets get the data first");

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    console.log("Restaurant data");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const resId = 28405;
    console.log("Fetching data");
    //const data = await fetch(MENU_URL + resId);
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=78036",
    );

    const json = await data.json();
    console.log(
      "Fetched data : ",
      json.data.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards,
    );

    setResInfo(
      json.data.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card,
    );

    console.log("Reinfo : " + JSON.stringify(resInfo));
    // const { itemCards } =
    //   json.data.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

    //console.log("Res :  ", itemCards[0].card.info.name);
  };

  //URL
  //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=28405&catalog_qa=undefined&submitAction=ENTER
  return (
    <div>
      Restaurant Menu
      <ul>
        <li>Biryani </li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
