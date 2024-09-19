import { useState } from 'react';
import { BookOpen, Box, ChevronDown, ChevronLeft, LayoutDashboard, } from 'lucide-react';
import { Link } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    const [openDropdown, setOpenDropdown] = useState(null);

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
                            <li>Add Services</li>
                        </Link>
                        <Link to="/mainDashboard/listServices" className='link_tag'>
                            <li>List Services</li>
                        </Link>
                    </ul>
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

                <li className="sidebar-list-item">
                    <a
                        href="javascript:void(0)"
                        onClick={() => toggleDropdown('blog')}
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <Box className="icon" />
                        Blogs
                        <ChevronDown style={{ marginTop: '3px' }} />
                    </a>
                    <ul className={`dropdown-list ${openDropdown === 'blog' ? 'show' : ''}`}>
                        <Link to="/mainDashboard/addBlog" className='link_tag'>
                            <li>Add Blog</li>
                        </Link>
                        <Link to="/mainDashboard/listBlogs" className='link_tag'>
                            <li>List Blogs</li>
                        </Link>
                    </ul>
                </li>
                <li className="sidebar-list-item">
                    <a
                        href="javascript:void(0)"
                        onClick={() => toggleDropdown('categories')}
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <Box className="icon" />
                        Categories
                        <ChevronDown style={{ marginTop: '3px' }} />
                    </a>
                    <ul className={`dropdown-list ${openDropdown === 'categories' ? 'show' : ''}`}>
                        <Link to="/mainDashboard/addCategory" className='link_tag'>
                            <li>Add Category</li>
                        </Link>
                        <Link to="/mainDashboard/listCategory" className='link_tag'>
                            <li>List Categories</li>
                        </Link>
                    </ul>   
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
