import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offers/Offer'
import NewCollection from '../Components/NewCollections/NewCollection'
import Email from '../Components/Email/Email'
import Footer from '../Components/Footer/Footer'

const Shop = () => {
  return (
    <>
      <Hero/>
      <div className='max-w-5xl mx-auto'>

      <Popular/>
      <Offer/>
      <NewCollection/>
      <Email/>
      </div>
      
    </>
  )
}

export default Shop
