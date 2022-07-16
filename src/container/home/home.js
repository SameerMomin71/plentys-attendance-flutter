import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Style from './style';
import FastImage from 'react-native-fast-image';
import constants from '../../helper/constants';
import Button from '../../component/Button/Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const Width = Dimensions.get('window').width;

export default function HomeScreen() {
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailScreen', {})}
        style={{
          width: Width * 0.96,
          borderRadius: 20,
          backgroundColor: constants.color.white,

          height: Width * 0.42,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50 / 2,
                backgroundColor: constants.color.button,
              }}>
              <FastImage
                style={{
                  width: 30,
                  height: 30,
                  flex: 1,
                  alignSelf: 'center',

                  justifyContent: 'center',
                }}
                source={{
                  uri: 'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-logo-icons-31.png',

                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <View style={{marginHorizontal: 10, alignSelf: 'center'}}>
              <Text style={[Style.fontStyle, {fontSize: 16}]}>
                Product Designer
              </Text>
              <Text
                style={[Style.fontStyle, {fontWeight: '300', fontSize: 13}]}>
                Google inc . Califonia, USA
              </Text>
            </View>
          </View>
          <Ionicons
            name="bookmark-outline"
            size={27}
            color={constants.color.secondary}
          />
        </View>

        <Text
          style={[
            Style.fontStyle,
            {
              color: constants.color.mainFont,
              marginHorizontal: 20,
              fontSize: 17,
              fontWeight: 'bold',
              letterSpacing: 0,
            },
          ]}>
          $ 15k{' '}
          <Text
            style={{
              color: constants.color.mainFont,
              marginHorizontal: 20,
              fontSize: 17,
              fontWeight: '200',
            }}>
            / Mo
          </Text>
        </Text>
        <View
          style={{
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            marginVertical: 10,
          }}>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: constants.color.container,
              borderRadius: 10,

              width: Width * 0.35,
            }}>
            <Text
              style={[
                Style.fontStyle,
                {
                  color: '#524B6B',
                  // marginHorizontal: 20,
                  textAlign: 'center',

                  fontSize: 17,
                  fontWeight: 'normal',
                  letterSpacing: 0,
                },
              ]}>
              Senior Designer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: constants.color.container,
              borderRadius: 10,

              width: Width * 0.25,
            }}>
            <Text
              style={[
                Style.fontStyle,
                {
                  color: '#524B6B',
                  // marginHorizontal: 20,
                  textAlign: 'center',

                  fontSize: 17,
                  fontWeight: 'normal',
                  letterSpacing: 0,
                },
              ]}>
              Full Time
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: '#FFD6AD',
              borderRadius: 10,
              width: Width * 0.25,
            }}>
            <Text
              style={[
                Style.fontStyle,
                {
                  color: '#524B6B',
                  // marginHorizontal: 20,
                  textAlign: 'center',

                  fontSize: 17,
                  fontWeight: 'normal',
                  letterSpacing: 0,
                },
              ]}>
              Apply
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={Style.container}>
      <ScrollView>
        <View style={Style.header}>
          <View>
            <Text style={Style.fontStyle}>Hello</Text>
            <Text style={Style.fontStyle}>Orlando Diggs</Text>
          </View>
          <FastImage
            style={{
              width: 50,
              height: 50,
            }}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/6195/6195697.png',

              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>

        <View style={Style.body}>
          <View>
            <Text
              style={[
                Style.fontStyle,
                {
                  color: constants.color.container,
                  marginHorizontal: 20,
                  marginTop: 20,
                  fontWeight: 'normal',
                },
              ]}>
              50% off
            </Text>
            <Text
              style={[
                Style.fontStyle,
                {
                  color: constants.color.container,
                  marginHorizontal: 20,
                  fontWeight: 'normal',
                },
              ]}>
              take any courses
            </Text>
            <Button
              label="Join Now"
              buttonStyle={Style.button}
              buttonLabelStyle={Style.bottonLabel}
            />
          </View>
          <FastImage
            style={{
              width: 230,
              height: 230,
              position: 'absolute',
              right: -50,
              top: -48,
            }}
            source={require('../../image/men.png')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <Text
          style={[
            Style.fontStyle,
            {
              color: constants.color.mainFont,
              marginHorizontal: 20,
              marginVertical: 15,
              letterSpacing: 0,
              fontSize: 18,
            },
          ]}>
          Find Your Job
        </Text>
        <View style={Style.subContainer}>
          <View
            style={{
              backgroundColor: '#AFECFE',
              width: Width * 0.45,
              borderRadius: 5,
              height: Width * 0.55,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="file-search"
              size={40}
              color={constants.color.secondary}
            />
            <Text
              style={[
                Style.fontStyle,
                {
                  color: constants.color.mainFont,
                  marginHorizontal: 20,
                  marginTop: 10,
                  letterSpacing: 0,
                  fontSize: 18,
                },
              ]}>
              44.5 k
            </Text>
            <Text
              style={[
                Style.fontStyle,
                {
                  color: constants.color.mainFont,

                  marginVertical: 5,
                  fontWeight: 'normal',
                  letterSpacing: 0,
                  fontSize: 16,
                },
              ]}>
              Remote Job
            </Text>
          </View>

          <View style={{flexDirection: 'column', marginLeft: Width * 0.09}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#BEAFFE',
                borderRadius: 5,
                width: Width * 0.45,
                height: Width * 0.26,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  Style.fontStyle,
                  {
                    color: constants.color.mainFont,
                    marginHorizontal: 20,
                    marginTop: 10,
                    letterSpacing: 0,
                    fontSize: 18,
                  },
                ]}>
                66.8 k
              </Text>
              <Text
                style={[
                  Style.fontStyle,
                  {
                    color: constants.color.mainFont,

                    marginVertical: 5,
                    fontWeight: 'normal',
                    letterSpacing: 0,
                    fontSize: 16,
                  },
                ]}>
                Full Time
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFD6AD',
                borderRadius: 5,
                marginTop: 10,
                width: Width * 0.45,
                height: Width * 0.26,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  Style.fontStyle,
                  {
                    color: constants.color.mainFont,
                    marginHorizontal: 20,
                    marginTop: 10,
                    letterSpacing: 0,
                    fontSize: 18,
                  },
                ]}>
                38.9 k
              </Text>
              <Text
                style={[
                  Style.fontStyle,
                  {
                    color: constants.color.mainFont,

                    marginVertical: 5,
                    fontWeight: 'normal',
                    letterSpacing: 0,
                    fontSize: 16,
                  },
                ]}>
                Part Time
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={[
            Style.fontStyle,
            {
              color: constants.color.mainFont,
              marginHorizontal: 20,
              marginVertical: 15,
              letterSpacing: 0,
              fontSize: 18,
            },
          ]}>
          Recent Job List
        </Text>

        <FlatList
          data={[{title: 'Apple Developer'}]}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={renderItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
