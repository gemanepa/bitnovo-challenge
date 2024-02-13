import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import Text from "@/lib/components/Text/Text";
import { TCurrency } from "@/types/business";
import { AntDesign, Feather } from "@expo/vector-icons";

const CurrencyItem: React.FC<{
  currency: TCurrency;
  handleOptionSelect: (currency: TCurrency) => void;
  orderCurrency: TCurrency | null;
}> = ({ currency, handleOptionSelect, orderCurrency }) => {
  return (
    <TouchableOpacity
      onPress={() => handleOptionSelect(currency)}
      style={currencyItemStyles.container}
    >
      <View style={currencyItemStyles.currencyItem}>
        {currency.image && (
          <Image
            source={{ uri: currency.image }}
            style={currencyItemStyles.currencyImage}
          />
        )}
        <View style={currencyItemStyles.currencyInfo}>
          <Text style={currencyItemStyles.currencyName} weight="Bold">
            {currency.name}
          </Text>
          <Text style={currencyItemStyles.currencySymbol} weight="Light">
            {currency.symbol}
          </Text>
        </View>
      </View>
      <View style={currencyItemStyles.iconContainer}>
        {orderCurrency?.name === currency.name ? (
          <View style={currencyItemStyles.checkCircle}>
            <AntDesign name="check" size={10} color="#FFFFFF" />
          </View>
        ) : (
          <Feather name="chevron-right" size={14} color="#647184" />
        )}
      </View>
    </TouchableOpacity>
  );
};

const currencyItemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    flex: 1,
  },
  currencyItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  currencyInfo: {
    flexDirection: "column",
    marginLeft: 8,
  },
  currencySymbol: {
    fontSize: 12,
    color: "#647184",
  },
  currencyName: {
    fontSize: 14,
    lineHeight: 20,
    color: "#002859",
  },
  currencyImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  iconContainer: {
    width: 14,
    height: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  checkCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    paddingTop: 1,
    backgroundColor: "#71B0FD",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CurrencyItem;
