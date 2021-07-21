import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const tintColorLight = '#FC6D3F';
const tintColorDark = '#FC6D3F';

export const COLORS = {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    disabled: '#f6f6f6',
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    disabled: '#222',
  },
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  // font type sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
  // app dimensions
  width,
  height,
  isSmallDevice: width < 375,
};

export const FONTS = StyleSheet.create({
  largeTitle: {
    // fontFamily: "Roboto-regular",
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {
    // fontFamily: "Roboto-Black",
    fontWeight: '700',
    fontSize: SIZES.h1,
    lineHeight: 36,
  },
  h2: {
    // fontFamily: "Roboto-Bold",
    fontWeight: '700',
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  h3: {
    // fontFamily: "Roboto-Bold",
    fontWeight: '700',
    fontSize: SIZES.h3,
    lineHeight: 22,
  },
  h4: {
    // fontFamily: "Roboto-Bold",
    fontWeight: '700',
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  body1: {
    // fontFamily: "Roboto-Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    // fontFamily: "Roboto-Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    // fontFamily: "Roboto-Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    // fontFamily: "Roboto-Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
    fontWeight: '700',
  },
  body5: {
    // fontFamily: "Roboto-Regular",
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
});

export default {COLORS, SIZES, FONTS};
