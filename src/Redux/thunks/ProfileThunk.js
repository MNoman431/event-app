// // src/features/thunks/ProfileThunk.js
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchProfile = createAsyncThunk(
//   "profile/fetchProfile",
//   async (_, { getState, rejectWithValue }) => {
//     try {
//       const { auth } = getState();
//       const token = auth.token;

//       const response = await axios.get("http://localhost:5000/api/users/profile", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Profile fetch failed");
//     }
//   }
// );



// aftertoken
// src/features/thunks/ProfileThunk.js
// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchProfile = createAsyncThunk("profile/fetch", async (_, thunkAPI) => {
//   try {
//     const token = localStorage.getItem("token"); // 🎯 Get token
//     const res = await axios.get("http://localhost:5000/api/users/profile", {
//       headers: {
//         Authorization: `Bearer ${token}`, // ✅ Send token in header
//       },
//     });
//     return res.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data);
//   }
// });

// after token
// ProfileThunk.js
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// ✅ Fetch profile
// export const fetchProfile = createAsyncThunk("profile/fetch", async (_, thunkAPI) => {
//   try {
//     const token = localStorage.getItem("token");
//     const res = await axios.get("http://localhost:5000/users/profile", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return res.data;
//   } catch (err) {
//     return thunkAPI.rejectWithValue(err.response?.data || "Something went wrong");
//   }
// });



import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProfile = createAsyncThunk("profile/fetch", async (_, thunkAPI) => {
  try {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const token = userData?.token;

    const response = await axios.get("http://localhost:5000/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || "Something went wrong");
  }
});


// ✅ Update profile
// export const updateProfile = createAsyncThunk("profile/update", async (updatedData, thunkAPI) => {
//   try {
//     const token = localStorage.getItem("token");
//     const res = await axios.put("http://localhost:5000/users/profile", updatedData, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return res.data;
//   } catch (err) {
//     return thunkAPI.rejectWithValue(err.response?.data || "Update failed");
//   }
// });


export const updateProfile = createAsyncThunk("profile/update", async (formData, thunkAPI) => {
  try {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const token = userData?.token;

    const response = await axios.put("http://localhost:5000/users/profile", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || "Something went wrong");
  }
});
