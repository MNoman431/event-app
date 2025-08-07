// import { createSlice } from "@reduxjs/toolkit";
// import { addToCartThunk } from "../thunks/CartThunk";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cartItems: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(addToCartThunk.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(addToCartThunk.fulfilled, (state, action) => {
//         state.loading = false;
//         state.cartItems.push(action.payload); // optional
//       })
//       .addCase(addToCartThunk.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default cartSlice.reducer;



// // src/features/cart/cartSlice.js////////////////////////////////////////////////
// import { createSlice } from "@reduxjs/toolkit";
// import { addToCartThunk, getCartItemsThunk } from "../thunks/CartThunk";

// const initialState = {
//   cartItems: [],
//   loading: false,
//   error: null,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder

//       // ✅ POST / Add to Cart
//       .addCase(addToCartThunk.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(addToCartThunk.fulfilled, (state, action) => {
//         state.loading = false;
//         state.cartItems.push(action.payload); // optionally keep local state in sync
//       })
//       .addCase(addToCartThunk.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // ✅ GET / Fetch Cart by User
//       .addCase(getCartItemsThunk.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getCartItemsThunk.fulfilled, (state, action) => {
//         state.loading = false;
//         state.cartItems = action.payload; // Replace with backend items
//       })
//       .addCase(getCartItemsThunk.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default cartSlice.reducer;///////////////////////////////////////////////////
import { createSlice } from "@reduxjs/toolkit";
import { addToCartThunk, getCartByUserThunk } from "../thunks/CartThunk";

const initialState = {
  cartItems: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ✅ Add to Cart
      .addCase(addToCartThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCartThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems.push(action.payload);
      })
      .addCase(addToCartThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Get Cart by User
      .addCase(getCartByUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCartByUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartByUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
