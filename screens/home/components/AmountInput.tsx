import Input from "@/lib/components/Form/Input";
import { useCreateOrderFormContext } from "@/screens/home/context/CreateOrderFormContext";

function AmountInput() {
  const { setAmount } = useCreateOrderFormContext();
  return (
    <Input
      label="Importe a pagar"
      placeholder="Añade importe a pagar"
      onChangeText={(text) => setAmount(Number(text.replace(",", ".")))}
      type="number"
    />
  );
}

export default AmountInput;
