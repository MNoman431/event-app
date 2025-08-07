
import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../api/reduxApi'
import authReducer from './Slices/AuthSlice'
import profileReducer from './Slices/ProfileSlice' // ✅ add this
import vendorRegister from './Slices/VendorRegisterSlice';
import clientServicesReducer from "./Slices/ClientServicesSlice";
import cartReducer from "./Slices/CartSlice";


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    profile: profileReducer, // ✅ register profile reducer
    vendorRegister, // <-- yeh line zaroor ho!
    clientServices: clientServicesReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})

export default store;



