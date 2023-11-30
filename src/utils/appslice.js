import { createSlice } from "@reduxjs/toolkit";

const appslice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.isMenuOpen = !(state.isMenuOpen)
        }
    }
});

export const {toggleSidebar} = appslice.actions; 
export default appslice.reducer;