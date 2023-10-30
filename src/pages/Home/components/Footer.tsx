import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Icons} from '../../../../assets/icons';
import {useQuestion} from '../../../context/QuestionContext';

const Footer = () => {
  const {question} = useQuestion();

  return (
    <View style={styles.footer}>
      <View style={styles.playlist}>
        <Image
          source={Icons.Playist}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.text}>{question?.playlist}</Text>
      </View>
      <Image source={Icons.arrow} style={styles.icon} resizeMode="contain" />
    </View>
  );
};
export default Footer;
const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItem: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#161616',
  },
  playlist: {
    flexDirection: 'row',
    alignItem: 'center',
  },
  text: {
    color: '#FFF',
    marginStart: 4,
    fontWeight: '600',
    fontSize: 13,
  },
  icon: {
    tintColor: '#FFF',
    width: 20,
    height: 20,
  },
});
