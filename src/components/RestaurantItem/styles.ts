import {StyleSheet} from 'react-native';
import {SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    marginBottom: SIZES.padding * 2.5,
  },
  imageContainer: {
    marginBottom: SIZES.padding,
  },
  imageInnerContainer: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: SIZES.width * 0.3,
    borderTopRightRadius: SIZES.radius,
    borderBottomLeftRadius: SIZES.radius,
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
  bottomContainer: {
    marginTop: SIZES.padding,
    flexDirection: 'row',
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginLeft: SIZES.padding * 2,
  },
  categoriesInnerContainer: {
    flexDirection: 'row',
  },
  rating: {
    height: 20,
    width: 20,
    marginRight: SIZES.padding * 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: SIZES.radius,
  },
});
