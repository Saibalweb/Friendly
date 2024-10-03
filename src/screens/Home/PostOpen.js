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
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import CommentSection from '../../components/CommentSection';
import CommentInput from '../../components/CommentINput';
import PostItem from '../../components/PostItem';
import image from '../../assets/Image';
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
  const {params} = route;
  console.log(route);
  const [comments, setComments] = useState(array);
  const [star, setStar] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [showReaction, setShowReaction] = useState(false);
  const starHandler = () => {
    setStar(prevState => !prevState);
  };
  const addLikeHandler = () => {
    setIsLike(prevState => !prevState);
  };
  const showReactionHandler = () => {
    setShowReaction(true);
  };
  const commentInputHandler = e => {
    setComments(prevState => {
      let newArr = [...prevState];
      newArr.push({comment: e, liked: 0, name: 'Saibal Kole'});
      return newArr;
    });
  };
  console.log(comments);
  return (
    <ScrollView style={{paddingVertical: 10, marginBottom: 3}}>
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
      {/* <ActivityIndicator/> */}
      <CommentInput
        onCommentInput={commentInputHandler}
        profileImg={image.profile}
      />
    </ScrollView>
  );
};
export default PostOpen;
