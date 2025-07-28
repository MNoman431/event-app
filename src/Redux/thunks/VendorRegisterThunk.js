// // event-app/src/Redux/thunks/VendorRegisterThunk.js
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const VendorRegisterThunk = createAsyncThunk(
//   'vendor/registerService',
//   async (formData, { rejectWithValue }) => {
//     try {
//       const token = JSON.parse(localStorage.getItem('userData'))?.token;
//       const response = await fetch('http://localhost:5000/services/', {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           // Content-Type mat lagayen! FormData ke sath browser khud lagata hai
//         },
//         body: formData,
//       });
//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.message || 'Service registration failed');
//       }
//       return data;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );




// after get service\
// event-app/src/Redux/thunks/VendorRegisterThunk.js
import { createAsyncThunk } from '@reduxjs/toolkit';

export const VendorRegisterThunk = createAsyncThunk(
  'vendor/registerService',
  async (formData, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem('userData'))?.token;
      const createResponse = await fetch('http://localhost:5000/services/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const createdData = await createResponse.json();
      if (!createResponse.ok) {
        throw new Error(createdData.message || 'Service registration failed');
      }
      return createdData;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Fetch all vendor services
export const fetchVendorServicesThunk = createAsyncThunk(
  'vendor/fetchServices',
  async (_, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem('userData'))?.token;
      const response = await fetch('http://localhost:5000/services/', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Fetching services failed');
      }
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Fetch single service by ID
export const fetchServiceByIdThunk = createAsyncThunk(
  'vendor/fetchServiceById',
  async (serviceId, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem('userData'))?.token;
      const response = await fetch(`http://localhost:5000/services/${serviceId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Fetching service details failed');
      }
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// 🆕 Delete service by ID
export const deleteServiceThunk = createAsyncThunk(
  'vendor/deleteService',
  async (serviceId, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem('userData'))?.token;
      const response = await fetch(`http://localhost:5000/services/${serviceId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || 'Deleting service failed');
      }
      return serviceId; // Return deleted ID for UI update
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);


// 🆕 Update Service by ID
export const updateServiceThunk = createAsyncThunk(
  'vendor/updateService',
  async ({ serviceId, formData }, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem('userData'))?.token;
      const response = await fetch(`http://localhost:5000/services/${serviceId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData, // FormData for file upload
      });
      const updatedData = await response.json();
      if (!response.ok) {
        throw new Error(updatedData.message || 'Service update failed');
      }
      return updatedData; // Return updated service
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
