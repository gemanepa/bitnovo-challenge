import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Divider from "@/lib/components/Divider";
import SummaryRow from "@/screens/payment-gateway/order-summary/SummaryRow";
import { useOrderContext } from "../context/OrderContext";
import formatDate from "@/lib/utils/formatDate";
import cutToTwoDecimals from "@/lib/utils/cutToTwoDecimals";

const OrderSummaryTexts: React.FC = () => {
  const { order } = useOrderContext();

  const {
    fiat_amount,
    fiat,
    input_currency,
    currency_img,
    notes,
    created_at,
    merchant_device,
  } = order;

  const renderFiatSummary = () => (
    <>
      <SummaryRow
        label="Importe"
        value={`${cutToTwoDecimals(fiat_amount)} ${fiat}`}
      />
      <Divider />
    </>
  );

  const renderCurrencySummary = () => (
    <>
      <SummaryRow
        label="Moneda seleccionada"
        value={input_currency}
        img={<Image source={{ uri: currency_img }} style={styles.icon} />}
      />
      {(merchant_device || created_at || notes) && <Divider />}
    </>
  );

  const renderMerchantAndDateSummary = () => (
    <>
      <View style={styles.merchantAndDateContainer}>
        {merchant_device && (
          <SummaryRow
            label="Comercio"
            value={merchant_device}
            img={
              <Image
                source={require("../../../assets/icons/check-lightblue-star.png")}
                style={styles.icon}
              />
            }
          />
        )}
        {created_at && (
          <SummaryRow label="Fecha" value={formatDate(created_at)} />
        )}
      </View>
      {notes && <Divider />}
    </>
  );

  return (
    <>
      {fiat_amount && fiat && renderFiatSummary()}
      {input_currency && renderCurrencySummary()}
      {(merchant_device || created_at) && renderMerchantAndDateSummary()}
      {notes && <SummaryRow label="Concepto" value={notes} />}
    </>
  );
};

const styles = StyleSheet.create({
  merchantAndDateContainer: {
    width: "100%",
    gap: 16,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
});

export default OrderSummaryTexts;
