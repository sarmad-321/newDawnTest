import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import { icons } from '../Assets';
import { NavigationContainer } from '@react-navigation/native';
import { vh, vw } from '../Utils/units';
import { TabBarAdvancedButton } from '../Components/TabBarAdvancedButton';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        tabBar={props => (
          <View style={styles.navigatorContainer}>
            <BottomTabBar {...props} />
          </View>
        )}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarItemStyle: {
            backgroundColor: '#F6F7EB',
            height: vh * 7.2,
            justifyContent: 'flex-start',
          },
          tabBarStyle: styles.navigator,
        }}>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={[styles.tabButton]}>
                <Image source={icons.home} style={styles.tabActiveStyle} />
              </View>
            ),
          }}
        />

        <BottomTab.Screen
          name="Search"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={[styles.tabButton]}>
                <Image source={icons.search} style={styles.tabActiveStyle} />
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="Create"
          component={HomeScreen}
          options={{
            tabBarButton: props => (
              <View style={[styles.tabButton]}>
                <TabBarAdvancedButton bgColor={'#F6F7EB'} {...props} />
              </View>
            ),
          }}
        />

        <BottomTab.Screen
          name="Cart"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={[styles.tabButton]}>
                <Image source={icons.cart} style={styles.tabActiveStyle} />
              </View>
            ),
          }}
        />

        <BottomTab.Screen
          name="Gifts"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={[styles.tabButton]}>
                <Image source={icons.gift} style={styles.tabActiveStyle} />
              </View>
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({

  tabActiveStyle: {
    width: vh * 3,
    height: vh * 3,
    resizeMode: 'contain',
  },

  container: {
    flex: 1,
  },
  navigatorContainer: {
    position: 'absolute',
    bottom: Platform.OS == "ios" ? -vh * 2 : 0,
    left: 0,
    right: 0,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
  },
});
