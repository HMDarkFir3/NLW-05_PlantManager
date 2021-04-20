//React
import React from "react";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Route
import AppRoutes from "./stack.routes";

//Style
import colors from "../styles/colors";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="AppRoutes" component={AppRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
