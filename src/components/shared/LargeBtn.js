import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../assets/Color';

const LargeBtn = ({title, onPress, Icon, color, textColor,width,disable}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      className="my-2 mx-3 p-4 flex-row justify-center items-center rounded-2xl"
      style={{backgroundColor: color || colors.primary,width:width||160}}>
      {Icon || <AntIcon name="adduser" size={30} />}
      <Text className="text-2xl ml-1" style={{color:textColor||'white'}}>{title || 'Follow'}</Text>
    </TouchableOpacity>
  );
};

export default LargeBtn;
