//Style
import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  containerPlantSave: {
    flex: 1,
    justifyContent: "space-between",

    backgroundColor: colors.shape,
  },
  backButton: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  plantInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 30,
    paddingVertical: 50,

    backgroundColor: colors.shape,
  },
  plantName: {
    marginVertical: 15,

    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    lineHeight: 32,
  },
  plantAbout: {
    marginBottom: 5,

    textAlign: "center",
    fontFamily: fonts.text,
    fontSize: 17,
    color: colors.heading,
    lineHeight: 25,
  },
  controller: {
    paddingBottom: getBottomSpace() || 20,
    paddingHorizontal: 20,

    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  alertLabel: {
    marginTop: 20,

    textAlign: "center",
    fontFamily: fonts.complement,
    fontSize: 13,
    color: colors.heading,
    lineHeight: 23,
  },
  dataTimePickerText: {
    fontFamily: fonts.text,
    fontSize: 24,
    color: colors.heading,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
});
