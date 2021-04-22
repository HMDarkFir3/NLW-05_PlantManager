//React
import React from "react";
import { View } from "react-native";

//Lottie
import LottieView from "lottie-react-native";

//Style
import { styles } from "./styles";

//Animation
import loadingAnimation from "../../assets/load.json";

export default function Loading() {
  return (
    <View style={styles.containerLoading}>
      <LottieView
        style={styles.loadingAnimation}
        source={loadingAnimation}
        autoPlay={true}
        loop={true}
      />
    </View>
  );
}
