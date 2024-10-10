import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Keyboard
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import CommentSection from '../../components/CommentSection';
import CommentInput from '../../components/CommentINput';
import PostItem from '../../components/PostItem';
import image from '../../assets/Image';
import { post } from '../../utils/requestBuilder';
import Toast from 'react-native-simple-toast';
const {width, height} = Dimensions.get('window');
const array = [
  {comment: 'This is fine', liked: 2, name: 'Ratri Sau'},
  {comment: 'Hello', liked: 4, name: 'Souro Roy'},
  {
    comment:
      'Hello use one of these packages, you will first need to install it. Once you have installed the package, you can import it into your React Native app. Then, you can use the components that are provided by the package to display and select emojilo',
    liked: 4,
    name: 'Ishita Roy',
  },
];
const PostOpen = () => {
  const route = useRoute();
  const [comments, setComments] = useState(array);
  const onCommentUpload = async e => {
      Keyboard.dismiss();
      const commentUploadUrl = `${process.env.API_URL}/api/v1/comment/upload`
      const body =JSON.stringify({
        content:e,
        postId:"66fda63c73ccd30b46784be4"
      })
      const res = await post(commentUploadUrl,body,process.env.Token,'json');
      Toast.show("You commented on the post!",Toast.LONG);
      console.log(res?.data?.response);
  };
  return (
    <ScrollView style={{paddingVertical: 10, marginBottom: 3}} keyboardShouldPersistTaps='always'>
      <PostItem
        img={image.post1}
        profileImg={image.profile}
        commentInput={false}
        route={route.name}
      />
      {comments.map((item, index) => {
        return (
          <CommentSection
            key={index}
            name={item.name}
            comment={item.comment}
            liked={item.liked}
          />
        );
      })}
      {/* <ActivityIndicator size={'large'}/> */}
      <CommentInput
        onCommentUpload={onCommentUpload}
        profileImg={image.profile}
      />
    </ScrollView>
  );
};
export default PostOpen;
