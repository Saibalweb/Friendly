import {View,Text} from "react-native";
import PostItem from "./PostItem";
const Post =()=>{
    return(
        <View>
        <PostItem/>
        <PostItem video={'true'}/>
        <PostItem/>
        <PostItem video={'true'}/>
        </View>
        
    )
}
export default Post;