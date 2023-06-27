import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import StoriesList from '../Components/StoriesList'
import ScreenWrapper from '../Components/ScreenWrapper'

import { vh, vw } from '../Utils/units'
import FlatListComp from '../Components/FlatListComp'

const HomeScreen = () => {


    return (
        <ScreenWrapper>
            <StoriesList />
            <FlatListComp />
        </ScreenWrapper>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})