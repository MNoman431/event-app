// import React, { Suspense, lazy } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import SpinnerLoader from '../components/SpinnerLoader';
// import ErrorBoundary from '../components/ErrorBoundary';
// import Navbar from '../shared/components/Navbar';
// import Footer from '../shared/components/Footer';
// import VendorDashboard from '../vendor/VendorDashboard';
// import Login from '../authing/Login';
// import ProtectRoutes from '../ProtectedRouting/ProtectRoutes';
// import VendorRouting from '../ProtectedRouting/VendorRouting';
// import ServicesList from '../client/pages/ServicesList';
// // Lazy load components
// const ClientRouting = lazy(() => import("../ProtectedRouting/ClientRouting"));
// const SignUp = lazy(() => import("../authing/SignUp"));
// const Profile = lazy(() => import("../shared/components/Profile"))
// const Layout = () => {
//     return (
//         <ErrorBoundary>
//             <Suspense fallback={<SpinnerLoader />}>
//                 <Navbar />
//                 <Routes>
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/signup" element={<SignUp />} />
//                     <Route path="/profile" element={<Profile />} />
//                     <Route element={<ProtectRoutes />} >
//                         <Route path="/*" element={<ClientRouting />} />
//                          <Route path="/services/:service" element={<ServicesList />} /> {/* ✅ NEW */}
//                         <Route path="/vendor/*" element={<VendorRouting />} />
//                     </Route>
//                 </Routes>
//                 <Footer />
//             </Suspense>
//         </ErrorBoundary>
//     );
// };

// export default Layout;






import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SpinnerLoader from '../components/SpinnerLoader';
import ErrorBoundary from '../components/ErrorBoundary';
import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer';
import VendorDashboard from '../vendor/VendorDashboard';
import Login from '../authing/Login';
import ProtectRoutes from '../ProtectedRouting/ProtectRoutes';
import VendorRouting from '../ProtectedRouting/VendorRouting';


// Lazy load components
const ClientRouting = lazy(() => import("../ProtectedRouting/ClientRouting"));
const SignUp = lazy(() => import("../authing/SignUp"));
const Profile = lazy(() => import("../shared/components/Profile"));

// ✅ ServicesList Import
import ServicesList from "../client/pages/ServicesList";
import VendorDetailPage from '../vendor/pages/VendorDetailPage';
import MyCart from '../client/pages/MyCart';

const Layout = () => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<SpinnerLoader />}>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/profile" element={<Profile />} />

                    {/* ✅ New Route for Services */}
                    <Route path="/services/:type" element={<ServicesList />} />
                    <Route path="/service/:id" element={<VendorDetailPage />} />
                    <Route path="/mycart" element={<MyCart />} />



                    <Route element={<ProtectRoutes />} >
                        <Route path="/*" element={<ClientRouting />} />
                        <Route path="/vendor/*" element={<VendorRouting />} />
                    </Route>
                </Routes>
                <Footer />
            </Suspense>
        </ErrorBoundary>
    );
};

export default Layout;
