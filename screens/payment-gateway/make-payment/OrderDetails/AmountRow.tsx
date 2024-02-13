import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "@/lib/components/Text/Text";
import { useOrderContext } from "@/screens/payment-gateway/context/OrderContext";

const AmountRow = () => {
  const { order } = useOrderContext();
  const { crypto_amount, input_currency } = order;

  const handleCopyPress = () => crypto_amount && console.log(crypto_amount);

  return (
    <TouchableOpacity
      onPress={handleCopyPress}
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Text
        weight="Medium"
        style={{ fontSize: 14, lineHeight: 20, color: "#002859" }}
      >
        Enviar
      </Text>

      <Text
        weight="Bold"
        style={{ fontSize: 16, lineHeight: 20, color: "#002859" }}
      >
        {crypto_amount} {input_currency}
      </Text>

      <MaterialCommunityIcons
        name="content-copy"
        size={16}
        color="#0465DD"
        style={{ paddingTop: 2, paddingLeft: 2 }}
      />
    </TouchableOpacity>
  );
};

export default AmountRow;
