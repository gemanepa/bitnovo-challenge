import React from "react";
import { Text, TextProps } from "react-native";

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  weight?: "Regular" | "Bold" | "Light" | "Medium" | "SemiBold" | "ExtraBold";
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  weight,
  ...rest
}) => {
  const defaultStyle = {
    fontFamily: `Mulish-${weight || "Regular"}`,
  };

  return (
    <Text style={[defaultStyle, style]} {...rest}>
      {children}
    </Text>
  );
};

export default CustomText;
