import { View,Text,StyleSheet } from "react-native";
import Video  from "react-native-video";
const source = require('../assets/Video/hookah-bar.webm');
const Watch =()=>{
    return(
        <View style={{width:"100%",height:"30%",backgroundColor:"gray"}}>
            <Video source={source} style={styles.video} controls={true}/>
            {/* <Text>tglsdglsdghio</Text> */}
        </View>
    )
}
const styles = StyleSheet.create({
    video:{
        flex:1,
    }
})
export default Watch;