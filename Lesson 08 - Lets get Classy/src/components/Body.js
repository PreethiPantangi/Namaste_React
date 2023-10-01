import { useState, useEffect } from 'react'
import RestaurantCard from "./RestaurantCard";
import Loading from './Loading';
import { Link } from 'react-router-dom'

const Body = () => {

    // State variable
    const [listOfRes, setListOfRes] = useState([]);
    const [listOfFilteredRes, setListOfFilteredRes] = useState([]);
    const [cardTitle, setCardTitle] = useState("");
    const [searchVal, setSearchVal] = useState('');

    const getTopRatedRes = () => {
        const filteredList = listOfRes.filter((res) => res.info.avgRating >= 4);
        setListOfFilteredRes(filteredList);
    }

    const filterBySearchValue = () => {
        const filteredRes = listOfRes.filter((res) => (res.info.name.toLowerCase()).includes(searchVal.toLowerCase()));
        setListOfFilteredRes(filteredRes);
    }

    const fetchRestaurants = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5169014&lng=78.3428304");
        const json = await data.json();
        setCardTitle(json?.data?.cards[3]?.card?.card?.title);
        setListOfRes(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfFilteredRes(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {
        fetchRestaurants();
    }, [])

    return listOfRes && listOfRes.length === 0 ? <Loading/> : (
        <div className="body">
            <div className='res-container-title'>{cardTitle}</div>
            <div className='res-container-filters'>
                <ul>
                    <li onClick={() => getTopRatedRes()}>Ratings 4.0+</li>
                    <li>Pure Veg</li>
                    <li>Rs.300 - Rs.600</li>
                    <li>Less than Rs.300</li>
                </ul>
            </div>
            <div className="res-container">
                {
                    listOfFilteredRes && listOfFilteredRes.map((restaurant) => (
                        <Link className='link-comp' key={restaurant.info.id} to={"restaurant/" + restaurant.info.id}><RestaurantCard key={restaurant.info.id} resData = {restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;