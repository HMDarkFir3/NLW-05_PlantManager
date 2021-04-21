//Style
import { StyleSheet, Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

const margin = 38;

export const styles = StyleSheet.create({
  containerWelcome: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleIos: {
    marginTop: margin,

    textAlign: "center",
    fontFamily: fonts.heading,
    fontSize: 32,
    color: colors.heading,
    lineHeight: 38,
  },
  titleAndroid: {
    marginTop: getStatusBarHeight() + margin,

    textAlign: "center",
    fontFamily: fonts.heading,
    fontSize: 32,
    color: colors.heading,
    lineHeight: 38,
  },
  subtitle: {
    paddingHorizontal: 20,

    textAlign: "center",
    fontFamily: fonts.text,
    fontSize: 18,
    color: colors.gray_dark,
    lineHeight: 25,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  button: {
    marginBottom: margin,
  },
});
