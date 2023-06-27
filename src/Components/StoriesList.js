import React, { useRef, useEffect } from 'react';
import { FlatList, View, PanResponder, Animated, StyleSheet, Text, } from 'react-native';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import { vh } from '../Utils/units';


const StoriesList = () => {
    const flatListRef = useRef(null);


    const renderItem = ({ item, index }) => {


        return <Animated.View
            style={styles.item}></Animated.View>;
    };

    return (
        <View style={styles.container}>
            <Animated.FlatList
                ref={flatListRef}
                data={[0, 2, 5, 6, 7, 9, 20, 30]}
                horizontal
                renderItem={renderItem}
                scrollEventThrottle={1}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={styles.contentContainer}
            />

        </View>
    )
}

export default StoriesList

const styles = StyleSheet.create({

    container: {
        height: vh * 12,
        justifyContent: 'center',
    },
    contentContainer: {
        paddingVertical: 16,
        backgroundColor: "green"
    },
    item: {
        width: vh * 8,
        height: vh * 8,
        borderRadius: vh * 40,
        marginHorizontal: 8,
        backgroundColor: 'gray',
    },

})