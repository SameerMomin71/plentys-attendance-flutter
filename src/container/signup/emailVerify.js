import {View, Text, Dimensions, SafeAreaView} from 'react-native';
import React from 'react';
import Style from './style';
import Button from '../../component/Button/Button';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import Contants from '../../helper/constants';
const Width = Dimensions.get('window').width;

export default function EmailVerify() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.header}>
        <Text style={Style.heading}>Check Your Email</Text>
        <Text style={Style.tagLine}>
          Welcome Back ome Back ome Back ome Back ome Back me Back k me Back k
          me Back
        </Text>
      </View>

      <FastImage
        style={{
          width: 150,
          height: 150,
          justifyContent: 'center',
          alignSelf: 'center',
        }}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/969/969320.png',

          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />

      <View style={{marginVertical: Width / 10}}>
        <Button
          label="OPEN YOUR EMAIL"
          buttonStyle={[
            Style.button,
            {width: Width, marginVertical: 10, width: Width * 0.95},
          ]}
          buttonLabelStyle={Style.bottonLabel}
          handleEvent={() => navigation.navigate('EmailSuccess', {})}
        />
        <Button
          label="BACK TO LOGIN"
          buttonStyle={[
            Style.button,
            {
              width: Width,
              marginVertical: 10,
              width: Width * 0.95,
              backgroundColor: Contants.color.button,
            },
          ]}
          buttonLabelStyle={Style.bottonLabel}
          handleEvent={() => navigation.navigate('Login', {})}
        />
      </View>
      <Text style={[Style.rememberMe, {marginHorizontal: 7, fontSize: 16}]}>
        You have not received the email ?{' '}
        <Text
          style={{
            color: '#FF9228',
            fontWeight: 'bold',

            textDecorationLine: 'underline',
          }}
          // onPress={() => navigation.navigate('Login', {})}
        >
          Resend
        </Text>
      </Text>
    </SafeAreaView>
  );
}
