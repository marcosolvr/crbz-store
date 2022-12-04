import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { useProductContext } from '../../context/ProductContext';
import { useOrderContext } from '../../context/OrderContext';
import { fetchData } from '../../service/axios';
import { IOrderContext } from '../../types/order';
import { IProduct, IProductContext } from '../../types/product';
import Product from './Product';
import './styles.scss';

export default function Shelf(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const productContext: IProductContext = useProductContext();
  const orderContext: IOrderContext = useOrderContext();

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

  function addProductOnCart(product: IProduct): void {
    const { order, setOrder } = orderContext;
    const newOrder = { ...order };
    newOrder.items?.push(product);
    setOrder(newOrder);
  }

  if (isLoading || !productContext.products) return <></>;

  return (
    <section className='shelf container'>
      <h1 className='shelf__title'>Mais Vendidos</h1>

      <div className='shelf__products'>
        <AliceCarousel
          autoWidth
          infinite
          items={productContext.products.map(
            (product: IProduct) => Product({ product, addProductOnCart })
          )}
        />
      </div>
    </section>
  );
}
