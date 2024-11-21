import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import ModalBackground from './ModalBackground';
import LargeBtn from './shared/LargeBtn';
import {colors} from '../assets/Color';
import ModalBtn from './shared/ModalBtn';

const EditModal = ({onBackdropPress, onCancelPress, onConfirmPress,editModalVisible,onChangeText,text}) => {
  return (
    <ModalBackground onBackdropPress={onBackdropPress} modalVisible={editModalVisible}>
      <View className="bg-white w-5/6 max-h-[75%] rounded-lg p-4">
        <TextInput
          className="w-full  max-h-[100%] py-4 px-2 mb-4 border rounded-lg  text-black text-xl"
          multiline
          onChangeText={(text)=>onChangeText(text)}
          value={text || ""}
        />
        <View className="flex-row mt-3">
          <ModalBtn
            text={'Cancel'}
            textColor={'black'}
            bgColor={'white'}
            icon={'close'}
            iconColor={'black'}
            onPress={onCancelPress}
          />
          <ModalBtn
            text={'Edit Com'}
            textColor={'white'}
            bgColor={colors.primary}
            icon={'check'}
            iconColor={'white'}
            onPress={onConfirmPress}
          />
        </View>
      </View>
    </ModalBackground>
  );
};

export default EditModal;
