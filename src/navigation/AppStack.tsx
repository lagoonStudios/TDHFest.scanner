import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { TicketTypeContext } from "@/context/TicketType.context";

import { Home } from "@/pages/Home";
import { Scanner } from "@/pages/Scanner";
import { ManualRegister } from "@/pages/ManualRegister";
import { useTicketType } from "@/hooks/TicketType";

const Stack = createStackNavigator();

export default function AppStack() {
  const ticketTypes = useTicketType();

  return (
    <NavigationContainer>
      <TicketTypeContext.Provider value={ticketTypes}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ cardOverlayEnabled: false, headerShown: false }}
          />
          <Stack.Screen
            name="Scanner"
            component={Scanner}
            options={{ cardOverlayEnabled: false, headerShown: false }}
          />
          <Stack.Screen
            name="ManualRegister"
            component={ManualRegister}
            options={{ cardOverlayEnabled: false, headerShown: false }}
          />
        </Stack.Navigator>
      </TicketTypeContext.Provider>
    </NavigationContainer>
  );
}
