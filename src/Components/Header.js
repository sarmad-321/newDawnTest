import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import { vh, vw } from '../Utils/units'
import { icons, images } from '../Assets'
import LinearGradient from 'react-native-linear-gradient'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image source={images.person1}
                    style={styles.profile}
                />
            </View>
            <View style={styles.iconsView}>
                <View style={styles.iconContainer}>
                    <View style={styles.isNew}>

                    </View>
                    <Image source={icons.bell}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.iconContainer}>
                    <LinearGradient
                        colors={["#97A3E2", "#3E59E8"]}
                        style={styles.messageCount}>
                        <Text style={styles.count}>4</Text>
                    </LinearGradient>
                    <Image source={icons.messages}
                        style={styles.icon}
                    />
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: vh * 8,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: vw * 5
    },
    profileContainer: {
        height: vh * 5,
        width: vh * 5,
        backgroundColor: "green",
        borderRadius: vh * 10,
        overflow: "hidden"
    },
    iconContainer: {
        height: vh * 6,
        width: vh * 6,
        borderRadius: vh * 10,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"

    },
    iconsView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: vw * 23
    },
    profile: {
        height: "100%",
        width: "100%",
        resizeMode: "cover"
    },
    icon: {
        height: "50%",
        width: "50%",
        resizeMode: "contain"
    },
    isNew: {
        width: vh * 0.9,
        height: vh * 0.9,
        borderRadius: vh * 10,
        backgroundColor: "red",
        position: "absolute",
        right: "26%",
        top: "30%",
        zIndex: 100

    },
    messageCount: {
        width: vh * 2,
        height: vh * 2,
        borderRadius: vh * 10,
        backgroundColor: "red",
        position: "absolute",
        right: "20%",
        top: "25%",
        zIndex: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    count: {
        fontSize: vh * 1.2,
        fontWeight: "bold",

    }
})