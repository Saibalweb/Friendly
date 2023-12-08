import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import profileImg from "../../assets/profile.png";
import IconsEnt from "react-native-vector-icons/Entypo";
const NotificationItem = () => {
    return (
        <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", paddingHorizontal: 7, paddingVertical: 20, backgroundColor: "#d4f3fc" }}>
            <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}}>
                <Image source={profileImg} style={styles.profileImg} />
                <View style={{ padding: 7, backgroundColor: "blue", borderRadius: 30, position: "absolute", left: 40, top: 70 }}>
                    <IconsEnt name="cake" size={18} color="white" />
                </View>

                <View style={{ width: "70%", marginRight: 10 }}>

                    <Text style={{ color: "black", flex: 1,fontSize:13 }}>
                        It's <Text style={{fontWeight:"bold"}}>Saibal Kole</Text>  birthday Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, labore!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde odit pa.
                    </Text>
                    <Text style={{color:"blue"}}>1 hour ago</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <IconsEnt name="dots-three-horizontal" size={20} color="black" />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    profileImg: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 10,
    },
});
export default NotificationItem;