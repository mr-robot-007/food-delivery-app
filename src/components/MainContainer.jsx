import React from "react";
import {HomeContainer} from "./index";

const MainContainer = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      {<HomeContainer/>}

      <section className="w-full py-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-lg font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our fresh & healthy fruits
          </p>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default MainContainer;
