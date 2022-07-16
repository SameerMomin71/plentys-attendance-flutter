import {View, Text} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import Contants from '../../helper/constants';

export default function CheckBoxComponent(props) {
  const {
    toggleCheckBox,
    disabled = false,
    checkBoxColor = Contants.color.button,
    checkBoxStyle = {
      marginHorizontal: 12,
      backgroundColor: checkBoxColor,
      borderRadius: 10,
    },
    setToggleCheckBox,
  } = props;

  return (
    <CheckBox
      disabled={disabled}
      value={toggleCheckBox}
      tintColor={checkBoxColor}
      onTintColor={checkBoxColor}
      boxType={'square'}
      style={checkBoxStyle}
      onAnimationType="bounce"
      offAnimationType="fill"
      onCheckColor={Contants.color.mainFont}
      onValueChange={newValue => setToggleCheckBox(newValue)}
    />
  );
}
