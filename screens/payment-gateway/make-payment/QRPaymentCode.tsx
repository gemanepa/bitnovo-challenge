import React from "react";
import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { useOrderContext } from "@/screens/payment-gateway/context/OrderContext";

const QRPaymentCode = () => {
  const { order } = useOrderContext();
  const { payment_uri } = order;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 193,
        minHeight: 193,
        maxHeight: 193,
        height: 193,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#F5F5F5",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.387499809265137,
        elevation: 10,
      }}
    >
      {payment_uri && <QRCode value={payment_uri} size={150} />}
    </View>
  );
};

export default QRPaymentCode;
