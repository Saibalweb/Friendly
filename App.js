import "react-native-gesture-handler"
import { SafeAreaView, Text, View } from "react-native";
import Navigation from "./Navigation";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons1 from 'react-native-vector-icons/FontAwesome';
import {GestureHandlerRootView} from "react-native-gesture-handler"

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
const App =()=>{
  return(
    <GestureHandlerRootView style={{flex:1}}>
      <Navigation/>
    </GestureHandlerRootView>
    // <SafeAreaView>
    // </SafeAreaView>
  )
}

export default App;
