import React, { createContext, useEffect, useState } from 'react'

// import all_product from "../Components/Assets/all_products"

export const ShopContext = createContext(null)
 // cart
 const getDefaultCart = ()=>{
    let cart ={}
    for(let index =0;index <300+1;index++){
        cart[index] =0
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    const[all_product,setAll_Product] = useState([])
    const [cartItems,setCartItems] =useState(getDefaultCart())
    const [allItem, setAllItem] = useState(all_product);

   useEffect(()=>{
    fetch('https://e-commerce-backend-2-bxa8.onrender.com/allproduct')
    .then((response)=>response.json())
    .then((data)=>setAll_Product(data))

    if(localStorage.getItem('auth-token')){
        fetch("https://e-commerce-backend-2-bxa8.onrender.com/getcart",{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Auth-token' :`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json'
            },
            // body :JSON.stringify({'itemId' :itemId})
        })
        .then((response)=>response.json())
        .then((data)=>setCartItems(data))
        


        

    }

   },[])
   
    const addTocart = (itemId) => {
        setCartItems((prev) => ( { ...prev, [itemId]: prev[itemId] + 1 }));
            if(localStorage.getItem('auth-token')){
                fetch('https://e-commerce-backend-2-bxa8.onrender.com/addtocart',{
                    method:'POST',
                    headers:{
                        Accept:'application/form-data',
                        'Auth-token' :`${localStorage.getItem('auth-token')}`,
                        'Content-Type':'application/json'
                    },
                    body :JSON.stringify({'itemId' :itemId})
                })
                .then((response)=>response.json())
                .then((data)=>console.log(data))
                

            }
           
        
    }
    
    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

        if(localStorage.getItem('auth-token')){
            fetch('https://e-commerce-backend-2-bxa8.onrender.com/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'Auth-token' :`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body :JSON.stringify({'itemId' :itemId})
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data))
            

        }

    }
    // cart total
    const getTotalCartAmount =()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product)=>product.id === Number(item))
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount
    }
    // cartitem +1
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem  +=cartItems[item]
            }
        }
    
        return totalItem;
    }
        // sortitems
        const sortedProducts = [...all_product];
        const sortItems = (criteria) => {
            console.log('Sorting criteria:', criteria);
            // Make a copy of the all_product array
    
            switch (criteria) {
                case 'lowest':
                    sortedProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'highest':
                    sortedProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'a-z':
                    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'z-a':
                    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                default:
                    break;
            }
            console.log('Sorted products:', sortedProducts);

            setAll_Product(sortedProducts);
        }
        
        // useEffect(()=>{
           
        //     sortItems('a-z')
        // },[sortedProducts])
  
   
   
    
    const contextValue = {getTotalCartItems ,getTotalCartAmount,all_product,cartItems,addTocart,removeFromCart,sortItems}
    
    return (
        <ShopContext.Provider value={contextValue}>

            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider
