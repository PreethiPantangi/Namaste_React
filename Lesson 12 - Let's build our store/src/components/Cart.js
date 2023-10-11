import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item';
import { clearCart, addItem, removeItem } from '../utils/cartSlice';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const orderedItems = new Map();
    cartItems.forEach((item) => {
        if(orderedItems.has(item.id)) {
            let _item = orderedItems.get(item.id);
            _item.count += 1;
        } else {
            orderedItems.set(item.id, {item: item, count: 1});
        }
    });

    const _orderedItems = Array.from(orderedItems);
    console.log(_orderedItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleAddItem = (itemInfo) => {
        // Dispatch an action
        dispatch(addItem(itemInfo));
    }

    const handleRemoveItem = (item) => {
      dispatch(removeItem(item));
    }

    const handleItemCount = (item, type) => {
      if(type === 'add') {
        handleAddItem(item)
      } else {
        handleRemoveItem(item);
      }
    }

  return (
    <div>
        {
            cartItems.length > 0 ? 
            <div>
                <div className='flex justify-between'>
                    <div className='font-bold'>Cart Items</div>
                    <div 
                        className='p-2 border border-slate-300 text-green-500 cursor-pointer'
                        onClick={handleClearCart}
                    >
                        Clear cart
                    </div>
                </div>
                <div>
                    {
                        _orderedItems.map((item) => (
                            <div key={item[0]} className='flex m-2'>
                                <div className='m-2 w-4/12'>{item[1].item.name}</div>
                                <div className='flex justify-between border  w-20 border-black p-2 text-green-500'>
                                    <button onClick={() => handleItemCount(item[1].item, 'remove')} className="text-lg">-</button>
                                    <div className="flex-1 text-center">{item[1].count}</div>
                                    <button onClick={() => handleItemCount(item[1].item, 'add')} className="text-lg">+</button> 
                                </div>
                                <div className='w-4/12 float-right m-2'>&#8377;{(item[1].item.price / 100) * item[1].count}</div>
                            </div>
                        ))
                    }
                </div>
            </div> : 
            <div className='flex flex-col justify-center items-center h-screen'>
                <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
                    alt='Your cart is empty'
                    className='w-72 h-64'
                />
                <div>Your cart is empty</div>
                <div>You can go to the home page to view more restaurants</div>
            </div>
        }
    </div>
  )
}

export default Cart;