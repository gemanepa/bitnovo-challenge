import React from "react";
import { StyleSheet } from "react-native";
import Text from "../Text/Text";

interface InputLabelProps {
  label: string;
}

const InputLabel: React.FC<InputLabelProps> = ({ label }) => {
  return (
    <Text style={styles.label} weight="Bold">
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: 0.01,
    textAlign: "left",
    color: "#002859",
  },
});

export default InputLabel;
