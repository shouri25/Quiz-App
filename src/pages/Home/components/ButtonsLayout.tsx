import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Icons} from '../../../../assets/icons';
interface Icon {
  value?: string;
  icon: number;
}

const IconsList: Icon[] = [
  {
    icon: Icons.SuperLike,
  },
  {
    value: '87',
    icon: Icons.like,
  },
  {
    value: '2',
    icon: Icons.comment,
  },
  {
    value: '203',
    icon: Icons.Bookmark,
  },
  {
    value: '17',
    icon: Icons.share,
  },
];

const ButtonsLayout = () => {
  return (
    <View>
      {IconsList.map((item, index) => {
        return (
          <View style={styles.item} key={index.toString()}>
            <Image
              style={index === 0 ? styles.superLike : styles.icon}
              source={item.icon}
              resizeMode="cover"
            />
            {item.value && <Text style={styles.value}>{item.value}</Text>}
          </View>
        );
      })}
    </View>
  );
};
export default ButtonsLayout;

const styles = StyleSheet.create({
  item: {
    width: 45,
    height: 45,
    marginVertical: 8,
    alignItems: 'center',
  },
  superLike: {
    width: 45,
    height: 45,
  },
  icon: {
    width: 30,
    height: 30,
  },
  value: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFF',
  },
});
