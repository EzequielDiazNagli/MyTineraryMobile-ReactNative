import { StatusBar } from "expo-status-bar";
import React from "react";
import {StyleSheet,Text,View,Image,Dimensions,SafeAreaView,Animated} from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import citiesActions from "../redux/actions/citiesActions"

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
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
    return (
    <Animated.Image key={index} source={{ uri: image.image }} style={[ { width: width, height: ALTURA_BACKDROP, opacity },
        StyleSheet.absoluteFillObject, ]} />
    );
    })}
</View>
);
}

export default function Carousel() {
    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(citiesActions.getCities())
      // eslint-disable-next-line
    },[])
    const cities = useSelector(store => store.citiesReducer.cities)

    const scrollX = React.useRef(new Animated.Value(0)).current;
return (
<SafeAreaView style={styles.container}>
    <StatusBar hidden />
    <Backdrop scrollX={scrollX} />
    <Animated.FlatList onScroll={Animated.event( [{ nativeEvent: { contentOffset: { x: scrollX } } }], {
        useNativeDriver: true } )} showsHorizontalScrollIndicator={false} horizontal={true} snapToAlignment="start"
        contentContainerStyle={{
            paddingTop: 200,
            paddingHorizontal: ESPACIO_CONTENEDOR,
        }} snapToInterval={ANCHO_CONTENEDOR} decelerationRate={0} scrollEventThrottle={16} data={cities}
        keyExtractor={(item)=> item.id}
        renderItem={({ item, index }) => {
        const inputRange = [
        (index - 1) * ANCHO_CONTENEDOR,
        index * ANCHO_CONTENEDOR,
        (index + 1) * ANCHO_CONTENEDOR,
        ];

        const scrollY = scrollX.interpolate({
        inputRange,
        outputRange: [0, -50, 0],
        });
        return (
        <View style={{ width: ANCHO_CONTENEDOR }}>
            <Animated.View style={{
                    marginHorizontal: ESPACIO,
                    padding: ESPACIO,
                    borderRadius: 34,
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
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    posterImage: {
        width: "100%",
        height: ANCHO_CONTENEDOR * 1.2,
        resizeMode: "cover",
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
    },
});