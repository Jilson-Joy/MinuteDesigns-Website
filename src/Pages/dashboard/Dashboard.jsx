import React from 'react'
import { Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <div className='d-flex ' >
      <Outlet/>
    </div>
  )
}

export default Dashboard