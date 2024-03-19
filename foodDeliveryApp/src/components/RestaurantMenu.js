import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import LoadingCircle from "./LoadingCircle";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <LoadingCircle/>;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h2> {costForTwoMessage}</h2>
      <h3>Menu</h3>

      <ol>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name},{" "}
            {(item.card.info.price || item.card.info.defaultPrice) / 100} Rupees
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RestaurantMenu;
