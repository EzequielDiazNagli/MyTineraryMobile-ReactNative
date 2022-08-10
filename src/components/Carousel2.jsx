import { StatusBar } from "expo-status-bar";
import React from "react";
import {StyleSheet,Text,View,Image,Dimensions,SafeAreaView,Animated} from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import citiesActions from "../redux/actions/citiesActions"

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 0.92;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 4;
const ESPACIO = 7;
const ALTURA_BACKDROP = height * 0.5;

function Backdrop({ scrollX }) {
    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(citiesActions.getCities())
      // eslint-disable-next-line
    },[])
    const cities = useSelector(store => store.citiesReducer.cities)
return (
<View style={[ { position: "absolute" , height: ALTURA_BACKDROP, top: 0, width: width, }, StyleSheet.absoluteFillObject,
    ]}>
    {cities.map((image, index) => {
    const inputRange = [
    (index - 1) * ANCHO_CONTENEDOR,
    index * ANCHO_CONTENEDOR,
    (index + 1) * ANCHO_CONTENEDOR,
    ];

    const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
    });
    })}
</View>
);
}

export default function Carousel({iti}) {
    // const dispatch = useDispatch()
    // useEffect(() => {
    // dispatch(citiesActions.getCities())
    //   // eslint-disable-next-line
    // },[])
    // const cities = useSelector(store => store.citiesReducer.cities)

    const scrollX = React.useRef(new Animated.Value(0)).current;
return (
<SafeAreaView style={styles.container}>
    <StatusBar hidden />
    <Backdrop scrollX={scrollX} />
    <Animated.FlatList onScroll={Animated.event( [{ nativeEvent: { contentOffset: { x: scrollX } } }], {
        useNativeDriver: true } )} showsHorizontalScrollIndicator={false} horizontal={true} snapToAlignment="start"
        contentContainerStyle={{
            paddingTop: 10,
            paddingBottom: 10,
            paddingHorizontal: ESPACIO_CONTENEDOR,
        }} snapToInterval={ANCHO_CONTENEDOR} decelerationRate={0} scrollEventThrottle={16} data={iti.activities}
        keyExtractor={(item)=> item.id}
        renderItem={({ item, index }) => {
        const inputRange = [
        (index - 1) * ANCHO_CONTENEDOR,
        index * ANCHO_CONTENEDOR,
        (index + 1) * ANCHO_CONTENEDOR,
        ];

        const scrollY = scrollX.interpolate({
        inputRange,
        outputRange: [0, 0, 0],
        });
        return (
        <View style={{ width: ANCHO_CONTENEDOR }}>
            <Animated.View style={{
                    marginHorizontal: ESPACIO,
                    padding: ESPACIO,
                    borderRadius: 0,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    transform: [{ translateY: scrollY }],
                }}>
                <Image source={{ uri: item.image }} style={styles.posterImage} />
                <Text style={{ fontWeight: "bold", fontSize: 26 }}>
                    {" "}
                    {item.name}
                </Text>
            </Animated.View>
        </View>
        );
        }}
        />
</SafeAreaView>
);
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(237, 235, 235, 0.5)",
        flex: 1,
        justifyContent: "center",
    },
    posterImage: {
        width: "100%",
        height: ANCHO_CONTENEDOR * 0.6,
        resizeMode: "cover",
        borderRadius: 0,
        marginRight: 0,
        marginBottom: 10,
    },
});