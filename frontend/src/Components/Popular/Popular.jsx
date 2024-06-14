
import React, { useEffect, useState } from 'react'

import Item from '../Item/Item'

const Popular = () => {
  const [popular,setPopular] = useState([])
  useEffect(()=>{
    fetch('https://e-commerce-backend-2-bxa8.onrender.com/popularinwomen')
    .then((res)=>res.json())
    .then((data)=>setPopular(data))

  },[])

  return (
    <div className='py-6 mx-auto '>
        <h1 className='lg:text-3xl font-semibold py-2 text-center text-2xl mx-auto '>POPULAR IN WOMEN</h1>
        <hr className='lg:w-52 h-2 rounded-full text-center mx-auto w-44' style={{backgroundColor:'#a00220'}}/>
        {/* <div className='flex lg:gap-8 py-8 flex-wrap gap-2'>  */}
     
        <div className='flex gap-15 flex-wrap mx-auto  pt-2'> 
            {popular.map((item,i)=>{ 
                return <Item key={i} id={item.id} name ={item.name} image={item.image} price={item.price}/>

            })}
        </div>

      
    </div>
  )
}

export default Popular
