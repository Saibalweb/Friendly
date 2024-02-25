import { View, Text, Image,Dimensions } from "react-native";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const { width, height } = Dimensions.get('window');
const SkeletonLoading = () => {
   return (
      <SkeletonPlaceholder borderRadius={4}>
         <View style={{width}}>
            <View style={{ paddingVertical: 5, paddingHorizontal: 10, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
               <View style={{ flexDirection: 'row' }}>
                  <View style={{
                     width: 50,
                     height: 50,
                     borderRadius: 50,
                     marginRight: 7,
                     backgroundColor: 'red'
                  }}>

                  </View>
                  <View >
                     <View style={{ width: 100, height: 25, backgroundColor: 'green', marginBottom: 5, borderRadius: 5 }}></View>
                     <View style={{ width: 60, height: 20, backgroundColor: 'yellow', borderRadius: 5 }}></View>

                  </View>

               </View>
               <View style={{ width: 50, height: 20 }}>
               </View>
            </View>

            <View style={{marginVertical:10,width}}>
                 <View style={{height:15,marginHorizontal:10,marginBottom:1}}></View>
                 <View style={{height:15,marginHorizontal:10,marginBottom:1}}></View>
                 <View style={{height:15,marginHorizontal:10,marginBottom:1}}></View>
            </View>
            <View style={{width,height:250}}>
            </View>
            <View style={{width,flexDirection:'row',justifyContent:'space-around',marginVertical:5}}>
                  <View style={{width:'20%' ,height:35,marginHorizontal:5,borderColor:'red',borderWidth:2}}></View>
                  <View style={{width:'20%' ,height:35,marginHorizontal:5,borderColor:'red',borderWidth:2}}></View>
                  <View style={{width:'20%' ,height:35,marginHorizontal:5,borderColor:'red',borderWidth:2}}></View>
            </View>
         </View>
       </SkeletonPlaceholder>
   )
}
export default SkeletonLoading;