import React from 'react';
import { StatusBar } from 'expo-status-bar';
import mainReducer from "./src/redux/reducers/mainReducer";
import MainContainer from './src/navigation/MainContainer';
// import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {configureStore as createStore} from "@reduxjs/toolkit";

const reduxStore = createStore({reducer: mainReducer})

{/* <StatusBar style="auto" /> */}

export default function App() {
  return (
    <Provider store={reduxStore}>
        <MainContainer/>
    </Provider>
  );
}

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//   }
// })