import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/main/HomeScreen";
import ExchangePlace from "../screens/main/ExchangePlaceScreen";

const MainStack = createNativeStackNavigator();

function MainStackNavigator() {
    return (
        <MainStack.Navigator initialRouteName="Home">
            <MainStack.Screen name="Home" component={Home} />
            <MainStack.Screen name="Register" component={ExchangePlace} />
        </MainStack.Navigator>
    );
}

export default MainStackNavigator;
