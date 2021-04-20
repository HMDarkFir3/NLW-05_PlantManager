//Style
import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  containerUserIdentification: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
  },
  content: {
    flex: 1,

    width: "100%",
  },
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 54,
  },
  header: {
    alignItems: "center",
  },
  emoticon: {
    fontSize: 44,
  },
  title: {
    marginVertical: 20,

    textAlign: "center",
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    lineHeight: 32,
  },
  input: {
    width: "100%",

    marginBottom: 40,
    paddingHorizontal: 10,
    paddingBottom: 10,

    textAlign: "center",
    fontFamily: fonts.text,
    fontSize: 18,
    color: colors.heading,

    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
});
