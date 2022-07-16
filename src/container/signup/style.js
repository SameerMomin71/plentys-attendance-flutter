import {StyleSheet, Dimensions} from 'react-native';
import constants from '../../helper/constants';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const Style = StyleSheet.create({
  container: {
    backgroundColor: constants.color.primary,
    flex: 1,
  },
  input: {
    height: 65,
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: constants.color.container,
    padding: 10,
    backgroundColor: constants.color.container,
    color: constants.color.mainFont,
  },
  email: {
    marginHorizontal: 12,
    fontWeight: 'bold',
  },

  rememberMe: {
    marginHorizontal: 7,
    fontWeight: '300',
    textAlign: 'center',
    alignSelf: 'center',
  },
  heading: {
    fontSize: Width / 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    marginVertical: Width / 7,
    alignItems: 'center',
  },
  tagLine: {
    textAlign: 'center',
    marginVertical: 5,
    width: Width * 0.8,
    fontWeight: '300',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 20,
    justifyContent: 'center',

    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: constants.color.secondary,
    width: Width * 0.8,
  },
  bottonLabel: {
    color: constants.color.container,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 2,
  },
});

export default Style;
