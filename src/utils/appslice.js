import { createSlice } from "@reduxjs/toolkit";

const appslice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.isMenuOpen = !(state.isMenuOpen)
        },
        closeSidebar:(state)=>{
            state.isMenuOpen = false;
        }
    }
});

export const {toggleSidebar,closeSidebar} = appslice.actions; 
export default appslice.reducer;