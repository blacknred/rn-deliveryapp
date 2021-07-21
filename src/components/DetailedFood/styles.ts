import {StyleSheet} from 'react-native';
import {SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: SIZES.padding * 2,
  },
  imageContainer: {
    height: SIZES.height * 0.41,
  },
  image: {
    width: SIZES.width,
    height: '100%',
  },
  floatContainer: {
    position: 'absolute',
    bottom: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    height: 50,
    borderRadius: SIZES.radius,
    elevation: 25,
    left: '30%',
    right: '30%',
  },
  innerFloatContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: SIZES.width,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding * 2,
    paddingVertical: SIZES.padding * 0.5,
  },
  center: {
    textAlign: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
