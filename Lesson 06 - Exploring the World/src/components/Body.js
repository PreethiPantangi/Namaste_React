import { useState, useEffect } from 'react'
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer';

const Body = () => {

    // State variable
    const [listOfRes, setListOfRes] = useState([]);
    const [listOfFilteredRes, setListOfFilteredRes] = useState([]);
    const [searchVal, setSearchVal] = useState('');

    const getTopRatedRes = () => {
        const filteredList = listOfRes.filter((res) => res.info.avgRating > 4);
        setListOfRes(filteredList);
    }

    const filterBySearchValue = () => {
        const filteredRes = listOfRes.filter((res) => (res.info.name.toLowerCase()).includes(searchVal.toLowerCase()));
        setListOfFilteredRes(filteredRes);
    }

    const fetchRestaurants = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRes(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfFilteredRes(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {
        fetchRestaurants();
    }, [])

    return listOfRes.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className='filter-search'>
                <div className='search'>
                    <input 
                        type='text' 
                        className='search-box' 
                        placeholder='Search' 
                        value={searchVal}
                        onChange={(e) => {console.log(e.target.value);setSearchVal(e.target.value)}}
                    />
                    <button onClick={() => {filterBySearchValue()}}>Search</button>
                </div>
                <button 
                    className="filter"
                    onClick={() => {getTopRatedRes()}}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfFilteredRes.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData = {restaurant} />))
                }
            </div>
        </div>
    )
}

export default Body;