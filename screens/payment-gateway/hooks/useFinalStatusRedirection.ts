import { useEffect, useContext } from "react";
import { router } from "expo-router";
import ROUTES from "@/lib/constants/routes";
import { DynamicScreenHeightContext } from "@/lib/context/DynamicScreenHeightContext";

type FinalStatusRedirectionHook = {
  socketStatus?: string;
  fetchStatus?: string;
};

export default function useFinalStatusRedirection({
  socketStatus,
  fetchStatus,
}: FinalStatusRedirectionHook) {
  const { setScreenHeight } = useContext(DynamicScreenHeightContext);

  const redirectToFinalStatus = (status: string | undefined) => {
    if (status === "EX" || status === "OC") {
      setScreenHeight(0);
      router.navigate(ROUTES.PAYMENT_CANCELED);
    }
    if (status === "AC" || status === "CO") {
      setScreenHeight(0);
      router.navigate(ROUTES.PAYMENT_SUCCESS);
    }
  };

  useEffect(() => {
    redirectToFinalStatus(fetchStatus);
  }, [fetchStatus]);

  useEffect(() => {
    redirectToFinalStatus(socketStatus);
  }, [socketStatus]);
}
