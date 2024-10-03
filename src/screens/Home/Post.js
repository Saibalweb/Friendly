import { View, Text,Image } from "react-native";
import PostItem from "../../components/PostItem";
import SkeletonLoading from "../../components/SkeletonLoading";
import image from "../../assets/Image";
const Post = () => {
    return (

        <View className="bg-backGround">
            {/* <SkeletonLoading/> */}
            <PostItem img={image.post1} profileImg={image.profile} commentInput={true}/>
            <PostItem img={image.post2} profileImg={image.profile2} commentInput={true}/>
            <PostItem video={'true'} profileImg={image.profile3} commentInput={true}/>
            <PostItem img={image.post2} profileImg={image.profile2} commentInput={true}/>
            <PostItem video={'true'} profileImg={image.profile} commentInput={true}/>
        </View>

    )
}
export default Post;