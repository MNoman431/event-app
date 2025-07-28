// // event-app/src/Redux/Slices/VendorRegisterSlice.js
// import { createSlice } from '@reduxjs/toolkit';
// import { VendorRegisterThunk } from '../thunks/VendorRegisterThunk';

// const vendorRegisterSlice = createSlice({
//   name: 'vendorRegister',
//   initialState: {
//     loading: false,
//     error: null,
//     success: false,
//     services: [],
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(VendorRegisterThunk.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.success = false;
//       })
//       .addCase(VendorRegisterThunk.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = true;
//         state.services.unshift(action.payload); // nayi service list me add karo
//       })
//       .addCase(VendorRegisterThunk.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//         state.success = false;
//       });
//   },








// });

// export default vendorRegisterSlice.reducer;



// get serice wala kam k liyey upr wala comment kiya
// event-app/src/Redux/Slices/VendorRegisterSlice.js
// import { createSlice } from '@reduxjs/toolkit';
// import {
//   VendorRegisterThunk,
//   fetchVendorServicesThunk,
//   fetchServiceByIdThunk,
//   deleteServiceThunk, // ✅ NEW
//   updateServiceThunk  // ✅ NEW
  
// } from '../thunks/VendorRegisterThunk';

// const vendorRegisterSlice = createSlice({
//   name: 'vendorRegister',
//   initialState: {
//     loading: false,
//     error: null,
//     success: false,
//     services: [],
//     serviceDetail: null, // Single service detail ke liye
//   },
//   reducers: {
//     clearServiceDetail: (state) => {
//       state.serviceDetail = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // POST: Register Service
//       .addCase(VendorRegisterThunk.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(VendorRegisterThunk.fulfilled, (state) => {
//         state.loading = false;
//         state.success = true;
//       })
//       .addCase(VendorRegisterThunk.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // GET: Fetch all vendor services
//       .addCase(fetchVendorServicesThunk.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchVendorServicesThunk.fulfilled, (state, action) => {
//         state.loading = false;
//         state.services = action.payload.services || action.payload;
//       })
//       .addCase(fetchVendorServicesThunk.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // GET: Fetch service by ID
//       .addCase(fetchServiceByIdThunk.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.serviceDetail = null;
//       })
//       .addCase(fetchServiceByIdThunk.fulfilled, (state, action) => {
//         state.loading = false;
//         state.serviceDetail = action.payload;
//       })
//       .addCase(fetchServiceByIdThunk.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // DELETE: Remove service by ID
//       .addCase(deleteServiceThunk.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(deleteServiceThunk.fulfilled, (state, action) => {
//         state.loading = false;
//         // Remove the deleted service from list
//         state.services = state.services.filter(service => service._id !== action.payload);
//       })
//       .addCase(deleteServiceThunk.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
      

//   },
  
// });

// export const { clearServiceDetail } = vendorRegisterSlice.actions;
// export default vendorRegisterSlice.reducer;


// after edit kam
import { createSlice } from '@reduxjs/toolkit';
import {
  VendorRegisterThunk,
  fetchVendorServicesThunk,
  fetchServiceByIdThunk,
  deleteServiceThunk,
  updateServiceThunk  // ✅ NEW
} from '../thunks/VendorRegisterThunk';

const vendorRegisterSlice = createSlice({
  name: 'vendorRegister',
  initialState: {
    loading: false,
    error: null,
    success: false,
    services: [],
    serviceDetail: null, // Single service detail ke liye
  },
  reducers: {
    clearServiceDetail: (state) => {
      state.serviceDetail = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // POST: Register Service
      .addCase(VendorRegisterThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(VendorRegisterThunk.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(VendorRegisterThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET: Fetch all vendor services
      .addCase(fetchVendorServicesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVendorServicesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload.services || action.payload;
      })
      .addCase(fetchVendorServicesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET: Fetch service by ID
      .addCase(fetchServiceByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.serviceDetail = null;
      })
      .addCase(fetchServiceByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.serviceDetail = action.payload;
      })
      .addCase(fetchServiceByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // DELETE: Remove service by ID
      .addCase(deleteServiceThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteServiceThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.services = state.services.filter(service => service._id !== action.payload);
      })
      .addCase(deleteServiceThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // PUT: Update service
      .addCase(updateServiceThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateServiceThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        // Update single service detail
        state.serviceDetail = action.payload;
        // Update services list
        const index = state.services.findIndex(s => s._id === action.payload._id);
        if (index !== -1) {
          state.services[index] = action.payload;
        }
      })
      .addCase(updateServiceThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearServiceDetail } = vendorRegisterSlice.actions;
export default vendorRegisterSlice.reducer;
