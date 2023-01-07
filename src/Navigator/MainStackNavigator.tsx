import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/main/HomeScreen";
import ExchangePlace from "../components/ExchangePlace";

const MainStack = createNativeStackNavigator();

function MainStackNavigator() {
    return (
        <MainStack.Navigator initialRouteName="Login">
            <MainStack.Screen name="Home" component={Home} />
            <MainStack.Screen name="Register" component={ExchangePlace} />
        </MainStack.Navigator>
    );
}

export default MainStackNavigator;
