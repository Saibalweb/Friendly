import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  PermissionsAndroid,
  TouchableOpacity
} from 'react-native';
import React, {useState} from 'react';
import LargeBtn from './shared/LargeBtn';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {takeMediaPermission} from '../utils/permission';
import image from '../assets/Image';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import SelectAudience from './SelectAudience';
import { post } from '../utils/requestBuilder';
import Toast from 'react-native-simple-toast';

const audience = [
  {name: 'Public', icon: 'globe'},
  {name: 'Private', icon: 'lock'},
  {name: 'Friends', icon: 'group'},
];

const ImagePicker = ({onPress})=>{
  return(
    <TouchableOpacity onPress={onPress} className="my-2 ml-auto">
      <FontIcon name="file-photo-o" size={30} color={'#F19955'} />
    </TouchableOpacity>
  )
}


const CreatePost = () => {
  const [img, setImg] = useState(null);
  const [content,setConent] = useState('');
  const [selected,setSelected]= useState(0);
  const handleImagePicker = async () => {
    const permission = await takeMediaPermission();
    const result = await launchImageLibrary();
    if(result.didCancel) return;
    setImg(result.assets[0]);
  };
  const handleContent = (text)=>{
    setConent(text);
  }
  const onCreatePost = async ()=>{
    const url = `${process.env.API_URL}/api/v1/post/upload`;
    const body = new FormData();
    if(img){
      body.append("postImg",{
        "name":img.fileName,
        "type":img.type,
        "uri":img.uri,
      });
    }
    body.append('content',content);
    body.append('audience',audience[selected].name.toLocaleLowerCase());
    Toast.show("Uploading Post!",Toast.LONG);
    const res = await post(url,body,process.env.Token,"file");
    if(res.statusCode===200){
      Toast.show("Post Uploaded!",Toast.LONG);
      console.log(JSON.stringify(res,null,2));
      setImg(null);
      setConent('');
    }
  }
  return (
    <View className="p-1 m-1">
      <TouchableOpacity onPress={onCreatePost} disabled={!content && !img}>
      <Text className="text-xl text-primary text-right mr-4">Post</Text>
      </TouchableOpacity>
      <View className="flex-row">
      <Image
        source={image.profile}
        className="w-[40px] h-[40px] rounded-full mt-5"
      />
      <TextInput
        placeholder="Write Something to Post!"
        className="text-black text-lg w-[86%] ml-2"
        multiline={true}
        placeholderTextColor={'black'}
        value={content}
        onChangeText={handleContent}
      />
      </View>
      {img ? (
        <View className="items-end">
          <Image source={{uri: img.uri}} style={{width: 350, height: 340}} className="rounded-lg my-2 " />
        </View>
      ) : null}
      <View className="ml-6 mt-4">
      <ImagePicker onPress={handleImagePicker}/>
      <SelectAudience audience={audience} selected={selected} onSelect={(i)=>{setSelected(i)}}/>
      </View>
    </View>
  );
};



export default CreatePost;

const styles = StyleSheet.create({});
