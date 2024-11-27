import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import image from '../../assets/Image';

const SplashScreen = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <ImageBackground source={image.splashScreenBg} style={{flex:1}}>
        <View style={{flex:1}} className="justify-center items-center">
          <Image source={image.mainAppIcon}/>
          <Text className="text-black text-lg font-semibold">Welcome To</Text>
          <Text className="text-black text-4xl font-bold">Friendly</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
