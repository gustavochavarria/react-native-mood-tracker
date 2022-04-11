import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home.screen'
import {History} from '../screens/History.screen'

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {

    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen name="Home" component={Home} />
            <BottomTabs.Screen name="History" component={History} />
        </BottomTabs.Navigator>
    );
}