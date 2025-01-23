

import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { ContactsContext } from '../context/ContactsContext';
import 'react-native-get-random-values'; // Add this import at the top of your file
import { v4 as uuidv4 } from 'uuid';

const AddContactScreen = ({ navigation }: { navigation: any }) => {
  const { addContact } = useContext(ContactsContext)!;
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');

  const handleAddContact = () => {
    if (!name || !phoneNumber) {
      Alert.alert('Error', 'Name and phone number are required.');
      return;
    }
    if (!/^\d{10,}$/.test(phoneNumber)) {
      Alert.alert('Error', 'Phone number must be at least 10 digits.');
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      Alert.alert('Error', 'Name must contain only alphabets and spaces.');
      return;
    }
    addContact({ id: uuidv4(), name, phoneNumber, city });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput style={styles.input} placeholder="City" value={city} onChangeText={setCity} />
      <Button title="Add Contact" onPress={handleAddContact} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 16, borderRadius: 4 },
});

export default AddContactScreen;



