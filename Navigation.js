import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home/Home";
import Notification from "./src/screens/Notification/Notification";
import Watch from "./src/screens/Watch/Watch";
import Menu from "./src/screens/Menu/Menu";
import Group from "./src/screens/Group";
import IconsM from "react-native-vector-icons/MaterialCommunityIcons";
import PostContent from "./src/screens/Home/PostContent";

// Stack Navigations
const HomeStack = createNativeStackNavigator();

const HomeGroup =()=>{
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <HomeStack.Screen name="PostContent" component={PostContent}/>
        </HomeStack.Navigator>
    )
}

//Tab Bottom
const Tab =createBottomTabNavigator();
const TabGroup =()=>{
    return(
        <Tab.Navigator
            screenOptions={({route,navigation})=>({
                tabBarIcon:({color,focused,size})=>{
                    let iconName;
                    const iconSize = 30;
                    if(route.name==="HomeGroup"){
                        iconName=focused?"home":"home-outline";
                    }
                    if(route.name==="Watch"){
                        iconName="youtube-tv";
                    }
                    if(route.name==="Group"){
                        iconName=focused?"account-group":"account-group-outline";
                    }
                    if(route.name==="Notification"){
                        iconName=focused?"bell":"bell-outline";
                    }
                    if(route.name==="Menu"){
                        iconName="menu";
                    }

                    return<IconsM name={iconName} size={iconSize} color={color}/>
                },
                tabBarActiveTintColor:"#4267b2",
                tabBarInactiveTintColor:"gray",
                tabBarShowLabel:false,
                headerShown:false,
            })}
        >
            <Tab.Screen name="HomeGroup" component={HomeGroup} />
            <Tab.Screen name="Watch" component={Watch}/>
            <Tab.Screen name="Group" component={Group}/>
            <Tab.Screen name="Notification" component={Notification}/>
            <Tab.Screen name="Menu" component={Menu}/>
        </Tab.Navigator>
    )
}

const Navigation = ()=>{
    return(
        <NavigationContainer>
           <TabGroup/>
        </NavigationContainer>
    )
}
export default Navigation;