// 'use client';
// import './NavLinks.css';
// import Link from 'next/link';

// export default function NavLinks({ click, closeMobileMenu }) {
//   return (
//     <ul className={`menu-list ${click ? 'active' : ''}`}>
//       <li>
//         <Link href='/' onClick={closeMobileMenu}>
//           Home
//         </Link>
//       </li>
//       <li>
//         <Link href='/about' onClick={closeMobileMenu}>
//           About Us
//         </Link>
//       </li>
//       <li>
//         <Link href='/products' onClick={closeMobileMenu}>
//           Products
//         </Link>
//       </li>
//       <li>
//         <Link href='/reservation'>Reservation</Link>
//       </li>

//       <div className='cart-btn'>
//         <Link href='/#' onClick={() => Snipcart.api.modal.show()}>
//            Cart(<span className='snipcart-items-count'>0</span>)
//         </Link>
//       </div>

//       <div className='sign-up'>
//         <Link href='/signup'>Sign Up</Link>
//       </div>
//     </ul>
//   );
// }

'use client';
import './NavLinks.css';
import Link from 'next/link';
import { useCartStore } from '@/app/_store/cartStore';


// import { useEffect, useState } from 'react';

export default function NavLinks({ click, closeMobileMenu }) {
  const totalItems = useCartStore(state =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0),
  );
  // const [itemCount, setItemCount] = useState(0);

  // Live cart count
  // useEffect(() => {
  //   const updateCartCount = () => {
  //     const count = window.Snipcart?.store?.getState()?.cart?.items?.length || 0;
  //     setItemCount(count);
  //   };

  //   if (window.Snipcart) updateCartCount();

  //   window.Snipcart?.events?.on('cart.ready', updateCartCount);
  //   window.Snipcart?.events?.on('item.added', updateCartCount);
  //   window.Snipcart?.events?.on('item.removed', updateCartCount);
  //   window.Snipcart?.events?.on('item.updated', updateCartCount);

  //   return () => {
  //     window.Snipcart?.events?.off('cart.ready', updateCartCount);
  //     window.Snipcart?.events?.off('item.added', updateCartCount);
  //     window.Snipcart?.events?.off('item.removed', updateCartCount);
  //     window.Snipcart?.events?.off('item.updated', updateCartCount);
  //   };
  // }, []);

  // Open Cart
  // const openCart = (e) => {
  //   e.preventDefault();
  //   window.Snipcart?.api?.theme?.cart?.open();
  //   closeMobileMenu();
  // };

  // Close cart when navigation starts
  // const handleNavClick = () => {
  //   closeMobileMenu();

  // Close cart with a small delay to avoid blocking navigation
  //   setTimeout(() => {
  //     window.Snipcart?.api?.theme?.cart?.close();
  //   }, 50);
  // };

  return (
    <ul className={`menu-list ${click ? 'active' : ''}`}>
      <li>
        <Link href='/' onClick={closeMobileMenu}>
          Home
        </Link>
      </li>
      <li>
        <Link href='/about' onClick={closeMobileMenu}>
          About Us
        </Link>
      </li>

      <li>
        <Link href='/products' onClick={closeMobileMenu}>
          Products
        </Link>
      </li>
      <li>
        <Link href='/reservation' onClick={closeMobileMenu}>
          Reservation
        </Link>
      </li>
      {/* <li>
        {' '}
        <Link href='/cart' className='cart-icon-link'>
          <div
            className='cart-icon-wrapper'
            style={{ position: 'relative', display: 'inline-block' }}
          >
            🛒Cart
            {totalItems > 0 && <span className='cart-count'>{totalItems}</span>}
          </div>
        </Link>
      </li> */}

      {/* Cart Button */}
      <li>
        <Link href='/cart' onClick={closeMobileMenu} className='cart-icon-link'>
          🛒Cart
          {totalItems > 0 && <span className='cart-count'>{totalItems}</span>}
        </Link>
      </li>
      <li>
        <Link href='/signup' onClick={closeMobileMenu}>
          Sign Up
        </Link>
      </li>

      <li></li>
    </ul>
  );
}
