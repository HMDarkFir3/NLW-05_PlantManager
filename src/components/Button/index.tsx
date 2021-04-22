//React
import React from "react";
import { Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

//Style
import { styles } from "./styles";

//Interface
interface ButtonProps extends RectButtonProps {
  height: number;
  width: number;
  text: string;
  icon?: any;
}

export default function Welcome(props: ButtonProps) {
  const { height, width, text, icon, ...rest } = props;

  return (
    <RectButton
      style={[styles.containerButton, { height: height, width: width }]}
      activeOpacity={0.7}
      {...rest}
    >
      {text === "" ? (
        <Text>{icon}</Text>
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </RectButton>
  );
}
