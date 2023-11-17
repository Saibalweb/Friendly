import { StyleSheet, Text, View,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconsM from "react-native-vector-icons/MaterialCommunityIcons";
import profileImg from "../../assets/profile.png";


const Home = ()=>{
    return(
       <SafeAreaView>
        <View style={styles.header}>
            <Text style={styles.headerText}>facebook</Text>
            <View style={{flexDirection:"row"}}>
                <View style={styles.headerIconContainer}>
                    <IconsM name="magnify" size={22} style={{color:"black"}}/>
                </View>
                <View style={styles.headerIconContainer}>
                <IconsM name="facebook-messenger" size={22} style={{color:"black"}}/>
                </View>
                <View style={styles.messengerNotification}>
                <Text style={{color:"white",fontSize:15,fontWeight:"900",textAlign:"center"}}>9+</Text>
                </View>
            </View>
        </View>
        <View style={styles.profileContent}>
            <Image source={profileImg} style={styles.profileImg}/>
            <Text style={{color:"black",fontSize:17}}>What's on your mind?</Text>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={{paddingVertical:10,flexDirection:"row"}}>
            <View style={styles.liveSection}>
                <IconsM name="video" size={20} color="red"/>
                <Text>Live</Text>
            </View>
            <View style={styles.liveSection}>
                <IconsM name="image-multiple" size={20} color="green"/>
                <Text>Photo</Text>
            </View>
            <View style={styles.liveSection}>
                <IconsM name="video-plus" size={20} color="purple"/>
                <Text>Live</Text>
            </View>
        </View>
        <View style={{height:10,backgroundColor:"#c1c3c7"}}>

        </View>
       </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginVertical:15,
        paddingHorizontal:15,
        paddingVertical:10,
    },
    headerText:{
        color:'#4267b2',
        fontWeight:"800",
        fontSize:30,
    },
    headerIconContainer:{
        marginHorizontal:4,
        padding:5,
        backgroundColor:"#c5ced1",
        borderRadius:20,
    },
    messengerNotification:{
        width:25,
        height:25,
        backgroundColor:"red",
        borderRadius:50,
        position:"absolute",
        right:-5,
        top:-10,
    },
    profileContent:{
        marginBottom:12,
        paddingHorizontal:10,
        flexDirection:"row",
        alignItems:"center"
    }
    ,
    profileImg:{
        width:50,
        height:50,
        borderRadius:50,
        marginRight:10,
    },
    horizontalLine:{
        borderBottomColor:"gray",
        borderBottomWidth:StyleSheet.hairlineWidth,
    },
    liveSection:{
        flexDirection:"row",
        justifyContent:"center",
        paddingHorizontal:20,
        width:"33%",
        borderRightColor:"gray",
        borderRightWidth:StyleSheet.hairlineWidth,

    }
});
export default Home;