import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import fetchOrder from "@/api/get-order";
import { TStoragedOrder, TOrder_Info_Response } from "@/types/business";
import useOrderSocketStatus from "./useOrderSocketStatus";
import useFinalStatusRedirection from "./useFinalStatusRedirection";

export default function useOrder() {
  const [storagedOrder, setStoragedOrder] = useState<TStoragedOrder | null>(
    null
  );
  const [fetchedOrderInfo, setFetchedOrderInfo] =
    useState<TOrder_Info_Response | null>(null);

  const { orderSocketStatus } = useOrderSocketStatus({
    orderIdentifier: storagedOrder?.identifier || "",
  });

  useFinalStatusRedirection({
    socketStatus: orderSocketStatus,
    fetchStatus: fetchedOrderInfo?.status,
  });

  useEffect(() => {
    // Retrieve storaged data
    const retrieveStoragedData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("order");
        if (jsonValue) {
          const storagedOrder: TStoragedOrder = JSON.parse(jsonValue);
          setStoragedOrder(storagedOrder);
        }
      } catch (e) {
        console.error("Error reading order from AsyncStorage:", e);
      }
    };

    retrieveStoragedData();
  }, []);

  useEffect(() => {
    // Retrieve order info
    const retrieveOrderInfo = async () => {
      if (!storagedOrder?.identifier) return;
      try {
        const fetchedOrderInfo = await fetchOrder(storagedOrder.identifier);
        setFetchedOrderInfo(fetchedOrderInfo[0]);
      } catch (error) {
        console.error("Error fetching order info:", error);
      }
    };

    if (storagedOrder?.identifier) {
      retrieveOrderInfo();
      setInterval(retrieveOrderInfo, 30000);
    }

    return () => {};
  }, [storagedOrder?.identifier]);

  return { ...storagedOrder, ...fetchedOrderInfo };
}
