import axios from 'axios';
import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import Header from './components/Header';

const Home = ({navigation}) => {

  const[cidade, setCidade] = React.useState('');
  const buscar = () => {
      //pegar a cidade e juntar ao endereço do GoWeather
      const url = `https://goweather.herokuapp.com/weather/${cidade}`
      //chamar o GoWeather através do axios
      axios.get(url).then((res) => {
      //tratar os dados que vieram do GoWeather
      const clima = {
          temperatura: res.data.temperature,
          vento: res.data.wind,
          descricao: res.data.description,
          cidade: cidade,
      };
      //Mandar para a próxima página
      navigation.navigate('Page2', clima);
      });
  }

    return (
        <>
      <Header title="Api de Clima"/>
      <View style={styles.container}>
        <Text style={styles.title}>Informe a Cidade</Text>
        <TouchableOpacity
            style ={styles.button}
            onPress = {() => {buscar()}}>
            <TextInput 
            onChangeText = {(texto) => setCidade(texto)}
            style={styles.input}
            />
            <Text style={styles.buttonText}>
                Verificar o Clima
            </Text>

        </TouchableOpacity>
        
      </View>

    </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#87CEEB',
    },
    title: {
      textAlign:'center',
      fontSize:25,
      fontWeight: 'bold',
      color: 'white',
      paddingTop: 15,
    },
    input:{
      backgroundColor: '#121212',
      borderRadius: 10,
      margin: 15,
      padding: 15,
      color: 'white',
      fontSize: 20
    },
    button:{
      justifyContent: 'center',
      margin: 15,
      backgroundColor: 'black',
    },
    buttonText:{
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
      padding: 15
    }
    
  });

export default Home
