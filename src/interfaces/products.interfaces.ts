import { CSSProperties } from "react";
export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface IShoppingCartItem extends Product {
  count: number;
}

export interface IShoppingCart {
  [key: string]: IShoppingCartItem;
}

export interface IInitialValuesProductCard {
  count?: number;
  maxCount?: number;
}

export interface IProductCard {
  product: Product;
  children: (props: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeProductCard) => void;
  value?: number;
  initialValues?: IInitialValuesProductCard;
}

export interface onChangeProductCard {
  product: Product;
  count: number;
}
export interface IProductTitle {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export interface IProductImage {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export interface IProductButtons {
  className?: string;
  style?: CSSProperties;
}

export interface IProductContext {
  increaseBy: (value: number) => void;
  counter: number;
  product: Product;
  maxCount?: number;
}

export interface IProductCardHOC {
  (props: IProductCard): JSX.Element;
  Title: (props: IProductTitle) => JSX.Element;
  Image: (props: IProductImage) => JSX.Element;
  Buttons: (props: IProductButtons) => JSX.Element;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}
