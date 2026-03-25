'use client';
import { useState } from 'react';
import { FirstCategories, firstProductsList } from '@/app/_data/data';
import './productsContent.css';
import Image from 'next/image';

export default function ProductsContent() {
  const [click, setClick] = useState('All');
  // const ngrokBase =
  //   process.env.NEXT_PUBLIC_NGROK_BASE || 'http://localhost:3000';
  return (
    <div className='products-content'>
      <div className='container'>
        <div className='products-header'>
          <h1>Products</h1>
        </div>

        <div className='first-category'>
          <ul className='first-category-list'>
            {FirstCategories.map(item => (
              <li
                key={item.id}
                className={click === item.name ? 'active' : item.name}
                onClick={() =>
                  setClick(prev => (prev === item.name ? 'All' : item.name))
                }
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div className='category-card-container'>
            {firstProductsList.map(list => {
              if (click === 'All' || click === list.category) {
                return (
                  <div className='category-card' key={list.id}>
                    <div className='category-card-image'>
                      <Image
                        src={list.image}
                        alt={list.name}
                        width={150}
                        height={200}
                      />
                    </div>
                    <div className='category-content'>
                      <h3>{list.name} </h3>
                      <p>{list.description}</p>
                      <p>{`$ ${list.price}`}</p>
                      <button
                        className='snipcart-add-item'
                        data-item-id={list.id.toString()}
                        data-item-price={list.price}
                        // data-item-url={`/products/${list.id}`}
                        // data-item-url={`${ngrokBase}/products/${list.
                        // id}`}
                        data-item-url="/"
                        data-item-name={list.name}
                        data-item-description={list.description}
                        data-item-image={list.image}
                      >
                        add to cart
                      </button>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
