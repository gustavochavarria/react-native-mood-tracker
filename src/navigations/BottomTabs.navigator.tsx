import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome5 } from "@expo/vector-icons";

import { Home } from "../screens/Home.screen";
import { History } from "../screens/History.screen";

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ color, size }) => {
            if (route.name === "Home") {
              return (
                <FontAwesome5 name="house-user" size={size} color="gray" />
              );
            }

            if (route.name === "History") {
              return <FontAwesome5 name="history" size={size} color="gray" />;
            }
          },
        };
      }}
    >
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="History" component={History} />
    </BottomTabs.Navigator>
  );
};
