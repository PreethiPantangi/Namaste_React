import React, { useState } from 'react'
import {cdnUrl} from '../utils/constants'

const RestaurantMenuAccordion = ({cardDetails}) => {
    
    const [isAccordionOpen, setIsAccordionOpen] = useState(true);

    const details = cardDetails;
  return (
    <div>
        <div className='accordion' onClick={()  => {setIsAccordionOpen(!isAccordionOpen);}}>
            <div className='category'>{details.title + "(" + details.itemCards.length + ")"}</div>
            <div>{isAccordionOpen ? 
            <img className='expand_collapse' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/OOjs_UI_icon_collapse.svg/2048px-OOjs_UI_icon_collapse.svg.png'/>: 
            <img className='expand_collapse' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHVb1IcFrhPX2fOXprYZ-vX4xKjRWEa8KLLA&usqp=CAU'/> 
            }</div>
        </div>
        
        {
            isAccordionOpen && (details.itemCards).map((itemCard) => 
            (
                <React.Fragment key={itemCard.card.info.id}>
                    <div className='item'>
                        <div className='item_details'> 
                            <div className='bestseller_veg'>
                                <div className={itemCard.card.info.isVeg === 1 ? 'green' : 'red'}></div>
                                {
                                    itemCard.card.info.isBestseller && itemCard.card.info.ribbon && 
                                    <div className='bestseller_veg'>
                                        <div className="five-pointed-star"></div>
                                        <div className='bestseller'>Bestseller</div>
                                    </div>
                                }
                            </div>
                            <div className='item_name'>{itemCard.card.info.name}</div>
                            <div className='item_price'>&#8377;{itemCard.card.info.price / 100}</div>
                            <div className='item_description'>{itemCard.card.info.description}</div>
                        </div>
                        <div className='item_image'>
                            {
                                itemCard.card.info.imageId ?
                                <React.Fragment>
                                    <img
                                        className='item_image_1'
                                        alt={itemCard.card.info.name}
                                        src={cdnUrl + itemCard.card.info.imageId}
                                    />
                                    <button className='addBtn'>Add</button>
                                </React.Fragment> : <button className='addBtn1'>Add</button>
                            }
                        </div>
                    </div>
                    <div className='divider'></div>
                </React.Fragment>
            )
            )
        }
    </div>
  )
}

export default RestaurantMenuAccordion