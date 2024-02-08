import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

interface ContentBoxProps {
  children: ReactNode;
}

const ContentBox: React.FC<ContentBoxProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F9FAFC",
    borderRadius: 16,
    flex: 1,
    minHeight: 370,
    height: 370,
    width: 583,
    padding: 32,
    gap: 31,
    display: "flex",
    flexDirection: "column",
  },
});

export default ContentBox;
