import React, { useState } from 'react'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'
import Header from './Header'
import '../../assets/css/Dashboard.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function MainDashboard() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <>
            <div className='grid-container'>
                <Header OpenSidebar={OpenSidebar} />
                <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
                <div className='container row'>
                <Dashboard />
                </div>

            </div>
        </>
    )
}

export default MainDashboard