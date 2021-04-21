//React
import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

//Style
import { styles } from "./styles";

//Interface
interface ButtonProps extends TouchableOpacityProps {
  height: number;
  width: number;
  text: string;
  icon: any;
}

export default function Welcome(props: ButtonProps) {
  const { height, width, text, icon, ...rest } = props;

  return (
    <TouchableOpacity
      style={[styles.containerButton, { height: height, width: width }]}
      activeOpacity={0.7}
      {...rest}
    >
      {text === "" ? (
        <Text>{icon}</Text>
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}
