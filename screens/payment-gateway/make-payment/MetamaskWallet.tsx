import React from "react";
import { View, Image, StyleSheet } from "react-native";

const MetamaskWalletSquareImage = () => {
  return (
    <View style={styles.square}>
      <Image
        source={{
          uri: "https://freelogopng.com/images/all_img/1683020772metamask-logo-png.png",
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 193,
    height: 193,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#E5E9F2",
    borderRadius: 12,
  },
  image: {
    width: 137,
    height: 43,
    resizeMode: "contain",
  },
});

export default MetamaskWalletSquareImage;
