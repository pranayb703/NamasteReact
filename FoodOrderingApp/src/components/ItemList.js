import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";

const ItemList = ({ items }) => {
  //console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    console.log("Add item clicked -> ", item);
    //Dispatch  an action
    dispatch(addItem(item));
  };

  return (
    <div className="">
      {items.map((item) => (
        <div
          className="p-2 m-2 border-gray-400 border-b-2"
          key={item.card.info.id}
        >
          <div className="flex justify-between">
            <button
              className="absolute bg-black text-white p-2 rounded-lg cursor-pointer"
              onClick={() => handleAddItem(item)}
            >
              +Add
            </button>
            <img
              className="w-28 h-28"
              src={CDN_URL + item.card.info.imageId}
            ></img>
            <span className="mx-1 shadow-sm">
              {item.card.info.isVeg === 1 ? "🟢" : "🔴"}
            </span>
            <span className="mx-2 font-extrabold font-sans">
              {item.card.info.name}
            </span>

            <span className="mx-2 font-light ">
              Rs.
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
          </div>
          <div>
            <span className="text-sm">
              {item.card.info.description
                ? item.card.info.description
                : "Check with the restaurant!"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
