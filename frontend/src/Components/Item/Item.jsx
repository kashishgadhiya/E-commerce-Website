import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (




        <div className='card  m-3 transition-all cursor-pointer  mx-auto   '>
            <div className='lg:h-[20rem]  itemimg lg:w-[14rem] lg:object-cover object-left-top  object-fill h-[18rem]  w-[12rem]'>
            {/* object-cover object-left-top  */}
            <Link to={`/product/${props.id}`}>
                   <img className='h-full lg:w-full hover:w-full object-cover w-72' src={props.image} ></img>
                
                </Link> 
            </div>
            <div className=' p-3 '>
                <div>
                    <p>{props.name}</p>
                    <p>Rs.{props.price}</p>
                </div>

            </div>

        </div>
    )
}

export default Item
