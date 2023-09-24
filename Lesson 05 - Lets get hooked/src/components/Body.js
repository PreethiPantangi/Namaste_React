import {useState} from 'react'
import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";

const Body = () => {

    // State variable
    const [listOfRes, setListOfRes] = useState(restaurantsList)

    const getTopRatedRes = () => {
        const filteredList = listOfRes.filter((res) => res.info.avgRating > 4);
        setListOfRes(filteredList);
    }

    return (
        <div className="body">
            <button 
                className="filter"
                onClick={() => {getTopRatedRes()}}
            >
                Top Rated Restaurants
            </button>
            <div className="res-container">
                {
                    listOfRes.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData = {restaurant} />))
                }
            </div>
        </div>
    )
}

export default Body;