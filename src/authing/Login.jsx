
// import { useState } from "react"
// import { Lock, Eye, EyeOff } from "lucide-react"
// import { Link } from "react-router-dom"
// import { useLoginUserMutation } from '../api/reduxApi'
// import { useNavigate } from "react-router-dom";


// export default function Login() {


//     const navigate = useNavigate()
//     const [loginUser] = useLoginUserMutation()
//     const [showPassword, setShowPassword] = useState(false)
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     })

//     const handleInputChange = (e) => {
//         const { name, value } = e.target
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }))
//     }

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     try {
//     //         const response = await loginUser(formData).unwrap();
//     //         console.log("Login Successful:", response);

//     //         // ✅ Save full object as a string
//     //         localStorage.setItem("userData", JSON.stringify(response));
//     //         localStorage.setItem("login", "true");

//     //         navigate("/");
//     //     } catch (error) {
//     //         console.error("Login Error:", error);
//     //     }
//     // };


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await loginUser(formData).unwrap();
//             localStorage.setItem("userData", JSON.stringify(response));
//             localStorage.setItem("login", "true");
//             window.dispatchEvent(new Event("loginStatusChanged"));

//             // Vendor check
//             if (response.vendor) {
//                 localStorage.setItem("vendorType", "vendor");
//                 navigate("/vendor");
//             } else {
//                 localStorage.removeItem("vendorType");
//                 navigate("/");
//             }
//         } catch (error) {
//             console.error("Login Error:", error);
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword)
//     }

//     return (
//         <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//             <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
//                 {/* Lock Icon */}
//                 <div className="flex justify-center mb-6">
//                     <div className="bg-slate-800 rounded-full p-4">
//                         <Lock className="w-6 h-6 text-white" />
//                     </div>
//                 </div>

//                 {/* Heading */}
//                 <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Log In</h2>

//                 {/* Form */}
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     {/* Email Field */}
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-yellow-600 mb-2">
//                             Email Address *
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             required
//                             className="w-full px-4 py-3 border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
//                             placeholder=""
//                         />
//                     </div>

//                     {/* Password Field */}
//                     <div>
//                         <div className="relative">
//                             <input
//                                 type={showPassword ? "text" : "password"}
//                                 id="password"
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleInputChange}
//                                 required
//                                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-colors pr-12"
//                                 placeholder="Password"
//                             />
//                             <button
//                                 type="button"
//                                 onClick={togglePasswordVisibility}
//                                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//                             >
//                                 {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                             </button>
//                         </div>
//                     </div>

//                     {/* Login Button */}
//                     <button
//                         type="submit"
//                         className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
//                     >
//                         LOG IN
//                     </button>
//                 </form>

//                 {/* Footer Links */}
//                 <div className="flex justify-between items-center mt-6 text-sm">
//                     <div className="text-gray-600">
//                         {"Don't have an account? "}
//                         <Link to="/signup" className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors">
//                             Sign Up
//                         </Link>
//                     </div>
//                     <a href="#" className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors">
//                         Forget Password?
//                     </a>
//                 </div>
//             </div>
//         </div>
//     )
// }


// after mui
// import { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   IconButton,
//   InputAdornment,
//   Link as MUILink,
//   Alert,
//   Stack,
// } from "@mui/material";
// import { Visibility, VisibilityOff, Lock } from "@mui/icons-material";
// import { Link, useNavigate } from "react-router-dom";
// import { useLoginUserMutation } from "../api/reduxApi";

// export default function Login() {
//   const navigate = useNavigate();
//   const [loginUser] = useLoginUserMutation();

//   const [showPassword, setShowPassword] = useState(false);
//   const [serverError, setServerError] = useState(null);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((p) => ({ ...p, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setServerError(null);
//     try {
//       const response = await loginUser(formData).unwrap();

//       localStorage.setItem("userData", JSON.stringify(response));
//       localStorage.setItem("login", "true");
//       window.dispatchEvent(new Event("loginStatusChanged"));

//       if (response.vendor) {
//         localStorage.setItem("vendorType", "vendor");
//         navigate("/vendor");
//       } else {
//         localStorage.removeItem("vendorType");
//         navigate("/");
//       }
//     } catch (err) {
//       setServerError(err?.data?.message || "Login failed, please try again.");
//       console.error("Login Error:", err);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         bgcolor: "grey.100",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         p: 2,
//       }}
//     >
//       <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 420 }}>
//         {/* Icon */}
//         <Box
//           sx={{
//             width: 56,
//             height: 56,
//             bgcolor: "primary.main",
//             color: "primary.contrastText",
//             borderRadius: "50%",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             mx: "auto",
//             mb: 2,
//           }}
//         >
//           <Lock />
//         </Box>

//         {/* Heading */}
//         <Typography variant="h5" align="center" fontWeight={700} mb={3}>
//           Log In
//         </Typography>

//         {serverError && (
//           <Alert severity="error" sx={{ mb: 2 }}>
//             {serverError}
//           </Alert>
//         )}

//         <Box component="form" onSubmit={handleSubmit}>
//           <Stack spacing={2.5}>
//             {/* Email - Outlined */}
//             <TextField
//               id="email"
//               name="email"
//               label="Email Address"
//               variant="outlined"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               fullWidth
//             />

