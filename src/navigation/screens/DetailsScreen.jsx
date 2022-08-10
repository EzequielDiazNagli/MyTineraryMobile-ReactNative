import { ImageBackground, View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import citiesActions from "../../redux/actions/citiesActions"
import itineraryActions from "../../redux/actions/itineraryActions"
import Itinerary from '../../components/Itinerary';

export default function DetailsScreen({route, navigation}) {
  const {id} = route.params
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(citiesActions.getOneCity(id))
    // eslint-disable-next-line
  },[id])
  const city = useSelector(store => store.citiesReducer.oneCity)

  useEffect(() => {
    dispatch(itineraryActions.findItineraryFromCity(id))
    // eslint-disable-next-line
  },[id])

  const itinerary = useSelector(store => store.itineraryReducer.oneItinerary)

  return (
    <ScrollView>
      <View style={style.headerCities}>
        <ImageBackground source={{uri:(city.image)}}
          resizeMode="cover" style={style.headerImage}>
          <View style={style.headerCitiesText}>
              <Text style={style.text}>{city.name}</Text>
              <Text style={style.textCountry}>{city.country}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={style.background}>
      {itinerary.length > 0 ?
      itinerary.map(iti => {
        return (
          <View>
            <Itinerary iti={iti} navigation={navigation}/>
          </View>
          )
        })
        :
        <View style={style.notResult}>
        <Text style={style.notResultText}>We don't have any itineraries yet for this city.</Text>
      </View>}
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  headerCities: {
      height:200,
  },
  headerImage: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
  },
  headerCitiesText: {
      width: "60%",
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "white",
      backgroundColor: "rgba(0,0,0,.6)",
      padding: 10,
      elevation: 10,
      shadowColor: 'white'
  },
  text: {
      color: "white",
      fontSize: 25,
      textAlign: "center"
  },
  textCountry:{
    color: "white",
    fontSize: 20,
    textAlign: "center"
  },
  background: {
  },
  notResult: {
    marginTop: 30,
    borderRadius: 15,
    alignItems: "center",
  },
notResultText: {
    backgroundColor: "rgba(240,248,255,.8)",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    fontWeight: "bold"
  }
})