import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import Text from "./Text";

interface TitleProps {
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <Text style={styles.text} weight="Bold">
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    width: 161,
    height: 38,
    fontSize: 26,
    fontWeight: "700",
    lineHeight: 38,
    letterSpacing: 0,
    textAlign: "center",
    color: "#002859",
  },
});

export default Title;
