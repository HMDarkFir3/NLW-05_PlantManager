//Style
import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  containerPlantSelect: {
    flex: 1,

    backgroundColor: colors.background,
  },
  content: {
    marginHorizontal: 30,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 17,
    color: colors.heading,
    lineHeight: 26,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    color: colors.heading,
    lineHeight: 26,
  },
  enviromentList: {
    flexDirection: "row",

    marginVertical: 30,
    marginHorizontal: 30 - 3,
  },
  plantCardPrimaryList: {
    flex: 1,

    marginHorizontal: 30 - 10,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
