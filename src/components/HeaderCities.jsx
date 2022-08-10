import { ImageBackground, View, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
return (
    <View style={style.headerCities}>
        <ImageBackground source={{uri:("https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")}}
        resizeMode="cover" style={style.headerImage}>
            <View style={style.headerCitiesText}>
                <Text style={style.text}>Find New Adventures!</Text>
            </View>
        </ImageBackground>
    </View>
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
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "white",
        backgroundColor: "rgba(0,0,0,.5)",
        padding: 10,
        elevation: 10,
        shadowColor: 'white'
    },
    text: {
        color: "white",
        fontSize: 25,
        textAlign: "center"
    }
})

