import {StyleSheet} from 'react-native';
import {COLORS} from '../constants';

export default StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: COLORS.light.background,
    elevation: 0,
    borderTopWidth: 0,
  },
  tabBarIcon: {
    width: 27,
    height: 27,
  },
  tabBarButton: {
    flex: 1,
    height: 60,
  },
  tabBarButtonSelected: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 65,
    height: 65,
    borderRadius: 50,
    elevation: 25,
  },
  tabBarButtonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  tabBarButtonContainerInner: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
  },
});
