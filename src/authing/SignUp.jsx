
// import { useState } from "react"
// import { Lock, Eye, EyeOff, ChevronDown } from "lucide-react"
// import { useRegisterUserMutation } from '../api/reduxApi'
// import { useNavigate } from "react-router-dom"


// export default function SignUp() {
//   const navigate = useNavigate()
//   const [registerUser] = useRegisterUserMutation()
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     gender: "",
//     email: "",
//     registrationType: "",
//     city: "",
//     contactNo: "",
//     password: "",
//     confirmPassword: "",
//     accountNumber: "",
//     vendorType: "",
//     resume: null,
//   })


//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       firstname: formData.firstName,
//       lastname: formData.lastName,
//       gender: formData.gender === "male" ? "Male" : "Female",
//       type: formData.registrationType,
//       city: formData.city,
//       email: formData.email,
//       password: formData.password,
//       number: formData.contactNo,
//     };

//     // 🟡 Add Vendor Specific Fields
//     if (formData.registrationType === "Vendor") {
//       payload.accountNumber = formData.accountNumber;
//       payload.vendorType = formData.vendorType;
//       // payload.resume = formData.resume; // if backend supports file upload
//     }
   

//     try {
//       const response = await registerUser(payload).unwrap();
//       console.log("User Registered:", response);
//     } catch (error) {
//       console.error("Registration Error:", error);
//     }
//     navigate("/login")
//   };


//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword)
//   }

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword)
//   }

//   const registrationTypes = ["Vendor", "Client"]

//   const cities = ["Lahore", "Karachi", "Islamabad", "Gujranwala", "Multan", "Peshawar"]

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
//         {/* Lock Icon */}
//         <div className="flex justify-center mb-6">
//           <div className="bg-slate-800 rounded-full p-4">
//             <Lock className="w-6 h-6 text-white" />
//           </div>
//         </div>

//         {/* Heading */}
//         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Sign Up</h2>

//         {/* Already have account link */}
//         <p className="text-center text-gray-600 mb-8">
//           Already have an account?{" "}
//           <a href="#" className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors">
//             Sign In
//           </a>
//         </p>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Name Fields Row */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-colors"
//                 placeholder="First Name *"
//               />
//             </div>
//             <div>
//               <label htmlFor="lastName" className="block text-sm font-medium text-yellow-600 mb-2">
//                 Last Name *
//               </label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-3 border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
//                 placeholder=""
//               />
//             </div>
//           </div>

//           {/* Gender and Email Row */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-3">Gender</label>
//               <div className="flex space-x-6">
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="male"
//                     checked={formData.gender === "male"}
//                     onChange={handleInputChange}
//                     className="w-4 h-4 text-yellow-600 border-gray-300 focus:ring-yellow-500"
//                   />
//                   <span className="ml-2 text-gray-700">Male</span>
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="female"
//                     checked={formData.gender === "female"}
//                     onChange={handleInputChange}
//                     className="w-4 h-4 text-yellow-600 border-gray-300 focus:ring-yellow-500"
//                   />
//                   <span className="ml-2 text-gray-700">Female</span>
//                 </label>
//               </div>
//             </div>
//             <div>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-colors"
//                 placeholder="Email Address *"
//               />
//             </div>
//           </div>

//           {/* Registration Type and City Row */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="relative">
//               <select
//                 name="registrationType"
//                 value={formData.registrationType}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-colors appearance-none bg-white"
//               >
//                 <option value="">Select Registration Type</option>
//                 {registrationTypes.map((type) => (
//                   <option key={type} value={type}>
//                     {type}
//                   </option>
//                 ))}
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
//             </div>
//             <div className="relative">
//               <select
//                 name="city"
//                 value={formData.city}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-colors appearance-none bg-white"
//               >
//                 <option value="">Select City</option>
//                 {cities.map((city) => (
//                   <option key={city} value={city}>
//                     {city}
//                   </option>
//                 ))}
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
//             </div>
//           </div>

//           {/* Contact and Password Row */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700 mb-2">
//                 Contact No *
//               </label>
//               <div className="relative">
//                 <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
//                   <span className="w-6 h-4 bg-green-600 rounded-sm mr-2 flex items-center justify-center">
//                     <span className="text-white text-xs">🇵🇰</span>
//                   </span>
//                   <span className="text-gray-700">+92</span>
//                 </div>
//                 <input
//                   type="tel"
//                   id="contactNo"
//                   name="contactNo"
//                   value={formData.contactNo}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full pl-20 pr-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-colors"
//                   placeholder=""
//                 />
//               </div>
//             </div>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-colors pr-12"
//                 placeholder="Password"
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//               >
//                 {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//               </button>
//             </div>
//           </div>

//           {/* Confirm Password */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div></div>
//             <div className="relative">
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-colors pr-12"
//                 placeholder="Confirm Password"
//               />
//               <button
//                 type="button"
//                 onClick={toggleConfirmPasswordVisibility}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//               >
//                 {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//               </button>
//             </div>
//           </div>



