//Style
import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  containerEnviromentButton: {
    alignItems: "center",
    justifyContent: "center",

    height: 40,
    width: 76,

    backgroundColor: colors.shape,
    borderRadius: 12,

    marginHorizontal: 3,
  },
  containerEnviromentButtonActive: {
    backgroundColor: colors.green_light,
  },
  text: {
    fontFamily: fonts.complement,
    fontSize: 13,
    color: colors.heading,
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
});
