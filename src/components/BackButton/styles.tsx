//Style
import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  containerBackButton: {
    marginTop: getStatusBarHeight(),
  },
});
