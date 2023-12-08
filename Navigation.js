import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home/Home";
import Notification from "./screens/Notification/Notification";
import Watch from "./screens/Watch/Watch";
import Menu from "./screens/Menu/Menu";
import Group from "./screens/Group";
import IconsM from "react-native-vector-icons/MaterialCommunityIcons";

//Tab Bottom
const Tab =createBottomTabNavigator();
const TabGroup =()=>{
    return(
        <Tab.Navigator
            screenOptions={({route,navigation})=>({
                tabBarIcon:({color,focused,size})=>{
                    let iconName;
                    const iconSize = 30;
                    if(route.name==="Home"){
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
            <Tab.Screen name="Home" component={Home} />
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