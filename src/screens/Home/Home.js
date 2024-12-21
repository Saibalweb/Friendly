import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconsM from "react-native-vector-icons/MaterialCommunityIcons";
import profileImg from "../../assets/profile.png";
import Story from "./Story";
import Post from "./Post";
import CreatePost from "../../components/CreatePost";
import { colors } from "../../assets/Color";


const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Friendly</Text>
                    {/* <View style={{ flexDirection: "row" }}>
                        <View style={styles.headerIconContainer}>
                            <IconsM name="magnify" size={22} style={{ color: "black" }} />
                        </View>
                        <View style={styles.headerIconContainer}>
                            <IconsM name="facebook-messenger" size={22} style={{ color: "black" }} />
                        </View>
                        <View style={styles.messengerNotification}>
                            <Text style={{ color: "white", fontSize: 15, fontWeight: "900", textAlign: "center" }}>9+</Text>
                        </View>
                    </View> */}
                </View>
                <View style={styles.horizontalLine}></View>
                <CreatePost/>
                <View style={{ height: 10, backgroundColor: "#c1c3c7" }} />
                {/* <Story /> */}
                <Post/>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    headerText: {
        color: colors.primary,
        fontWeight: "800",
        fontSize: 30,
    },
    headerIconContainer: {
        marginHorizontal: 4,
        padding: 5,
        backgroundColor: "#c5ced1",
        borderRadius: 20,
    },
    messengerNotification: {
        width: 25,
        height: 25,
        backgroundColor: "red",
        borderRadius: 50,
        position: "absolute",
        right: -5,
        top: -10,
    },
    profileContent: {
        marginBottom: 12,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center"
    }
    ,
    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
    },
    horizontalLine: {
        borderBottomColor: "gray",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    liveSection: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center",
        paddingHorizontal: 20,
        width: "33%",
        borderRightColor: "gray",
        borderRightWidth: StyleSheet.hairlineWidth,

    }
});
export default Home;