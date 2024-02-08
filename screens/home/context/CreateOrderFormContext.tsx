import React, { createContext, useContext, ReactNode } from "react";
import useCreateOrderForm from "../hooks/useCreateOrderForm";

interface CreateOrderFormProviderProps {
  children: ReactNode;
}

// Define context
const CreateOrderFormContext = createContext<any>(null);

// Define provider
export const CreateOrderFormProvider: React.FC<
  CreateOrderFormProviderProps
> = ({ children }) => {
  const createOrderForm = useCreateOrderForm();

  return (
    <CreateOrderFormContext.Provider value={createOrderForm}>
      {children}
    </CreateOrderFormContext.Provider>
  );
};

// Custom hook to use context
export const useCreateOrderFormContext = () => {
  const context = useContext(CreateOrderFormContext);
  if (!context) {
    throw new Error(
      "useCreateOrderFormContext must be used within a CreateOrderFormProvider"
    );
  }
  return context;
};
