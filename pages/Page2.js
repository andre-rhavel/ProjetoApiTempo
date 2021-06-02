import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import axios from 'axios';

import Header from './components/Header';


const Page2 = ({navigation, route}) => {

  
    return (
        <>
        <Header title="Resultado da Busca"/>
        <View style={styles.container}>
          <Text style ={styles.title}>Clima de {route.params.cidade}</Text>
          <Text>Temperatura: {route.params.temperatura}</Text>
          <Text>Velocidade do Vento: {route.params.vento}</Text>
          <Text>Descrição do Tempo: {route.params.descricao}</Text>
          <TouchableOpacity
            style ={styles.button}
            onPress = {() => {navigation.goBack()}}>
            <Text style={styles.buttonText}>
                Voltar
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
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize:30,
      fontWeight: 'bold',
      color: 'black'
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

export default Page2
