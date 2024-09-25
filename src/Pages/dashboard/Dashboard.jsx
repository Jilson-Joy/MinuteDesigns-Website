import React from 'react'
import { Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <div className='' style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:'1000px'
    }}>
      <Outlet />
    </div>
  )
}

export default Dashboard