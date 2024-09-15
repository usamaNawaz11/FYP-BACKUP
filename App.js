const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home"
      screenOptions={{
        drawerActiveBackgroundColor: 'yellowgreen',
        drawerLabelStyle: {
          color: 'black', fontSize: responsiveFontSize(2),
          fontWeight: 'bold', padding: responsiveHeight(1)
        },
        drawerStyle: {
          backgroundColor: '#f3fffa', borderTopRightRadius: responsiveHeight(5),
          marginTop: responsiveHeight(6), marginBottom: responsiveHeight(4),
          borderBottomWidth: responsiveHeight(.6), borderBottomRightRadius: responsiveHeight(5)
        },
        drawerItemStyle: { borderRadius: responsiveHeight(10) }
      }}>
      <Drawer.Screen options={{ headerShown: false }}
        name="Home" component={Home} />
      <Drawer.Screen options={{ headerShown: false }}
        name="Profile" component={Profile} />
      <Drawer.Screen options={{ headerShown: false }}
        name="About" component={AboutScreen} />
      <Drawer.Screen options={{ headerShown: false }}
        name="Logout" component={Signin} />

    </Drawer.Navigator>
  );
}
const Tab = createBottomTabNavigator();
function Tabnav() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Sell') {
          iconName = focused
            ? 'home'
            : 'md-home-outline';
        } else if (route.name === 'Buy') {
          iconName = focused ? 'cart-outline' : 'cart';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'seagreen',
      tabBarInactiveTintColor: 'black',
    })} >
      <Tab.Screen options={{ headerShown: false }}
        name="Buy" component={BuyTab}></Tab.Screen>
      <Tab.Screen options={{ headerShown: false }}
        name="Sell" component={SellTab}></Tab.Screen>
    </Tab.Navigator >
  )


}
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
          options={{ headerShown: false, headerBackVisible: true }}
          component={SignUp}
        ></Stack.Screen>
        <Stack.Screen name="Weather" component={Weather} options={{ headerBackVisible: false, headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="Medicines" component={Medicines} options={{ headerBackVisible: false, headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="RiceMed" component={RiceMed} options={{ headerBackVisible: false, headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="Potato" component={PotatoMed} options={{ headerBackVisible: false, headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="Corn" component={CornMed} options={{ headerBackVisible: false, headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="Wheat" component={WheatMed} options={{ headerBackVisible: false, headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="BuySell" component={Tabnav} options={{ headerBackVisible: false, headerShown: false }}
        >
        </Stack.Screen>
        <Stack.Screen name="Prediction" component={Prediction} options={{ headerBackVisible: false, headerShown: false }}
        >
        </Stack.Screen>
        <Stack.Screen
          options={{ headerBackVisible: false, headerShown: false }}
          name="Welcome to Home"
          component={MyDrawer}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
