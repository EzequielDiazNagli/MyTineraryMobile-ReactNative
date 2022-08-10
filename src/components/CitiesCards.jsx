import { Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground, Button } from 'react-native';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import citiesActions from "../redux/actions/citiesActions"
import FlipCard from 'react-native-flip-card'

export default function CitiesCards(props) {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(citiesActions.filterCities(props.input))
        // eslint-disable-next-line
    },[props.input])

    let cityfilter = useSelector(store => store.citiesReducer.filterCity)

    let cities = props.input ? cityfilter : props.cities

return (cities.length > 0 ?
    cities.map(city => {
        return (
            <FlipCard>
                {/* Face Side */}
                    <View style={[style.cards, style.elevation]} key={city._id}>
                        <Image style={style.image} source={{uri:city.image}} />
                        <View style={style.containerName}>
                            <Text style={style.name}>
                                {city.name}
                            </Text>
                        </View>
                    </View>
                {/* Back Side */}
                    <View style={[style.cardsBack, style.elevation]}>
                        <ImageBackground source={{uri: city.image}}
                        resizeMode="cover" style={style.imageBackground}>
                            <View style={style.cardsBackText}>
                                <Text style={style.title}>{city.name}</Text>
                                <Text style={style.description}>{city.description}</Text>
                                <TouchableOpacity onPress={() => props.navigation.navigate(`Details`, {id:city._id})}>
                                    <Text style={style.seeMore}>See More</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
            </FlipCard>
            )})
            :
            <View style={style.background}>
                <View style={style.notResult}>
                    <Text style={style.notResultText}>No results found. Please try again.</Text>
                </View>
            </View>
            
    );
}

const style = StyleSheet.create({
    cards: {
        backgroundColor: "white",
        borderWidth: 10,
        borderColor: "white",
        borderRadius: 15,
        height:310,
        marginHorizontal: 60,
        marginVertical: 20
    },
    cardsBack:{
        borderRadius: 15,
        borderWidth: 10,
        borderColor: "white",
        height:310,
        marginHorizontal: 60,
        marginVertical: 20,
    },
    imageBackground:{
    }, 
    cardsBackText:{
        borderRadius: 5,
        backgroundColor: "rgba(0,0,0,.5)",
        height: "100%",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 25
    },
    description: {
        color: "white",
        textAlign: "center",
        paddingHorizontal: 5,
        fontSize: 15
    },
    seeMore:{
        color: "white",
        fontSize: 25,
        borderWidth: 1,
        borderColor: "white",
        paddingHorizontal: 10,
        backgroundColor: "rgba(255, 255, 255,.3)",
        borderRadius: 5
    },
    image: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderColor: "white",
        height: 250
    },
    containerName: {
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        height: 40,
        borderWidth: 1,
    },
    name: {
        fontSize: 20
    },
    elevation: {
        elevation: 10,
    },
    notResult: {
        height:80,
        justifyContent: "center",
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