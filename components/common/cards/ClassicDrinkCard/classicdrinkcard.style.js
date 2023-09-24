import { StyleSheet } from 'react-native';

import { COLORS, SHADOWS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: '#FFF',
    ...SHADOWS.medium,
    shadowColor: COLORS.white
  },
  imageContainer: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '90%',
    height: '90%'
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium
  },
  drinkName: {
    fontSize: SIZES.medium,
    fontFamily: 'DMBold',
    color: COLORS.primary
  },
  drinkType: {
    fontSize: SIZES.small + 2,
    fontFamily: 'DMRegular',
    color: COLORS.gray,
    marginTop: 3,
    textTransform: 'capitalize'
  }
});

export default styles;