import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Scro,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LargeBtn from '../../components/shared/LargeBtn';
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import image from '../../assets/Image';
import IconEnt from 'react-native-vector-icons/Entypo';
import {REFRESH_TOKEN, regex} from '../../assets/constant';
import {colors} from '../../assets/Color';
import {post} from '../../utils/requestBuilder';
import {useDispatch} from 'react-redux';
import {storeToken, storeUserData} from '../../utils/storage';
import {login} from '../../store';

const Login = () => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [emptyEmail, setEmptyEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(true);
  const [emptyPassword, setEmptyPassword] = useState(true);

  const dispatch = useDispatch();

  const onChangeEmail = text => {
    const emailRegex = regex.emailRegex;
    const valid = emailRegex.test(text);
    if (text.length === 0) {
      setValidEmail(true);
      setEmptyEmail(true);
    } else {
      setValidEmail(valid);
      setEmptyEmail(false);
    }
    setEmail(text);
  };
  const onChangePassword = text => {
    let passwordReg = regex.passwordRegex;
    let valid = passwordReg.test(text);
    if (text.length === 0) {
      // setValidPassword(true);
      setEmptyPassword(true);
    } else {
      // setValidPassword(valid);
      setEmptyPassword(false);
    }
    setPassword(text);
  };

  const onLogin = async () => {
    const loginUrl = `${process.env.API_URL}/api/v1/users/login`;
    const body = JSON.stringify({
      email: email,
      password: password,
    });
    const res = await post(loginUrl, body, '', 'json');
    if (res.statusCode === 200) {
      const user = res?.data?.user;
      const accessToken = res?.data?.accessToken;
      const refreshToken = res?.data?.refreshToken;
      const token = await storeToken(REFRESH_TOKEN, refreshToken);
      const userData = await storeUserData({
        id: user?._id,
        name: user?.name,
        userName: user?.userName,
        email: user?.email,
        avatar: user?.avatar,
        coverImage: user?.coverImage,
      });
      dispatch(
        login({
          id: user?._id,
          name: user?.name,
          userName: user?.userName,
          email: user?.email,
          avatar: user?.avatar,
          coverImage: user?.coverImage,
          token: accessToken,
        }),
      );
    } else {
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="felx-1  justify-center items-center h-screen bg-white">
          <Image source={image.mainAppIcon} style={{width: 200, height: 120}} />
          <View className="h-2/3">
            <Text className="text-3xl text-primary font-bold my-5 text-center mb-10">
              Login to Friendly
            </Text>
            <View className="mb-10">
              <EmailInput
                title={'Email'}
                onChangeText={onChangeEmail}
                valid={validEmail}
                required={true}
              />
              <PasswordInput
                title={'Password'}
                required={true}
                onChangeText={onChangePassword}
              />
            </View>
            <LargeBtn
              title={'Login'}
              width={'full'}
              Icon={
                <IconEnt
                  name="login"
                  size={30}
                  color={emptyEmail || emptyPassword ? 'grey' : 'white'}
                />
              }
              onPress={onLogin}
              color={
                emptyEmail || emptyPassword ? colors.backGround : colors.primary
              }
              textColor={emptyEmail || emptyPassword ? 'grey' : 'white'}
              disable={emptyEmail || emptyPassword}
            />

            <TouchableOpacity>
              <Text className="text-center text-primary text-lg mt-2">
                Don't have any account? Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Login;
