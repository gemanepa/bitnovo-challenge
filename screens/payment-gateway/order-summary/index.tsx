import { StyleSheet } from "react-native";
import { View } from "@/lib/components/Themed";
import OrderSummaryContentBox from "@/screens/payment-gateway/order-summary/ContentBox";
import Text from "@/lib/components/Text/Text";
import OrderSummaryTexts from "@/screens/payment-gateway/order-summary/OrderSummaryTexts";
import isWeb from "@/lib/utils/isWeb";

export default function OrderSummarySection() {
  return (
    <View style={styles.container}>
      <Text weight="Bold" style={styles.sectionDescription}>
        Resumen del pedido
      </Text>
      <OrderSummaryContentBox>
        <OrderSummaryTexts />
      </OrderSummaryContentBox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 24,
    maxHeight: 418,
    width: "100%",
  },
  sectionDescription: {
    fontSize: 20,
    lineHeight: 25,
    color: "#002859",
  },
});
