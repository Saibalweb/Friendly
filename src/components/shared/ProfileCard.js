import { StyleSheet, Text, View,Image,SafeAreaView} from 'react-native';
import React from 'react';
import image from '../../assets/Image';
import FeatherIcon from 'react-native-vector-icons/Feather';


const ProfileCard = () => {
  return (
    <View className="flex-row items-center py-6 mx-1 my-4 bg-white" style={{elevation:3}}>
      <Image
        source={image.profile}
        className="w-[70] h-[90] rounded-full mx-2"
      />
      <View className=" w-[72%] ml-2">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-2xl text-black mb-1">Saibal Kole</Text>
            <Text className="text-base text-primary">#saibalKole</Text>
          </View>
          <View>
            <FeatherIcon name="edit" size={30} color={'black'} />
          </View>
        </View>
        <View className="mt-4 flex-row justify-between ">
          <View className="p-4 bg-accent rounded-2xl">
            <Text className="text-base text-black">Post</Text>
          </View>
          <View className="p-4 bg-accent rounded-2xl">
            <Text className="text-base text-black">Followers</Text>
          </View>
          <View className="p-4 bg-accent rounded-2xl">
            <Text className="text-base text-black">Following</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({});
