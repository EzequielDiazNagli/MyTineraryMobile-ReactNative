import { Text, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react-native";
import { AppBar, HStack, IconButton, Avatar} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <AppBar 
    style={style.appBar}
    // style={{backgroundColor: "#264653", paddingTop: 30}}
    title="My Tinerary"
    // subtitle="Lorem ipsum"
    centerTitle={true}
    leading={props => (
      <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
    )}
    trailing={props => (
      <IconButton
        icon={props => <Avatar icon={props => <Icon name="account" {...props} />} color="white" size={30} />}
        {...props}
      />
    )}
  />
);

const style = StyleSheet.create({
  appBar: {
    backgroundColor: "#264653",
    paddingTop: 30,
    
  }
})

export default App;