import RestaurantCard , {topRatedLabel} from "./RestaurantCard";
import { useEffect, useState ,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const {loggedInUser , setUserName} = useContext(UserContext);
  const RestaurantCardLabel = topRatedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6643923&lng=77.4465323&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    let data = await fetch(url);
    let json = await data.json();

    // this API may be changed after some time need to update it , after some time intervals.

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if(!onlineStatus) return(
    <h1>You are offline.</h1>
  )


  return  listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-[80vw] m-auto ">
      <div className="flex items-center justify-center mt-10 gap-6">
        <input className="border-2 border-black h-8 rounded-lg text-start pl-4"
          data-testid = "searchInput"
          type="text"
          placeholder="Search. . ."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="h-8 rounded-lg w-28  bg-blue-200 hover:bg-blue-400 hover:text-white font-serif"
          type="submit"
          onClick={() => {
            let filteredRestaurant = listOfRestaurant?.filter((res) => {
              if (
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
                return res;
            });
            setFilteredListOfRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>

        <button className="h-8 rounded-lg w-28  bg-green-200 hover:bg-green-400 hover:text-white font-serif"
          type="submit"
          onClick={() => {
            let filteredList = listOfRestaurant?.filter((val) => {
              if (val.info.avgRating >= 4.3) return val;
            });
            setFilteredListOfRestaurant(filteredList);
          }}
        >
          Top Rated
        </button>

        <p>
          UserName : 
          <input className="border-2 border-black h-8 rounded-lg text-start pl-4" value={loggedInUser} onChange={(e)=>{setUserName( e.target.value);
          }}/>
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 justify-items-center mt-9">
        {filteredListOfRestaurant?.map((val) => (
          <Link  key={val.info.id} to={"/restaurants/" + val.info.id} >
          {(val.info.avgRating >= 4.3) ? (
            <RestaurantCardLabel valu={val?.info}/>
          ) :
          (
          <RestaurantCard valu={val?.info} />
          )} </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
