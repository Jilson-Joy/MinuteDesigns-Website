import React from 'react'
import {  AlignJustify } from 'lucide-react';
import { Power } from 'lucide-react';
function Header({OpenSidebar}) {
  return (
    <header className='header'>
    <div className='menu-icon'>
        <AlignJustify className='icon' onClick={OpenSidebar} />
    </div>
    <div className='header-left'>
       Welcome <b>Admin</b>
    </div>
    <div>
      <Power/>
    </div>
</header>
  )
}

export default Header