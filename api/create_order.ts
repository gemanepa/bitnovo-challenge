import { deviceId } from "@/lib/constants/business";

const createOrder = async (
  amount: number,
  currency: string,
  concept: string
): Promise<any> => {
  if (!deviceId) throw new Error("Device ID not found");
  if (!amount || !currency || !concept) throw new Error("Invalid input");

  const formData = new FormData();
  formData.append("expected_output_amount", amount.toString());
  formData.append("input_currency", currency);
  formData.append("notes", concept);

  const headers = {
    "X-Device-Id": deviceId,
  };

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: formData,
  };

  try {
    const response = await fetch(
      "https://payments.pre-bnvo.com/api/v1/orders/",
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Failed to create order: ${error}`);
  }
};

export default createOrder;
