import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  
  const {resId} = useParams();  

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
    // console.log(resInfo);
    // console.log(resInfo?.cards[0]?.card?.card?.info);
  };

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || []; 
console.log(resInfo);
// console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
//   console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h2> {costForTwoMessage}</h2>
      <h3>Menu</h3>

      <ol>{itemCards.map((item) => 
          (<li key={item.card.info.id}>
            {item.card.info.name},{" "}
            {(item.card.info.price || item.card.info.defaultPrice) / 100} Rupees
          </li>))
      }</ol>
    </div>
  );
};

export default RestaurantMenu;
