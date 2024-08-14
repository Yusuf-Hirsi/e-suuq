
import { useSelector} from "react-redux"
import { useState } from "react" 
import {Link} from "react-router-dom"
import React from "react"
function Header({searches}){
    const  [Open, setOpen] = useState (true)

const handelmenu = ()=>{
    setOpen(true)
}
const handelclose = ()=>{
    setOpen(false)
}

    const numberOfCarts = useSelector( (state) => state.cart.items)




    return <div className=" font-primaryFont fixed w-full  ">


        <div className="flex justify-between bg-orange-400  h-[100px]   ">
                <h1 className="text-[#FFFFFF] pt-[20px] pl-[30px] text-[40px] font-bold "><span className="text-secondaryColor ">E</span>-commerce</h1>
                <ul style={{display:Open == true ?  "block" : ""}}  className="hidden   pt-[30px] text-white text-[25px] sm:h-0 h-[200px] gap-[50px]  sm:flex  ">
                    <li>Home</li>
                    <li>About</li>
        
                </ul>
                <i   style={{display : Open == true ?  "none" : "",}} onClick={handelmenu} id="maneu" class="fa-solid fa-bars sm:hidden mt-[50px] absolute ml-[325px]  sm:ml-0 top-6 text-[30px] flex  "></i>
                <i style={{display : Open == true ? "block" : ""}} onClick={handelclose} id="close" class="fa-solid fa-x sm:hidden sm:mt-[17px]   hidden absolute mt-14 right-6 top-6 text-[30px]  "></i>
      
                <form >
                    <input onChange ={searches}  className="w-[400px] text-primaryColor hidden sm:flex rounded-[5px] pl-[20px]  h-[40px] mt-[30px]  " type="text" placeholder="Search by name" />
                </form>

               <Link to="/cart" >
                <i className="fa-solid fa-cart-shopping text-white text-[25px]   pr-[30px]  pt-[40px]   ">{numberOfCarts.length}</i>
                </Link>
        </div>



    </div>
}

export default Header