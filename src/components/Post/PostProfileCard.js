import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import IconsI from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import moment from 'moment-timezone';
const userId = '66fd60437913f703a08a2dec';
const PostProfileCard = ({profileImg,audience,createdAt,onPressEditMenu,ownerId}) => {
  const formatTime = moment(createdAt).tz("Asia/Kolkata").format('lll');
  return (
    <View className="ml-2 my-2">
        <View className="flex-row items-center mb-2">
          <TouchableOpacity>
            <Image
              source={profileImg}
              className=" mr-2 w-[50px] h-[50px] rounded-xl"
            />
          </TouchableOpacity>
          <View className="justify-center">
            <TouchableOpacity>
              <Text className="text-primary text-xl">#Saibal Kole</Text>
            </TouchableOpacity>
            <View className="flex-row items-center">
              {/* <Text className="text-primary text-lg mr-2">#saibal_Kole</Text> */}
              <Text className="text-black mr-2">{formatTime || "0h"} </Text>
              <IconsI name="earth" color={'black'} />
            </View>
          </View>
          {ownerId==userId && <TouchableOpacity className="ml-auto mr-4 p-2" onPress={onPressEditMenu}>
            <IconMaterial name='dots-horizontal' size={50} color={'black'}/>
          </TouchableOpacity>}
        </View>
      </View>
  )
}

export default PostProfileCard

const styles = StyleSheet.create({})