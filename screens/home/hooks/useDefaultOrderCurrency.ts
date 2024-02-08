import { TCurrency } from "@/types/business";
import { useEffect } from "react";

interface DefaultOrderCurrencyProps {
  currencies: TCurrency[];
  orderCurrency: TCurrency | null;
  setOrderCurrency: (currency: any) => void;
}

// Used to set the initial/default currency of the entire order depending of the available currencies for the selected amount
const useDefaultOrderCurrency = ({
  currencies,
  orderCurrency,
  setOrderCurrency,
}: DefaultOrderCurrencyProps) => {
  useEffect(() => {
    const isCurrentSelectedCurrencyValid = currencies.some(
      (currency) => currency.symbol === orderCurrency?.symbol
    );
    if (currencies.length && !isCurrentSelectedCurrencyValid) {
      const btcIndex = currencies.findIndex((currency) =>
        currency.symbol.includes("BTC")
      );
      const initialCurrency = currencies[btcIndex] || currencies[0];
      setOrderCurrency(initialCurrency);
    }

    if (!currencies.length) {
      setOrderCurrency(null);
    }
  }, [currencies]);

  return { orderCurrency, setOrderCurrency };
};

export default useDefaultOrderCurrency;
