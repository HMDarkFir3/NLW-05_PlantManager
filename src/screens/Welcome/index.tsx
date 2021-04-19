//React
import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, Platform } from "react-native";

//Component
import Button from "../../components/Button";

//Style
import { styles } from "./styles";

//Icon
import { Feather } from "@expo/vector-icons";

//Image
import wateringImg from "../../assets/watering.png";

export default function Welcome() {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.containerWelcome}>
      <Text
        style={[Platform.OS === "ios" ? styles.titleIos : styles.titleAndroid]}
      >
        Gerencie {"\n"}
        suas plantas de {"\n"} forma fácil
      </Text>
      {visible && <Image style={styles.image} source={wateringImg} />}

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <View style={styles.button}>
        <Button
          height={56}
          width={56}
          text={<Feather name="chevron-right" size={30} color="#ffffff" />}
        />
      </View>
    </SafeAreaView>
  );
}
