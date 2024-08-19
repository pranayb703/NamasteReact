import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  //UseState -> Maintains the state of the component
  // const [resLists, setResLists] = useState(resList.data.restaurants);
  // console.log("ResLists ", resLists[2]?.info?.avgRating);

  const [resLists, setResLists] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchTxt, setSearchTxt] = useState("");

  const onlineStatus = useOnlineStatus();

  //UseEffect -> It is called after the component is rendered
  //UseEffect -> If no dependency array it will be called on every time it is renedered
  //UseEffect -> If there is empty dependency array it is only called on initial render
  //UseEffect -> If there is dependency array it is called every time dependency updates or changes
  useEffect(() => {
    //fetch data
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0908063&lng=72.9076669&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();

    // console.log(
    //   "JSON ",
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    // );
    setResLists(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  if (onlineStatus === false) return <h1>No Internet Connection</h1>;
  if (resLists.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter m-4 px-4">
        <input
          type="text"
          className="border border-solid border-blue-950 focus:bg-cyan-100    "
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        ></input>
        <button
          className=" bg-gray-400 border border-solid border-black rounded-lg px-4 mx-4 hover:bg-orange-200"
          onClick={() => {
            const filteredList = resLists.filter((value) => {
              return value.info.name
                .toLowerCase()
                .includes(searchTxt.toLowerCase());
            });
            // console.log("Filter list length : ", filteredList.length);
            // console.log("Filter list length : ", filteredList);
            setFilteredList(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn bg-gray-400 border border-solid border-black rounded-lg px-4 mx-4 hover:bg-orange-200"
          onClick={() => {
            const filteredList = resLists.filter((value) => {
              console.log("Value : ", value.info.avgRating);
              return value.info.avgRating > 4.5;
            });
            //console.log("Top list : " + JSON.stringify(filteredList));
            setFilteredList(filteredList);
            //console.log(resList.data.restaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container flex flex-wrap m-2 p-2">
        {/* {resList.data.restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
        ))} */}

        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resObj={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
