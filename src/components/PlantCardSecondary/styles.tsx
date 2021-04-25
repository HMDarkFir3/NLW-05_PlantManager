//Style
import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  containerPlantCardPrimary: {
    flexDirection: "row",
    alignItems: "center",

    width: "100%",

    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 20,

    backgroundColor: colors.shape,
    borderRadius: 20,
  },
  title: {
    flex: 1,

    marginLeft: 10,

    fontFamily: fonts.heading,
    fontSize: 17,
    color: colors.heading,
  },
  details: {
    alignItems: "flex-end",
  },
  timeLabel: {
    marginTop: 5,

    fontFamily: fonts.text,
    fontSize: 16,
    color: colors.body_light,
  },
  time: {
    marginTop: 5,

    fontFamily: fonts.heading,
    fontSize: 16,
    color: colors.body_dark,
  },
});
