import { StyleSheet, Text, View,Image,SafeAreaView} from 'react-native';
import React from 'react'
import FeatherIcon from 'react-native-vector-icons/Feather';
import image from '../../assets/Image';
import ProfileCard from '../../components/shared/ProfileCard';
import LargeBtn from '../../components/shared/LargeBtn';
import PostItem from '../../components/PostItem';
import CreatePost from '../../components/CreatePost';

const Profile = () => {
  return (
        <SafeAreaView style={{flex:1}}>
            <View className="p-4">
                <ProfileCard/>
                <View className="flex-row justify-around mb-4">
                    <LargeBtn/>
                    <LargeBtn/>
                </View>
                <PostItem profileImg={image.profile}/>
                <CreatePost/>
            </View>
        </SafeAreaView>
  )
}

export default Profile;