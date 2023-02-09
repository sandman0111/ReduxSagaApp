import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import MobileDetails from "./MobileDetails";

const StackScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MobileDetails" component={MobileDetails} />
        {/* <Stack.Screen name="AllComponents" component={AllComponents} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackScreen;
