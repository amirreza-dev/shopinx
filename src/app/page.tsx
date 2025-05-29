import ProductList from '@/components/ProductList';
import Slider from '@/components/Slider';

const HomePage = () => {
 return (
  <main>
   <Slider />

   <section className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
    <h2 className='text-2xl'>Featured Products</h2>
    <ProductList />
   </section>
  </main>
 );
};

export default HomePage;
