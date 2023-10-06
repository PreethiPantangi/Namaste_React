import { useState, useEffect } from 'react'
import Loading from './Loading';
import useInternetStatus from '../utils/useInternetStatus'
import Section from './Section'
import { fetchResUrl } from '../utils/constants';

const Body = () => {

    // State variable
    const [cards, setCards] = useState([]);

    const fetchRestaurants = async () => {
        const data = await fetch(fetchResUrl);
        const json = await data.json();
        const sections = new Map();
        let title = '';
        let isFirstTime = true;

        /**
         * Cards
         * 0 - Can be either offers banner or What's on your mind? - We can figure this out using the header object
         * 1 - If 0 is offers then 1 is header 
         * 2 - Restaurants in the CITY_NAME
         * 3 - Sort settings 
         * 4 - Restaurants for 2
         * 5 - Show more button
         * 6 - 11 -> shows different data 
         */

        console.log(json.data.cards);
        (json.data.cards).forEach((card) => { 
            let cardDetails = card.card.card;
            if(cardDetails.imageGridCards && cardDetails.gridElements &&  !cardDetails.header.title) {
                sections.set('offers', {isPresent: true, data: cardDetails});
            } else if (cardDetails.id === 'whats_on_your_mind') {
                sections.set('whats_on_mind', {isPresent: true, data: cardDetails});
            } else if (cardDetails.id === 'top_brands_for_you') {
                sections.set('top_brands_for_you', {isPresent: true, data: cardDetails});
            } else if (cardDetails.id === 'popular_restaurants_title') {
                title = cardDetails.title;
            } else if (cardDetails.id === 'restaurant_grid_listing') {
                cardDetails['title'] = title;
                sections.set('restaurants_list', {isPresent: true, data: cardDetails});
            } else if (cardDetails.id === 'restaurant_near_me_links') {
                if(isFirstTime) {
                    sections.set('otherDetails', {isPresent: true, data: [cardDetails]});
                    isFirstTime = false;
                } else {
                    let details = sections.get('otherDetails');
                    details.data.push(cardDetails);
                    sections.set('otherDetails', details);
                }
            }
        })
        console.log(sections);
        setCards(sections);
    }

    useEffect(() => {
        fetchRestaurants();
    }, [])

    const onlineStatus = useInternetStatus();

    if (onlineStatus === false) {
        return (
            <h1>Uh-ho! Looks like you are offline. Please check your internet connection.</h1>
        )
    }

    let cardsArray = Array.from(cards);

    return cardsArray && cardsArray.length === 0 ? <Loading/> : (
        <div>
            {
                
                cardsArray.map((card, index) => (<Section key={index} card={card}/>))
            }
        </div>
    )
}

export default Body;