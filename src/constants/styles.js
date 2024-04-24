import { StyleSheet } from "react-native";
import { height, width } from "./dimensions.js";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: height,
      width: width,
    },
    containerForm: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 25, 
      borderTopRightRadius: 25, 
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      width: 370,
      height: 300,
      marginBottom: 20,
    },
    hello: {
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: 30,
      color: 'black'
    },
    texto: {
      marginTop: 26,
      marginLeft: 20,
      marginRight: 20,
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
      justifyContent: 'center',
      fontSize: 15,
      color: 'gray'
    },
    botaologin: {
      marginTop: 38,
      backgroundColor: '#F85050',
      borderTopLeftRadius: 50, 
      borderTopRightRadius: 50, 
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      width: 260,
      height: 60,
    },
    textbotao: {
      marginTop: 11,
      marginLeft: 10,
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 25,
      color: 'white'
    },
  });
  