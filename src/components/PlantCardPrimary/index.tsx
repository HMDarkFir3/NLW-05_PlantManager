//React
import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { SvgFromUri } from "react-native-svg";

//Style
import { styles } from "./styles";

//Interface
interface PlantCardPrimaryProps extends TouchableOpacityProps {
  data: {
    name: string;
    photo: string;
  };
}

export default function PlantCardPrimary(props: PlantCardPrimaryProps) {
  const { name, photo, ...rest } = props.data;

  return (
    <TouchableOpacity
      style={styles.containerPlantCardPrimary}
      activeOpacity={0.7}
      {...rest}
    >
      <SvgFromUri uri={photo} height={70} width={70} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}
