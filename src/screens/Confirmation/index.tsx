//React
import React from "react";
import { SafeAreaView, View, Text } from "react-native";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Component
import Button from "../../components/Button";

//Style
import { styles } from "./styles";

export default function Confirmation() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("PlantSelect");
  }

  return (
    <SafeAreaView style={styles.containerConfirmation}>
      <View style={styles.content}>
        <Text style={styles.emoticon}>😄</Text>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>

        <Button
          height={56}
          width={231}
          text="Começar"
          icon=""
          onPress={handleStart}
        />
      </View>
    </SafeAreaView>
  );
}
