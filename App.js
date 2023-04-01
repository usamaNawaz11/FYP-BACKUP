import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./stack_screens/Home";
import SplashScreen from "./stack_screens/SplashScreen";
import SignUp from "./stack_screens/SignUp";
import Weather from "./stack_screens/Weather";
import Signin from "./stack_screens/SignIn";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash Screen"
        screenOptions={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "black",
            fontSize: 24,
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Splash Screen"
          component={SplashScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Sign In"
          component={Signin}
          options={{ headerBackVisible: false, headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Sign up"
          options={{headerShown: false,headerBackVisible:true }}
          component={SignUp}
        ></Stack.Screen>
        <Stack.Screen name="Weather" component={Weather}></Stack.Screen>
        <Stack.Screen
          options={{ headerBackVisible: false, headerShown: false }}
          name="Welcome to Home"
          component={Home}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
