import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { vh, vw } from '../Utils/units';

const FlatListComp = () => {
    const data = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 4' },
        { id: '5', title: 'Item 5' },
        { id: '6', title: 'Item 6' },
        { id: '7', title: 'Item 7' },
        { id: '8', title: 'Item 8' },
        { id: '9', title: 'Item 9' },
        // Add more items as needed
    ];
    const renderItem = ({ item }) => (
        <View style={styles.list}>
            <Text>{item.title}</Text>
        </View>
    );
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default FlatListComp

const styles = StyleSheet.create({
    list: {
        marginBottom: vh * 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: vh * 1,
        height: vh * 30,
        width: vw * 100,
        backgroundColor: "grey"
    }
})