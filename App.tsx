import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ContactsProvider } from "./src/context/ContactsContext";
import ContactListScreen from "./src/screens/ContactListScreen";
import AddContactScreen from "./src/screens/AddContactScreen";
import EditContactScreen from "./src/screens/EditContactScreen";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ContactsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ContactList">
          <Stack.Screen
            name="ContactList"
            component={ContactListScreen}
            options={{ title: "Contacts" }}
          />
           <Stack.Screen
            name="AddContact"
            component={AddContactScreen}
            options={{ title: "Add Contact" }}
          />
          <Stack.Screen
            name="EditContact"
            component={EditContactScreen}
            options={{ title: "Edit Contact" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContactsProvider>
  );
};

export default App;
