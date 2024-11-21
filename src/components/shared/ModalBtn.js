import React from 'react';
import {Text, View, Modal, Dimensions, TouchableOpacity} from 'react-native';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ModalBtn = ({icon, bgColor, iconSize, iconColor, text,textColor,onPress}) => {
    return (
      <TouchableOpacity className={`flex-row px-4 py-2 border rounded-lg mx-4`} style={{backgroundColor:bgColor}} onPress={onPress}>
        <MaterialComIcon name={icon} size={30} color={iconColor} />
        <Text className="text-black text-lg" style={{color:textColor}}>{text}</Text>
      </TouchableOpacity>
    );
  };

export default ModalBtn;