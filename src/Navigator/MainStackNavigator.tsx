import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/main/HomeScreen";
import ExtensionsScreen from "../screens/main/ExtensionsScreen";
import CardsTCGScreen from "../screens/main/CardsTCGScreen";

const MainStack = createNativeStackNavigator();

function MainStackNavigator() {
    return (
        <MainStack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <MainStack.Screen
                name="Home"
                component={Home}
                options={{ title: "TCG Collect" }}
            />

            <MainStack.Screen name="Extensions" component={ExtensionsScreen} />
            <MainStack.Screen name="CardsTCG" component={CardsTCGScreen} />
        </MainStack.Navigator>
    );
}

export default MainStackNavigator;
