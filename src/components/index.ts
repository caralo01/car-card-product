import { IProductCardHOC } from '../interfaces/products.interfaces';
import { ProductButtons } from './ProductButtons';
import { ProductCard as ProudctCardHoc } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard: IProductCardHOC = Object.assign(ProudctCardHoc, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});
