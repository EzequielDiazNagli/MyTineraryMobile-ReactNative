import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const title = "MyTinerary"
const subtitle = "Find your perfect trip, designed by insiders who know and love their cities!"
const cta = "Chose your adventure!"

export default function Welcome({navigation}) {
    return (
        <View style={style.welcome}>
            <Text style={style.title}>
                {title}
            </Text>
            <Text style={style.subtitle}>
                {subtitle}
            </Text>
            <TouchableOpacity style={style.cta}
            onPress={() => navigation.navigate("Cities")}>
                <Text style={style.ctaText}>{cta}</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    welcome:{
    },
    title: {
        marginTop: 70,
        fontSize: 60,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    subtitle: {
        marginTop: 70,
        marginBottom: 70,
        color: "white",
        fontSize: 25,
        fontWeight: "700",
        padding: 10,
        textAlign: "center",
        borderWidth: 2,
        borderColor: "white",
        marginHorizontal: 30,
    },
    cta: {
        marginHorizontal: 30,
        height: 70,
        backgroundColor: "#427b92",
        justifyContent: "center",
        borderRadius: 5,
        borderColor: "white",
        borderWidth: 1
    },
    ctaText: {
        textAlign: "center",
        color: "white",
        fontWeight: "500",
        fontSize: 20
    }
})

