import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
import Style from './style';
import Button from '../../component/Button/Button';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import Contants from '../../helper/constants';
const Width = Dimensions.get('window').width;

export default function EmailSuccess() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.header}>
        <Text style={Style.heading}>Successfully</Text>
        <Text style={Style.tagLine}>
          Welcome Back ome Back ome Back ome Back ome Back ack me Back k me Back
          k me Back
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
          uri: 'https://cdn4.iconfinder.com/data/icons/unigrid-flat-basic/90/019_100_flag_check_finish_done_final_step_sign-512.png',

          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />

      <View style={{marginVertical: Width / 10}}>
        <Button
          label="CONTINUE"
          buttonStyle={[
            Style.button,
            {width: Width, marginVertical: 10, width: Width * 0.95},
          ]}
          buttonLabelStyle={Style.bottonLabel}
          handleEvent={() => navigation.navigate('BottomTabs', {})}
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
    </SafeAreaView>
  );
}
