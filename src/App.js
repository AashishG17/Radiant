import './App.css';
import React from 'react';
import SnowLogo from './shared/icons/snowfall.png';
import HomeBannerImg from './shared/images/home_banner.webp';
import { HiArrowRight } from 'react-icons/hi';

function App() {
  return (
    <div>
      {/* Top Header */}
      <div className="flex justify-center bg-black py-2">
        <p className="text-sm text-gray-300">Want 10% off your first purchase? Use code PURCHASE at checkout.</p>
      </div>

      {/* Sticky Main Header */}
      <div className="z-50 bg-white sticky top-0">
        <div className="container mx-auto py-4 bg-white">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer">
              <img className="max-h-10" src={SnowLogo} alt="" />
              <h4 className="text-3xl font-semi-bold pl-2">Radiant</h4>
            </div>
            <ul className="flex">
              <li className="cursor-pointer hover:text-primaryColor transition-all duration-300 ease-in-out">
                Products
              </li>
              <li className="cursor-pointer hover:text-primaryColor transition-all duration-300 ease-in-out pl-6">
                About Us
              </li>
            </ul>
            <button className="bg-black text-white rounded-full px-8 py-3 hover:bg-primaryColor transition-all duration-500 ease-in-out">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="container mx-auto h-[700px] relative py-[40px]"  id="video-background">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-7xl z-10 pb-4">Elevate and Discover</span>
          <span className="text-7xl z-10">Radiant Skin.</span>
          <div className="flex pt-8">
            <button className="flex items-center rounded-full px-8 py-3 z-10 text-white bg-black hover:bg-primaryColor transition-all duration-500 ease-in-out">
              <span className='mr-3'>Shop now</span>
              <HiArrowRight className='text-xl' />
            </button>
            <button className="flex items-center rounded-full px-8 py-3 z-10 ml-4 border text-black border-black hover:bg-black hover:text-white transition-all duration-500 ease-in-out">
              <span>Learn more</span>
            </button>
          </div>
        </div>
        <video autoPlay muted loop className="h-full w-full object-cover opacity-40 rounded-[50px]" >
          <source className="max-h-[400px]" src='https://framerusercontent.com/modules/assets/riqDVV8DnajxXtR3uCjILT1Z1k~S8uEuw-lMQsbpzGShlwLA9dtJk9a_uqXm7lkiBLz7Uw.mp4'></source>
        </video>
      </div>

      {/* Static Section */}
      <div className="container mx-auto">
        <div className="grid grid-cols-12 mx-40">
          {/* Image Section */}
          <div className="col-span-4">
            <img className="rounded-[50px]" src={HomeBannerImg} alt="Home Banner" />
          </div>
          {/* Text Section */}
          <div className="col-span-8">
            <div className="flex flex-col pl-16">
              <div className="text-5xl font-medium leading-[50px]">
                <p>From supplements to skincare, we have everything you need to support your healthy lifestyle.</p>
              </div>
              <div className="mt-8 leading-8">
                <p>
                  At Radiant Health & Wellness, we're committed to using only the highest quality, 
                  natural ingredients in our products. We believe that nature provides everything 
                  we need to achieve optimal health, and we're dedicated to harnessing its power to 
                  help you feel your best.
                </p>
              </div>
              <div className="mt-8">
                <button className="flex text-sm rounded-full px-4 py-2 items-center bg-black text-white hover:bg-primaryColor transition-all duration-500 ease-in-out">
                  <span> Read more </span>
                  <HiArrowRight className="ml-2 text-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Swiper */}
      <div>
      </div>
    </div>
  )
}

export default App;
