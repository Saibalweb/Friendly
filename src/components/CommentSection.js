import { useState } from "react";
import { View, Text, TextInput, Image,Dimensions,TouchableOpacity } from "react-native";
import image from "../assets/Image";
import TextBlack from "./TextBlack";
import IconsAnt from 'react-native-vector-icons/AntDesign'
const { width, height } = Dimensions.get('window');

const CommentSection = ({name,comment,liked}) => {
    const [isLike,setIslike]=useState(false);
    const [likeCount,setLikeCount]=useState(liked);
    const likeHandler =()=>{
        if(!isLike){
            setLikeCount(prevState=>prevState+1);
        }else{
            setLikeCount(prevState=>prevState-1);
        }
        setIslike(prevState=>!prevState)
    }
    return (
        <View style={{width,paddingHorizontal:10,marginVertical:8,flexDirection:'row'}}>
            <Image source={image.profile2} style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginRight: 7,
            }} />
            <View style={{maxWidth:'86%'}}>
            <View style={{width:'auto',height:'auto',backgroundColor:'#d3d7dd',paddingHorizontal:10,paddingVertical:5,borderRadius:10,elevation:5}}>
                <Text style={{color:'black',fontWeight:'bold',fontSize:16,marginBottom:2}}>{name}</Text>
                <Text style={{color:'black'}}>{comment}</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:5 ,alignItems:'center'}}>
                <TouchableOpacity style={{marginRight:14}} onPress={likeHandler}>
                    <TextBlack style={{color:isLike?'blue':'black'}}>Like</TextBlack>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight:14}}>
                    <TextBlack>Reply</TextBlack>
                </TouchableOpacity>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    {(likeCount>0)&&<TextBlack>{likeCount}</TextBlack>}
                    {(likeCount>0)&&<IconsAnt name="like1" color={'blue'} size={17}/>}
                </View>
                
            </View>
            </View>
        </View>

    )
}
export default CommentSection;