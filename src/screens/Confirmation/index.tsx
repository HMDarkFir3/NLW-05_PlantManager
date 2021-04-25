//React
import React from "react";
import { SafeAreaView, View, Text } from "react-native";

//React Navigation
import { useNavigation, useRoute } from "@react-navigation/native";

//Component
import Button from "../../components/Button";

//Style
import { styles } from "./styles";

//Interface
interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: "smile" | "hug";
  nextScreen: string;
}

const emoticon = {
  smile: "😄",
  hug: "🤗",
};

export default function Confirmation() {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen,
  } = route.params as Params;

  function handleStart() {
    navigation.navigate(nextScreen);
  }

  return (
    <SafeAreaView style={styles.containerConfirmation}>
      <View style={styles.content}>
        <Text style={styles.emoticon}>{emoticon[icon]}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        <Button
          height={56}
          width={231}
          text={buttonTitle}
          onPress={handleStart}
        />
      </View>
    </SafeAreaView>
  );
}
