//React
import React from "react";
import { Text, View, Image } from "react-native";

//Style
import { styles } from "./styles";

//Image
import waterdropImg from "../../assets/waterdrop.png";

export default function TipPlant(props: any) {
  const { text } = props;

  return (
    <View style={styles.tipContainer}>
      <Image style={styles.tipImage} source={waterdropImg} />

      <Text style={styles.tipText}>{text}</Text>
    </View>
  );
}
