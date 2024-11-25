import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import IconsAnt from 'react-native-vector-icons/AntDesign';
import { colors } from '../../assets/Color';
import { deleteReq, post } from '../../utils/requestBuilder';
const useDebounce = (func,delay)=>{
  let timer;
  return (...args)=>{
    clearTimeout(timer);
    timer = setTimeout(()=>{
      func(...args);
    },delay)
  }
}

const PostLikeSection = ({onLike,onCommentPress,postLikeCount,commentCount,postId,liked=false}) => {
  const [likeCount,setLikeCount]= useState(postLikeCount);
  const [isliked,setIsLiked]= useState(liked);
  async function reactPostApi(curIsLiked){
    if(curIsLiked){
      const likePostUrl = `${process.env.API_URL}/api/v1/like/post/${postId}/add-like`;
      const res = await post(likePostUrl,{},process.env.Token);
    }else{
      const unlikePostUrl = `${process.env.API_URL}/api/v1/like/post/${postId}/remove-like`;
      const res = await deleteReq(unlikePostUrl,process.env.Token);
    }
  }
  const debounceLikePost = useCallback(useDebounce(reactPostApi,300),[])
  const handleLike = ()=>{
    if(isliked){
      setLikeCount(prevState=>prevState-1);
    }else{
      setLikeCount(prevState=>prevState+1);
    }
    setIsLiked((prevState)=>{
      const newState = !prevState;
      debounceLikePost(newState);
      return newState;
    });
  }
  return (
    <View className="px-2">
      <View className="mb-2 flex-row items-center px-2 justify-between">
        <View className="flex-row">
          <TouchableOpacity className="mr-10 flex-row items-center" onPress={handleLike}>
            <IconsAnt name={isliked?"heart":"hearto"} size={24} color={colors.primary} />
            <Text className="text-secondary text-base ml-1">{likeCount || 0}</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mr-10 flex-row items-center" onPress={onCommentPress}>
            <IconsAnt name="message1" size={24} color={'black'} />
            <Text className="text-secondary text-base ml-1">{commentCount||0}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text className="text-secondary text-lg">{`Liked by ${likeCount || 0} People`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostLikeSection;

const styles = StyleSheet.create({});
