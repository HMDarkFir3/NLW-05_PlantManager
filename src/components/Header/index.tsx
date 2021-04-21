//React
import React from "react";
import { View, Text, Image } from "react-native";

//Style
import { styles } from "./styles";

//Image
import UserImg from "../../assets/henrique.jpg";

export default function Header() {
  return (
    <View style={styles.containerHeader}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Henrique</Text>
      </View>

      <Image style={styles.image} source={UserImg} />
    </View>
  );
}
