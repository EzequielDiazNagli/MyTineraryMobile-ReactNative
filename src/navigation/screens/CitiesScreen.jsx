import { ScrollView, View, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import citiesActions from "../../redux/actions/citiesActions"
import CitiesCards from '../../components/CitiesCards';
import HeaderCities from "../../components/HeaderCities"

export default function CitiesScreen({navigation}) {
  const dispatch = useDispatch()
  // const [reload, setReload] = useState(false)
  
  useEffect(() => {
  dispatch(citiesActions.getCities())
    // eslint-disable-next-line
  },[])
  const cities = useSelector(store => store.citiesReducer.cities)

  const [text, onChangeText] = useState ("")

  return (
    <ScrollView>
      <HeaderCities/>
        <SafeAreaView>
          <TextInput
            style={style.input}
            onChangeText={onChangeText}
            placeholder="Search"
            keyboardType="text"
          />
        </SafeAreaView>
      <View style={style.background}>
          <CitiesCards input={text} cities={cities} navigation={navigation}/>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  background: {
    backgroundColor: "#2a9d9026",
    margin: 10,
    borderRadius: 15
  },
  input: {
    borderRadius: 5,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})
