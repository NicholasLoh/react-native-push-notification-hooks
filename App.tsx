/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, createRef} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNotificationHook} from './usePushLocalNotification';
import {HomeScreen} from './screens/home';
import {SecondScreen} from './screens/second';

const App = () => {
  const {initialize} = useNotificationHook();

  const navigationRef = createRef<NavigationContainerRef>();

  useEffect(() => {
    initialize(navigationRef);
  }, []);

  const Stack = createStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="secondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
