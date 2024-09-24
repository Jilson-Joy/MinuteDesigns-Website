import React from 'react'
import { Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <div className='d-flex ' style={{
      width:'100%'
    }}>
      <Outlet />
    </div>
  )
}

export default Dashboard