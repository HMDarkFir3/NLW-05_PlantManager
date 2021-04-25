//React
import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

//Style
import { styles } from "./styles";

//Interface
interface EnviromentButtonProps extends TouchableOpacityProps {
  title: string;
  active?: boolean;
}

export default function EnviromentButton(props: EnviromentButtonProps) {
  const { title, active = false, ...rest } = props;

  return (
    <TouchableOpacity
      style={[
        styles.containerEnviromentButton,
        active && styles.containerEnviromentButtonActive,
      ]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </TouchableOpacity>
  );
}
