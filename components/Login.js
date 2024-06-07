import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pagina from './Pagina';
import axios from 'axios';

const api = axios.create({
  baseURL: "http://10.0.2.2:8080"
});

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await api.post('/user/usuario', { email, senha });
      if (response.status === 200) {
        navigation.navigate('Infos');
      } else {
        alert('Email ou senha incorreto!');
      }
    } catch (error) {
      alert('Erro ao fazer login: ' + error.message);
    }
  };

  return (
    <Pagina footer={true}>
      <TextInput
        placeholder="E-mail"
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
          placeholder="Senha"
          style={[styles.textInput]}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Icon
            name={showPassword ? 'visibility' : 'visibility-off'}
            size={25}
            color="#00796B"
          />
        </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
        <TouchableOpacity style={styles.registerButton} onPress={() => {
          navigation.navigate('Registro');
        }}>
          <Text style={styles.registerButtonText}>Registrar</Text>
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
    borderColor: '#00796B',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    width: '80%',
    marginVertical: 10,
  },
  eyeIcon: {
    paddingHorizontal: 10,
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
