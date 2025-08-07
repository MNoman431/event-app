// import { createAsyncThunk } from "@reduxjs/toolkit";
// export const addToCartThunk = createAsyncThunk(
//   "cart/addToCart",
//   async (formData, thunkAPI) => {
//     try {
//       const response = await fetch("http://localhost:5000/carts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Failed to add to cart");
//       console.log("Added to cart:", data);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );


//////////////////////////////////////////////////////////////////////////////////
// // src/features/thunks/CartThunk.js
// import { createAsyncThunk } from "@reduxjs/toolkit";

// // ✅ POST: Add to Cart
// export const addToCartThunk = createAsyncThunk(
//   "cart/addToCart",
//   async (formData, thunkAPI) => {
//     try {
//       const response = await fetch("http://localhost:5000/carts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`, // optional
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Failed to add to cart");
//       console.log("✅ Added to cart:", data);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message || "Add to cart failed");
//     }
//   }
// );

// // ✅ GET: Fetch Cart Items by User ID
// export const getCartItemsThunk = createAsyncThunk(
//   "cart/getCartItems",
//   async (_, thunkAPI) => {
//     try {
//       const response = await fetch("http://localhost:5000/carts", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`, // required for protect middleware
//         },
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Failed to fetch cart");
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message || "Fetch cart failed");
//     }
//   }
// );
////////////////////////////////////////////////////////////////////////////////





import { createAsyncThunk } from "@reduxjs/toolkit";

// ✅ Add to Cart
// export const addToCartThunk = createAsyncThunk(
//   "cart/addToCart",
//   async (formData, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState()?.auth?.user?.token;
//       const response = await fetch("http://localhost:5000/carts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Failed to add to cart");
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message || "Add to cart failed");
//     }
//   }
// );
export const addToCartThunk = createAsyncThunk(
  "cart/addToCart",
  async (formData, thunkAPI) => {
    try {
      // const token = thunkAPI.getState()?.auth?.userInfo?.token; // ✅ Fixed
      const token = thunkAPI.getState()?.auth?.token;


      const response = await fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to add to cart");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Add to cart failed");
    }
  }
);


// ✅ Get Cart by User ID
// export const getCartByUserThunk = createAsyncThunk(
//   "cart/getCartByUser",
//   async (_, thunkAPI) => {
//     try {
//       const userId = thunkAPI.getState()?.auth?.user?._id;
//       const token = thunkAPI.getState()?.auth?.user?.token;

//       const response = await fetch(`http://localhost:5000/carts?userId=${userId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Failed to fetch cart");
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message || "Fetch cart failed");
//     }
//   }
// );

export const getCartByUserThunk = createAsyncThunk(
  "cart/getCartByUser",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      // const userId = state?.auth?.userInfo?._id;
      // const token = state?.auth?.userInfo?.token; // ✅ Fixed
      const userId = thunkAPI.getState()?.auth?.userInfo?._id;
const token = thunkAPI.getState()?.auth?.token;


      const response = await fetch(`http://localhost:5000/carts?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to fetch cart");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Fetch cart failed");
    }
  }
);
