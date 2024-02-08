import { useEffect } from "react";
import { router } from "expo-router";
import ROUTES from "@/lib/constants/routes";

type FinalStatusRedirectionHook = {
  socketStatus?: string;
  fetchStatus?: string;
};

const redirectToFinalStatus = (status: string | undefined) => {
  if (status === "EX" || status === "OC") {
    router.navigate(ROUTES.PAYMENT_CANCELED);
  }
  if (status === "AC" || status === "CO") {
    router.navigate(ROUTES.PAYMENT_SUCCESS);
  }
};

export default function useFinalStatusRedirection({
  socketStatus,
  fetchStatus,
}: FinalStatusRedirectionHook) {
  useEffect(() => {
    redirectToFinalStatus(fetchStatus);
  }, [fetchStatus]);

  useEffect(() => {
    redirectToFinalStatus(socketStatus);
  }, [socketStatus]);
}
