import './App.css';
import React from 'react';
import SnowLogo from './shared/icons/snowfall.png';
import HomeBannerImg from './shared/images/home_banner.webp';
import TestimonialImg from './shared/images/testimonial.avif';
import { HiArrowRight } from 'react-icons/hi';
import { HiStar } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCcPaypal, FaCcMastercard, FaCcApplePay, FaCcVisa } from "react-icons/fa";
import { PiInstagramLogoLight,PiTwitterLogoLight, PiFacebookLogoLight  } from "react-icons/pi";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

function App() {
  const sliderOptions = {
    type: 'loop',
    perPage: '3',
    gap: '2rem',
  }
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
              <h4 className="text-3xl font-semibold pl-2">Radiant</h4>
            </div>
            <ul className="flex">
              <li className="cursor-pointer font-light hover:text-primaryColor hover_transition">
                Products
              </li>
              <li className="cursor-pointer font-light hover:text-primaryColor hover_transition pl-8">
                About Us
              </li>
            </ul>
            <button className="bg-black text-white rounded-full px-8 py-3 hover:bg-primaryColor hover_transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="container mx-auto h-[700px] relative py-10"  id="video-background">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-7xl z-10 pb-4">Elevate and Discover</span>
          <span className="text-7xl z-10">Radiant Skin.</span>
          <div className="flex pt-8">
            <button className="flex items-center rounded-full px-8 py-3 z-10 text-white bg-black hover:bg-primaryColor hover_transition">
              <span className='mr-3'>Shop now</span>
              <HiArrowRight className='text-xl' />
            </button>
            <button className="flex items-center rounded-full px-8 py-3 z-10 ml-4 border text-black border-black hover:bg-black hover:text-white hover_transition">
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
        <div className="grid grid-cols-12 mx-40 my-10">
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
                <button className="flex text-sm rounded-full px-4 py-2 items-center bg-black text-white hover:bg-primaryColor hover_transition">
                  <span> Read more </span>
                  <HiArrowRight className="ml-2 text-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Swiper */}
      <div className="bg-homeBackgroundColor py-16 my-12">
        <div className="flex flex-col w-[960px] mx-auto">
          <p className="text-5xl font-medium text-center mb-10">Our Products</p>
          <div className="flex justify-between items-center mb-6">
            <button className="rounded-full bg-white px-4 py-2 text-sm hover:bg-primaryColor hover:text-white hover_transition">View all</button>
            <div className="flex">
                <IoIosArrowBack className="rounded-full w-8 h-auto p-2 text-white bg-black" />
                <IoIosArrowForward className="rounded-full w-8 h-auto p-2 text-white bg-black ml-2" />
            </div>
          </div>
          <Splide options={sliderOptions}>
            <SplideSlide>
              <div className="rounded-2xl bg-white p-8">
                <p className="text-xl h-16 overflow-hidden text-ellipsis pb-4">Radiant Eye Cream</p>
                <p className="text-xl text-primaryColor">$40.00</p>
                <img src={HomeBannerImg} className="h-40 rounded-xl w-full my-4" alt="" />
                <div className="flex justify-between">
                  <button className="text-xs bg-black text-white px-4 py-2 rounded-full hover:bg-primaryColor hover_transition">Buy now</button>
                  <button className="text-xs bg-white text-black border-black border-[1px] px-4 py-2 rounded-full hover:bg-black hover:text-white hover_transition">Learn more</button>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container mx-auto my-12">
        <div className="flex flex-col items-center w-[700px] mx-auto">
          <p className="text-center text-md">
            "I would highly recommend the Radiant beauty product line to anyone looking for high-quality, 
            effective skincare products. They are truly some of the best I've ever tried, and I will definitely 
            be purchasing them again in the future."
          </p>
          <div className="flex my-5">
            <HiStar className="text-2xl text-primaryColor" />
            <HiStar className="text-2xl text-primaryColor" />
            <HiStar className="text-2xl text-primaryColor" />
            <HiStar className="text-2xl text-primaryColor" />
            <HiStar className="text-2xl text-primaryColor" />
          </div>
          <div className="rounded-[50px] w-16 h-16">
            <img src={TestimonialImg} className="rounded-[50px] w-full h-full" alt="" />
          </div>
          <p className="text-sm font-medium">Virgil Sparda</p>
        </div>
      </div>

      {/*  */}
      <div className="container mx-auto my-10">
        <div className="grid grid-cols-12 mx-40 rounded-3xl h-[360px]">
          <div className="col-span-4 banner_1 relative flex items-end rounded-tl-3xl rounded-bl-3xl w-full">
            <p className="text-white pl-6 pb-4 text-3xl">Elevate your beauty routine.</p>
          </div>
          <div className="col-span-4 banner_2 flex items-start pl-4">
            <p className="text-black pl-6 pt-4 text-3xl">Youthful, radiant complexion.</p>
          </div>
          <div className="col-span-4 banner_3 relative flex items-end rounded-tr-3xl rounded-br-3xl ">
            <p className="text-black pl-6 pb-4 text-3xl">Radiant skin, all year.</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-homeBackgroundColor">
        <div className="w-[960px] mx-auto">
          <div className="flex justify-between py-16 border-b-[1px] border-primaryColor border-opacity-50">
            <div className="flex items-center">
              <img src={SnowLogo} className="max-h-10" alt="" />
              <span className="text-3xl font-semibold pl-2">Radiant</span>
            </div>
            <ul className="flex">
              <li><FaCcPaypal className="text-4xl pl-2" /></li>
              <li><FaCcMastercard className="text-4xl pl-2" /></li>
              <li><FaCcApplePay className="text-4xl pl-2" /></li>
              <li><FaCcVisa className="text-4xl pl-2" /></li>
            </ul>
          </div>
          <div className="py-16 border-b-[1px] border-primaryColor border-opacity-50">
            <p className="text-5xl font-medium">Contact Us</p>
            <div className="grid grid-cols-12 py-4">
              <div className="col-span-6">
                <input type="text" className="w-full bg-white rounded-[20px] py-4 px-4 my-2 focus:outline-none sm:text-sm" placeholder="Your name" />
                <input type="text" className="w-full bg-white rounded-[20px] py-4 px-4 my-2 focus:outline-none sm:text-sm" placeholder="Your email" />
                <textarea type="text" className="w-full bg-white rounded-[20px] py-4 px-4 my-2 focus:outline-none sm:text-sm" placeholder="Your message" rows="8"></textarea>
                <button type="text" className="w-full bg-black text-white rounded-[20px] py-4 px-4 my-2 hover:opacity-70 hover_transition sm:text-sm" placeholder="Your message">Send</button>
              </div>
              <div className="col-span-6 pt-4 pl-16">
                <div className="grid grid-cols-12">
                  <div className="col-span-6 mb-10">
                    <p className="pb-4 text-xl font-semibold">Pages</p>
                    <ul>
                      <li className="font-light text-sm cursor-pointer py-3 hover:text-primaryColor hover_transition">Homepage</li>
                      <li className="font-light text-sm cursor-pointer py-3 hover:text-primaryColor hover_transition">About</li>
                      <li className="font-light text-sm cursor-pointer py-3 hover:text-primaryColor hover_transition">All products</li>
                    </ul>
                  </div>
                  <div className="col-span-6 mb-10">
                    <p className="pb-6 text-xl font-semibold">Social</p>
                    <ul className="flex">
                      <li><PiInstagramLogoLight className="mr-2 text-md cursor-pointer hover:text-primaryColor" /></li>
                      <li><PiTwitterLogoLight className="mr-2 text-md cursor-pointer hover:text-primaryColor" /></li>
                      <li><PiFacebookLogoLight className="mr-2 text-md cursor-pointer hover:text-primaryColor" /></li>
                    </ul>
                  </div>
                  <div className="col-span-6 mb-10">
                    <p className="pb-4 text-xl font-semibold">Phone</p>
                    <p className="font-light text-sm py-3">0000-000-000</p>
                  </div>
                  <div className="col-span-6 mb-10">
                    <p className="pb-4 text-xl font-semibold">Email</p>
                    <p className="font-light text-sm py-3 cursor-pointer hover:text-primaryColor">email@email.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-sm font-light py-16">
            <p className="cursor-pointer hover:text-primaryColor hover_transition">Designed by Artyum Grebenyuk - powered by Framer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
