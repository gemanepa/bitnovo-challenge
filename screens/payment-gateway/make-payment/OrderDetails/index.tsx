import { useState, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { View } from "@/lib/components/Themed";

import AmountRow from "./AmountRow";
import AddressRow from "./AddressRow";
import DestinationTagRow from "./DestinationTagRow";

export default function OrderDetails() {
  return (
    <View style={{ height: 113, gap: 12 }}>
      <AmountRow />
      <AddressRow />
      <DestinationTagRow />
    </View>
  );
}
