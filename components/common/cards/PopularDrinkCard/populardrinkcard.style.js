import { StyleSheet } from 'react-native';

import { COLORS, FONT, SHADOWS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
  container: (selectedDrink, item) => ({
    width: 180,
    padding: SIZES.xLarge,
    backgroundColor: selectedDrink === item.id ? COLORS.primary : '#FFF',
    borderRadius: SIZES.medium,
    justifyContent: 'space-between',
    ...SHADOWS.medium,
    shadowColor: COLORS.white
  }),
  imageContainer: (selectedDrink, item) => ({
    width: 100,
    height: 100,
    backgroundColor: selectedDrink === item.id ? '#FFF' : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center'
  }),
  image: {
    width: '90%',
    height: '90%'
  },
  drinkType: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
    marginTop: SIZES.small / 1.5
  },
  infoContainer: {
    marginTop: SIZES.large
  },
  drinkName: (selectedDrink, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedDrink === item.id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  publisher: (selectedDrink, item) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: selectedDrink === item.id ? COLORS.white : COLORS.primary
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: '#B3AEC6'
  },
});

export default styles;