import React, { useState } from 'react'


const Email = () => {
  const [isSubscribed,setIsSubscribed] = useState(false)
  const handleSubscribe = () => {
    
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
  }, 2000);
};
  return (
    <>
        {/* email */}
        <div className='bg-orange-100 lg:w-2/4 mx-auto h-2/4 py-5 flex flex-col gap-4  w-10/12' style={{color:'#a00220'}}>

      <h2 className='text-3xl text-center font-semibold'>Get Exclusive Offers On Your Email</h2>
      <p className='text-center text-lg '>Subscribe to Our newsletter</p>
      <div className='flex mx-auto  rounded-full'>
      <input type='text' placeholder='Your email id' className=' lg:w-80 px-3 py-2 r border-0 outline-0 w-64'></input>
      <button  className='   text-white cursor-pointer px-4 py-3' style={{backgroundColor:'#a00220'}} onClick={handleSubscribe}>Subscribe</button>

      </div>
      {isSubscribed && <div className='mt-2 mx-auto'>Email added successfully</div>}
        </div>
    </>
  )
}

export default Email
