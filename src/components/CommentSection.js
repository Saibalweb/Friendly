import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import image from '../assets/Image';
import TextBlack from './TextBlack';
import IconsAnt from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';
const {width, height} = Dimensions.get('window');

const CommentSection = ({name, comment, liked}) => {
  const [isLike, setIslike] = useState(false);
  const [likeCount, setLikeCount] = useState(liked);
  const likeHandler = () => {
    if (!isLike) {
      setLikeCount(prevState => prevState + 1);
    } else {
      setLikeCount(prevState => prevState - 1);
    }
    setIslike(prevState => !prevState);
  };
  const doublTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(2)
    .onStart(() => {
        runOnJS(likeHandler)();
    });
  return (
    <View style={{width}} className="flex-row px-3 my-2">
      <Image
        source={image.profile2}
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          marginRight: 7,
        }}
      />
      <GestureDetector gesture={Gesture.Exclusive(doublTap)}>
        <View style={{maxWidth: '86%'}}>
          <View className="h-auto w-auto min-w-[150px] bg-accent px-2 py-1 my-1 rounded-lg">
            <View className="flex-row justify-between items-center">
              <Text className="text-black font-bold text-base mb-1">
                {name}
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
  );
};
export default CommentSection;
