import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vh } from '../Utils/units'

const ScreenWrapper = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default ScreenWrapper

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: vh * 8
    }
})