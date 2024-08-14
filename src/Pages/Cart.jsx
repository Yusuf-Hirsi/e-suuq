import { useDispatch, useSelector} from "react-redux"
import PriceCart from "../Components/PriceCart"

import { calculateTotalPrice,removeItemFromCart } from "../Components/redux/reducer/cart"
function Cart() {
    const items = useSelector( sta => sta.cart.items)
    const dispatch = useDispatch ()
    const handelRemove = (id) =>{
        dispatch(removeItemFromCart (id) )
        dispatch( calculateTotalPrice ())
    }
    

    return items.length === 0 ? <p className="bg-yellow-300 p-6 text-center">The Cart Is Empty </p> : <div >
    <h1 className="font-bold bg-red-400 h-20 text-4xl text-white text-center">Shopping items</h1>
    <div className="flex ml-[250px]">
        <div>
    {
        items.map( (data) => {
            return <div className=" sm:w-[500px] w-[230px] sm:justify-between mt-10 ml-[-230px] flex gap-4 items-center sm:p-8 sm:my-4 rounded border-4 border-green-300">
                <img className="sm:w-[200px] w-[80px]" src={data.image} alt="" />
                <div >
                    
                <h1 className="">{data.title.substring(0,20)}</h1>
                <h1 className="font-bold pt-4">${data.price}</h1>
                </div>
                
                <i onClick={ () =>handelRemove(data)} class="fa-solid fa-trash  text-red-400  mt-[190px] text-2xl ml-6"></i>
                 </div>
         
        })
    }
    </div>
    <PriceCart/>
    </div>
</div>


}
export default Cart