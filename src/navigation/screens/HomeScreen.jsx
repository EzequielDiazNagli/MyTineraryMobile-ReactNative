import { ImageBackground, ScrollView, View, StyleSheet } from 'react-native';
import AppBar from '../../components/AppBar';
import Welcome from '../../components/Welcome';
import Popular from '../../components/Popular';
import Carousel from "../../components/Carousel"

export default function HomeScreen({navigation}) {
  return (
    <ScrollView>
      <View style={{height:700}}>
        <ImageBackground source={require("../../assets/asd.jpg")} resizeMode="cover" style={style.image}>
          <Welcome navigation={navigation}/>
        </ImageBackground>
      </View>
      <Popular/>
      <Carousel/>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  }
})