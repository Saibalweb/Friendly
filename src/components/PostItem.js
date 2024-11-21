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
const PostItem = ({video, img, profileImg,commentInput,route}) => {
  const {navigate} = useNavigation();
  const [star, setStar] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [showReaction, setShowReaction] = useState(false);
  const [disable,setDisable]= useState(route==="PostOpen");
  const starHandler = () => {
    setStar(prevState => !prevState);
  };
  const addLikeHandler = () => {
    setIsLike(prevState => !prevState);
  };
  const showReactionHandler = () => {
    setShowReaction(true);
  };
  const openPostHandler = () => {
    navigate('PostOpen', {img, profileImg});
  };
  return (
    <View className="py-2 bg-white mx-3 my-2 rounded-lg">
      <PostProfileCard profileImg={profileImg}/>
      <HorizontalLine color={'#A9ADBC'} />
      <View>
        <PostContent img={img} onPress={openPostHandler} disable={disable}/>
        <PostLikeSection/>
        {/* <HorizontalLine color={'#A9ADBC'}/> */}
        {commentInput && <CommentInput profileImg={profileImg}/>}
      </View>
    </View>
  );
};
export default PostItem;
