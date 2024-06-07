import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ToastAndroid, Modal, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pagina from "./Pagina";
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:8080/alertas',
});

export default function ToDo(){
    const fetchAlertas = () => api.get('/todos');
    const addAlerta = (alerta) => api.post('/', alerta);
    const deleteAlerta = (id) => api.delete(`/${id}`);
    const updateAlerta = (id, alerta) => api.put(`/${id}`, alerta);
    
    const [alertas, setAlertas] = useState([]);
    const [id, setid] = useState(null);
    const [texto, setTexto] = useState('');
    const [modal, setmodal] = useState(false);
    const [input, setInput] = useState('');
    const [tipoInput, setTipoInput] = useState('');
    const [dataInput, setDataInput] = useState('');

    useEffect(() => {
        loadAlertas();
    }, []);

    const loadAlertas = async () => {
        try {
            const response = await fetchAlertas();
            setAlertas(response.data);
        } catch (error) {
            ToastAndroid.show("Erro ao carregar alertas: " + error.message, ToastAndroid.LONG);
        }
    };

    const handleAddAlerta = async () => {
        if (input.trim() === '' || tipoInput.trim() === '' || dataInput.trim() === '') return;
        try {
            await addAlerta({ tipo: tipoInput, mensagem: input, data: dataInput });
            setInput('');
            setTipoInput('');
            setDataInput('');
            setmodal(false);
            loadAlertas();
        } catch (error) {
            ToastAndroid.show("Erro ao adicionar alerta: " + error.message, ToastAndroid.LONG);
        }
    };

    const handleDeleteAlerta = async (id) => {
        try {
            await deleteAlerta(id);
            loadAlertas();
        } catch (error) {
            ToastAndroid.show("Erro ao deletar alerta: " + error.message, ToastAndroid.LONG);
        }
    };
    
    const handleUpdateAlerta = async () => {
        if (texto.trim() === '') return;
        try {
            await updateAlerta(id, { mensagem: texto });
            setid(null);
            setTexto('');
            loadAlertas();
        } catch (error) {
            ToastAndroid.show("Erro ao atualizar alerta: " + error.message, ToastAndroid.LONG);
        }
    };  

    return(
        <Pagina>
            <View style={styles.container}>
                <Text style={styles.title}>ToDo List</Text>
                <View style={styles.inputContainer}>
                    <TouchableOpacity 
                        style={styles.addButton} 
                        onPress={() => setmodal(true)}
                    >
                        <Icon name="add" size={25} color="white" />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={alertas}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.alertaContainer}>
                            {id === item.id ? (
                                <TextInput
                                    style={styles.textInput}
                                    value={texto}
                                    onChangeText={setTexto}
                                    onSubmitEditing={handleUpdateAlerta}
                                />
                            ) : (
                                <Text style={styles.alertaText}>{item.mensagem}</Text>
                            )}
                            <View style={styles.actionsContainer}>
                                {id === item.id ? (
                                    <TouchableOpacity onPress={handleUpdateAlerta}>
                                        <Icon name="check" size={25} color="green" />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity onPress={() => {
                                        setid(item.id);
                                        setTexto(item.mensagem);
                                    }}>
                                        <Icon name="edit" size={25} color="blue" />
                                    </TouchableOpacity>
                                )}
                                <TouchableOpacity onPress={() => handleDeleteAlerta(item.id)}>
                                    <Icon name="delete" size={25} color="red" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modal}
                >
                    <View style={styles.modalContainer}>
                        <TextInput
                            style={styles.input}
                            value={input}
                            onChangeText={setInput}
                            placeholder="Mensagem do alerta"
                        />
                        <TextInput
                            style={styles.input}
                            value={tipoInput}
                            onChangeText={setTipoInput}
                            placeholder="Tipo do alerta"
                        />
                        <TextInput
                            style={styles.input}
                            value={dataInput}
                            onChangeText={setDataInput}
                            placeholder="Data do alerta"
                        />
                        <Button title="Adicionar" onPress={handleAddAlerta} />
                        <Button title="Fechar" onPress={() => setmodal(false)} />
                    </View>
                </Modal>
            </View>
        </Pagina>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        width:'100%',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    addButton: {
        backgroundColor: '#00796B',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    alertaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#E0F7FA',
        borderColor: '#00796B',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 15,
    },
    alertaText: {
        flex: 1,
        color: '#004D40',
        marginRight: 10,
    },
    actionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    input: {
        backgroundColor: '#E0F7FA',
        borderColor: '#00796B',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        width: '80%',
    },
});
