import {View,Text} from "react-native";
import PostItem from "./PostItem";
const Post =()=>{
    return(
        <View>
        <PostItem/>
        <PostItem video={'true'}/>
        <PostItem/>
        </View>
        
    )
}
export default Post;