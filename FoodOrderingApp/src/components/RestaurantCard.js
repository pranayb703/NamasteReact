import { CDN_URL } from "../../utils/constants";

const RestaurantCard = ({ resObj }) => {
  //console.log("ResObj " + JSON.stringify(resObj.info.name));
  const { name, avgRating, cuisines, cloudinaryImageId } = resObj?.info;
  return (
    <div className="res-card w-48 bg-gray-200 border-solid border-black shadow-md m-2 p-2 rounded-lg text-black hover:bg-gray-900 hover:text-white">
      <img alt="BB" className="res-img" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-extrabold">{name}</h3>
      <h4 className="font-light">{cuisines.join(", ")}</h4>
      <h5 className="font-medium">{avgRating} stars</h5>
    </div>
  );
};

export default RestaurantCard;
