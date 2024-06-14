import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import delete_icon from "../Assets/delete_icon.png"


const CardItem = () => {
    const   {getTotalCartAmount,all_product,cartItems,addTocart,removeFromCart} = useContext(ShopContext)
    const increaseQuantity = (productId) => {
        addTocart(productId);
    };

    const decreaseQuantity = (productId) => {
        removeFromCart(productId);
    };

  return (
    <div className='lg:mt-32 mx-auto max-w-3xl mt-36'>
        
        <h1 className='text-3xl lg:my-5 font-semibold text-center' style={{color:'#a00220'}}>Shopping Cart</h1>
        <hr/>
        {all_product.map((i)=>{
            if(cartItems[i.id]>0){
                return <div className='flex gap-5 lg:my-5 m-6'>
                <img src={i.image} alt='productimg' width={100}></img>
                <div>

                <p className='text-lg font-semibold'>{i.name}</p>
                <p className='text-lg'>Rs.{i.price}</p>
                <button>Qty : {cartItems[i.id]}</button>
                
                <p> Total : {i.price * cartItems[i.id]}</p>
             <div className='flex gap-3 my-2'>

             <div className='flex gap-3  border-2 px-2 py-1'>
                <button onClick={() => decreaseQuantity(i.id)}>-</button>
                                    <p> {cartItems[i.id]}</p>
                                    <button onClick={() => increaseQuantity(i.id)}>+</button>

                                </div>
                <img src={delete_icon} width={25} onClick={()=>{removeFromCart(i.id)}} className='mt-1 cursor-pointer'></img>
                 
             </div>
            
                </div>
            
                <hr/>
            </div>
            }
           return null
            
        })}
  {/* total */}
        <div className='lg:my-6 m-6'> 
            <h1 className='text-2xl my-2 font-medium'>Cart Totals</h1>
            <div className='flex justify-between my-2'>
            <p>Subtotal</p>
            <p>Rs.{getTotalCartAmount()}</p>

            </div>
            <hr />
            <div className='flex justify-between my-2'>
            <p>Shipping Fee</p>
            <p>Free</p>

            </div>
            <hr />
            <div className='flex justify-between my-2'>
            <p>Total</p>
            <strong>Rs.{getTotalCartAmount()}</strong>

            </div>
            <hr />


            <button  className='py-2 text-white  px-2 my-4 mx-20 lg:mx-0' style={{backgroundColor:'#a00220'}}> PROCEED TO CHECKOUT</button>


        </div>

      
    </div>
  )
}

export default CardItem