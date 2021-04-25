//React
import React from "react";
import { Text, View, TouchableOpacity, Animated } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { SvgFromUri } from "react-native-svg";

//Style
import { styles } from "./styles";

//Icon
import { Feather } from "@expo/vector-icons";
import colors from "../../styles/colors";

//Interface
interface PlantCardSecondaryProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}

export default function PlantCardSecondary(props: PlantCardSecondaryProps) {
  const { ...rest } = props;
  const { handleRemove } = props;
  const { name, photo, hour } = props.data;

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <TouchableOpacity
              style={styles.buttonRemove}
              onPress={handleRemove}
            >
              <Feather name="trash" size={32} color={colors.white} />
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
    >
      <RectButton style={styles.containerPlantCardPrimary} {...rest}>
        <SvgFromUri uri={photo} height={50} width={50} />
        <Text style={styles.title}>{name}</Text>

        <View style={styles.details}>
          <Text style={styles.timeLabel}>Regar às</Text>
          <Text style={styles.time}>{hour}</Text>
        </View>
      </RectButton>
    </Swipeable>
  );
}
