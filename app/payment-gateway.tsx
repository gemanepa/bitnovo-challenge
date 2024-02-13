import { StyleSheet } from "react-native";
import { View } from "@/lib/components/Themed";
import MakePaymentSection from "@/screens/payment-gateway/make-payment";
import OrderSummarySection from "@/screens/payment-gateway/order-summary";
import { OrderProvider } from "@/screens/payment-gateway/context/OrderContext";
import isWeb from "@/lib/utils/isWeb";

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
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: isWeb ? "100%" : "200%",
  },
  container: {
    flexGrow: isWeb ? 0 : 1,
    justifyContent: isWeb ? "center" : "flex-start",
    gap: isWeb ? 32 : 42,
    paddingTop: isWeb ? "0%" : "25%",
    paddingHorizontal: isWeb ? "0%" : "5%",
    flexDirection: isWeb ? "row" : "column",
    width: isWeb ? 1198 : "100%",
  },
});
