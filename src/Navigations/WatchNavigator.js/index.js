import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WatchScreen from '../../Screens/WatchScreen';
import WatchDetails from '../../Screens/WatchDetails';

const WatchNavigator = () => {
  const WatchStack = createStackNavigator();

  return (
    <WatchStack.Navigator
      headerMode="none"
      screenOptions={{headerShown: false}}
      initialRouteName="Watch">
      <WatchStack.Screen name="Watch" component={WatchScreen} />
      <WatchStack.Screen name="WatchDetails" component={WatchDetails} />
    </WatchStack.Navigator>
  );
};

export default WatchNavigator;

const styles = StyleSheet.create({});
