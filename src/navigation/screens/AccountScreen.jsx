import { ImageBackground, Text, View, StyleSheet,TextInput, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from "../../redux/actions/userActions"

export default function AccountScreen({navigation}) {

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState ("")

    const handleSubmit = async () => {

        const userLogin = {
            email: email,
            password: password,
            from: "formSignUp"
        }
        const res = await dispatch(userActions.logIn(userLogin));
        console.log(res.data.message)
    }

    return (
            <ImageBackground source={{uri:"https://images5.alphacoders.com/935/thumb-1920-935189.jpg"}}
                resizeMode="cover" style={style.headerImage}>
                <View style={style.container}>
                    <Image style={style.logo} source={require("../../assets/logo2.png")}/>
                    <TextInput
                        style={style.input}
                        onChangeText={(email) => setEmail(email)}
                        placeholder="Email"
                        keyboardType="text"
                    />
                    <TextInput
                        style={style.input}
                        onChangeText={(password) => setPassword(password)}
                        placeholder="Password"
                        secureTextEntry={true}
                        keyboardType="text"
                    />
                    <TouchableOpacity onPress={() => { handleSubmit(), navigation.navigate("Home")}}>
                        <View style={style.logIn}>
                            <Text style={style.logInText}>Log In</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={style.signUp}>
                        <Text style={style.account}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
                            <Text style={style.signUpText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
    );
}

const style = StyleSheet.create({
    signUpText:{
        fontSize: 16,
        fontStyle: "italic",
        textDecorationLine: "underline",
        fontWeight: "bold",
    },
    account:{
        marginHorizontal: 10,
    },
    signUp:{
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,
    },
    logInText:{
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 15
    },
    logIn:{
        borderRadius: 5,
        borderWidth:1,
        backgroundColor: "#427b92",
        padding: 10,
        width: 120
    },
    input: {
        borderRadius: 5,
        backgroundColor: "white",
        height: 40,
        marginBottom: 20,
        width: 300,
        borderWidth: 1,
        padding: 10,
    },
    headerImage: {
        flex: 1,
    },
    container:{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})