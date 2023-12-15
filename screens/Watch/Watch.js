import { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,Image } from "react-native";
import Slider from "@react-native-community/slider";
import IconsM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconsF from 'react-native-vector-icons/FontAwesome5'
import Video from "react-native-video";
import Orientation from "react-native-orientation-locker";
import thumbImg from '../../assets/photos/hookahbar-img.jpeg'
const { width, height } = Dimensions.get('window');
const source = require('../../assets/Video/hookah-bar.webm');
const Watch = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [showControl, setShowControl] = useState(true);
    const [progress, setProgress] = useState({});
    const [thumbnail, setThumbnail] = useState(true);
    const videRef = useRef();

    // this format is for converting the seconds time input to two digit minutes and two digit second output...
    const formatTominute = seconds => {
        let mins = parseInt(seconds / 60)
            .toString()
            .padStart(2, '0');
        let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    const expandHadler = () => {
        setIsExpanded(prevState => !prevState);
        if(isExpanded){
            Orientation.lockToPortrait();
        }else{
            Orientation.lockToLandscape();
        }
    }
    const muteHandler = () => {
        setIsMuted(prevState => !prevState);
    }
    const playHandler = () => {
        setIsPaused(prevState => !prevState);
        setThumbnail(false);
    }
    const videoBackwardHandler = () => {
        videRef.current.seek(progress.currentTime - 10);
    }
    const videoForwardHandler = () => {
        videRef.current.seek(progress.currentTime + 10);
    }
    const showControlHandler = () => {
        setShowControl(prevState => !prevState);
    }
    // console.log(isExpanded);
    // automatically hides medial controls after cetain seconds
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowControl(false);
        }, 3000)

        return () => { clearTimeout(timeoutId) }
    }, [showControl])

    return (

        <TouchableOpacity style={{ width: width, height:isExpanded?height: height / 3 }} onPress={showControlHandler}>
            {thumbnail && (
                <Image source={thumbImg} style={{width,height:height/3}} />
            )}
            <Video ref={videRef} resizeMode={'contain'} source={source} style={styles.video} controls={false} paused={isPaused} muted={isMuted} onProgress={(e) => { setProgress(e) }} />

            {showControl && <View style={{ position: 'absolute',width,height:height/3,justifyContent:'space-between',backgroundColor:'rgba(0,0,0,0.4)' }}>
                <View style={{height:40,width}}>

                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={videoBackwardHandler} style={{ padding: 20, backgroundColor: "rgba(57, 57, 57,.5)" }}>
                        <IconsF name="backward" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={playHandler} style={{ marginHorizontal: 30, padding: 20, backgroundColor: "rgba(57, 57, 57,.5)" }}>
                        <IconsF name={isPaused ? "play" : "pause"} size={50} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={videoForwardHandler} style={{ padding: 20, backgroundColor: "rgba(57, 57, 57,.5)" }}>
                        <IconsF name="forward" size={25} />
                    </TouchableOpacity>
                </View>

                <View style={styles.mediaBtnContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.txtWhite}>{formatTominute(progress.currentTime)}</Text>
                        <TouchableOpacity>
                            <Slider
                                style={{ width: 250, height: 40, }}
                                minimumValue={0}
                                maximumValue={progress.seekableDuration}
                                minimumTrackTintColor="#FFFFFF"
                                maximumTrackTintColor="#000000"
                                disabled={false}
                                onValueChange={(v) => {
                                    videRef.current.seek(v);
                                }}
                                value={progress.currentTime ? progress.currentTime : 0}
                            />
                        </TouchableOpacity>
                        <Text style={styles.txtWhite}>{formatTominute(progress.seekableDuration)}</Text>

                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={expandHadler} style={styles.mediaBtn}>
                            <IconsM name={isExpanded ? "arrow-expand" : "arrow-collapse"} size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={muteHandler} style={styles.mediaBtn}>
                            <IconsM name={isMuted ? "volume-off" : "volume-high"} size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>}
            {/* <Text>tglsdglsdghio</Text> */}
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    video: {
        flex: 1,
        height,width
    },
    mediaBtnContainer: {
        flexDirection: 'row',
    },
    mediaBtn: {
        marginHorizontal: 5,
    },
    txtWhite:{
        color:'white',
    },
})
export default Watch;