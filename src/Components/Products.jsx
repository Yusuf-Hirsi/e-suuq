 import { useDispatch } from "react-redux"
 import { addItemToCart , calculateTotalPrice } from "./redux/reducer/cart"
 import {toast, Toaster} from "react-hot-toast"
function Product ({items}){
    const dispatch =useDispatch()
    const handelCart =()=>{
        dispatch (addItemToCart(items))
        dispatch (calculateTotalPrice())
        if(addItemToCart(items)){
            toast.success("waa  gadaty")
        }
    
    }
    return <div className="border-[2px] mt-[150px] h-[360px] w-[250px] ">
            <img className="h-[250px] mt-[20px] ml-4 w-[200px]  "src={items.image} alt="" />
            <h1 className="font-bold mt-[10px] ml-[20px] ">{items.title.substring(0, 40)}</h1>
            <div className="flex justify-between ml-[20px]   ">
            <h1>${items.price}</h1>
            <button onClick={handelCart} className="mr-[20px] bg-primaryColor text-black  rounded-full h-[30px]  w-[30px]">+</button>
            </div>
            <Toaster/>
    </div>
}

export default Product