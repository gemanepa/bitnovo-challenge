import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import isWeb from "@/lib/utils/isWeb";
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
    maxHeight: 370,
    width: isWeb ? 583 : "100%",
    paddingVertical: 32,
    paddingHorizontal: isWeb ? 32 : 16,
    gap: 31,
    display: "flex",
    flexDirection: "column",
  },
});

export default ContentBox;
