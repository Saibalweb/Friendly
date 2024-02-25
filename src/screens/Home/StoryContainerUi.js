import { View,Text,StyleSheet,Image,TouchableOpacity} from "react-native";
import profileImg from "../../assets/profile.png";
import { useState } from "react";
const StoryContainerOwnUI = (props)=>{
    const [profile,setProfile]=useState(false);
    return(
        <View style={{marginRight:7}} >
            <TouchableOpacity>
                <View style={styles.storyTopOption}>
                    <Text style={{fontSize:25,color:"blue",fontWeight:"700"}}>+</Text>
                </View>
                <View>
                <Image source={profileImg} style={styles.profileImg}/>
                </View>
                <View style={{position:"absolute",zIndex:2,top:145,left:5}}>
                    <Text style={{fontSize:13,fontWeight:"bold",color:"white"}}>Add to story</Text>
                </View>
            </TouchableOpacity>
        </View>
       
    )
}
const styles = StyleSheet.create({
    storyTopOption:{backgroundColor:"white",
    width:35,
    height:35,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:25,
    position:"absolute",
    top:7,
    left:7,
    zIndex:1,
    },
    profileImg:{
        height:170,
        width:100,
        borderRadius:10,
    }
})

export default StoryContainerOwnUI;