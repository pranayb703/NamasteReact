import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //const [showItems, setShowItems] = useState(false);
  //console.log(JSON.stringify(data));
  const handleClick = () => {
    console.log("Button clicked");
    setShowIndex();
    //setShowItems(!showItems);
  };
  return (
    <div>
      <div className=" w-6/12 m-auto bg-gray-100 shadow-lg p-4 text-center ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          {!showItems ? (
            <span className="font-bold">🔽</span>
          ) : (
            <span className="font-bold">🔼</span>
          )}
        </div>
        {showItems ? <ItemList items={data.itemCards} /> : <></>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
