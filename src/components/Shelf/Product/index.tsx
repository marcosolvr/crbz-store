import React from 'react';
import { IProduct } from '../../../types/product';
import './styles.scss';

export default function Product(product: IProduct): JSX.Element {
  function formatPrice(value: number): string {
    const NumberFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    const priceFormatted = NumberFormat.format(value / 100);
    return priceFormatted;
  }

  return (
    <div className='product'>
      <div className='product__image'>
        <span className='product__tag'>{product.listPrice ? 'OFF' : null}</span>
        <img src={product.imageUrl} alt={product.productName} />
      </div>

      <div className='product__body'>
        <a className='product__name'>{product.productName}</a>
        <div className='product__ratings'>{product.stars}</div>

        <div className='product__price'>
          <div className='product__list-price'>
            <p className='product__list-price'>{product.listPrice ? `de ${formatPrice(product.listPrice)}` : null}</p>
          </div>
          <div className=''>
            <p className='product__final-price'>por {formatPrice(product.price)}</p>
          </div>
          <p className='product__installments'>
            {product.installments.length
              ? `ou em ${product.installments[0].quantity}x de ${formatPrice(product.installments[0].value)}`
              : null}
          </p>
        </div>
        <button className='product__buy-buton'>Comprar</button>
      </div>
    </div>
  );
}
