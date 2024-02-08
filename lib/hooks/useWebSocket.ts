import { useEffect, useRef, useState } from "react";

const useWebSocket = (url: string) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!url) return;
    wsRef.current = new WebSocket(url);

    wsRef.current.onopen = () => {
      setIsConnected(true);
    };

    wsRef.current.onmessage = (event) => {
      setMessage(event.data);
    };

    wsRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    wsRef.current.onclose = () => {
      setIsConnected(false);
    };

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [url]);

  const sendMessage = (message: string) => {
    if (isConnected && wsRef.current) {
      wsRef.current.send(message);
    } else {
      console.error("WebSocket is not connected.");
    }
  };

  return { isConnected, message, sendMessage };
};

export default useWebSocket;
