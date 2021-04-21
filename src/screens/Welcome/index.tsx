//React
import React from "react";
import { SafeAreaView, View, Text, Image, Platform } from "react-native";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Component
import Button from "../../components/Button";

//Style
import { styles } from "./styles";

//Icon
import { Feather } from "@expo/vector-icons";

//Image
import wateringImg from "../../assets/watering.png";

export default function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("UserIdentification");
  }

  return (
    <SafeAreaView style={styles.containerWelcome}>
      <View style={styles.content}>
        <Text
          style={[
            Platform.OS === "ios" ? styles.titleIos : styles.titleAndroid,
          ]}
        >
          Gerencie{"\n"}
          suas plantas de{"\n"}
          forma fácil
        </Text>
        <Image style={styles.image} source={wateringImg} resizeMode="contain" />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas{"\n"}
          plantas. Nós cuidamos de lembrar você{"\n"}
          sempre que precisar.
        </Text>

        <View style={styles.button}>
          <Button
            height={56}
            width={56}
            text=""
            icon={<Feather name="chevron-right" size={32} color="#ffffff" />}
            disabled={false}
            onPress={handleStart}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
