import { StyleSheet, Text, View } from "react-native";
import React from "react";
//icon import
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
  backgroundColour1,
  backgroundColour2,
  primaryColor,
} from "../Styles/Theam1";
const BottomNav = ({ activepage , navigation }) => {
  console.log("---------> ", activepage);
  return (
    <View style={styles.conatiner}>
      {activepage == "allmusic" ? (
        <Entypo
          name="folder-music"
          size={24}
          color="black"
          style={styles.iconactive}
        />
      ) : (
        <Entypo
          name="folder-music"
          size={24}
          color="black"
          style={styles.icon}
          onPress={()=> navigation.navigate("allmusic")}
        />
      )}
      {activepage == "player" ? (
        <FontAwesome6
          name="headphones"
          size={24}
          color="black"
          style={styles.iconactive}
        />
      ) : (
        <FontAwesome6
          name="headphones"
          size={24}
          color="black"
          style={styles.icon}
          onPress={()=> navigation.navigate("player")}
        />
      )}

  {activepage == "allplaylist" ? (
        <MaterialIcons
          name="playlist-play"
          size={24}
          color="black"
          style={styles.iconactive}
        />
      ) : (
        <MaterialIcons
          name="playlist-play"
          size={24}
          color="black"
          style={styles.icon}
          onPress={()=> navigation.navigate("allplaylist")}
        />
      )}

     
     
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  conatiner: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    backgroundColor: backgroundColour2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },
  iconactive: {
    color: primaryColor,
    backgroundColor: "blue",
    borderRadius: 50,
    padding: 10,
    bottom: 0,
    
  },
  icon: {
    color: primaryColor,
  },
});
