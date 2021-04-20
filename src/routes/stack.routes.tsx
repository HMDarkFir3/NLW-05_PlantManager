//React
import React from "react";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Screen
import Welcome from "../screens/Welcome";
import UserIdentification from "../screens/UserIdentification";
import Confirmation from "../screens/Confirmation";

//Style
import colors from "../styles/colors";

const Stack = createStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="UserIdentification" component={UserIdentification} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
    </Stack.Navigator>
  );
}
