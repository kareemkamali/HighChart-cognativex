import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";

//Redux not necessary for this app but i show you how can i use if i have big app




// this file contain all reducer exported to all app
const store=configureStore({
    reducer:{
        isValid:LoginSlice,
        username:LoginSlice
    }
})

export default store