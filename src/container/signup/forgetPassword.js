import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Style from './style';
import FastImage from 'react-native-fast-image';
import TextInputComponent from '../../component/TextInput/TextInput';
import Button from '../../component/Button/Button';
import Contants from '../../helper/constants';
import {useNavigation} from '@react-navigation/native';
const Width = Dimensions.get('window').width;

export default function ForgotPassword() {
  const [userName, setUserName] = useState(null);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.header}>
        <Text style={Style.heading}>Forgot Password ? </Text>
        <Text style={Style.tagLine}>
          Welcome Back ome Back ome Back e Back me Back ack me Backack me
          Backack me Back
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
          uri: 'https://cdn-icons-png.flaticon.com/512/6195/6195697.png',

          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />

      <Text style={Style.email}>Email</Text>
      <TextInputComponent
        value={userName}
        placeholder={'Email'}
        inputStyle={Style.input}
        onChangeHandler={value => {
          console.log(value);
          setUserName(value);
        }}
      />
      <Button
        label="RESET PASSWORD"
        buttonStyle={[
          Style.button,
          {width: Width, marginVertical: 10, width: Width * 0.95},
        ]}
        buttonLabelStyle={Style.bottonLabel}
        handleEvent={() => navigation.navigate('EmailVerify', {})}
      />
      <Button
        label="BACK TO LOGIN"
        buttonStyle={[
          Style.button,
          {
            width: Width * 0.95,
            marginVertical: 10,
            backgroundColor: Contants.color.button,
          },
        ]}
        handleEvent={() => navigation.navigate('Login', {})}
        buttonLabelStyle={Style.bottonLabel}
      />
    </SafeAreaView>
  );
}