//           {formData.registrationType === "Vendor" && (
//             <>
//               {/* Account Number */}
//               <div>
//                 <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-2">
//                   Account Number *
//                 </label>
//                 <input
//                   type="text"
//                   id="accountNumber"
//                   name="accountNumber"
//                   value={formData.accountNumber || ""}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-colors"
//                   placeholder="Enter account number"
//                 />
//               </div>

//               {/* Vendor Type */}
//               <div className="relative mt-4">
//                 <label htmlFor="vendorType" className="block text-sm font-medium text-gray-700 mb-2">
//                   Select Vendor Type *
//                 </label>
//                 <select
//                   id="vendorType"
//                   name="vendorType"
//                   value={formData.vendorType || ""}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-colors bg-white"
//                 >
//                   <option value="">Choose type</option>
//                   <option value="caterer">Caterer</option>
//                   <option value="Decorator">Decorator</option>
//                   <option value="Photographer">Photographer</option>
//                   <option value="event-planner">Event Planner</option>
//                   <option value="car-rental">Car Rental</option>
//                   <option value="venue">Venue </option>
//                 </select>
//               </div>

//               {/* Resume Upload */}
//               <div className="mt-4">
//                 <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
//                   Upload Resume (PDF)
//                 </label>
//                 <input
//                   type="file"
//                   id="resume"
//                   name="resume"
//                   accept=".pdf"
//                   onChange={(e) =>
//                     setFormData((prev) => ({ ...prev, resume: e.target.files[0] }))
//                   }
//                   required
//                   className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-colors"
//                 />
//               </div>
//             </>
//           )}

//           {/* Sign Up Button */}
//           <div className="flex justify-center pt-4">
//             <button
//               type="submit"
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
//             >
//               SIGN UP
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }










import { useState } from "react";
import { Lock, Eye, EyeOff, ChevronDown } from "lucide-react";
import { useRegisterUserMutation } from "../api/reduxApi";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    registrationType: "",
    city: "",
    contactNo: "",
    password: "",
    confirmPassword: "",
    account: "",
    vendor: "",
    experience: null, // file
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      experience: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Use FormData to handle file upload
    const payload = new FormData();
    payload.append("firstname", formData.firstName);
    payload.append("lastname", formData.lastName);
    payload.append("gender", formData.gender === "male" ? "Male" : "Female");
    payload.append("type", formData.registrationType);
    payload.append("city", formData.city);
    payload.append("email", formData.email);
    payload.append("password", formData.password);
    payload.append("number", formData.contactNo);

    if (formData.registrationType === "Vendor") {
      payload.append("account", formData.account);
      payload.append("vendor", formData.vendor);
      if (formData.experience) payload.append("experience", formData.experience);
    }

    try {
      const response = await registerUser(payload).unwrap();
      console.log("User Registered:", response);
      navigate("/login");
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const registrationTypes = ["Vendor", "Client"];
  const cities = [
    "Lahore",
    "Karachi",
    "Islamabad",
    "Gujranwala",
    "Multan",
    "Peshawar",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <div className="flex justify-center mb-6">
          <div className="bg-slate-800 rounded-full p-4">
            <Lock className="w-6 h-6 text-white" />
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Sign Up
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
          >
            Sign In
          </a>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md"
              placeholder="First Name *"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md"
              placeholder="Last Name *"
            />
          </div>

          {/* Gender and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-yellow-600 border-gray-300 focus:ring-yellow-500"
                  />
                  <span className="ml-2 text-gray-700">Male</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-yellow-600 border-gray-300 focus:ring-yellow-500"
                  />
                  <span className="ml-2 text-gray-700">Female</span>
                </label>
              </div>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md"
              placeholder="Email Address *"
            />
          </div>

          {/* Registration Type and City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="registrationType"
              value={formData.registrationType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md"
            >
              <option value="">Select Registration Type</option>
              {registrationTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md"
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Contact and Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md"
              placeholder="Contact No *"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-md pr-12"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div></div>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-md pr-12"
                placeholder="Confirm Password"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Vendor Fields */}
          {formData.registrationType === "Vendor" && (
            <>
              <input
                type="text"
                name="account"
                value={formData.account}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-md"
                placeholder="Account Number *"
              />
              <select
                name="vendor"
                value={formData.vendor}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-md"
              >
                <option value="">Choose Vendor Type</option>
                <option value="caterer">Caterer</option>
                <option value="decorator">Decorator</option>
                <option value="photographer">Photographer</option>
                <option value="event-planner">Event Planner</option>
                <option value="car-rental">Car Rental</option>
                <option value="venue">Venue</option>
              </select>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Resume (PDF)
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md"
                />
              </div>
            </>
          )}

          {/* Submit */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-md"
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
