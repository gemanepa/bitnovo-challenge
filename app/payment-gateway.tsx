import { StyleSheet } from "react-native";
import { View } from "@/lib/components/Themed";
import MakePaymentSection from "@/screens/payment-gateway/make-payment";
import OrderSummarySection from "@/screens/payment-gateway/order-summary";

import { OrderProvider } from "@/screens/payment-gateway/context/OrderContext";

export default function PaymentGatewayPage() {
  return (
    <OrderProvider>
      <View style={styles.flex}>
        <View style={styles.container}>
          <OrderSummarySection />
          <MakePaymentSection />
        </View>
      </View>
    </OrderProvider>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 32,
    flexDirection: "row",
    width: 1198,
    maxHeight: 579,
  },
});
