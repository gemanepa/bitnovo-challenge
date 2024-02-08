import Input from "@/lib/components/Form/Input";
import { useCreateOrderFormContext } from "@/screens/home/context/CreateOrderFormContext";

function ConceptInput() {
  const { setConcept } = useCreateOrderFormContext();
  return (
    <Input
      label="Concepto"
      placeholder="Añade descripción del pago"
      onChangeText={(text) => setConcept(text)}
    />
  );
}

export default ConceptInput;
