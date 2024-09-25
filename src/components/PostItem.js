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
import CommentInput from './CommentINput';
const PostItem = ({video, img, profileImg}) => {
  const {navigate} = useNavigation();
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
  const openPostHandler = () => {
    navigate('PostContent', {img, profileImg});
  };
  return (
    <View className="py-2 bg-white mx-3 my-2 rounded-lg">
      <View className="ml-2 my-2">
        <View className="flex-row items-center mb-2">
          <TouchableOpacity>
            <Image
              source={profileImg}
              className=" mr-2 w-[50px] h-[50px] rounded-xl"
            />
          </TouchableOpacity>
          <View className="justify-center">
            <TouchableOpacity>
              <Text className="text-secondary text-xl">Saibal Kole</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text className="text-primary text-lg mr-2">#saibal_Kole</Text>
              <Text style={{color: 'black'}}>2h </Text>
              <IconsI name="earth" color={'black'} />
            </View>
          </View>
        </View>
      </View>
      <HorizontalLine color={'#A9ADBC'} />
      <View>
        <View className="mb-2 p-2">
          <Text className="ml-2 text-secondary text-base">
            😁Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            beatae in cupiditate laboriosam doloremque quia dolor, officia
            voluptas laudantium iure!
          </Text>
          <TouchableOpacity style={{marginLeft: 7, marginBottom: 10}}>
            <Text style={{color: 'blue', fontSize: 15}}>See more...</Text>
          </TouchableOpacity>
          {video && <Watch />}
          {!video && (
            <TouchableOpacity onPress={openPostHandler}>
              <Image
                source={img}
                style={{flex: 1, width: '100%', height: 250}}
              />
            </TouchableOpacity>
          )}
        </View>
        <View className="px-2">
          <View className="mb-2 flex-row items-center px-2 justify-between">
            <View className="flex-row">
                <TouchableOpacity className="mr-10 flex-row items-center">
                <IconsAnt name="hearto" size={24} color={'black'} />
                <Text className="text-secondary text-base ml-1">22</Text>
                </TouchableOpacity>
                <TouchableOpacity className="mr-10 flex-row items-center">
                <IconsAnt name="message1" size={24} color={'black'} />
                <Text className="text-secondary text-base ml-1">22</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text className="text-secondary text-lg">Liked by 22 People</Text>
            </View>
          </View>
        </View>
        <HorizontalLine color={'#A9ADBC'}/>
        <CommentInput profileImg={profileImg}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 7,
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  reactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal:15,
    // width:"33%"
  },
  reactionOptionContainer: {
    position: 'absolute',
    zIndex: 5,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    borderRadius: 15,
    top: 27,
    left: -10,
  },
});
export default PostItem;
