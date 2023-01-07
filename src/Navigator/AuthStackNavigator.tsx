import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/auth/login";
import Register from "../screens/auth/register";

const AuthStack = createNativeStackNavigator();

function AuthStackNavigator() {
    return (
        <AuthStack.Navigator initialRouteName="Login">
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Register" component={Register} />
        </AuthStack.Navigator>
    );
}

export default AuthStackNavigator;
