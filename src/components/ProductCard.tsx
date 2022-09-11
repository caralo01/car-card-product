import React, { createContext } from 'react';
import { useProduct } from './../hooks/useProduct';
import {
  IProductCard,
  IProductContext,
} from './../interfaces/products.interfaces';
import styles from './../styles/styles.module.css';

export const ProductContext = createContext({} as IProductContext);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: IProductCard) => {
  const {
    counter,
    increaseBy,
    isMaxCountReached,
    maxCount,
    reset,
  } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider value={{ product, increaseBy, counter, maxCount }}>
      <div style={style} className={[styles.productCard, className].join(' ')}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,

          increaseBy,
          reset,
        })}
        {/* 
            <ProductImage img={product.img} />
            <ProductTitle title={product.title} />
            <ProductButtons counter={counter} increaseBy={increaseBy} /> 
        */}
      </div>
    </Provider>
  );
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
