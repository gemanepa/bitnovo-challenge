import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FinalStatusOverlay from "../lib/components/FinalStatusOverlay";

const SuccessPaymentScreen = () => {
  useEffect(() => {
    AsyncStorage.removeItem("order");
  }, []);

  return (
    <View style={styles.container}>
      <FinalStatusOverlay success />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default SuccessPaymentScreen;
