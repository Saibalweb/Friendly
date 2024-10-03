import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import IconsAnt from 'react-native-vector-icons/AntDesign';


const PostLikeSection = ({onLike,onCommentPress,likeCount,CommentCount}) => {
  return (
    <View className="px-2">
      <View className="mb-2 flex-row items-center px-2 justify-between">
        <View className="flex-row">
          <TouchableOpacity className="mr-10 flex-row items-center" onPress={onLike}>
            <IconsAnt name="hearto" size={24} color={'black'} />
            <Text className="text-secondary text-base ml-1">22</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mr-10 flex-row items-center" onPress={onCommentPress}>
            <IconsAnt name="message1" size={24} color={'black'} />
            <Text className="text-secondary text-base ml-1">22</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text className="text-secondary text-lg">Liked by 22 People</Text>
        </View>
      </View>
    </View>
  );
};

export default PostLikeSection;

const styles = StyleSheet.create({});
