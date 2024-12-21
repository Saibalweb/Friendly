import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, Text, View} from 'react-native';
import {Auth, MainApp} from './Navigation';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons1 from 'react-native-vector-icons/FontAwesome';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getToken, getUserData, removeToken, storeToken} from './src/utils/storage';
import SplashScreen from './src/screens/Splash/SplashScreen';
import { REFRESH_TOKEN } from './src/assets/constant';
import { restoreToken, signOut } from './src/store';
import { post } from './src/utils/requestBuilder';

const App = () => {
  const isLoading = useSelector(state => state.auth.isLoading);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchToken() {
      const token = await getToken(REFRESH_TOKEN);
      if (token) {
        const refresTokenUrl = `${process.env.API_URL}/api/v1/users/refresh-token`;
        const body = JSON.stringify({
          refreshToken: token
        })
        const res = await post(refresTokenUrl,body,'','json');
        const user = await getUserData();
        if(res?.statusCode==200 && user){
          console.log('user--->',user);
          const accessToken = res?.data?.accessToken;
          const refreshToken = res?.data?.refreshToken;
          await storeToken(REFRESH_TOKEN,refreshToken);
          dispatch(restoreToken({token:accessToken,user:{
            id:user?.id,
            name:user?.name,
            email:user?.email,
            userName:user?.userName,
            avatar:user?.avatar,
            coverImage:user?.coverImage,
          }}));
        }else{
          dispatch(signOut());
        }
      }else{
        dispatch(signOut());
      }
    }
    fetchToken();
  }, []);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        {isLoading ? <SplashScreen /> : isLoggedIn ? <MainApp /> : <Auth />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
