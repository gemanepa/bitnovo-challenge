import { StyleSheet } from "react-native";
import { CreateOrderFormProvider } from "@/screens/home/context/CreateOrderFormContext";
import { View } from "@/lib/components/Themed";
import ContentBox from "@/screens/home/components/ContentBox";
import Title from "@/lib/components/Text/Title";
import ContinueBtn from "@/screens/home/components/ContinueBtn";
import CurrenciesInputModalDropdown from "@/screens/home/components/CurrenciesInputModalDropdown";
import AmountInput from "@/screens/home/components/AmountInput";
import ConceptInput from "@/screens/home/components/ConceptInput";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <ContentBox>
        <Title>Crear pago</Title>
        <CreateOrderFormProvider>
          <AmountInput />
          <CurrenciesInputModalDropdown label="Seleccionar moneda" />
          <ConceptInput />
          <ContinueBtn />
        </CreateOrderFormProvider>
      </ContentBox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
