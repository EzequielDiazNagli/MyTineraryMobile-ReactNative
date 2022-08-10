import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";

const userActions = {
    signUp: (userData) => {
        return async (dispatch, getState) => {
            const res = await axios.post("https://mytinerary-diaz-backend.herokuapp.com/api/signUp", {userData})
            // console.log(userData);
            // console.log(res);
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
        }
    },
    logIn: (userLogin) => {
        return async (dispatch, getState) => {
        try {
            const res = await axios.post("https://mytinerary-diaz-backend.herokuapp.com/api/logIn", {userLogin})
            if(res.data.success) {
                await AsyncStorage.setItem('token',res.data.response.token)
                dispatch({
                    type: 'user',
                    payload: {
                        user: res.data.response.userData,
                        snackbar: {
                            view: true,
                            message: res.data.message,
                            success: res.data.success
                        }
                    }
                })
                return res
            } else {
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
            }} catch (error) {
                console.log(error);
            }
        }
    },
    signOut: (userState) => {
        // console.log(userState)
        return async (dispatch, getState) => {
            // const res = axios.post("http://localhost:4000/api/signOut",{userOut})
            //console.log(res)
            try {
            await AsyncStorage.removeItem('token')
        } catch(error){
            console.log(error)
        }   
            dispatch({
                type: 'user',
                payload: {
                    user: null,
                    snackbar: {
                        view: true,
                        message: `See you soon ${userState.firstName} ${userState.lastName}`,
                        success: true
                    }
                }
            })
        }
    },
    verifyToken: (token) => {
        return async (dispatch, getState) => {
            await axios.get("https://mytinerary-diaz-backend.herokuapp.com/api/loginToken", {headers: {'Authorization': 'Bearer '+token}} )
            .then(user => {
                if (user.data.success) {
                    dispatch({
                        type: 'user',
                        payload: {user: user.data.response}
                    })
                    dispatch({
                        type: 'message',
                        payload: {
                            view: true,
                            message: user.data.message,
                            success: user.data.success
                        }
                    })
                } else {
                    removeToken = async () => {
                        try{
                            await AsyncStorage.removeItem('token')
                        } catch (error) {
                            console.log(error)
                        }
                    }
                };
            })
            .catch(error => {
                console.log(error.response.status)
                if (error.response.status === 401)
                    dispatch({
                        type: 'message',
                        payload: {
                            view: true,
                            message: "Sesion expired, please, log in again.",
                            success: false
                        }
                    })
                    removeToken = async () => {
                        try{
                            await AsyncStorage.removeItem('token')
                        } catch (error) {
                            console.log(error)
                        }
                }
            })
        }
    }
}

export default userActions