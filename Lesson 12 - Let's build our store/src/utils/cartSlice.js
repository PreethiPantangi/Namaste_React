import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        restaurantName: ''
    },
    reducers: {
        // addItem is the action
        // The function is the reducer
        setRestaurantName: (state, action) => {
            state.restaurantName = action.payload
        },
        addItem: (state, action) => {

            // Vanilla redux or older version of redux -> We should not mutate the state directly
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            // Redux toolkit - We have to mutate the state
            // Mutating the state i.e directly modifying the state
            state.items.push(action.payload);
        },
        removeItem: (state,action) => {
            const itemId = action.payload.id;
            for (let i = 0; i < state.items.length; i++) {
                console.log(state.items[i]['id'], itemId);
                if(state.items[i]['id'] === itemId) {
                    state.items.splice(i,1);
                    break;
                }                
            }
        },
        clearCart: (state) => {
            // state = []; //This will not work as this is just giving reference to the state
            state.items.length = 0;
            // state.items.length = 0;

            // RTK - either mutate the state or return a new state
            // return {items: []};

        }
    }
});

// We will export actions and reducers
// Create slice creates and returns an object
/**
 * {
 *  actions: {addItem, removeItem, clearCart},
 *  reducer
 * }
}
 */

export const {addItem, removeItem, clearCart, setRestaurantName} = cartSlice.actions; //Actions

export default cartSlice.reducer; //Reducers