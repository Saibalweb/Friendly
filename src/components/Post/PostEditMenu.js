import {Text, View, Modal, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import HorizontalLine from '../shared/HorizontalLine';
import ModalBackground from '../ModalBackground';

const {width, height} = Dimensions.get('window');
const EditSection = ({title, icon, onPress}) => {
  return (
    <TouchableOpacity
      className="flex-row justify-between m-4 py-4 px-2"
      onPress={onPress}>
      <Text className="text-black text-2xl">{title}</Text>
      <FeatherIcon name={icon} size={30} color={'black'} />
    </TouchableOpacity>
  );
};
const PostEditMenu = ({visible, onBackdropPress, onEdit, onDelete}) => {
  return (
    <ModalBackground onBackdropPress={onBackdropPress} modalVisible={visible}>
      <View className="w-3/4 py-2 bg-white rounded-md">
        <EditSection title={'Edit Post'} icon={'edit'} onPress={onEdit} />
        <HorizontalLine />
        <EditSection
          title={'Delete Post!'}
          icon={'trash-2'}
          onPress={onDelete}
        />
      </View>
    </ModalBackground>
  );
};

export default PostEditMenu;
