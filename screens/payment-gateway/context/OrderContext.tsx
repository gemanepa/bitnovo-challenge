import React, { createContext, useContext, ReactNode } from "react";
import useOrder from "../hooks/useOrder";
import { TOrder } from "@/types/business";

interface CreateOrderFormProviderProps {
  children: ReactNode;
}

interface OrderContextType {
  order: TOrder | any;
}

const OrderContext = createContext<OrderContextType>({ order: {} });

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderContext must be used within an OrderProvider");
  }
  return context;
};

export const OrderProvider: React.FC<CreateOrderFormProviderProps> = ({
  children,
}) => {
  const order = useOrder();

  return (
    <OrderContext.Provider value={{ order }}>{children}</OrderContext.Provider>
  );
};
