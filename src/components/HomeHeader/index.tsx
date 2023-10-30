import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Icons} from '../../../assets/icons';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.time}>
        <Image style={[styles.icon, styles.clockIcon]} source={Icons.Clock} />
        <Text style={styles.clockText}>10m</Text>
      </View>
      <View style={styles.center}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>For You</Text>
        </View>
      </View>

      <Image style={styles.icon} source={Icons.Search} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  clockIcon: {
    tintColor: 'rgba(255, 255, 255, 0.60)',
    marginEnd: 4,
  },
  clockText: {
    color: 'rgba(255, 255, 255, 0.60)',
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 2,
  },
  center: {
    position: 'absolute',
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  textContainer: {
    width: 55,
    borderBottomColor: '#FFF',
    borderBottomWidth: 4,
  },
});

export default HomeHeader;
