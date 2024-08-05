import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  //UseState -> Maintains the state of the component
  const [resLists, setResLists] = useState(resList.data.restaurants);
  console.log("ResLists ", resLists[2].info.avgRating);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button clicked ", resLists);
            console.log("Typeof ", resLists);
            //console.log("Typeof ", typeof resLists.data.restaurants);
            //console.log("Typeof ", typeof resLists);

            const filterList = resLists.filter((value) => {
              console.log("Value", value.info.avgRating);
              return value.info.avgRating > 4.5;
              //return 0;
            });
            setResLists(filterList);
            console.log(resList.data.restaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* {resList.data.restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
        ))} */}
        {resLists.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
