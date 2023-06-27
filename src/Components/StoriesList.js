import {
    Animated,

    StyleSheet,
    Text,

    View,
    Image
} from 'react-native';
import React, { useState, useRef } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { vh, vw } from '../Utils/units';
import { icons, images } from '../Assets';

const StoriesList = () => {
    const [data, setData] = useState([
        { id: 0, image: images.person1, name: '@david' },
        { id: 1, image: images.person2, name: '@elsa' },
        { id: 2, image: images.person3, name: '@king' },
        { id: 3, image: images.person4, name: '@sarmad' },
        { id: 4, image: images.person5, name: '@Dancing' },
        { id: 5, image: images.person2, name: '@Coding' },
        { id: 6, image: images.person1, name: '@Dating' },
        { id: 7, image: images.person3, name: '@Making' },
        { id: 8, image: images.person4, name: '@Cars Show' },
        { id: 9, image: images.person5, name: '@Race' },
        { id: 10, image: images.person1, name: 'Cooking' },
        { id: 11, image: images.person2, name: 'Riding' },
        { id: 12, image: images.person3, name: 'Cinema' },
        { id: 13, image: images.person4, name: 'Dancing' },
        { id: 14, image: images.person5, name: 'Football' },
        { id: 15, image: images.person1, name: 'Coding' },
        { id: 16, image: images.person2, name: 'Fitness' },
    ]);
    const ITEM_SIZE = vw * 20;


    const scrollY = useRef(new Animated.Value(0)).current;
    const renderItem = ({ item, index }) => {
        const inputRange2 = [
            (index - 5) * ITEM_SIZE,
            (index - 4) * ITEM_SIZE,
            (index - 3) * ITEM_SIZE,
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE,
            (index + 2) * ITEM_SIZE,
            (index + 3) * ITEM_SIZE,
        ];
        const inputRange = [
            (index - 5) * ITEM_SIZE,
            (index - 4) * ITEM_SIZE,
            (index - 3) * ITEM_SIZE,
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
        ];
        const translateX = scrollY.interpolate({
            inputRange: inputRange2,
            outputRange: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        });
        const translateY = scrollY.interpolate({
            inputRange,
            outputRange: [-100, -30, 0, 20, 10, -20],
        });
        const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 1, 1, 1],
        });

        return (
            <Animated.View
                key="image0"
                style={[
                    styles.image,
                    {
                        width: ITEM_SIZE,

                        height: wp('20%'),
                        transform: [{ translateX }, { scale }, { translateY }],
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                ]}>

                <View
                    style={styles.profileContainer}>
                    <View style={styles.imageView}>
                        <Image source={item.image} style={styles.image} />
                    </View>
                </View>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 12,
                    }}>
                    {item.name}
                </Text>

            </Animated.View>
        );

    };
    return (
        <View
            style={{
                height: vh * 20,
            }}>
            <View style={styles.headerView}>
                <Image source={icons.hoursStories} style={styles.storie} />
            </View>
            <Animated.FlatList
                horizontal
                showsVerticalScrollIndicator={false}
                data={data}

                keyExtractor={item => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ alignItems: 'center' }}
                // snapToInterval={ITEM_SIZE}
                decelerationRate={0.4}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollY } } }],
                    { useNativeDriver: true },
                )}
                scrollEventThrottle={16}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    profileContainer: {
        height: vh * 9,
        width: vh * 9,
        borderWidth: vw * 0.8,
        borderColor: "#3E59E8",
        padding: vw * 0.6,
        borderRadius: 100,
    },
    imageView: {
        height: "100%",
        width: "100%",
        borderRadius: vh * 100,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    storie: {
        height: vh * 7,
        width: vh * 7,
        resizeMode: "contain"
    },
    headerView: {

        top: -vh * 1,
        borderRadius: vh * 100,
        position: "absolute",
        zIndex: 100,
        alignSelf: "center"
    }
});
export default StoriesList;
