import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Text from "@/lib/components/Text/Text";
import isWeb from "@/lib/utils/isWeb";

type ButtonSwitcherProps = {
  activeButton: string;
  setActiveButton: (buttonName: string) => void;
};

const ButtonSwitcher = ({
  activeButton,
  setActiveButton,
}: ButtonSwitcherProps) => {
  const handleButtonPress = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          activeButton === "SmartQR" && styles.activeButton,
        ]}
        onPress={() => handleButtonPress("SmartQR")}
      >
        <Text
          weight="Light"
          style={[
            styles.buttonText,
            activeButton === "SmartQR" && styles.activeButtonText,
          ]}
        >
          SmartQR
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, activeButton === "Web3" && styles.activeButton]}
        onPress={() => handleButtonPress("Web3")}
      >
        <Text
          weight="Light"
          style={[
            styles.buttonText,
            activeButton === "Web3" && styles.activeButtonText,
          ]}
        >
          Web3
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 38,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    gap: 16,
  },
  button: {
    height: isWeb ? 32 : 38,
    width: 98,
    paddingHorizontal: 6,
    paddingVertical: 10,
    borderRadius: 100,
    backgroundColor: "#F9FAFC",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 20,
  },
  activeButton: {
    backgroundColor: "#035AC5",
  },
  activeButtonText: {
    color: "white",
  },
});

export default ButtonSwitcher;
