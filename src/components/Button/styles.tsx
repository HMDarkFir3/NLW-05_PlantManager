//Style
import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  containerButton: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.green,
    borderRadius: 20,
  },
  text: {
    fontFamily: fonts.text,
    fontSize: 20,
    color: "#ffffff",
  },
});
