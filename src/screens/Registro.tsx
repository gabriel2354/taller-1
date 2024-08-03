import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const Registro= () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (

    
    <SafeAreaView>

            <Text style={texto.principal}
                >Iniciar Proceso De Registro
            </Text>
        
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="nombre"
        value={text}
      />
      

<TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="apellido"
        value={text}
        
        
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="direccion"
        value={text}
        
       
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="correo electronico"
        value={text}
        
        
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="numero de telefono"
        value={number}
        /> 
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="contraseña"
        value={number}
        /> 
   <View >
<TouchableOpacity  >
        <Text style={boton.container}>Registrarse</Text>
      </TouchableOpacity>

      </View>

    </SafeAreaView>

    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
const texto = StyleSheet.create({
    principal: {
      textAlign:'center',
      fontSize:40

    },
  });
  const boton = StyleSheet.create({
    container: {
        top:+20,
        borderWidth:2,
       fontSize:20,
       backgroundColor:'red',
       textAlign:'center'
 
      
     },
   });

export default Registro;