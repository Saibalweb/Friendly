import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const PostContent = ({video, img,content, onPress,disable}) => {
  return (
    <View className="mb-2 p-2">
      <TouchableOpacity className="ml-2" onPress={onPress} disabled={disable || false}>
        <Text className=" text-secondary text-base" >{content || "Legendary Body builder of India"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{marginLeft: 7, marginBottom: 10}}>
        <Text style={{color: 'blue', fontSize: 15}}>See more...</Text>
      </TouchableOpacity>
      {video && <Watch />}
      {!video && (
        <TouchableOpacity onPress={onPress} disabled={disable ||false}>
          <Image source={{uri:img}} style={{flex: 1, width: '100%', height: 250}} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PostContent;

const styles = StyleSheet.create({});
