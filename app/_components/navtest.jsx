import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { images } from '../../assets/assets';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };


  const closeMobileMenu = () => {
    setTimeout(() => {
      setClick(false);
      document.body.style.overflow = 'auto';
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
      document.body.style.overflow = 'auto';
  }, [location.pathname]);

  return (
    <nav className={`${scrolled ? 'scrolled' : ''} ${click ? 'active' : ''}`}>
      <div className='container'>
        <div className={`navbar ${click ? 'active' : ''}`}>
          <div className='logo'>
            <Link to='/' onClick={closeMobileMenu}>
              <div className='image'>
                <img src={images.logo_m} alt='logo image' />
              </div>
              <div className='logo-text'>
                <h1>Mecapex Service </h1>
                <p>Limited</p>
              </div>
            </Link>
          </div>

          <ul className={`list-menu ${click ? 'active' : ''}`}>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>

            <NavLink
              to='/About-Us'
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeMobileMenu}
            >
              About Us
            </NavLink>

            <NavLink
              to='/Our-Services'
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeMobileMenu}
            >
              Our Services
            </NavLink>

            <NavLink
              to='/Contact-Us'
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeMobileMenu}
            >
              contact Us
            </NavLink>
          </ul>
          <div
            className={`hamburger ${click ? 'active' : ''}`}
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;