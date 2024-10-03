import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import IconsI from 'react-native-vector-icons/Ionicons';
import React from 'react'

const PostProfileCard = ({profileImg}) => {
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
              <Text className="text-secondary text-xl">Saibal Kole</Text>
            </TouchableOpacity>
            <View className="flex-row items-center">
              <Text className="text-primary text-lg mr-2">#saibal_Kole</Text>
              <Text className="text-black">2h </Text>
              <IconsI name="earth" color={'black'} />
            </View>
          </View>
        </View>
      </View>
  )
}

export default PostProfileCard

const styles = StyleSheet.create({})