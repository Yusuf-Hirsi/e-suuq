import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import cartSlice from "../reducer/cart";
import  {persistReducer} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";


const storageConfig = {
    key: "root",
    storage
}
const AllReducer = combineReducers ({
    cart: cartSlice

})
const persistFunction = persistReducer( storageConfig, AllReducer)
const store =configureStore({

    reducer:persistFunction
    

})
export default store