'use client';
import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import { PiCaretRightLight, PiCaretLeftLight } from "react-icons/pi"
import bannerone from '@/images/bannerone.jpg';
import bannertwo from '@/images/bannertwo.jpg';
import bannerthree from '@/images/bannerthree.jpg';
import BannerText from './BannerText';


function Banner() {

  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
      className='p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer
      duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-5
      top-1/2'
       onClick={onClick}>
        <PiCaretRightLight />
    </div>
  )
  }
   const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div    className='p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer
      duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-5
      top-1/2'
      onClick={onClick} >
        <PiCaretLeftLight />
    </div>
  )
}

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
     slidesToScroll: 1,
       nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
  };

 return( 
  <div className='relative'>
        <Slider {...settings}>
          <div>
         <Image
           src={bannerone}
           alt="banner one"
           quality={100}
           className="w-full h-full relative"
         />
          <BannerText
     title="today is beautifull"/>
          </div>
          <div>
              <Image
           src={bannertwo}
           alt="banner one"
           quality={100}
           className="w-full h-full relative"
         />
          <BannerText
     title="today is beautifull"/>
       </div>
         <div>
              <Image
           src={bannerthree}
           alt="banner one"
           quality={100}
           className="w-full h-full relative"
         />
              <BannerText
     title="today is beautifull"/>
       </div>
   
     </Slider>
    
      </div>
    );
}

export default Banner
