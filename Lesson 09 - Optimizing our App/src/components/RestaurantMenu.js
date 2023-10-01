import React from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantMenuAccordion from './RestaurantMenuAccordion'

const RestaurantMenu = () => {
  const {resId} = useParams();

  const resDetails = useRestaurantMenu(resId);

  if (resDetails === null) {
    return <Shimmer/>
  }

  const restaurantDetails = resDetails?.cards[0]?.card?.card?.info;
  const restaurantMenuCards = resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards; //?.cards[1]?.card?.card?.itemCards

  return (
    <div className='menu'>
        <h1 className='restaurant_name'>{restaurantDetails.name}</h1>
        <div className='restaurant_otherDetails'>{restaurantDetails.cuisines.join(", ")}</div>
        <div className='restaurant_otherDetails'>{restaurantDetails.areaName}</div>
        <div className='restaurant_otherDetails'>
          <div className='cost-details'>
            <svg className="RestaurantTimeCost_icon__8UdT4" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="9" cy="9" r="8.25" stroke="#3E4152" strokeWidth="1.5"></circle><path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152"></path></svg>
            <div className='cost'>{restaurantDetails.costForTwoMessage}</div>
          </div>
        </div>
        {
          restaurantDetails.veg && 
          <div className='pure_veg_container'>
            <div>
              <img
                alt='Pure Veg'
                className='pure_veg'
                src="https://media.istockphoto.com/id/1297289529/vector/leaf-icon-vector-stock-illustration.jpg?s=612x612&w=0&k=20&c=dFtiy2BLo20FR5OeJg932L1BW4UNXhC-f-zew5vfLz0="
              />
            </div>
            <div>PURE VEG</div>
          </div>
        }

        <div className='restaurant-menu-details'>
        {
          restaurantMenuCards.map((card) => (
              <div key={card?.card?.card?.id}>
                {
                  card?.card?.card?.itemCards && 
                  <RestaurantMenuAccordion key={card?.card?.card?.id} cardDetails={card?.card?.card}/>
                }
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default RestaurantMenu;