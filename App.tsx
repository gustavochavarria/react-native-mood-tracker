import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { BottomTabsNavigator } from "./src/navigations/BottomTabs.navigator";

import { AppProvider } from "./src/App.provider";

export default function App<React, FC>() {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
