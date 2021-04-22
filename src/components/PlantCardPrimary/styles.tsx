//Style
import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  containerPlantCardPrimary: {
    flex: 1,
    alignItems: "center",

    maxWidth: "45%",

    marginHorizontal: 10,
    marginBottom: 20,
    paddingVertical: 10,

    backgroundColor: colors.shape,
    borderRadius: 20,
  },
  text: {
    marginVertical: 16,

    fontFamily: fonts.heading,
    color: colors.gray_dark,
  },
});
