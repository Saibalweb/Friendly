import { useState } from 'react';
import { View, TextInput, Dimensions, StyleSheet, TouchableOpacity,Image } from 'react-native';
const { width, height } = Dimensions.get('window');
import IconsIon from 'react-native-vector-icons/Ionicons'
const CommentInput = (props) => {
    const [comment,setComment]=useState('');
    const [commentBtnDisable,setCommentBtnDisable]=useState(true);
    const commentInputHandler=(e)=>{
        if(e===''){
            setCommentBtnDisable(true);
        }
        setComment(e);
        setCommentBtnDisable(false);
    }
    const commentHandler=()=>{
        props.onCommentUpload(comment);
        setComment('');
        setCommentBtnDisable(true);
    }
    return (
        <View style={{ width,flexDirection:'row',alignItems:'center',paddingHorizontal:7 }}>
            <Image source={props.profileImg} className="w-[40px] h-[40px] rounded-md"/>
            <TextInput
                value={comment}
                autoCapitalize='none'
                placeholderTextColor={'black'}
                placeholder='Write a Comment...'
                style={styles.textInput}
                onChangeText={commentInputHandler}
                multiline={true}
            />
            <TouchableOpacity onPress={commentHandler} disabled={commentBtnDisable}>
                <IconsIon name='send' size={30} color={comment?'#F19955':'grey'}/>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    textInput: {
        // flex: 1,
        marginVertical: 10,
        marginHorizontal: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        color:'black',
        fontSize:18,
        width:'75%',
    },
})
export default CommentInput;