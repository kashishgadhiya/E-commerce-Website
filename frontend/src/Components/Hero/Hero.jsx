import React from 'react'
import hero_1 from "../Assets/hero_1.png"
import { GiHandheldFan } from "react-icons/gi";
import { GoArrowRight } from "react-icons/go";
import  "./Hero.css"
import { Link } from 'react-router-dom';
const Hero = () => {
  const scrollToNewCollection = () => {
    const newCollectionSection = document.getElementById('newcollection');
    if (newCollectionSection) {
      newCollectionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='flex lg:mt-24 justify-between bg-orange-100 items-center  flex-wrap   w-screen lg:h-screen lg:w-screen mt-32' style={{color:"#a00220"}}>
        {/* left */}
        <div className='lg:px-14  h-2/3 lg:mx-auto py-5 mx-auto  '>
            <h2 className='lg:text-xl font-semibold text-lg ' >NEW ARRIVALS ONLY</h2>
            <div className='lg:text-5xl font-extrabold lg:py-2 text-4xl py-1 '>

            <p className='lg:py-2 py-1 flex gap-2'>new <GiHandheldFan /></p>
            <p className='lg:py-2 py-1'>Collections</p>
            <p className='lg:py-2 py-1'>for Everyone</p>
            </div>
            <Link to='#' onClick={scrollToNewCollection}>
          <button className='rounded-full px-3 py-2 flex justify-center item-center gap-3 herobtn' style={{border:'1px solid #a00220'}}>Latest Collection <GoArrowRight className='h-6 w-5 hover:w-6' /></button>
        </Link> 
            

        </div>
      {/* right */}
      <div>
<img src={hero_1 }alt="heroimg" width={850}></img>
      </div>
    </div>
  )
}

export default Hero
