import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import image from '../../assets/Image';
import TextBlack from '../TextBlack';
import IconsAnt from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';
import Toast from 'react-native-simple-toast';
import CommentEdit from './CommentEdit';
const {width, height} = Dimensions.get('window');

const CommentSection = ({commentId,name,userName,ownerAvatar,ownerId,createdAt, comment, liked,onCommentDelete,onCommentEdit}) => {
  const [isLike, setIslike] = useState(false);
  const [likeCount, setLikeCount] = useState(liked);
  const [commentEditVisible,setCommentEditVisible]= useState(false);
  const likeHandler = () => {
    if (!isLike) {
      setLikeCount(prevState => prevState + 1);
    } else {
      setLikeCount(prevState => prevState - 1);
    }
    setIslike(prevState => !prevState);
  };
  const handleCommentLongPress = ()=>{
    const userId = '66e9f3216988ba3b9854c09d';
    if(userId!==ownerId) return;
    setCommentEditVisible(true);
  }
  const handleDelete = ()=>{
    onCommentDelete(commentId);
    setCommentEditVisible(false);
  }
  const handleEdit =()=>{
    onCommentEdit(commentId);
    setCommentEditVisible(false);
  }
  const doubleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(2)
    .onStart(() => {
        runOnJS(likeHandler)();
    });
    const longPress = Gesture.LongPress()
      .minDuration(400)
      .onStart(()=>{
        runOnJS(handleCommentLongPress)();
      })
  const exclusiveGestures = Gesture.Exclusive(doubleTap, longPress);
  return (
    <>
      <CommentEdit visible={commentEditVisible} onPressBackDrop={()=>setCommentEditVisible(false)} onDelete={handleDelete} onEdit={handleEdit}/>
    <View style={{width}} className="flex-row px-3 my-2">
      <Image
        source={{uri:ownerAvatar}}
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          marginRight: 7,
        }}
      />
      <GestureDetector gesture={exclusiveGestures}>
        <View style={{maxWidth: '86%'}}>
          <View className="h-auto w-auto min-w-[150px] bg-accent px-2 py-1 my-1 rounded-lg">
            <View className="flex-row justify-between items-center">
              <Text className="text-black font-bold text-base mb-1">
                {userName}
              </Text>
              <Icon
                name={isLike ? 'heart' : 'hearto'}
                size={20}
                color={isLike?"#F19955":'black'}
              />
            </View>
            <Text className="text-black">{comment}</Text>
          </View>
        </View>
      </GestureDetector>
    </View>
    </>
  );
};
export default CommentSection;
