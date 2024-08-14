import { createSlice } from "@reduxjs/toolkit";

import Product from "../../Products";
const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalPrice: 0

    }, reducers:{
        addItemToCart:(state,action)=>{
            state.items.push(action.payload)

        },
        calculateTotalPrice: (state) =>{
            let total = 0
            state.items.forEach( (Product) => {
                total += Product.price
            } )
            state.totalPrice =total
        },
        removeItemFromCart: (state,action) =>{
            state.items = state.items.filter( (Product) => Product.id != action.payload.id)
        }
    }

})
export const {addItemToCart, removeItemFromCart ,calculateTotalPrice} =cartSlice.actions
export default cartSlice.reducer