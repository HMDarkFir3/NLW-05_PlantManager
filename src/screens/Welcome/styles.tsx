//Style
import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const margin = 38;

export const styles = StyleSheet.create({
  containerWelcome: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleIos: {
    marginTop: margin,

    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: colors.heading,
  },
  titleAndroid: {
    marginTop: 25 + margin,

    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: colors.heading,
  },
  subtitle: {
    paddingHorizontal: 20,

    textAlign: "center",
    fontSize: 18,
    color: colors.gray_dark,
  },
  image: {
    height: 284,
    width: 292,
  },
  button: {
    marginBottom: margin,
  },
});
