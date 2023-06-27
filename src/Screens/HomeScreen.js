import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StoriesList from '../Components/StoriesList'
import ScreenWrapper from '../Components/ScreenWrapper'

const HomeScreen = () => {
    return (
        <ScreenWrapper>
            <StoriesList />
        </ScreenWrapper>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})