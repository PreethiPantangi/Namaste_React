import React from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantMenuAccordion from './RestaurantMenuAccordion'
import { PURE_VEG_IMAGE } from '../utils/constants'

const RestaurantMenu = () => {
  const {resId} = useParams();

  const resDetails = useRestaurantMenu(resId);

  if (resDetails === null) {
    return <Shimmer/>
  }

  const restaurantDetails = resDetails?.cards[0]?.card?.card?.info;
  const restaurantMenuCards = resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards; //?.cards[1]?.card?.card?.itemCards

  return (
    <div className='ml-10 mb-6 m-5 p-5'>
        <h1 className='text-[#282c3f] font-bold mb-3 text-primary capitalize'>{restaurantDetails.name}</h1>
        <div className='mb-2 text-[#7e808c] overflow-hidden text-ellipsis flex-nowrap text-sm'>{restaurantDetails.cuisines.join(", ")}</div>
        <div className='mb-2 text-[#7e808c] overflow-hidden text-ellipsis flex-nowrap text-sm'>{restaurantDetails.areaName}</div>
        <div className='mb-2 text-[#7e808c] overflow-hidden text-ellipsis flex-nowrap text-sm'>
          <div className='mt-3 flex space-x-1'>
            <svg className="RestaurantTimeCost_icon__8UdT4" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="9" cy="9" r="8.25" stroke="#3E4152" strokeWidth="1.5"></circle><path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152"></path></svg>
            <div className='cost'>{restaurantDetails.costForTwoMessage}</div>
          </div>
        </div>
        {
          restaurantDetails.veg && 
          <div className='flex'>
            <div>
              <img
                alt='Pure Veg'
                className='w-8 h-8'
                src={PURE_VEG_IMAGE}
              />
            </div>
            <div className='mt-2 text-sm'>PURE VEG</div>
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