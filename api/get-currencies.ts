import { deviceId } from "@/lib/constants/business";

const fetchCurrencies = async () => {
  if (!deviceId) throw new Error("Device ID not found");

  try {
    const headers = new Headers();
    headers.append("X-Device-Id", deviceId);

    const response = await fetch(
      "https://payments.pre-bnvo.com/api/v1/currencies",
      {
        method: "GET",
        headers: headers,
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching currencies:", error);
    throw error;
  }
};

export default fetchCurrencies;
