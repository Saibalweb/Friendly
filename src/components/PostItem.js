import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Watch from "../screens/Watch/Watch";
import IconsI from "react-native-vector-icons/Ionicons";
import IconsAnt from "react-native-vector-icons/AntDesign";
import IconsMat from "react-native-vector-icons/MaterialCommunityIcons";
const PostItem = ({video,img,profileImg}) => {
    const {navigate}=useNavigation();
    const [star, setStar] = useState(false);
    const [isLike, setIsLike] = useState(false);
    const [showReaction, setShowReaction] = useState(false);
    const starHandler = () => {
        setStar(prevState => !prevState);
    }
    const addLikeHandler = () => {
        setIsLike(prevState => !prevState);
    }
    const showReactionHandler = () => {
        setShowReaction(true);
    }
    const openPostHandler = () => {
        navigate('PostContent',{img,profileImg});
    }
    return (
        <View style={{ paddingVertical: 10 }}>
            <View style={{ paddingHorizontal: 5, marginBottom: 10, flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity>
                        <Image source={profileImg} style={styles.profileImg} />
                    </TouchableOpacity>
                    <View style={{ justifyContent: "center" }}>
                        <TouchableOpacity>
                            <Text style={{ color: "black", fontWeight: "bold" }}>Saibal Kole</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{color:'black'}}>2h </Text>
                            <IconsI name="earth" color={'black'} />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", position: "relative", top: 7 }}>
                    <TouchableOpacity onPress={starHandler}>
                        <IconsAnt name={star ? "star" : "staro"} size={17} style={{ color: "blue", marginRight: 7 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconsMat name="dots-horizontal" size={20} color={'black'}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ marginLeft: 7, color: "black" }}>😁Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet beatae in cupiditate laboriosam doloremque quia dolor, officia voluptas laudantium iure!
                    </Text>
                    <TouchableOpacity style={{ marginLeft: 7, marginBottom: 10 }}>
                        <Text style={{color:'blue',fontSize:15}}>See more...</Text>
                    </TouchableOpacity>
                    {video &&<Watch/>}
                    {!video &&<TouchableOpacity onPress={openPostHandler}>
                        <Image source={img} style={{ flex: 1, width: "100%", height: 250 }} />
                    </TouchableOpacity>}
                </View>
                <View style={{ paddingHorizontal: 7 }}>
                    <View style={{ marginBottom: 5, flexDirection: "row", alignItems: "center" }}>
                        <IconsMat name="cards-heart" size={20} style={{ color: "red", marginRight: 2 }} />
                        <IconsAnt name="like1" size={15} style={{ color: "blue", marginRight: 2 }} />
                        <IconsMat name="emoticon-happy" size={20} style={{ color: "#a39224", marginRight: 2 }} />
                        {isLike && <Text style={{ color: "black" }}>You and 10 others</Text>}
                        {!isLike && <Text style={{ color: "black" }}>10 people reacted this</Text>}
                    </View>
                    <View style={styles.horizontalLine}></View>
                    <View style={{ paddingVertical: 5, flexDirection: "row", justifyContent: "space-around" }}>
                        <View >
                            <TouchableOpacity style={styles.reactionContainer} onPress={addLikeHandler} onLongPress={showReactionHandler}>
                                <IconsAnt name={isLike ? "like1" : "like2"} size={20} style={isLike ? { marginRight: 5, color: "blue" } : { marginRight: 5, color: "black" }} />
                                <Text style={{ color: "black" }}>Like</Text>
                            </TouchableOpacity>
                            {showReaction && <View style={styles.reactionOptionContainer}>
                                <View style={{ padding: 7, backgroundColor: "#88A9C3", justifyContent: "center", alignItems: "center", borderRadius: 30, marginHorizontal: 3 }}>
                                    <IconsAnt name="like1" color={"white"} size={25} />
                                </View>
                                <View style={{ padding: 7, backgroundColor: "#88A9C3", justifyContent: "center", alignItems: "center", borderRadius: 30, marginHorizontal: 3 }}>
                                    <IconsAnt name="like1" color={"white"} size={25} />
                                </View>
                                <View style={{ padding: 7, backgroundColor: "#88A9C3", justifyContent: "center", alignItems: "center", borderRadius: 30, marginHorizontal: 3 }}>
                                    <IconsAnt name="like1" color={"white"} size={25} />
                                </View>
                                <View style={{ padding: 7, backgroundColor: "#88A9C3", justifyContent: "center", alignItems: "center", borderRadius: 30, marginHorizontal: 3 }}>
                                    <IconsAnt name="like1" color={"white"} size={25} />
                                </View>
                            </View>}
                        </View>
                        <View>
                            <TouchableOpacity style={styles.reactionContainer}>
                                <IconsMat name="comment-outline" size={20} style={{ marginRight: 5, color: "black" }} />
                                <Text style={{ color: "black" }}>comment</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity style={styles.reactionContainer}>
                                <IconsAnt name="sharealt" size={20} style={{ marginRight: 5, color: "black" }} />
                                <Text style={{ color: "black" }}>Share</Text>
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
    reactionContainer: {
        flexDirection: "row",
        alignItems: "center",
        // paddingHorizontal:15,
        // width:"33%"
    },
    reactionOptionContainer: {
        position: 'absolute',
        zIndex: 5,
        backgroundColor: "white",
        paddingHorizontal: 5,
        paddingVertical: 5,
        flexDirection: "row",
        borderRadius: 15,
        top: 27,
        left: -10
    },
})
export default PostItem;