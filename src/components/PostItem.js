import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Watch from '../screens/Watch/Watch';
import IconsI from 'react-native-vector-icons/Ionicons';
import IconsAnt from 'react-native-vector-icons/AntDesign';
import IconsMat from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import HorizontalLine from './shared/HorizontalLine';
import CommentInput from './comment/CommentINput';
import PostProfileCard from './Post/PostProfileCard';
import PostContent from './Post/PostContent';
import PostLikeSection from './Post/PostLikeSection';
const PostItem = ({
  video,
  img,
  profileImg,
  commentInput,
  route,
  postId,
  ownerId,
  content,
  audience,
  createdAt,
  postLikeCount,
  commentCount,
  liked,
  onPressEditMenu,
}) => {
  const {navigate} = useNavigation();
  const [disable, setDisable] = useState(route === 'PostOpen');
  const openPostHandler = () => {
    navigate('PostOpen', {img, profileImg});
  };
  const handleEditMenuPress = () => {
    onPressEditMenu(postId);
  };
  return (
    <View className="py-2 bg-white mx-3 my-2 rounded-lg">
      <PostProfileCard
        profileImg={profileImg}
        audience={audience}
        createdAt={createdAt}
        onPressEditMenu={handleEditMenuPress}
        ownerId={ownerId}
      />
      <HorizontalLine color={'#A9ADBC'} />
      <View>
        <PostContent
          img={img}
          content={content}
          onPress={openPostHandler}
          disable={disable}
        />
        <PostLikeSection
          postLikeCount={postLikeCount}
          commentCount={commentCount}
          postId={postId}
          liked={liked}
        />
        {/* <HorizontalLine color={'#A9ADBC'}/> */}
        {commentInput && <CommentInput profileImg={profileImg} />}
      </View>
    </View>
  );
};
export default PostItem;
