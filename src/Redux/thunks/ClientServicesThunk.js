// src/redux/thunks/clientServicesThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchServicesByType = createAsyncThunk(
//     "clientServices/fetchByType",
//     async (type, { rejectWithValue }) => {
//         try {
//             // backend me controller getAllService => /services/allservices/:service
//             const res = await fetch(
//                 `http://localhost:5000/services/allservice/${type}`
//             );
//             const data = await res.json();
//             if (!res.ok) throw new Error(data.message || "Failed to fetch services");
//             return data; // array aa raha hai
//         } catch (err) {
//             return rejectWithValue(err.message);
//         }
//     }
// );


export const fetchServicesByType = createAsyncThunk(
  "clientServices/fetchByType",
  async (type, { rejectWithValue }) => {
    try {
      // Capitalize first letter of each word (e.g., "car rental" -> "Car Rental")
      const formattedType = type
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      const res = await fetch(
        `http://localhost:5000/services/allservice/${formattedType}`
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch services");
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
