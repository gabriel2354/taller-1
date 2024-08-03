import React from 'react';
import {TouchableOpacity, SafeAreaView, StyleSheet, TextInput,  Text, View, ImageBackground, } from 'react-native';

const Login = () => {
    



    
  const [text, onChangeText] = React.useState('ingrese usuario');
  const [number, onChangeNumber] = React.useState('');
  const image33 = {uri: 'https://img.freepik.com/foto-gratis/burbuja-aceite-fondo-pantalla-iphone-degradado-fondo-agua_53876-176849.jpg?w=360&t=st=1722711473~exp=1722712073~hmac=ed5a626a12a5782ec6acc4a7b23add91741c038e2757dcd0f2f2314439b005ac'};

  
    



  
  return (
  
    
    <SafeAreaView >
        
        <View style={styles33.container33}>
    <ImageBackground source={image33} resizeMode="cover" style={styles33.image32}>
     
    </ImageBackground>
  </View>

       

       

        <Text style={boton22.container22}>Login
        </Text> 
          

           
        

        
        
      <TextInput
        
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
    
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Ingrese contraseña"
        keyboardType="numeric"
      />

<View >
<TouchableOpacity>
        <Text style={boton.container}>Ingresar</Text>
      </TouchableOpacity>

      </View>
      

   
    </SafeAreaView>
    
    

    
  );
};


const styles = StyleSheet.create({
  input: {
    
    height: 50,
    margin: 12,
    borderWidth:2,
    padding: 10,
    top:+200
   
  },
});

const boton = StyleSheet.create({
   container: {
       top:+250,
       borderWidth:2,
      fontSize:20,
      backgroundColor:'red',
      textAlign:'center'

     
    },
  });

  

  const boton22 = StyleSheet.create({
    container22: {
        fontSize: 100,
          textAlign:'center',
          position:'relative',
          top:+150
        
    }
});

const styles33 = StyleSheet.create({
    container33: {
      flex: 1,
    },
    image32: {
      flex: 1,
      justifyContent: 'center',
    },
    text33: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
  });
  
 

  




    



export default Login;


