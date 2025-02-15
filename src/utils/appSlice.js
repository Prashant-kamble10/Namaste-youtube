import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : "appSidebar",
    initialState :{
        sidebarOpen : true
    },
    reducers:{
        toggleMenu : (state)=>{
            state.sidebarOpen = !state.sidebarOpen
        }
    }
})

export const {toggleMenu} = appSlice.actions

export default appSlice.reducer