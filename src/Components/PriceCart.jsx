import { useSelector } from "react-redux"
function PriceCart (){
    const price = useSelector ((state) => state.cart.totalPrice)

    const number = useSelector ((state) => state.cart.items)
    return <div className="sm:w-[330px] w-[130px] h-[200px] p-4 rounded fixed  ml-[300px] sm:right-28  right-[-20px]  top-[90px] border-4 sm:h-[200px] m-3">
        <h1 className="">Total Item</h1>
        <h1 className="font-bold">{number.length}</h1>
        <h1>Total price</h1>
        <h1 className="font-bold">$ {price} </h1>
        <button className="bg-purple-400 text-white sm:px-28 px-5 py-1 mt-3 rounded-sm ">Pay Now</button>
    </div>
}
export default  PriceCart