import {StyleSheet} from 'react-native';
import {SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding * 2,
    justifyContent: 'space-between',
  },
  innerContainer: {
    minWidth: '40%',
    maxWidth: '70%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.padding * 2,
  },
  button: {
    justifyContent: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
});
