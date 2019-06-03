import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },

  loading: {
    marginTop: metrics.baseMargin * 2,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  form: {
    flex: 1,
    marginTop: metrics.baseMargin * 2,
    backgroundColor: colors.whiteTransparent,
  },
  formBaixo: {
    marginBottom: metrics.baseMargin * 2,
    height: 50,
    // paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.whiteTransparent,
  },
});

export default styles;
