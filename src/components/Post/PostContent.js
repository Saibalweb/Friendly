import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const PostContent = ({video, img, onPress,disable}) => {
  return (
    <View className="mb-2 p-2">
      <TouchableOpacity className="ml-2" onPress={onPress} disabled={disable || false}>
        <Text className=" text-secondary text-base" >
          😁Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
          beatae in cupiditate laboriosam doloremque quia dolor, officia
          voluptas laudantium iure!
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{marginLeft: 7, marginBottom: 10}}>
        <Text style={{color: 'blue', fontSize: 15}}>See more...</Text>
      </TouchableOpacity>
      {video && <Watch />}
      {!video && (
        <TouchableOpacity onPress={onPress} disabled={disable ||false}>
          <Image source={img} style={{flex: 1, width: '100%', height: 250}} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PostContent;

const styles = StyleSheet.create({});
