import React, { createContext, useContext, useState } from 'react';
import { IProduct, IProductContext, IProductContextProvider } from '../types/product';

export const ProductContext = createContext({} as IProductContext);
export const ProductContextProvider = ({ children }: IProductContextProvider) => {
  const [products, setProducts] = useState<IProduct[] | undefined>();

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  )
}
export const useProductContext = () => {
  const context = useContext(ProductContext);
  return context;
}