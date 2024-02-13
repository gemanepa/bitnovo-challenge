import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "@/lib/components/Text/Text";
import { useOrderContext } from "@/screens/payment-gateway/context/OrderContext";

const AmountRow = () => {
  const { order } = useOrderContext();
  const { tag_memo } = order;

  const handleCopyPress = () => tag_memo && console.log(tag_memo);

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
      <Image
        source={require("../../../../assets/icons/warning-sign-sixends.png")}
        style={{ width: 18, height: 20, marginRight: 2 }}
      />
      <Text
        weight="Medium"
        style={{ fontSize: 12, lineHeight: 20, color: "#002859" }}
      >
        Etiqueta de destino:
      </Text>
      <Text
        weight="Medium"
        style={{ fontSize: 12, lineHeight: 20, color: "#002859" }}
      >
        {tag_memo || "N/A"}
      </Text>

      {tag_memo && (
        <MaterialCommunityIcons
          name="content-copy"
          size={14}
          color="#0465DD"
          style={{ paddingTop: 1, paddingLeft: 2 }}
        />
      )}
    </TouchableOpacity>
  );
};

export default AmountRow;
