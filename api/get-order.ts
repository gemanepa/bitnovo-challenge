import { deviceId } from "@/lib/constants/business";

const fetchOrder = async (identifier: string) => {
  if (!deviceId) throw new Error("Device ID not found");
  if (!identifier) throw new Error("Invalid input");

  try {
    const headers = new Headers();
    headers.append("X-Device-Id", deviceId);

    const response = await fetch(
      `https://payments.pre-bnvo.com/api/v1/orders/info/${identifier}`,
      {
        method: "GET",
        headers: headers,
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching order info:", error);
    throw error;
  }
};

export default fetchOrder;
