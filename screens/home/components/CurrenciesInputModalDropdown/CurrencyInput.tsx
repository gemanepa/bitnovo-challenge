import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import Text from "@/lib/components/Text/Text";
import { TCurrency } from "@/types/business";
import { Feather } from "@expo/vector-icons";
import isWeb from "@/lib/utils/isWeb";

const CurrencyInput: React.FC<{
  label: string;
  currencies: TCurrency[];
  orderCurrency: TCurrency | null;
  toggleModal: () => void;
}> = ({ label, orderCurrency, currencies, toggleModal }) => {
  return (
    <View
      style={[
        currencyInputStyles.visibleContent,
        !currencies.length ? currencyInputStyles.noCurrenciesContent : null,
      ]}
    >
      <Text style={currencyInputStyles.label} weight="Bold">
        {label}
      </Text>
      <TouchableOpacity
        onPress={() => currencies.length && toggleModal()}
        style={currencyInputStyles.inputContainer}
        disabled={!currencies.length}
      >
        {orderCurrency ? (
          <>
            <View style={currencyInputStyles.selectedCurrencyContainer}>
              {orderCurrency.image && (
                <Image
                  source={{ uri: orderCurrency.image }}
                  style={currencyInputStyles.currencyImage}
                />
              )}
              <Text style={currencyInputStyles.currencyName} weight="Light">
                {orderCurrency.name}
              </Text>
              <Text style={currencyInputStyles.currencySymbol} weight="Light">
                {orderCurrency.symbol}
              </Text>
            </View>

            <View style={currencyInputStyles.chevronContainer}>
              <Feather name="chevron-down" size={20} color="#647184" />
            </View>
          </>
        ) : (
          <View style={currencyInputStyles.chevronContainer}>
            <Feather name="chevron-down" size={20} color="#647184" />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const currencyInputStyles = StyleSheet.create({
  visibleContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 6,
  },
  noCurrenciesContent: {
    opacity: 0.5,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: 0.01,
    textAlign: "left",
    color: "#002859",
  },
  inputContainer: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0.01,
    textAlign: "left",
    color: "#002859",
    width: isWeb ? 609 : "100%",
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#E5E9F2",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  selectedCurrencyContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "90%",
    overflow: "hidden",
    gap: 8,
  },
  chevronContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  currencyImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  currencyName: {
    fontSize: 14,
    fontWeight: "400",
    color: "#002859",
  },
  currencySymbol: {
    fontSize: 14,
    color: "#002859",
  },
});

export default CurrencyInput;
