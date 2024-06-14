import React, { useContext } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Item from '../Components/Item/Item';
import { ShopContext } from "../Context/ShopContext";
import Footer from '../Components/Footer/Footer';

const ShopCategory = (props) => {
  const {all_product ,sortItems} = useContext(ShopContext)
  const handleSortChange = (e) => {
    sortItems(e.target.value);
};
  return (
    <>
    <div className='mt-32 max-w-6xl mx-auto'>
      {/* banner  */}
    
    {/* sorting */}
    {/* <div className='my-10'>
      <form>
        <label htmlFor='sort'></label>
        <select name='sort' id='sort' onChange={handleSortChange}>
          <option value='lowest'>Price (lowest)</option>
          <option value='highest'>Price (highest)</option>
          <option value='a-z'>Price (A-Z)</option>
          <option value='z-a'>Price (Z-A)</option>
        </select>
      </form> */}
    {/* </div> */}



      <div className='grid lg:grid-cols-4 mx-auto  grid-cols-2 md:grid-cols-3 lg:gap-4 sm:grid-col-1 ' >
        {all_product.map((item,i)=>{
          if(props.category === item.category){
            return <Item key={i} id={item.id} name ={item.name} image={item.image} price={item.price}/>
          }else{
            return null;
          }
          
        })}
      </div>
      
      
    </div>
  
        </>
  )
}

export default ShopCategory

