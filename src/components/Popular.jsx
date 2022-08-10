import { Text, StyleSheet, View } from "react-native";

const popular = "Popular MyTineraries!"

export default function Popular() {
    return (
        <View style={style.popular}>
            <Text style={style.popularText}>
                {popular}
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    popular: {
        margin:15,
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        backgroundColor: "#2a9d9026"
    },
    popularText: {
        fontSize: 20
    }
})