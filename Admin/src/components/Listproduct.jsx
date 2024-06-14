import React, { useEffect, useState } from 'react'

const Listproduct = () => {
  const [allproduct,setAllproduct] = useState([])
  const fetchInfo=  async () =>{
    await fetch ('https://e-commerce-backend-2-bxa8.onrender.com/allproduct')
    .then ((res)=>res.json())
    .then((data)=>{
      setAllproduct(data)
    })
  }
  useEffect(()=>{
    fetchInfo()
  },[])
const remove_Product = async (id) =>{
  await fetch ("https://e-commerce-backend-2-bxa8.onrender.com/removeproduct",{
    method:'POST',
    headers :{
      Accept:'application/json',
      'Content-Type' :'application/json'
    },
    body:JSON.stringify({id:id})
  })
  await fetchInfo()
}

  return (
    <div className='py-10 px-2'>
      <h1 className=' text-2xl font-semibold text-center mx-auto'>All Products List</h1>
     
      <div className='flex flex-wrap gap-3 h-12 mt-5 '>
        <hr/>
       {allproduct.map((product,index)=>{
        return <div key={index} className=''>
          <img src={product.image} className='h-24 w-24'></img>
          <p className='text-md' >{product.name}</p>
          <p>Rs.{product.price}</p>
          <p>{product.category}</p>
          <button className='text-white rounded-lg px-1 py-1 text-sm' style={{backgroundColor:'#a00220'}} onClick={()=>{remove_Product(product.id)}}>Remove</button>

        

        </div>

       })}
      </div>
    </div>
  )
}

export default Listproduct
