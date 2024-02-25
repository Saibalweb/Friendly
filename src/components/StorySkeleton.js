import { View, Text } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const StorySkeleton = () => {
    return (
        <SkeletonPlaceholder>
            <View style={{
                marginRight: 7,
                height: 170,
                width: 100,
                borderRadius: 10,
            }}>

            </View>
        </SkeletonPlaceholder>

    )
}
export default StorySkeleton;