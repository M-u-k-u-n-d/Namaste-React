import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
// console.log(listOfRestaurant.length)
  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6643923&lng=77.4465323&page_type=DESKTOP_WEB_LISTING";
    let data = await fetch(url);
    let json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants    );
  };
  return  listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search. . ."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            let filteredRestaurant = listOfRestaurant.filter((res) => {
              if (
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
                return res;
            });
            setFilteredListOfRestaurant(filteredRestaurant);
            console.log(filteredListOfRestaurant);
          }}
        >
          Search
        </button>

        <button
          type="submit"
          className="top-rated"
          onClick={() => {
            console.log("Button Clicked");
            let filteredList = listOfRestaurant.filter((val) => {
              if (val.info.avgRating >= 4.3) return val;
            });
            setFilteredListOfRestaurant(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>

      <div className="res-container">
        {filteredListOfRestaurant?.map((val) => {
          return <RestaurantCard key={val.info.id} valu={val} />;
        })}
      </div>
    </div>
  );
};

export default Body;
