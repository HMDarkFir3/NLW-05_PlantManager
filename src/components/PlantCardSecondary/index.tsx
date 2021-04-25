//React
import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { SvgFromUri } from "react-native-svg";

//Style
import { styles } from "./styles";

//Interface
interface PlantCardPrimaryProps extends TouchableOpacityProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
}

export default function PlantCardSecondary(props: PlantCardPrimaryProps) {
  const { ...rest } = props;
  const { name, photo, hour } = props.data;

  return (
    <TouchableOpacity style={styles.containerPlantCardPrimary} {...rest}>
      <SvgFromUri uri={photo} height={50} width={50} />
      <Text style={styles.title}>{name}</Text>

      <View style={styles.details}>
        <Text style={styles.timeLabel}>Regar às</Text>
        <Text style={styles.time}>{hour}</Text>
      </View>
    </TouchableOpacity>
  );
}
