import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-simple-toast';
import image from '../../assets/Image';
import ProfileCard from '../../components/shared/ProfileCard';
import LargeBtn from '../../components/shared/LargeBtn';
import PostItem from '../../components/PostItem';
import CreatePost from '../../components/CreatePost';
import {colors} from '../../assets/Color';
import {deleteReq, get, patch} from '../../utils/requestBuilder';
import PostEditMenu from '../../components/Post/PostEditMenu';
import WarningModal from '../../components/WarningModal';
import EditModal from '../../components/EditModal';
const {height} = Dimensions.get('window');
const Profile = () => {
  const [postArr, setPostArr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pageSize] = useState(2);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [postEditMenuVisible, setPostEditMenuVisible] = useState(false);
  const [selectedPost,setSelectedPost] = useState('');
  const [deleteModalVisible,setDeleteModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editPostText,setEditPostText] = useState('');
  const [editPostImg,setEditPostImg] = useState('');
  useEffect(() => {
    fetchPosts();
  }, [page]);
  const loadMore = () => {
    if (!loading && page <= totalPage) {
      setPage(prevPage => prevPage + 1);
    }
  };
  async function fetchPosts() {
    if (page > totalPage && totalPage !== 0) return;
    setLoading(true);
    const user = '66fd60437913f703a08a2dec';
    const fetchPostUrl = `${process.env.API_URL}/api/v1/post/${user}?page=${page}&size=${pageSize}`;
    const token = process.env.Token;
    const res = await get(fetchPostUrl, token);
    if (res?.statusCode == 200) {
      const resArr = res?.data?.posts;
      if (postArr) {
        setPostArr(prevArr => [...prevArr, ...resArr]);
      } else {
        setPostArr(resArr);
      }
      setTotalPage(res?.data?.totalPages);
    }
    setLoading(false);
  }
  const onPressEditMenu = (postId)=>{
    setSelectedPost(postId);
    setPostEditMenuVisible(true);
  }
  const onEditPost = () => {
    const editPost = postArr.find(post => post._id === selectedPost);
    const postText = editPost.content;
    const postImg = editPost.img;
    setEditPostText(postText);
    setEditPostImg(postImg);
    setPostEditMenuVisible(false);
    setEditModalVisible(true);
  };
  const editPostHandler = async()=>{
    const prevPostArr = postArr;
    const newPostArr = prevPostArr.map(post => post._id===selectedPost?{...post,content:editPostText}:post);
    setPostArr(newPostArr);
    const ediPostUrl = `${process.env.API_URL}/api/v1/post/update/${selectedPost}`;
    const token = process.env.Token;
    const body = JSON.stringify({
      content:editPostText
    });
    const res = await patch(ediPostUrl,body,token);
    if(res?.statusCode==200){
      Toast.show("You successfully Updated this Post!",Toast.LONG);
      setEditPostText('');
      setEditPostImg('');
      setEditModalVisible(false);
    }else{
      Toast.show("Failed to Update this Post!",Toast.LONG);
      setPostArr(prevPostArr);
    }
  }
  const onDeletePost = () => {
    setPostEditMenuVisible(false);
    setDeleteModalVisible(true);
  };
  const deletePostHandler = async ()=>{
    const prevPostArr = postArr;
    const newPostArr = postArr.filter(post=>post._id !== selectedPost);
    setPostArr(newPostArr);
    setDeleteModalVisible(false);
    const postDeleteUrl = `${process.env.API_URL}/api/v1/post/delete/${selectedPost}`
    const token = process.env.Token;
    const res = await deleteReq(postDeleteUrl,token);
    if(res?.statusCode===200){
      Toast.show("You have successfully deleted this Post!",Toast.LONG);
      setSelectedPost('');
    }else{
      Toast.show("Failed to delete this Post!Please Try again",Toast.LONG);
      setPostArr(prevPostArr);
      setSelectedPost('')
    }
  }
  const renderPosts = ({item}) => {
    return (
      <PostItem
        img={item?.img}
        content={item?.content}
        audience={item?.audience}
        createdAt={item?.createdAt}
        postLikeCount={item?.postLikeCount}
        commentCount={item?.commentCount}
        postId={item?._id}
        ownerId={item?.owner}
        liked={item?.liked}
        onPressEditMenu={onPressEditMenu}
      />
    );
  };
  return (
    <View style={{flex: 1, padding: 12}}>
      <FlatList
        data={[1, 1, 1]}
        renderItem={({_, index}) => {
          return (
            <View>
              {index == 0 && (
                <>
                  <PostEditMenu
                    visible={postEditMenuVisible}
                    onDelete={onDeletePost}
                    onEdit={onEditPost}
                    onBackdropPress={() => setPostEditMenuVisible(false)}
                  />
                  <WarningModal
                  modalVisible={deleteModalVisible}
                  onBackdropPress={()=>setDeleteModalVisible(false)}
                  onCancelPress={()=>setDeleteModalVisible(false)}
                  onDeletePress={deletePostHandler}
                  text={"Are you Sure about to delete this Post?"}
                  />
                  <EditModal
                  editModalVisible={editModalVisible}
                  onBackdropPress={()=>setEditModalVisible(false)}
                  onCancelPress={()=>setEditModalVisible(false)}
                  onConfirmPress={editPostHandler}
                  text={editPostText}
                  onChangeText={(text)=>setEditPostText(text)}
                  img={editPostImg}
                  />
                  <ProfileCard />
                </>
              )}
              {index == 1 && <CreatePost />}
              {index === 2 &&
                (postArr ? (
                  <FlatList
                    data={postArr}
                    renderItem={renderPosts}
                    keyExtractor={item => item._id}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.1}
                    nestedScrollEnabled
                    ListFooterComponent={
                      loading ? (
                        <ActivityIndicator
                          size="large"
                          color={colors.primary}
                        />
                      ) : null
                    }
                  />
                ) : null)}
            </View>
          );
        }}
      />
    </View>
  );
};

export default Profile;
