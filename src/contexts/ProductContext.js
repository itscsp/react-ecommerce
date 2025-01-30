import React, {createContext, useState, useEffect} from 'react';

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  //Products state
  const [products, setProducts] = useState([]);


  // fetch products data from fakestoreapic.com
  useEffect(() => {
    const fetchProducts = async () => {

      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
                                                                                                                                                                                                                                                                                                                                            
    }
    fetchProducts()
  },[])
  return <ProductContext.Provider value={{products}}>
    {children}
  </ProductContext.Provider>
}

export default ProductProvider;