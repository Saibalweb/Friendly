import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity,ScrollView} from "react-native";
import IconsM from "react-native-vector-icons/MaterialCommunityIcons"
import NotificationItem from "./NotificationItem";
const Notification = () => {
    return (
        <SafeAreaView style={{}}>
            <ScrollView>

                <View style={styles.menuHeader}>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 25 }}>Notification</Text>
                    <TouchableOpacity>

                        <View style={styles.headerIconContainer}>
                            <IconsM name="magnify" size={22} style={{ color: "black" }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    menuHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginVertical: 17,
    },
    headerIconContainer: {
        marginHorizontal: 4,
        padding: 5,
        backgroundColor: "#c5ced1",
        borderRadius: 20,
    },
})
export default Notification;