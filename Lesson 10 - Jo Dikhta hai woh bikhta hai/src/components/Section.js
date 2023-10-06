import React from 'react'
import Carousel from './Carousel';
import RestaurantCard from './RestaurantCard';
import {Link} from 'react-router-dom'

const Section = ({card}) => {

    if(card[0] === 'offers' || card[0] === 'whats_on_mind') {
        let style = {};
        let imageUrl = '';
        let data = card[1].data.gridElements.infoWithStyle.info;
        if(card[0] === 'offers') {
            style = {'width': 425, 'height': 252};
            imageUrl = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/';
            title = 'Best offers for you'
            return (
                <Carousel 
                    style={style} 
                    imageUrl={imageUrl} 
                    data={data}
                    title={title}
                />
            )
        } 
        else if (card[0] === 'whats_on_mind'){
            style = {'width': 144, 'height': 180};
            imageUrl = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/';
            title = card[1].data.header.title;
            return (
                <Carousel 
                    style={style} 
                    imageUrl={imageUrl} 
                    data={data}
                    title={title}
                />
            )
        }
    } else if(card[0] === 'restaurants_list' || card[0] === 'top_brands_for_you') {
        let restaurants = card[1].data.gridElements.infoWithStyle.restaurants;
        return (
            <div>
                <div className='flex justify-between mt-5'>
                    <div className='text-xl font-extrabold text-primary font-family1 mt-5'>{card[1].data.title ? card[1].data.title : card[1].data.header.title}</div>
                    {card[0] === 'top_brands_for_you' && <div className='flex space-x-2'>
                        <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 16l-4-4m0 0l4-4m-4 4h18"
                            ></path>
                            </svg>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            ></path>
                            </svg>
                        </div>
                    </div>}
                </div>
                <div className= {card[0] === 'top_brands_for_you' ? 'flex mt-4 space-x-5 overflow-x-scroll no-scrollbar' : 'flex flex-wrap mt-4'}>
                    {
                        restaurants.map((restaurant) => <Link key={restaurant.info.id} to={"restaurant/" + restaurant.info.id}><RestaurantCard resData={restaurant} shouldEnableCarousel={card[0] === 'top_brands_for_you' ? true : false}/></Link>)
                    }
                </div>
            </div>
        )
    } else if (card[0] === 'otherDetails') {
        let otherDetails = card[1].data;
        return (
            <div>
              {otherDetails.map((details, index) => (
                <div key={index}>
                  <div className='text-xl font-extrabold text-primary font-family1 mt-5'>{details.title}</div>
                  <div className='grid grid-cols-4 gap-4 mt-4 text-center'>
                    {details.brands.map((brand, index) => (
                      <div className='border p-4 truncate cursor-pointer' key={index}>{brand.text}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )
    }
}

export default Section;