import { CDN_URL } from "../../utils/constants";

const RestaurantCard = ({ resObj }) => {
  const { name, avgRating, cuisines, cloudinaryImageId } = resObj?.info;
  return (
    <div className="res-card">
      <img alt="BB" className="res-img" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} stars</h5>
    </div>
  );
};

export default RestaurantCard;
