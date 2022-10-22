import HomeScreen from "./screens/home";
import SecondScreen from "./screens/email";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: "Welcome"}}
        />
        <Stack.Screen
          name="SEND EMAIL"
          component={SecondScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}