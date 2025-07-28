
import React from 'react'
import { Navigate, useLocation, Outlet } from 'react-router-dom'
const ProtectRoutes = () => {
    const isLogin = localStorage.getItem("login");
    const vendorType = localStorage.getItem("vendorType");
    const location = useLocation();
    if (!isLogin) {
        return <Navigate to="/login" />;
    }
    // Vendor hai, lekin route /vendor nahi hai toh redirect karo
    if (vendorType && !location.pathname.startsWith("/vendor")) {
        return <Navigate to="/vendor" />;
    }
    // Client hai, lekin route /vendor par hai toh home par redirect karo
    if (!vendorType && location.pathname.startsWith("/vendor")) {
        return <Navigate to="/" />;
    }
    // Sahi route, toh children render karo
    return <Outlet />;
};

export default ProtectRoutes;