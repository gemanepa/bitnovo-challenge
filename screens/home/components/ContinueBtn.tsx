import React from "react";
import { TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import { useCreateOrderFormContext } from "@/screens/home/context/CreateOrderFormContext";
import Text from "../../../lib/components/Text/Text";
import isWeb from "@/lib/utils/isWeb";

const ContinueBtn: React.FC = () => {
  const { isFormValid, submitForm, isLoading } = useCreateOrderFormContext();
  const onPress = () => submitForm();

  const btnContent = isLoading ? (
    <ActivityIndicator color="white" />
  ) : (
    <Text style={styles.text} weight="SemiBold">
      Continuar
    </Text>
  );

  return (
    <TouchableOpacity
      style={[styles.button, !isFormValid ? styles.disabledButton : null]}
      onPress={onPress}
      disabled={!isFormValid || isLoading}
    >
      {btnContent}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: isWeb ? 609 : "100%",
    height: "auto",
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#035AC5", // Default background color
  },
  disabledButton: {
    backgroundColor: "#C6DFFE", // Background color when disabled
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});

export default ContinueBtn;
