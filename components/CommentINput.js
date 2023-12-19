import { useState } from 'react';
import { View, TextInput, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
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
        props.onCommentInput(comment);
        setComment('');
        setCommentBtnDisable(true);

    }
    return (
        <View style={{ width,flexDirection:'row',alignItems:'center',paddingHorizontal:7 }}>
            <TextInput
                value={comment}
                autoCapitalize='none'
                placeholderTextColor={'black'}
                placeholder='Write a Comment...'
                style={styles.textInput}
                onChangeText={commentInputHandler}
            />
            <TouchableOpacity onPress={commentHandler} disabled={commentBtnDisable}>
                <IconsIon name='send' size={30} color={comment?'blue':'grey'}/>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 7,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        color:'black',
        fontSize:18,
    },
})
export default CommentInput;