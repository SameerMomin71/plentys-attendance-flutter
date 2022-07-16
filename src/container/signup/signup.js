import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Style from './style';
import Button from '../../component/Button/Button';
import Contants from '../../helper/constants';
import CheckBoxComponent from '../../component/CheckBox/CheckBox';

import {useNavigation} from '@react-navigation/native';
import TextInputComponent from '../../component/TextInput/TextInput';

export default function Signup() {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.header}>
        <Text style={Style.heading}>Create an Account</Text>
        <Text style={Style.tagLine}>
          Welcome Back ome Back ome Back ome Back ome Back me Back k me Back k
          me Back
        </Text>
      </View>

      <Text style={Style.email}>Full Name</Text>
      <TextInputComponent
        value={fullName}
        placeholder={'Full Name'}
        inputStyle={Style.input}
        onChangeHandler={value => {
          console.log(value);
          setFullName(value);
        }}
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
      <Text style={Style.email}>Password</Text>

      <TextInputComponent
        value={password}
        placeholder={'Password'}
        inputStyle={Style.input}
        onChangeHandler={value => {
          setPassword(value);
        }}
        secureTextEntry={true}
      />

      <View style={Style.footer}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <CheckBoxComponent
            setToggleCheckBox={setToggleCheckBox}
            value={toggleCheckBox}
          />

          <Text style={Style.rememberMe}>Remember Me</Text>
        </View>
        <Text
          onPress={() => navigation.navigate('ForgotPassword', {})}
          style={[
            Style.rememberMe,
            {fontWeight: 'bold', marginHorizontal: 12},
          ]}>
          Forget Password ?
        </Text>
      </View>

      <View style={{margin: 50}}>
        <Button
          label="SIGN UP"
          buttonStyle={Style.button}
          buttonLabelStyle={Style.bottonLabel}
        />

        <Button
          label="SIGN IN WITH GOOGLE"
          buttonStyle={[
            Style.button,
            {
              marginVertical: 20,
              backgroundColor: Contants.color.button,
            },
          ]}
          buttonLabelStyle={[
            Style.bottonLabel,
            {color: Contants.color.mainFont, marginHorizontal: 12},
          ]}
          isImage={true}
          url={require('../../image/googleicon.png')}
        />

        <Text style={[Style.rememberMe, {marginHorizontal: 7, fontSize: 16}]}>
          You don't have an account yet?{' '}
          <Text
            style={{
              color: '#FF9228',
              fontWeight: 'bold',

              textDecorationLine: 'underline',
            }}
            onPress={() => navigation.navigate('Login', {})}>
            Sign in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
