//React
import React from "react";
import { View, TouchableOpacity } from "react-native";

//Style
import { styles } from "./styles";
import colors from "../../styles/colors";

//Icon
import { Feather } from "@expo/vector-icons";

export default function BackButton(props: any) {
  const { ...rest } = props;

  return (
    <View style={styles.containerBackButton}>
      <TouchableOpacity {...rest}>
        <Feather name="chevron-left" size={30} color={colors.heading} />
      </TouchableOpacity>
    </View>
  );
}
