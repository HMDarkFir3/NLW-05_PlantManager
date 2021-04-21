//React
import React from "react";
import { SafeAreaView, View, Text } from "react-native";

//Component
import Header from "../../components/Header";

//Style
import { styles } from "./styles";

export default function PlantSelect() {
  return (
    <SafeAreaView style={styles.containerPlantSelect}>
      <Header />
    </SafeAreaView>
  );
}
