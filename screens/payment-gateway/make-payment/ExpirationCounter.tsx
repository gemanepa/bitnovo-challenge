import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { useOrderContext } from "@/screens/payment-gateway/context/OrderContext";
import ROUTES from "@/lib/constants/routes";

const PaymentCountdown: React.FC = () => {
  const { order } = useOrderContext();
  const { expired_time: expiryDate } = order;
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!expiryDate) return;
    const timer = setInterval(() => {
      const calculatedTimeLeft = calculateTimeLeft();
      setTimeLeft(calculatedTimeLeft);

      if (
        calculatedTimeLeft.days === 0 &&
        calculatedTimeLeft.hours === 0 &&
        calculatedTimeLeft.minutes === 0 &&
        calculatedTimeLeft.seconds === 0
      ) {
        clearInterval(timer);
        router.navigate(ROUTES.PAYMENT_CANCELED);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [expiryDate]);

  function calculateTimeLeft() {
    const difference = new Date(expiryDate).getTime() - new Date().getTime();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const displayHours = timeLeft.hours !== 0;
  const formattedTime = `${
    displayHours ? timeLeft.hours.toString().padStart(2, "0") + ":" : ""
  }${timeLeft.minutes.toString().padStart(2, "0")}:${timeLeft.seconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <FontAwesome name="clock-o" size={24} />
      {expiryDate && <Text style={{ marginLeft: 5 }}>{formattedTime}</Text>}
    </View>
  );
};

export default PaymentCountdown;
