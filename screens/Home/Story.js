import { View,Text,ScrollView } from "react-native";
import StoryContainerUI from "./StoryContainerUi";
import StoryContainerFriendUI from "./StoryContainerFrUI";
import profileImg from "../../assets/profile.png";
const Story =()=>{
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginVertical:15,paddingHorizontal:7}}>
            <StoryContainerUI/>
            <StoryContainerFriendUI img={profileImg}/>
            <StoryContainerFriendUI img={profileImg}/>
            <StoryContainerFriendUI img={profileImg}/>
            <StoryContainerFriendUI img={profileImg}/>
        </ScrollView>
    )
}
export default Story;