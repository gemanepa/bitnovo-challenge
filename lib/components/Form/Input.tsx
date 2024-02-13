import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import InputLabel from "./InputLabel";
import isWeb from "@/lib/utils/isWeb";

interface InputProps {
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <InputLabel label={label} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#647184"
        onChangeText={onChangeText}
        keyboardType={type === "number" ? "number-pad" : "default"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 6,
    width: isWeb ? 609 : "100%",
  },
  input: {
    fontFamily: "Mulish-Light",
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
  },
});

export default Input;
