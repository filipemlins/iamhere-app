import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import {styles} from './styles';
import { Participant } from '../../components/Participant';
import React, {useState} from 'react'
import {logDebug} from '../../utils/logDebug';
export function Home() {

  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')
  
  function handleAddParticipantAdd() {

  
    if (participants.includes(participantName)) {
      return Alert.alert('Participante existe','Já existe um participante cadastrado com este nome');
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleRemoveParticipant(name: string) {

    return Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(prevState => prevState.filter(participant => participant !== name));
          Alert.alert('Removido', `O participante ${name} foi removido com sucesso`);
        }
      },
    
    ]);
  }



  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022.</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName} />
        <TouchableOpacity style={styles.button} onPress={handleAddParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map((participant, index) => (
            <Participant key={index} name={participant} onRemove={() => handleRemoveParticipant(participant)}/>
          ))
        
        }
      </ScrollView> */}
      
      <FlatList
        data={participants}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Participant name={item} onRemove={() => handleRemoveParticipant(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.listEmptyText}>Nenhum participante cadastrado</Text>}
      />


    </View>
  );
}
