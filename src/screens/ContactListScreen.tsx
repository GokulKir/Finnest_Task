

import React, { useContext, useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import ContactCard from '../components/ContactCard';
import { ContactsContext , Contact } from '../context/ContactsContext';

const ContactListScreen = ({ navigation }: { navigation: any }) => {
  const { contacts } = useContext(ContactsContext)!;
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phoneNumber.includes(searchQuery)
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by name or phone number"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredContacts.sort((a, b) => a.name.localeCompare(b.name))}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactCard
            contact={item}
            onEdit={() => navigation.navigate('EditContact', { contact: item })}
          />
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddContact')}
      >
        <Text style={styles.addButtonText}>Add Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  searchBar: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 16, borderRadius: 4 },
  addButton: { backgroundColor: '#007bff', padding: 12, borderRadius: 4, alignItems: 'center', marginTop: 16 },
  addButtonText: { color: '#fff', fontSize: 16 },
});

export default ContactListScreen;


