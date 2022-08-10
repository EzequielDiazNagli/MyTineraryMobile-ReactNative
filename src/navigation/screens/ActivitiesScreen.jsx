import { ScrollView, View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Carousel2 from "../../components/Carousel2"
import { Avatar } from "@react-native-material/core";

export default function ActivitiesScreen({route, navigation}) {
    const {iti} = route.params
return (
    <ScrollView style={style.scroll}>
        <View style={style.title}>
            <Text style={style.titleName}>
                {iti.name}
            </Text>
        </View>
        <Carousel2 iti={iti}/>
        <View style={style.title}>
            <Text style={style.titleName}>
                Comments
            </Text>
        </View>
        {iti.comments.map(comment => {
            return(
                <View style={style.comments}>
                    <View style={style.comment}>
                        <View style={style.user}>
                            <Avatar image={{ uri: comment.userId.photo }} />
                        </View>
                        <View style={style.seccion}>
                            <View style={style.name}>
                                <Text>{comment.userId.firstName} {comment.userId.lastName}</Text>
                            </View>
                            <View style={style.commentUser}>
                                <Text>{comment.comment}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )
        })}
        <View style={style.login}>
            <View style={style.pleaseLogIn}>
                <Text style={style.pleaseLogInText}>Please, login to leave a comment</Text>
            </View>
            <View style={style.ctaLogIn}>
            <TouchableOpacity onPress={() => navigation.navigate("Account")}>
                <Text style={style.ctaBtn}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
                <Text style={style.ctaBtn}>Sign Up</Text>
            </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
);
}

const style = StyleSheet.create({
    scroll:{
        backgroundColor: "white"
    },
    pleaseLogIn:{
        alignItems: "center",
        justifyContent: "center",
        height: "50%",
        fontWeight: "bold"
    },
    pleaseLogInText:{
        fontWeight: "bold"
    },
    ctaLogIn:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "50%"
    },
    ctaBtn:{
        marginHorizontal: 10,
        color: "white",
        borderWidth: 1,
        paddingVertical: 2,
        paddingHorizontal: 10,
        backgroundColor: "#427b92",
        borderRadius: 5,
        fontWeight: "bold"
    },
    login:{
        marginBottom: 5,
        backgroundColor: "white",
        height: 60,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: "rgba(94, 94, 94, 0.2)",
        borderRadius: 5,
    },
    title: {
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    titleName: {
        textAlign: "center",
        fontSize: 30
    },
    comments: {
        backgroundColor: "white",
        height: 75
    },
    comment:{
        height: 70,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: "rgba(94, 94, 94, 0.2)",
        borderRadius: 5,
        flexDirection: "row"
    },
    user:{
        height: "100%",
        width: "20%",
        alignItems: "center",
        paddingTop: 5
    },
    seccion: {
        width: "80%"
    },
    name: {
        height: "35%",
        justifyContent: "center",
        paddingLeft: 10
    },
    commentUser:{
        paddingLeft: 10,
        height: "65%"
    }
})