import { useState, useEffect } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createOrder from "@/api/create_order";
import {
  TCurrency,
  TStoragedOrder,
  TOrder_Created_Response,
} from "@/types/business";
import ROUTES from "@/lib/constants/routes";

const useCreateOrderForm = () => {
  const [amount, setAmount] = useState<number | null>(null);
  const [currency, setCurrency] = useState<TCurrency | null>({
    symbol: "",
    name: "",
    min_amount: "",
    max_amount: "",
    image: "",
    blockchain: "",
  });

  const [concept, setConcept] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const isValidAmount = typeof amount === "number" && amount > 0;
    const isValidCurrency = currency?.symbol.trim() !== "";
    const isValidConcept = concept.trim() !== "";
    setIsFormValid(isValidAmount && isValidCurrency && isValidConcept);
  }, [amount, currency?.symbol, concept]);

  const submitForm = async () => {
    if (isLoading) return; // Prevent multiple submissions
    if (!isFormValid || typeof amount !== "number" || !currency?.symbol) {
      console.error(
        "Form submission failed. Please fill in all fields correctly."
      );
      return;
    }

    setIsLoading(true); // Start loading

    try {
      /* const generatedOrder: TOrder_Created_Response = {
        payment_uri:
          "bitcoin:tb1q5cwdz5t693st45ahaqym2eekcanjezmlrpv9un?amount=0.0005254&rbf=false",
        identifier: "7bb7bd27-1e80-4755-ac20-3a87f0cfd7a1",
        web_url: "https://paytest.bitnovo.com/1e802913/",
        address: "tb1q5cwdz5t693st45ahaqym2eekcanjezmlrpv9un",
        tag_memo: "",
        input_currency: "BTC_TEST",
        expected_input_amount: 0.0005254,
        rate: 41872.86,
        notes: "Addqw",
        reference: null,
        fiat: "EUR",
        language: "es",
      }; */
      const generatedOrder: TOrder_Created_Response = await createOrder(
        amount,
        currency.symbol,
        concept
      );

      const storagedOrder: TStoragedOrder = {
        ...generatedOrder,
        fiat_amount: amount,
        currency_img: currency?.image || "",
      };
      await AsyncStorage.setItem("order", JSON.stringify(storagedOrder));

      const secureStorageBeforeNav = setInterval(async () => {
        const order = await AsyncStorage.getItem("order");
        if (order !== null) {
          clearInterval(secureStorageBeforeNav);
          router.navigate(ROUTES.PAYMENT_GATEWAY);
        }
      }, 200);
    } catch (error) {
      console.error("Failed to generate order:", error);
      alert("Failed to generate order. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    amount,
    setAmount,
    currency,
    setCurrency,
    concept,
    setConcept,
    isFormValid,
    isLoading,
    submitForm,
  };
};

export default useCreateOrderForm;
