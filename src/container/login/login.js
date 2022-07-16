import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Style from './style';
import TextInput from '../../component/TextInput/TextInput';

import Contants from '../../helper/constants';
import CheckBoxComponent from '../../component/CheckBox/CheckBox';
import Button from '../../component/Button/Button';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const onChangeHandler = () => {};

  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.header}>
        <Text style={Style.heading}>Welcome Back</Text>
        <Text style={Style.tagLine}>
          Welcome Back ome Back ome Back ome Back ome Back me Back
        </Text>
      </View>

      <Text style={Style.email}>Email</Text>
      <TextInput
        value={userName}
        placeholder={'Email'}
        inputStyle={Style.input}
        onChangeHandler={value => {
          console.log(value);
          setUserName(value);
        }}
      />
      <Text style={Style.email}>Password</Text>

      <TextInput
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
          style={[Style.rememberMe, {fontWeight: 'bold', marginHorizontal: 12}]}
          onPress={() => navigation.navigate('ForgotPassword', {})}>
          Forget Password ?
        </Text>
      </View>

      <View style={{margin: 50}}>
        <Button
          label="Login"
          buttonStyle={Style.button}
          buttonLabelStyle={Style.bottonLabel}
          handleEvent={() => navigation.navigate('BottomTabs', {})}
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
            onPress={() => navigation.navigate('Signup', {})}>
            Sign up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
