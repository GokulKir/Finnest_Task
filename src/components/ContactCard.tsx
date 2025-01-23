import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Contact } from '../context/ContactsContext';

interface ContactCardProps {
  contact: Contact;
  onEdit: () => void;
}

const ContactCard = ({ contact, onEdit }: ContactCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{contact.name}</Text>
      <Text>{contact.phoneNumber}</Text>
      {contact.city && <Text>{contact.city}</Text>}
      <TouchableOpacity onPress={onEdit} style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { padding: 16, borderWidth: 1, borderColor: '#ccc', borderRadius: 4, marginBottom: 8 },
  name: { fontWeight: 'bold', fontSize: 16 },
  editButton: { marginTop: 8, backgroundColor: '#007bff', padding: 8, borderRadius: 4, alignItems: 'center' },
  editButtonText: { color: '#fff' },
});

export default ContactCard;
