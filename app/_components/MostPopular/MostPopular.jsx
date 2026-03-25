import { mostPopular } from '@/app/_data/data';
import './MostPopular.css';
import Image from 'next/image';
import Link from 'next/link';

export default function MostPopular() {
   const ngrokBase =
    process.env.NEXT_PUBLIC_NGROK_BASE || 'http://localhost:3000';
  return (
    <section className='most-popular'>
      <div className='container'>
        <h2>most popular</h2>
        <div className='container-popular'>
          {mostPopular.map((item, index) => (
            <div className='card-popular' key={item.id}>
              <div className='image-container'>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                />
              </div>
              <div className='image-popular-content'>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{`$ ${item.price}`}</p>
                  <button
                        className='snipcart-add-item'
                        data-item-id={item.id.toString()}
                        data-item-price={item.price}
                        // data-item-url={`/products/${item.id}`} 
                        data-item-url={`${ngrokBase}/products/${item.id}`}
                        data-item-name={item.name}
                        data-item-description={item.description}
                        data-item-image={item.image}
                      >
                        add to cart
                      </button>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <div className='view-more'>
          <Link href='/products'>View more products <i className='bx bx-chevrons-right'></i></Link>
         
        </div>
      </div>
    </section>
  );
}
