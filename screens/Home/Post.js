import { View, Text,Image } from "react-native";
import PostItem from "./PostItem";
import SkeletonLoading from "../../components/SkeletonLoading";
const Post = () => {
    return (

        <View>
            <SkeletonLoading/>
            <PostItem />
            <PostItem video={'true'} />
            <PostItem />
            <PostItem video={'true'} />
        </View>

    )
}
export default Post;