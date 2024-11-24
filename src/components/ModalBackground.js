import React from 'react';
import {
  Text,
  View,
  Modal,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
const {width, height} = Dimensions.get('window');
const ModalBackground = ({children, onBackdropPress, modalVisible}) => {
  return (
    <Modal transparent={true} animationType="silde" visible={modalVisible}>
      <TouchableOpacity
        style={{
          width: width,
          height: height,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
        className="items-center justify-center"
        onPress={onBackdropPress}>
        <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalBackground;
