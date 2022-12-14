import React from 'react';
import Header from './components/Header';
import CarouselBanner from './components/CarouselBanner';
import Shelf from './components/Shelf';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

import { OrderContextProvider } from './context/OrderContext';
import { ProductContextProvider } from './context/ProductContext';

export function App(): JSX.Element {
  return (
    <OrderContextProvider>
      <ProductContextProvider>
        <React.StrictMode>
          <Header />
          <CarouselBanner />
          <Shelf />
          <Newsletter />
          <Footer />
        </React.StrictMode>
      </ProductContextProvider>
    </OrderContextProvider>
  );
}