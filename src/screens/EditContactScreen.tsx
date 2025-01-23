import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { ContactsContext , Contact } from '../context/ContactsContext';

const EditContactScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { contact } = route.params;
  const { updateContact, deleteContact } = useContext(ContactsContext)!;

  const [name, setName] = useState(contact.name);
  const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);
  const [city, setCity] = useState(contact.city);

  const handleSave = () => {
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
    updateContact({ id: contact.id, name, phoneNumber, city });
    navigation.goBack();
  };

  const handleDelete = () => {
    Alert.alert('Confirm', 'Are you sure you want to delete this contact?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          deleteContact(contact.id);
          navigation.goBack();
        },
      },
    ]);
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
      <Button title="Save" onPress={handleSave} />
      <Button title="Delete" onPress={handleDelete} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 16, borderRadius: 4 },
});

export default EditContactScreen;
