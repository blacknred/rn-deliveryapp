import {
  BottomTabBar,
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Image, TouchableOpacity} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import useColorScheme from '../hooks/useColorScheme';
import {HomeTabParamList, Screen} from '../typings';
import ProfileScreen from '../screens/Profile';
import {COLORS, icons} from '../constants';
import SearchScreen from '../screens/Search';
import {View} from '../components/Themed';
import SavedScreen from '../screens/Saved';
import HomeScreen from '../screens/Home';
import styles from './styles';

const BottomTab = createBottomTabNavigator<HomeTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  const renderTabBar = (props: any) => {
    if (!isIphoneX()) {
      return <BottomTabBar {...props} />;
    }
    return (
      <View>
        <View style={styles.tabBar} />
        <BottomTabBar {...props} />
      </View>
    );
  };

  const renderTabBarIcon = (src: any, {focused}: any) => {
    const tintColor = focused
      ? COLORS[colorScheme].tint
      : COLORS[colorScheme].tabIconDefault;
    return (
      <Image
        source={src}
        resizeMode="contain"
        style={[styles.tabBarIcon, {tintColor}]}
      />
    );
  };

  return (
    <BottomTab.Navigator
      initialRouteName={Screen.Home}
      tabBar={renderTabBar}
      tabBarOptions={{
        showLabel: false,
        style: styles.tabBar,
      }}>
      <BottomTab.Screen
        name={Screen.Home}
        component={HomeScreen}
        options={{
          tabBarButton: CustomTabBarButton,
          tabBarIcon: props => renderTabBarIcon(icons.cutlery, props),
        }}
      />
      <BottomTab.Screen
        name={Screen.Search}
        component={SearchScreen}
        options={{
          tabBarButton: CustomTabBarButton,
          tabBarIcon: props => renderTabBarIcon(icons.search, props),
        }}
      />
      <BottomTab.Screen
        name={Screen.Saved}
        component={SavedScreen}
        options={{
          tabBarButton: CustomTabBarButton,
          tabBarIcon: props => renderTabBarIcon(icons.like, props),
        }}
      />
      <BottomTab.Screen
        name={Screen.Profile}
        component={ProfileScreen}
        options={{
          tabBarButton: CustomTabBarButton,
          tabBarIcon: props => renderTabBarIcon(icons.user, props),
        }}
      />
    </BottomTab.Navigator>
  );
}

const CustomTabBarButton = ({
  accessibilityState,
  children,
  onPress,
}: BottomTabBarButtonProps) => {
  const colorScheme = useColorScheme();
  const backgroundColor = COLORS[colorScheme].background;

  if (!accessibilityState || !accessibilityState.selected) {
    return (
      <TouchableOpacity
        style={[styles.tabBarButton, {backgroundColor}]}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.tabBarButtonContainer}>
      <View style={styles.tabBarButtonContainerInner}>
        {/* <View style={{ flex: 1, backgroundColor }}></View> */}
        <Svg width={75} height={61} viewBox={'0 0 75 61'}>
          <Path
            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
            fill={backgroundColor}
          />
        </Svg>
        {/* <View style={{ flex: 1, backgroundColor }}></View> */}
      </View>

      <TouchableOpacity
        style={[styles.tabBarButtonSelected, {backgroundColor}]}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    </View>
  );
};
