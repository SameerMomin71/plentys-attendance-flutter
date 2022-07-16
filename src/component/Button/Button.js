import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

export default function Button(props) {
  const {
    buttonStyle,
    buttonLabelStyle,
    label,
    imageStyle = {
      alignItems: 'center',
      width: 25,
      height: 25,
    },
    isImage = false,
    url,
    handleEvent,
  } = props;

  return (
    <TouchableOpacity
      style={[buttonStyle, {flexDirection: 'row', alignItems: 'center'}]}
      onPress={handleEvent}>
      {isImage && (
        <FastImage
          style={imageStyle}
          source={url}
          resizeMode={FastImage.resizeMode.contain}
        />
      )}
      <Text style={buttonLabelStyle}>{label}</Text>
    </TouchableOpacity>
  );
}
