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
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: isWeb ? 673 : "95%",
    maxHeight: 530,
    padding: isWeb ? 32 : 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#F5F5F5",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4.387499809265137,
    elevation: 5,
  },
});

export default ContentBox;
