
import {NavigationContainer} from '@react-navigation/native'
import {BottomTabsNavigator} from './src/navigations/BottomTabs.navigator';

export default function App<React,FC>() {
  return (
    <NavigationContainer>
    <BottomTabsNavigator />
   </NavigationContainer>
  )
}
