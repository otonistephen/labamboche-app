
import './products.css';
import ProductsHero from '../_components/ProductsHero/ProductsHero';
import ProductsContent from '../_components/ProductsContent/ProductsContent';

export default function ProductsPage() {

  return (
    <section className='products-page'>
      <ProductsHero />
      <ProductsContent />
    </section>
  );
}
