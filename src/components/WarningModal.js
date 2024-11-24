import React from 'react';
import {Text, View, Modal, Dimensions, TouchableOpacity} from 'react-native';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalBackground from './ModalBackground';
import ModalBtn from './shared/ModalBtn';

const {width, height} = Dimensions.get('window');
const WarningModal = ({onDeletePress,onCancelPress,onBackdropPress,modalVisible,text}) => {
  return (
    <ModalBackground modalVisible={modalVisible} onBackdropPress={onBackdropPress}>
        <View className="bg-white w-3/4 p-8 m-4 rounded-lg items-center">
          <MaterialComIcon name="delete-circle" size={100} color={'#b91c1c'} />
          <Text className="text-xl text-black font-bold mb-4">
            {text || "Are you Sure about to delete this Comment?"}
          </Text>
          {/* <Text className="text-lg text-black">Are you Sure about to delete this Comment?</Text> */}
          <View className="flex-row">
            <ModalBtn text={'Cancel'} textColor={'black'} icon={'close'} iconColor={'black'} bgColor={'white'} onPress={onCancelPress}/>
            <ModalBtn text={'Delete'} textColor={'white'} icon={'delete'} iconColor={'white'} bgColor={'#b91c1c'} onPress={onDeletePress} />
          </View>
        </View>
    </ModalBackground>
  );
};

export default WarningModal;
