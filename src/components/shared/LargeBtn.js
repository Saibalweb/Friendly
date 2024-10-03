import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import AntIcon from "react-native-vector-icons/AntDesign"

const LargeBtn = ({title,onPress,Icon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
     className="my-2 mx-3 p-4 bg-primary w-[160px] flex-row justify-center items-center rounded-2xl">
        {Icon || <AntIcon name='adduser' size={30}/>}
        <Text className="text-2xl ml-1 text-white">{title || 'Follow'}</Text>
    </TouchableOpacity>
  )
}

export default LargeBtn;