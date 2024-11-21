import {Text, View, Modal, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import HorizontalLine from '../shared/HorizontalLine';

const {width, height} = Dimensions.get('window');
const EditSection = ({title,icon,onPress}) => {
  return (
    <TouchableOpacity className="flex-row justify-between m-4 py-4 px-2" onPress={onPress}>
      <Text className="text-black text-2xl">{title}</Text>
      <FeatherIcon name={icon} size={30} color={'black'} />
    </TouchableOpacity>
  );
};

const CommentEdit = ({visible, onPressBackDrop,onEdit,onDelete}) => {
  return (
    <Modal transparent={true} animationType="silde" visible={visible}>
      <TouchableOpacity
        style={{
          width: width,
          height: height,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
        className="items-center justify-center"
        onPress={onPressBackDrop}>
        <View className="w-3/4 py-2 bg-white rounded-md">
          <EditSection title={'Edit Comment'} icon={'edit'} onPress={onEdit}/>
          <HorizontalLine />
          <EditSection title={'Delete Comment'} icon={'trash-2'} onPress={onDelete}/>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default CommentEdit;
