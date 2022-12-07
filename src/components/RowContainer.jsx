import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
  // console.log(data);
  const rowContainer = useRef();

  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const [{ cartItems }, dispatch] = useStateValue();
  const addToCart = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
    //push cartItems to localstorage, so even if it refreshes we have items with us
  };

  useEffect(() => {
    addToCart();
  }, [items]);

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      ref={rowContainer}
      className={`w-full  my-12 flex items-center gap-3 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-275  h-auto min-w-[275px] md:w-300 md:min-w-[300px] bg-cardOverlay rounded-lg py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between"
          >
            <div className="w-full flex item-center justify-between">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
              >
                <img
                  src={item?.imageURL}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-700 mt-auto mb-auto flex items-center justify-center cursor-pointer hover:shadow-md"
                // onClick={() => setItems([...cartItems, item])}
                onClick={() => {
                  let temp = cartItems;
                  console.log("temp", temp);
                  let i = 0;
                  for (i = 0; i < temp.length; i++) {
                    if (temp[i].id == item.id) {
                      temp[i].qty += 1;
                      console.log("temp[]", temp[i]);
                      // setItems(...cartItems,temp[i]);
                      setItems(temp);
                      setCount(count + 1);
                      // addToCart();
                      // return;
                      break;
                    }
                  }
                  if (i === temp.length) {
                    setItems([...cartItems, item]);
                  }
                  addToCart();
                  // if (temp.include(item)) {
                  //   // console.log("hello")
                  //   // setItems([])
                  //   for (let i = 0; i < temp.length; i++) {
                  //     if (temp[i].id == item.id) {
                  //       temp[i].qty += 1;
                  //       break;
                  //     }
                  //   }
                  //   // temp[i].qty+=1
                  //   setItems(temp);
                  //   // addToCart();
                  //   console.log("cart ", cartItems);
                  // } else {
                  //   console.log(cartItems);
                  // }
                }}
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.calories} calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span> {item.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} alt="Not Found" className="h-340" />
          <p className="text-xl text-textColor font-semibold">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
