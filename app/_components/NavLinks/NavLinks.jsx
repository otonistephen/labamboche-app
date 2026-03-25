
'use client';
import './NavLinks.css';
import Link from 'next/link';

export default function NavLinks({click,closeMobileMenu}) {
  return (
 
      <ul className={`menu-list ${click ? 'active':''}`}>
        <li>
          <Link href='/' onClick={closeMobileMenu}>Home</Link>
        </li>
        <li>
          <Link href='/about' onClick={closeMobileMenu}>About Us</Link>
        </li>
        <li>
          <Link href='/products' onClick={closeMobileMenu}>Products</Link>
        </li>
        <li>
          <Link href='/reservation'>Reservation</Link>
        </li>
        <div className='sign-up'>
          <Link href='/signup'>Sign Up</Link>
        </div>
      </ul>
  
  );
}
