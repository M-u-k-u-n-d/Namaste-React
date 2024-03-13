import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {cloudinaryImageId,name,cuisines,locality,avgRating} = props?.valu?.info;
    const {deliveryTime} = props?.valu?.info?.sla;
    return (
      <div className="res-card">
        <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="card-img"></img>
        <div className="res-info">
          <h3>{name}</h3>
          <h4><span>{avgRating} ⭐</span> <span>Reached in {deliveryTime} minutes</span></h4>
          <h4>{cuisines?.join(", ")}</h4>
          <h4>{locality}</h4>
        </div>
      </div>
    );
  };

  export default RestaurantCard;
  