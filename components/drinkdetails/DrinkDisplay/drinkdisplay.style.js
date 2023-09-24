import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drinkImageBox: {
    width: '100%',
    height: 280,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drinkImage: {
    width: '100%',
    height: '100%'
  },
  drinkNameBox: {
    marginTop: SIZES.small
  },
  drinkName: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    textAlign: 'center'
  }
});

export default styles;