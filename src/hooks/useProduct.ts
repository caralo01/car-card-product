import { useEffect, useRef, useState } from "react";
import {
  IInitialValuesProductCard,
  onChangeProductCard,
  Product,
} from "../interfaces/products.interfaces";

interface IUseProduct {
  onChange?: (args: onChangeProductCard) => void;
  product: Product;
  value?: number;
  initialValues?: IInitialValuesProductCard;
}
export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: IUseProduct) => {
  const [counter, setCounter] = useState(initialValues?.count || value);
  const isControlled = useRef(!!onChange);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) return;
    else isMounted.current = true;

    setCounter(value);
  }, [value]);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }
    if (isControlled.current && onChange) {
      return onChange({ product, count: newValue });
    }
    setCounter(newValue);
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  return {
    counter,
    increaseBy,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    reset,
    maxCount: initialValues?.maxCount,
  };
};
