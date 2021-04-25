//React
import React from "react";

//Expo
import { MaterialIcons } from "@expo/vector-icons";

//React Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screen
import PlantSelect from "../screens/PlantSelect";
import MyPlant from "../screens/MyPlant";

//Style
import colors from "../styles/colors";

const Tab = createBottomTabNavigator();

export default function AuthRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: "beside-icon",
        style: {
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="PlantSelect"
        component={PlantSelect}
        options={{
          title: "Nova Planta",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="MyPlant"
        component={MyPlant}
        options={{
          title: "Minhas plantas",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
