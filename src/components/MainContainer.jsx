import React, { useEffect, useState } from "react";
import { HomeContainer, RowContainer, MenuContainer, CartContainer } from "./index";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useStateValue } from "../context/StateProvider";
const MainContainer = () => {
  const [{foodItems,cartShow },dispatch] = useStateValue();

  const [scrollValue,setScrollValue] = useState();

  useEffect(() => {
  }, [scrollValue])
  


  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      {<HomeContainer />}

      <section className="w-full py-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-lg font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our fresh & healthy fruits
          </p>
          <div className="hidden md:flex  gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(scrollValue===-301?setScrollValue(-300):setScrollValue(-301))}
            >
              <MdChevronLeft className="text-lg text-white " />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"
              onClick={() => {scrollValue===300? setScrollValue(301) : setScrollValue(300) }}
            >
              <MdChevronRight className="text-lg text-white " />
            </motion.div>
          </div>
        </div>
        <RowContainer scrollValue={scrollValue} flag = {true} data={foodItems?.filter(n => n.category === 'fruits')} />

      </section>
      
      <MenuContainer />
      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
