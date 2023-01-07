import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MainStack = createNativeStackNavigator();

function MainStackNavigator() {
    return (
        <MainStack.Navigator initialRouteName="Login">
            {/* <MainStack.Screen name="Profile" component={Home} />
            <MainStack.Screen name="Settings" component={ExchangePlace} /> */}
        </MainStack.Navigator>
    );
}

export default MainStackNavigator;
