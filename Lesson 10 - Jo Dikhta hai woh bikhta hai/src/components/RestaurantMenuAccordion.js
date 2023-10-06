import React, { useState } from 'react'
import {cdnUrl} from '../utils/constants'

const RestaurantMenuAccordion = ({cardDetails}) => {
    
    const [isAccordionOpen, setIsAccordionOpen] = useState(true);

    const details = cardDetails;
  return (
    <div>
        <div className='cursor-pointer flex justify-between mb-8 shadow-lg border-black' onClick={()  => {setIsAccordionOpen(!isAccordionOpen);}}>
            <div className='text-[#3e4152] font-bold p-2'>{details.title + "(" + details.itemCards.length + ")"}</div>
            <div>{isAccordionOpen ? 
            <img className='w-5 h-5 m-3' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/OOjs_UI_icon_collapse.svg/2048px-OOjs_UI_icon_collapse.svg.png'/>: 
            <img className='w-5 h-5 m-3' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHVb1IcFrhPX2fOXprYZ-vX4xKjRWEa8KLLA&usqp=CAU'/> 
            }</div>
        </div>
        
        {
            isAccordionOpen && (details.itemCards).map((itemCard) => 
            (
                <React.Fragment key={itemCard.card.info.id}>
                    <div className='flex justify-between m-3' key={itemCard.card.info.id}>
                        <div className='w-full mr-3 mb-6'> 
                            <div className='flex'>
                                <div className={itemCard.card.info.isVeg === 1 ? 'green' : 'red'}></div>
                                {
                                    itemCard.card.info.isBestseller && itemCard.card.info.ribbon && 
                                    <div className='flex'>
                                        <div className="five-pointed-star"></div>
                                        <div className='text-[#ee9c00] font-bold leading-4 text-sm'>Bestseller</div>
                                    </div>
                                }
                            </div>
                            <div className='mr-1 mt-3 font-bold text-[#3e4152] break-all'>{itemCard.card.info.name}</div>
                            <div className='mr-1 mt-3 font-bold text-[#3e4152] break-all'>&#8377;{itemCard.card.info.price / 100}</div>
                            <div className='mt-4 leading-5 break-all text-justify'>{itemCard.card.info.description}</div>
                        </div>
                        <div className='relative inline-block'>
                            {
                                itemCard.card.info.imageId ?
                                <React.Fragment>
                                    <img
                                        className='w-32 h-28 rounded-md'
                                        alt={itemCard.card.info.name}
                                        src={cdnUrl + itemCard.card.info.imageId}
                                    />
                                    <button className='bg-white text-green-700 border-solid shadow-md absolute top-24 left-8 pt-2 p-2 rounded-sm cursor-pointer'>Add</button>
                                </React.Fragment> : <button className='bg-white text-green-700 border-solid shadow-md absolute p-4 transform-50-3 cursor-pointer'>Add</button>
                            }
                        </div>
                    </div>
                    <div className='h-1 border-solid border-b-4'></div>
                </React.Fragment>
            )
            )
        }
    </div>
  )
}

export default RestaurantMenuAccordion