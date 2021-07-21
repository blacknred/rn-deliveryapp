import {StyleSheet} from 'react-native';
import {FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: SIZES.padding * 3,
    elevation: 25,
    //
    // shadowColor: "#eee",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 3,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SIZES.padding * 1.5,
  },
  innerSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: SIZES.width / 2,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SIZES.padding,
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    marginLeft: SIZES.padding,
    ...FONTS.body4,
  },
  button: {
    width: SIZES.width * 0.9,
    padding: SIZES.padding * 1.4,
    alignItems: 'center',
    borderRadius: SIZES.radius,
  },
  iphoneBar: {
    position: 'absolute',
    bottom: -34,
    left: 0,
    right: 0,
    height: 34,
  },
});
