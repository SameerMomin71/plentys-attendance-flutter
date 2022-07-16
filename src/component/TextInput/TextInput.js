import {TextInput} from 'react-native';
import React from 'react';

export default function TextInputComponent(props) {
  const {
    inputStyle,
    value,
    onChangeHandler,
    placeholder,
    keyboardType = 'default',
  } = props;

  return (
    <TextInput
      style={inputStyle}
      onChangeText={onChangeHandler}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
      {...props}
    />
  );
}
