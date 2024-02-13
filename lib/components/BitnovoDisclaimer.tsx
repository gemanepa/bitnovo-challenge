import React from "react";
import { View, Image, StyleSheet } from "react-native";
import isWeb from "@/lib/utils/isWeb";

const BitnovoDisclaimer = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/bitnovo-disclaimer.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  image: {
    marginBottom: isWeb ? 16 : 24,
    width: 350,
    resizeMode: "contain",
  },
});

export default BitnovoDisclaimer;
