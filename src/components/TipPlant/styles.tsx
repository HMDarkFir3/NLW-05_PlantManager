//Style
import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  tipContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    padding: 20,

    backgroundColor: colors.blue_light,
    borderRadius: 20,
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,

    marginLeft: 20,

    textAlign: "justify",
    fontFamily: fonts.text,
    fontSize: 15,
    color: colors.blue,
    lineHeight: 23,
  },
});
