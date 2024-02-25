import {View,Text, Image,Dimensions} from 'react-native';
import PostDetails from '../../components/PostDetails';
import { useRoute } from '@react-navigation/native';
import PostImage from "../../assets/Post.jpg";
const PostContent =()=>{
    const route = useRoute();
    const { params}=route;
    return(
        <PostDetails PostImg={params.img} profileImg={params.profileImg}/>
    )
}
export default PostContent;