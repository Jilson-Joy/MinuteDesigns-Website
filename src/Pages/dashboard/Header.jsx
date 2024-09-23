import React from 'react'
import { useDispatch } from 'react-redux';
import {  AlignJustify } from 'lucide-react';
import { Power } from 'lucide-react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { signOutSuccess } from '../../redux/slices/authSlice';
function Header({OpenSidebar}) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    confirmAlert({
      title: 'Confirm to logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            dispatch(signOutSuccess());
            console.log('Logged out');
            window.location.href = '/login';
          }
        },
        {
          label: 'No',
          onClick: () => {
            console.log('Logout cancelled');
          }
        }
      ]
    });
  };
 
  return (
    <header className='header'>
    <div className='menu-icon'>
        <AlignJustify className='icon' onClick={OpenSidebar} />
    </div>
    <div className='header-left'>
       Welcome <b>Admin</b>
    </div>
    <div>
      <div onClick={handleLogout} style={{ cursor: 'pointer' }}>
      <Power  />
      </div>
    </div>
</header>
  )
}

export default Header