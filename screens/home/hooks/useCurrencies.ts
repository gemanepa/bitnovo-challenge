import { useState, useEffect } from "react";
import fetchCurrencies from "@/api/get-currencies";
import { TCurrency } from "@/types/business";
import useCurrencyImagePreloading from "./useCurrencyImagePreloading";

const useCurrencies = () => {
  const [currencies, setCurrencies] = useState<TCurrency[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const imagesLoaded = useCurrencyImagePreloading(currencies);

  useEffect(() => {
    const setupCurrencies = async () => {
      try {
        const data = await fetchCurrencies();
        setCurrencies(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching currencies:", error);
        setLoading(false);
      }
    };

    setupCurrencies();

    return () => {};
  }, [fetchCurrencies]);

  return { currencies, loading, imagesLoaded };
};

export default useCurrencies;
