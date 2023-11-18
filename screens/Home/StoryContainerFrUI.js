import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import profileImg from "../../assets/profile.png";
import { useState } from "react";
const StoryContainerFriendUI = (props) => {
    return (
        <View style={{ marginRight: 7 }} >
            <TouchableOpacity>
                <View style={styles.storyTopImgBorder}>
                    <Image source={props.img} style={styles.storyTopImg}  resizeMode={"cover"} />
                </View>
                <View>
                    <Image source={profileImg} style={styles.profileImg} />
                </View>
                <View style={{position:"absolute",zIndex:2,top:145,left:5}}>
                    <Text style={{fontSize:13,fontWeight:"bold",color:"white"}}>Saibal Kole</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    storyTopImgBorder:{
        overflow: 'hidden',
        zIndex: 1,
        width: 42,
        height: 42,
        borderColor: "#0751e8",
        borderWidth: 3,
        borderRadius: 21,
        position:"absolute",
        top:5,
        left:5,
    },
    storyTopImg: {
        zIndex: 1,
        width: 40,
        height: 40,
        borderRadius: 20,
        right:2,
    },
    profileImg: {
        height: 170,
        width: 100,
        borderRadius: 10,
    }
})
export default StoryContainerFriendUI;