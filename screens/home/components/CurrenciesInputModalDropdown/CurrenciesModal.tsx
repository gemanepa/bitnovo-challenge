import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import Text from "@/lib/components/Text/Text";
import { useCreateOrderFormContext } from "@/screens/home/context/CreateOrderFormContext";
import { TCurrency } from "@/types/business";
import { AntDesign } from "@expo/vector-icons";
import CurrencyItem from "./CurrencyItem";
import isWeb from "@/lib/utils/isWeb";

const CurrenciesModal: React.FC<{
  isModalOpen: boolean;
  currencies: TCurrency[];
  orderCurrency: TCurrency | null;
  toggleModal: () => void;
}> = ({ isModalOpen, currencies, orderCurrency, toggleModal }) => {
  const { setCurrency: setOrderCurrency } = useCreateOrderFormContext();
  const [searchQuery, setSearchQuery] = useState<string>("");

  if (!currencies.length) {
    if (searchQuery.length > 0) setSearchQuery("");
    return null;
  }

  const filteredCurrencies = currencies.filter((currency) =>
    currency.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOptionSelect = (currency: TCurrency) => {
    setOrderCurrency(currency);
    toggleModal();
  };

  return (
    <Modal
      visible={isModalOpen}
      transparent={true}
      onRequestClose={toggleModal}
    >
      <View style={currenciesModalStyles.centeredView}>
        <View style={currenciesModalStyles.modalContainer}>
          <View style={currenciesModalStyles.modalHeader}>
            <Text
              style={currenciesModalStyles.modalHeaderTitle}
              weight="ExtraBold"
            >
              Seleccionar criptomoneda
            </Text>
            <TouchableOpacity onPress={toggleModal}>
              <AntDesign name="close" size={22} color="#647184" />
            </TouchableOpacity>
          </View>
          <View style={currenciesModalStyles.searchContainer}>
            <AntDesign name="search1" size={22} color="#647184" />
            <TextInput
              style={currenciesModalStyles.searchInput}
              placeholder="Buscar"
              onChangeText={setSearchQuery}
              value={searchQuery}
            />
          </View>
          {filteredCurrencies.map((currency, index) => (
            <CurrencyItem
              key={index}
              currency={currency}
              handleOptionSelect={handleOptionSelect}
              orderCurrency={orderCurrency}
            />
          ))}
        </View>
      </View>
    </Modal>
  );
};

const currenciesModalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: isWeb ? 673 : "90%",
    height: 588,
    padding: 24,
    borderRadius: 12,
    gap: 12,
    backgroundColor: "#FFFFFF",
    shadowColor: "#60617029",
    shadowOffset: {
      width: 0,
      height: 4.275000095367432,
    },
    shadowOpacity: 1,
    shadowRadius: 8.550000190734863,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  modalHeaderTitle: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.01,
    textAlign: "left",
    color: "#002859",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    marginBottom: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#E5E9F2",
    gap: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    fontFamily: "Mulish-Light",
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0.01,
    textAlign: "left",
    color: "#647184",
  },
});

export default CurrenciesModal;
