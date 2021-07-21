import * as React from 'react';
import {ColorSchemeName} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import OrderDeliveryScreen from '../screens/OrderDelivery';
import LinkingConfiguration from './LinkingConfiguration';
import {RootStackParamList, Screen} from '../types';
import RestaurantScreen from '../screens/Restaurant';
import HomeTabNavigator from './HomeTabNavigator';
import NotFoundScreen from '../screens/NotFound';
interface INavigationProps {
  colorScheme: NonNullable<ColorSchemeName>;
}

export default ({colorScheme}: INavigationProps) => (
  <NavigationContainer
    linking={LinkingConfiguration}
    theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <RootNavigator />
  </NavigationContainer>
);

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName={Screen.Home}>
    <Stack.Screen name={Screen.Home} component={HomeTabNavigator} />
    <Stack.Screen name={Screen.Restaurant} component={RestaurantScreen} />
    <Stack.Screen name={Screen.OrderDelivery} component={OrderDeliveryScreen} />
    <Stack.Screen name={Screen.NotFound} component={NotFoundScreen} />
  </Stack.Navigator>
);
