import { View, Text,Image } from "react-native";
import PostItem from "../../components/PostItem";
import SkeletonLoading from "../../components/SkeletonLoading";
import image from "../../assets/Image";
const Post = () => {
    return (

        <View className="bg-backGround">
            {/* <SkeletonLoading/> */}
            <PostItem img={image.post1} profileImg={image.profile}/>
            <PostItem img={image.post2} profileImg={image.profile2}/>
            <PostItem video={'true'} profileImg={image.profile3}/>
            <PostItem img={image.post2} profileImg={image.profile2}/>
            <PostItem video={'true'} profileImg={image.profile} />
        </View>

    )
}
export default Post;