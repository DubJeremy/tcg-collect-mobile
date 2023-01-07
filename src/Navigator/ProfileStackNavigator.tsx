import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/profile/ProfileScreen";
import Settings from "../screens/profile/SettingsScreen";

const MainStack = createNativeStackNavigator();

function MainStackNavigator() {
    return (
        <MainStack.Navigator initialRouteName="Profile">
            <MainStack.Screen name="Profile" component={Profile} />
            <MainStack.Screen name="Settings" component={Settings} />
        </MainStack.Navigator>
    );
}

export default MainStackNavigator;
