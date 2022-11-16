import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import heroData from "../utils/data";

const HomeContainer = () => {
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full bg-white object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{""}{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            {" "}
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non totam,
          dolore numquam aperiam iure illum fugiat, placeat architecto
          repellendus nesciunt deserunt ipsam repudiandae eos aliquid ipsa,
          rerum id corrupti sit?
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-500 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />
        <div className="w-full h-full absolute flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((data) => (
              <div
                key={data.id}
                className=" lg:w-190  p-2 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={data.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                  alt="I1"
                />
                <p className="text-base lg:text-lg font-semibold text-textColor mt-2 lg:mt-4">
                  {data.name}
                </p>
                <p className=" text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {data.decp}{" "}
                </p>
                <p className="text-sm  font-semibold text-headingColor">
                  {" "}
                  <span className="text-xs text-red-600">₹</span>
                  {data.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
