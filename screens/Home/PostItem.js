import { useState } from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity, Pressable } from "react-native";
import Video  from "react-native-video";
import profileImg from "../../assets/profile.png";
import PostImg from "../../assets/Post.jpg";
import IconsI from "react-native-vector-icons/Ionicons";
import IconsAnt from "react-native-vector-icons/AntDesign";
import IconsMat from "react-native-vector-icons/MaterialCommunityIcons";
const PostItem =()=>{
    const [star,setStar]= useState(false);
    const [isLike,setIsLike]=useState(false);
    const starHandler =()=>{
        setStar(prevState=>!prevState);
    }
    const addLikeHandler =()=>{
        setIsLike(prevState=>!prevState);
    }
    return(
        <View style={{paddingVertical:10}}>
            <View style={{paddingHorizontal:5,marginBottom:10,flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity>
                    <Image source={profileImg} style={styles.profileImg} />
                    </TouchableOpacity>
                    <View style={{justifyContent:"center"}}>
                        <TouchableOpacity>
                        <Text style={{color:"black",fontWeight:"bold"}}>Saibal Kole</Text>
                        </TouchableOpacity>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Text>2h </Text>
                            <IconsI name="earth"/>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row",position:"relative",top:7}}>
                    <TouchableOpacity onPress={starHandler}>
                    <IconsAnt name={star ?"star":"staro"} size={17} style={{color:"blue",marginRight:7}}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <IconsMat name="dots-horizontal" size={20}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={{marginBottom:10}}>
                    <Text style={{marginLeft:7,color:"black"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet beatae in cupiditate laboriosam doloremque quia dolor, officia voluptas laudantium iure!
                    </Text>
                    <TouchableOpacity style={{marginLeft:7,marginBottom:10}}>
                        <Text>See more...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={PostImg} style={{flex:1,width:"100%",height:250}}/>
                    {/* <Video style={{flex:1,width:"100%",height:250}} source={{URL:"https://youtu.be/FaSW_O6NLjM?si=OmEV5_QPJbhFDTdT"}}/> */}
                    </TouchableOpacity>
                </View>
                <View style={{paddingHorizontal:7}}>
                    <View style={{marginBottom:5,flexDirection:"row",alignItems:"center"}}>
                        <IconsAnt name="like1" size={15} style={{color:"blue",marginRight:4}}/>
                        {isLike &&<Text style={{color:"black"}}>You and 10 others</Text>}
                        {!isLike &&<Text style={{color:"black"}}>10 people likes this</Text>}
                    </View>
                    <View style={styles.horizontalLine}></View>
                    <View style={{paddingVertical:5,flexDirection:"row", justifyContent:"space-around"}}>
                        <View >
                            <TouchableOpacity style={styles.reactionContainer} onPress={addLikeHandler}>
                            <IconsAnt name={isLike?"like1":"like2"} size={20} style={isLike?{marginRight:5,color:"blue"}:{marginRight:5}}/>
                            <Text>Like</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.reactionContainer}>
                            <IconsMat name="comment-outline" size={20} style={{marginRight:5}}/>
                            <Text>comment</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity style={styles.reactionContainer}>
                            <IconsAnt name="sharealt" size={20} style={{marginRight:5}}/>
                            <Text>Share</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 7,
    },
    horizontalLine: {
        borderBottomColor: "black",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    reactionContainer:{
        flexDirection:"row",
        alignItems:"center",
        // paddingHorizontal:15,
        // width:"33%"
    }
})
export default PostItem;