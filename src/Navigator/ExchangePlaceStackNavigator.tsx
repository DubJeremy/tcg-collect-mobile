import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ExchangePlaceScreen from "../screens/ExchangePlaceScreen";

const ExchangePlaceStack = createNativeStackNavigator();

function ExchangePlaceStackNavigator() {
    return (
        <ExchangePlaceStack.Navigator
            initialRouteName="ExchangePlace"
            screenOptions={{ headerShown: false }}
        >
            <ExchangePlaceStack.Screen
                name="ExchangePlace"
                component={ExchangePlaceScreen}
            />
        </ExchangePlaceStack.Navigator>
    );
}

export default ExchangePlaceStackNavigator;
