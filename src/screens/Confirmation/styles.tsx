//Style
import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  containerConfirmation: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 20,
  },
  emoticon: {
    fontSize: 96,
  },
  title: {
    marginTop: 40,

    textAlign: "center",
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    lineHeight: 30,
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 40,

    textAlign: "center",
    fontFamily: fonts.text,
    fontSize: 18,
    color: colors.gray_dark,
    lineHeight: 25,
  },
});
