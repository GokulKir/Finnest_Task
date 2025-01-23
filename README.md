Task Project

Project Description

This project is a React Native phone number directory application that allows users to manage their contacts efficiently. The app features functionality to add, view, search, edit, and delete contacts while ensuring data persistence using local storage. It is compatible with both Android and iOS platforms.

Features

1. Add Contacts

Users can add a new contact with the following details:

Name (Required): Accepts only alphabets and spaces.

Phone Number (Required): Must be numeric and at least 10 digits long.

City (Optional).

Input validation is implemented for accurate data entry.

2. View Contacts

Displays a scrollable list of saved contacts.

Contact cards show:

Name

Phone Number

City (if provided).

Contacts are sorted alphabetically by name.

3. Search Contacts

Search bar at the top of the directory.

Allows filtering contacts by:

Name

Phone Number.

Search is case-insensitive.

4. Edit and Delete Contacts (Bonus)

Edit existing contact details.

Delete a contact with a confirmation prompt.

5. Persistent Storage

Contact data is stored using local storage.

Data persists even after the app is closed or restarted.

6. Error Handling

Displays appropriate error messages for invalid inputs.

Handles empty states (e.g., no contacts added yet).

7. UI/UX Design

Simple and intuitive design.

Built using a design system or component library for consistency.

Technologies Used

React Native: For building the cross-platform mobile application.

React Navigation: For navigation between screens.

Local Storage: For persisting contact data.

TypeScript (Optional): For type safety and better code quality.

FlatList: For rendering large lists efficiently.

Validation Libraries: To ensure valid user input.
