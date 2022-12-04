import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { useProductContext } from '../../context/ProductContext';
import { fetchData } from '../../service/axios';
import { IProduct, IProductContext } from '../../types/product';
import Product from './Product';
import './styles.scss';

export default function Shelf(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const productContext: IProductContext = useProductContext();

  useEffect(() => {
    const url = '/products';
    const controller = new AbortController();
    const signal = controller.signal;

    fetchData(url, signal).then(({ data }) => {
      productContext.setProducts(data);
      setIsLoading(false);
    });

    return () => { controller.abort() };
  }, []);

  if (isLoading || !productContext.products) return <></>;

  return (
    <section className='shelf container'>
      <h1 className='shelf__title'>Mais Vendidos</h1>

      <div className='shelf__products'>
        <AliceCarousel
          autoWidth
          infinite
          items={productContext.products.map(
            (product: IProduct) => Product(product)
          )}
        />
      </div>
    </section>
  );
}
