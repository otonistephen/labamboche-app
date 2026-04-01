'use client';

import { useCartStore } from '@/app/_store/cartStore';
import { createCheckoutSession } from '../actions/checkout';
import Image from 'next/image';
import Link from 'next/link';
import './cart.css'

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();

  const total = cart.reduce((sum, item) => 
    sum + item.price * item.quantity, 0
  );

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    await createCheckoutSession(cart);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h1>Your Cart is Empty</h1>
          <Link href="/products">
            <button>Continue Shopping</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Your Cart</h1>

        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-image">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                />
              </div>

              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>

              <div className="cart-item-quantity">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>

              <div className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              <button 
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Total: ${total.toFixed(2)}</h2>
          
          <button 
            className="checkout-button"
            onClick={handleCheckout}
          >
            Proceed to Checkout with Stripe
          </button>

          <button 
            className="clear-cart-btn"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}