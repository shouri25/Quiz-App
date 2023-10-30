import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Icons} from '../../../assets/icons';

interface Tab {
  title: string;
  active?: boolean;
  icon: number;
}

const Tabs: Tab[] = [
  {
    icon: Icons.Home,
    title: 'Home',
    active: true,
  },
  {
    icon: Icons.Discover,
    title: 'Discover',
  },
  {
    icon: Icons.Activity,
    title: 'Activity',
  },
  {
    icon: Icons.Bookmark,
    title: 'Bookmarks',
  },
  {
    icon: Icons.Profile,
    title: 'Profile',
  },
];
interface TabItemProps {
  data: Tab;
}

const TabItem = ({data}: TabItemProps) => {
  return (
    <View style={styles.item}>
      <Image
        source={data.icon}
        style={[styles.icon, data.active && styles.activeIcon]}
        resizeMode="contain"
      />
      <Text style={[styles.title, data.active && styles.activeTitle]}>
        {data.title}
      </Text>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.container}>
      {Tabs.map(item => {
        return <TabItem data={item} key={item.title} />;
      })}
    </View>
  );
};
export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#000',
    borderTopColor: 'rgba(255, 255, 255, 0.20)',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  item: {
    padding: 8,
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'rgba(255, 255, 255, 0.40)',
    marginBottom: 4,
  },
  title: {
    color: 'rgba(255, 255, 255, 0.40)',
    fontSize: 10,
    fontWeight: '500',
  },
  activeTitle: {
    color: '#FFF',
  },
  activeIcon: {
    tintColor: '#FFF',
  },
});
