import React from 'react'
import VendorDashboard from '../vendor/VendorDashboard'
import VendorRegister from '../vendor/pages/VendorRegister'
import { Routes, Route } from "react-router-dom"
import VendorDetailPage from '../vendor/pages/VendorDetailPage'


const VendorRouting = () => {
    return (
        <Routes>
            <Route index element={<VendorDashboard />} /> Default route
            <Route path="vendordashboard" element={<VendorDashboard />} />

            <Route path="registerservice" element={<VendorRegister />} />
            <Route path="service/:id" element={<VendorDetailPage />} />
        </Routes>
    )
}

export default VendorRouting
