import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "@/lib/components/Text/Text";
import isWeb from "../utils/isWeb";

const AppInfoTopDisclaimer = () => {
  if (!isWeb) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        App made with React Native Web, Expo, and Typescript
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  text: {
    marginTop: 0,
    fontStyle: "italic",
  },
});

export default AppInfoTopDisclaimer;
