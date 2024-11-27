import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_DATA } from '../assets/constant';
async function storeToken(name,token) {
    try {
       res =  await EncryptedStorage.setItem(name,token);
       return res;
    } catch (error) {
        console.log(error)
    }
}
async function getToken(name) {
    try {
        const token = await EncryptedStorage.getItem(name);
        return token;
    } catch (error) {
        console.log(error)
    }
}
async function removeToken(name) {
    try {
       const res =  await EncryptedStorage.removeItem(name);
       return res;
    } catch (error) {
        console.log(error);
    }
}
async function storeUserData(data) {
    try {
        const res = await AsyncStorage.setItem(USER_DATA, JSON.stringify(data));
        return res;
    } catch (error) {
        console.log(error);
    }
}
async function getUserData() {
    try {
        const value = await AsyncStorage.getItem(USER_DATA);
        return value!=null ? JSON.parse(value):null;
    } catch (error) {
        
    }
}
async function removeUserData() {
    try {
        const res = await AsyncStorage.removeItem(USER_DATA);
        return res;
    } catch (error) {
        console.log(error);
    }
}
export {storeToken,getToken,removeToken,storeUserData,getUserData,removeUserData}