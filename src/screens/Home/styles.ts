import {StyleSheet} from 'react-native';
import {SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: SIZES.padding * 4.5,
  },
  horizontalList: {
    padding: SIZES.padding * 2,
  },
  verticalList: {
    paddingHorizontal: SIZES.padding * 2,
  },
});
