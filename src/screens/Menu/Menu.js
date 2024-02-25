import { View, Text, SafeAreaView,StyleSheet,Image,TouchableOpacity,ScrollView } from "react-native";
import IconsM from "react-native-vector-icons/MaterialCommunityIcons";
import profileImg from "../../assets/profile.png";
import MenuOption from "./MenuOption";
const Menu = () => {
    return (
        <SafeAreaView style={{paddingHorizontal:10}}>
            <View style={styles.menuHeader}> 
                <Text style={{color:"black",fontWeight:"bold",fontSize:25}}>Menu</Text>
                <TouchableOpacity>

                <View style={styles.headerIconContainer}>
                    <IconsM name="magnify" size={22} style={{ color: "black" }} />
                </View>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",paddingHorizontal:10,marginBottom:15}}>
                <TouchableOpacity>
                <Image source={profileImg} style={styles.profileImg} />
                </TouchableOpacity>
                <View >
                    <TouchableOpacity>
                    <Text style={{color:"black",fontWeight:"bold",fontSize:16}}>Saibal Kole</Text>
                    </TouchableOpacity>
                    <Text>See your Profile</Text>
                </View>

            </View>
            <View style={styles.horizontalLine}></View>
                <View style={styles.optionSection}>
                    <MenuOption text={"MarketPlace"} Icon={'shop'}/>
                    <MenuOption text={"Memories"} Icon={'back-in-time'}/>
                    <MenuOption text={"Pages"} Icon ={"flag"}/>
                    <MenuOption text={"Jobs"} Icon={'suitcase'}/>
                    <MenuOption text={"Events"} Icon={'calendar'}/>
                    <MenuOption text={"MarketPlace"} Icon={'shop'}/>
                    <MenuOption text={"MarketPlace"} Icon={'shop'}/>
                    <MenuOption text={"Friends"} Icon={'user'}/>
                    <MenuOption text={"Groups"} Icon={'users'}/>
                    <MenuOption text={"Video On Watch"} Icon={'video'}/>
                    <MenuOption text={"Saved"} Icon={'arrow-down'}/>
                    <MenuOption text={"Gaming"} Icon={'tv'}/>
                    <MenuOption text={"MarketPlace"} Icon={'calendar'}/>
                    <MenuOption text={"MarketPlace"} Icon={'flag'}/>
                </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    menuHeader:{flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:10,
    marginVertical:17,
    },
    headerIconContainer: {
        marginHorizontal: 4,
        padding: 5,
        backgroundColor: "#c5ced1",
        borderRadius: 20,
    },
    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 7,
    },
    horizontalLine:{
        borderBottomColor: "gray",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optionSection:{
        flexWrap:"wrap",
        marginVertical:15,
        paddingBottom:10,
        overflow:"hidden"
    }
})
export default Menu;