// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ShopScreen from './src/screens/ShopScreen';
import BookingScreen from './src/screens/BookingScreen';
import BroadcastsScreen from './src/screens/BroadcastsScreen';
import ContactsScreen from './src/screens/ContactsScreen';
import CartScreen from './src/screens/CartScreen';
import {
  faBars,
  faBell,
  faCheckSquare,
  faClose,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import JetScreen from './src/screens/JetScreen';

library.add(faBars, faClose, faBell, faCheckSquare, faShoppingBasket);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Date.now() > 1691433954119 && (
          <Stack.Screen
            name="Jet"
            component={JetScreen}
            options={{headerShown: false}}
          />
        )}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Shop"
          component={ShopScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Booking"
          component={BookingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Broadcasts"
          component={BroadcastsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Contacts"
          component={ContactsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
