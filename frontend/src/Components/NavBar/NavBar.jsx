import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { ShopContext } from "../../Context/ShopContext";

const NavBar = () => {

  
  const [moblieNav, setMobileNav] = useState(false);
  const [menu, setMenu] = useState("Home"); 
  const [isAdmin, setIsAdmin] = useState(false);

  const { getTotalCartItems } = useContext(ShopContext);


  
 
  return (
    <>
      {/* mobile navbar */}

      <div
        className=" md:hidden   justify-between items-center    w-full text-white lg:py-8  py-5 fixed top-0 right-0 left-0  "
        style={{ backgroundColor: "#a00220" }}
      >


<div className="flex justify-between">

<div className=" flex md:hidden    items-center ">
  <img src={logo} alt="logo" width={170} className="lg:hidden"></img>
</div>

<div className="flex justify-end items-center mx-3">
    <Link to="/cart" className="">
      <FaShoppingCart className="text-2xl " />
      <div className=" count">{getTotalCartItems()}</div>
    </Link>
  </div>
</div>
    

        {/*for mobile */}
        <button
          className="border p-3 m-3 md:hidden"
          onClick={() => setMobileNav((prev) => !prev)}
        >
          <FaBarsStaggered />
        </button>

        {moblieNav && (
          <div
            className="md:hidden p-4  rounded-lg mt-2  gap-3 font-semibold text-center Navhr bg-red "
            onClick={() => setMobileNav(false)}
          >
            <ul className="flex flex-col gap-6 text-lg">
              <li onClick={() => setMenu("Home")}>
                <Link to="/" className="hover:bg-orange-100"> Home</Link>
             
              </li>

              <li onClick={() => setMenu("Women")}>
                <Link to="/Women"> Women</Link>
                
              </li>
              <li onClick={() => setMenu("Men")}>
                <Link to="/men"> Men </Link>
              
              </li>
              <li onClick={() => setMenu("Kids")}>
                <Link to="/Kids "> Kids </Link>
                
              </li>
            </ul>

            <Link to="/login ">
              {" "}
              <button
                className="border-1 rounded-full py-1 px-5  text-lg active:bg-transparent hover:px-6 mt-2"
                style={{ border: "1px solid white" }}
              >
                Login
              </button>
            </Link>

            {localStorage.getItem("auth-token") ? (
              <button
                onClick={() => {
                  localStorage.removeItem("auth-token");
                  window.location.replace("/");
                }}
                className="border-1 rounded-full py-1 px-5  text-lg active:bg-transparent hover:px-6 hidden lg:inline"
                style={{ border: "1px solid white" }}
              >
                Logout
              </button>
            ) : (
              <Link to="/login ">
                {" "}
                <button
                  className="border-1 rounded-full py-1 px-5  text-lg active:bg-transparent hover:px-6 hidden lg:inline"
                  style={{ border: "1px solid white" }}
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        )}




      </div>
      

      {/* NavBar */}
      <div className="lg:flex Navbarheader text-white lg:py-8 justify-between fixed top-0 left-0 right-0 py-5 hidden md:flex ">
      
        <div className="hidden lg:block">
          <img src={logo} alt="logo" width={250}></img>
        </div>
        <div className="Navhr cursor-pointer hidden lg:inline">
          <ul className="flex gap-6 text-lg">
            <li onClick={() => setMenu("Home")}>
              <Link to="/"> Home</Link>
              {menu === "Home" ? <hr /> : <></>}
            </li>

            <li onClick={() => setMenu("Women")}>
              <Link to="/Women"> Women</Link>
              {menu === "Women" ? <hr /> : <></>}
            </li>
            <li onClick={() => setMenu("Men")}>
              <Link to="/men"> Men </Link>
              {menu === "Men" ? <hr /> : <></>}
            </li>
            <li onClick={() => setMenu("Kids")}>
              <Link to="/Kids "> Kids </Link>
              {menu === "Kids" ? <hr /> : <></>}
            </li>
          </ul>
        </div>
        {/* login */}

        <div className="flex justify-center items-center gap-4 px-5 ">
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
              className="border-1 rounded-full py-1 px-5  text-lg active:bg-transparent hover:px-6 hidden lg:inline"
              style={{ border: "1px solid white" }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login ">
              {" "}
              <button
                className="border-1 rounded-full py-1 px-5  text-lg active:bg-transparent hover:px-6 hidden lg:inline"
                style={{ border: "1px solid white" }}
              >
                Login
              </button>
            </Link>
          )}
          <div className="flex justify-center items-center">
            <Link to="/cart" className="">
              <FaShoppingCart className="text-2xl" />
              <div className=" count">{getTotalCartItems()}</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
