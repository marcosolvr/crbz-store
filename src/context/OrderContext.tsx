import React, { createContext, useContext, useState } from 'react';
import { IOrder, IOrderContext, IOrderContextProvider } from '../types/order';

export const OrderContext = createContext({} as IOrderContext);
export const OrderContextProvider = ({ children }: IOrderContextProvider) => {
  const [order, setOrder] = useState<IOrder | undefined>({
    items: []
  });

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  )
}
export const useOrderContext = () => {
  const context = useContext(OrderContext);
  return context;
}