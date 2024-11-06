
import * as React from 'react';



import ChatScreen from './components/ChatHomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Message } from './components/constants';
import UserChatScreen from './components/UserChatScreen';
import LoginScreen from './components/on_boadring/LoginScreen';
import ShowBottomSheet from './components/ShowBottomSheet';
import * as Product  from './components/ProductImage';

export type RootStackParamList = {
  Home: any;
  UserChatScreen: {initialMessages:Message};
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={ChatScreen}
        />
       <Stack.Screen
          name='UserChatScreen'
          component={UserChatScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default LoginScreen;