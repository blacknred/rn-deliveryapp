import {StyleSheet} from 'react-native';
import {SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: SIZES.padding * 3,
    left: 0,
    right: 0,
    marginHorizontal: SIZES.padding * 2,
    padding: SIZES.padding * 2,
    flexDirection: 'column',
    borderRadius: SIZES.radius,
    elevation: 25,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding,
  },
  innerSubContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: SIZES.radius * 5,
    marginRight: SIZES.padding,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: SIZES.padding,
  },
  button: {
    flex: 1,
    height: 50,
    marginRight: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
  },
});
