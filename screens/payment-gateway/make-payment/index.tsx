import { useState, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { View } from "@/lib/components/Themed";
import MakePaymentContentBox from "@/screens/payment-gateway/make-payment/ContentBox";
import Text from "@/lib/components/Text/Text";
import { useOrderContext } from "@/screens/payment-gateway/context/OrderContext";
import ButtonSwitcher from "./ButtonSwitcher";
import PaymentCountdown from "@/screens/payment-gateway/make-payment/ExpirationCounter";
import QRPaymentCode from "@/screens/payment-gateway/make-payment/QRPaymentCode";
import MetamaskSquare from "./MetamaskWallet";
import OrderDetails from "./OrderDetails";
import isWeb from "@/lib/utils/isWeb";

export default function MakePaymentSection() {
  const [activeButton, setActiveButton] = useState("SmartQR");

  useEffect(() => {
    Image.prefetch(
      "https://freelogopng.com/images/all_img/1683020772metamask-logo-png.png"
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text weight="Bold" style={styles.sectionDescription}>
        Realiza el pago
      </Text>
      <MakePaymentContentBox>
        <PaymentCountdown />
        <ButtonSwitcher
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        {activeButton === "SmartQR" ? <QRPaymentCode /> : <MetamaskSquare />}
        <OrderDetails />
      </MakePaymentContentBox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: isWeb ? 24 : 8,
    maxHeight: isWeb ? 579 : 630,
  },
  sectionDescription: {
    flex: 1,
    fontSize: 20,
    lineHeight: 25,
    color: "#002859",
  },
});
