import {StyleSheet} from 'react-native';
import {SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 35,
    height: 35,
  },
  floatContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    height: 50,
    marginHorizontal: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: SIZES.radius,
    elevation: 25,
  },
  floatContainer2: {
    position: 'absolute',
    bottom: SIZES.height * 0.35,
    right: SIZES.padding * 2,
    width: 60,
    height: 130,
    justifyContent: 'space-between',
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  edgePadding: {
    right: SIZES.width / 20,
    bottom: SIZES.height / 4,
    left: SIZES.width / 20,
    top: SIZES.height / 8,
  },
});
