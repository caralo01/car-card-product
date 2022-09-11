import React, { useCallback, useContext } from 'react';
import { IProductButtons } from './../interfaces/products.interfaces';
import styles from './../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export const ProductButtons = ({ className, style }: IProductButtons) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [
    counter,
    maxCount,
  ]);
  return (
    <div
      style={style}
      className={[styles.buttonsContainer, className].join(' ')}
    >
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        onClick={() => increaseBy(1)}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
      >
        +
      </button>
    </div>
  );
};
