import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import useCurrencies from "@/screens/home/hooks/useCurrencies";
import useDefaultOrderCurrency from "@/screens/home/hooks/useDefaultOrderCurrency";
import { useCreateOrderFormContext } from "@/screens/home/context/CreateOrderFormContext";
import { TCurrency } from "@/types/business";
import CurrencyInput from "./CurrencyInput";
import CurrenciesModal from "./CurrenciesModal";
import isWeb from "@/lib/utils/isWeb";
interface InputWithModalProps {
  label: string;
}

const filterCurrenciesByAmount = (
  currencies: TCurrency[],
  amount: number
): TCurrency[] => {
  return currencies.filter((currency) => {
    const minAmount = parseFloat(currency.min_amount);
    const maxAmount = parseFloat(currency.max_amount);
    return amount >= minAmount && amount <= maxAmount;
  });
};

const InputWithModal: React.FC<InputWithModalProps> = ({ label }) => {
  const { currencies: fetchedCurrencies } = useCurrencies();
  const {
    amount,
    currency: orderCurrency,
    setCurrency: setOrderCurrency,
  } = useCreateOrderFormContext();

  const availableCurrencies = filterCurrenciesByAmount(
    fetchedCurrencies,
    amount
  );
  useDefaultOrderCurrency({
    // handles default currency given the selected amount
    currencies: availableCurrencies,
    orderCurrency,
    setOrderCurrency,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <View style={inputWithModalStyles.container}>
      <CurrencyInput
        currencies={availableCurrencies}
        orderCurrency={orderCurrency}
        label={label}
        toggleModal={toggleModal}
      />
      <CurrenciesModal
        currencies={availableCurrencies}
        orderCurrency={orderCurrency}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
      />
    </View>
  );
};

const inputWithModalStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 100,
    width: isWeb ? 609 : "100%",
  },
});

export default InputWithModal;
