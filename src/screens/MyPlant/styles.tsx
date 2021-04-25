//Style
import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
  containerMyPlant: {
    flex: 1,

    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  plants: {
    flex: 1,

    width: "100%",
  },
  plantsTitle: {
    marginVertical: 20,

    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
  },
});
