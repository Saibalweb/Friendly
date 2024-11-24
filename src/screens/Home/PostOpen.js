import {useEffect, useState} from 'react';
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
  Keyboard,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import CommentSection from '../../components/comment/CommentSection';
import CommentInput from '../../components/comment/CommentINput';
import PostItem from '../../components/PostItem';
import image from '../../assets/Image';
import {deleteReq, get, patch, post} from '../../utils/requestBuilder';
import Toast from 'react-native-simple-toast';
import WarningModal from '../../components/WarningModal';
import EditModal from '../../components/EditModal';
const {width, height} = Dimensions.get('window');
const PostOpen = () => {
  const route = useRoute();
  const [comments, setComments] = useState(null);
  const [deleteModalVisible, setDelteModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [commentLoading, setCommentLoading] = useState(false);
  const [deleteCommentId,setDeleteCommentId] = useState('');
  const [editCommentId,setEditCommentId]= useState('');
  const [editCommentText,setEditCommentText] = useState('');
  useEffect(() => {
    fetchComments();
  }, []);
  async function fetchComments() {
    setCommentLoading(true);
    const postId = '66f71b74135ad96e2c2b75b2';
    const fetchCommentUrl = `${process.env.API_URL}/api/v1/comment/${postId}/all-comments`;
    const res = await get(fetchCommentUrl, process.env.Token);
    if (res?.statusCode == 202) {
      setComments(res?.data?.response);
    }
    setCommentLoading(false);
  }

  const onCommentUpload = async e => {
    Keyboard.dismiss();
    const commentUploadUrl = `${process.env.API_URL}/api/v1/comment/upload`;
    const body = JSON.stringify({
      content: e,
      postId: '66f71b74135ad96e2c2b75b2',
    });
    const res = await post(commentUploadUrl, body, process.env.Token, 'json');
    Toast.show('You commented on the post!', Toast.LONG);
  };
  const onCommentDelete = commentId => {
    setDeleteCommentId(commentId);
    setDelteModalVisible(true);
  };
  const deleteCommentHandler = async () => {
    const prevCommentArr = comments;
    const newCommentsArr = comments.filter((item)=>item._id!==deleteCommentId);
    setComments(newCommentsArr);
    setDelteModalVisible(false);
    const delteCommentUrl = `${process.env.API_URL}/api/v1/comment/delete/${deleteCommentId}` ;
    const token = process.env.Token;
    const res = await deleteReq(delteCommentUrl,token);
    if(res?.statusCode == 202){
      Toast.show("Comment Deleted Successfully",Toast.LONG);
    }else{
      setComments(prevCommentArr);
      Toast.show("Comment Deleted Failed!Please Try Again",Toast.LONG);
    }
    setDeleteCommentId('');
  };
  const onCommentEdit = commentId => {
    setEditCommentId(commentId);
    const text = comments.filter((item)=>item._id===commentId)[0].content;
    setEditCommentText(text);
    setEditModalVisible(true);
  };
  const editCommentHandler = async() => {
    const prevCommentArr = comments;
    const newCommentArr= comments.map((item)=>{
      if(item._id===editCommentId){
          return {...item,content:editCommentText};
      }else{
        return item;
      }
    });
    setComments(newCommentArr);
    const editCommentUrl = `${process.env.API_URL}/api/v1/comment/update/${editCommentId}`;
    const token = process.env.Token;
    const body = JSON.stringify({
      content:editCommentText
    })
    const res = await patch(editCommentUrl,body,token);
    if(res?.statusCode===202){
      Toast.show("Successfully Edited Your Comment!",Toast.LONG);
      setEditCommentId('');
      setEditCommentText('');
      setEditModalVisible(false);
    }else{
      Toast.show("Comment Edit Failed Please try again!",Toast.LONG);
      setComments(prevCommentArr);
    }
  };
  return (
    <>
      <ScrollView
        style={{paddingVertical: 10, marginBottom: 3}}
        keyboardShouldPersistTaps="always">
        <WarningModal
          onBackdropPress={() => setDelteModalVisible(false)}
          modalVisible={deleteModalVisible}
          onCancelPress={() => setDelteModalVisible(false)}
          onDeletePress={deleteCommentHandler}
        />
        <EditModal
          onBackdropPress={() => setEditModalVisible(false)}
          editModalVisible={editModalVisible}
          onCancelPress={() => setEditModalVisible(false)}
          onConfirmPress={editCommentHandler}
          onChangeText={(text)=>setEditCommentText(text)}
          text={editCommentText || ""}
        />
        <PostItem
          img={image.post1}
          profileImg={image.conmmonUriTest}
          commentInput={false}
          route={route.name}
        />
        {commentLoading && <ActivityIndicator size={'large'} />}
        {comments &&
          comments.map((item, index) => {
            return (
              <CommentSection
                key={item._id}
                commentId={item._id}
                name={item.ownerName}
                userName={item.ownerUserName}
                ownerAvatar={item.ownerAvatar}
                ownerId={item.ownerId}
                comment={item.content}
                createdAt={item.createdAt}
                liked={item.liked}
                onCommentDelete={onCommentDelete}
                onCommentEdit={onCommentEdit}
              />
            );
          })}
      </ScrollView>
      <CommentInput
        onCommentUpload={onCommentUpload}
        profileImg={image.profile}
      />
    </>
  );
};
export default PostOpen;
