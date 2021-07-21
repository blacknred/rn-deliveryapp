import {StyleSheet} from 'react-native';
import {FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    marginRight: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'center',
    //
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 3,
    // elevation: 1,
  },
  innerContainer: {
    width: 50,
    height: 50,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: SIZES.padding,
    ...FONTS.body4,
  },
  image: {
    width: 30,
    height: 30,
  },
});
