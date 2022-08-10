import { ImageBackground, Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';


export default function SignUpScreen({navigation}) {
    return (
            <ImageBackground source={{uri:"https://images5.alphacoders.com/935/thumb-1920-935189.jpg"}}
                resizeMode="cover" style={style.headerImage}>
                <View style={style.container}>
                    <Image style={style.logo} source={require("../../assets/logo2.png")}/>
                    <TextInput
                        style={style.input}
                        // onChangeText={onChangeText}
                        placeholder="First Name"
                        keyboardType="text"
                    />
                    <TextInput
                        style={style.input}
                        // onChangeText={onChangeText}
                        placeholder="Last Name"
                        keyboardType="text"
                    />
                    <TextInput
                        style={style.input}
                        // onChangeText={onChangeText}
                        placeholder="Country"
                        keyboardType="text"
                    />
                    <TextInput
                        style={style.input}
                        // onChangeText={onChangeText}
                        placeholder="Email"
                        keyboardType="text"
                    />
                    <TextInput
                        style={style.input}
                        // onChangeText={onChangeText}
                        placeholder="Password"
                        keyboardType="text"
                    />
                    <View style={style.logIn}>
                        <Text style={style.logInText}>Sign Up</Text>
                    </View>
                    <View style={style.signUp}>
                        <Text style={style.account}>Have an account already?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Account")}>
                            <Text style={style.signUpText}>Log In</Text>
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
        marginBottom: 10,
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