import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/ProfileScreen";
import Settings from "../screens/SettingsScreen";

const ProfileStack = createNativeStackNavigator();

function ProfileStackNavigator() {
    return (
        <ProfileStack.Navigator
            initialRouteName="Profile"
            screenOptions={{ headerShown: false }}
        >
            <ProfileStack.Screen name="Profile" component={Profile} />
            <ProfileStack.Screen name="Settings" component={Settings} />
        </ProfileStack.Navigator>
    );
}

export default ProfileStackNavigator;
