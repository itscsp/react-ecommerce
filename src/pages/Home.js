import React, {useContext} from 'react';

//import product context
import {ProductContext} from '../contexts/ProductContext'
import Product from '../components/Product';

const Home = () => {
  //Get Product from product context
  const {products, isLoading} =  useContext(ProductContext);
  console.log(products)
  return (
    <div className='py-16'>
      
    <section className='container mx-auto'>

      {isLoading && <p className='text-center'>Product Loading...</p>}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]'>
      {products.map((product) => {
        return <Product  key={product.id} data={product} />
        })
      }
    </div>
    </section>
      </div>
  );
};

export default Home;
