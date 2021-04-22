//Style
import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    width: "100%",

    marginTop: getStatusBarHeight(),
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  greeting: {
    fontFamily: fonts.text,
    fontSize: 32,
    color: colors.heading,
  },
  userName: {
    fontFamily: fonts.heading,
    fontSize: 32,
    color: colors.heading,
    lineHeight: 36,
  },
  image: {
    height: 56,
    width: 56,

    borderRadius: 28,
  },
});
