import React, { ReactNode } from "react";
import { View, StyleSheet, ImageProps } from "react-native";
import Text from "@/lib/components/Text/Text";

interface RowProps {
  label: string;
  value: string;
  img?: ReactNode;
}

const SummaryRow: React.FC<RowProps> = ({ label, value, img }) => {
  return (
    <View style={styles.textFieldRow}>
      <Text weight="Bold" style={styles.standardTextField}>
        {label}:
      </Text>
      <View style={styles.rowContainer}>
        {img && img}
        <Text weight="SemiBold" style={styles.standardTextField}>
          {value}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFieldRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  standardTextField: {
    fontSize: 16,
    color: "#002859",
  },
});

export default SummaryRow;
