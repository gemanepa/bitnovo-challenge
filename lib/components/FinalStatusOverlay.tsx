import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Text from "./Text/Text";
import { router } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import ROUTES from "@/lib/constants/routes";

const FinalStatusOverlay = ({ success }: { success: boolean }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentTop}>
        <View
          style={[
            styles.circle,

            success
              ? { paddingTop: 2, backgroundColor: "#A6DAB7" }
              : { backgroundColor: "#F1A8A8" },
          ]}
        >
          {success ? (
            <FontAwesome5 name="check" size={50} color="#16A34A" />
          ) : (
            <FontAwesome5 name="times" size={50} color="#DC2626" />
          )}
        </View>
        <Text weight="Bold" style={styles.subtitle}>
          {success ? "¡Pago completado!" : "¡Pago cancelado!"}
        </Text>
      </View>
      <View style={styles.contentBody}>
        <Text weight="Light" style={styles.bodyText}>
          Lorem ipsum dolor sit amet consectetur. Laoreet blandit auctor et
          varius dolor elit facilisi enim. Nulla ut ut eu nunc.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate(ROUTES.CREATE_NEW_ORDER)}
      >
        <Text weight="SemiBold" style={styles.buttonText}>
          Crear nuevo pago
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 490,
    height: 420,
    padding: 32,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
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
  contentTop: {
    alignItems: "center",
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  subtitle: {
    width: 426,
    height: 25,
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: "center",
    color: "#002859",
    paddingTop: 12,
  },
  contentBody: {
    alignItems: "center",
  },
  bodyText: {
    width: 360,
    height: 72,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
    color: "#647184",
  },
  button: {
    width: "100%",
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#035AC5",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 20,
  },
});

export default FinalStatusOverlay;
