import {View, Text, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import Style from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import constants from '../../helper/constants';
import FastImage from 'react-native-fast-image';
import Button from '../../component/Button/Button';
import {useNavigation} from '@react-navigation/native';
const Width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function DetailScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={Style.container}>
      <ScrollView>
        <View style={[Style.header, {height: height / 6}]}>
          <AntDesign
            name="arrowleft"
            size={27}
            onPress={() => navigation.goBack()}
            color={constants.color.secondary}
          />
          <Entypo
            name="dots-three-vertical"
            size={27}
            color={constants.color.secondary}
          />
        </View>

        <View
          style={{
            width: 100,
            height: 100,
            position: 'absolute',
            zIndex: 999,
            backgroundColor: '#AFECFE',
            top: 80,
            alignSelf: 'center',
            alignItems: 'center',
            borderRadius: 50,
            flex: 1,
          }}>
          <FastImage
            style={{
              width: 80,
              height: 80,

              flex: 1,
              alignSelf: 'center',

              justifyContent: 'center',
            }}
            source={require('../../image/googleicon.png')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View
          style={[
            Style.header,
            {
              //   height: height / 6,
              flex: 1,

              backgroundColor: constants.color.primary,
              justifyContent: 'center',
              flexDirection: 'column',
              //   alignItems: 'center',
            },
          ]}>
          <Text
            style={[
              Style.fontStyle,
              {fontSize: 16, textAlign: 'center', marginVertical: 5},
            ]}>
            UI/UX Designer
          </Text>

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',

              marginTop: 10,
              flex: 1,
            }}>
            <Text
              style={[
                Style.fontStyle,
                {
                  fontSize: 16,
                  textAlign: 'center',
                  marginVertical: 5,
                  alignSelf: 'center',
                  fontWeight: 'normal',
                },
              ]}>
              Google
            </Text>
            <Entypo
              name="dot-single"
              size={27}
              color={constants.color.secondary}
            />

            <Text
              style={[
                Style.fontStyle,
                {
                  fontSize: 16,
                  textAlign: 'center',
                  marginVertical: 5,
                  fontWeight: 'normal',
                },
              ]}>
              California
            </Text>
            <Entypo
              name="dot-single"
              size={27}
              color={constants.color.secondary}
            />
            <Text
              style={[
                Style.fontStyle,
                {
                  fontSize: 16,
                  textAlign: 'center',
                  marginVertical: 5,
                  fontWeight: 'normal',
                },
              ]}>
              1 day ago
            </Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            paddingHorizontal: Width / 20,
          }}>
          <Button
            label="Description"
            buttonStyle={[
              Style.button,
              {
                width: Width * 0.45,
                marginHorizontal: 5,
                paddingvertical: 5,
                padding: 15,
              },
            ]}
            buttonLabelStyle={Style.bottonLabel}
          />
          <Button
            label="Company"
            buttonStyle={[
              Style.button,
              {
                padding: 15,
                width: Width * 0.45,
                marginHorizontal: 5,
                backgroundColor: constants.color.button,
              },
            ]}
            buttonLabelStyle={[
              Style.bottonLabel,
              {color: constants.color.mainFont},
            ]}
          />

          {/* <Text
            style={[
              Style.fontStyle,
              {
                fontSize: 16,
                textAlign: 'center',
                marginVertical: 5,
                alignSelf: 'center',
                fontWeight: 'normal',
              },
            ]}>
            $ 100k/Mon
          </Text>

          <Text
            style={[
              Style.fontStyle,
              {
                fontSize: 16,
                textAlign: 'center',
                marginVertical: 5,
                fontWeight: 'normal',
              },
            ]}>
            UI Designer
          </Text>

          <Text
            style={[
              Style.fontStyle,
              {
                fontSize: 16,
                textAlign: 'center',
                marginVertical: 5,
                fontWeight: 'normal',
              },
            ]}>
            Junior Designer
          </Text> */}
        </View>
        <Text
          style={[
            Style.fontStyle,
            {
              color: constants.color.mainFont,
              marginHorizontal: 15,
              marginTop: 15,
              marginBottom: 5,
              letterSpacing: 0,
              fontSize: 18,
            },
          ]}>
          Job Description
        </Text>
        <Text
          style={[
            Style.fontStyle,
            {
              fontSize: 12,
              marginHorizontal: 15,
              textAlign: 'justify',

              fontWeight: 'normal',
              fontFamily: constants.font.secondaryFont,
            },
          ]}>
          Junio r Des igner unior Desi gner unior Design erunior Des ignerunior
          Designer unior De signe runior Des igne runior Designe runior
          Designerunior Designer unior Designerunior Desig nerunior
          Designerunior Designerunior Designeru nior Desi gnerunior si gnerunior
          Design erunior Designerunior Designerunior Designer
        </Text>
        <Button
          label="Read More"
          buttonStyle={[
            Style.button,
            {
              padding: 10,
              marginTop: 10,
              backgroundColor: constants.color.button,
              width: Width * 0.3,
              alignSelf: 'flex-start',
            },
          ]}
          buttonLabelStyle={[
            Style.bottonLabel,
            {color: constants.color.mainFont, fontWeight: 'normal'},
          ]}
        />
        <Text
          style={[
            Style.fontStyle,
            {
              color: constants.color.mainFont,
              marginHorizontal: 15,
              marginTop: 15,
              marginBottom: 5,
              letterSpacing: 0,
              fontSize: 18,
            },
          ]}>
          Requirements
        </Text>
        <Text
          style={[
            Style.fontStyle,
            {
              fontSize: 12,
              marginHorizontal: 15,
              textAlign: 'justify',
              fontFamily: constants.font.secondaryFont,
              fontWeight: 'normal',
            },
          ]}>
          1. Junio r Des igner unior Desi gner uniorr unior Desi gner uniorr
          unior Desi gner unior Design erunior Des {'\n'}
          {'\n'}
          2. Junio r Des igner unior Desi gner unior Der unior Desi gner uniorr
          unior Desi gner uniorsign erunior Des {'\n'}
          {'\n'}3. Junio r Des igner unior Desi gner ur unior Desi gner uniorr
          unior Desi gner uniorr unior Desi gner uniorr unior Desi gner
          uniornior Design erunior Des {'\n'}
          {'\n'}4. Junio r Des igner unisi gner uniorunior Design erunior Des{' '}
          {'\n'}
        </Text>

        <Text
          style={[
            Style.fontStyle,
            {
              color: constants.color.mainFont,
              marginHorizontal: 15,
              marginTop: 15,
              marginBottom: 5,
              letterSpacing: 0,
              fontSize: 18,
            },
          ]}>
          Location
        </Text>

        <Text
          style={[
            Style.fontStyle,
            {
              fontSize: 12,
              marginHorizontal: 15,
              textAlign: 'justify',
              fontFamily: constants.font.secondaryFont,
              fontWeight: 'normal',
            },
          ]}>
          san Antonio, California University, California USA.
        </Text>

        <Button
          label="APPLY NOW"
          buttonStyle={Style.button}
          buttonLabelStyle={Style.bottonLabel}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
