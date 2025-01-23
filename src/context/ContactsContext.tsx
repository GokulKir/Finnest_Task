import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
  city?: string;
}

interface ContactsContextType {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  updateContact: (updatedContact: Contact) => void;
  deleteContact: (id: string) => void;
}

export const ContactsContext = createContext<ContactsContextType | undefined>(undefined);

export const ContactsProvider = ({ children }: { children: ReactNode }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const loadContacts = async () => {
      const storedContacts = await AsyncStorage.getItem('contacts');
      if (storedContacts) setContacts(JSON.parse(storedContacts));
    };
    loadContacts();
  }, []);

  const saveContacts = async (newContacts: Contact[]) => {
    setContacts(newContacts);
    await AsyncStorage.setItem('contacts', JSON.stringify(newContacts));
  };

  const addContact = (contact: Contact) => {
    const newContacts = [...contacts, contact];
    saveContacts(newContacts);
  };

  const updateContact = (updatedContact: Contact) => {
    const newContacts = contacts.map((contact) => (contact.id === updatedContact.id ? updatedContact : contact));
    saveContacts(newContacts);
  };

  const deleteContact = (id: string) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    saveContacts(newContacts);
  };

  return (
    <ContactsContext.Provider value={{ contacts, addContact, updateContact, deleteContact }}>
      {children}
    </ContactsContext.Provider>
  );
};
