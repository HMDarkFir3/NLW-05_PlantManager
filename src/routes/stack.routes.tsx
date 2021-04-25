//React
import React from "react";

//React Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Screen
import Welcome from "../screens/Welcome";
import UserIdentification from "../screens/UserIdentification";
import Confirmation from "../screens/Confirmation";
import PlantSave from "../screens/PlantSave";

//Route
import AuthRoutes from "./tab.routes";

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
      <Stack.Screen name="PlantSelect" component={AuthRoutes} />
      <Stack.Screen name="PlantSave" component={PlantSave} />
      <Stack.Screen name="MyPlant" component={AuthRoutes} />
    </Stack.Navigator>
  );
}
