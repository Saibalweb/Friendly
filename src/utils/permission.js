import {PermissionsAndroid} from 'react-native';
const takeMediaPermission = async () => {
  try {
    const isGranted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
    );
    if(isGranted) return true;
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
    );
    return granted;
  } catch (err) {
    console.warn(err);
  }
};
export {takeMediaPermission};
