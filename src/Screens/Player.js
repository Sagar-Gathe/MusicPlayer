import { Image, StyleSheet, Text, View , Animated} from "react-native";
import React, { useEffect, useState } from "react";
import BottomNav from "../Components/BottomNav";
import { backgroundColour1 } from "../Styles/Theam1";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
const Player = ({ navigation }) => {
  const  [ isplaying , setisplaying] = useState(false);
  let rotatevalueholder = new Animated.Value(0)
  const startImageRotationFunction = () =>{
    rotatevalueholder.setValue(0);
    Animated.timing(rotatevalueholder,{
      toValue : 1,
      duration : 1000,
      useNativeDriver : false 
    }).start(()=>{ startImageRotationFunction()})
  }

  useEffect(()=>{
    if(isplaying==true){
       startImageRotationFunction()
    }
    else{
      rotatevalueholder.stopAnimation()
      rotatevalueholder.setValue(0)


    }
  },[isplaying])
  
  const rotatedData = rotatevalueholder.interpolate({
    inputRange : [0 ,1],
    outputRange : ['0deg','360deg']
  })
  return (
    <View style={styles.container}>
      <View style={styles.bottomNav}>
        <BottomNav activepage={"player"} navigation={navigation} />
      </View>
      <Animated.Image source={require("../../assets/blue-eyes.jpg")} style={[styles.imgbig, {transform : [{rotate : rotatedData}]}]} />
      <View style={styles.container2}>
        <Text style={styles.text1}>Blue Eyes</Text>
        <Text style={styles.text2}>by : Honey Singh</Text>
      </View>
      <View style={styles.container3}>
        <View style={styles.musiccompletedout}>
          <View style={styles.musiccompletedin}></View>
        </View>
        <View style={styles.timeout}>
          <Text style={styles.time}>00.00</Text>
          <Text style={styles.time}>01.00</Text>
        </View>
      </View>
      <View style={styles.container4}>
      <MaterialCommunityIcons name="skip-previous" size={50} color="white" />
      {isplaying ? <Ionicons name="play-outline" size={50} color="white" onPress={()=>setisplaying(false)}/> : <Feather name="pause" size={50} color="white" onPress={()=> setisplaying(true)}/> }
      <Entypo name="controller-next" size={40} color="white"/>
      </View>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: backgroundColour1,
    width: "100%",
    height: "100%",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100px",
    alignItems: "center",
  },
  imgbig: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginVertical: 20,
  },
  container1: {},
  text1: {
    fontSize: 20,
    color: "white",
    width: 300,
    textAlign: "center",
    alignSelf: "center",
  },
  text2: {
    fontSize: 15,
    color: "grey",
    width: 200,
    textAlign: "center",
    alignSelf: "center",
  },
  container3: {
    width: "80%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  time: {
    fontSize: 15,
    color: "white",
  },
  musiccompletedout: {
    width: "100%",
    height: 5,
    backgroundColor: "grey",
    borderRadius: 5,
  },
  musiccompletedin: {
    width: "70%",
    backgroundColor: "white",
    height: 5,
  },
  timeout: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  container4 : {
    width : "100%",
    alignItems : "center",
    flexDirection : "row",
    justifyContent : "center"
  }
});
