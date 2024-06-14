import React, { useState ,useEffect } from "react";
import Footer from "../Components/Footer/Footer";

const LoginSignup = () => {
  const [state,setState] = useState("Login")
 
  const [formdata,setFormData] = useState({
    username :"",
    password:"",
    email :""
  })
  const  changeHandler = (e) =>{
    setFormData({...formdata,[e.target.name]:e.target.value})
  }
  const loginhandler = async ()=>{
    console.log("Login Function",formdata)   
    let responseData; 
    await fetch("https://e-commerce-backend-2-bxa8.onrender.com/login",{
      method : 'POST',
      headers : {
       Accept:  'application/form-data',
       'Content-Type' :'application/json',

      },
      body:JSON.stringify(formdata),

      
    }).then((res)=>res.json()).then((data)=>responseData= data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
    
      window.location.replace("/")
    }
    else{
      alert(responseData.errors)
    }

      

  }



  const signuphandler = async ()=>{
    console.log("Signup Function",formdata)    
    let responseData;
    await fetch("https://e-commerce-backend-2-bxa8.onrender.com/signup",{
      method : 'POST',
      headers : {
       Accept:  'application/form-data',
       'Content-Type' :'application/json',

      },
      body:JSON.stringify(formdata),

      
    }).then((res)=>res.json()).then((data)=>responseData= data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      alert("you have successfully signed up")
      window.location.replace("/")
    }
    else{
      alert(responseData.errors)
    }

  }
  return (
   <>
  
      <div className="mt-32  max-w-2xl mx-auto bg-white p-7 mb-40 ">
     
      
        <h1 className="text-3xl font-semibold text-center " style={{color:'#a00220'}}>{state}</h1>
        <div className="flex flex-col mt-10 ">
          {state === "Signup" &&
          <input
            type="text"
            name="username"
            value={formdata.username}
            onChange={changeHandler}
            placeholder="Your Name"
            className="p-3  my-3"
            style={{ border: "1px solid gray" }}
          ></input>}
          <input type="email" 
          name="email"
          value={formdata.email}
          onChange={changeHandler}
          placeholder="Your Email Address"
            className="p-3  my-3"
            style={{ border: "1px solid gray" }}
          
          ></input>
          <input type="password"
           name="password"
           value={formdata.password}
           onChange={changeHandler}
          
          placeholder="Your Password"
            className="p-3  my-3"
            style={{ border: "1px solid gray" }}
          
          ></input>
        </div>
        <button className="w-full py-3 text-lg text-white" style={{backgroundColor:'#a00220'}} onClick={()=>{state==="Login"?loginhandler():signuphandler()}}>Continue</button>
       {state === "Signup" && <p className="py-3">   
          Already have an account ? <span  className=" font-semibold cursor-pointer"style={{color:'#a00220'}}
           onClick={()=>{setState("Login")}}
          >Login here</span>
        </p>}
     {state === "Login" &&   <p className="py-3">   
          Create  an account ? <span 
           className=" font-semibold cursor-pointer"style={{color:'#a00220'}}
           onClick={()=>{setState("Signup")}}
           
           >Click here</span>
        </p>}
      
      </div>
      
      </>
  );
};

export default LoginSignup;
