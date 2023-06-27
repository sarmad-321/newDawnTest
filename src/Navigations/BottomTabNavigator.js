import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import { icons } from '../Assets';
import { NavigationContainer } from '@react-navigation/native';
import { vh, vw } from '../Utils/units';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: false,
                    tabBarShowLabel: false,
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: styles.tabStyle,
                }}>
                <BottomTab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={[styles.tabButton]}>
                                <Image
                                    source={icons.home}
                                    style={styles.tabActiveStyle}
                                />

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
                                <Image
                                    source={icons.search}
                                    style={styles.tabActiveStyle}

                                />
                            </View>
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="Create"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={[styles.tabButton]}>
                                <Image
                                    source={icons.plus}
                                    style={styles.tabActiveStyle}

                                />

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
                                <Image
                                    source={icons.cart}
                                    style={styles.tabActiveStyle}

                                />

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
                                <Image
                                    source={icons.gift}
                                    style={styles.tabActiveStyle}

                                />

                            </View>
                        ),
                    }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabStyle: {
        height: vh * 10,
        backgroundColor: "white",
    },
    tabButton: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: 'absolute',
        width: '100%',
        height: vh * 7,
    },
    tabActiveStyle: {
        marginTop: vh,
        width: vh * 4.2,
        height: vh * 4.2,
        resizeMode: 'contain',
    }
})
