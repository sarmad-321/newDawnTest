import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import Poppins from '../../Components/TextWrapper/Poppins';
import styles from './styles';
import {icons} from '../../assets';
import {vh, vw} from '../../Utils/units';

const WatchDetails = () => {
  const data = [
    {title: 'Action'},
    {title: 'Thriller'},
    {title: 'Science'},
    {title: 'Fiction'},
  ];
  const colors = ['#15D2BC', '#E26CA5', '#564CA3', '#CD9D0F', '#61C3F2'];
  // const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: vh * 60,
          justifyContent: 'flex-end',
          //   paddingBottom: '20%',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <View
          style={{
            height: '45%',
            justifyContent: 'center',
          }}>
          <Poppins style={[styles.h1, {paddingBottom: vh * 2}]}>
            In Theaters December 22, 2021
          </Poppins>
          <View style={styles.buttonContainer}>
            <Poppins style={styles.h1}>Get Tickets</Poppins>
          </View>
          <View
            style={[
              styles.buttonContainer,
              {backgroundColor: 'transparent', flexDirection: 'row'},
            ]}>
            <Image source={icons.play} style={styles.img} />
            <Poppins style={styles.h1}>Watch Trailer</Poppins>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          paddingTop: '5%',
          backgroundColor: 'white',
          paddingHorizontal: vw * 10,
        }}>
        <Poppins style={styles.blackh1}>Genres</Poppins>
        <View style={styles.bubbleContainer}>
          {data.map(item => {
            const randomColor =
              colors[Math.floor(Math.random() * colors.length)];
            return (
              <View style={[styles.bubble, {backgroundColor: randomColor}]}>
                <Poppins style={styles.h2}>{item.title}</Poppins>
              </View>
            );
          })}
        </View>
        <View style={styles.line}></View>
        <Poppins style={styles.blackh1}>Overview</Poppins>
        <Poppins style={styles.blackh2}>
          As A Collection Of History's Worst Tyrants And Criminal Masterminds
          Gather To Plot A War To Wipe Out Millions, One Man Must Race Against
          Time To Stop Them. Discover The Origins Of The Very First Independent
          Intelligence Agency In The King's Man. The Comic Book “The Secret
          Service” By Mark Millar And Dave Gibbons.
        </Poppins>
      </View>
    </View>
  );
};

export default WatchDetails;
