import React, { useState } from 'react';
import { Airplay, AlignJustify, BookOpen, Box, ChevronDown, ChevronLeft, Folders, Images, LayoutDashboard, Rss } from 'lucide-react';
import { Link } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    const [openDropdown, setOpenDropdown] = useState(null); // A single state for dropdowns

    const toggleDropdown = (dropdown) => {
        setOpenDropdown((prevDropdown) => (prevDropdown === dropdown ? null : dropdown));
    };

    return (
        <aside id="sidebar" className={openSidebarToggle ? 'sidebar-responsive' : ''}>
            <div className="sidebar-title">
                <div className="sidebar-brand">Minute Designs</div>
                <span className="icon close_icon" onClick={OpenSidebar}>
                    <ChevronLeft />
                </span>
            </div>

            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <a href="javascript:void(0)">
                        <LayoutDashboard className="icon" /> Dashboard
                    </a>
                </li>

                <li className="sidebar-list-item">
                    <a
                        href="javascript:void(0)"
                        onClick={() => toggleDropdown('pages')}
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <BookOpen className="icon" />
                        Pages
                        <ChevronDown style={{ marginTop: '3px' }} />
                    </a>
                    <ul className={`dropdown-list ${openDropdown === 'pages' ? 'show' : ''}`}>
                        <Link to="/mainDashboard/addPage" className='link_tag'>
                            <li>Add Page</li>
                        </Link>
                        <Link to="/mainDashboard/listPage" className='link_tag'>
                            <li>List Pages</li>
                        </Link>
                    </ul>
                </li>

                <li className="sidebar-list-item">
                    <a
                        href="javascript:void(0)"
                        onClick={() => toggleDropdown('services')}
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <Box className="icon" />
                        Services
                        <ChevronDown style={{ marginTop: '3px' }} />
                    </a>
                    <ul className={`dropdown-list ${openDropdown === 'services' ? 'show' : ''}`}>
                        <Link to="/mainDashboard/addServices" className='link_tag'>
                            <li>Add Service</li>
                        </Link>
                        <Link to="/mainDashboard/listServices" className='link_tag'>
                            <li>List Services</li>
                        </Link>
                    </ul>
                </li>

                <li className="sidebar-list-item">
                    <a href="javascript:void(0)">
                        <Images className="icon" />
                        Gallery
                    </a>
                </li>

                <li className="sidebar-list-item">
                    <a href="javascript:void(0)">
                        <Rss className="icon" />
                        Blog
                    </a>
                </li>

                <li className="sidebar-list-item">
                    <a
                        href="javascript:void(0)"
                        onClick={() => toggleDropdown('testimonials')}
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <Box className="icon" />
                        Testimonials
                        <ChevronDown style={{ marginTop: '3px' }} />
                    </a>
                    <ul className={`dropdown-list ${openDropdown === 'testimonials' ? 'show' : ''}`}>
                        <Link to="/mainDashboard/addTestimonial" className='link_tag'>
                            <li>Add Testimonial</li>
                        </Link>
                        <Link to="/mainDashboard/listTestimonials" className='link_tag'>
                            <li>List Testimonials</li>
                        </Link>
                    </ul>
                </li>
                
            </ul>
        </aside>
    );
}

export default Sidebar;
