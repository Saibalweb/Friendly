import { View, Tex, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const NotificationSkeleton = () => {
    return (
        <SkeletonPlaceholder>

            <View style={{width,paddingHorizontal:10,paddingVertical:10,flexDirection:'row',alignItems:'center'}}>
                <View style={{
                    width: 70,
                    height: 70,
                    borderRadius: 50,
                    marginRight: 10,
                }}>
                </View>
                <View style={{width:'70%'}}>
                    <View style={{height:10,backgroundColor:'red',marginBottom:4}}></View>
                    <View style={{height:10,backgroundColor:'red',marginBottom:4}}></View>
                    <View style={{height:10,backgroundColor:'red',marginBottom:4}}></View>
                </View>
                <View style={{marginLeft:7,width:20,height:7}}>

                </View>
            </View>
         </SkeletonPlaceholder>

    )
}
export default NotificationSkeleton;