//             {/* Password - Filled (example of another variant) */}
//             <TextField
//               id="password"
//               name="password"
//               label="Password"
//               variant="filled"
//               type={showPassword ? "text" : "password"}
//               value={formData.password}
//               onChange={handleInputChange}
//               required
//               fullWidth
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={() => setShowPassword((p) => !p)}
//                       edge="end"
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             <Button
//               type="submit"
//               variant="contained"
//               size="large"
//               sx={{ py: 1.2, fontWeight: 600 }}
//               fullWidth
//             >
//               LOG IN
//             </Button>
//           </Stack>
//         </Box>

//         {/* Footer Links */}
//         <Box
//           mt={3}
//           display="flex"
//           alignItems="center"
//           justifyContent="space-between"
//           fontSize={14}
//         >
//           <Typography color="text.secondary">
//             Don&apos;t have an account?{" "}
//             <MUILink component={Link} to="/signup" color="primary">
//               Sign Up
//             </MUILink>
//           </Typography>

//           <MUILink component={Link} to="/forgot-password" color="primary">
//           Forgot Password?
//           </MUILink>
//         </Box>
//       </Paper>
//     </Box>
//   );
// }










// ------------------------
import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../api/reduxApi";
import {
    TextField,
    IconButton,
    InputAdornment,
    Alert,
} from "@mui/material";

export default function Login() {
    const navigate = useNavigate();
    const [loginUser] = useLoginUserMutation();

    const [showPassword, setShowPassword] = useState(false);
    const [serverError, setServerError] = useState(null);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setServerError(null);
    //     try {
    //         const response = await loginUser(formData).unwrap();

    //         localStorage.setItem("userData", JSON.stringify(response));
    //         localStorage.setItem("login", "true");
    //         window.dispatchEvent(new Event("loginStatusChanged"));

    //         if (response.vendor) {
    //             localStorage.setItem("vendorType", "vendor");
    //             navigate("/vendor");
    //         } else {
    //             localStorage.removeItem("vendorType");
    //             navigate("/");
    //         }
    //     } catch (error) {
    //         setServerError(error?.data?.message || "Login failed, please try again.");
    //         console.error("Login Error:", error);
    //     }
    // };


// ......................................................
const handleSubmit = async (e) => {
  e.preventDefault();
  setServerError(null);
  try {
    const response = await loginUser(formData).unwrap();

    // ✅ Token store karo
    if (response.token) {
      localStorage.setItem("token", response.token);
    }

    // ✅ User data store karo
    localStorage.setItem("userData", JSON.stringify(response));
    localStorage.setItem("login", "true");
    window.dispatchEvent(new Event("loginStatusChanged"));

    if (response.vendor) {
      localStorage.setItem("vendorType", "vendor");
      navigate("/vendor");
    } else {
      localStorage.removeItem("vendorType");
      navigate("/");
    }
  } catch (error) {
    setServerError(error?.data?.message || "Login failed, please try again.");
    console.error("Login Error:", error);
  }
};



    // Colors
    const gold = "#D4AF37";
    const goldDark = "#B8952C";
    const grayBorder = "#D1D5DB"; // Tailwind gray-300

    // MUI TextField Styling
    const tfSx = {
        "& .MuiInputLabel-root": { color: grayBorder, fontWeight: 500 },
        "& .MuiInputLabel-root.Mui-focused": { color: gold },

        "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            backgroundColor: "#fff",
            "& fieldset": { borderColor: grayBorder, borderWidth: 2 },
            "&:hover fieldset": { borderColor: goldDark },
            "&.Mui-focused fieldset": { borderColor: gold },
        },
        "& .MuiOutlinedInput-input": {
            color: "#000", // Black text
            caretColor: gold,
        },
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
                {/* Icon */}
                <div className="flex justify-center mb-5">
                    <div className="bg-[#0F1C2E] rounded-full p-3">
                        <Lock className="w-5 h-5 text-white" />
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-2xl font-bold text-center text-[#0F1C2E] mb-6">
                    Log In
                </h2>

                {serverError && (
                    <Alert severity="error" className="mb-4">
                        {serverError}
                    </Alert>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <TextField
                        id="email"
                        name="email"
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        sx={tfSx}
                    />

                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                        sx={tfSx}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        edge="end"
                                    >
                                        {showPassword ? <EyeOff /> : <Eye />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#D4AF37] hover:bg-[#B8952C] text-black font-semibold py-3 rounded-md shadow transition-colors"
                    >
                        LOG IN
                    </button>
                </form>

                {/* Footer */}
                <div className="flex justify-between items-center mt-6 text-sm">
                    <div className="text-black font-medium">
                        Don&apos;t have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-[#D4AF37] hover:text-[#B8952C] font-medium"
                        >
                            Sign Up
                        </Link>
                    </div>
                    <Link
                        to="/forgot-password"
                        className="text-[#D4AF37] hover:text-[#B8952C] font-medium"
                    >
                        Forget Password?
                    </Link>
                </div>
            </div>
        </div>
    );
}
// ............................................................................ after video send
