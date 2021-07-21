import {StyleSheet} from 'react-native';
import {SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SIZES.padding * 4.5,
  },
  menuDotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.padding * 2,
  },
  menuDot: {
    borderRadius: SIZES.radius,
    marginHorizontal: 6,
  },
});
