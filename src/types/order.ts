import { IProduct } from './product';

export interface IOrder {
  items: IProduct[] | undefined
}

export interface IOrderContext {
  order: IOrder
  setOrder: React.Dispatch<React.SetStateAction<IOrder | undefined>>
}

export interface IOrderContextProvider {
  children: JSX.Element
}