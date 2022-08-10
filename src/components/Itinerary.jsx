import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Avatar } from "@react-native-material/core";

export default function Itinerary({iti, navigation}) {
  return (
        <TouchableOpacity onPress={() => navigation.navigate(`Activities`, {iti})}>
          <View style={style.itinerary}>
            <View style={style.itineraryName}>
              <Text style={style.itineraryNameText}>{iti.name}</Text>
            </View>
            <View style={style.itineraryInfo}>
              <View style={style.itineraryUser}>
                <Avatar image={{ uri: iti.userImage }} />
                <Text style={style.itineraryUserName}>{iti.user}</Text>
              </View>
              <View style={style.itineraryPrice}>
                <Text>Price: {iti.price}</Text>
                <Text>Duration: {iti.duration}</Text>
              </View>
              <View style={style.itineraryHash}>
                <Text>#{iti.hashtags[0]}</Text>
                <Text>#{iti.hashtags[1]}</Text>
                <Text>#{iti.hashtags[2]}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )
}

const style = StyleSheet.create({
  itinerary: {
    elevation: 4,
    backgroundColor: "white",
    height: 130,
    margin: 15,
    borderRadius: 15
  },
  itineraryName: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  itineraryNameText:{
    fontSize: 18,
    textAlign: "center"
  },
  itineraryInfo:{
    flexDirection: "row",
    height: "80%",
    justifyContent: "center"
  },
  itineraryUser: {
    height: "100%",
    width: "33%",
    alignItems: "center",
  },
  itineraryUserName:{
    marginHorizontal: 5,
    textAlign: "center"
  },
  itineraryPrice:{
    height: "100%",
    width: "33%",
    justifyContent: "space-around",
    alignItems: "center"
  },
  itineraryHash:{
    height: "100%",
    width: "33%",
    justifyContent: "space-around",
    alignItems: "center"
  }
})