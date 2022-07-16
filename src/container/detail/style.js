import {StyleSheet, Dimensions} from 'react-native';
import constants from '../../helper/constants';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const Style = StyleSheet.create({
  container: {
    backgroundColor: constants.color.container,
    flex: 1,
  },

  header: {
    padding: Width / 20,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fontStyle: {
    fontSize: Width / 20,
    fontWeight: 'bold',
    color: constants.color.mainFont,
    letterSpacing: 1,
  },
  body: {
    // width: Width * 92,
    backgroundColor: constants.color.secondary,
    height: Width / 2.7,
    marginHorizontal: 12,
    marginVertical: 12,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 20,
    marginHorizontal: 15,
    marginTop: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: constants.color.secondary,
    width: Width * 0.8,
  },
  bottonLabel: {
    color: constants.color.container,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 2,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // marginVertical: 20,
    marginHorizontal: Width / 15,
  },
});

export default Style;
