import { createSlice } from "@reduxjs/toolkit"

//slice from redux toolkit to dispatch and check all action
export const LoginSlice=createSlice({
    name:'userAuth',//name of slice
    initialState:{
        isValid:false,//is valid uses in app to check if user are login to go dashboard page
        username:null
    },
    reducers:{
        //function to check the username if correct return is valid to true
        checkUsers:(state,action)=>{
            //payload to get the action from login components
            if(action.payload.username==='admin'||action.payload.password==='admin12345')
            state.isValid=true;
            state.username=action.payload.username;
           
      
        },
        logOut:(state)=>{
      state.isValid=false;
      state.username=null
        }

    }
})

export const {checkUsers,logOut}=LoginSlice.actions
export default LoginSlice.reducer