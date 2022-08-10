import { Text, StyleSheet, View } from "react-native";
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const title = "MyTineraries"

export default function Footer() {
    return (
        <View style={style.footer}>
            <View style={style.social}>
                <IconButton icon={props => <Icon name="instagram" {...props} color="white" />} />
                <IconButton icon={props => <Icon name="facebook" {...props} color="white" />} />
                <IconButton icon={props => <Icon name="whatsapp" {...props} color="white" />} />
            </View>
            <View>
                <Text style={style.title}>{title}</Text>
            </View>
            <View style={style.appBar}>
                <Text style={style.menu}>Menu</Text>
                <Text style={style.menu}>Cities</Text>
            </View>
            <View style={style.social}>
                <IconButton icon={props => <Icon name="phone" {...props} color="white" />} />
                <IconButton icon={props => <Icon name="email" {...props} color="white" />} />
                <IconButton icon={props => <Icon name="map" {...props} color="white" />} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    footer: {
        justifyContent: "center",
        alignItems: "center",
        minHeight: 100,
        backgroundColor: "#264653"
    },
    title: {
        marginTop: 15,
        fontSize: 30,
        color: "white",
        fontWeight: "bold"
    },
    appBar: {
        flexDirection: "row",
        marginTop: 5,
        marginBottom: 15
    },
    menu: {
        color: "white",
        fontSize: 20,
        marginHorizontal: 10
    },
    social: {
        flexDirection: "row",
        color: "white"
    }
})