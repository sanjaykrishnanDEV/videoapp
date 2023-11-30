import {configureStore} from "@reduxjs/toolkit";
import appSlice from '../utils/appslice'
const store = configureStore({
  reducer:{
    app:appSlice,
  }
})

export default store;