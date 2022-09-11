import React, { useContext } from 'react';
import { IProductImage } from './../interfaces/products.interfaces';
import noImage from './../assets/no-image.jpg';
import styles from './../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export const ProductImage = ({ img, className, style }: IProductImage) => {
  const { product } = useContext(ProductContext);
  let imgShow: any = img || product.img;
  if (!imgShow) {
    imgShow = noImage;
  }
  return (
    <img
      style={style}
      className={[styles.productImg, className].join(' ')}
      src={imgShow}
      alt="product-card"
    />
  );
};
