import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import HorizontalLine from './shared/HorizontalLine';
const audience = [
  {name: 'Public', icon: 'globe'},
  {name: 'Private', icon: 'lock'},
  {name: 'Friends', icon: 'group'},
];

const AudienceSection = ({name, icon,selected,onSelect,index}) => {
  return (
    <TouchableOpacity onPress={()=>onSelect(index)}>
      <View className="flex-row items-center my-3 ml-2">
        <FontIcon name={icon} size={35} color={'#F19955'} />
        <Text className="text-black text-2xl ml-4 mr-2">{name}</Text>
       {selected===index &&  <FontIcon name='check-circle' size={20} color={'#F19955'}/>}
      </View>
      <HorizontalLine />
    </TouchableOpacity>
  );
};

const SelectAudience = ({audience,selected,onSelect}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View>
      {/* <Button title="Show modal" onPress={toggleModal} /> */}
      <View>
        <HorizontalLine />
        <TouchableOpacity
          className="flex-row items-center mt-2"
          onPress={toggleModal}>
          <FontIcon name={audience[selected].icon} size={35} color={'#F19955'} />
          <Text className="text-primary text-xl ml-2">Select Audience</Text>
        </TouchableOpacity>
      </View>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}>
        <View className="bg-white h-1/4 w-2/3 p-2 mx-auto rounded-md">
          {audience.map((data,index) => (
            <AudienceSection
              name={data.name}
              icon={data.icon}
              key={data.name}
              index={index}
              selected={selected}
              onSelect={(i)=>{
                setModalVisible(false);
                onSelect(i);
              }}
            />
          ))}
        </View>
      </Modal>
    </View>
  );
};

export default SelectAudience;
