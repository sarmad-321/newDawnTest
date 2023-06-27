import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTabNavigator from './src/Navigations/BottomTabNavigator'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <BottomTabNavigator />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});