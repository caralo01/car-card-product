import React, { useContext } from 'react';
import { IProductTitle } from './../interfaces/products.interfaces';
import styles from './../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export const ProductTitle = ({ title, className, style }: IProductTitle) => {
  const { product } = useContext(ProductContext);

  return (
    <span
      style={style}
      className={[styles.productDescription, className].join(' ')}
    >
      {title || product.title}
    </span>
  );
};
