import React, { useState } from "react";
import { cdnUrl } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const Item = ({item, isCart}) => {

    const dispatch = useDispatch();
    const [selectedCount, setSelectedCount] = useState(0);

    const handleAddItem = (itemInfo) => {
        // Dispatch an action
        setSelectedCount(selectedCount + 1);
        dispatch(addItem(itemInfo));
    }

    const handleRemoveItem = (item) => {
      setSelectedCount(selectedCount - 1);
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
    <React.Fragment>
      <div className="flex justify-between m-3" key={item.id}>
        <div className="w-10/12 h-32 mr-3 mb-6">
          <div className="flex">
            <div className={item.isVeg === 1 ? "green" : "red"}></div>
            {item.isBestseller && item.ribbon && (
              <div className="flex">
                <div className="five-pointed-star"></div>
                <div className="text-[#ee9c00] font-bold leading-4 text-sm">
                  Bestseller
                </div>
              </div>
            )}
          </div>
          <div className="mr-1 mt-3 font-bold text-[#3e4152] break-all">
            {item.name}
          </div>
          <div className="mr-1 mt-3 font-bold text-[#3e4152] break-all">
            &#8377;{item.price / 100}
          </div>
          <div className="mt-4 leading-5 break-all text-justify">
            {item.description}
          </div>
        </div>
        <div className="relative inline-block w-2/12">
          {isCart ? 
            <img
              className="h-28 rounded-md"
              alt={item.name}
              src={cdnUrl + item.imageId}
            /> :
            <div className="relative text-center">
              <img
                className="h-28 rounded-md"
                alt={item.name}
                src={cdnUrl + item.imageId}
              />
              {selectedCount === 0 ? 
                <button
                  className="bg-slate-100 text-green-500 border w-1/2 border-black shadow-md absolute top-20 left-9 p-2 rounded-sm cursor-pointer"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button> :
                <div className="flex bg-slate-100 w-1/2 text-green-500 border border-black shadow-md absolute top-20 left-9 p-2 rounded-sm cursor-pointer justify-between">
                  <div className="flex items-center">
                    <button onClick={() => handleItemCount(item, 'remove')} className="text-lg">-</button>
                  </div>
                  <div className="flex-1 text-center">{selectedCount}</div>
                  <div className="flex items-center">
                    <button onClick={() => handleItemCount(item, 'add')} className="text-lg">+</button>
                  </div>
                </div>                       
              }
            </div>
          }
        </div>
      </div>
      <div className="h-1 border-solid border-b-4"></div>
    </React.Fragment>
  );
};

export default Item;
