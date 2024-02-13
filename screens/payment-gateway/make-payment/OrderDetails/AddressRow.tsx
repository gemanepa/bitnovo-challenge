import React from "react";
import { TouchableOpacity } from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "@/lib/components/Text/Text";
import { useOrderContext } from "@/screens/payment-gateway/context/OrderContext";
import isWeb from "@/lib/utils/isWeb";

const AmountRow = () => {
  const { order } = useOrderContext();
  const { address } = order;

  const handleCopyPress = () =>
    address && Clipboard.setString(address.toString());

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
        style={{
          fontSize: isWeb ? 14 : 12,
          lineHeight: 20,
          color: "#002859",
          fontStyle: isWeb ? "normal" : "italic",
        }}
      >
        {address}
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
