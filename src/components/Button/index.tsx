//React
import React from "react";
import { Text, TouchableOpacity } from "react-native";

//Style
import { styles } from "./styles";

export default function Welcome(props: any) {
  const { height, width, text } = props;

  return (
    <TouchableOpacity
      style={[styles.containerButton, { height: height, width: width }]}
      activeOpacity={0.7}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
