import { CDN_URL } from "../../utils/constants";

const RestaurantCard = ({ resObj }) => {
  if (!resObj) {
    return null; // or some default value
  }

  console.log(resObj);

  const { info } = resObj;
  if (!info) {
    return null; // or some default value
  }
  //console.log("ResObj " + JSON.stringify(resObj.info.name));
  const { name, avgRating, cuisines, cloudinaryImageId, isOpen, costForTwo } =
    resObj?.info;
  //console.log(aggregatedDiscountInfoV3.discountTag);
  return (
    <div
      data-testid="resCard"
      className="res-card w-48 bg-gray-200 border-solid border-black shadow-md m-2 p-2 rounded-lg text-black hover:bg-gray-900 hover:text-white"
    >
      <img alt="BB" className="res-img" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-extrabold">{name}</h3>
      <h5 className="font-light">{cuisines.join(", ")}</h5>
      <h4 className="font-light">{costForTwo}</h4>
      <h5 className="font-medium">{avgRating} stars</h5>
    </div>
  );
};

//Higher Order Component -> Input -> RestaurantCard and Output-> RestaurantCardWithDeal
export const withDealLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-green-600 text-white absolute p-1 mx-1 rounded-lg">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
