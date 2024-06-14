import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
// import new_product from '../Assets/NewCollection'

const NewCollection = () => {
  const [new_collection,setNew_collection] = useState([])
  useEffect(()=>{
    fetch('https://e-commerce-backend-2-bxa8.onrender.com/newcollection')
    .then((res)=>res.json())
    .then((data)=>setNew_collection(data))

  },[])
  return (
    <div className='py-8  ' id='newcollection'>
        
        <h1 className='lg:text-3xl font-semibold py-2 text-center text-xl'>NEW COLLECTIONS</h1>
        <hr className='lg:w-52 h-2 rounded-full text-center mx-auto w-44' style={{backgroundColor:'#a00220'}}/>
        <div className='flex lg:gap-8 py-8 flex-wrap gap-4'> 
            {new_collection .map((item,i)=>{ 
                return <Item key={i} id={item.id} name ={item.name} image={item.image} price={item.price}/>

            })}
        </div>

      
    </div>
  )
}

export default NewCollection
