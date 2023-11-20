import {View,Text,StyleSheet,TouchableOpacity} from "react-native";
import IconsEnt from "react-native-vector-icons/Entypo";
const MenuOption = (props)=>{
    return(
        <TouchableOpacity style={styles.optionContainer}>
            <IconsEnt name={props.Icon} size={25} color="#589cdb"/>
            <Text style={{color:"black",marginTop:7,fontSize:17,fontWeight:"500"}}>{props.text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    optionContainer:{
        backgroundColor:"white",
        width:"48%",
        paddingHorizontal:13,
        paddingVertical:20,
        borderRadius:16,
        marginHorizontal:5,
        marginVertical:5,
        elevation:5,
    }
})
export default MenuOption;