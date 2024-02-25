import { Text } from "react-native"

const TextBlack =(props)=>{
    return(
    <Text style={[{color:'black'},props.style]}>{props.children}</Text>)
}
export default TextBlack;