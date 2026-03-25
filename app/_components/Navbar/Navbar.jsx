'use client';
import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${scrolled ? 'scrolled' : ''} ${click ? 'active' : ''}`}>
      <div className='container'>
        <div className={`navbar ${click ? 'active' : ''}`}>
          <Logo  closeMobileMenu={closeMobileMenu}/>
          <NavLinks click={click} closeMobileMenu={closeMobileMenu} />

          <div
            className={` hamburger ${click ? 'active' : ''}`}
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
}
