import { View, Text,Image } from "react-native";
import PostItem from "../../components/PostItem";
import SkeletonLoading from "../../components/SkeletonLoading";
import image from "../../assets/Image";
const Post = () => {
    console.log(image.conmmonUriTest);
    return (

        <View className="bg-backGround">
            {/* <SkeletonLoading/> */}
            <PostItem img={image.conmmonUriTest} profileImg={image.profile} commentInput={true}/>
            <PostItem img={image.conmmonUriTest} profileImg={image.profile2} commentInput={true}/>
            <PostItem img={image.conmmonUriTest} profileImg={image.profile2} commentInput={true}/>
        </View>

    )
}
export default Post;