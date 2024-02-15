import React from "react";
import {
  TouchableOpacity,
  Linking,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import { useOrderContext } from "@/screens/payment-gateway/context/OrderContext";

const MetamaskWalletSquareImage = () => {
  const { order } = useOrderContext();
  const { address, crypto_amount, input_currency } = order;

  const deepLinktToMetamask = async () => {
    if (!input_currency.includes("ETH")) {
      Alert.alert(
        "Please select ETH as your input currency to proceed with Metamask payment"
      );
    }
    function ethToWei(eth: number): bigint {
      const weiPerEth = BigInt("1000000000000000000"); // 10^18
      return BigInt(Math.floor(eth * Number(weiPerEth)));
    }
    const wei = ethToWei(crypto_amount);
    const chainId = 5;
    const deepLinkUrl = `https://metamask.app.link/send/${address}@${chainId}?value=${wei}`;
    Linking.openURL(deepLinkUrl).catch((err) =>
      console.error("An error occurred", err)
    );
  };
  return (
    <TouchableOpacity style={styles.square} onPress={deepLinktToMetamask}>
      <Image
        source={{
          uri: "https://freelogopng.com/images/all_img/1683020772metamask-logo-png.png",
        }}
        style={styles.image}
      />
    </TouchableOpacity>
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
