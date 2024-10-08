import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/bgs1.jpg";
import banner2 from "../../assets/bgs2.jpg";
import banner3 from "../../assets/bgs3.jpg";
import { FaCity, FaUser, FaTag } from "react-icons/fa";

import { Navigation, Pagination, A11y,Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import React, { useRef, useState } from 'react';
// Import Swiper React components

const Banner = () => {
  return (
    <div>
      
     
      <Swiper

    
         
         modules={[Navigation, Pagination, A11y, Autoplay]}
        
         slidesPerView={1}
        // navigation 
         autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}

         pagination={{ clickable: true }}
         
        //  onSwiper={(swiper) => console.log(swiper)}
        //  onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><div  style={{height: "calc(100vh - 100px)", background: `linear-gradient(to right,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)) ,url(${banner1})  no-repeat center/cover` }}
        className="  text-white    pt-20 "
         
      ><div className=" max-w-6xl mx-auto">
        <h1 className="text-7xl py-5 mt-12">Modern House Make <br /> Better Life </h1>
        <p className="text-2xl ">
         1 Find the suitable and affordable home <br /> for your perfect Family
        </p></div>
      </div></SwiperSlide>
        <SwiperSlide>  <div  style={{height: "calc(100vh - 100px)", background: `linear-gradient(to right,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)) ,url(${banner2})   no-repeat center/cover` }} 
        className="  text-white   pt-20 "
     
      ><div className=" max-w-6xl mx-auto">
        <h1 className="text-7xl py-5 mt-12">Let Your Home Be <br /> Unique & Stylist </h1>
        <p className="text-2xl ">
        2  Find the suitable and affordable home <br /> for your perfect Family
        </p></div>
      </div></SwiperSlide>
        <SwiperSlide>  <div  style={{height: "calc(100vh - 100px)", background: `linear-gradient(to right,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)) ,url(${banner3})   no-repeat center/cover` }}
        className="  text-white   pt-20 "
      
      ><div className=" max-w-6xl mx-auto">
        <h1 className="text-7xl py-5 mt-12">Your Property Is <br /> Our Priority</h1>
        <p className="text-2xl ">
        3  Find the suitable and affordable home <br /> for your perfect Family
        </p></div>
      </div></SwiperSlide>
        
      </Swiper>

      <div className="statics   mt-12  ">
        <div className="items flex justify-center gap-4">
          <div className="item flex flex-col justify-center items-center w-72 h-72 rounded-xl  bg-blue-200  text-center py-3">
            <FaCity className="text-6xl mb-3 text-gray-500"></FaCity>
            <h1 className="text-3xl pb-1 ">100+</h1>
            <p className="text-xl">Cities Added.</p>
          </div>
          <div className="item flex flex-col justify-center items-center w-72 h-72 rounded-xl  bg-blue-200  text-center py-3">
            <FaUser className="text-6xl mb-3 text-gray-500"></FaUser>
            <h1 className="text-3xl pb-1 ">500+</h1>
            <p className="text-xl">Happy Customar.</p>
          </div>
          <div className="item flex flex-col justify-center items-center w-72 h-72 rounded-xl  bg-blue-200  text-center py-3">
            <FaTag className="text-6xl mb-3 text-gray-500"></FaTag>
            <h1 className="text-3xl pb-1 ">400+</h1>
            <p className="text-xl">Properties Sold.</p>
          </div>
         
        </div>
      </div>


   
    </div>
  );
};

export default Banner;
