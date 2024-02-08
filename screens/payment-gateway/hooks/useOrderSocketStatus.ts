import { useState, useEffect } from "react";
import useWebSocket from "@/lib/hooks/useWebSocket";

export default function useOrderSocketStatus({
  orderIdentifier,
}: {
  orderIdentifier: string;
}) {
  const [websocketUrl, setWebsocketUrl] = useState<string>("");
  const { message } = useWebSocket(websocketUrl);
  const { status: orderSocketStatus } = message
    ? JSON.parse(message)
    : { status: "" };

  useEffect(() => {
    // Set websocket url when storagedOrder is available
    if (orderIdentifier && !websocketUrl) {
      setWebsocketUrl(`wss://payments.pre-bnvo.com/ws/${orderIdentifier}`);
    }
  }, [orderIdentifier]);

  return { orderSocketStatus };
}
