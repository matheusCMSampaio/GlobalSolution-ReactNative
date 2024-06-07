import { StyleSheet, TextInput, View, TouchableOpacity, Text, ToastAndroid } from 'react-native';
import Pagina from './Pagina';
import axios from 'axios';
import { useState } from 'react';


const api = axios.create({
  baseURL: "http://10.0.2.2:8080"
});

export default function Registro({navigation}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("");

    const salvar = async (obj)=> {
        api.post('/user', obj)
        .then(()=>{
            ToastAndroid.show("Dados salvos", ToastAndroid.LONG);
            navigation.navigate('Home')
        })
        .catch((err) =>{
            ToastAndroid.show("Erro ao salvar "+err, ToastAndroid.LONG)
        })
    }
  return (
    <Pagina footer={true}>
      <TextInput placeholder="Nome" style={styles.textInput} value={nome} onChangeText={setNome}/>
      <TextInput placeholder="E-mail" style={styles.textInput} value={email} onChangeText={setEmail}/>
      <TextInput placeholder="Senha" secureTextEntry style={styles.textInput} value={senha} onChangeText={setSenha}/>
      <TextInput placeholder="Tipo" style={styles.textInput} value={tipo} onChangeText={setTipo}/>
      <TouchableOpacity style={styles.button} onPress={()=>{
        const obj = {'nome':nome, 'email':email, 'senha':senha, 'tipo':tipo}
        salvar(obj)
      }}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
        <TouchableOpacity style={styles.registerButton} onPress={() => {
          navigation.navigate('Home');
        }}>
          <Text style={styles.registerButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </Pagina>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#E0F7FA', 
    borderColor: '#00796B', 
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    width: '80%',
    marginVertical: 10,
    color: '#004D40', 
  },
  button: {
    backgroundColor: '#00796B',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#E0F7FA', 
    fontSize: 16,
  },
  registerContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  registerButton: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  registerButtonText: {
    color: '#00796B', 
    fontSize: 16,
  },
});
